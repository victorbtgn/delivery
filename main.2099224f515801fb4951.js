(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"00et":function(e,a,t){},QfWi:function(e,a,t){"use strict";t.r(a);var n={bodyRef:document.querySelector("body"),navBoxREf:document.querySelector("#nav-box"),menuButton:document.querySelector(".header-nav__btn"),navigation:document.querySelector(".header-nav__menu"),floatingNav:document.querySelector("#floatingNav"),floatingNavLinks:document.querySelector("#floatingNavLinks"),floatingNavBtn:document.querySelector(".floatingNav-btn"),mainCallbackBtnMobile:document.querySelector("#callbackMobile"),mainCallbackBtnDesktop:document.querySelector("#callbackDesktop"),callbackPriceBtn:document.querySelector("#callbackPrice"),modalCallback:document.querySelector("#callback"),modalCallbackClose:document.querySelector(".main-overlay__modal-closeBtn"),inputCallbackName:document.querySelector("#callbackName"),inputCallbackPhone:document.querySelector("#callbackPhone"),inputCallbackMsg:document.querySelector("#callbackMsg"),callbackSubmitBtn:document.querySelector(".main-overlay__modal-submit")},l=t("jffb"),i=t.n(l);function o(){n.menuButton.classList.contains("menuButtonActive")?(n.menuButton.classList.remove("menuButtonActive"),n.navigation.classList.remove("header-nav__menuActive"),n.navigation.classList.add("header-nav__menu"),n.bodyRef.removeAttribute("style")):(n.menuButton.classList.add("menuButtonActive"),n.navigation.classList.remove("header-nav__menu"),n.navigation.classList.add("header-nav__menuActive"),n.bodyRef.setAttribute("style","overflow: hidden"))}n.menuButton.addEventListener("click",o),n.navBoxREf.addEventListener("click",(function(e){if(e)var a=setTimeout((function(){o(),clearTimeout(a)}),50)})),document.addEventListener("scroll",i()((function(){var e=window.scrollY,a=window.innerHeight,t=n.floatingNav.classList.contains("none");e>2*a&&t&&(n.floatingNav.classList.remove("none"),n.floatingNav.classList.add("floatingNav"));e<=2*a&&!t&&(n.floatingNav.classList.remove("floatingNav"),n.floatingNav.classList.add("none"),n.floatingNavBtn.classList.remove("floatingNav-btnActive"),n.floatingNavLinks.classList.remove("floatingNav-navActive"),n.floatingNavLinks.classList.add("floatingNav-nav"))}),500)),n.floatingNavBtn.addEventListener("click",(function(){n.floatingNavBtn.classList.contains("floatingNav-btnActive")?(n.floatingNavBtn.classList.remove("floatingNav-btnActive"),n.floatingNavLinks.classList.remove("floatingNav-navActive"),n.floatingNavLinks.classList.add("floatingNav-nav")):(n.floatingNavBtn.classList.add("floatingNav-btnActive"),n.floatingNavLinks.classList.remove("floatingNav-nav"),n.floatingNavLinks.classList.add("floatingNav-navActive"))}));var c=t("P5co"),s=t.n(c),r=t("xKHZ");t("0k47");new s.a("#splide",{type:"loop",perMove:1,autoplay:!0,rewind:!0,pauseOnHover:!0,pauseOnFocus:!0,easing:"cubic-bezier(.5,0,.5,1)",pagination:!1,breakpoints:{1200:{destroy:!0},768:{perPage:2,gap:"1em"},480:{perPage:1,gap:"1em"}}}).mount(),n.mainCallbackBtnMobile.addEventListener("click",u),n.mainCallbackBtnDesktop.addEventListener("click",u),n.modalCallback.addEventListener("click",(function(e){if(e.preventDefault(),n.inputCallbackName.addEventListener("input",b),n.inputCallbackPhone.addEventListener("input",b),n.inputCallbackMsg.addEventListener("input",b),n.inputCallbackName.addEventListener("blur",g),n.inputCallbackPhone.addEventListener("blur",g),n.inputCallbackMsg.addEventListener("blur",g),"main-overlay"===e.target.classList.value||"main-overlay__modal-closeBtn-btn"===e.target.classList.value)return void d();if("main-overlay__modal-submit"===e.target.classList.value)return v.dateUa=(new Date).toLocaleString("uk-UA"),console.log(v),new r.a("В найближчий час ми Вам передзвонимо.",r.a.TYPE_DONE,r.a.TIME_NORMAL),void d()}));var v={name:"",phone:""};function u(e){e.preventDefault(),window.addEventListener("keydown",m),n.modalCallback.classList.contains("none")&&(n.modalCallback.classList.remove("none"),n.modalCallback.classList.add("main-overlay"),n.bodyRef.setAttribute("style","overflow: hidden"))}function d(){n.modalCallback.classList.remove("main-overlay"),n.modalCallback.classList.add("none"),window.removeEventListener("keydown",m),n.callbackSubmitBtn.setAttribute("disabled","disabled"),n.bodyRef.removeAttribute("style"),v.name="",v.phone="",n.inputCallbackName.value="",n.inputCallbackPhone.value="",n.inputCallbackMsg.value="",n.inputCallbackName.removeEventListener("input",b),n.inputCallbackPhone.removeEventListener("input",b),n.inputCallbackMsg.removeEventListener("input",b)}function m(e){if("Escape"!==e.code)return"Enter"===e.code?(v.dateUa=(new Date).toLocaleString("uk-UA"),console.log(v),d(),void new r.a("В найближчий час ми Вам передзвонимо.",r.a.TYPE_DONE,r.a.TIME_NORMAL)):void 0;d()}function b(e){e.preventDefault(),"callbackName"===e.target.id&&(v.name=e.target.value),"callbackPhone"===e.target.id&&(+e.target.value||new r.a("Недопустимі символи для номеру телефона",r.a.TYPE_WARNING,r.a.TIME_NORMAL),v.phone=e.target.value),"callbackMsg"===e.target.id&&(v.message=e.target.value),v.name.length>2&&10===v.phone.length&&n.callbackSubmitBtn.removeAttribute("disabled"),(v.name.length<3||10!==v.phone.length||!+v.phone)&&n.callbackSubmitBtn.setAttribute("disabled","disabled")}function g(e){e.preventDefault(),"callbackName"===e.target.id&&e.target.value.length<3&&new r.a("Мінімальна довжина Імені 3 символа.",r.a.TYPE_WARNING,r.a.TIME_NORMAL),"callbackPhone"===e.target.id&&10!==e.target.value.length&&new r.a("Введіть номер в форматі 0123456789",r.a.TYPE_WARNING,r.a.TIME_NORMAL)}n.callbackPriceBtn.addEventListener("click",u);t("00et")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2099224f515801fb4951.js.map