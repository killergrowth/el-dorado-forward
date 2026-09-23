const DS = window.ElDoradoForwardDesignSystem_eb1381;
const S = window.EDF_SOURCES;
const Eyebrow = ({ children, color = 'var(--edf-blue)', bar = 'var(--edf-lime)' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color }}>
    <span style={{ width: 28, height: 8, background: bar, transform: 'skewX(var(--skew))', flex: 'none' }} />{children}
  </div>
);
const Section = ({ bg = 'var(--bg-page)', children, pad = 'var(--space-9)', id, style }) => (
  <section id={id} style={{ background: bg, padding: `${pad} 0`, ...style }}><div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>{children}</div></section>
);
const H2 = ({ children, style }) => <h2 style={{ font: 'var(--type-h2)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', ...style }}>{children}</h2>;
const Lead = ({ children, style }) => <p style={{ font: 'var(--type-lead)', color: 'var(--fg-2)', maxWidth: 720, ...style }}>{children}</p>;
const P = ({ children, style }) => <p style={{ color: 'var(--fg-2)', maxWidth: 720, ...style }}>{children}</p>;
const Grid = ({ min = 280, gap = 20, children, style }) => <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(min(${min}px,100%),1fr))`, gap, ...style }}>{children}</div>;
const Src = ({ ids = [], more, tone }) => {
  const a = S[ids[0]]; const rest = ids.slice(1).map(k => S[k]).filter(Boolean);
  const c = tone === 'dark' ? 'var(--fg-on-dark-2)' : 'var(--fg-2)';
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <DS.SourceNote tone={tone} source={a && `${a.by}${a.d ? ' · ' + a.d : ''}`} sourceHref={a && a.u} moreHref={more} />
    {rest.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', font: '500 13px/1.4 var(--font-body)', color: c }}>
      <span>Also:</span>{rest.map(s => <a key={s.u} href={s.u} target="_blank" rel="noopener" style={{ color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.by}{s.d ? ' · ' + s.d : ''}</a>)}
    </div>}
  </div>;
};
const StepCard = ({ n, icon, title, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '28px 28px 32px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-1)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ font: '900 56px/1 var(--font-display)', color: 'var(--edf-green)' }}>{n}</span>
      <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--edf-blue-100)', color: 'var(--edf-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><DS.Icon name={icon} size={24} /></span>
    </div>
    <h3 style={{ font: '900 26px/1.1 var(--font-display)', textTransform: 'uppercase', color: 'var(--fg-1)', margin: 0 }}>{title}</h3>
    <p style={{ font: '400 17px/1.5 var(--font-body)', color: 'var(--fg-2)' }}>{children}</p>
  </div>
);
const ShortVersion = ({ children }) => (
  <Section pad="var(--space-8)" bg="var(--bg-subtle)">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <Eyebrow>The 30-second version</Eyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))', gap: 20 }}>{children}</div>
    </div>
  </Section>
);
const Pending = ({ note }) => <DS.Badge tone="warning" icon="clock" style={{ textTransform: 'none', letterSpacing: 0 }}>{note || 'Source pending'}</DS.Badge>;
const PageHead = ({ n, eyebrow, title, lead, depth }) => (
  <Section bg="var(--bg-subtle)" pad="var(--space-8)">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 820 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}><Eyebrow>{n ? `${n} · ` : ''}{eyebrow}</Eyebrow>{depth && <DS.Badge tone="neutral" icon="clock">{depth}</DS.Badge>}</div>
      <h1 style={{ font: 'var(--type-h1)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)' }}>{title}</h1>
      {lead && <Lead>{lead}</Lead>}
    </div>
  </Section>
);
const Quote = ({ children, cite, ids }) => (
  <figure style={{ margin: 0, padding: '24px 28px', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', gap: 14 }}>
    <blockquote style={{ margin: 0, font: '500 19px/1.5 var(--font-body)', color: 'var(--fg-1)' }}>“{children}”</blockquote>
    <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ font: '600 14px var(--font-body)' }}>{cite}</span>{ids && <Src ids={ids} />}</figcaption>
  </figure>
);
// Photo placeholder cropped into the mail's left-pointing chevron.
const PHOTO = './assets/photos/';
const photoUrl = f => (window.__resources && window.__resources['photo-' + f.replace(/\.[a-z]+$/, '')]) || PHOTO + f;
const PhotoSlot = ({ label, src, pos = 'center', chevron = true, height = 360, style }) => src ? (
  <div role="img" aria-label={label} style={{ height, backgroundImage: `url(${photoUrl(src)})`, backgroundSize: 'cover', backgroundPosition: pos, clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none', borderRadius: chevron ? 0 : 'var(--radius-lg)', ...style }} />
) : (
  <div style={{ position: 'relative', height, background: 'repeating-linear-gradient(135deg,var(--edf-gray-100) 0 14px,var(--edf-gray-200) 14px 15px)', clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none', borderRadius: chevron ? 0 : 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
    <span style={{ font: '600 13px/1.4 var(--font-body)', color: 'var(--fg-2)', background: 'rgba(255,255,255,.85)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', marginLeft: chevron ? '12%' : 0, textAlign: 'center' }}>Photo: {label}</span>
  </div>
);
const NextPage = ({ go, to, label, title }) => (
  <Section pad="var(--space-7)" style={{ borderTop: '1px solid var(--border-1)' }}>
    <a href="#" onClick={e => { e.preventDefault(); go(to); }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, textDecoration: 'none', color: 'var(--fg-1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><Eyebrow>Next · {label}</Eyebrow><span style={{ font: 'var(--type-h2)', textTransform: 'uppercase', fontSize: 32 }}>{title}</span></div>
      <DS.IconButton icon="arrow-right" label={`Go to ${label}`} variant="primary" size={52} />
    </a>
  </Section>
);
function Footer({ go, pages }) {
  const lnk = { color: '#fff', textDecoration: 'none', fontSize: 15 };
  return <footer style={{ background: 'var(--edf-navy)', color: '#fff' }}>
    <div style={{ height: 6, background: 'var(--edf-gradient)' }} />
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '56px var(--gutter) 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: 40 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DS.VoteNoLockup size="sm" subline={false} />
        <p style={{ color: 'var(--fg-on-dark-2)', fontSize: 15, maxWidth: 360 }}>The November 3<sup>rd</sup> ordinance will limit El Dorado's future progress.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--fg-on-dark-2)' }}>KEEP MOVING</span><span style={{ font: '900 22px var(--font-display)' }}>eldorado<span style={{ color: 'var(--edf-lime)' }}>forward</span>.com</span></div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--edf-lime)' }}>The issue</div>
        {pages.slice(1).map(p => <a key={p.value} href="#" onClick={e => { e.preventDefault(); go(p.value); }} style={lnk}>{p.label}</a>)}
      </nav>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--edf-lime)' }}>Election Day</div>
        <span style={{ font: '700 20px var(--font-display)' }}>Tuesday, November 3, 2026</span>
        <span style={{ color: 'var(--fg-on-dark-2)', fontSize: 15 }}>Special Question Election, City of El Dorado</span>
      </div>
    </div>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '18px var(--gutter) 28px', borderTop: '1px solid rgba(255,255,255,.14)', fontSize: 13, color: 'var(--fg-on-dark-2)' }}>Paid for by El Dorado Forward, Inc., Linda Jolly, Committee Chair</div>
  </footer>;
}
const Pano = ({ src, label, pos = 'center 60%', height = 380, caption }) => (
  <figure style={{ margin: 0, position: 'relative' }}>
    <div role="img" aria-label={label} style={{ height, backgroundImage: `url(${photoUrl(src)})`, backgroundSize: 'cover', backgroundPosition: pos }} />
    {caption && <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '48px var(--gutter) 20px', background: 'linear-gradient(transparent,rgba(8,48,79,.75))', color: '#fff' }}><div style={{ maxWidth: 'var(--container)', margin: '0 auto', font: '900 28px/1.1 var(--font-display)', textTransform: 'uppercase' }}>{caption}</div></figcaption>}
  </figure>
);
Object.assign(window, { photoUrl, StepCard, ShortVersion, Pending, Pano, DS, S, Eyebrow, Section, H2, Lead, P, Grid, Src, PageHead, Quote, PhotoSlot, NextPage, Footer });
