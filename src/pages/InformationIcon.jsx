import React from 'react';

const paths = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  book: <><path d="M12 7v14M12 7C9 4 5 4 2 5v14c3-1 7-1 10 2 3-3 7-3 10-2V5c-3-1-7-1-10 2Z" /></>,
  clipboard: <><rect x="5" y="5" width="14" height="16" rx="2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="m9 13 2 2 4-4" /></>,
  care: <><path d="M7 3v5a5 5 0 0 0 10 0V3M5 3h4M15 3h4M12 13v3a5 5 0 0 0 10 0v-1" /><circle cx="21" cy="12" r="2" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>,
};

export default function InformationIcon({ name, className }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.info}</svg>;
}
