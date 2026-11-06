// Build deployment-specific metadata only when the real public URL is supplied.
export function portfolioSeo(siteUrl = '') {
  let canonical;
  if (siteUrl.trim()) {
    const url = new URL(siteUrl.trim());
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw new Error('SITE_URL must be a public HTTP(S) URL without credentials, query, or fragment.');
    canonical = `${url.href.replace(/\/+$/, '')}/`;
  }
  const xmlEscape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
  const robots = `User-agent: *\nAllow: /\n${canonical ? `\nSitemap: ${canonical}sitemap.xml\n` : ''}`;
  const sitemap = canonical ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${xmlEscape(canonical)}</loc></url></urlset>\n` : null;
  return {
    name: 'portfolio-seo',
    transformIndexHtml() {
      return canonical ? [
        { tag: 'link', attrs: { rel: 'canonical', href: canonical }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: canonical }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: new URL('profile.jpg', canonical).href }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Akash Shinde' }, injectTo: 'head' },
      ] : [];
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0];
        if (path?.endsWith('/robots.txt') || (sitemap && path?.endsWith('/sitemap.xml'))) {
          const isSitemap = path.endsWith('/sitemap.xml');
          res.setHeader('Content-Type', isSitemap ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
          res.end(isSitemap ? sitemap : robots);
        } else next();
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      if (sitemap) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
  };
}
