(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"3p9t":function(n,e,t){n.exports=t.p+"audio/baccarat/lose.wav"},FQhE:function(n,e,t){n.exports=t.p+"audio/baccarat/deal.wav"},"Fm+e":function(n,e,t){var a=t("doYl");"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,r);a.locals&&(n.exports=a.locals)},OY7U:function(n,e,t){"use strict";var a=t("fpkf"),r=t("g6NE");var o={computed:{gamePackageId:function(){return this.$route.params.game},gameSlug:function(){return this.$route.params.slug},config:function(){var n=this;return this.gameSlug?Object(a.a)("".concat(this.gamePackageId)).variations.find((function(e){return e.slug===n.gameSlug})):Object(a.a)("".concat(this.gamePackageId))},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},methods:{getRoute:function(n){return e="games.".concat(this.gamePackageId,".").concat(n),r.a.getters["route/get"](e);var e}}},i=t("KHd+"),l=Object(i.a)(o,void 0,void 0,!1,null,null,null);e.a=l.exports},"R4L+":function(n,e,t){n.exports=t.p+"audio/baccarat/swoosh.wav"},Rb8A:function(n,e,t){"use strict";t.r(e);var a=t("o0o1"),r=t.n(a),o=t("vDqi"),i=t.n(o),l=t("L2JU"),s=t("C3Ci"),c=t("OY7U"),d=t("fYW3"),b=t("hNdr"),u=t("ZXch"),g=t("VA6O"),p=t.n(g),v=t("FQhE"),h=t.n(v),m=t("R4L+"),f=t.n(m),y=t("g/XJ"),w=t.n(y),k=t("3p9t"),x=t.n(k),H=t("i6jp"),T=t.n(H);function C(n,e,t,a,r,o,i){try{var l=n[o](i),s=l.value}catch(n){return void t(n)}l.done?e(s):Promise.resolve(s).then(a,r)}function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){F(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function F(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var j={name:"Baccarat",components:{PlayControls:t("/hoC").a,Hand:b.a},mixins:[s.a,c.a,d.a],data:function(){return{clickSound:p.a,loading:!1,playing:!1,betValue:0,betType:0,betTypes:[this.$t("Player"),this.$t("Tie"),this.$t("Banker")],currentBetType:-1,winType:0,win:0,playerHandCards:["D3","H5"],playerHandScore:8,playerHandResult:this.$t("Win"),bankerHandCards:["S6","CA"],bankerHandScore:7,bankerHandResult:this.$t("Lose")}},computed:_(_({},Object(l.d)("auth",["account"])),{},{playerHandCount:function(){return this.playerHandCards.length},bankerHandCount:function(){return this.bankerHandCards.length}}),methods:_(_({},Object(l.b)({updateUserAccountBalance:"auth/updateUserAccountBalance",setProvablyFairGame:"provably-fair/set"})),{},{play:function(n){var e,t=this;return(e=r.a.mark((function e(){var a,o,l,s,c,d,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.playing=!0,t.updateUserAccountBalance(t.account.balance-n),t.playerHandCards=[],t.bankerHandCards=[],t.sound(f.a),t.betValue=0,t.win=0,t.currentBetType=-1,t.winType=-1,t.playerHandScore=-1,t.bankerHandScore=-1,t.playerHandResult="",t.bankerHandResult="",e.next=16,Object(u.l)(500);case 16:return a=t.getRoute("play"),o={hash:t.provablyFairGame.hash,bet:n,bet_type:t.betType},e.next=20,i.a.post(a,o);case 20:l=e.sent,s=l.data,t.loading=!1,c=0,d=s.gameable.player_hand.length,b=s.gameable.banker_hand.length,t.playerHandCards.push(s.gameable.player_hand[0]),t.bankerHandCards.push(s.gameable.banker_hand[0]),t.currentBetType=t.betType,t.betValue=s.bet,t.sound(h.a),setTimeout((function(){t.playerHandCards.push(s.gameable.player_hand[1]),t.bankerHandCards.push(s.gameable.banker_hand[1]),t.playerHandScore=s.gameable.player_score,t.bankerHandScore=s.gameable.banker_score,t.sound(h.a)}),c+=500),d>2&&setTimeout((function(){t.playerHandCards.push(s.gameable.player_hand[2]),t.playerHandScore=s.gameable.player_score,t.sound(h.a)}),c+=750),b>2&&setTimeout((function(){t.bankerHandCards.push(s.gameable.banker_hand[2]),t.bankerHandScore=s.gameable.banker_score,t.sound(h.a)}),c+=750),t.setProvablyFairGame({key:t.gamePackageId,game:s.pf_game}),setTimeout((function(){t.playerHandResult=s.gameable.player_result,t.bankerHandResult=s.gameable.banker_result,t.winType=s.gameable.win_type,t.win=s.win,t.playing=!1,t.updateUserAccountBalance(s.account.balance),s.win>s.bet?t.sound(w.a):s.win===s.bet?t.sound(T.a):t.sound(x.a)}),c);case 36:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(n){C(o,a,r,i,l,"next",n)}function l(n){C(o,a,r,i,l,"throw",n)}i(void 0)}))})()}})},B=(t("RbGP"),t("KHd+")),P=t("ZUTo"),S=t.n(P),R=t("gzZi"),E=t("pgmH"),V=Object(B.a)(j,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"d-flex flex-column fill-height py-3"},[t("div",{staticClass:"d-flex justify-center fill-height align-center"},[t("hand",{staticClass:"hand-container",attrs:{title:n.$t("Player"),cards:n.playerHandCards,score:n.playerHandScore,result:n.playerHandResult,"result-class":0===n.winType?"primary text--primary":1===n.winType?"warning":2===n.winType?"error":"",bet:0===n.currentBetType?n.betValue:0,win:0===n.winType?n.win:0}}),n._v(" "),t("hand",{staticClass:"hand-container hand-tie",attrs:{title:n.$t("Tie"),cards:[],bet:1===n.currentBetType?n.betValue:0,win:1===n.winType?n.win:0},scopedSlots:n._u([{key:"default",fn:function(){return[t("div",{staticClass:"vertical-space"})]},proxy:!0}])}),n._v(" "),t("hand",{staticClass:"hand-container",attrs:{title:n.$t("Banker"),cards:n.bankerHandCards,score:n.bankerHandScore,result:n.bankerHandResult,"result-class":2===n.winType?"primary text--primary":1===n.winType?"warning":0===n.winType?"error":"",bet:2===n.currentBetType?n.betValue:0,win:2===n.winType?n.win:0}})],1),n._v(" "),t("div",{staticClass:"d-flex justify-center flex-wrap"},[t("v-btn-toggle",{attrs:{"active-class":"primary--text",mandatory:"",rounded:"",group:""},model:{value:n.betType,callback:function(e){n.betType=e},expression:"betType"}},n._l(n.betTypes,(function(e,a){return t("v-btn",{key:a,staticClass:"mx-1 my-2 my-lg-0",attrs:{disabled:n.playing,small:""},on:{click:function(e){return n.sound(n.clickSound)}}},[n._v("\n        "+n._s(e)+"\n      ")])})),1)],1),n._v(" "),t("play-controls",{attrs:{loading:n.loading,playing:n.playing},on:{play:n.play}})],1)}),[],!1,null,"8fffbcde",null);e.default=V.exports;S()(V,{VBtn:R.a,VBtnToggle:E.a})},RbGP:function(n,e,t){"use strict";var a=t("Fm+e");t.n(a).a},VA6O:function(n,e,t){n.exports=t.p+"audio/common/click.wav"},doYl:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".hand-container[data-v-8fffbcde] {\n  min-width: 11em;\n  min-height: 10em;\n}\n.vertical-space[data-v-8fffbcde] {\n  min-height: 7em;\n}\n@media (max-width: 599px) {\n.hand-container[data-v-8fffbcde] {\n    min-width: 5.5em;\n}\n.hand-tie[data-v-8fffbcde] {\n    margin-left: -1em;\n}\n}",""])},flh2:function(n,e,t){var a=t("g2oV");"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,r);a.locals&&(n.exports=a.locals)},"g/XJ":function(n,e,t){n.exports=t.p+"audio/baccarat/win.wav"},g2oV:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #000000;\n}\n\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(255, 255, 255, 0.12) !important;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #FFFFFF;\n}\n\n.v-btn-toggle {\n  border-radius: 4px;\n  display: inline-flex;\n  max-width: 100%;\n}\n.v-btn-toggle > .v-btn.v-btn {\n  border-radius: 0;\n  border-style: solid;\n  border-width: thin;\n  box-shadow: none;\n  box-shadow: none;\n  opacity: 0.8;\n  padding: 0 12px;\n}\n.v-btn-toggle > .v-btn.v-btn:first-child {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn--active {\n  color: inherit;\n  opacity: 1;\n}\n.v-btn-toggle > .v-btn.v-btn:after {\n  display: none;\n}\n.v-btn-toggle > .v-btn.v-btn:not(:first-child) {\n  border-left-width: 0;\n}\n.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {\n  height: 48px;\n  min-height: 0;\n  min-width: 48px;\n}\n\n.v-btn-toggle--borderless > .v-btn.v-btn {\n  border-width: 0;\n}\n\n.v-btn-toggle--dense > .v-btn.v-btn {\n  padding: 0 8px;\n}\n\n.v-btn-toggle--group {\n  border-radius: 0;\n}\n.v-btn-toggle--group > .v-btn.v-btn {\n  background-color: transparent !important;\n  border-color: transparent;\n  margin: 4px;\n  min-width: auto;\n}\n\n.v-btn-toggle--rounded {\n  border-radius: 24px;\n}\n\n.v-btn-toggle--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-btn-toggle--tile {\n  border-radius: 0;\n}",""])},i6jp:function(n,e,t){n.exports=t.p+"audio/baccarat/push.wav"},pgmH:function(n,e,t){"use strict";t("flh2");var a=t("OGDc"),r=t("qa07"),o=t("WN+I");e.a=Object(o.a)(a.a,r.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...a.a.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const n=this.setTextColor(this.color,{...a.a.options.methods.genData.call(this)});return this.group?n:this.setBackgroundColor(this.backgroundColor,n)}}})}}]);
//# sourceMappingURL=baccarat-resources-js-pages-game.js.map