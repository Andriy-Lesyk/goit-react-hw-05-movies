"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{262:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,i,s,o,c,a=t(791),l=t(504),d=t(871),h=t(168),p=t(499),u=t(185),v=p.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n"]))),x=p.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),f=p.Z.div(s||(s=(0,h.Z)(["\n  padding-left: 20px;\n"]))),j=p.Z.button(o||(o=(0,h.Z)(["\n  margin-bottom: 10px;\n  background-color: white;\n  display: flex;\n  align-items: baseline;\n"]))),m=(0,p.Z)(u.And)(c||(c=(0,h.Z)(["\n  margin-right: 10px;\n  margin-top: 2px;\n"]))),g=t(683),w=t(885),Z=t(184);function k(){var e=(0,d.s0)(),n=function(){var e=(0,a.useState)({}),n=(0,w.Z)(e,2),t=n[0],r=n[1],i=(0,d.UO)().movieId;return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u043e \u0412\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"))})).then((function(e){var n=e.title,t=e.genres,i=e.vote_average,s=e.poster_path,o=e.overview;r((function(){return(0,g.Z)({},{title:n,genres:t,vote_average:i,poster_path:s,overview:o})}))}))}),[i]),t}(),t=n.title,r=n.vote_average,i=n.poster_path,s=n.overview,o=n.genres;return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(v,{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(j,{type:"button",onClick:function(){e(-1)},children:[(0,Z.jsx)(m,{})," Go back"]}),(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(i),width:"250px",alt:"Poster"})]}),(0,Z.jsxs)(f,{children:[(0,Z.jsx)("h2",{children:t}),(0,Z.jsxs)("p",{children:["User score: ",r]}),(0,Z.jsx)("h4",{children:"Overview"}),(0,Z.jsx)("p",{children:s}),(0,Z.jsx)("h4",{children:"Genres"}),(0,Z.jsx)("ul",{children:o&&o.map((function(e){var n=e.id,t=e.name;return(0,Z.jsx)("li",{children:t},n)}))})]})]}),(0,Z.jsx)("h5",{children:"Additional information"}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)(l.rU,{to:"cast",children:"Cast"}),(0,Z.jsx)(l.rU,{to:"reviews",children:"Rewiews"})]}),(0,Z.jsx)(d.j3,{})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.dc08e4d7.chunk.js.map