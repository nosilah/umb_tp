(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4c1e"],{"0899":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s={id:"app"},r={class:"navbar navbar-expand navbar-dark bg-dark"},n=Object(a["g"])("a",{href:"/",class:"navbar-brand"},"bezKoder",-1),i={class:"navbar-nav mr-auto"},b={class:"nav-item"},o=Object(a["h"])(" Home "),O={key:0,class:"nav-item"},l=Object(a["h"])("Admin Board"),j={key:1,class:"nav-item"},u=Object(a["h"])("Moderator Board"),d={class:"nav-item"},v=Object(a["h"])("User"),h={key:0,class:"navbar-nav ml-auto"},g={class:"nav-item"},m=Object(a["h"])(" Sign Up "),k={class:"nav-item"},f=Object(a["h"])(" Login "),p={key:1,class:"navbar-nav ml-auto"},U={class:"nav-item"},w={class:"nav-item"},M=Object(a["h"])(" LogOut "),_={class:"container"};function B(e,t,c,B,y,A){const D=Object(a["D"])("font-awesome-icon"),L=Object(a["D"])("router-link"),R=Object(a["D"])("router-view");return Object(a["v"])(),Object(a["f"])("div",s,[Object(a["g"])("nav",r,[n,Object(a["g"])("div",i,[Object(a["g"])("li",b,[Object(a["i"])(L,{to:"/home",class:"nav-link"},{default:Object(a["M"])(()=>[Object(a["i"])(D,{icon:"home"}),o]),_:1})]),A.showAdminBoard?(Object(a["v"])(),Object(a["f"])("li",O,[Object(a["i"])(L,{to:"/admin",class:"nav-link"},{default:Object(a["M"])(()=>[l]),_:1})])):Object(a["e"])("",!0),A.showModeratorBoard?(Object(a["v"])(),Object(a["f"])("li",j,[Object(a["i"])(L,{to:"/mod",class:"nav-link"},{default:Object(a["M"])(()=>[u]),_:1})])):Object(a["e"])("",!0),Object(a["g"])("li",d,[A.currentUser?(Object(a["v"])(),Object(a["d"])(L,{key:0,to:"/user",class:"nav-link"},{default:Object(a["M"])(()=>[v]),_:1})):Object(a["e"])("",!0)])]),A.currentUser?Object(a["e"])("",!0):(Object(a["v"])(),Object(a["f"])("div",h,[Object(a["g"])("li",g,[Object(a["i"])(L,{to:"/register",class:"nav-link"},{default:Object(a["M"])(()=>[Object(a["i"])(D,{icon:"user-plus"}),m]),_:1})]),Object(a["g"])("li",k,[Object(a["i"])(L,{to:"/login",class:"nav-link"},{default:Object(a["M"])(()=>[Object(a["i"])(D,{icon:"sign-in-alt"}),f]),_:1})])])),A.currentUser?(Object(a["v"])(),Object(a["f"])("div",p,[Object(a["g"])("li",U,[Object(a["i"])(L,{to:"/profile",class:"nav-link"},{default:Object(a["M"])(()=>[Object(a["i"])(D,{icon:"user"}),Object(a["h"])(" "+Object(a["G"])(A.currentUser.username),1)]),_:1})]),Object(a["g"])("li",w,[Object(a["g"])("a",{class:"nav-link",onClick:t[0]||(t[0]=Object(a["O"])((...e)=>A.logOut&&A.logOut(...e),["prevent"]))},[Object(a["i"])(D,{icon:"sign-out-alt"}),M])])])):Object(a["e"])("",!0)]),Object(a["g"])("div",_,[Object(a["i"])(R)])])}var y={computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},A=c("6b0d"),D=c.n(A);const L=D()(y,[["render",B]]);t["default"]=L}}]);
//# sourceMappingURL=chunk-2d0a4c1e.61a51cfe.js.map