import{w as r,q as i,p as t,M as c,L as l,S as p,t as d,O as h,i as u}from"./chunk-EPOLDU6W-Cbkwubdd.js";const x=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:s}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(c,{}),t.jsx(l,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
                (function(l) {
                    // 檢查網址列是否有我們傳遞的 p 參數
                    var params = new URLSearchParams(l.search);
                    var p = params.get('p');
                    if (p) {
                    // 取得解碼後的路徑
                    var decodedPath = decodeURIComponent(p);
                    // 還原成：https://.../personal-record/weight
                    window.history.replaceState(null, null,
                        l.pathname.slice(0, l.pathname.lastIndexOf('/')) + decodedPath
                    );
                    }
                }(window.location))
                `}})]}),t.jsxs("body",{children:[s,t.jsx(p,{}),t.jsx(d,{})]})]})}const j=r(function(){return t.jsx(h,{})}),w=i(function({error:e}){let a="Oops!",n="An unexpected error occurred.",o;return u(e)&&(a=e.status===404?"404":"Error",n=e.status===404?"The requested page could not be found.":e.statusText||n),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:a}),t.jsx("p",{children:n}),o]})});export{w as ErrorBoundary,f as Layout,j as default,x as links};
