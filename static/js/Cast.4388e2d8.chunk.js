"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{703:function(t,r,e){e.r(r),e.d(r,{default:function(){return u}});var n=e(791),a=e(982),o=e(885),i=e(871),c=e(184);var u=function(){var t=function(){var t=(0,n.useState)([]),r=(0,o.Z)(t,2),e=r[0],c=r[1],u=(0,i.UO)().movieId;return(0,n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u,"/credits?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041f\u043e \u0412\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"))})).then((function(t){c((function(){return(0,a.Z)(t.cast)}))}))}),[u]),e}();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:t&&t.map((function(t){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(t.profile_path),width:"100px",alt:"Actor"}),(0,c.jsx)("p",{children:t.name}),(0,c.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},982:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(907);var a=e(181);function o(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=Cast.4388e2d8.chunk.js.map