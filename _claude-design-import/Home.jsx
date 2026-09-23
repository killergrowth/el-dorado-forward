function Home({ go }) {
  const { Button, Card, Stat, ChecklistPanel, VoteNoLockup, Icon } = DS;
  const Step = ({ n, icon, title, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '28px 28px 32px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-1)', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ font: '900 56px/1 var(--font-display)', color: 'var(--edf-green)' }}>{n}</span>
        <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--edf-blue-100)', color: 'var(--edf-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={24} /></span>
      </div>
      <h3 style={{ font: '900 26px/1.1 var(--font-display)', textTransform: 'uppercase', color: 'var(--fg-1)', margin: 0 }}>{title}</h3>
      <p style={{ font: '400 17px/1.5 var(--font-body)', color: 'var(--fg-2)' }}>{children}</p>
    </div>
  );
  return <>
    <section className="edf-hero" style={{ position: 'relative', background: 'var(--edf-navy)', color: '#fff', overflow: 'hidden' }}>
      <div className="edf-hero__photo" role="img" aria-label="ELDO letter sculpture in front of the Ad Astra Per Aspera mural" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 'calc(30% + 112px)', backgroundImage: `url(${photoUrl('eldo-sculpture.png')})`, backgroundSize: 'cover', backgroundPosition: '8% 60%' }} />
      <div className="edf-hero__panel" style={{ position: 'relative', background: 'var(--edf-blue)', clipPath: 'polygon(0 0,calc(100% - 110px) 0,100% 50%,calc(100% - 110px) 100%,0 100%)', width: '70%', padding: '72px 140px 80px max(var(--gutter),calc((100vw - var(--container))/2 + var(--gutter)))', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Eyebrow color="var(--edf-lime)">Tuesday, November 3 · Special Election</Eyebrow>
        <h1 style={{ font: '900 clamp(42px,4.6vw,72px)/0.98 var(--font-display)', maxWidth: 820, textTransform: 'uppercase', letterSpacing: '-0.015em', margin: 0, textWrap: 'balance' }}>A 10-year ban on an entire industry is <span style={{ color: 'var(--edf-lime)' }}>a bad idea.</span></h1>
        <p style={{ font: '500 20px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 680 }}>Companies choose low-risk places to invest. A city that bans an entire industry looks too risky. If this passes, El Dorado's economic future stalls.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <VoteNoLockup size="md" subline={false} />
          <Button variant="action" size="lg" iconRight="arrow-right" onClick={() => window.scrollTo({ top: document.getElementById('short').offsetTop - 70, behavior: 'smooth' })}>The 30-second version</Button>
        </div>
      </div>
      <div style={{ position: 'relative', height: 8, background: 'var(--edf-gradient)' }} />
    </section>

    <Section id="short" pad="var(--space-8)" bg="var(--bg-subtle)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Eyebrow>The 30-second version</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))', gap: 20 }}>
          <Step n="1" icon="ban" title="It bans an entire industry for 10 years">Data centers and battery storage would be prohibited in El Dorado. <strong>Only another public vote can undo it.</strong></Step>
          <Step n="2" icon="shield-alert" title="Companies avoid risky cities">Businesses weigh risk before they invest. A community that bans an entire industry <strong>drops off the short list</strong>, and not just for data centers. <strong>Every kind of business notices.</strong></Step>
          <Step n="3" icon="trending-down" title="Our problems don't fix themselves">High property taxes. Bad roads. Declining population. Without economic development, <strong>none of it improves</strong>.</Step>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', background: 'var(--edf-navy)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px 32px' }}>
          <VoteNoLockup size="sm" subline={false} />
          <p style={{ font: '700 20px/1.35 var(--font-display)', flex: '1 1 320px', margin: 0 }}>Regulate it. Scrutinize it. Negotiate it. <span style={{ color: 'var(--edf-lime)', textTransform: 'uppercase' }}>But don't ban it.</span></p>
          <Button variant="inverse" iconRight="arrow-right" onClick={() => go('ballot')}>Read the ballot question</Button>
        </div>
      </div>
    </Section>

    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Eyebrow>Why it matters</Eyebrow>
          <H2>The next company is watching</H2>
          <P>The next company considering El Dorado may have nothing to do with data centers. When businesses decide where to invest, they look at certainty. Responsiveness. Permitting. <strong>Community support.</strong></P>
          <p style={{ font: '700 20px/1.4 var(--font-body)', color: 'var(--edf-blue)', maxWidth: 560 }}>Because when investment doesn't come, our needs don't disappear.</p>
          <div><Button iconRight="arrow-right" onClick={() => go('why')}>Why this matters for El Dorado</Button></div>
        </div>
        <PhotoSlot src="ballfields-aerial.jpg" label="Aerial of El Dorado ball fields at dusk" pos="center 65%" height={420} />
      </div>
    </Section>

    <Section bg="var(--bg-subtle)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Eyebrow>We don't need a ban</Eyebrow>
          <H2>El Dorado already has rules for this</H2>
          <P>In June 2026 the City adopted zoning rules for data centers and battery storage. <strong>Every project needs a Special Use Permit</strong>: a public hearing, full disclosure of water and power needs, and <strong>the City's right to set conditions or say no</strong>.</P>
          <Src ids={['eldocomm', 'g1463']} more="#regulate" />
          <div><Button variant="secondary" iconRight="arrow-right" onClick={() => go('regulate')}>How the City's rules work</Button></div>
        </div>
        <ChecklistPanel />
      </div>
    </Section>

    <WaterAdvantage />

    <Section bg="var(--bg-subtle)" pad="var(--space-8)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Eyebrow>Property taxes</Eyebrow>
          <H2>Growth can lower your tax bill</H2>
          <P>A large new project spreads the cost of local government across more value. If local governments hold their revenue flat, <strong>mill levies fall for everyone else</strong>. And Kansas's data center law is <strong>a sales tax break, not a property tax break</strong>.</P>
          <div><DS.Button iconRight="arrow-right" onClick={() => go('why')}>See the full example</DS.Button></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 'var(--radius-lg)', padding: '32px 36px' }}>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--fg-2)' }}>Illustrative $1 billion data center</span>
          <span style={{ font: '900 clamp(64px,8vw,104px)/0.9 var(--font-display)', color: 'var(--edf-blue)', letterSpacing: 'var(--tracking-display)' }}>$1,010</span>
          <span style={{ font: '700 20px/1.4 var(--font-body)' }}>a year saved on a $250,000 home</span>
          <span style={{ font: '500 16px/1.45 var(--font-body)', color: 'var(--fg-2)' }}>That's $404 for every $100,000 of home value, assuming $300 million of the project is taxable real property.</span>
        </div>
      </div>
    </Section>

    <Section pad="var(--space-9)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Eyebrow>What's on the ballot</Eyebrow>
          <H2>Four lines in the ordinance, four problems</H2>
          <Src ids={['ballot']} more="#ballot" />
        </div>
        <FourProblems />
      </div>
    </Section>

    <Section bg="var(--bg-subtle)" pad="var(--space-8)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Eyebrow>Want the details?</Eyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[['ballot', 'The ballot question'], ['why', 'Why El Dorado'], ['regulate', 'Regulate vs. ban'], ['impacts', 'Water, power, jobs & taxes'], ['battery', 'Battery storage'], ['communities', 'Other communities'], ['sources', 'All sources']].map(([k, l]) => <Button key={k} variant="secondary" size="sm" iconRight="arrow-right" onClick={() => go(k)}>{l}</Button>)}
        </div>
      </div>
    </Section>
  </>;
}
window.Home = Home;

