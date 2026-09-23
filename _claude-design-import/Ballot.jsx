function Ballot({ go }) {
  const { Card, Badge } = DS;
  const defs = [
    ['High Impact Data Center', '“server farms, colocation facilities, AI training facilities, cryptocurrency mining operations, and similar high-density computing facilities requiring a peak electrical load exceeding ten megawatts, or a daily water draw exceeding one hundred thousand (100,000) gallons.”'],
    ['Tier 2 BESS', '“an aggregate energy storage capacity between 81 and 600 kilowatt-hours (kWh) or is comprised of more than one energy storage system technology in a room or enclosed area.”'],
    ['Tier 3 BESS', '“an aggregate energy capacity greater than 600 kWh and, if in a room or enclosed area, consists of only one energy storage system technology.”'],
  ];
  const timeline = [
    ['Early 2026', 'City identifies that its zoning code has no special-use requirements for 16 emerging industries, from data centers and battery storage to advanced manufacturing and small modular reactors.', null],
    ['Feb 26, 2026', 'City staff recommend clear standards plus Special Use Permit review, rather than no rules or a ban.', 'pcFeb'],
    ['Mar 26, 2026', 'Planning Commission holds a special hearing and votes unanimously to table until April to verify claims made in public comment.', 'pcMar'],
    ['Apr 23, 2026', 'Planning Commission votes 6–0 to recommend the emerging-industries regulations, with stronger safeguards on setbacks, utilities, hazardous materials, and decommissioning.', 'pcApr'],
    ['May 22, 2026', 'City says its zoning code does not define or regulate data centers and begins work on a regulatory framework.', 'zoningStmt'],
    ['Jun 1, 2026', 'City Commission hears from citizens and votes 5–0 to adopt Ordinance G-1463. Data centers and battery storage now require a Special Use Permit, which can be denied.', 'ccJun'],
    ['Jun 22, 2026', 'City receives a citizen-initiated petition under K.S.A. 12-3013.', 'petitionStmt'],
    ['Jun 25, 2026', 'Butler County Clerk certifies the petition.', 'petitionStmt'],
    ['Jul 13, 2026', 'City Commission votes 5–0 to seek a declaratory judgment, and 4–1 to adopt a moratorium on the covered uses through Nov 30, 2026. No data center project had been submitted.', 'ccJul'],
    ['Aug 21, 2026', 'District Court (Judge Satterfield) rules the petition is legislative and may proceed. The ruling addressed process, not the merits.', 'judge'],
    ['Aug 2026', 'City Commission votes 5–0 to send the ordinance to voters rather than adopt it directly.', 'ccAug'],
    ['Aug 31, 2026', 'Official ballot language published.', 'ballot'],
    ['Nov 3, 2026', 'General election. The question is on the ballot.', null],
  ];
  return <>
    <PageHead n="1" eyebrow="What are we voting on?" depth="2 min read" title="The ballot question" lead="Start with the proposition itself. Everything below is quoted from City of El Dorado documents." />
    <Section pad="var(--space-8)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 860 }}>
        <Eyebrow>Exact ballot language</Eyebrow>
        <div style={{ background: '#fff', border: '2px solid var(--edf-blue)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ font: '700 15px var(--font-body)', color: 'var(--edf-blue)' }}>Shall the following be adopted:</span>
          <p style={{ font: '400 19px/1.6 var(--font-body)', color: 'var(--fg-1)' }}>“An Ordinance of the City of El Dorado, Kansas, prohibiting the installation and operation of High Impact Data Centers (defined as data centers with a peak electrical load exceeding ten (10) megawatts, or a daily water draw exceeding one hundred thousand (100,000) gallons) and Tier 2 and Tier 3 battery energy storage systems (defined as systems with an aggregate energy capacity greater than 80kWh). If adopted, this Ordinance shall remain in effect for ten (10) years and may not be repealed or amended during that period except by a vote of the electors.”</p>
        </div>
        <Src ids={['ballot', 'petitionPdf']} />
      </div>
    </Section>
    <Section bg="var(--edf-blue)" pad="var(--space-8)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: 48, alignItems: 'center', color: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Eyebrow color="var(--edf-lime)">Our answer to this question</Eyebrow>
          <h2 style={{ font: 'var(--type-h2)', fontSize: 'clamp(72px,11vw,160px)', lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', margin: 0 }}>Vote <span style={{ color: 'var(--edf-lime)' }}>No</span></h2>
          <p style={{ font: '500 20px/1.45 var(--font-body)', color: 'var(--fg-on-dark-2)', maxWidth: 520, margin: 0 }}>A No vote keeps the rules El Dorado already adopted. Every data center and battery project still needs a Special Use Permit, public hearings, and conditions set project by project, and <strong style={{ color: '#fff' }}>the City can still say no</strong>.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, background: '#fff', color: 'var(--fg-1)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', maxWidth: 360, width: '100%', justifySelf: 'center' }}>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--fg-2)' }}>Nov 3 ballot</span>
          {[['Yes', false], ['No', true]].map(([l, on]) => <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 16, font: '900 32px/1 var(--font-display)', textTransform: 'uppercase', color: on ? 'var(--edf-blue)' : 'var(--fg-3, #999)' }}>
            <span style={{ width: 40, height: 26, borderRadius: '50%', border: '3px solid ' + (on ? 'var(--edf-blue)' : 'currentColor'), background: on ? 'var(--edf-blue)' : 'transparent', flexShrink: 0 }}></span>{l}
          </div>)}
        </div>
      </div>
    </Section>
    <Section bg="var(--bg-subtle)" pad="var(--space-8)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><Eyebrow>What it means</Eyebrow><H2 style={{ fontSize: 36 }}>Four lines in the ordinance, four problems</H2></div>
        <FourProblems />
      </div>
    </Section>
    <Section pad="var(--space-8)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow>Definitions in the ordinance</Eyebrow>
        <Grid min={300}>{defs.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}</Grid>
        <Src ids={['petitionStmt', 'judge']} more="#battery" />
      </div>
    </Section>
    <Section bg="var(--bg-subtle)" pad="var(--space-8)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(360px,100%),1fr))', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Eyebrow>The 10-year lock</Eyebrow>
          <H2 style={{ fontSize: 36 }}>Only voters can change it</H2>
          <P>If adopted as written, <strong>the City Commission cannot amend or repeal the ordinance for ten years</strong>. The only way to change it before then is another ballot question approved by voters.</P>
          <Src ids={['petitionStmt']} />
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
          <li style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--edf-blue)', marginBottom: 12 }}>How it reached the ballot</li>
          {timeline.map(([d, t, id], i) => <li key={d} style={{ display: 'grid', gridTemplateColumns: '112px 1fr', gap: 16, padding: '14px 0', borderTop: '1px solid var(--border-1)' }}>
            <span style={{ font: '700 14px/1.4 var(--font-body)', color: i === timeline.length - 1 ? 'var(--edf-green-700)' : 'var(--edf-blue)' }}>{d}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 16, lineHeight: 1.5 }}>{t}</span>{id && <Src ids={[id]} />}</div>
          </li>)}
        </ol>
      </div>
    </Section>
    <NextPage go={go} to="why" label="2 · Why El Dorado" title="Why is this an El Dorado issue?" />
  </>;
}
window.Ballot = Ballot;
