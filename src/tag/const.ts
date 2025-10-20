const htmlTags = {
  a: {
    attributes: ["href", "target", "download", "rel", "hreflang", "type"],
  },
  abbr: {
    attributes: ["title"],
  },
  address: {
    attributes: [],
  },
  area: {
    attributes: ["shape", "coords", "href", "alt", "target"],
  },
  article: {
    attributes: [],
  },
  aside: {
    attributes: [],
  },
  audio: {
    attributes: ["src", "controls", "autoplay", "muted", "loop", "preload"],
  },
  b: {
    attributes: [],
  },
  base: {
    attributes: ["href", "target"],
  },
  bdi: {
    attributes: ["dir"],
  },
  bdo: {
    attributes: ["dir"],
  },
  blockquote: {
    attributes: ["cite"],
  },
  body: {
    attributes: ["onload", "onunload"],
  },
  br: {
    attributes: [],
  },
  button: {
    attributes: [
      "type",
      "name",
      "value",
      "disabled",
      "autofocus",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
    ],
  },
  canvas: {
    attributes: ["width", "height"],
  },
  caption: {
    attributes: [],
  },
  cite: {
    attributes: [],
  },
  code: {
    attributes: [],
  },
  col: {
    attributes: ["span", "width"],
  },
  colgroup: {
    attributes: ["span"],
  },
  data: {
    attributes: ["value"],
  },
  datalist: {
    attributes: [],
  },
  dd: {
    attributes: [],
  },
  del: {
    attributes: ["cite", "datetime"],
  },
  details: {
    attributes: ["open"],
  },
  dfn: {
    attributes: [],
  },
  dialog: {
    attributes: ["open"],
  },
  div: {
    attributes: ["id", "class", "style", "title", "lang"],
  },
  dl: {
    attributes: [],
  },
  dt: {
    attributes: [],
  },
  em: {
    attributes: [],
  },
  embed: {
    attributes: ["src", "type", "width", "height", "autoplay"],
  },
  fieldset: {
    attributes: ["disabled", "form", "name"],
  },
  figcaption: {
    attributes: [],
  },
  figure: {
    attributes: [],
  },
  footer: {
    attributes: [],
  },
  form: {
    attributes: ["action", "method", "enctype", "target", "novalidate"],
  },
  h1: {
    attributes: [],
  },
  h2: {
    attributes: [],
  },
  h3: {
    attributes: [],
  },
  h4: {
    attributes: [],
  },
  h5: {
    attributes: [],
  },
  h6: {
    attributes: [],
  },
  head: {
    attributes: [],
  },
  header: {
    attributes: [],
  },
  hr: {
    attributes: [],
  },
  html: {
    attributes: ["lang"],
  },
  i: {
    attributes: [],
  },
  iframe: {
    attributes: [
      "src",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
    ],
  },
  img: {
    attributes: ["src", "alt", "width", "height", "loading", "srcset", "sizes"],
  },
  input: {
    attributes: [
      "type",
      "name",
      "value",
      "checked",
      "required",
      "readonly",
      "placeholder",
      "maxlength",
      "min",
      "max",
      "step",
    ],
  },
  ins: {
    attributes: ["cite", "datetime"],
  },
  kbd: {
    attributes: [],
  },
  label: {
    attributes: ["for", "form", "name"],
  },
  legend: {
    attributes: [],
  },
  li: {
    attributes: ["value"],
  },
  link: {
    attributes: ["rel", "href", "type", "media", "as", "crossorigin"],
  },
  main: {
    attributes: [],
  },
  map: {
    attributes: ["name"],
  },
  mark: {
    attributes: [],
  },
  menu: {
    attributes: ["type", "label"],
  },
  meta: {
    attributes: ["charset", "name", "content", "http-equiv"],
  },
  meter: {
    attributes: ["value", "min", "max", "low", "high", "optimum"],
  },
  nav: {
    attributes: [],
  },
  noscript: {
    attributes: [],
  },
  object: {
    attributes: ["data", "type", "width", "height", "name", "form", "usemap"],
  },
  ol: {
    attributes: ["start", "type", "reversed"],
  },
  optgroup: {
    attributes: ["label", "disabled"],
  },
  option: {
    attributes: ["value", "selected", "disabled"],
  },
  output: {
    attributes: ["for", "name"],
  },
  p: {
    attributes: [],
  },
  param: {
    attributes: ["name", "value"],
  },
  picture: {
    attributes: [],
  },
  pre: {
    attributes: [],
  },
  progress: {
    attributes: ["value", "max"],
  },
  q: {
    attributes: ["cite"],
  },
  rp: {
    attributes: [],
  },
  rt: {
    attributes: [],
  },
  ruby: {
    attributes: [],
  },
  s: {
    attributes: [],
  },
  samp: {
    attributes: [],
  },
  script: {
    attributes: ["src", "type", "defer", "async"],
  },
  section: {
    attributes: [],
  },
  select: {
    attributes: ["name", "multiple", "size"],
  },
  small: {
    attributes: [],
  },
  source: {
    attributes: ["src", "type", "media"],
  },
  span: {
    attributes: [],
  },
  strong: {
    attributes: [],
  },
  style: {
    attributes: ["type"],
  },
  sub: {
    attributes: [],
  },
  summary: {
    attributes: [],
  },
  sup: {
    attributes: [],
  },
  table: {
    attributes: ["border", "cellspacing", "cellpadding"],
  },
  tbody: {
    attributes: [],
  },
  td: {
    attributes: ["rowspan", "colspan", "headers"],
  },
  template: {
    attributes: [],
  },
  textarea: {
    attributes: [
      "rows",
      "cols",
      "placeholder",
      "disabled",
      "readonly",
      "maxlength",
      "wrap",
    ],
  },
  tfoot: {
    attributes: [],
  },
  th: {
    attributes: ["rowspan", "colspan", "headers"],
  },
  thead: {
    attributes: [],
  },
  time: {
    attributes: ["datetime"],
  },
  title: {
    attributes: [],
  },
  tr: {
    attributes: ["rowspan", "colspan"],
  },
  track: {
    attributes: ["src", "kind", "label", "srclang", "default"],
  },
  u: {
    attributes: [],
  },
  ul: {
    attributes: [],
  },
  var: {
    attributes: [],
  },
  video: {
    attributes: [
      "src",
      "poster",
      "controls",
      "autoplay",
      "muted",
      "loop",
      "preload",
    ],
  },
  wbr: {
    attributes: [],
  },
};

