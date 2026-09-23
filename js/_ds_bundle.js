/* @ds-bundle: {"format":4,"namespace":"ElDoradoForwardDesignSystem_eb1381","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"ChecklistPanel","sourcePath":"components/campaign/ChecklistPanel.jsx"},{"name":"SourceNote","sourcePath":"components/campaign/SourceNote.jsx"},{"name":"VoteNoLockup","sourcePath":"components/campaign/VoteNoLockup.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Icon","sourcePath":"components/content/Icon.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"059a635360b5","components/actions/IconButton.jsx":"c25c4fb5c641","components/campaign/ChecklistPanel.jsx":"fd46dd0e70c8","components/campaign/SourceNote.jsx":"c2c69b0b13ad","components/campaign/VoteNoLockup.jsx":"793b81bf92c5","components/content/Accordion.jsx":"132365821a2c","components/content/Badge.jsx":"e587591e9c07","components/content/Card.jsx":"f9104af398c0","components/content/Icon.jsx":"5d704e997968","components/content/Stat.jsx":"dd8fdde9849e","components/feedback/Dialog.jsx":"00af2912ad98","components/feedback/Toast.jsx":"5657f2e40f8b","components/feedback/Tooltip.jsx":"0c96489719e9","components/forms/Checkbox.jsx":"5c993059c84a","components/forms/Input.jsx":"b74aba011566","components/forms/Radio.jsx":"4eb9ccb54d0a","components/forms/Select.jsx":"eece3e1bd832","components/navigation/SiteHeader.jsx":"b4c61197fc10","components/navigation/Tabs.jsx":"9568e1e62df6","ui_kits/website/Ballot.jsx":"7c16a4c49b06","ui_kits/website/Battery.jsx":"0493edea6f74","ui_kits/website/Communities.jsx":"36a4e475cda6","ui_kits/website/Home.jsx":"b133bcaaa37b","ui_kits/website/Impacts.jsx":"7ace079bf2c3","ui_kits/website/Regulate.jsx":"3f7827d7c464","ui_kits/website/Shared.jsx":"9a6295d20560","ui_kits/website/Sources.jsx":"b67673019803","ui_kits/website/Why.jsx":"d7409a14211d","ui_kits/website/_archive/Home-v1.jsx":"3cb317c80b6d","ui_kits/website/data.js":"388f32dc7541","ui_kits/website/icons.js":"39e6894c2f5d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElDoradoForwardDesignSystem_eb1381 = window.ElDoradoForwardDesignSystem_eb1381 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cache = {};
const pre = name => typeof window !== 'undefined' && window.__LUCIDE_ICONS && window.__LUCIDE_ICONS[name] || '';
const load = name => pre(name) ? Promise.resolve(pre(name)) : cache[name] || (cache[name] = fetch(`https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`).then(r => r.ok ? r.text() : '').then(t => t.replace(/<!--[\s\S]*?-->/g, '').replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"').replace(/class="[^"]*"/, '')).catch(() => ''));
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(pre(name) || cache[name + ':v'] || '');
  React.useEffect(() => {
    let on = true;
    load(name).then(t => {
      cache[name + ':v'] = t;
      on && setSvg(t);
    });
    return () => {
      on = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 36,
    px: 14,
    fs: 14
  },
  md: {
    h: 46,
    px: 20,
    fs: 15
  },
  lg: {
    h: 56,
    px: 28,
    fs: 17
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--edf-blue)',
    fg: '#fff',
    bd: 'var(--edf-blue)',
    hbg: 'var(--edf-blue-700)'
  },
  action: {
    bg: 'var(--edf-lime)',
    fg: 'var(--edf-navy)',
    bd: 'var(--edf-lime)',
    hbg: 'var(--accent-action-hover)'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--edf-blue)',
    bd: 'var(--edf-blue)',
    hbg: 'var(--edf-blue-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--edf-blue)',
    bd: 'transparent',
    hbg: 'var(--edf-blue-100)'
  },
  inverse: {
    bg: '#fff',
    fg: 'var(--edf-blue)',
    bd: '#fff',
    hbg: 'var(--edf-lime-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  as = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size],
    v = VARIANTS[variant];
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      font: `600 ${s.fs}px/1 var(--font-body)`,
      letterSpacing: '0.01em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: hover && !disabled ? v.hbg : v.bg,
      color: v.fg,
      border: `2px solid ${v.bd}`,
      borderRadius: 'var(--radius-md)',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 3
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 40,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const map = {
    ghost: ['transparent', 'var(--edf-blue)', 'var(--edf-blue-100)'],
    primary: ['var(--edf-blue)', '#fff', 'var(--edf-blue-700)'],
    inverse: ['rgba(255,255,255,.12)', '#fff', 'rgba(255,255,255,.22)']
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: hover ? map[2] : map[0],
      color: map[1],
      transition: 'background var(--dur-fast)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/campaign/ChecklistPanel.jsx
try { (() => {
const DEFAULT = ['Regulate it.', 'Scrutinize it.', 'Negotiate it.', 'Benefits El Dorado.'];
function ChecklistPanel({
  items = DEFAULT,
  final = "But don't ban it.",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--edf-blue)',
      color: '#fff',
      padding: '32px 32px 36px',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 22px/1.05 var(--font-display)'
    }
  }, "This isn't about"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 40px/0.95 var(--font-display)',
      color: 'var(--edf-lime)'
    }
  }, "Approving"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 22px/1.05 var(--font-display)'
    }
  }, "every project")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: '500 17px/1.3 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "square-check",
    size: 20,
    color: "#fff"
  }), t)), final && /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: '900 18px/1.3 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "square-check",
    size: 20,
    color: "var(--edf-lime)"
  }), final)));
}
Object.assign(__ds_scope, { ChecklistPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/ChecklistPanel.jsx", error: String((e && e.message) || e) }); }

// components/campaign/SourceNote.jsx
try { (() => {
const link = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  color: 'var(--edf-blue)',
  font: '600 13px/1 var(--font-body)',
  textDecoration: 'none'
};
function SourceNote({
  source,
  sourceHref,
  dataHref,
  moreHref,
  tone = 'light',
  style
}) {
  const c = tone === 'dark' ? {
    color: 'var(--edf-lime)'
  } : {};
  const sep = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 12,
      background: tone === 'dark' ? 'rgba(255,255,255,.3)' : 'var(--border-1)'
    }
  });
  const items = [sourceHref && ['file-text', 'Source', sourceHref], dataHref && ['chart-no-axes-column', 'See the data', dataHref], moreHref && ['arrow-right', 'Learn more', moreHref]].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, source && /*#__PURE__*/React.createElement("span", {
    key: "s",
    style: {
      font: '400 13px/1.4 var(--font-body)',
      color: tone === 'dark' ? 'var(--fg-on-dark-2)' : 'var(--fg-2)'
    }
  }, source), items.map(([ic, l, h], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, i > 0 && sep, /*#__PURE__*/React.createElement("a", {
    href: h,
    target: h.startsWith('#') ? undefined : '_blank',
    rel: "noreferrer",
    style: {
      ...link,
      ...c
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 14
  }), l))));
}
Object.assign(__ds_scope, { SourceNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/SourceNote.jsx", error: String((e && e.message) || e) }); }

// components/campaign/VoteNoLockup.jsx
try { (() => {
function VoteNoLockup({
  size = 'lg',
  tone = 'dark',
  subline = true,
  style
}) {
  const S = {
    sm: [40, 44, 16, 30],
    md: [64, 72, 22, 44],
    lg: [96, 108, 30, 64]
  }[size];
  const ink = tone === 'dark' ? '#fff' : 'var(--edf-ink)';
  const accent = tone === 'dark' ? 'var(--edf-lime)' : 'var(--edf-green-700)';
  const sub = tone === 'dark' ? 'rgba(255,255,255,.35)' : 'var(--border-1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: S[2] * 0.6,
      color: ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: S[2] * 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "square-check-big",
    size: S[1],
    color: accent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `900 ${S[0]}px/0.9 var(--font-display)`,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase'
    }
  }, "Vote ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "No"))), subline && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: sub
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${S[2]}px/1 var(--font-display)`
    }
  }, "November 3", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: '.55em'
    }
  }, "rd"), " Ordinance"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `900 ${S[3]}px/0.92 var(--font-display)`,
      letterSpacing: '-0.01em'
    }
  }, "Will ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "Limit")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${S[2]}px/1 var(--font-display)`
    }
  }, "El Dorado's Future Progress"))));
}
Object.assign(__ds_scope, { VoteNoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/campaign/VoteNoLockup.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-1)',
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-1)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '20px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        font: '700 18px/1.35 var(--font-display)',
        color: on ? 'var(--edf-blue)' : 'var(--fg-1)'
      }
    }, it.q, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? 'minus' : 'plus',
      size: 20,
      color: "var(--edf-blue)"
    })), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 40px 22px 0',
        font: '400 16px/1.6 var(--font-body)',
        color: 'var(--fg-2)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
const TONES = {
  blue: ['var(--edf-blue-100)', 'var(--edf-blue)'],
  green: ['var(--edf-green-100)', 'var(--edf-green-700)'],
  lime: ['var(--edf-lime)', 'var(--edf-navy)'],
  neutral: ['var(--surface-sunken)', 'var(--fg-1)'],
  danger: ['var(--edf-danger-100)', 'var(--edf-danger)'],
  warning: ['var(--edf-warning-100)', '#8a5d05'],
  dark: ['var(--edf-navy)', '#fff']
};
function Badge({
  tone = 'blue',
  icon,
  children,
  style
}) {
  const [bg, fg] = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      font: '700 12px/1 var(--font-body)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  icon,
  footer,
  tone = 'default',
  interactive,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'blue' || tone === 'navy';
  const bg = {
    default: 'var(--surface-card)',
    paper: 'var(--bg-subtle)',
    blue: 'var(--edf-blue)',
    navy: 'var(--edf-navy)',
    lime: 'var(--edf-lime-100)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 28,
      background: bg,
      color: dark ? '#fff' : 'var(--fg-1)',
      border: tone === 'default' ? '1px solid var(--border-1)' : '1px solid transparent',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-3)' : tone === 'default' ? 'var(--shadow-1)' : 'none',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: dark ? 'rgba(255,255,255,.12)' : 'var(--edf-blue-100)',
      color: dark ? 'var(--edf-lime)' : 'var(--edf-blue)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--edf-lime)' : 'var(--edf-green-700)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      color: dark ? 'var(--fg-on-dark-2)' : 'var(--fg-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  source,
  tone = 'blue',
  style
}) {
  const color = {
    blue: 'var(--edf-blue)',
    green: 'var(--edf-green)',
    gradient: 'transparent',
    light: '#fff'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 56px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      color,
      ...(tone === 'gradient' ? {
        background: 'var(--edf-gradient)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
      } : {})
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px/1.4 var(--font-body)',
      color: tone === 'light' ? '#fff' : 'var(--fg-1)'
    }
  }, label), source && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-body)',
      color: tone === 'light' ? 'var(--fg-on-dark-2)' : 'var(--fg-2)'
    }
  }, "Source: ", source));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(8,48,79,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--edf-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      padding: 4,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 6
    }
  }, actions))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  title,
  children,
  onClose,
  style
}) {
  const c = {
    success: ['var(--edf-green)', 'circle-check'],
    info: ['var(--edf-blue)', 'info'],
    warning: ['var(--edf-warning)', 'triangle-alert'],
    danger: ['var(--edf-danger)', 'circle-alert']
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--edf-navy)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c[1],
    size: 20,
    color: tone === 'success' ? 'var(--edf-lime)' : c[0],
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.3 var(--font-body)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      color: '#fff',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: 'calc(100% + 8px)'
  } : {
    top: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 50,
      width: 'max-content',
      maxWidth: 260,
      padding: '8px 12px',
      background: 'var(--edf-navy)',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      font: '400 13px/1.4 var(--font-body)',
      boxShadow: 'var(--shadow-2)',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: '400 16px/1.4 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 1,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${on ? 'var(--edf-blue)' : 'var(--edf-gray-400)'}`,
      background: on ? 'var(--edf-blue)' : '#fff',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldLabel = {
  display: 'block',
  font: '600 14px/1.3 var(--font-body)',
  color: 'var(--fg-1)',
  marginBottom: 6
};
const fieldHint = err => ({
  font: '400 13px/1.4 var(--font-body)',
  color: err ? 'var(--edf-danger)' : 'var(--fg-2)',
  marginTop: 6
});
const fieldBox = (focus, err, disabled) => ({
  width: '100%',
  height: 48,
  padding: '0 14px',
  font: '400 16px var(--font-body)',
  color: 'var(--fg-1)',
  background: disabled ? 'var(--surface-sunken)' : '#fff',
  border: `2px solid ${err ? 'var(--edf-danger)' : focus ? 'var(--edf-blue)' : 'var(--border-1)'}`,
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--focus-ring)' : 'none',
  transition: 'border-color var(--dur-fast)'
});
function Input({
  label,
  hint,
  error,
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: fieldLabel
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldBox(focus, error, disabled)
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: fieldHint(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  label,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-body)'
    }
  }, label), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        cursor: 'pointer',
        font: '400 16px var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: `2px solid ${on ? 'var(--edf-blue)' : 'var(--edf-gray-400)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--edf-blue)'
      }
    })), l);
  }));
}
const Radio = RadioGroup;
Object.assign(__ds_scope, { RadioGroup, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldLabel = {
  display: 'block',
  font: '600 14px/1.3 var(--font-body)',
  color: 'var(--fg-1)',
  marginBottom: 6
};
const fieldHint = err => ({
  font: '400 13px/1.4 var(--font-body)',
  color: err ? 'var(--edf-danger)' : 'var(--fg-2)',
  marginTop: 6
});
const fieldBox = (focus, err, disabled) => ({
  width: '100%',
  height: 48,
  padding: '0 14px',
  font: '400 16px var(--font-body)',
  color: 'var(--fg-1)',
  background: disabled ? 'var(--surface-sunken)' : '#fff',
  border: `2px solid ${err ? 'var(--edf-danger)' : focus ? 'var(--edf-blue)' : 'var(--border-1)'}`,
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--focus-ring)' : 'none',
  transition: 'border-color var(--dur-fast)'
});
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: fieldLabel
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBox(focus, error, disabled),
      appearance: 'none',
      paddingRight: 40,
      cursor: 'pointer'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--fg-2)",
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: fieldHint(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  links = [],
  active,
  onNavigate,
  cta = 'Vote No · Nov 3',
  onCta,
  homeValue = 'home',
  logoSrc = 'assets/logo-full-color.png',
  collapseAt = 1180
}) {
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < collapseAt);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => {
      const n = window.innerWidth < collapseAt;
      setNarrow(n);
      if (!n) setOpen(false);
    };
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, [collapseAt]);
  const nav = v => {
    setOpen(false);
    onNavigate && onNavigate(v);
  };
  const item = (l, stacked) => {
    const v = l.value ?? l,
      lb = l.label ?? l,
      on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#",
      onClick: e => {
        e.preventDefault();
        nav(v);
      },
      style: {
        padding: stacked ? '14px 16px' : '9px 11px',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        font: `600 ${stacked ? 17 : 14}px var(--font-body)`,
        whiteSpace: 'nowrap',
        color: on ? 'var(--edf-blue)' : 'var(--fg-1)',
        background: on ? 'var(--edf-blue-100)' : 'transparent'
      }
    }, lb);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '12px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav(homeValue);
    },
    style: {
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "El Dorado Forward",
    style: {
      height: 58,
      display: 'block'
    }
  })), !narrow && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 2,
      marginLeft: 'auto',
      flexWrap: 'nowrap'
    }
  }, links.map(l => item(l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginLeft: narrow ? 'auto' : 0,
      flex: 'none'
    }
  }, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "action",
    size: "sm",
    onClick: onCta,
    style: {
      textTransform: 'uppercase',
      fontWeight: 800,
      letterSpacing: '.04em'
    }
  }, cta), narrow && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: open ? 'x' : 'menu',
    label: open ? 'Close menu' : 'Open menu',
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }))), narrow && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: '1px solid var(--border-1)',
      background: '#fff',
      padding: '8px var(--gutter) 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, links.map(l => item(l, true))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '2px solid var(--border-1)',
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t,
      l = t.label ?? t,
      on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        position: 'relative',
        padding: '12px 16px',
        marginBottom: -2,
        background: 'none',
        border: 0,
        borderBottom: `3px solid ${on ? 'var(--edf-lime)' : 'transparent'}`,
        cursor: 'pointer',
        font: '600 15px var(--font-body)',
        color: on ? 'var(--edf-blue)' : 'var(--fg-2)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Ballot.jsx
