(this["webpackJsonpproject-trybewallet"]=this["webpackJsonpproject-trybewallet"]||[]).push([[0],{32:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(18),o=(a(37),a(12)),i=a(10),u=a(11),d=a(14),m=a(13),p=a(2),h=a(17),E=function(e){return{type:"RECIEVE_USER_INFO",email:e.email,password:e.password}},b=(a(42),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState(Object(h.a)({},a.name,a.value),(function(){var t=e.state,a=t.password,n=t.email,r=/\S+@\S+\.\S+/.test(n),c=a.length>=6;r&&c?e.setState({disabled:!1}):e.setState({disabled:!0})}))},e.handleClick=function(){var t=e.props.getUserInfo,a=e.state,n=a.password;t({email:a.email,password:n})},e.state={email:"",password:"",disabled:!0},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.disabled;return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login"},r.a.createElement("label",{htmlFor:"email",className:"email-login"},"E-mail:"," ",r.a.createElement("input",{"data-testid":"email-input",id:"email",name:"email",type:"email",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"password",className:"senha-login"},"Senha:"," ",r.a.createElement("input",{"data-testid":"password-input",id:"password",name:"password",type:"password",value:a,onChange:this.handleChange})),r.a.createElement(s.b,{to:"/carteira"},r.a.createElement("button",{className:"login-btn",type:"button",disabled:n,onClick:this.handleClick},"Entrar"))))}}]),a}(r.a.Component)),f=Object(o.b)(null,(function(e){return{getUserInfo:function(t){return e(E(t))}}}))(b),v=a(3),g=a.n(v),y=a(9),O=(a(49),function(){var e=Object(y.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://economia.awesomeapi.com.br/json/all",e.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:return t=e.sent,a=t.json(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),j=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_API"}),e.next=4,O();case 4:return a=e.sent,e.abrupt("return",t((n=a,{type:"RECIEVE_API_QUOTATION",curr:Object.keys(n).filter((function(e){return"USDT"!==e}))})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=(a(50),function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_API"}),e.next=4,O();case 4:return a=e.sent,e.abrupt("return",t({type:"RECIEVE_API_RATE",rates:a}));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}),N="Alimenta\xe7\xe3o",C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value;e.setState(Object(h.a)({},a.name,n))},e.handleSubmit=function(){var t=Object(y.a)(g.a.mark((function t(a){var n,r,c,l,s,o,i,u,d,m,p,h;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.props,r=n.getWallet,c=n.getRates,l=n.handleClick,t.next=4,c();case 4:s=e.props.rates,o=e.state,i=o.id,u=o.value,d=o.description,m=o.currency,p=o.method,h=o.tag,r({id:i,value:u,description:d,currency:m,method:p,tag:h,exchangeRates:s}),e.setState((function(e){return{id:e.id+1,value:"",description:"",currency:"USD",method:"Dinheiro",tag:N}})),l();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={id:0,value:"",description:"",currency:"USD",method:"Dinheiro",tag:N},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.curr,t=this.state,a=t.value,n=t.description,c=t.currency,l=t.method,s=t.tag;return r.a.createElement("form",{className:"expenses-form",type:"submit",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"value-input"},"Valor:"," ",r.a.createElement("input",{"data-testid":"value-input",id:"value-input",className:"value-input",name:"value",type:"number",value:a,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:"," ",r.a.createElement("input",{"data-testid":"description-input",id:"description-input",name:"description",type:"text",value:n,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency-select"},"Moeda:"," ",r.a.createElement("select",{id:"currency-select",name:"currency",value:c,onChange:this.handleChange},e.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"method-input"},"M\xe9todo de pagamento:"," ",r.a.createElement("select",{id:"method-input","data-testid":"method-input",value:l,onChange:this.handleChange,name:"method"},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"category-input"},"Categoria:"," ",r.a.createElement("select",{id:"category-input","data-testid":"tag-input",name:"tag",value:s,onChange:this.handleChange},r.a.createElement("option",{value:N},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"submit",className:"submit-btn"},"Adicionar despesa"))}}]),a}(n.Component),x=Object(o.b)((function(e){return{curr:e.wallet.currencies,rates:e.wallet.rates}}),(function(e){return{getRates:function(t){return e(w(t))},getWallet:function(t){return e(function(e){return{type:"RECIEVE_WALLET_INFO",wallet:e}}(t))}}}))(C),k=(a(51),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.expen,a=e.handleDelete;return r.a.createElement("div",{className:"table-container"},r.a.createElement("h1",{className:"title"},"Despesas Totais"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table-head"},r.a.createElement("tr",{className:"head-tr"},r.a.createElement("th",{className:"head-td"},"Descri\xe7\xe3o"),r.a.createElement("th",{className:"head-td"},"Tag"),r.a.createElement("th",{className:"head-td"},"M\xe9todo de pagamento"),r.a.createElement("th",{className:"head-td"},"Valor"),r.a.createElement("th",{className:"head-td"},"Moeda"),r.a.createElement("th",{className:"head-td"},"C\xe2mbio utilizado"),r.a.createElement("th",{className:"head-td"},"Valor convertido"),r.a.createElement("th",{className:"head-td"},"Moeda de convers\xe3o"),r.a.createElement("th",{className:"head-td"},"Editar/Excluir"))),r.a.createElement("tbody",{className:"table-body"},t.map((function(e){var t=Number(e.value),n=e.exchangeRates[e.currency].name,c=Number(e.exchangeRates[e.currency].ask),l=t*c;return r.a.createElement("tr",{className:"body-tr",key:e.id},r.a.createElement("td",{className:"body-td"},e.description),r.a.createElement("td",{className:"body-td"},e.tag),r.a.createElement("td",{className:"body-td center"},e.method),r.a.createElement("td",{className:"body-td"},t.toFixed(2)),r.a.createElement("td",{className:"body-td"},n),r.a.createElement("td",{className:"body-td"},c.toFixed(2)),r.a.createElement("td",{className:"body-td"},l.toFixed(2)),r.a.createElement("td",{className:"body-td"},"Real"),r.a.createElement("td",{className:"body-td"},r.a.createElement("button",{type:"button","data-testid":"delete-btn",className:"delete-btn",value:e.id,onClick:a},"Excluir")))})))))}}]),a}(n.Component)),T=Object(o.b)((function(e){return{expen:e.wallet.expenses}}))(k),R=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changeTotal=function(){var t=e.props.expen.map((function(e){var t=Object.values(e.exchangeRates).filter((function(t){return t.code===e.currency&&"BRLT"!==t.codein}));return Number(t[0].ask*e.value)})),a=0;if(0!==t.length){for(var n=0;n<t.length;n+=1)a+=+t[n];return a.toFixed(2)}return 0},e.handleDelete=function(){var t=Object(y.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target,r=e.props.delTask,t.next=4,r(n.value);case 4:e.changeTotal();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,this.props.currencie)(),this.changeTotal();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.userEmail,a=e.expen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"wallet-header"},r.a.createElement("h1",{className:"wallet-title"},"TrybeWallet"),r.a.createElement("div",{className:"user-info"},r.a.createElement("p",null,"Usu\xe1rio:"," ",r.a.createElement("span",{"data-testid":"email-field"},t)),r.a.createElement("p",null,"Despesa total:"," ",r.a.createElement("span",{"data-testid":"total-field"},this.changeTotal())," ",r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL")))),r.a.createElement(x,{handleClick:this.changeTotal}),a.length>0&&r.a.createElement(T,{handleDelete:this.handleDelete}))}}]),a}(r.a.Component),S=Object(o.b)((function(e){return{userEmail:e.user.email,expen:e.wallet.expenses}}),(function(e){return{currencie:function(t){return e(j(t))},delTask:function(t){return e({type:"DELETE_TASK",task:Number(t)})}}}))(R),I=function(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{component:f,path:"/",exact:!0}),r.a.createElement(p.a,{component:S,path:"/carteira",exact:!0}))},_=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(I,null)}}]),a}(n.Component),D=a(15),A=a(29),F=a(30),U=a(7),V={email:"",pass:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECIEVE_USER_INFO":return Object(U.a)(Object(U.a)({},e),{},{email:t.email,pass:t.password});default:return e}},W=a(31),M={currencies:[],expenses:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_API":return Object(U.a)({},e);case"RECIEVE_API_QUOTATION":return Object(U.a)(Object(U.a)({},e),{},{currencies:t.curr});case"RECIEVE_API_RATE":return Object(U.a)(Object(U.a)({},e),{},{rates:t.rates});case"RECIEVE_WALLET_INFO":return Object(U.a)(Object(U.a)({},e),{},{expenses:[].concat(Object(W.a)(e.expenses),[t.wallet])});case"DELETE_TASK":return Object(U.a)(Object(U.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.task}))});default:return e}},Q=Object(D.combineReducers)({user:L,wallet:P}),B=Object(D.createStore)(Q,Object(A.composeWithDevTools)(Object(D.applyMiddleware)(F.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:B},r.a.createElement(s.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.044c26aa.chunk.js.map