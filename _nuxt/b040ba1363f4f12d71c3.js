(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(t,e,s){t.exports=s.p+"img/13a932d.png"},146:function(t,e,s){t.exports=s.p+"img/ae8df1d.png"},147:function(t,e,s){t.exports=s.p+"img/86a92d9.png"},148:function(t,e,s){t.exports=s.p+"img/391748d.png"},149:function(t,e,s){t.exports=s.p+"img/9e67698.png"},150:function(t,e,s){"use strict";s.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"play-btn-div"},[e("img",{staticClass:"play-btn",attrs:{src:s(145)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"center-image"},[e("img",{attrs:{src:s(146)}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-game-sec para"},[s("div",{staticClass:"game-desc"},[s("h1",[t._v("Lorem ipsum")]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n            Nulla consequat massa quis enim.\n          ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  "),s("br"),t._v("  ligula eget dolor. Aenean massa.\n              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n          ")]),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-explore"},[t._v("explore")])]),t._v(" "),s("div",{staticClass:"game-images"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section-get-app-sec"},[i("div",{staticClass:"light-image"}),t._v(" "),i("div",{staticClass:"dark-image"},[i("div",{staticClass:"app-icon"},[i("img",{staticClass:"img-responsive",attrs:{src:s(147)}}),t._v(" "),i("div",{staticClass:"download"},[i("div",{staticClass:"title"},[t._v("\n                    Barangay 143 "),i("br"),t._v(" mobile app\n                  ")]),t._v(" "),i("div",{staticClass:"dl-icon"},[i("a",[i("img",{staticClass:"img-responsive",attrs:{src:s(148)}})]),t._v(" "),i("a",[i("img",{staticClass:"img-responsive",attrs:{src:s(149)}})])])])]),t._v(" "),i("div",{staticClass:"content-dl"},[i("p",[t._v("\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\n                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n                ")]),i("br"),t._v(" "),i("p",[t._v("\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\n                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n                ")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("a",{staticClass:"animated",staticStyle:{display:"none"},attrs:{id:"toTop"}},[i("img",{staticClass:"play-btn",attrs:{src:s(84)}})]),t._v(" "),i("div",{staticClass:"news-letter"},[i("h1",{attrs:{id:"news-letter"}},[t._v("SUBSCRIBE TO NEWSLETTER!")]),t._v(" "),i("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n            ")]),t._v(" "),i("div",{staticClass:"inputx"},[i("input",{attrs:{type:"text",name:"",value:"",placeholder:"Email Address"}}),t._v(" "),i("button",{staticClass:"btn btn-explore"},[t._v("SUBSCRIBE!")])])]),t._v(" "),i("div",{staticClass:"main-footer"},[i("div",{staticClass:"social-icons"},[i("a",[i("img",{attrs:{src:s(85)}})]),t._v(" "),i("a",[i("img",{attrs:{src:s(86)}})]),t._v(" "),i("a",[i("img",{attrs:{src:s(87)}})])]),t._v(" "),i("div",{staticClass:"other-links"},[i("a",[t._v("Privacy Policy")]),t._v(" "),i("a",[t._v("Term & Conditions")]),t._v(" "),i("a",[t._v("@ Synergy88 Digital Inc.")])])])])}],n={mounted:function(){window.onload=function(){var t=document.querySelector(".section_intro-section"),e=document.querySelector(".center-image"),s=document.querySelector(".center-image");t.addEventListener("mousemove",function(i){var n=i.clientX,a=i.clientY;e.style.webkitTransform="translateX("+n/1100+"%) translateY("+a/200+"%)",e.style.transform="translateX("+n/1100+"%) translateY("+a/1100+"%)",s.style.webkitTransform="translateX("+n/1100+"%) translateY("+a/1100+"%)",s.style.transform="translateX("+n/1100+"%) translateY("+a/250+"%)",t.style="background-position:"+n/1100+"px center"})},this.showLoader()},created:function(){document.getElementById("index-page").addEventListener("scroll",this.animate)},destroyed:function(){document.getElementById("index-page").removeEventListener("scroll",this.animate)},methods:{showLoader:function(){setTimeout(function(){document.getElementById("loader-container").style.display="none",document.getElementById("header").style.display="none"},3e3)},ifInView:function(){var t=window.innerHeight,e=window.scrollY||window.pageYOffset;return e+t>element.getBoundingClientRect().top+e+elementHeight},onView:function(){var t=document.body,e=document.documentElement,s=(Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight),document.getElementById("index-page").scrollTop,document.getElementById("news-letter").getBoundingClientRect());console.log("hey",s.top),s.top<=700&&document.getElementById("news-letter").classList.add("slide-up-fade-in")},animate:function(){this.onView();this.onView()}}},a=s(9),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"index-page"}},[i("div",{staticClass:"loader-container",attrs:{id:"loader-container"}},[i("div",{staticClass:"loader"},[i("svg",[i("defs",[i("filter",{attrs:{id:"goo"}},[i("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"2",result:"blur"}}),t._v(" "),i("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2",result:"gooey"}}),t._v(" "),i("feComposite",{attrs:{in:"SourceGraphic",in2:"gooey",operator:"atop"}})],1)])])])]),t._v(" "),i("div",{staticClass:"bg-fixed"}),t._v(" "),i("section",{staticClass:"section-intro-sec"},[i("div",{staticClass:"section_intro-section",style:{backgroundImage:"url("+s(83)+")"}},[t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},i,!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);