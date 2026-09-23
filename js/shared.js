// shared.js — EDF shared React components (converted from Shared.jsx)
// Loaded on every page. Uses real <a href> nav instead of hash routing.

(function() {
  const DS = window.ElDoradoForwardDesignSystem_eb1381;
  const S = window.EDF_SOURCES;

  // Current page detection from URL path
  const pathParts = location.pathname.replace(/\/$/, '').split('/');
  const currentPage = pathParts[pathParts.length - 1] || 'home';

  const PAGES = [
    { value: 'home',        label: 'Home',              href: '/' },
    { value: 'ballot',      label: 'Ballot',            href: '/ballot/' },
    { value: 'why',         label: 'Why El Dorado',     href: '/why/' },
    { value: 'regulate',    label: 'Regulate vs. Ban',  href: '/regulate/' },
    { value: 'impacts',     label: 'Impacts',           href: '/impacts/' },
    { value: 'battery',     label: 'Batteries',         href: '/battery/' },
    { value: 'communities', label: 'Communities',       href: '/communities/' },
    { value: 'sources',     label: 'Sources',           href: '/sources/' },
  ];

  // Navigate helper — uses real hrefs
  window.go = function(pageKey) {
    const p = PAGES.find(x => x.value === pageKey);
    if (p) location.href = p.href;
  };

  // Photo helper
  const PHOTO_BASE = '/images/photos/';
  window.photoUrl = function(f) {
    return (window.__resources && window.__resources['photo-' + f.replace(/\.[a-z]+$/, '')]) || PHOTO_BASE + f;
  };

  // Shared components
  window.Eyebrow = ({ children, color = 'var(--edf-blue)', bar = 'var(--edf-lime)' }) => (
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color } },
      React.createElement('span', { style: { width: 28, height: 8, background: bar, transform: 'skewX(var(--skew))', flex: 'none' } }),
      children
    )
  );

  window.Section = ({ bg = 'var(--bg-page)', children, pad = 'var(--space-9)', id, style }) => (
    React.createElement('section', { id, style: { background: bg, padding: `${pad} 0`, ...style } },
      React.createElement('div', { style: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' } }, children)
    )
  );

  window.H2 = ({ children, style }) => React.createElement('h2', { style: { font: 'var(--type-h2)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', ...style } }, children);
  window.Lead = ({ children, style }) => React.createElement('p', { style: { font: 'var(--type-lead)', color: 'var(--fg-2)', maxWidth: 720, ...style } }, children);
  window.P = ({ children, style }) => React.createElement('p', { style: { color: 'var(--fg-2)', maxWidth: 720, ...style } }, children);
  window.Grid = ({ min = 280, gap = 20, children, style }) => React.createElement('div', { style: { display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(min(${min}px,100%),1fr))`, gap, ...style } }, children);

  window.Src = ({ ids = [], more, tone }) => {
    if (!S) return null;
    const a = S[ids[0]];
    const rest = ids.slice(1).map(k => S[k]).filter(Boolean);
    const c = tone === 'dark' ? 'var(--fg-on-dark-2)' : 'var(--fg-2)';
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
      React.createElement(DS.SourceNote, { tone, source: a && `${a.by}${a.d ? ' · ' + a.d : ''}`, sourceHref: a && a.u, moreHref: more }),
      rest.length > 0 && React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '4px 14px', font: '500 13px/1.4 var(--font-body)', color: c } },
        React.createElement('span', null, 'Also:'),
        ...rest.map(s => React.createElement('a', { key: s.u, href: s.u, target: '_blank', rel: 'noopener', style: { color: c, textDecoration: 'underline', textUnderlineOffset: 2 } }, `${s.by}${s.d ? ' · ' + s.d : ''}`))
      )
    );
  };

  window.StepCard = ({ n, icon, title, children }) => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14, padding: '28px 28px 32px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-1)' } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
      React.createElement('span', { style: { font: '900 56px/1 var(--font-display)', color: 'var(--edf-green)' } }, n),
      React.createElement('span', { style: { width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--edf-blue-100)', color: 'var(--edf-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } },
        React.createElement(DS.Icon, { name: icon, size: 24 })
      )
    ),
    React.createElement('h3', { style: { font: '900 26px/1.1 var(--font-display)', textTransform: 'uppercase', color: 'var(--fg-1)', margin: 0 } }, title),
    React.createElement('p', { style: { font: '400 17px/1.5 var(--font-body)', color: 'var(--fg-2)' } }, children)
  );

  window.ShortVersion = ({ children }) => React.createElement(Section, { pad: 'var(--space-8)', bg: 'var(--bg-subtle)' },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 28 } },
      React.createElement(Eyebrow, null, 'The 30-second version'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))', gap: 20 } }, children)
    )
  );

  window.Pending = ({ note }) => React.createElement(DS.Badge, { tone: 'warning', icon: 'clock', style: { textTransform: 'none', letterSpacing: 0 } }, note || 'Source pending');

  window.PageHead = ({ n, eyebrow, title, lead, depth }) => React.createElement(Section, { bg: 'var(--bg-subtle)', pad: 'var(--space-8)' },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 820 } },
      React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Eyebrow, null, `${n ? n + ' · ' : ''}${eyebrow}`),
        depth && React.createElement(DS.Badge, { tone: 'neutral', icon: 'clock' }, depth)
      ),
      React.createElement('h1', { style: { font: 'var(--type-h1)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)' } }, title),
      lead && React.createElement(Lead, null, lead)
    )
  );

  window.Quote = ({ children, cite, ids }) => React.createElement('figure', { style: { margin: 0, padding: '24px 28px', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', gap: 14 } },
    React.createElement('blockquote', { style: { margin: 0, font: '500 19px/1.5 var(--font-body)', color: 'var(--fg-1)' } }, `"${children}"`),
    React.createElement('figcaption', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      React.createElement('span', { style: { font: '600 14px var(--font-body)' } }, cite),
      ids && React.createElement(Src, { ids })
    )
  );

  window.PhotoSlot = ({ label, src, pos = 'center', chevron = true, height = 360, style }) => src
    ? React.createElement('div', { role: 'img', 'aria-label': label, style: { height, backgroundImage: `url(${photoUrl(src)})`, backgroundSize: 'cover', backgroundPosition: pos, clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none', borderRadius: chevron ? 0 : 'var(--radius-lg)', ...style } })
    : React.createElement('div', { style: { position: 'relative', height, background: 'repeating-linear-gradient(135deg,var(--edf-gray-100) 0 14px,var(--edf-gray-200) 14px 15px)', clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none', borderRadius: chevron ? 0 : 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style } },
        React.createElement('span', { style: { font: '600 13px/1.4 var(--font-body)', color: 'var(--fg-2)', background: 'rgba(255,255,255,.85)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', marginLeft: chevron ? '12%' : 0, textAlign: 'center' } }, `Photo: ${label}`)
      );

  window.NextPage = ({ to, label, title }) => {
    const p = PAGES.find(x => x.value === to);
    return React.createElement(Section, { pad: 'var(--space-7)', style: { borderTop: '1px solid var(--border-1)' } },
      React.createElement('a', { href: p ? p.href : '#', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, textDecoration: 'none', color: 'var(--fg-1)' } },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
          React.createElement(Eyebrow, null, `Next · ${label}`),
          React.createElement('span', { style: { font: 'var(--type-h2)', textTransform: 'uppercase', fontSize: 32 } }, title)
        ),
        React.createElement(DS.IconButton, { icon: 'arrow-right', label: `Go to ${label}`, variant: 'primary', size: 52 })
      )
    );
  };

  window.Pano = ({ src, label, pos = 'center 60%', height = 380, caption }) => React.createElement('figure', { style: { margin: 0, position: 'relative' } },
    React.createElement('div', { role: 'img', 'aria-label': label, style: { height, backgroundImage: `url(${photoUrl(src)})`, backgroundSize: 'cover', backgroundPosition: pos } }),
    caption && React.createElement('figcaption', { style: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: '48px var(--gutter) 20px', background: 'linear-gradient(transparent,rgba(8,48,79,.75))', color: '#fff' } },
      React.createElement('div', { style: { maxWidth: 'var(--container)', margin: '0 auto', font: '900 28px/1.1 var(--font-display)', textTransform: 'uppercase' } }, caption)
    )
  );

  // WaterAdvantage shared section
  window.WaterAdvantage = () => React.createElement('section', { style: { background: 'var(--edf-navy)', color: '#fff' } },
    React.createElement('div', { style: { maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))', gap: 56, alignItems: 'center' } },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 22 } },
        React.createElement(Eyebrow, { color: 'var(--edf-lime)' }, 'El Dorado Lake'),
        React.createElement('h2', { style: { font: 'var(--type-h2)', fontSize: 'clamp(40px,4.4vw,60px)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', margin: 0 } }, 'Water is ', React.createElement('span', { style: { color: 'var(--edf-lime)' } }, 'not'), ' a problem'),
        React.createElement('p', { style: { font: '500 20px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560 } }, "El Dorado has one of the biggest water advantages in Kansas. Our lake holds over 50 billion gallons, and the City has 10 million gallons a day set aside for industry."),
        React.createElement('p', { style: { font: '700 20px/1.4 var(--font-body)', maxWidth: 560 } }, "The headlines about data centers using millions of gallons a day describe evaporative cooling, where water is used up as it cools the building. Many new data centers use ", React.createElement('strong', null, 'closed-loop systems'), " instead. The loop is ", React.createElement('strong', null, 'filled once during construction'), " and the same water circulates for years. Microsoft says its new closed-loop sites use ", React.createElement('strong', null, 'about as much water in a year as a single restaurant'), "."),
        React.createElement(Src, { tone: 'dark', ids: ['msftZeroWater', 'nadellaRestaurant', 'vantage', 'fwpcoa'] }),
        React.createElement('p', { style: { font: '500 18px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560, paddingLeft: 16, borderLeft: '3px solid var(--edf-lime)' } }, "For comparison, our refinery already uses an estimated ", React.createElement('strong', { style: { color: '#fff' } }, '4 million gallons or more'), " a day."),
        React.createElement(Src, { tone: 'dark', ids: ['hfsRefinery', 'doeRefineryWater'] }),
        React.createElement('p', { style: { font: '500 18px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560, paddingLeft: 16, borderLeft: '3px solid var(--edf-lime)' } }, "We also still owe ", React.createElement('strong', { style: { color: '#fff' } }, '$39.8 million'), " to the U.S. Army Corps of Engineers for our lake storage. That industrial water needs buyers."),
        React.createElement('div', { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' } },
          React.createElement(Src, { tone: 'dark', ids: ['lakeDebt', 'cityFaq'] })
        )
      ),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 18, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 24px' } },
        React.createElement('div', { style: { font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--fg-on-dark-2)' } }, 'Gallons per day'),
        ...[
          ['Closed-loop data center, after initial fill', 0, 'var(--edf-lime)', 'nearly 0'],
          ['El Dorado refinery today (estimated)', 4, 'var(--edf-green)', '4+ million'],
          ['Industrial capacity set aside by the City', 10, 'var(--edf-teal)', '10 million'],
          ['Lake yield in a 50-year drought', 22, '#fff', '22 million'],
        ].map(([l, v, c, t]) =>
          React.createElement('div', { key: l, style: { display: 'flex', flexDirection: 'column', gap: 6 } },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', gap: 12, font: '500 15px/1.3 var(--font-body)' } },
              React.createElement('span', null, l),
              React.createElement('span', { style: { font: '900 18px/1 var(--font-display)', color: c } }, t)
            ),
            React.createElement('div', { style: { height: 14, background: 'rgba(255,255,255,.08)', borderRadius: 3 } },
              React.createElement('div', { style: { width: (v / 22 * 100) + '%', minWidth: 10, height: '100%', background: c, borderRadius: 3, transform: 'skewX(var(--skew))', transformOrigin: 'left' } })
            )
          )
        )
      )
    )
  );

  // FourProblems shared section
  window.FourProblems = () => React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(460px,100%),1fr))', gap: 20 } },
    ...[
      ['10 years', 'Locked in for a decade', React.createElement(React.Fragment, null, 'Once passed, the City Commission can\'t adjust it for ten years. ', React.createElement('strong', null, 'The only fix is another election.'), ' A decade is a long time to hang a "closed" sign on El Dorado while other towns compete for the same investment.'), ['petitionStmt']],
      ['10 MW', 'The line is drawn very low', React.createElement(React.Fragment, null, "Florida's incentive law defines a data center at 100 megawatts. This ban starts at ", React.createElement('strong', null, 'one-tenth of that'), ", so it reaches far beyond giant AI campuses to smaller server and computing facilities."), ['ncslSubsidies']],
      ['100,000', 'Gallons a day is a tiny slice', React.createElement(React.Fragment, null, "That's ", React.createElement('strong', null, '1% of the 10 million gallons a day'), " the City has set aside for industry. The ban applies ", React.createElement('strong', null, 'no matter how efficient the cooling design'), ", and the City already requires water numbers before any approval."), ['industrialWater', 'g1463']],
      ['80 kWh', 'It bans batteries, too', React.createElement(React.Fragment, null, 'Battery storage above 80 kWh is prohibited, ', React.createElement('strong', null, 'not just at data centers'), '. That covers systems businesses and utilities use for backup power and grid reliability, which national fire codes and the City\'s permit process already regulate.'), ['judge', 'nfpa855']],
    ].map(([v, t, b, ids]) =>
      React.createElement('div', { key: v, style: { display: 'grid', gridTemplateColumns: 'minmax(120px,auto) 1fr', gap: 24, alignItems: 'start', padding: 28, background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)' } },
        React.createElement('div', { style: { font: '900 44px/1 var(--font-display)', color: 'var(--edf-blue)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' } }, v),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
          React.createElement('h3', { style: { font: '900 20px/1.15 var(--font-display)', textTransform: 'uppercase', margin: 0 } }, t),
          React.createElement('p', { style: { font: '400 16px/1.55 var(--font-body)', color: 'var(--fg-2)' } }, b),
          React.createElement(Src, { ids })
        )
      )
    )
  );

  // Nav header (plain HTML nav — rendered server-side in partials, not React)
  window.EDF_PAGES = PAGES;
  window.EDF_CURRENT_PAGE = currentPage;
})();
