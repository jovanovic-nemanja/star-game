(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{u96V:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),o=n("4HBT"),i=n.n(o);function s(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}var c={middleware:["auth","not_verified"],metaInfo:function(){return{title:this.$t("Email verification")}},data:function(){return{form:new i.a}},methods:{send:function(){var t,e=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/email/resend");case 2:e.$store.dispatch("message/success",{text:e.$t("A fresh verification link has been sent to your email address.")}),e.form.reset(),e.$refs.form.reset();case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)}))})()}}},u=n("KHd+"),l=n("ZUTo"),f=n.n(l),v=n("gzZi"),d=n("sK+t"),m=n("mdmw"),p=n("Yq0q"),h=n("pSOK"),w=n("S9TP"),b=n("D9m0"),_=n("cdmR"),y=n("Kn9U"),V=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[n("v-card",[n("v-toolbar",[n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Email verification"))+"\n          ")])],1),t._v(" "),n("v-card-text",[n("p",[t._v("\n            "+t._s(t.$t("We have sent a verification link to your email."))+"\n            "+t._s(t.$t("Please click on that link to verify your email and continue using our website."))+"\n          ")]),t._v(" "),n("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[n("v-btn",{attrs:{type:"submit",color:"primary",disabled:t.form.busy,loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("Resend verification link"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=V.exports;f()(V,{VBtn:v.a,VCard:d.a,VCardText:m.c,VCol:p.a,VContainer:h.a,VForm:w.a,VRow:b.a,VToolbar:_.a,VToolbarTitle:y.a})}}]);
//# sourceMappingURL=email.js.map