import{w as c,p as i,M as l,L as p,S as d,q as h,O as u,i as m}from"./chunk-EPOLDU6W-DaDPW8MP.js";import{j as e}from"./jsx-runtime-u17CrQMm.js";const r="/personal-record/assets/icon-BikF9Jya.png",j=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"icon",href:r},{rel:"apple-touch-icon",href:r}];function g({children:s}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(p,{}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
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
                `}})]}),e.jsxs("body",{children:[s,e.jsx(d,{}),e.jsx(h,{})]})]})}const w=c(function(){return e.jsx(u,{})}),y=i(function({error:t}){let n="Oops!",o="An unexpected error occurred.",a;return m(t)&&(n=t.status===404?"404":"Error",o=t.status===404?"The requested page could not be found.":t.statusText||o),e.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[e.jsx("h1",{children:n}),e.jsx("p",{children:o}),a]})});export{y as ErrorBoundary,g as Layout,w as default,j as links};
