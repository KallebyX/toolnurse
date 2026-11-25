import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import pages from '../seo/pages.json';

const siteUrl = 'https://toolnurse.ufn.edu.br';

export default function PageMetadata() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const page = pages[path] || pages['/'];
    const canonical = siteUrl + (page.canonicalPath || path);
    document.title = page.title;
    for (const [attribute, key, content] of [
      ['name', 'description', page.description],
      ['property', 'og:title', page.title],
      ['property', 'og:description', page.description],
      ['property', 'og:url', canonical],
      ['name', 'twitter:title', page.title],
      ['name', 'twitter:description', page.description],
    ]) {
      document.head.querySelector(`meta[${attribute}="${key}"]`)?.setAttribute('content', content);
    }
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);

    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.getElementById('assessment-content')?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}