function WaterAdvantage() {
  return <>
  <section style={{ background: 'var(--edf-navy)', color: '#fff' }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))', gap: 56, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Eyebrow color="var(--edf-lime)">El Dorado Lake</Eyebrow>
        <h2 style={{ font: 'var(--type-h2)', fontSize: 'clamp(40px,4.4vw,60px)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', margin: 0 }}>Water is <span style={{ color: 'var(--edf-lime)' }}>not</span> a problem</h2>
        <p style={{ font: '500 20px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560 }}>El Dorado has one of the biggest water advantages in Kansas. Our lake holds over 50 billion gallons, and the City has 10 million gallons a day set aside for industry.</p>
        <p style={{ font: '700 20px/1.4 var(--font-body)', maxWidth: 560 }}>The headlines about data centers using millions of gallons a day describe evaporative cooling, where water is used up as it cools the building. Many new data centers use <strong>closed-loop systems</strong> instead. The loop is <strong>filled once during construction</strong> and the same water circulates for years. Microsoft says its new closed-loop sites use <strong>about as much water in a year as a single restaurant</strong>.</p>
        <Src tone="dark" ids={['msftZeroWater', 'nadellaRestaurant', 'vantage', 'fwpcoa']} />
        <p style={{ font: '500 18px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560, paddingLeft: 16, borderLeft: '3px solid var(--edf-lime)' }}>For comparison, our refinery already uses an estimated <strong style={{ color: '#fff' }}>4 million gallons or more</strong> a day.</p>
        <Src tone="dark" ids={['hfsRefinery', 'doeRefineryWater']} />
        <p style={{ font: '500 18px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 560, paddingLeft: 16, borderLeft: '3px solid var(--edf-lime)' }}>We also still owe <strong style={{ color: '#fff' }}>$39.8 million</strong> to the U.S. Army Corps of Engineers for our lake storage. That industrial water needs buyers.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}><Src tone="dark" ids={['lakeDebt', 'cityFaq']} /></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 24px' }}>
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--fg-on-dark-2)' }}>Gallons per day</div>
        {[['Closed-loop data center, after initial fill', 0, 'var(--edf-lime)', 'nearly 0'], ['El Dorado refinery today (estimated)', 4, 'var(--edf-green)', '4+ million'], ['Industrial capacity set aside by the City', 10, 'var(--edf-teal)', '10 million'], ['Lake yield in a 50-year drought', 22, '#fff', '22 million']].map(([l, v, c, t]) =>
          <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, font: '500 15px/1.3 var(--font-body)' }}><span>{l}</span><span style={{ font: '900 18px/1 var(--font-display)', color: c }}>{t}</span></div>
            <div style={{ height: 14, background: 'rgba(255,255,255,.08)', borderRadius: 3 }}><div style={{ width: (v / 22 * 100) + '%', minWidth: 10, height: '100%', background: c, borderRadius: 3, transform: 'skewX(var(--skew))', transformOrigin: 'left' }} /></div>
          </div>)}
      </div>
    </div>
  </section>
  </>;
}
function FourProblems() {
  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(460px,100%),1fr))', gap: 20 }}>
      {[
        ['10 years', 'Locked in for a decade', <>Once passed, the City Commission can't adjust it for ten years. <strong>The only fix is another election.</strong> A decade is a long time to hang a "closed" sign on El Dorado while other towns compete for the same investment.</>, ['petitionStmt']],
        ['10 MW', 'The line is drawn very low', <>Florida's incentive law defines a data center at 100 megawatts. This ban starts at <strong>one-tenth of that</strong>, so it reaches far beyond giant AI campuses to smaller server and computing facilities.</>, ['ncslSubsidies']],
        ['100,000', 'Gallons a day is a tiny slice', <>That's <strong>1% of the 10 million gallons a day</strong> the City has set aside for industry. The ban applies <strong>no matter how efficient the cooling design</strong>, and the City already requires water numbers before any approval.</>, ['industrialWater', 'g1463']],
        ['80 kWh', 'It bans batteries, too', <>Battery storage above 80 kWh is prohibited, <strong>not just at data centers</strong>. That covers systems businesses and utilities use for backup power and grid reliability, which national fire codes and the City's permit process already regulate.</>, ['judge', 'nfpa855']],
      ].map(([v, t, b, ids]) => <div key={v} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px,auto) 1fr', gap: 24, alignItems: 'start', padding: 28, background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ font: '900 44px/1 var(--font-display)', color: 'var(--edf-blue)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{v}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h3 style={{ font: '900 20px/1.15 var(--font-display)', textTransform: 'uppercase', margin: 0 }}>{t}</h3>
          <p style={{ font: '400 16px/1.55 var(--font-body)', color: 'var(--fg-2)' }}>{b}</p>
          <Src ids={ids} />
        </div>
      </div>)}
    </div>
  </>;
}
Object.assign(window, { WaterAdvantage, FourProblems });
