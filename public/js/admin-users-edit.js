(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{aa1X:function(e,t,r){"use strict";r.r(t);var s=r("o0o1"),a=r.n(s),o=r("vDqi"),n=r.n(o),i=r("4HBT"),l=r.n(i),m=r("C3Ci"),u=r("lucQ");function c(e,t,r,s,a,o,n){try{var i=e[o](n),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(s,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(s,a){var o=e.apply(t,r);function n(e){c(o,s,a,n,i,"next",e)}function i(e){c(o,s,a,n,i,"throw",e)}n(void 0)}))}}var v={middleware:["auth","verified","2fa_passed","admin"],components:{Preloader:r("Rc+0").a,UserMenu:u.a},mixins:[m.a],props:["id"],metaInfo:function(){return{title:this.$t("User {0}",[this.id])}},data:function(){return{user:null,roles:[],showPassword:!1,form:new l.a({name:null,email:null,role:null,status:null,hide_profit:null,banned_from_chat:null})}},computed:{changed:function(){var e=this;return this.form.keys().some((function(t){return e.user&&e.form[t]!==e.user[t]}))}},created:function(){var e=this;return d(a.a.mark((function t(){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("/api/admin/users/".concat(e.id));case 2:r=t.sent,s=r.data,e.user=s.user,e.roles=Object.keys(s.roles).map((function(e){return{value:parseInt(e,10),text:s.roles[e]}})),e.form.keys().forEach((function(t){e.form[t]=e.user[t]}));case 7:case"end":return t.stop()}}),t)})))()},methods:{update:function(){var e=this;return d(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.patch("/api/admin/users/".concat(e.id));case 2:e.$store.dispatch("message/success",{text:e.$t("User successfully updated.")}),e.$router.push({name:"admin.users.index"});case 4:case"end":return t.stop()}}),t)})))()}}},f=r("KHd+"),p=r("ZUTo"),_=r.n(p),b=r("gzZi"),h=r("sK+t"),w=r("mdmw"),y=r("Yq0q"),x=r("pSOK"),$=r("S9TP"),V=r("Ey0z"),k=r("D9m0"),g=r("uXRr"),E=r("MSko"),I=r("L6Q5"),P=r("tz1R"),T=r("hlRy"),S=r("cdmR"),R=r("Kn9U"),C=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",[r("v-toolbar",[r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[r("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),r("v-toolbar-title",[e._v("\n            "+e._s(e.$t("User {0}",[e.id]))+"\n          ")]),e._v(" "),r("v-spacer"),e._v(" "),r("user-menu",{attrs:{id:e.id}}),e._v(" "),r("preloader",{attrs:{active:!e.user}})],1),e._v(" "),r("v-card-text",[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.update(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Name"),type:"text",disabled:e.form.busy||!e.user,rules:[e.validationRequired],error:e.form.errors.has("name"),"error-messages":e.form.errors.get("name"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"name")}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",disabled:e.form.busy||!e.user,rules:[e.validationRequired,e.validationEmail],error:e.form.errors.has("email"),"error-messages":e.form.errors.get("email"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"email")}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-select",{attrs:{items:e.roles,label:e.$t("Role"),disabled:e.form.busy||!e.user,error:e.form.errors.has("role"),"error-messages":e.form.errors.get("role"),outlined:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Password"),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",disabled:e.form.busy||!e.user,error:e.form.errors.has("password"),"error-messages":e.form.errors.get("password"),hint:e.$t("Leave empty to preserve current user password."),"persistent-hint":"",outlined:"",counter:!0},on:{"click:append":function(t){e.showPassword=!e.showPassword},keydown:function(t){return e.clearFormErrors(t,"password")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("Blocked"),color:"primary",disabled:e.form.busy||!e.user,"false-value":0,"true-value":1},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("Hide profit"),color:"primary",disabled:e.form.busy||!e.user,"false-value":!1,"true-value":!0},model:{value:e.form.hide_profit,callback:function(t){e.$set(e.form,"hide_profit",t)},expression:"form.hide_profit"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("Banned from chat"),color:"primary",disabled:e.form.busy||!e.user,"false-value":!1,"true-value":!0},model:{value:e.form.banned_from_chat,callback:function(t){e.$set(e.form,"banned_from_chat",t)},expression:"form.banned_from_chat"}}),e._v(" "),r("v-skeleton-loader",{attrs:{type:"button",loading:!e.user}},[r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||!e.changed||e.form.busy,loading:e.form.busy}},[e._v("\n                "+e._s(e.$t("Save"))+"\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=C.exports;_()(C,{VBtn:b.a,VCard:h.a,VCardText:w.c,VCol:y.a,VContainer:x.a,VForm:$.a,VIcon:V.a,VRow:k.a,VSelect:g.a,VSkeletonLoader:E.a,VSpacer:I.a,VSwitch:P.a,VTextField:T.a,VToolbar:S.a,VToolbarTitle:R.a})},lucQ:function(e,t,r){"use strict";var s={props:["id","small"]},a=r("KHd+"),o=r("ZUTo"),n=r.n(o),i=r("gzZi"),l=r("Ey0z"),m=r("iGBT"),u=r("2hOt"),c=r("XSMC"),d=r("NMP6"),v=r("5Emp"),f=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({attrs:{icon:""}},s),[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"users.show",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-account")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Profile")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.show",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.edit",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-pencil")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Edit")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.delete",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-delete")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Delete")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.mail",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-email-outline")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("E-mail")))])],1)],1)],1)],1)}),[],!1,null,null,null);t.a=f.exports;n()(f,{VBtn:i.a,VIcon:l.a,VList:m.a,VListItem:u.a,VListItemContent:c.a,VListItemIcon:d.a,VListItemTitle:c.c,VMenu:v.a})}}]);
//# sourceMappingURL=admin-users-edit.js.map