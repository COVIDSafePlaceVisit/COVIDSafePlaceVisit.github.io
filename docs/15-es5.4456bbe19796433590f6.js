!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XXSy:function(t,e,o){"use strict";o.r(e),o.d(e,"SignInPageModule",(function(){return M}));var r=o("SVse"),s=o("s7LF"),a=o("sZkV"),c=o("iInd"),g=o("klIw"),b=o("8Y7J"),u=o("VRCc"),p=o("9Ku7");function l(n,i){if(1&n&&(b.Pb(0,"div",17),b.Lb(1,"ion-icon",18),b.Pb(2,"span"),b.sc(3),b.Ob(),b.Ob()),2&n){var t=b.bc().$implicit;b.Ab(3),b.tc(t.message)}}function d(n,i){if(1&n&&(b.Nb(0),b.qc(1,l,4,1,"div",16),b.Mb()),2&n){var t=i.$implicit,e=b.bc();b.Ab(1),b.hc("ngIf",e.signInForm.get("email").hasError(t.type)&&(e.signInForm.get("email").dirty||e.signInForm.get("email").touched))}}function m(n,i){if(1&n&&(b.Pb(0,"div",17),b.Lb(1,"ion-icon",18),b.Pb(2,"span"),b.sc(3),b.Ob(),b.Ob()),2&n){var t=b.bc().$implicit;b.Ab(3),b.tc(t.message)}}function f(n,i){if(1&n&&(b.Nb(0),b.qc(1,m,4,1,"div",16),b.Mb()),2&n){var t=i.$implicit,e=b.bc();b.Ab(1),b.hc("ngIf",e.signInForm.get("password").hasError(t.type)&&(e.signInForm.get("password").dirty||e.signInForm.get("password").touched))}}function h(n,i){if(1&n&&(b.Pb(0,"div",9),b.Pb(1,"div",17),b.Lb(2,"ion-icon",18),b.Pb(3,"span"),b.sc(4),b.Ob(),b.Ob(),b.Ob()),2&n){var t=b.bc();b.Ab(4),b.tc(t.submitError)}}var P,O,v,w=function(){return["/sign-up"]},C=[{path:"",component:(P=function(){function t(i,e,o,r){var a=this;n(this,t),this.angularFire=i,this.router=e,this.ngZone=o,this.authenticationService=r,this.validationMessages=g.a,this.signInForm=new s.e({email:new s.c("",s.o.compose([s.o.required,s.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new s.c("",s.o.compose([s.o.minLength(6),s.o.required]))}),this.authRedirectResult=this.authenticationService.redirectResult.subscribe((function(n){var i;void 0===(null===(i=n)||void 0===i?void 0:i.error)?void 0!==n.user&&a.redirectLoggedUserToProfilePage():a.submitError=n.error}))}var e,o,r;return e=t,(o=[{key:"redirectLoggedUserToProfilePage",value:function(){this.router.navigate(["profile"],{state:{isFirstSignInTriggerRefreshWorkaroundBugPublicPlaceList:!0,isSignedIn:!0}})}},{key:"signInWithEmail",value:function(){var n=this;this.authenticationService.signInWithEmail(this.signInForm.value.email,this.signInForm.value.password).then((function(i){n.redirectLoggedUserToProfilePage()})).catch((function(i){n.submitError=i.message}))}}])&&i(e.prototype,o),r&&i(e,r),t}(),P.\u0275fac=function(n){return new(n||P)(b.Kb(u.a),b.Kb(c.g),b.Kb(b.z),b.Kb(p.a))},P.\u0275cmp=b.Eb({type:P,selectors:[["app-sign-in"]],decls:23,vars:7,consts:[[1,"ion-no-border"],["color","cobaltblue"],["slot","start"],[1,"sign-in-content"],[1,"auth-title"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],["type","submit","expand","block",1,"sign-in-btn",3,"disabled"],["class","error-container",4,"ngIf"],[1,"sign-up-btn-wrapper"],["fill","clear",1,"sign-up-btn",3,"routerLink"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,i){1&n&&(b.Pb(0,"ion-header",0),b.Pb(1,"ion-toolbar",1),b.Pb(2,"ion-buttons",2),b.Lb(3,"ion-back-button"),b.Ob(),b.Ob(),b.Ob(),b.Pb(4,"ion-content",3),b.Pb(5,"h2",4),b.sc(6," Sign in to your COVIDSafe business | Checki\u2705 "),b.Ob(),b.Pb(7,"form",5),b.Xb("ngSubmit",(function(){return i.signInWithEmail()})),b.Pb(8,"ion-list",6),b.Pb(9,"ion-item",7),b.Lb(10,"ion-input",8),b.Ob(),b.Pb(11,"div",9),b.qc(12,d,2,1,"ng-container",10),b.Ob(),b.Pb(13,"ion-item",7),b.Lb(14,"ion-input",11),b.Ob(),b.Pb(15,"div",9),b.qc(16,f,2,1,"ng-container",10),b.Ob(),b.Ob(),b.Pb(17,"ion-button",12),b.sc(18," Sign In "),b.Ob(),b.qc(19,h,5,1,"div",13),b.Pb(20,"ion-row",14),b.Pb(21,"ion-button",15),b.sc(22," Don't have an account? "),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&n&&(b.Ab(7),b.hc("formGroup",i.signInForm),b.Ab(5),b.hc("ngForOf",i.validationMessages.email),b.Ab(4),b.hc("ngForOf",i.validationMessages.password),b.Ab(1),b.hc("disabled",!i.signInForm.valid),b.Ab(2),b.hc("ngIf",i.submitError),b.Ab(2),b.hc("routerLink",b.jc(6,w)))},directives:[a.n,a.C,a.f,a.c,a.d,a.i,s.p,s.l,s.f,a.w,a.q,a.p,a.I,s.k,s.d,r.l,a.e,r.m,a.z,a.H,c.h,a.o],styles:[".sign-in-content[_ngcontent-%COMP%]{text-align:center;--padding-bottom:16px;--padding-end:16px;--padding-start:16px;--padding-top:16px}.sign-in-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:64px;letter-spacing:.6px}.sign-in-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{text-align:center}.sign-in-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:16px 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;-webkit-padding-end:8px;padding-inline-end:8px}.sign-in-content[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]{margin:16px 0}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]{justify-content:flex-end;align-items:center}.sign-in-content[_ngcontent-%COMP%]   .sign-up-btn-wrapper[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]{--padding-end:0px}"]}),P)}],I=((v=function i(){n(this,i)}).\u0275mod=b.Ib({type:v}),v.\u0275inj=b.Hb({factory:function(n){return new(n||v)},imports:[[c.i.forChild(C)],c.i]}),v),M=((O=function i(){n(this,i)}).\u0275mod=b.Ib({type:O}),O.\u0275inj=b.Hb({factory:function(n){return new(n||O)},imports:[[r.c,s.g,s.m,a.D,I]]}),O)}}])}();