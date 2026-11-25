import SiteLayout from '../../layouts/SiteLayout';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import './NotFound.css';

export default function NotFound() {
  useDocumentTitle('404 — Page not found');

  return (
    <SiteLayout className="not-found">
      {/* astronaut card */}
      <figure className="not-found__card" aria-hidden="true">
        <span className="not-found__starfield" />
        <span className="not-found__astronaut">
          <svg
            viewBox="0 0 160 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* backpack */}
            <rect x="46" y="62" width="68" height="72" rx="10" fill="#2a2a2a" />
            <rect x="50" y="66" width="60" height="64" rx="8" fill="#3a3a3a" />
            {/* suit */}
            <rect x="38" y="56" width="84" height="80" rx="16" fill="#e0e0e0" />
            <rect x="48" y="98" width="24" height="10" rx="4" fill="#b0b0b0" />
            <rect x="88" y="98" width="24" height="10" rx="4" fill="#b0b0b0" />
            {/* chest panel */}
            <rect x="58" y="78" width="44" height="26" rx="5" fill="#1a1a1a" />
            <rect x="62" y="82" width="14" height="6" rx="2" fill="#8E8E93" />
            <rect x="62" y="92" width="8" height="4" rx="2" fill="#fff" />
            <rect x="80" y="82" width="18" height="18" rx="3" fill="#000" />
            <rect x="83" y="85" width="12" height="5" rx="1" fill="#8E8E93" />
            <rect x="83" y="92" width="8" height="3" rx="1" fill="#fff" />
            {/* helmet */}
            <ellipse cx="80" cy="38" rx="36" ry="34" fill="#e0e0e0" />
            <ellipse cx="80" cy="36" rx="28" ry="26" fill="#111" />
            <ellipse cx="72" cy="30" rx="10" ry="8" fill="rgba(255,255,255,.08)" />
            {/* arms */}
            <rect x="14" y="68" width="28" height="16" rx="8" fill="#e0e0e0" />
            <rect x="118" y="68" width="28" height="16" rx="8" fill="#e0e0e0" />
            <ellipse cx="14" cy="76" rx="10" ry="8" fill="#b0b0b0" />
            <ellipse cx="146" cy="76" rx="10" ry="8" fill="#b0b0b0" />
            {/* legs */}
            <rect x="48" y="130" width="22" height="36" rx="8" fill="#e0e0e0" />
            <rect x="90" y="130" width="22" height="36" rx="8" fill="#e0e0e0" />
            {/* boots */}
            <rect x="44" y="158" width="30" height="16" rx="6" fill="#3a3a3a" />
            <rect x="86" y="158" width="30" height="16" rx="6" fill="#3a3a3a" />
          </svg>
        </span>
        <span className="not-found__tether" />
      </figure>

      <h1 className="not-found__code">404</h1>
      <a href="/" className="not-found__btn">
        return to homepage
      </a>
    </SiteLayout>
  );
}