try { (() => {
function Ballot({
  go
}) {
  const {
    Card,
    Badge
  } = DS;
  const defs = [['High Impact Data Center', '“server farms, colocation facilities, AI training facilities, cryptocurrency mining operations, and similar high-density computing facilities requiring a peak electrical load exceeding ten megawatts, or a daily water draw exceeding one hundred thousand (100,000) gallons.”'], ['Tier 2 BESS', '“an aggregate energy storage capacity between 81 and 600 kilowatt-hours (kWh) or is comprised of more than one energy storage system technology in a room or enclosed area.”'], ['Tier 3 BESS', '“an aggregate energy capacity greater than 600 kWh and, if in a room or enclosed area, consists of only one energy storage system technology.”']];
  const timeline = [['Early 2026', 'City identifies that its zoning code has no special-use requirements for 16 emerging industries, from data centers and battery storage to advanced manufacturing and small modular reactors.', null], ['Feb 26, 2026', 'City staff recommend clear standards plus Special Use Permit review, rather than no rules or a ban.', 'pcFeb'], ['Mar 26, 2026', 'Planning Commission holds a special hearing and votes unanimously to table until April to verify claims made in public comment.', 'pcMar'], ['Apr 23, 2026', 'Planning Commission votes 6–0 to recommend the emerging-industries regulations, with stronger safeguards on setbacks, utilities, hazardous materials, and decommissioning.', 'pcApr'], ['May 22, 2026', 'City says its zoning code does not define or regulate data centers and begins work on a regulatory framework.', 'zoningStmt'], ['Jun 1, 2026', 'City Commission hears from citizens and votes 5–0 to adopt Ordinance G-1463. Data centers and battery storage now require a Special Use Permit, which can be denied.', 'ccJun'], ['Jun 22, 2026', 'City receives a citizen-initiated petition under K.S.A. 12-3013.', 'petitionStmt'], ['Jun 25, 2026', 'Butler County Clerk certifies the petition.', 'petitionStmt'], ['Jul 13, 2026', 'City Commission votes 5–0 to seek a declaratory judgment, and 4–1 to adopt a moratorium on the covered uses through Nov 30, 2026. No data center project had been submitted.', 'ccJul'], ['Aug 21, 2026', 'District Court (Judge Satterfield) rules the petition is legislative and may proceed. The ruling addressed process, not the merits.', 'judge'], ['Aug 2026', 'City Commission votes 5–0 to send the ordinance to voters rather than adopt it directly.', 'ccAug'], ['Aug 31, 2026', 'Official ballot language published.', 'ballot'], ['Nov 3, 2026', 'General election. The question is on the ballot.', null]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "1",
    eyebrow: "What are we voting on?",
    depth: "2 min read",
    title: "The ballot question",
    lead: "Start with the proposition itself. Everything below is quoted from City of El Dorado documents."
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Exact ballot language"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '2px solid var(--edf-blue)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px var(--font-body)',
      color: 'var(--edf-blue)'
    }
  }, "Shall the following be adopted:"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 19px/1.6 var(--font-body)',
      color: 'var(--fg-1)'
    }
  }, "\u201CAn Ordinance of the City of El Dorado, Kansas, prohibiting the installation and operation of High Impact Data Centers (defined as data centers with a peak electrical load exceeding ten (10) megawatts, or a daily water draw exceeding one hundred thousand (100,000) gallons) and Tier 2 and Tier 3 battery energy storage systems (defined as systems with an aggregate energy capacity greater than 80kWh). If adopted, this Ordinance shall remain in effect for ten (10) years and may not be repealed or amended during that period except by a vote of the electors.\u201D")), /*#__PURE__*/React.createElement(Src, {
    ids: ['ballot', 'petitionPdf']
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--edf-blue)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))',
      gap: 48,
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--edf-lime)"
  }, "Our answer to this question"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      fontSize: 'clamp(72px,11vw,160px)',
      lineHeight: 0.9,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      margin: 0
    }
  }, "Vote ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--edf-lime)'
    }
  }, "No")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 20px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      maxWidth: 520,
      margin: 0
    }
  }, "A No vote keeps the rules El Dorado already adopted. Every data center and battery project still needs a Special Use Permit, public hearings, and conditions set project by project, and ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "the City can still say no"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: '#fff',
      color: 'var(--fg-1)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 32px',
      maxWidth: 360,
      width: '100%',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)'
    }
  }, "Nov 3 ballot"), [['Yes', false], ['No', true]].map(([l, on]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      font: '900 32px/1 var(--font-display)',
      textTransform: 'uppercase',
      color: on ? 'var(--edf-blue)' : 'var(--fg-3, #999)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 26,
      borderRadius: '50%',
      border: '3px solid ' + (on ? 'var(--edf-blue)' : 'currentColor'),
      background: on ? 'var(--edf-blue)' : 'transparent',
      flexShrink: 0
    }
  }), l))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What it means"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 36
    }
  }, "Four lines in the ordinance, four problems")), /*#__PURE__*/React.createElement(FourProblems, null))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Definitions in the ordinance"), /*#__PURE__*/React.createElement(Grid, {
    min: 300
  }, defs.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    title: t
  }, d))), /*#__PURE__*/React.createElement(Src, {
    ids: ['petitionStmt', 'judge'],
    more: "#battery"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(360px,100%),1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The 10-year lock"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 36
    }
  }, "Only voters can change it"), /*#__PURE__*/React.createElement(P, null, "If adopted as written, ", /*#__PURE__*/React.createElement("strong", null, "the City Commission cannot amend or repeal the ordinance for ten years"), ". The only way to change it before then is another ballot question approved by voters."), /*#__PURE__*/React.createElement(Src, {
    ids: ['petitionStmt']
  })), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--edf-blue)',
      marginBottom: 12
    }
  }, "How it reached the ballot"), timeline.map(([d, t, id], i) => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      display: 'grid',
      gridTemplateColumns: '112px 1fr',
      gap: 16,
      padding: '14px 0',
      borderTop: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px/1.4 var(--font-body)',
      color: i === timeline.length - 1 ? 'var(--edf-green-700)' : 'var(--edf-blue)'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.5
    }
  }, t), id && /*#__PURE__*/React.createElement(Src, {
    ids: [id]
  }))))))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "why",
    label: "2 \xB7 Why El Dorado",
    title: "Why is this an El Dorado issue?"
  }));
}
window.Ballot = Ballot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Ballot.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Battery.jsx
try { (() => {
function Battery({
  go
}) {
  const {
    Card,
    Stat
  } = DS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "5",
    eyebrow: "Battery energy storage",
    depth: "3 min read",
    title: "What else does the ordinance cover?",
    lead: "The ban is not only about data centers. It also prohibits Tier 2 and Tier 3 battery energy storage systems (BESS) for ten years."
  }), /*#__PURE__*/React.createElement(ShortVersion, null, /*#__PURE__*/React.createElement(StepCard, {
    n: "1",
    icon: "battery-charging",
    title: "It's not just data centers"
  }, "The ordinance also bans ", /*#__PURE__*/React.createElement("strong", null, "battery storage above 80 kWh"), " anywhere in the city, for 10 years."), /*#__PURE__*/React.createElement(StepCard, {
    n: "2",
    icon: "building",
    title: "Businesses use batteries"
  }, "Utilities and businesses use them for ", /*#__PURE__*/React.createElement("strong", null, "backup power, peak demand and grid reliability"), "."), /*#__PURE__*/React.createElement(StepCard, {
    n: "3",
    icon: "flame",
    title: "Safety rules already exist"
  }, "National fire code ", /*#__PURE__*/React.createElement("strong", null, "NFPA 855"), " covers installation through decommissioning."), /*#__PURE__*/React.createElement(StepCard, {
    n: "4",
    icon: "shield-check",
    title: "We already regulate them"
  }, "G-1463 requires a ", /*#__PURE__*/React.createElement("strong", null, "Special Use Permit"), " for battery storage, with hazardous-materials and emergency-access standards.")), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What is a BESS?"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, "Batteries that store electricity"), /*#__PURE__*/React.createElement(P, null, "A battery energy storage system ", /*#__PURE__*/React.createElement("strong", null, "stores electricity and releases it later"), ". Utilities and businesses use them to manage peak demand, back up critical loads, and support grid reliability. NACo's primer covers the technology, grid uses, siting, safety, and the options local governments have."), /*#__PURE__*/React.createElement(Src, {
    ids: ['nacoBess']
  })), /*#__PURE__*/React.createElement(Grid, {
    min: 200,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "> 80 kWh",
    label: "Any system above this aggregate capacity is banned"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['ballot']
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "81\u2013600",
    tone: "green",
    label: "kWh range for Tier 2, or mixed technologies in one room"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['judge']
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "> 600 kWh",
    label: "Tier 3: a single technology above 600 kWh"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['judge']
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Grid, {
    min: 320,
    gap: 20
  }, /*#__PURE__*/React.createElement(Card, {
    icon: "flame",
    eyebrow: "Fire & life safety",
    title: "A national standard already exists"
  }, /*#__PURE__*/React.createElement("strong", null, "NFPA 855"), " covers installation, commissioning, operation, maintenance, and decommissioning of stationary energy storage, including hazards and firefighting considerations.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Src, {
    ids: ['nfpa855', 'nfpaSheet']
  }))), /*#__PURE__*/React.createElement(Card, {
    icon: "map",
    eyebrow: "Local zoning",
    title: "Covered by El Dorado's framework"
  }, "G-1463 defines battery storage and ", /*#__PURE__*/React.createElement("strong", null, "requires a Special Use Permit"), ", with standards for hazardous materials, emergency access, screening, and decommissioning.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Src, {
    ids: ['g1463', 'eldocomm']
  }))), /*#__PURE__*/React.createElement(Card, {
    icon: "scale",
    eyebrow: "Regulate or prohibit",
    title: "Other communities choose rules"
  }, "NACo describes siting, setbacks, and safety review as tools local governments use to manage BESS, ", /*#__PURE__*/React.createElement("strong", null, "rather than prohibition"), ".", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Src, {
    ids: ['nacoBess']
  }))))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "communities",
    label: "6 \xB7 Other communities",
    title: "How are other communities handling this?"
  }));
}
window.Battery = Battery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Battery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Communities.jsx
try { (() => {
function Communities({
  go
}) {
  const {
    Badge,
    Icon
  } = DS;
  const Stat2 = ({
    v,
    l,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 40px/1 var(--font-display)',
      color
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.35 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, l));
  const Case = ({
    good,
    place,
    verdict,
    title,
    stats,
    points,
    ids,
    egMore
  }) => {
    const accent = good ? 'var(--edf-green)' : 'var(--danger, #c0392b)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        border: '1px solid var(--border-1)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '14px 28px',
        background: accent,
        color: '#fff',
        font: '800 14px/1 var(--font-body)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: good ? 'circle-check' : 'circle-x',
      size: 18
    }), verdict), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        padding: '28px 28px 32px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--fg-2)'
      }
    }, place), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '900 32px/1.05 var(--font-display)',
        textTransform: 'uppercase',
        color: 'var(--fg-1)',
        margin: 0
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
        gap: 16,
        padding: '18px 0',
        borderTop: '1px solid var(--border-1)',
        borderBottom: '1px solid var(--border-1)'
      }
    }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(Stat2, {
      key: l,
      v: v,
      l: l,
      color: accent
    }))), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        font: '400 16px/1.45 var(--font-body)',
        color: 'var(--fg-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: accent,
        flexShrink: 0,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: good ? 'check' : 'x',
      size: 18
    })), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Src, {
      ids: ids
    }))));
  };
  const rows = [['When were the rules set?', 'Years ahead, with data-center zoning districts', 'Rules existed, but talks with the developer began in private'], ['How was the public involved?', 'Public hearings on each project and a town hall with 500+ residents', 'Residents learned details through open-records requests'], ['Where are the buildings?', 'In the business park, away from homes', '360 acres near homes; one plaintiff lives about 300 yards away'], ['What did residents get?', '$400 water bill credits and $400 gift cards', 'A lawsuit, an ousted council and recall petitions'], ['What happened next?', '19 more data centers in the pipeline', 'No plans or permits submitted as of June 2026']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "6",
    eyebrow: "How are other communities handling this?",
    depth: "4 min read",
    title: "Two communities, two very different results",
    lead: "One town set clear rules, kept the process public, and has benefited for 25 years. The other let talks happen out of view and is now tied up in court and turmoil."
  }), /*#__PURE__*/React.createElement(ShortVersion, null, /*#__PURE__*/React.createElement(StepCard, {
    n: "1",
    icon: "circle-check",
    title: "Elk Grove did it right"
  }, "Clear zoning, public hearings, buildings kept in the business park. Data centers paid ", /*#__PURE__*/React.createElement("strong", null, "$45 million in property taxes"), " there in 2025."), /*#__PURE__*/React.createElement(StepCard, {
    n: "2",
    icon: "gift",
    title: "Residents shared the win"
  }, "Elk Grove residents got ", /*#__PURE__*/React.createElement("strong", null, "$400 water bill credits and $400 gift cards"), " because data centers generated so much tax money."), /*#__PURE__*/React.createElement(StepCard, {
    n: "3",
    icon: "triangle-alert",
    title: "Festus did it wrong"
  }, "City leaders met with the developer ", /*#__PURE__*/React.createElement("strong", null, "out of public view"), ". The result: a 12-count lawsuit and ", /*#__PURE__*/React.createElement("strong", null, "four council members voted out"), "."), /*#__PURE__*/React.createElement(StepCard, {
    n: "4",
    icon: "map-pin",
    title: "El Dorado has the right tools"
  }, "G-1463 puts Elk Grove's approach in place: ", /*#__PURE__*/React.createElement("strong", null, "rules first, public hearings, every project reviewed in the open"), ".")), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Case studies"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, "Process makes the difference")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Case, {
    good: true,
    place: "Elk Grove Village, Illinois",
    verdict: "The right way",
    title: "Clear rules, public process, lasting benefits",
    stats: [['$45M', 'Property taxes from data centers, 2025'], ['20', 'Data centers operating'], ['19', 'More in the pipeline']],
    points: [/*#__PURE__*/React.createElement(React.Fragment, null, "Data-center zoning in its ", /*#__PURE__*/React.createElement("strong", null, "Innovation & Technology Center"), " district, set before projects arrive"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Public hearings"), " before the Plan Commission on each project"), /*#__PURE__*/React.createElement(React.Fragment, null, "Buildings kept in the ", /*#__PURE__*/React.createElement("strong", null, "business park, away from neighborhoods")), /*#__PURE__*/React.createElement(React.Fragment, null, "Residents received ", /*#__PURE__*/React.createElement("strong", null, "$400 water bill credits and $400 gift cards"), " from the tax revenue"), /*#__PURE__*/React.createElement(React.Fragment, null, "A 2026 town hall drew ", /*#__PURE__*/React.createElement("strong", null, "500+ residents"), " to question the mayor directly")],
    ids: ['jtEG', 'fox32EG', 'nbcEG', 'egZoning', 'egHearing']
  }), /*#__PURE__*/React.createElement(Case, {
    place: "Festus, Missouri",
    verdict: "The wrong way",
    title: "Private talks, public backlash",
    stats: [['12', 'Counts in the residents’ lawsuit'], ['4', 'Council members voted out'], ['0', 'Plans submitted as of June 2026']],
    points: [/*#__PURE__*/React.createElement(React.Fragment, null, "City officials discussed the project with the developer ", /*#__PURE__*/React.createElement("strong", null, "starting in August 2025"), ", before the public knew"), /*#__PURE__*/React.createElement(React.Fragment, null, "Emails showed council members ", /*#__PURE__*/React.createElement("strong", null, "met in small groups to avoid a quorum"), ", keeping meetings private"), /*#__PURE__*/React.createElement(React.Fragment, null, "Residents sued to overturn the rezoning and development agreement, alleging ", /*#__PURE__*/React.createElement("strong", null, "Sunshine Law violations"), ". The City says it followed the law."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Four incumbents lost"), " in April 2026, and residents filed recall petitions against the mayor and three more members")],
    ids: ['leaderFestus', 'stlprFestus', 'ksdkFestus', 'festusSuit']
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Side by side"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: 680,
      borderCollapse: 'collapse',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--edf-blue)',
      color: '#fff',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }, "Elk Grove Village, IL"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }, "Festus, MO"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([a, b, c], i) => /*#__PURE__*/React.createElement("tr", {
    key: a,
    style: {
      borderTop: '1px solid var(--border-1)',
      background: i % 2 ? 'var(--bg-subtle)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      fontWeight: 700
    }
  }, a), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px'
    }
  }, b), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      color: 'var(--fg-2)'
    }
  }, c)))))), /*#__PURE__*/React.createElement(P, null, "The lesson for El Dorado: ", /*#__PURE__*/React.createElement("strong", null, "the damage in Festus came from a closed process, not from having rules"), ". G-1463 requires what Elk Grove does: rules set in advance, public hearings, and every project reviewed in the open. A ban throws that framework out."), /*#__PURE__*/React.createElement(Src, {
    ids: ['g1463', 'leaderFestus'],
    more: "#regulate"
  }))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "sources",
    label: "7 \xB7 Sources",
    title: "Sources & further reading"
  }));
}
window.Communities = Communities;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Communities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Button,
    Card,
    Stat,
    ChecklistPanel,
    VoteNoLockup,
    Icon
  } = DS;
  const Step = ({
    n,
    icon,
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '28px 28px 32px',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-1)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 56px/1 var(--font-display)',
      color: 'var(--edf-green)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--edf-blue-100)',
      color: 'var(--edf-blue)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '900 26px/1.1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.5 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "edf-hero",
    style: {
      position: 'relative',
      background: 'var(--edf-navy)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "edf-hero__photo",
    role: "img",
    "aria-label": "ELDO letter sculpture in front of the Ad Astra Per Aspera mural",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 'calc(30% + 112px)',
      backgroundImage: `url(${photoUrl('eldo-sculpture.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: '8% 60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "edf-hero__panel",
    style: {
      position: 'relative',
      background: 'var(--edf-blue)',
      clipPath: 'polygon(0 0,calc(100% - 110px) 0,100% 50%,calc(100% - 110px) 100%,0 100%)',
      width: '70%',
      padding: '72px 140px 80px max(var(--gutter),calc((100vw - var(--container))/2 + var(--gutter)))',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--edf-lime)"
  }, "Tuesday, November 3 \xB7 Special Election"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 clamp(42px,4.6vw,72px)/0.98 var(--font-display)',
      maxWidth: 820,
      textTransform: 'uppercase',
      letterSpacing: '-0.015em',
      margin: 0,
      textWrap: 'balance'
    }
  }, "A 10-year ban on an entire industry is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--edf-lime)'
    }
  }, "a bad idea.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 20px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      maxWidth: 680
    }
  }, "Companies choose low-risk places to invest. A city that bans an entire industry looks too risky. If this passes, El Dorado's economic future stalls."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(VoteNoLockup, {
    size: "md",
    subline: false
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => window.scrollTo({
      top: document.getElementById('short').offsetTop - 70,
      behavior: 'smooth'
    })
  }, "The 30-second version"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 8,
      background: 'var(--edf-gradient)'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    id: "short",
    pad: "var(--space-8)",
    bg: "var(--bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The 30-second version"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: "1",
    icon: "ban",
    title: "It bans an entire industry for 10 years"
  }, "Data centers and battery storage would be prohibited in El Dorado. ", /*#__PURE__*/React.createElement("strong", null, "Only another public vote can undo it.")), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    icon: "shield-alert",
    title: "Companies avoid risky cities"
  }, "Businesses weigh risk before they invest. A community that bans an entire industry ", /*#__PURE__*/React.createElement("strong", null, "drops off the short list"), ", and not just for data centers. ", /*#__PURE__*/React.createElement("strong", null, "Every kind of business notices.")), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    icon: "trending-down",
    title: "Our problems don't fix themselves"
  }, "High property taxes. Bad roads. Declining population. Without economic development, ", /*#__PURE__*/React.createElement("strong", null, "none of it improves"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      background: 'var(--edf-navy)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement(VoteNoLockup, {
    size: "sm",
    subline: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 20px/1.35 var(--font-display)',
      flex: '1 1 320px',
      margin: 0
    }
  }, "Regulate it. Scrutinize it. Negotiate it. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--edf-lime)',
      textTransform: 'uppercase'
    }
  }, "But don't ban it.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: "arrow-right",
    onClick: () => go('ballot')
  }, "Read the ballot question")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why it matters"), /*#__PURE__*/React.createElement(H2, null, "The next company is watching"), /*#__PURE__*/React.createElement(P, null, "The next company considering El Dorado may have nothing to do with data centers. When businesses decide where to invest, they look at certainty. Responsiveness. Permitting. ", /*#__PURE__*/React.createElement("strong", null, "Community support.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 20px/1.4 var(--font-body)',
      color: 'var(--edf-blue)',
      maxWidth: 560
    }
  }, "Because when investment doesn't come, our needs don't disappear."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => go('why')
  }, "Why this matters for El Dorado"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    src: "ballfields-aerial.jpg",
    label: "Aerial of El Dorado ball fields at dusk",
    pos: "center 65%",
    height: 420
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "We don't need a ban"), /*#__PURE__*/React.createElement(H2, null, "El Dorado already has rules for this"), /*#__PURE__*/React.createElement(P, null, "In June 2026 the City adopted zoning rules for data centers and battery storage. ", /*#__PURE__*/React.createElement("strong", null, "Every project needs a Special Use Permit"), ": a public hearing, full disclosure of water and power needs, and ", /*#__PURE__*/React.createElement("strong", null, "the City's right to set conditions or say no"), "."), /*#__PURE__*/React.createElement(Src, {
    ids: ['eldocomm', 'g1463'],
    more: "#regulate"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('regulate')
  }, "How the City's rules work"))), /*#__PURE__*/React.createElement(ChecklistPanel, null))), /*#__PURE__*/React.createElement(WaterAdvantage, null), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Property taxes"), /*#__PURE__*/React.createElement(H2, null, "Growth can lower your tax bill"), /*#__PURE__*/React.createElement(P, null, "A large new project spreads the cost of local government across more value. If local governments hold their revenue flat, ", /*#__PURE__*/React.createElement("strong", null, "mill levies fall for everyone else"), ". And Kansas's data center law is ", /*#__PURE__*/React.createElement("strong", null, "a sales tax break, not a property tax break"), "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Button, {
    iconRight: "arrow-right",
    onClick: () => go('why')
  }, "See the full example"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: '#fff',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 36px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fg-2)'
    }
  }, "Illustrative $1 billion data center"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 clamp(64px,8vw,104px)/0.9 var(--font-display)',
      color: 'var(--edf-blue)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "$1,010"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px/1.4 var(--font-body)'
    }
  }, "a year saved on a $250,000 home"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.45 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, "That's $404 for every $100,000 of home value, assuming $300 million of the project is taxable real property.")))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What's on the ballot"), /*#__PURE__*/React.createElement(H2, null, "Four lines in the ordinance, four problems"), /*#__PURE__*/React.createElement(Src, {
    ids: ['ballot'],
    more: "#ballot"
  })), /*#__PURE__*/React.createElement(FourProblems, null))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Want the details?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, [['ballot', 'The ballot question'], ['why', 'Why El Dorado'], ['regulate', 'Regulate vs. ban'], ['impacts', 'Water, power, jobs & taxes'], ['battery', 'Battery storage'], ['communities', 'Other communities'], ['sources', 'All sources']].map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
    key: k,
    variant: "secondary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => go(k)
  }, l))))));
}
window.Home = Home;
function WaterAdvantage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--edf-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--edf-lime)"
  }, "El Dorado Lake"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      fontSize: 'clamp(40px,4.4vw,60px)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      margin: 0
    }
  }, "Water is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--edf-lime)'
    }
  }, "not"), " a problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 20px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      maxWidth: 560
    }
  }, "El Dorado has one of the biggest water advantages in Kansas. Our lake holds over 50 billion gallons, and the City has 10 million gallons a day set aside for industry."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 20px/1.4 var(--font-body)',
      maxWidth: 560
    }
  }, "The headlines about data centers using millions of gallons a day describe evaporative cooling, where water is used up as it cools the building. Many new data centers use ", /*#__PURE__*/React.createElement("strong", null, "closed-loop systems"), " instead. The loop is ", /*#__PURE__*/React.createElement("strong", null, "filled once during construction"), " and the same water circulates for years. Microsoft says its new closed-loop sites use ", /*#__PURE__*/React.createElement("strong", null, "about as much water in a year as a single restaurant"), "."), /*#__PURE__*/React.createElement(Src, {
    tone: "dark",
    ids: ['msftZeroWater', 'nadellaRestaurant', 'vantage', 'fwpcoa']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 18px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      maxWidth: 560,
      paddingLeft: 16,
      borderLeft: '3px solid var(--edf-lime)'
    }
  }, "For comparison, our refinery already uses an estimated ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "4 million gallons or more"), " a day."), /*#__PURE__*/React.createElement(Src, {
    tone: "dark",
    ids: ['hfsRefinery', 'doeRefineryWater']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 18px/1.45 var(--font-body)',
      color: 'var(--fg-on-dark-2)',
      maxWidth: 560,
      paddingLeft: 16,
      borderLeft: '3px solid var(--edf-lime)'
    }
  }, "We also still owe ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "$39.8 million"), " to the U.S. Army Corps of Engineers for our lake storage. That industrial water needs buyers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Src, {
    tone: "dark",
    ids: ['lakeDebt', 'cityFaq']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.12)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-2)'
    }
  }, "Gallons per day"), [['Closed-loop data center, after initial fill', 0, 'var(--edf-lime)', 'nearly 0'], ['El Dorado refinery today (estimated)', 4, 'var(--edf-green)', '4+ million'], ['Industrial capacity set aside by the City', 10, 'var(--edf-teal)', '10 million'], ['Lake yield in a 50-year drought', 22, '#fff', '22 million']].map(([l, v, c, t]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      font: '500 15px/1.3 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 18px/1 var(--font-display)',
      color: c
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14,
      background: 'rgba(255,255,255,.08)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v / 22 * 100 + '%',
      minWidth: 10,
      height: '100%',
      background: c,
      borderRadius: 3,
      transform: 'skewX(var(--skew))',
      transformOrigin: 'left'
    }
  }))))))));
}
function FourProblems() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'edf-four-problems',
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(460px,100%),1fr))',
      gap: 20
    }
  }, [['10 years', 'Locked in for a decade', /*#__PURE__*/React.createElement(React.Fragment, null, "Once passed, the City Commission can't adjust it for ten years. ", /*#__PURE__*/React.createElement("strong", null, "The only fix is another election."), " A decade is a long time to hang a \"closed\" sign on El Dorado while other towns compete for the same investment."), ['petitionStmt']], ['10 MW', 'The line is drawn very low', /*#__PURE__*/React.createElement(React.Fragment, null, "Florida's incentive law defines a data center at 100 megawatts. This ban starts at ", /*#__PURE__*/React.createElement("strong", null, "one-tenth of that"), ", so it reaches far beyond giant AI campuses to smaller server and computing facilities."), ['ncslSubsidies']], ['100,000', 'Gallons a day is a tiny slice', /*#__PURE__*/React.createElement(React.Fragment, null, "That's ", /*#__PURE__*/React.createElement("strong", null, "1% of the 10 million gallons a day"), " the City has set aside for industry. The ban applies ", /*#__PURE__*/React.createElement("strong", null, "no matter how efficient the cooling design"), ", and the City already requires water numbers before any approval."), ['industrialWater', 'g1463']], ['80 kWh', 'It bans batteries, too', /*#__PURE__*/React.createElement(React.Fragment, null, "Battery storage above 80 kWh is prohibited, ", /*#__PURE__*/React.createElement("strong", null, "not just at data centers"), ". That covers systems businesses and utilities use for backup power and grid reliability, which national fire codes and the City's permit process already regulate."), ['judge', 'nfpa855']]].map(([v, t, b, ids]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(120px,auto) 1fr',
      gap: 24,
      alignItems: 'start',
      padding: 28,
      background: 'var(--bg-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 44px/1 var(--font-display)',
      color: 'var(--edf-blue)',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '900 20px/1.15 var(--font-display)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, b), /*#__PURE__*/React.createElement(Src, {
    ids: ids
  }))))));
}
Object.assign(window, {
  WaterAdvantage,
  FourProblems
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Impacts.jsx
try { (() => {
function Impacts({
  go
}) {
  const {
    Tabs,
    Card,
    Badge
  } = DS;
  const [tab, setTab] = React.useState('Water & infrastructure');
  const T = {
    'Water & infrastructure': {
      facts: [['El Dorado has water to spare.', 'The lake holds over 50 billion gallons, and the City has 10 million gallons a day set aside for industry. We still owe $39.8 million to the U.S. Army Corps of Engineers for that storage, and industrial customers help pay it.', ['cityFaq', 'industrialWater', 'lakeDebt']], ['Closed-loop cooling uses very little water once filled.', 'The headlines about data centers using millions of gallons a day describe evaporative cooling, where water is used up as it cools the building. Many new data centers use closed-loop systems instead. The loop is filled once during construction and the same water circulates for years. Microsoft says its new closed-loop sites use about as much water in a year as a single restaurant. After the initial fill, the main ongoing use is restrooms and kitchens.', ['msftZeroWater', 'nadellaRestaurant', 'vantage']], ['There is no single “data centers use X gallons” number.', 'Berkeley Lab found very large variation by server efficiency, cooling technology, grid characteristics, and climate.', ['lbnl']], ['The ordinance draws its line at 100,000 gallons a day.', 'That is 1% of the City’s industrial water. A facility above that daily draw is “high impact” and banned, whatever its cooling design.', ['ballot', 'industrialWater']], ['G-1463 requires water numbers up front.', 'Average-day and peak-day demand, process water, fire flow, cooling type, and wastewater discharge must be described before approval.', ['g1463']]],
      qs: ['How much of El Dorado Lake’s capacity is committed today?', 'How does cooling technology change a facility’s water use?', 'What limits can the City set in a Special Use Permit?'],
      more: ['gao', 'nacoPrimer']
    },
    'Power & utilities': {
      facts: [['10 MW is the ordinance’s power trigger.', 'Any computing facility with a peak electrical load above ten megawatts is “high impact.”', ['ballot']], ['Kansas ties its incentive to a 10-year power contract.', 'To qualify for the state incentive, a data center must enter a 10-year electricity purchase agreement with its local utility.', ['ncslSubsidies', 'ksStatute']], ['Applicants must show their utility path.', 'G-1463 requires peak load in megawatts, planned interconnections, backup generation inventory, and Evergy Path to Power status.', ['legalMemo']]],
      qs: ['Who pays for new generation or transmission?', 'How could a large customer affect other ratepayers?', 'What does 10 MW represent in practice?'],
      more: ['crs', 'doe']
    },
    'Jobs, investment & taxes': {
      facts: [['Kansas created a data center incentive in July 2025.', 'Qualifying projects must invest at least $250 million within five years and create 20 new jobs within two years. The state can claw back benefits.', ['ncslSubsidies', 'ksStatute']], ['The Kansas exemption is a sales tax exemption.', 'NCSL reports it covers land, buildings, site improvements, and equipment, but specifically excludes electricity. It lists no state property tax abatement.', ['ncslSubsidies']], ['A large project could lower homeowners’ property taxes.', 'In an illustrative $1 billion example with $300 million of taxable real property, revenue-neutral mill levies would save about $404 a year per $100,000 of home value, or about $1,010 on a $250,000 home. See the full example on the Why El Dorado page.', ['kdorAbate', 'kdorRatio', 'city2026']], ['Barber County’s Google data center gets no property tax abatement.', 'Google agreed to pay 100% of its property taxes plus $5.5 million in community benefit payments.', ['kakeBarber']], ['Construction jobs are large. Permanent jobs are fewer.', 'NCSL notes construction can support many workers, while operating facilities create far fewer permanent positions.', ['ncslSubsidies']]],
      qs: ['Which impacts are known, and which depend on the project?', 'What local property tax would a project pay?', 'What is the cost of saying no to every project for ten years?'],
      more: ['ncslSnapshot', 'nacoEcon']
    },
    'Land use & community': {
      facts: [['Setbacks are already required.', 'G-1463 requires a 500-foot setback between generator and cooling yards, substations, or fuel storage and residential districts or sensitive uses.', ['legalMemo']], ['Noise can be conditioned.', 'The City may require acoustic enclosures, post-construction sound testing, and limits on generator testing.', ['g1463']], ['Litigation is rising where process is weak.', 'WilmerHale describes a growing wave of nuisance, environmental, and land-use suits against data center projects.', ['wilmer']]],
      qs: ['Where are appropriate locations in El Dorado?', 'How are neighbors notified and heard?', 'Who pays to decommission a site?'],
      more: ['nacoPrimer', 'uli']
    }
  };
  const cur = T[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "4",
    eyebrow: "What could a data center mean for El Dorado?",
    depth: "5 min read",
    title: "The issues, one at a time",
    lead: "Organized around the questions with the most direct local relevance. The facts shown are the documented ones. Where the answer depends on a specific project, we say so."
  }), /*#__PURE__*/React.createElement(ShortVersion, null, /*#__PURE__*/React.createElement(StepCard, {
    n: "1",
    icon: "droplets",
    title: "Water isn't the problem"
  }, "Closed-loop data centers use ", /*#__PURE__*/React.createElement("strong", null, "almost no water once filled"), ". El Dorado has ", /*#__PURE__*/React.createElement("strong", null, "10 million gallons a day"), " set aside for industry."), /*#__PURE__*/React.createElement(StepCard, {
    n: "2",
    icon: "zap",
    title: "Power is reviewed up front"
  }, "Applicants must show ", /*#__PURE__*/React.createElement("strong", null, "peak load and their utility plan"), ". Kansas law bars ", /*#__PURE__*/React.createElement("strong", null, "discounted electric rates"), " for data centers."), /*#__PURE__*/React.createElement(StepCard, {
    n: "3",
    icon: "receipt",
    title: "Taxes could go down"
  }, "A $1 billion project could save about ", /*#__PURE__*/React.createElement("strong", null, "$1,010 a year on a $250,000 home"), ". Barber County's Google deal has ", /*#__PURE__*/React.createElement("strong", null, "no property tax abatement"), "."), /*#__PURE__*/React.createElement(StepCard, {
    n: "4",
    icon: "house",
    title: "Neighbors are protected"
  }, "G-1463 requires ", /*#__PURE__*/React.createElement("strong", null, "500-foot setbacks"), ", noise limits and ", /*#__PURE__*/React.createElement("strong", null, "public hearings"), " for every project.")), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(T),
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 32,
      overflowX: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, cur.facts.map(([h, b, ids]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    title: h
  }, b, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Src, {
    ids: ids
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "lime",
    eyebrow: "Questions worth asking",
    title: "What a Special Use Permit hearing can examine"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '4px 0 0',
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      color: 'var(--fg-1)'
    }
  }, cur.qs.map(q => /*#__PURE__*/React.createElement("li", {
    key: q
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Deeper research"), cur.more.map(id => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: S[id].u,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '12px 0',
      borderTop: '1px solid var(--border-1)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px/1.4 var(--font-body)',
      color: 'var(--edf-blue)'
    }
  }, S[id].t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)'
    }
  }, S[id].by))))))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "battery",
    label: "5 \xB7 Battery storage",
    title: "What else does the ordinance cover?"
  }));
}
window.Impacts = Impacts;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Impacts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Regulate.jsx
try { (() => {
function Regulate({
  go
}) {
  const {
    Card,
    Badge,
    Icon
  } = DS;
  const Step = ({
    n,
    icon,
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '28px 28px 32px',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 56px/1 var(--font-display)',
      color: 'var(--edf-green)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--edf-blue-100)',
      color: 'var(--edf-blue)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '900 26px/1.1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.5 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children));
  const tools = ['Prohibition', 'Temporary moratorium', 'Zoning districts', 'Conditional or special-use permits', 'Public hearings', 'Project-specific review', 'Water-use requirements', 'Power/infrastructure requirements', 'Noise standards', 'Setbacks and buffering', 'Development agreements', 'Fire and life-safety requirements', 'Decommissioning requirements', 'Approval with conditions', 'Denial of individual applications'];
  const g1463 = [['file-search', 'Detailed disclosure', /*#__PURE__*/React.createElement(React.Fragment, null, "Applicants must document ", /*#__PURE__*/React.createElement("strong", null, "water and cooling demand, peak electric load"), ", utility interconnections, backup generation, and Evergy Path to Power status.")], ['users', 'Public hearing', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "No data center can be approved without a public hearing"), " before the Planning Commission and the Governing Body.")], ['ruler', '500-foot setback', /*#__PURE__*/React.createElement(React.Fragment, null, "Outdoor generator yards, cooling yards, substations, and bulk fuel storage must sit ", /*#__PURE__*/React.createElement("strong", null, "500 feet from residential districts"), " or sensitive uses.")], ['volume-2', 'Noise & testing limits', 'The City may limit generator testing (including overnight and weekends) and require acoustic mitigation and post-construction sound testing.'], ['droplets', 'Water & wastewater', 'Average-day and peak-day water demand, cooling type, and wastewater discharge must be described. Utility provider letters may be required.'], ['recycle', 'Decommissioning', 'Standards cover decommissioning, site restoration, and substantial changes after approval.']];
  const cmp = [['Who decides each project', 'No one. Every covered project is banned.', 'Planning Commission and City Commission, in public'], ['Can the City say no?', 'Yes, to every project', 'Yes, case by case, on the facts'], ['Can the City set conditions?', 'Not applicable', 'Yes: water, power, noise, setbacks, decommissioning'], ['Can it change if needs change?', 'Only by another public vote, for 10 years', 'The Commission can amend zoning through its normal public process'], ['Covers projects unrelated to data centers', 'Also bans battery storage above 80 kWh', 'Battery storage reviewed under the same framework']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "3",
    eyebrow: "Prohibition vs. regulation",
    depth: "4 min read",
    title: "What are the options?",
    lead: "Communities use many tools to manage data centers. A ban is one of them. El Dorado has already adopted several of the others."
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)",
    bg: "var(--bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The 30-second version"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: "1",
    icon: "shield-check",
    title: "We already have rules"
  }, "Since June, ", /*#__PURE__*/React.createElement("strong", null, "every data center and battery project needs a Special Use Permit"), ", with public hearings before the Planning Commission and City Commission."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    icon: "file-search",
    title: "Projects must show their numbers"
  }, "Applicants must disclose ", /*#__PURE__*/React.createElement("strong", null, "water use, power demand, noise and setbacks"), " up front. The City can set conditions on each one."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    icon: "circle-x",
    title: "The City can still say no"
  }, "Regulation doesn't mean approval. ", /*#__PURE__*/React.createElement("strong", null, "The City can deny any project"), " that doesn't fit, based on the facts."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    icon: "lock",
    title: "A ban locks us in"
  }, "The ordinance bans every covered project and ", /*#__PURE__*/React.createElement("strong", null, "can't be changed for 10 years"), " without another public vote.")))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Tools communities use"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, tools.map((t, i) => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: i === 0 ? 'danger' : 'blue',
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      fontSize: 14,
      fontWeight: 600,
      height: 34,
      padding: '0 14px'
    }
  }, t))), /*#__PURE__*/React.createElement(Src, {
    ids: ['nacoPrimer', 'urban']
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "El Dorado's framework \xB7 Ordinance G-1463"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, "What the City already requires"), /*#__PURE__*/React.createElement(P, null, "Adopted June 1, 2026. Data centers and battery storage are allowed only in the I-1, I-2 and O-I districts, and ", /*#__PURE__*/React.createElement("strong", null, "only with a Special Use Permit"), "."), /*#__PURE__*/React.createElement(Src, {
    ids: ['g1463', 'legalMemo']
  })), /*#__PURE__*/React.createElement(Grid, {
    min: 300,
    gap: 16
  }, g1463.map(([i, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    icon: i,
    title: t
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Side by side"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: 640,
      borderCollapse: 'collapse',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--edf-blue)',
      color: '#fff',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }, "Nov 3 ordinance (ban)"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 18px'
    }
  }, "Current zoning (G-1463)"))), /*#__PURE__*/React.createElement("tbody", null, cmp.map(([a, b, c], i) => /*#__PURE__*/React.createElement("tr", {
    key: a,
    style: {
      borderTop: '1px solid var(--border-1)',
      background: i % 2 ? 'var(--bg-subtle)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      fontWeight: 700
    }
  }, a), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      color: 'var(--fg-2)'
    }
  }, b), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px'
    }
  }, c)))))), /*#__PURE__*/React.createElement(Src, {
    ids: ['ballot', 'g1463']
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Grid, {
    min: 340,
    gap: 20
  }, /*#__PURE__*/React.createElement(Quote, {
    cite: "City of El Dorado, Official Statement, May 22, 2026",
    ids: ['zoningStmt']
  }, "From a zoning perspective, a blanket prohibition is difficult to defend unless it is supported by clear planning and factual findings."), /*#__PURE__*/React.createElement(Quote, {
    cite: "City Attorney, Legal Memo, May 28, 2026",
    ids: ['legalMemo']
  }, "A vote in favor of this amendment is not a vote for data centers. It is a vote for the City having the tools to regulate them, condition them, or deny them through a transparent, legally sound public process."))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "impacts",
    label: "4 \xB7 Impacts",
    title: "What could a data center mean for El Dorado?"
  }));
}
window.Regulate = Regulate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Regulate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DS = window.ElDoradoForwardDesignSystem_eb1381;
const S = window.EDF_SOURCES;
const Eyebrow = ({
  children,
  color = 'var(--edf-blue)',
  bar = 'var(--edf-lime)'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: 'var(--type-eyebrow)',
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 28,
    height: 8,
    background: bar,
    transform: 'skewX(var(--skew))',
    flex: 'none'
  }
}), children);
const Section = ({
  bg = 'var(--bg-page)',
  children,
  pad = 'var(--space-9)',
  id,
  style
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    background: bg,
    padding: `${pad} 0`,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  }
}, children));
const H2 = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    font: 'var(--type-h2)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-display)',
    ...style
  }
}, children);
const Lead = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    font: 'var(--type-lead)',
    color: 'var(--fg-2)',
    maxWidth: 720,
    ...style
  }
}, children);
const P = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    color: 'var(--fg-2)',
    maxWidth: 720,
    ...style
  }
}, children);
const Grid = ({
  min = 280,
  gap = 20,
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit,minmax(min(${min}px,100%),1fr))`,
    gap,
    ...style
  }
}, children);
const Src = ({
  ids = [],
  more,
  tone
}) => {
  const a = S[ids[0]];
  const rest = ids.slice(1).map(k => S[k]).filter(Boolean);
  const c = tone === 'dark' ? 'var(--fg-on-dark-2)' : 'var(--fg-2)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(DS.SourceNote, {
    tone: tone,
    source: a && `${a.by}${a.d ? ' · ' + a.d : ''}`,
    sourceHref: a && a.u,
    moreHref: more
  }), rest.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      font: '500 13px/1.4 var(--font-body)',
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", null, "Also:"), rest.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.u,
    href: s.u,
    target: "_blank",
    rel: "noopener",
    style: {
      color: c,
      textDecoration: 'underline',
      textUnderlineOffset: 2
    }
  }, s.by, s.d ? ' · ' + s.d : ''))));
};
const StepCard = ({
  n,
  icon,
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    padding: '28px 28px 32px',
    background: '#fff',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-1)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: '900 56px/1 var(--font-display)',
    color: 'var(--edf-green)'
  }
}, n), /*#__PURE__*/React.createElement("span", {
  style: {
    width: 48,
    height: 48,
    borderRadius: 'var(--radius-md)',
    background: 'var(--edf-blue-100)',
    color: 'var(--edf-blue)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(DS.Icon, {
  name: icon,
  size: 24
}))), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '900 26px/1.1 var(--font-display)',
    textTransform: 'uppercase',
    color: 'var(--fg-1)',
    margin: 0
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 17px/1.5 var(--font-body)',
    color: 'var(--fg-2)'
  }
}, children));
const ShortVersion = ({
  children
}) => /*#__PURE__*/React.createElement(Section, {
  pad: "var(--space-8)",
  bg: "var(--bg-subtle)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "The 30-second version"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
    gap: 20
  }
}, children)));
const Pending = ({
  note
}) => /*#__PURE__*/React.createElement(DS.Badge, {
  tone: "warning",
  icon: "clock",
  style: {
    textTransform: 'none',
    letterSpacing: 0
  }
}, note || 'Source pending');
const PageHead = ({
  n,
  eyebrow,
  title,
  lead,
  depth
}) => /*#__PURE__*/React.createElement(Section, {
  bg: "var(--bg-subtle)",
  pad: "var(--space-8)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, n ? `${n} · ` : '', eyebrow), depth && /*#__PURE__*/React.createElement(DS.Badge, {
  tone: "neutral",
  icon: "clock"
}, depth)), /*#__PURE__*/React.createElement("h1", {
  style: {
    font: 'var(--type-h1)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-display)'
  }
}, title), lead && /*#__PURE__*/React.createElement(Lead, null, lead)));
const Quote = ({
  children,
  cite,
  ids
}) => /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    padding: '24px 28px',
    background: '#fff',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("blockquote", {
  style: {
    margin: 0,
    font: '500 19px/1.5 var(--font-body)',
    color: 'var(--fg-1)'
  }
}, "\u201C", children, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: '600 14px var(--font-body)'
  }
}, cite), ids && /*#__PURE__*/React.createElement(Src, {
  ids: ids
})));
// Photo placeholder cropped into the mail's left-pointing chevron.
const PHOTO = '../../assets/photos/';
const photoUrl = f => window.__resources && window.__resources['photo-' + f.replace(/\.[a-z]+$/, '')] || PHOTO + f;
const PhotoSlot = ({
  label,
  src,
  pos = 'center',
  chevron = true,
  height = 360,
  style
}) => src ? /*#__PURE__*/React.createElement("div", {
  role: "img",
  "aria-label": label,
  style: {
    height,
    backgroundImage: `url(${photoUrl(src)})`,
    backgroundSize: 'cover',
    backgroundPosition: pos,
    clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none',
    borderRadius: chevron ? 0 : 'var(--radius-lg)',
    ...style
  }
}) : /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    height,
    background: 'repeating-linear-gradient(135deg,var(--edf-gray-100) 0 14px,var(--edf-gray-200) 14px 15px)',
    clipPath: chevron ? 'polygon(18% 0,100% 0,100% 100%,18% 100%,0 50%)' : 'none',
    borderRadius: chevron ? 0 : 'var(--radius-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: '600 13px/1.4 var(--font-body)',
    color: 'var(--fg-2)',
    background: 'rgba(255,255,255,.85)',
    padding: '6px 10px',
    borderRadius: 'var(--radius-sm)',
    marginLeft: chevron ? '12%' : 0,
    textAlign: 'center'
  }
}, "Photo: ", label));
const NextPage = ({
  go,
  to,
  label,
  title
}) => /*#__PURE__*/React.createElement(Section, {
  pad: "var(--space-7)",
  style: {
    borderTop: '1px solid var(--border-1)'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  onClick: e => {
    e.preventDefault();
    go(to);
  },
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
    textDecoration: 'none',
    color: 'var(--fg-1)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Next \xB7 ", label), /*#__PURE__*/React.createElement("span", {
  style: {
    font: 'var(--type-h2)',
    textTransform: 'uppercase',
    fontSize: 32
  }
}, title)), /*#__PURE__*/React.createElement(DS.IconButton, {
  icon: "arrow-right",
  label: `Go to ${label}`,
  variant: "primary",
  size: 52
})));
function Footer({
  go,
  pages
}) {
  const lnk = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 15
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--edf-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--edf-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px var(--gutter) 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DS.VoteNoLockup, {
    size: "sm",
    subline: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-on-dark-2)',
      fontSize: 15,
      maxWidth: 360
    }
  }, "The November 3", /*#__PURE__*/React.createElement("sup", null, "rd"), " ordinance will limit El Dorado's future progress."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--fg-on-dark-2)'
    }
  }, "KEEP MOVING"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 22px var(--font-display)'
    }
  }, "eldorado", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--edf-lime)'
    }
  }, "forward"), ".com"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--edf-lime)'
    }
  }, "The issue"), pages.slice(1).map(p => /*#__PURE__*/React.createElement("a", {
    key: p.value,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(p.value);
    },
    style: lnk
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--edf-lime)'
    }
  }, "Election Day"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px var(--font-display)'
    }
  }, "Tuesday, November 3, 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-on-dark-2)',
      fontSize: 15
    }
  }, "Special Question Election, City of El Dorado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '18px var(--gutter) 28px',
      borderTop: '1px solid rgba(255,255,255,.14)',
      fontSize: 13,
      color: 'var(--fg-on-dark-2)'
    }
  }, "Paid for by El Dorado Forward, Inc., Linda Jolly, Committee Chair"));
}
const Pano = ({
  src,
  label,
  pos = 'center 60%',
  height = 380,
  caption
}) => /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  role: "img",
  "aria-label": label,
  style: {
    height,
    backgroundImage: `url(${photoUrl(src)})`,
    backgroundSize: 'cover',
    backgroundPosition: pos
  }
}), caption && /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '48px var(--gutter) 20px',
    background: 'linear-gradient(transparent,rgba(8,48,79,.75))',
    color: '#fff'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    font: '900 28px/1.1 var(--font-display)',
    textTransform: 'uppercase'
  }
}, caption)));
Object.assign(window, {
  photoUrl,
  StepCard,
  ShortVersion,
  Pending,
  Pano,
  DS,
  S,
  Eyebrow,
  Section,
  H2,
  Lead,
  P,
  Grid,
  Src,
  PageHead,
  Quote,
  PhotoSlot,
  NextPage,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sources.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sources() {
  const {
    Badge,
    Icon
  } = DS;
  const order = ['primary', 'gov', 'pro', 'bess', 'community', 'research', 'news'];
  const by = order.map(t => [t, Object.values(S).filter(s => s.tier === t)]);
  const Row = ({
    t,
    by: who,
    d,
    u,
    pdf
  }) => /*#__PURE__*/React.createElement("a", {
    href: u,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 16,
      alignItems: 'center',
      padding: '14px 0',
      borderTop: '1px solid var(--border-1)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px/1.4 var(--font-body)',
      color: 'var(--fg-1)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)'
    }
  }, who, d ? ' · ' + d : '')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--edf-blue)',
      font: '600 13px var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pdf || u.endsWith('.pdf') ? 'file-down' : 'external-link',
    size: 16
  }), pdf || u.endsWith('.pdf') ? 'PDF' : 'Open'));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "7",
    eyebrow: "Sources & further reading",
    depth: "20+ minutes",
    title: "The evidence library",
    lead: "Organized by type and authority, not by political position. Primary documents and government research come first. Advocacy and commentary are labeled and kept separate."
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(480px,100%),1fr))',
      gap: '48px 56px'
    }
  }, by.map(([t, list]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, window.EDF_TIERS[t])), list.map(s => /*#__PURE__*/React.createElement(Row, _extends({
    key: s.u
  }, s))))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    icon: "info",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Perspectives"), /*#__PURE__*/React.createElement(P, null, "These pieces come from policy organizations, advocacy groups, and opinion outlets. They are included so you can read the arguments, but they are not the primary support for factual claims on this site.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(480px,100%),1fr))',
      gap: '40px 56px'
    }
  }, Object.entries(window.EDF_PERSPECTIVES).map(([g, list]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--fg-2)",
    bar: "var(--edf-gray-400)"
  }, g)), list.map(([who, t, f]) => /*#__PURE__*/React.createElement(Row, {
    key: f,
    t: t,
    by: who,
    u: '../../research/library/pdf/' + f,
    pdf: true
  })))))));
}
window.Sources = Sources;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Why.jsx
try { (() => {
function Why({
  go
}) {
  const {
    Card,
    Stat,
    Badge,
    Icon
  } = DS;
  const Step = ({
    n,
    icon,
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '28px 28px 32px',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 56px/1 var(--font-display)',
      color: 'var(--edf-green)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--edf-blue-100)',
      color: 'var(--edf-blue)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '900 26px/1.1 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.5 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, children));
  const Band = ({
    eyebrow,
    title,
    children,
    photo,
    src,
    pos,
    flip,
    bg
  }) => /*#__PURE__*/React.createElement(Section, {
    bg: bg,
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      order: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, title), children), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: photo,
    src: src,
    pos: pos,
    height: 440
  }))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    n: "2",
    eyebrow: "Why is this an El Dorado issue?",
    depth: "4 min read",
    title: "Why this matters here",
    lead: "The ballot question is local. So are the reasons it matters: our challenges, our water, and our reputation with the next company deciding where to invest."
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)",
    bg: "var(--bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The 30-second version"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: "1",
    icon: "trending-down",
    title: "We have real challenges"
  }, "High property taxes. Bad roads. A shrinking population. Fixing them takes ", /*#__PURE__*/React.createElement("strong", null, "more growth, not less"), "."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    icon: "droplets",
    title: "We built water for industry"
  }, "El Dorado Lake has ", /*#__PURE__*/React.createElement("strong", null, "10 million gallons a day"), " set aside for business. We still owe ", /*#__PURE__*/React.createElement("strong", null, "$39.8 million"), " on it, and industrial customers help pay it off."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    icon: "receipt",
    title: "Growth can cut your tax bill"
  }, "A $1 billion data center could save about ", /*#__PURE__*/React.createElement("strong", null, "$1,010 a year"), " on a $250,000 home. That's ", /*#__PURE__*/React.createElement("strong", null, "$404 for every $100,000"), " of home value."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    icon: "landmark",
    title: "No tax break required"
  }, "In Barber County, Google agreed to pay ", /*#__PURE__*/React.createElement("strong", null, "100% of its property taxes"), ", plus $5.5 million in community benefit payments. Kansas's data center law is ", /*#__PURE__*/React.createElement("strong", null, "a sales tax break, not a property tax break"), ".")))), /*#__PURE__*/React.createElement(Band, {
    eyebrow: "Real challenges",
    title: "Can El Dorado afford to close the door?",
    photo: "ELDO letter sculpture in front of the Ad Astra Per Aspera mural",
    src: "eldo-sculpture.png",
    pos: "center 60%"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 18px/1.5 var(--font-body)'
    }
  }, "High property taxes. Bad roads. Poverty above the Kansas average. Declining population. Infrastructure upgrades. And more\u2026"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      alignSelf: 'flex-start',
      height: 34,
      fontSize: 13,
      letterSpacing: '.02em',
      textTransform: 'none'
    }
  }, "El Dorado has real challenges."), /*#__PURE__*/React.createElement(P, null, "Solving them requires ", /*#__PURE__*/React.createElement("strong", null, "more"), " growth, investment and economic opportunity \u2014 ", /*#__PURE__*/React.createElement("strong", null, "not less"), ".")), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(Grid, {
    min: 260,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "\u22121.2%",
    label: "Population change, 13,021 (2010) to 12,870 (2020)"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['census']
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "Above",
    tone: "green",
    label: "El Dorado's poverty rate compared with the Kansas rate"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['census']
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "58.71",
    label: "2026 city mill levy, above the revenue-neutral rate of 55.669"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['budget2026']
  })))), /*#__PURE__*/React.createElement(TaxExample, null), /*#__PURE__*/React.createElement(Band, {
    eyebrow: "El Dorado Lake",
    title: "El Dorado invested in its future forty years ago",
    photo: "El Dorado Lake shoreline at sunset",
    src: "el-dorado-lake.jpg",
    pos: "center 55%",
    flip: true
  }, /*#__PURE__*/React.createElement(P, null, "More than four decades ago, our community helped build something bigger than what El Dorado needed at the time. El Dorado Lake created the water capacity our community would need for generations \u2014 including capacity ", /*#__PURE__*/React.createElement("strong", null, "specifically intended to support future growth and industry.")), /*#__PURE__*/React.createElement(P, null, "Today, El Dorado Lake still has ", /*#__PURE__*/React.createElement("strong", null, "10 million gallons per day"), " of drought-tolerant water capacity dedicated to industrial use, while still leaving enough water for us and RWD's to ", /*#__PURE__*/React.createElement("strong", null, "double"), " in residential capacity. For years, our community has promoted that water as ", /*#__PURE__*/React.createElement("strong", null, "one of our greatest advantages in attracting new investment."), " That wasn't an accident. It was foresight."), /*#__PURE__*/React.createElement(P, null, "El Dorado still has a ", /*#__PURE__*/React.createElement("strong", null, "financial obligation tied to its investment"), " in water storage. And for years, our City's strategy has included attracting industrial customers to put that capacity to work and generate revenue to pay that debt."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", null, "We should absolutely protect our water."), " Ask tough questions. Set responsible limits."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 18px/1.5 var(--font-body)',
      color: 'var(--edf-blue)'
    }
  }, "But having abundant industrial water isn't a problem to fear. It's an asset that generations of El Dorado residents invested in creating.")), /*#__PURE__*/React.createElement(WaterAdvantage, null), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(Grid, {
    min: 260,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "10 MGD",
    label: "Million gallons per day (MGD) of firm-yield water the City can provide to business customers"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['industrialWater']
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "1981",
    tone: "green",
    label: "El Dorado Lake completed. The City owns its water storage space, unique among Corps reservoirs in Kansas."
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['lake']
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "$39.8M",
    label: "City obligation to the U.S. Army Corps of Engineers, separate from municipal debt"
  }), /*#__PURE__*/React.createElement(Src, {
    ids: ['cityDebt']
  })))), /*#__PURE__*/React.createElement(Band, {
    eyebrow: "The next company is watching",
    title: "El Dorado's next opportunity is on deck",
    photo: "Aerial of El Dorado ball fields at dusk",
    src: "ballfields-aerial.jpg",
    pos: "center 65%"
  }, /*#__PURE__*/React.createElement(P, null, "This November's vote is bigger than banning data centers for the next 10 years."), /*#__PURE__*/React.createElement(P, null, "When businesses decide where to invest, they look at more than land, highways and utilities. They look at certainty. Responsiveness. Permitting. ", /*#__PURE__*/React.createElement("strong", null, "Community support."), " And whether a project can realistically move forward."), /*#__PURE__*/React.createElement(P, null, "Decisions like this don't happen in isolation. They become part of the story companies hear when they're deciding ", /*#__PURE__*/React.createElement("strong", null, "which communities deserve a closer look"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 18px/1.5 var(--font-body)',
      color: 'var(--edf-blue)'
    }
  }, "Because when investment doesn't come, our needs don't disappear.")), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Grid, {
    min: 340,
    gap: 24
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Our industrial history",
    title: "El Dorado has never built its future by standing still"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    src: "stapleton-no1-1915.jpg",
    label: "Stapleton No. 1 well crew, El Dorado oil field",
    chevron: false,
    height: 220,
    pos: "center 40%",
    style: {
      margin: '-8px -8px 4px',
      filter: 'grayscale(1)'
    }
  }), "In October 1915, the Stapleton No. 1 well opened the El Dorado oil field. By 1918, the field was producing ", /*#__PURE__*/React.createElement("strong", null, "up to 9% of the nation's oil"), ".", /*#__PURE__*/React.createElement(Src, {
    ids: ['history', 'aoghs']
  })), /*#__PURE__*/React.createElement(Card, {
    icon: "landmark",
    eyebrow: "The City's own work",
    title: "Rules before a project, not after"
  }, "In May 2026 the City said its zoning did not define or regulate data centers, so one could be interpreted as allowed \u201Cby right\u201D in some industrial districts. It then ", /*#__PURE__*/React.createElement("strong", null, "adopted standards and a Special Use Permit requirement"), ". The City also confirmed it had met informally with a developer, and said such meetings carry no obligation.", /*#__PURE__*/React.createElement(Src, {
    ids: ['zoningStmt', 'statements'],
    more: "#regulate"
  })))), /*#__PURE__*/React.createElement(NextPage, {
    go: go,
    to: "regulate",
    label: "3 \xB7 Prohibition vs. regulation",
    title: "What are the options?"
  }));
}
function TaxExample() {
  const {
    Card,
    Badge,
    Stat
  } = DS;
  const rows = [['City of El Dorado', '58.710', '36.85', '$251', '$629'], ['USD 490 (local portion)*', '42.456', '31.83', '$122', '$306'], ['Butler County', '29.625', '27.79', '$21', '$53'], ['Butler Community College', '13.239', '12.42', '$9', '$24']];
  const cell = {
    padding: '12px 10px',
    borderTop: '1px solid var(--border-1)',
    font: '500 16px/1.3 var(--font-body)'
  };
  const num = {
    ...cell,
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums'
  };
  const tot = {
    ...num,
    borderTop: '2px solid var(--edf-blue)',
    font: '900 20px/1 var(--font-display)',
    color: 'var(--edf-blue)'
  };
  const big = {
    font: '900 clamp(64px,8vw,104px)/0.9 var(--font-display)',
    color: 'var(--edf-blue)',
    letterSpacing: 'var(--tracking-display)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    id: "taxes",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Property taxes"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, "What a $1 billion data center could mean for your tax bill"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      alignSelf: 'flex-start',
      height: 30,
      fontSize: 12,
      letterSpacing: '.02em',
      textTransform: 'none'
    }
  }, "Illustrative example"), /*#__PURE__*/React.createElement(P, null, "When a large new property joins the tax base, the cost of local government is spread across more value. If the City, county, school district and college each collect the same total dollars as before (called revenue-neutral), their mill levies fall, and ", /*#__PURE__*/React.createElement("strong", null, "existing homeowners pay less"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: big
  }, "$1,010"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px/1.4 var(--font-body)'
    }
  }, "a year saved on a $250,000 home"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 17px/1.45 var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, "That's close to the average Kansas home value of $250,918, and about 22% of the modeled bill.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      background: 'var(--bg-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 36px/1 var(--font-display)',
      color: 'var(--edf-blue)'
    }
  }, "$404"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.4 var(--font-body)'
    }
  }, "saved for every $100,000 of your home's value. Multiply to estimate your own.")), /*#__PURE__*/React.createElement(Src, {
    ids: ['zillowKs']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--edf-blue)'
    }
  }, "Modeled savings by taxing entity, 2026 levies"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 520
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Taxing entity', 'Mills today', 'Revenue-neutral', 'Per $100K', '$250K home'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...cell,
      borderTop: 0,
      font: '700 13px/1.3 var(--font-body)',
      color: 'var(--fg-2)',
      textAlign: i ? 'right' : 'left'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: cell
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...num,
      fontWeight: 700
    }
  }, r[4]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      fontWeight: 700,
      borderTop: '2px solid var(--edf-blue)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...num,
      borderTop: '2px solid var(--edf-blue)'
    }
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...num,
      borderTop: '2px solid var(--edf-blue)'
    }
  }), /*#__PURE__*/React.createElement("td", {
    style: tot
  }, "$404"), /*#__PURE__*/React.createElement("td", {
    style: tot
  }, "$1,010"))))), /*#__PURE__*/React.createElement(P, {
    style: {
      fontSize: 15,
      color: 'var(--fg-2)'
    }
  }, "The statewide school levy is set by Kansas law, so it is not reduced in this example. *The USD 490 local rate is from the original analysis and still needs confirming against the district's 2025\u201326 budget."), /*#__PURE__*/React.createElement(Src, {
    ids: ['city2026', 'cityNotice2026', 'county2026', 'bcc2026']
  }))), /*#__PURE__*/React.createElement(Grid, {
    min: 320,
    gap: 20
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "How the example works",
    title: "The assumptions"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "A $1 billion data center inside El Dorado city limits and USD 490"), /*#__PURE__*/React.createElement("li", null, "$300 million of it is taxable real property (land, buildings, site improvements)"), /*#__PURE__*/React.createElement("li", null, "Assessed at the 25% commercial rate: $75 million of new assessed value"), /*#__PURE__*/React.createElement("li", null, "Homes assessed at the 11.5% residential rate"), /*#__PURE__*/React.createElement("li", null, "Each taxing entity holds its total property-tax revenue flat")), /*#__PURE__*/React.createElement(Src, {
    ids: ['kdorRatio', 'kdorExempt', 'ksa79201x']
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "What could change it",
    title: "Why $1 billion isn't $1 billion of tax base"
  }, "Kansas exempts business machinery and equipment bought after June 30, 2006, from property tax, and that includes computers. ", /*#__PURE__*/React.createElement("strong", null, "This rule applies to every business in Kansas"), ", not just data centers. Because most of a data center's cost is equipment, this example counts only $300 million as taxable. That figure is an assumption, not a known project, so the real result could be higher or lower.", /*#__PURE__*/React.createElement(Src, {
    ids: ['kdorAbate', 'ksa79223', 'ksCommerceExempt']
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Common misconceptions"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 36
    }
  }, "What people get wrong about data center taxes")), /*#__PURE__*/React.createElement(Grid, {
    min: 320,
    gap: 20
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Kansas SB 98",
    title: "It's a sales tax break, not a property tax break"
  }, "In 2025 Kansas passed Senate Bill 98. It lets qualifying data centers skip sales tax on what they buy to build and equip the facility, for up to 20 years, if they invest at least $250 million and create jobs. It ", /*#__PURE__*/React.createElement("strong", null, "does not touch property tax"), ". The data center ", /*#__PURE__*/React.createElement("strong", null, "still pays property tax on its land and buildings"), " every year, like any other business. The same law also ", /*#__PURE__*/React.createElement("strong", null, "bars utilities from giving data centers discounted electric rates"), ".", /*#__PURE__*/React.createElement(Src, {
    ids: ['sb98Summary', 'sb98Commerce', 'ksStatute']
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Barber County, Kansas",
    title: "Google agreed to pay 100% of its property taxes"
  }, "In August 2026, Barber County approved Google's first Kansas data center, a 1.7 million square foot, air-cooled facility near Sharon. Under the agreement, Google pays ", /*#__PURE__*/React.createElement("strong", null, "100% of its property taxes with no abatement"), ", plus $5.5 million in community benefit payments. County leaders estimate ", /*#__PURE__*/React.createElement("strong", null, "more than $320 million in taxes over 20 years"), ", in a county with an $11 million annual budget.", /*#__PURE__*/React.createElement(Src, {
    ids: ['kakeBarber', 'kwchBarber']
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Abatements",
    title: "A tax break isn't automatic"
  }, /*#__PURE__*/React.createElement("strong", null, "A property tax abatement is a choice local officials make in public"), ", not something a data center gets by default. Under El Dorado's rules, any incentive would be a separate decision from the Special Use Permit. Barber County shows ", /*#__PURE__*/React.createElement("strong", null, "a large data center can come to Kansas paying its full share"), ".", /*#__PURE__*/React.createElement(Src, {
    ids: ['pcApr', 'kakeBarber']
  }))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Construction"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 40
    }
  }, "Years of work before it ever opens"), /*#__PURE__*/React.createElement(P, null, "A large data center takes ", /*#__PURE__*/React.createElement("strong", null, "18 to 36 months"), " to build, and big campuses are often built in phases over several years. At peak, ", /*#__PURE__*/React.createElement("strong", null, "800 to 1,500 workers"), " can be on site. Those workers ", /*#__PURE__*/React.createElement("strong", null, "rent rooms, eat in our restaurants, fill up at our gas stations, and shop in our stores"), " the whole time."), /*#__PURE__*/React.createElement(P, null, "That spending supports local businesses, and sales tax on it helps fund the City. SB 98's exemption covers the data center's own purchases, ", /*#__PURE__*/React.createElement("strong", null, "not what workers spend in town"), "."), /*#__PURE__*/React.createElement(Src, {
    ids: ['cbreBuild', 'axiosBuild', 'kwchBarber']
  })), /*#__PURE__*/React.createElement(Grid, {
    min: 220,
    gap: 16
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "18\u201336",
    label: "Months to build a large data center campus"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    value: "1,500",
    tone: "green",
    label: "Workers on site at peak construction for a single large building"
  }))))));
}
window.Why = Why;
window.TaxExample = TaxExample;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Why.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/_archive/Home-v1.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Button,
    Card,
    Stat,
    ChecklistPanel,
    VoteNoLockup,
    Badge
  } = DS;
  const facts = [['10 MW', 'Peak electrical load that makes a data center "high impact"'], ['100,000', 'Gallons of water per day, the other high-impact trigger'], ['80 kWh', 'Battery storage above this size is banned (Tier 2 & 3)'], ['10 years', 'Length of the ban. Only another public vote can change it.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--edf-blue)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '80px var(--gutter) 88px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--edf-lime)"
  }, "Special Question Election \xB7 Tuesday, November 3, 2026"), /*#__PURE__*/React.createElement(VoteNoLockup, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('ballot')
  }, "What's on the ballot"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go('why')
  }, "Why it matters here"))), /*#__PURE__*/React.createElement(ChecklistPanel, {
    style: {
      background: 'var(--edf-navy)',
      maxWidth: 420,
      justifySelf: 'end',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--edf-gradient)'
    }
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "1 \xB7 What are we voting on?"), /*#__PURE__*/React.createElement(H2, null, "A 10-year ban, decided in one vote"), /*#__PURE__*/React.createElement(P, null, "The ordinance would prohibit the installation and operation of \u201CHigh Impact Data Centers\u201D and Tier 2 and Tier 3 battery energy storage systems in the City of El Dorado. If adopted, it stays in effect for ten years and can only be repealed or amended during that time by another vote of the electors."), /*#__PURE__*/React.createElement(Src, {
    ids: ['ballot'],
    more: "#ballot"
  })), /*#__PURE__*/React.createElement(Grid, {
    min: 190,
    gap: 16
  }, facts.map(([v, l]) => /*#__PURE__*/React.createElement(Card, {
    key: v,
    tone: "paper",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    label: l
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('ballot')
  }, "Read the exact ballot language")))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "3 \xB7 Prohibition vs. regulation"), /*#__PURE__*/React.createElement(H2, null, "El Dorado already has rules for this"), /*#__PURE__*/React.createElement(P, null, "On June 6, 2026, the City Commission adopted Ordinance G-1463. It defines data centers and battery storage in the zoning code and allows them only in industrial districts, and only through a Special Use Permit. That means a public hearing, detailed disclosure of water and power needs, and the City's right to attach conditions or say no."), /*#__PURE__*/React.createElement(Src, {
    ids: ['eldocomm', 'g1463'],
    more: "#regulate"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => go('regulate')
  }, "How the City's rules work"))), /*#__PURE__*/React.createElement(Quote, {
    cite: "City Attorney, Legal Memo to the City Commission, May 28, 2026",
    ids: ['legalMemo']
  }, "Declining to adopt it does not keep data centers out; it keeps the public out of the process if one is ever proposed."))), /*#__PURE__*/React.createElement(Pano, {
    src: "el-dorado-aerial-pano.jpg",
    label: "Aerial panorama of El Dorado with El Dorado Lake on the horizon"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "2 \xB7 Why is this an El Dorado issue?"), /*#__PURE__*/React.createElement(H2, null, "What's at stake for El Dorado")), /*#__PURE__*/React.createElement(Grid, {
    min: 300
  }, /*#__PURE__*/React.createElement(Card, {
    icon: "trending-down",
    eyebrow: "Real challenges",
    title: "El Dorado has real challenges.",
    interactive: true,
    onClick: () => go('why')
  }, "Solving them requires more growth, investment and economic opportunity, not less."), /*#__PURE__*/React.createElement(Card, {
    icon: "waves",
    eyebrow: "El Dorado Lake",
    title: "Water capacity built for growth",
    interactive: true,
    onClick: () => go('why')
  }, "El Dorado Lake created water capacity specifically intended to support future growth and industry."), /*#__PURE__*/React.createElement(Card, {
    icon: "building-2",
    eyebrow: "The next company",
    title: "The next company is watching",
    interactive: true,
    onClick: () => go('why')
  }, "The next company considering El Dorado may have nothing to do with data centers. Will El Dorado make their short list?")))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-subtle)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Go as deep as you want"), /*#__PURE__*/React.createElement(Grid, {
    min: 260,
    gap: 16
  }, [['clock-3', 'Quick visit', '30–60 seconds', 'The ballot question, what it does, and why it matters here.', 'ballot'], ['book-open', 'Interested voter', '3–5 minutes', 'Local context, impacts, regulation options, and other communities.', 'impacts'], ['library', 'Deep dive', '20+ minutes', 'Primary documents, technical studies, legal analysis, and perspectives.', 'sources']].map(([i, t, d, b, to]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    icon: i,
    title: t,
    interactive: true,
    onClick: () => go(to),
    footer: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, d)
  }, b))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/_archive/Home-v1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Source registry for the El Dorado Forward site. Tiers follow the content plan's hierarchy.
