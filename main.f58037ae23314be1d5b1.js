(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"00et":function(e,a,t){},QfWi:function(e,a,t){"use strict";t.r(a);var n={bodyRef:document.querySelector("body"),navBoxREf:document.querySelector("#nav-box"),menuButton:document.querySelector(".header-nav__btn"),navigation:document.querySelector(".header-nav__menu"),mainCallbackBtnMobile:document.querySelector("#callbackMobile"),mainCallbackBtnDesktop:document.querySelector("#callbackDesktop"),modalCallback:document.querySelector("#callback"),modalCallbackClose:document.querySelector(".main-overlay__modal-closeBtn"),inputCallbackName:document.querySelector("#callbackName"),inputCallbackPhone:document.querySelector("#callbackPhone"),inputCallbackMsg:document.querySelector("#callbackMsg"),callbackSubmitBtn:document.querySelector(".main-overlay__modal-submit")};function l(){n.menuButton.classList.contains("menuButtonActive")?(n.menuButton.classList.remove("menuButtonActive"),n.navigation.classList.remove("header-nav__menuActive"),n.navigation.classList.add("header-nav__menu"),n.bodyRef.removeAttribute("style")):(n.menuButton.classList.add("menuButtonActive"),n.navigation.classList.remove("header-nav__menu"),n.navigation.classList.add("header-nav__menuActive"),n.bodyRef.setAttribute("style","overflow: hidden"))}n.menuButton.addEventListener("click",l),n.navBoxREf.addEventListener("click",(function(e){if(e)var a=setTimeout((function(){l(),clearTimeout(a)}),50)}));var o=t("P5co"),i=t.n(o),c=t("xKHZ");t("0k47");new i.a("#splide",{type:"loop",perMove:1,autoplay:!0,rewind:!0,pauseOnHover:!0,pauseOnFocus:!0,easing:"cubic-bezier(.5,0,.5,1)",pagination:!1,breakpoints:{1200:{destroy:!0},768:{perPage:2,gap:"1em"},480:{perPage:1,gap:"1em"}}}).mount(),n.mainCallbackBtnMobile.addEventListener("click",r),n.mainCallbackBtnDesktop.addEventListener("click",r),n.modalCallback.addEventListener("click",(function(e){if(e.preventDefault(),n.inputCallbackName.addEventListener("input",m),n.inputCallbackPhone.addEventListener("input",m),n.inputCallbackMsg.addEventListener("input",m),n.inputCallbackName.addEventListener("blur",v),n.inputCallbackPhone.addEventListener("blur",v),n.inputCallbackMsg.addEventListener("blur",v),"main-overlay"===e.target.classList.value||"main-overlay__modal-closeBtn-btn"===e.target.classList.value)return void s();if("main-overlay__modal-submit"===e.target.classList.value)return u.dateUa=(new Date).toLocaleString("uk-UA"),console.log(u),new c.a("В найближчий час ми Вам передзвонимо.",c.a.TYPE_DONE,c.a.TIME_NORMAL),void s()}));var u={name:"",phone:""};function r(e){e.preventDefault(),window.addEventListener("keydown",d),n.modalCallback.classList.contains("none")&&(n.modalCallback.classList.remove("none"),n.modalCallback.classList.add("main-overlay"),n.bodyRef.setAttribute("style","overflow: hidden"))}function s(){n.modalCallback.classList.remove("main-overlay"),n.modalCallback.classList.add("none"),window.removeEventListener("keydown",d),n.callbackSubmitBtn.setAttribute("disabled","disabled"),n.bodyRef.removeAttribute("style"),u.name="",u.phone="",n.inputCallbackName.value="",n.inputCallbackPhone.value="",n.inputCallbackMsg.value="",n.inputCallbackName.removeEventListener("input",m),n.inputCallbackPhone.removeEventListener("input",m),n.inputCallbackMsg.removeEventListener("input",m)}function d(e){if("Escape"!==e.code)return"Enter"===e.code?(u.dateUa=(new Date).toLocaleString("uk-UA"),console.log(u),s(),void new c.a("В найближчий час ми Вам передзвонимо.",c.a.TYPE_DONE,c.a.TIME_NORMAL)):void 0;s()}function m(e){e.preventDefault(),"callbackName"===e.target.id&&(u.name=e.target.value),"callbackPhone"===e.target.id&&(+e.target.value||new c.a("Недопустимі символи для номеру телефона",c.a.TYPE_WARNING,c.a.TIME_NORMAL),u.phone=e.target.value),"callbackMsg"===e.target.id&&(u.message=e.target.value),u.name.length>2&&10===u.phone.length&&n.callbackSubmitBtn.removeAttribute("disabled"),(u.name.length<3||10!==u.phone.length||!+u.phone)&&n.callbackSubmitBtn.setAttribute("disabled","disabled")}function v(e){e.preventDefault(),"callbackName"===e.target.id&&e.target.value.length<3&&new c.a("Мінімальна довжина Імені 3 символа.",c.a.TYPE_WARNING,c.a.TIME_NORMAL),"callbackPhone"===e.target.id&&10!==e.target.value.length&&new c.a("Введіть номер в форматі 0123456789",c.a.TYPE_WARNING,c.a.TIME_NORMAL)}t("00et")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f58037ae23314be1d5b1.js.map