import{w as r,p as i,M as c,L as l,S as p,q as d,O as h,i as u}from"./chunk-EPOLDU6W-DaAtDpEb.js";import{j as t}from"./jsx-runtime-u17CrQMm.js";const f=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"icon",href:"app/images/icon.png"}];function j({children:s}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(c,{}),t.jsx(l,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
                (function(l) {
                    var params = new URLSearchParams(l.search);
                    var p = params.get('p');
                    if (p) {
                    var decodedPath = decodeURIComponent(p);
                    window.history.replaceState(null, null,
                        l.pathname.slice(0, l.pathname.lastIndexOf('/')) + decodedPath
                    );
                    }
                }(window.location))
                `}})]}),t.jsxs("body",{children:[s,t.jsx(p,{}),t.jsx(d,{})]})]})}const g=r(function(){return t.jsx(h,{})}),w=i(function({error:e}){let o="Oops!",n="An unexpected error occurred.",a;return u(e)&&(o=e.status===404?"404":"Error",n=e.status===404?"The requested page could not be found.":e.statusText||n),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:o}),t.jsx("p",{children:n}),a]})});export{w as ErrorBoundary,j as Layout,g as default,f as links};