const globalAttributes = [
  "id",
  "class",
  "style",
  "title",
  "lang",
  "dir",
  "hidden",
  "tabindex",
  "accesskey",
  "draggable",
  "spellcheck",
  "contenteditable",
  "translate",
];

const events = [
  "on-abort",
  "on-blur",
  "on-canplay",
  "on-canplaythrough",
  "on-change",
  "on-click",
  "on-contextmenu",
  "on-dblclick",
  "on-drag",
  "on-dragend",
  "on-dragenter",
  "on-dragleave",
  "on-dragover",
  "on-dragstart",
  "on-drop",
  "on-durationchange",
  "on-emptied",
  "on-ended",
  "on-error",
  "on-focus",
  "on-formchange",
  "on-forminput",
  "on-input",
  "on-invalid",
  "on-keydown",
  "on-keypress",
  "on-keyup",
  "on-load",
  "on-loadeddata",
  "on-loadedmetadata",
  "on-loadstart",
  "on-mousedown",
  "on-mousemove",
  "on-mouseout",
  "on-mouseover",
  "on-mouseenter",
  "on-mouseleave",
  "on-mouseup",
  "on-mousewheel",
  "on-pause",
  "on-play",
  "on-playing",
  "on-progress",
  "on-ratechange",
  "on-reset",
  "on-resize",
  "on-readystatechange",
  "on-scroll",
  "on-seeked",
  "on-seeking",
  "on-select",
  "on-show",
  "on-touchstart",
  "on-touchend",
  "on-touchmove",
  "on-touchcancel",
  "on-stalled",
  "on-submit",
  "on-suspend",
  "on-timeupdate",
  "on-volumechange",
  "on-waiting",
];

const directives = [
    "s-html",
    "s-if",
    "s-else",
    "s-elif",
    "s-for",
    "s-show",
    "s-bind"
];

export {
    htmlTags,
    globalAttributes,
    events,
    directives
};
