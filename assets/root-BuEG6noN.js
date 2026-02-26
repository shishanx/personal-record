import{w as a,q as l,p as t,M as i,L as c,S as p,t as h,O as d,i as u}from"./chunk-EPOLDU6W-Cbkwubdd.js";const m=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(i,{}),t.jsx(c,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
                (function(l) {
                    if (l.search.indexOf('p=') !== -1) {
                        var decoded = l.search.split('p=')[1].split('&')[0].replace(/~and~/g, '&');
                        window.history.replaceState(null, null,
                        l.pathname.slice(0, l.pathname.length - l.search.length) + decoded + l.hash
                        );
                    }
                    }(window.location))
                `}})]}),t.jsxs("body",{children:[e,t.jsx(p,{}),t.jsx(h,{})]})]})}const j=a(function(){return t.jsx(d,{})}),g=l(function({error:s}){let o="Oops!",n="An unexpected error occurred.",r;return u(s)&&(o=s.status===404?"404":"Error",n=s.status===404?"The requested page could not be found.":s.statusText||n),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:o}),t.jsx("p",{children:n}),r]})});export{g as ErrorBoundary,f as Layout,j as default,m as links};
