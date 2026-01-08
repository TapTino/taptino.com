import{h}from"./chunk-3Q775HQ3.js";import{a as u}from"./chunk-CP5ENX7N.js";import{_ as g}from"./chunk-GYW56G2T.js";import"./chunk-2S42UMPV.js";import{l as c,m as d,p as f}from"./chunk-T4JN4VNJ.js";import{Lb as t,Mb as n,Nb as s,Ub as m,cc as e,ib as a,kc as l,ua as p}from"./chunk-EXB3DWDD.js";var S=(()=>{class o{get route(){return this.router.url.slice(1)}constructor(r,i){this.store$=r,this.router=i}openIssue(){this.store$.dispatch(h({title:"Errore 404 durante la navigazione",body:`Buongiorno,

Stavo cercando di visitare la pagina https://taptino.com/#/${this.route}, ma viene invece mostrata la pagina di 404.

Ho trovato il link della pagina/ho raggiunto la pagina tramite: ___
Le informazioni che stavo cercando in quella pagina sono: ___
Informazioni aggiuntive: ___

Grazie per il vostro tempo`}))}static{this.\u0275fac=function(i){return new(i||o)(a(g),a(c))}}static{this.\u0275cmp=p({type:o,selectors:[["tpt-error"]],standalone:!0,features:[l],decls:21,vars:0,consts:[[1,"error-code"],[1,"error-desc"],[1,"error-details"],[1,"error-actions"],["icon","home","label","Homepage","routerLink",""],["icon","open_in_new","label","Segnala",3,"click"]],template:function(i,x){i&1&&(t(0,"span",0),e(1,"404"),n(),e(2,`
`),t(3,"span",1),e(4,`
  `),t(5,"em"),e(6,"Ops, pagina non trovata! Sembra che anche il nostro sito abbia perso un po' di concentrazione..."),n(),e(7,`
`),n(),e(8,`
`),t(9,"span",2),e(10,`
  La pagina che stavi cercando non esiste. Potresti aver scritto male l'indirizzo, oppure la pagina potrebbe essere stata spostata a un diverso URL.
  `),s(11,"br"),e(12,`
  Ritorna alla pagina principale oppure segnala il problema se pensi si tratti di un errore.
`),n(),e(13,`
`),t(14,"section",3),e(15,`
  `),s(16,"tpt-button",4),e(17,`
  `),t(18,"tpt-button",5),m("click",function(){return x.openIssue()}),n(),e(19,`
`),n(),e(20,`
`))},dependencies:[f,d,u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2rem;flex:1;height:100%;padding:3rem}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{max-width:46.25rem;text-align:center;line-height:1.5rem;color:#6571a8}[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:14rem;line-height:13rem;padding:0;font-weight:600;color:#fff;text-shadow:-4px -4px 0 #ff6b0f,4px -4px 0 #ff6b0f,-4px 4px 0 #ff6b0f,4px 4px 0 #ff6b0f,0px -4px 0 #ff6b0f,0px 4px 0 #ff6b0f,-4px 0px 0 #ff6b0f,4px 0px 0 #ff6b0f}@media (max-width: 31.25rem){[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:10rem;line-height:9rem}}@media (max-width: 22.5rem){[_nghost-%COMP%] > span.error-code[_ngcontent-%COMP%]{font-size:8rem;line-height:7rem}}[_nghost-%COMP%] > span.error-desc[_ngcontent-%COMP%]{font-weight:200}[_nghost-%COMP%] > span.error-details[_ngcontent-%COMP%]{font-weight:500}@media (max-width: 31.25rem){[_nghost-%COMP%] > span[_ngcontent-%COMP%]{font-size:.75rem;line-height:1.25rem}}[_nghost-%COMP%] > .error-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;max-width:32rem;margin-top:1rem}@media (max-width: 31.25rem){[_nghost-%COMP%] > .error-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:1.25rem;margin-top:0}}"]})}}return o})();export{S as ErrorComponent};
