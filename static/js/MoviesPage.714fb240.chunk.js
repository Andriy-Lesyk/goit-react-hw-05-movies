"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{170:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,a=t(982),c=t(885),u=t(791),l=t(504),d=t(871),f=t(168),s=t(499),p=s.Z.form(r||(r=(0,f.Z)(["\ndisplay: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),h=s.Z.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 70px;\n  height: 34px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  border: 1px solid grey;\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=s.Z.input(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 26px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  border: 1px solid grey;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=t(184);var y=function(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)([]),i=(0,c.Z)(o,2),f=i[0],s=i[1],y=(0,d.TH)();return(0,u.useEffect)((function(){t&&fetch("https://api.themoviedb.org/3/search/movie?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US&page=1&include_adult=false&query=".concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u041f\u043e \u0412\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"))})).then((function(n){var e=n.results.map((function(n){return{title:n.title,id:n.id,name:n.name}}));s((function(){return(0,a.Z)(e)}))}))}),[t]),(0,b.jsxs)("div",{children:[(0,b.jsxs)(p,{onSubmit:function(n){n.preventDefault(),""!==t.trim()||alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442!")},children:[(0,b.jsx)(m,{type:"text",autocomplete:"off",placeholder:"Search movies",value:t,onChange:function(n){r(n.currentTarget.value)}}),(0,b.jsx)(h,{type:"submit",children:"Search"})]}),f&&(0,b.jsx)("ul",{children:f.map((function(n){var e=n.title,t=n.name,r=n.id;return(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{to:{pathname:"".concat(r),state:{location:y}},children:e||t})},r)}))})]})}},982:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(907);var o=t(181);function i(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=MoviesPage.714fb240.chunk.js.map