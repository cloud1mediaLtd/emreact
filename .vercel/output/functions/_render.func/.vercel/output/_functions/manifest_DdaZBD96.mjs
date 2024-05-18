import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_BZcuupNA.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dk3-u3aM.js"}],"styles":[{"type":"external","src":"/_astro/about.jPTRFrpy.css"},{"type":"inline","content":"img[data-astro-cid-kh7btl4r]{-o-object-position:center 75%;object-position:center 75%}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dk3-u3aM.js"}],"styles":[{"type":"external","src":"/_astro/about.jPTRFrpy.css"},{"type":"inline","content":".invalid-feedback[data-astro-cid-uw5kdbxl],.empty-feedback[data-astro-cid-uw5kdbxl]{display:none}.was-validated[data-astro-cid-uw5kdbxl] :-moz-placeholder-shown:invalid[data-astro-cid-uw5kdbxl]~.empty-feedback[data-astro-cid-uw5kdbxl]{display:block}.was-validated[data-astro-cid-uw5kdbxl] :placeholder-shown:invalid[data-astro-cid-uw5kdbxl]~.empty-feedback[data-astro-cid-uw5kdbxl]{display:block}.was-validated[data-astro-cid-uw5kdbxl] :not(:-moz-placeholder-shown):invalid[data-astro-cid-uw5kdbxl]~.invalid-feedback[data-astro-cid-uw5kdbxl]{display:block}.was-validated[data-astro-cid-uw5kdbxl] :not(:placeholder-shown):invalid[data-astro-cid-uw5kdbxl]~.invalid-feedback[data-astro-cid-uw5kdbxl]{display:block}.is-invalid[data-astro-cid-uw5kdbxl],.was-validated[data-astro-cid-uw5kdbxl] :invalid[data-astro-cid-uw5kdbxl]{border-color:#dc3545}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dk3-u3aM.js"}],"styles":[{"type":"external","src":"/_astro/about.jPTRFrpy.css"}],"routeData":{"route":"/services/[slug]","isIndex":false,"type":"page","pattern":"^\\/services\\/([^/]+?)\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/services/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dk3-u3aM.js"}],"styles":[{"type":"external","src":"/_astro/about.jPTRFrpy.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BAjUiu2O.js"}],"styles":[{"type":"external","src":"/_astro/about.jPTRFrpy.css"},{"type":"inline","content":".video-bg[data-astro-cid-bbe6dxrz]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}#main[data-astro-cid-bbe6dxrz]{text-shadow:1px 1px 8px rgba(0,0,0,.5)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/services/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_wRfz9rFm.mjs","/src/pages/contact.astro":"chunks/pages/contact_C0xf_gfO.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DS9mrH-p.mjs","\u0000@astrojs-manifest":"manifest_DdaZBD96.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CV0__vmc.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_BpOeau3R.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_N4DoCqD_.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"chunks/_slug__CO-pRWXL.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"chunks/index_BC9f3C5r.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cwiesc8X.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BAjUiu2O.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dk3-u3aM.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.jPTRFrpy.css","/1.png","/2.png","/247.png","/Anousa_a_photo_of_a_close-up_of_a_happy_cleaner_cleaning_in_a_b_dedd892e-b6fc-486f-958b-c3e808e9c3c9.png","/EMReact.pdf","/F97MuL6G_400x400.png","/clean.png","/clean2.png","/electrician.png","/emreactlogo.jpeg","/emreactlogo.png","/favicon.svg","/fire.png","/gritting.png","/jetwash.png","/lock.png","/maintenance.png","/maintenance2.png","/outlet.png","/waste.png","/_astro/hoisted.BAjUiu2O.js","/_astro/hoisted.Dk3-u3aM.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
