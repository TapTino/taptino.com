import{e as _,s as C}from"./chunk-FES7TJUJ.js";import{a as M}from"./chunk-MPISCCNW.js";import"./chunk-MHR5QFLM.js";import"./chunk-543JV44P.js";import{k as u,l as f,o as x}from"./chunk-MPNM4THC.js";import{$b as h,Fb as r,Gb as o,Hb as m,Nb as p,Zb as e,ec as g,jb as d,kb as a,pa as c}from"./chunk-VUEG6FIJ.js";var E=(()=>{let t=class t{get route(){return this.router.url.slice(1)}constructor(s,n){this.store$=s,this.router=n}openIssue(){this.store$.dispatch(C({title:"404 navigation error",body:`\`\`\`json
${JSON.stringify({route:this.route},null,2)}
\`\`\``}))}};t.\u0275fac=function(n){return new(n||t)(a(_),a(u))},t.\u0275cmp=c({type:t,selectors:[["tpt-error"]],standalone:!0,features:[g],decls:19,vars:1,consts:[[1,"error-code"],[1,"error-desc"],[1,"error-details"],[1,"error-actions"],["icon","home","label","Homepage","routerLink",""],["icon","open_in_new","label","Report",3,"click"]],template:function(n,l){n&1&&(r(0,"span",0),e(1,"404"),o(),e(2,`
`),r(3,"span",1)(4,"em"),e(5),o()(),e(6,`
`),r(7,"span",2),e(8,`
  The page you're looking for doesn't exist. You might have mistyped the address, or the page may have been moved to a different URL.
  `),m(9,"br"),e(10,`
  Please return to the homepage or report the issue if you believe this is an error.
`),o(),e(11,`
`),r(12,"section",3),e(13,`
  `),m(14,"tpt-button",4),e(15,`
  `),r(16,"tpt-button",5),p("click",function(){return l.openIssue()}),o(),e(17,`
`),o(),e(18,`
`)),n&2&&(d(5),h(`You find yourself lost deep within the crystal cave... There's no chamber called "`,l.route,'" here, retrace your steps and head back while you still can.'))},dependencies:[x,f,M],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2rem;flex:1;height:100%;padding:3rem}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{max-width:40rem;text-align:center;line-height:1.5rem;color:#e3e3e3}[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:14rem;line-height:13rem;padding:0;opacity:.25}@media (max-width: 31.25rem){[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:10rem;line-height:9rem}}@media (max-width: 22.5rem){[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:8rem;line-height:7rem}}[_nghost-%COMP%] > span.error-desc[_ngcontent-%COMP%]{font-weight:200}[_nghost-%COMP%] > span.error-details[_ngcontent-%COMP%]{font-weight:500}@media (max-width: 31.25rem){[_nghost-%COMP%] > span[_ngcontent-%COMP%]{font-size:.75rem;line-height:1.25rem}}[_nghost-%COMP%] > .error-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;max-width:32rem;margin-top:1rem}@media (max-width: 31.25rem){[_nghost-%COMP%] > .error-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:1.25rem;margin-top:0}}"]});let i=t;return i})();export{E as ErrorComponent};
