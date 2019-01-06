import React, { lazy } from "react";

function ExternalLink({ url, ...rest }) {
  // For rel="noreferrer", refer to
  // https://developers.google.com/web/tools/lighthouse/audits/noopener#recommendations
  return (
    <a
      href={url}
      onClick={e => e.stopPropagation()}
      target="_blank"
      rel="noreferrer"
      {...rest}
    />
  );
}

const lazyImport = uri => lazy(() => import(uri));

export { ExternalLink, lazyImport };
