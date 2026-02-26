import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useRef, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Panel(props) {
  let content = props.content;
  return /* @__PURE__ */ jsx("main", { className: "w-full flex items-center justify-center select-none", children: /* @__PURE__ */ jsx("div", { className: "w-full flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-[400px] w-full h-lvh bg-amber-700", children: content }) }) });
}
function HomePage() {
  return /* @__PURE__ */ jsx(
    Panel,
    {
      content: /* @__PURE__ */ jsxs("div", { className: "h-1/2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-1/2", children: /* @__PURE__ */ jsx(Link, { to: "/weight", className: "w-full text-center bg-white text-black", children: /* @__PURE__ */ jsx("div", { children: "體重" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center h-1/2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full text-center bg-white text-black", children: "喝水" }),
          /* @__PURE__ */ jsx("div", { className: "w-full text-center bg-white text-black", children: "飲料" })
        ] })
      ] })
    }
  );
}
function meta() {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Navbar(props) {
  let content = props.content;
  return /* @__PURE__ */ jsx("div", { className: "pt-5 mb-5", children: content });
}
function Popup(props) {
  const [open, setOpen] = props.controller;
  let content = props.content;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `w-full h-lvh bg-gray-500/70 absolute top-0 left-0 ${open ? "" : "hidden"} z-0`,
      onClick: (e) => {
        setOpen(false);
      },
      children: /* @__PURE__ */ jsx("div", { onClick: (e) => {
        e.stopPropagation();
      }, children: content })
    }
  );
}
function NumberSlider(props) {
  let setValue = props.setValue;
  let defaultValue = props.default || 50;
  let [open, setOpen] = props.controller;
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const numbers = Array.from({ length: 200 }, (_, i) => i + 1);
  const listRef = useRef(null);
  const liHeight = 50;
  const visibleCount = 5;
  const transferToPixel = 0.8;
  const pointerBias = 2;
  useEffect(() => {
    if (!listRef.current)
      return;
    const index = numbers.indexOf(currentValue);
    listRef.current.scrollTop = (index - pointerBias) * liHeight * transferToPixel;
  }, [currentValue, numbers]);
  const handleScroll = () => {
    if (!listRef.current)
      return;
    const scrollTop = listRef.current.scrollTop;
    const index = Math.round(scrollTop / (liHeight * transferToPixel));
    setCurrentValue(numbers[index + pointerBias]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-white text-black flex flex-col items-center", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: listRef,
        onScroll: handleScroll,
        className: `overflow-y-scroll h-${liHeight} w-full max-w-md`,
        style: { scrollbarWidth: "none" },
        children: numbers.map((num) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `h-${liHeight / visibleCount} text-center text-2xl ${num === currentValue ? "bg-blue-500 text-white font-bold" : "text-black"}`,
            onClick: () => setCurrentValue(num),
            children: num
          },
          num
        ))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setValue(currentValue);
          setOpen(false);
        },
        className: "px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600",
        children: "確定"
      }
    ) })
  ] });
}
function WeightPage() {
  const [value, setValue] = useState(50);
  const [openPopup, setOpenPopup] = useState(false);
  return /* @__PURE__ */ jsx(
    Panel,
    {
      content: /* @__PURE__ */ jsxs("div", { className: "h-full", children: [
        /* @__PURE__ */ jsx(
          Navbar,
          {
            content: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "返回" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex h-1/8 justify-center items-center text-5xl bg-white text-black",
            onClick: () => {
              setOpenPopup(true);
            },
            children: value
          }
        ),
        /* @__PURE__ */ jsx(
          Popup,
          {
            content: /* @__PURE__ */ jsx("div", { className: "w-full fixed bottom-0", children: /* @__PURE__ */ jsx(
              NumberSlider,
              {
                default: value,
                setValue,
                controller: [openPopup, setOpenPopup]
              }
            ) }),
            controller: [openPopup, setOpenPopup]
          }
        )
      ] })
    }
  );
}
const weight = UNSAFE_withComponentProps(function Weight() {
  return /* @__PURE__ */ jsx(WeightPage, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: weight
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DSbOaAbg.js", "imports": ["/assets/chunk-EPOLDU6W-Cbkwubdd.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-D64755Tg.js", "imports": ["/assets/chunk-EPOLDU6W-Cbkwubdd.js"], "css": ["/assets/root-ifgka8LX.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CcAR4cVu.js", "imports": ["/assets/chunk-EPOLDU6W-Cbkwubdd.js", "/assets/panel-DX3DFYS-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/weight": { "id": "routes/weight", "parentId": "root", "path": "weight", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/weight-BzhaTHVS.js", "imports": ["/assets/chunk-EPOLDU6W-Cbkwubdd.js", "/assets/panel-DX3DFYS-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-2032d58f.js", "version": "2032d58f", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/weight": {
    id: "routes/weight",
    parentId: "root",
    path: "weight",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
