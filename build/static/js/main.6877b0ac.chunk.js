(this.webpackJsonpfrontti_edarivaalitulos=this.webpackJsonpfrontti_edarivaalitulos||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(32),a(33),a(7)),u=a(12),o=a.n(u),s=a(61),m=a(62),d=a(63),E=a(67),f=a(64),p=function(e){var t=e.candidate,a=e.setCurrentCandidate,n=t.name.replace(/\s/g,"");n.includes("'")&&(n.split("'")[1].split("'")[0],n=n.split("'")[0]);var l=n.split(",");return n="".concat(l[1]," ").concat(l[0]),r.a.createElement("div",null,r.a.createElement("span",{className:"candidate",onClick:function(){return a(n)}},n," / ",t.value," ",t.seats?"/ \u2605":""))},v=function(e){var t=e.votes,a=e.candidates;return r.a.createElement("div",{className:"statBox"},r.a.createElement("span",null,"\ud83d\uddf3\ufe0f:",r.a.createElement(s.a,{color:"default"},t),a?r.a.createElement("span",null,"\ud83d\udc64:",r.a.createElement(s.a,{color:"default"},a)):""))},C=function(e){var t=e.group,a=e.setCurrentCandidate,l=e.filter,c=Object(n.useState)(!0),u=Object(i.a)(c,2),o=u[0],C=u[1],b=t.children.length;return r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(m.a,null,r.a.createElement(d.a,{onClick:function(){return C(!o)}},r.a.createElement("b",null,t.name," ",r.a.createElement(s.a,{color:"danger"},t.seats)),r.a.createElement(v,{votes:t.value,candidates:b})),r.a.createElement(E.a,{isOpen:o},r.a.createElement(f.a,null,t.children.map((function(e){return e.name.toLowerCase().includes(l)?r.a.createElement(p,{candidate:e,key:e.name,setCurrentCandidate:a}):""}))))))},b=function(e){var t=e.coalition,a=e.setCurrentCandidate,l=e.filter,c=Object(n.useState)(!0),u=Object(i.a)(c,2),o=u[0],p=u[1],b=0;t.children.forEach((function(e){return b+=e.children.length}));return r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(m.a,null,r.a.createElement(d.a,{onClick:function(){return p(!o)}},r.a.createElement("b",null,t.name," ",r.a.createElement(s.a,{color:"warning"},t.seats)),r.a.createElement(v,{votes:t.value,candidates:b})),r.a.createElement(E.a,{isOpen:o},r.a.createElement(f.a,null,t.children.map((function(e){return JSON.stringify(e).toLowerCase().includes(l)?r.a.createElement(C,{group:e,key:e.name,setCurrentCandidate:a,filter:e.name.toLowerCase().includes(l)?"":l}):""}))))))},y=function(e){var t=e.candidateData,a=e.setCurrentCandidate,n=e.filter;return void 0===t?"":r.a.createElement(r.a.Fragment,null,t.children.map((function(e){return JSON.stringify(e).toLowerCase().includes(n)?r.a.createElement(b,{coalition:e,key:e.name,setCurrentCandidate:a,filter:e.name.toLowerCase().includes(n)?"":n}):""})))},O=function(e){var t=e.setCurrent,a=e.current,n=e.options,l={color:"gray"};return r.a.createElement("h1",null,n.map((function(e){return r.a.createElement("span",{style:a!=e?l:void 0,key:e,onClick:function(){return t(e)}}," ",e)})))},g=function(e){var t=e.currentCandidate,a=e.candidate,n=e.setCurrentCandidate;if(void 0===a)return"";var l=Array.from(new Set(a.years.map((function(e){return e.nickname})))).filter(Boolean),c=l.map((function(e,t){return(t?", ":"")+e}));return r.a.createElement("div",null,r.a.createElement("h1",null,t),0!==l.length?r.a.createElement("h2",null,"(",c,")"):"","Total votes: ",a.totalVotes," ",r.a.createElement("br",null),"Times up for election: ",a.times,a.years.map((function(e){return r.a.createElement("div",{key:e.year},r.a.createElement("b",null,e.year," "),"votes: ",e.votes," ",e.elected?"/ \u2605":""," (",e.coalition,"/",e.group,")",r.a.createElement("br",null))})),r.a.createElement("button",{onClick:function(){return n("")}},"Return "))},j=a(65),h=a(66),k=function(e){var t=e.filter,a=e.setFilter;return r.a.createElement(j.a,null,r.a.createElement(h.a,{type:"text",placeholder:"Try 'HYAL' or 'Laura'",value:t,onChange:function(e){a(e.target.value.toLowerCase())},style:{marginBottom:"10px"}}))},S=function(e){var t=e.candidateData,a=e.setCurrentCandidate,l=e.filter,c=e.setFilter,u=Object(n.useState)("top votes"),o=Object(i.a)(u,2),s=o[0],m=o[1],d=Object.values(t);var E=d;return E="top votes"===s?d.sort((function(e,t){return t.totalVotes-e.totalVotes})).slice(0,300):d.sort((function(e,t){return t.totalVotes/t.times-e.totalVotes/e.times})).filter((function(e){return e.times>1})).slice(0,300),r.a.createElement("div",null,r.a.createElement(O,{current:s,setCurrent:m,options:["top votes","best average"]}),r.a.createElement(k,{filter:l,setFilter:c}),E.map((function(e,t){return JSON.stringify(e).toLowerCase().includes(l)?r.a.createElement("span",{className:"candidate",key:e.name,onClick:function(){return a(e.name)}},t+1,". ",e.name," ","top votes"===s?r.a.createElement("span",null,r.a.createElement("b",null,e.totalVotes)," ",r.a.createElement("i",null,e.times,"x")):r.a.createElement("span",null,e.totalVotes,"/",r.a.createElement("i",null,e.times)," ="," ",r.a.createElement("b",null,Math.round(e.totalVotes/e.times))),r.a.createElement("br",null)):""})))};var w=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(2018),u=Object(i.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)({}),E=Object(i.a)(d,2),f=E[0],p=E[1],v=Object(n.useState)(""),C=Object(i.a)(v,2),b=C[0],j=C[1],h=Object(n.useState)("yearly"),w=Object(i.a)(h,2),L=w[0],V=w[1],x=Object(n.useState)(""),F=Object(i.a)(x,2),N=F[0],J=F[1];Object(n.useEffect)((function(){o.a.get("/api/sample").then((function(e){l(e.data)}))}),[]),Object(n.useEffect)((function(){o.a.get("/api/candidate").then((function(e){p(e.data)}))}),[]);var T=["yearly","top candidates"];return""!==b?r.a.createElement("div",null,r.a.createElement(g,{currentCandidate:b,candidate:f[b],setCurrentCandidate:j})):"yearly"===L?r.a.createElement("div",null,r.a.createElement(O,{setCurrent:V,current:L,options:T}),r.a.createElement(O,{setCurrent:m,current:s,options:Object.keys(a)}),r.a.createElement(k,{filter:N,setFilter:J}),r.a.createElement(y,{candidateData:a[s],setCurrentCandidate:j,filter:N})):"top candidates"===L?r.a.createElement("div",null,r.a.createElement(O,{setCurrent:V,current:L,options:T}),r.a.createElement(S,{candidateData:f,setCurrentCandidate:j,filter:N,setFilter:J})):void 0};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6877b0ac.chunk.js.map