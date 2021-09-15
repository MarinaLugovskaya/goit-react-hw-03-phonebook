(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=(n(14),n(3)),i=n(4),l=n(6),u=n(5),h=n(9),b=n(2),d=n.n(b),j=n(0),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{className:d.a.formRow,children:Object(j.jsxs)("label",{children:["\u0418\u043c\u044f",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(j.jsx)("div",{className:d.a.formRow,children:Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(j.jsx)("div",{className:d.a.formRow,children:Object(j.jsx)("button",{type:"submit",children:"Add contact"})})]})}}]),n}(a.Component),f=function(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[t.name,": ",t.number]}),Object(j.jsx)("button",{id:t.id,onClick:n,type:"button",children:"Delete"})]},t.id)}))})},p=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})})},O=n(18),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.handleDeleteContacts=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e.target.id}))})},t.formSubmitHandler=function(e,n){var a=t.state.contacts;a.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already exists in contact list")):(t.state.contacts.push({name:e,id:Object(O.a)(),number:n}),t.setState({contacts:a}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log(e.contacts),this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:d.a.postcard,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{contacts:this.contacts,onSubmit:this.formSubmitHandler}),Object(j.jsx)("div",{className:d.a.formRow,children:Object(j.jsx)(p,{value:this.filter,onChange:this.changeFilter})}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{filter:this.filter,onChange:this.HandleSearchContactByName,onClick:this.handleDeleteContacts,contacts:t})]})})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()},2:function(t,e,n){t.exports={postcard:"Form_postcard__1-RQC",formRow:"Form_formRow__2bciO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c4a74271.chunk.js.map