const LIB = '../../research/library/pdf/';
window.EDF_SOURCES = {
  ballot: {
    t: 'Citizen-Initiated Petition Ballot Question (official ballot language)',
    by: 'City of El Dorado',
    d: 'Aug 31, 2026',
    u: 'https://eldoks.gov/m/newsflash/Home/Detail/692',
    tier: 'primary'
  },
  petitionStmt: {
    t: 'Official Statement on Decision Regarding Citizen-Initiated Petition',
    by: 'City of El Dorado',
    d: 'Jul 14, 2026',
    u: 'https://www.eldoks.gov/m/newsflash/home/detail/665',
    tier: 'primary'
  },
  judge: {
    t: 'Judge Declares Citizen-Initiated Petition Question Legislative',
    by: 'City of El Dorado',
    d: 'Aug 21, 2026',
    u: 'https://www.eldoks.gov/m/newsflash/home/detail/683',
    tier: 'primary'
  },
  zoningStmt: {
    t: 'Official Statement Regarding Proposed Zoning Text Amendment',
    by: 'City of El Dorado',
    d: 'May 22, 2026',
    u: 'https://eldoks.gov/m/newsflash/home/detail/632',
    tier: 'primary'
  },
  statements: {
    t: 'Official Statements & Community Communications',
    by: 'City of El Dorado',
    u: 'https://www.eldoks.gov/638/Official-Statements',
    tier: 'primary'
  },
  petitionPdf: {
    t: 'Petition / Proposed Ordinance',
    by: 'Petitioners (filed with the City)',
    d: 'Jun 22, 2026',
    u: LIB + 'eldorado-petition-ordinance.pdf',
    tier: 'primary'
  },
  g1463: {
    t: 'Zoning Amendments for Emerging Industries (Ordinance G-1463), as approved',
    by: 'City of El Dorado',
    d: 'Jun 2026',
    u: LIB + 'eldorado-zoning-amendments-approved.pdf',
    tier: 'primary'
  },
  staffMemo: {
    t: 'Emerging Industries: Staff Memo',
    by: 'City of El Dorado',
    d: 'Jun 1, 2026',
    u: LIB + 'eldorado-emerging-industries-staff-memo.pdf',
    tier: 'primary'
  },
  legalMemo: {
    t: 'Emerging Industries: Legal Memo',
    by: 'City Attorney, City of El Dorado',
    d: 'May 28, 2026',
    u: LIB + 'eldorado-emerging-industries-legal-memo.pdf',
    tier: 'primary'
  },
  eldocomm: {
    t: 'City Commission Summary / Legal Brief on the Petition Ordinance',
    by: 'City Manager, City of El Dorado',
    d: 'Jul 13, 2026',
    u: LIB + 'eldocomm-summary-legal-brief.pdf',
    tier: 'primary'
  },
  court: {
    t: 'Butler County District Court, Case BU-2026-CV-000245',
    by: 'Kansas Courts case search',
    u: 'https://www.kscourts.gov',
    tier: 'primary'
  },
  industrialWater: {
    t: 'Industrial Water',
    by: 'City of El Dorado',
    u: 'https://www.eldoks.gov/376/Industrial-Water',
    tier: 'primary'
  },
  lake: {
    t: 'El Dorado Regional Water Supply',
    by: 'City of El Dorado',
    u: 'https://www.eldoks.gov/340/El-Dorado-Regional-Water-Supply',
    tier: 'primary'
  },
  history: {
    t: 'History of El Dorado',
    by: 'City of El Dorado',
    u: 'https://www.eldoks.gov/525/History-of-El-Dorado',
    tier: 'primary'
  },
  cityFaq: {
    t: 'Public Utilities FAQ: El Dorado Reservoir storage and drought yield',
    by: 'City of El Dorado',
    u: 'https://www.eldoks.gov/m/faq?cat=17',
    tier: 'primary'
  },
  vantage: {
    t: 'Cooling Without the Drain: How Closed-Loop Systems Cut Day-to-Day Water Use',
    by: 'Vantage Data Centers',
    d: 'Apr 22, 2026',
    u: 'https://blog.vantage-dc.com/2026/04/22/cooling-without-the-drain-how-closed-loop-systems-cut-day-to-day-water-use/',
    tier: 'research'
  },
  msftZeroWater: {
    t: 'Sustainable by design: Next-generation datacenters consume zero water for cooling',
    by: 'Microsoft',
    d: 'Dec 9, 2024',
    u: 'https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/',
    tier: 'research'
  },
  kdorAbate: {
    t: 'Property Tax Abatements: commercial and industrial machinery and equipment exemption',
    by: 'Kansas Department of Revenue',
    u: 'https://www.ksrevenue.gov/prtaxincentives-proptaxabate.html',
    tier: 'gov'
  },
  ksCommerceExempt: {
    t: 'Taxes, Credits and Exemptions: machinery and equipment can include computers',
    by: 'Kansas Department of Commerce',
    u: 'https://www.kansascommerce.gov/businesses/taxes-credits-and-exemptions/',
    tier: 'gov'
  },
  kdorExempt: {
    t: 'Property Tax Exemptions: residential exemption from the statewide school levy',
    by: 'Kansas Department of Revenue',
    u: 'https://www.ksrevenue.gov/pvdptexemptions.html',
    tier: 'gov'
  },
  ksa79201x: {
    t: 'K.S.A. 79-201x: residential exemption from the statewide school levy',
    by: 'Kansas Legislature',
    u: 'https://kslegislature.gov/b2025_26/laws/079_000_0000_chapter/079_002_0000_article/079_002_0001x_section/079_002_0001x_k/',
    tier: 'primary'
  },
  ksa79223: {
    t: 'K.S.A. 79-223: exemption for newly purchased commercial and industrial machinery and equipment',
    by: 'Kansas Legislature',
    u: 'https://kslegislature.gov/li_2024s/b2023_24/statute/079_000_0000_chapter/079_002_0000_article/079_002_0023_section/079_002_0023_k/',
    tier: 'primary'
  },
  kdorRatio: {
    t: '2021 Appraisal/Sales Ratio Study: 11.5% residential and 25% commercial assessment ratios',
    by: 'Kansas Department of Revenue',
    u: 'https://www.ksrevenue.gov/pdf/21FinalRatioStudy.pdf',
    tier: 'gov'
  },
  jtEG: {
    t: "Mayor touts data center benefits at well-attended Elk Grove town hall",
    by: "Journal & Topics",
    d: 'May 22, 2026',
    u: 'https://www.journal-topics.com/articles/mayor-touts-data-center-benefits-at-well-attended-elk-grove-town-hall/',
    tier: 'news'
  },
  fox32EG: {
    t: "Elk Grove Village residents question future of data center expansion",
    by: "FOX 32 Chicago",
    d: 'May 21, 2026',
    u: 'https://www.fox32chicago.com/news/elk-grove-village-residents-question-future-data-center-expansion',
    tier: 'news'
  },
  nbcEG: {
    t: "'Data center capital' of the Midwest, Elk Grove Village, expands",
    by: "NBC Chicago",
    d: 'Jun 24, 2026',
    u: 'https://www.nbcchicago.com/news/local/data-center-capital-of-the-midwest-expands-as-pritzker-calls-for-regulations/3952720/',
    tier: 'news'
  },
  stlprFestus: {
    t: "Festus data center opposition group sues the city and developer",
    by: "St. Louis Public Radio",
    d: 'Apr 13, 2026',
    u: 'https://www.stlpr.org/government-politics-issues/2026-04-10/data-center-opposition-group-sues-city-festus-proposed-developer',
    tier: 'news'
  },
  leaderFestus: {
    t: "No plans yet submitted for proposed Festus data center project; civil lawsuits loom",
    by: "Jefferson County Leader",
    d: 'Jun 17, 2026',
    u: 'https://www.myleaderpaper.com/news/festus-data-center-project-crg-no-plans/article_ab6bdd18-252a-4a31-a1c1-5aa2abaea351.html',
    tier: 'news'
  },
  ksdkFestus: {
    t: "Residents file lawsuit against city of Festus over $6B data center project",
    by: "KSDK",
    d: 'Apr 9, 2026',
    u: 'https://www.ksdk.com/article/news/local/residents-file-lawsuit-against-city-of-festus-over-6b-data-center-project/63-539fb805-5f08-4e2e-b8c3-1e3551ad4cd0',
    tier: 'news'
  },
  city2026: {
    t: "2026 Revenue Neutral Rate Hearing: proposed mill levy 58.710",
    by: "City of El Dorado",
    d: 'Sep 2025',
    u: 'http://www.eldoks.gov/DocumentCenter/View/14374/2026-Budget-Presentation-PDF',
    tier: 'primary'
  },
  cityNotice2026: {
    t: "2026 Budget Summary and hearing notice: assessed valuation $126.4 million",
    by: "City of El Dorado",
    d: 'Sep 2, 2025',
    u: 'https://www.eldoks.gov/DocumentCenter/View/14333/Final-City-of-El-Dorado-Combined-Budget-and-RNR-Hearing-Notice-PDF---Published-9-2-2025',
    tier: 'primary'
  },
  county2026: {
    t: "Butler County holds revenue-neutral-rate hearing: amended 2026 levy of 29.625 mills",
    by: "Citizen Portal",
    d: 'Aug 26, 2025',
    u: 'https://citizenportal.ai/articles/6024531/Kansas/Butler-County/Butler-County-holds-revenue-neutral-rate-hearing-presents-proposed-2026-budget-and-sales-tax-option',
    tier: 'news'
  },
  bcc2026: {
    t: "Operating Fund Budget Recommendation: FY2026 valuation $1,134.9M, general fund levy 13.239",
    by: "Butler Community College",
    d: 'Mar 30, 2026',
    u: 'https://butlercc.edu/sites/default/files/2026-03/March_30_2026_Budget_Update.pdf',
    tier: 'primary'
  },
  zillowKs: {
    t: "Kansas Housing Market: average home value $250,918",
    by: "Zillow Home Value Index",
    d: 'Jul 31, 2026',
    u: 'https://www.zillow.com/home-values/23/ks/',
    tier: 'research'
  },
  sb98Commerce: {
    t: "SB 98 Data Center Sales Tax Exemption",
    by: "Kansas Department of Commerce",
    d: '2025',
    u: 'https://www.kansascommerce.gov/program/business-incentives-and-services/sb-98-data-center-sales-tax-exemption/',
    tier: 'gov'
  },
  sb98Summary: {
    t: "Qualified Data Center Sales Tax Exemption; SB 98 (bill summary)",
    by: "Kansas Legislature",
    d: '2025',
    u: 'https://kslegislature.gov/li/b2025_26/measures/documents/summary_sb_98_2025',
    tier: 'primary'
  },
  kakeBarber: {
    t: "Barber County finalizes deal with Google for data center project",
    by: "KAKE",
    d: 'Aug 2026',
    u: 'https://www.kake.com/home/barber-county-finalizes-deal-with-google-for-data-center-project/article_c160f315-8198-404c-83ca-a2993b6f8664.html',
    tier: 'news'
  },
  kwchBarber: {
    t: "Barber County Commission approves agreement for Google data center",
    by: "KWCH",
    d: 'Aug 31, 2026',
    u: 'https://www.kwch.com/2026/08/31/barber-county-commission-approves-agreement-google-data-center/',
    tier: 'news'
  },
  axiosBuild: {
    t: "The data center era that is reshaping America",
    by: "Axios",
    d: 'Aug 25, 2026',
    u: 'https://www.axios.com/2026/08/25/data-centers-ai-electricity-water-politics',
    tier: 'news'
  },
  cbreBuild: {
    t: "How many jobs does a data center actually create? (citing CBRE 2024)",
    by: "Arizona Data Center Alliance",
    d: '2024',
    u: 'https://azdatacenter.org/insights/how-many-jobs-does-a-data-center-create.html',
    tier: 'research'
  },
  pcFeb: {
    t: 'Planning Commission agenda, Feb 26, 2026: emerging-industries staff recommendation',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1213/files/agenda/2274',
    tier: 'primary'
  },
  pcMar: {
    t: 'Planning Commission agenda, Mar 26, 2026: special hearing',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1214/files/agenda/3298',
    tier: 'primary'
  },
  pcApr: {
    t: 'Planning Commission agenda, Apr 23, 2026: 6-0 recommendation',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1215/files/agenda/3311',
    tier: 'primary'
  },
  ccJun: {
    t: 'City Commission agenda, Jun 1, 2026: Ordinance G-1463',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1238/files/agenda/3360',
    tier: 'primary'
  },
  ccJul: {
    t: 'City Commission special meeting, Jul 13, 2026: petition next steps',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1313/files',
    tier: 'primary'
  },
  ccAug: {
    t: 'City Commission agenda, Aug 2026: ordinance placed on the ballot',
    by: 'City of El Dorado (CivicClerk)',
    u: 'https://eldoradoks.portal.civicclerk.com/event/1317/files/agenda/4440',
    tier: 'primary'
  },
  nadellaRestaurant: {
    t: 'Microsoft CEO says new AI data centers use as little water annually as a restaurant',
    by: "Tom's Hardware",
    d: 'Jun 2026',
    u: 'https://www.tomshardware.com/tech-industry/big-tech/microsoft-ceo-says-new-ai-data-centers-use-as-little-water-annually-as-a-restaurant-closed-loop-cooling-system-aims-to-slash-consumption-from-millions-of-gallons-as-ai-infrastructure-faces-mounting-environmental-scrutiny',
    tier: 'news'
  },
  lakeDebt: {
    t: "City staff outlines El Dorado's $23.79 million municipal debt and $39.8 million Army Corps obligation",
    by: 'Citizen Portal summary of a City of El Dorado informational video',
    d: 'Mar 2, 2026',
    u: 'https://citizenportal.ai/articles/8577252/kansas/butler-county/el-dorado/city-staff-outlines-el-dorados-2379-million-municipal-debt-and-398-million-army-corps-obligation',
    tier: 'primary'
  },
  fwpcoa: {
    t: 'Myths vs. Reality: Data Centers and Water Usage',
    by: 'Florida Water and Pollution Control Operators Association (Ganesh Hegde, KETOS)',
    d: 'Jan 23, 2026',
    u: 'https://www.fwpcoa.org/content.aspx?page_id=5&club_id=859275&item_id=130961',
    tier: 'research'
  },
  hfsRefinery: {
    t: 'El Dorado, KS refinery: 135,000 barrels per day crude capacity',
    by: 'HF Sinclair Corporation',
    u: 'https://www.hfsinclair.com/operations/facilities/us/el-dorado-ks/default.aspx',
    tier: 'primary'
  },
  doeRefineryWater: {
    t: 'U.S. DOE Refinery Water Study: typical refinery uses about 1.5 barrels of water per barrel of crude',
    by: 'U.S. Department of Energy (Jacobs Consultancy)',
    d: 'Jan 2016',
    u: 'https://www.energy.gov/sites/prod/files/2016/03/f30/US%20DOE%20Refinery%20Water%20Study.pdf',
    tier: 'gov'
  },
  census: {
    t: 'El Dorado, KS: Census profile (ACS)',
    by: 'Census Reporter / U.S. Census Bureau',
    u: 'https://censusreporter.org/profiles/16000US2020075-el-dorado-ks/',
    tier: 'gov'
  },
  budget2026: {
    t: 'El Dorado approves 2026 budget, levies property tax above revenue-neutral rate',
    by: 'Citizen Portal',
    d: 'Sep 16, 2025',
    u: 'https://citizenportal.ai/articles/5927058/Kansas/Butler-County/El-Dorado/El-Dorado-approves-2026-budget-levies-property-tax-above-revenue-neutral-rate',
    tier: 'news'
  },
  cityDebt: {
    t: "City staff outlines El Dorado's municipal debt and Army Corps obligation",
    by: 'Citizen Portal',
    d: 'Mar 2, 2026',
    u: 'https://citizenportal.ai/articles/8577252/kansas/butler-county/el-dorado/city-staff-outlines-el-dorados-2379-million-municipal-debt-and-398-million-army-corps-obligation',
    tier: 'news'
  },
  aoghs: {
    t: 'Kansas Oil Boom',
    by: 'American Oil & Gas Historical Society',
    u: 'https://aoghs.org/petroleum-pioneers/kansas-oil-boom/',
    tier: 'research'
  },
  crs: {
    t: 'Data Centers and Their Energy Consumption: FAQ',
    by: 'Congressional Research Service',
    u: 'https://www.congress.gov/crs_external_products/R/PDF/R48646/R48646.1.pdf',
    tier: 'gov'
  },
  doe: {
    t: 'Report on U.S. Data Center Energy Use',
    by: 'U.S. Department of Energy',
    u: 'https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers',
    tier: 'gov'
  },
  lbnl: {
    t: 'The Water Use of Data Center Workloads',
    by: 'Lawrence Berkeley National Laboratory',
    u: 'https://datacenters.lbl.gov/publications/water-use-data-center-workloads',
    tier: 'gov'
  },
  gao: {
    t: "Artificial Intelligence: Generative AI's Environmental and Human Effects",
    by: 'U.S. GAO',
    u: 'https://www.gao.gov/products/gao-25-107172',
    tier: 'gov'
  },
  ncslSubsidies: {
    t: 'Subsidizing Servers: How States Are Competing to Attract Data Centers',
    by: 'NCSL',
    d: 'Apr 1, 2026',
    u: 'https://www.ncsl.org/fiscal/subsidizing-servers-how-states-are-competing-to-attract-data-centers',
    tier: 'gov'
  },
  ncslSnapshot: {
    t: 'Policy Snapshot: Data Center Incentives',
    by: 'NCSL',
    u: 'https://www.ncsl.org/fiscal/policy-snapshot-data-center-incentives',
    tier: 'gov'
  },
  ncslBans: {
    t: 'Which States Are Banning Data Centers?',
    by: 'NCSL',
    u: 'https://www.ncsl.org/fiscal/which-states-are-banning-data-centers',
    tier: 'gov'
  },
  ksStatute: {
    t: 'K.S.A. 79-3606 (Kansas data center sales tax exemption)',
    by: 'Kansas Revisor of Statutes',
    u: 'https://ksrevisor.gov/statutes/chapters/ch79/079_036_0006.html',
    tier: 'primary'
  },
  nacoPrimer: {
    t: 'Informational Primer and County Considerations: Data Centers',
    by: 'National Association of Counties',
    u: 'https://www.naco.org/resource/naco-informational-primer-and-county-considerations-data-centers',
    tier: 'pro'
  },
  nacoHub: {
    t: 'Data Centers Resource Hub',
    by: 'National Association of Counties',
    u: 'https://www.naco.org/resource/data-centers-resource-hub',
    tier: 'pro'
  },
  nacoEcon: {
    t: 'Economic Considerations for Data Centers',
    by: 'National Association of Counties',
    u: 'https://www.naco.org/event/economic-considerations-data-centers-understanding-revenue-risk-and-long-term-value',
    tier: 'pro'
  },
  nacoBess: {
    t: 'Energy Technologies and Siting Considerations: BESS',
    by: 'National Association of Counties',
    u: 'https://www.naco.org/resource/energy-technologies-and-siting-considerations-battery-energy-storage-system-bess',
    tier: 'bess'
  },
  nfpa855: {
    t: 'NFPA 855: Installation of Stationary Energy Storage Systems',
    by: 'NFPA',
    u: 'https://link.nfpa.org/all-publications/855/2023',
    tier: 'bess'
  },
  nfpaSheet: {
    t: 'Energy Storage Systems Fact Sheet',
    by: 'NFPA',
    u: 'https://www.nfpa.org/-/media/project/storefront/catalog/files/code-or-topic-fact-sheets/ESSFactSheet.pdf',
    tier: 'bess'
  },
  urban: {
    t: '25 Questions for States and Cities to Ask During a Moratorium',
    by: 'Urban Institute',
    u: 'https://www.urban.org/research/publication/25-questions-states-and-cities-ask-during-moratorium-and-data-center-breaks',
    tier: 'pro'
  },
  wilmer: {
    t: 'Data Centers in Court: Nuisance, Environmental, and Land-Use Litigation',
    by: 'WilmerHale',
    d: 'Jul 13, 2026',
    u: LIB + 'wilmerhale-data-centers-in-court.pdf',
    tier: 'pro'
  },
  uli: {
    t: 'Data Center Whitepaper',
    by: 'Urban Land Institute',
    d: '2024',
    u: LIB + 'uli-data-center-whitepaper.pdf',
    tier: 'pro'
  },
  egZoning: {
    t: 'Innovation & Technology Center Zoning Regulations',
    by: 'Elk Grove Village, IL',
    u: 'https://www.elkgrove.org/home/showpublisheddocument/15502/638954377180630000',
    tier: 'community'
  },
  egHearing: {
    t: 'Prime Data Centers Plan Commission Public Hearing',
    by: 'Elk Grove Village, IL',
    u: 'https://www.elkgrove.org/Home/Components/Calendar/Event/9218/61',
    tier: 'community'
  },
  egTownHall: {
    t: '2026 Data Center Town Hall',
    by: 'Elk Grove Village, IL',
    u: 'https://www.elkgrove.org/Home/Components/Calendar/Event/9496/61',
    tier: 'community'
  },
  egUpdate: {
    t: 'Village Update on Data-Center Development and Annexation',
    by: 'Elk Grove Village, IL',
    u: 'https://www.elkgrove.org/Home/Components/News/News/6481/6363',
    tier: 'community'
  },
  egRegs: {
    t: 'Data Center Regulations & Guidelines',
    by: 'Elk Grove Village, IL',
    u: LIB + 'elk-grove-village-regs-guidelines.pdf',
    tier: 'community'
  },
  festusRepo: {
    t: 'Proposed Data Center Information & Document Repository',
    by: 'City of Festus, MO',
    u: 'https://festusmo.gov/461/Information-related-to-the-Proposed-Data',
    tier: 'community'
  },
  festusCode: {
    t: 'Festus Data Center Regulations',
    by: 'City of Festus Code',
    u: 'https://ecode360.com/28129776',
    tier: 'community'
  },
  festusMayor: {
    t: "Mayor's March 2026 Statement / Development Agreement Update",
    by: 'City of Festus, MO',
    u: 'https://www.festusmo.gov/CivicAlerts.aspx?AID=230',
    tier: 'community'
  },
  festusSuit: {
    t: 'Festus residents file lawsuit against city, data center developer',
    by: 'Spectrum News',
    d: 'Apr 10, 2026',
    u: 'https://spectrumlocalnews.com/mo/st-louis/news/2026/04/10/festus-residents-file-lawsuit-against-city--data-center-developer-',
    tier: 'news'
  },
  festusCouncil: {
    t: 'Festus City Council approval and community response',
    by: 'Spectrum News',
    d: 'Mar 31, 2026',
    u: 'https://spectrumlocalnews.com/mo/st-louis/news/2026/03/31/st-louis-festus-data-center-project-crg',
    tier: 'news'
  }
};
window.EDF_PERSPECTIVES = {
  'Policy research & advocacy organizations': [['Goldwater Institute', 'Powering the AI Boom', 'goldwater-powering-the-ai-boom.pdf'], ['Goldwater Institute', 'The Data Center Debate: Fact vs. Fiction', 'goldwater-fact-vs-fiction.pdf'], ['Kansas Policy Institute', 'Kansans Need Facts about Data Centers', 'kansas-policy-institute-data-centers.pdf'], ['The Buckeye Institute', 'Data Centers', 'buckeye-institute-data-centers.pdf'], ['Wyoming EDA', 'Mythbusting Data Centers', 'wyoming-eda-mythbusting.pdf'], ['Energy Central', 'Demystifying Data Center Myths', 'energycentral-demystifying-myths.pdf']],
  'Commentary & opinion': [['Townhall', 'AI and the Electricity Grid: A Stress Test Showing the Cracks', 'townhall-ai-grid-stress-test.pdf'], ["Townhall", "Data Centers Aren't the Problem. Scarcity Politics Is.", 'townhall-scarcity-politics.pdf'], ['Townhall', 'Massive AI Data Centers Are Bringing Economic Booms to Counties', 'townhall-economic-booms-counties.pdf'], ['RedState', 'Georgia, Texas, Virginia: New Data Centers Mean Cheaper Electricity', 'redstate-cheaper-electricity.pdf'], ['HotAir', 'The Rhetoric About AI Data Centers Is Ridiculous', 'hotair-rhetoric-is-ridiculous.pdf'], ['Bowling Green Daily News', 'Targeted zoning reforms are the right response to data centers', 'bgdn-targeted-zoning-reforms.pdf']]
};
window.EDF_TIERS = {
  primary: 'El Dorado & primary',
  gov: 'Government & technical research',
  pro: 'Professional, local-government & legal',
  bess: 'Battery storage',
  community: 'Other communities',
  research: 'History',
  news: 'News reporting'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.js
try { (() => {
window.__LUCIDE_ICONS = {
  "clock": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <polyline points=\"12 6 12 12 16 14\" /> </svg>",
  "arrow-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" /> </svg>",
  "ban": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m4.9 4.9 14.2 14.2\" /> </svg>",
  "shield-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"M12 8v4\" /> <path d=\"M12 16h.01\" /> </svg>",
  "trending-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\" /> <polyline points=\"16 17 22 17 22 11\" /> </svg>",
  "droplets": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\" /> <path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\" /> </svg>",
  "receipt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\" /> <path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /> <path d=\"M12 17.5v-11\" /> </svg>",
  "landmark": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" /> </svg>",
  "shield-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" /> </svg>",
  "file-search": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3\" /> <path d=\"m9 18-1.5-1.5\" /> <circle cx=\"5\" cy=\"14\" r=\"3\" /> </svg>",
  "circle-x": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m15 9-6 6\" /> <path d=\"m9 9 6 6\" /> </svg>",
  "lock": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" /> </svg>",
  "users": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /> </svg>",
  "ruler": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" /> <path d=\"m14.5 12.5 2-2\" /> <path d=\"m11.5 9.5 2-2\" /> <path d=\"m8.5 6.5 2-2\" /> <path d=\"m17.5 15.5 2-2\" /> </svg>",
  "volume-2": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /> <path d=\"M16 9a5 5 0 0 1 0 6\" /> <path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" /> </svg>",
  "history": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /> <path d=\"M3 3v5h5\" /> <path d=\"M12 7v5l4 2\" /> </svg>",
  "zap": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" /> </svg>",
  "recycle": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5\" /> <path d=\"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12\" /> <path d=\"m14 16-3 3 3 3\" /> <path d=\"M8.293 13.596 7.196 9.5 3.1 10.598\" /> <path d=\"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843\" /> <path d=\"m13.378 9.633 4.096 1.098 1.097-4.096\" /> </svg>",
  "house": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" /> </svg>",
  "battery-charging": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2\" /> <path d=\"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1\" /> <path d=\"m11 7-3 5h4l-3 5\" /> <line x1=\"22\" x2=\"22\" y1=\"11\" y2=\"13\" /> </svg>",
  "building": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M9 22v-4h6v4\" /> <path d=\"M8 6h.01\" /> <path d=\"M16 6h.01\" /> <path d=\"M12 6h.01\" /> <path d=\"M12 10h.01\" /> <path d=\"M12 14h.01\" /> <path d=\"M16 10h.01\" /> <path d=\"M16 14h.01\" /> <path d=\"M8 10h.01\" /> <path d=\"M8 14h.01\" /> </svg>",
  "flame": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\" /> </svg>",
  "map": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\" /> <path d=\"M15 5.764v15\" /> <path d=\"M9 3.236v15\" /> </svg>",
  "scale": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"M7 21h10\" /> <path d=\"M12 3v18\" /> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" /> </svg>",
  "circle-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" /> </svg>",
  "gift": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\" /> <path d=\"M12 8v13\" /> <path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\" /> <path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\" /> </svg>",
  "triangle-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" /> </svg>",
  "map-pin": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /> <circle cx=\"12\" cy=\"10\" r=\"3\" /> </svg>",
  "info": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" /> </svg>",
  "square-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"m9 12 2 2 4-4\" /> </svg>",
  "square-check-big": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5\" /> <path d=\"m9 11 3 3L22 4\" /> </svg>",
  "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" /> </svg>",
  "check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 6 9 17l-5-5\" /> </svg>",
  "chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m6 9 6 6 6-6\" /> </svg>",
  "plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 12h14\" /> <path d=\"M12 5v14\" /> </svg>",
  "minus": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 12h14\" /> </svg>",
  "file-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M12 18v-6\" /> <path d=\"m9 15 3 3 3-3\" /> </svg>",
  "external-link": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" /> </svg>",
  "file-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" /> </svg>",
  "chart-no-axes-column": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"18\" x2=\"18\" y1=\"20\" y2=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"20\" y2=\"4\" /> <line x1=\"6\" x2=\"6\" y1=\"20\" y2=\"14\" /> </svg>",
  "circle-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" /> </svg>",
  "menu": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" /> </svg>",
  "waves": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" /> <path d=\"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" /> <path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" /> </svg>",
  "building-2": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" /> </svg>",
  "eye": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" /> </svg>",
  "lightbulb": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\" /> <path d=\"M9 18h6\" /> <path d=\"M10 22h4\" /> </svg>",
  "arrow-left": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" /> </svg>",
  "chevron-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m9 18 6-6-6-6\" /> </svg>"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ChecklistPanel = __ds_scope.ChecklistPanel;

__ds_ns.SourceNote = __ds_scope.SourceNote;

__ds_ns.VoteNoLockup = __ds_scope.VoteNoLockup;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
