(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(6),o=t.n(s),l=(t(11),t(12),t(2)),r=t(5),i=t(0);function d(e){var a=Object(c.useState)("Enter the text"),t=Object(l.a)(a,2),n=t[0],s=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsxs)("div",{className:" container mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:Object(i.jsx)("h1",{children:"ALPHABET_CONVERTERS"})}),Object(i.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("Changed"),s(e.target.value)},id:"exampleFormControlTextarea1",rows:"10"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase here\n"+n),s("you have clicked on function upper\n");var e=n.toUpperCase();s(e)},children:"Convert Upper to lower"}),Object(i.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){console.log("Uppercase here\n"+n),s("you have clicked on function upper\n");var e=n.toLowerCase();s(e)},children:"Convert Lower To Upper"}),Object(i.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){if(0===n.length)s("not defined");else{for(var e=n,a=new Array(256),t=0;t<256;t++)a[t]=0;for(var c=e.length,o=0;o<c;o++)a[e[o].charCodeAt(0)]+=1;for(var l=-1,r=" ",i=0;i<c;i++)l<a[e[i].charCodeAt(0)]&&(l=a[e[i].charCodeAt(0)],r=e[i]);s(r)}},children:"Max repeated char"}),Object(i.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){var e,a=n.match(/\w+/g),t={},c=Object(r.a)(a);try{for(c.s();!(e=c.n()).done;){var o=e.value;t[o]?t[o]++:t[o]=1}}catch(j){c.e(j)}finally{c.f()}var l,i=0,d="",h=Object(r.a)(a);try{for(h.s();!(l=h.n()).done;){var b=l.value;t[b]>i&&(i=t[b],d=b)}}catch(j){h.e(j)}finally{h.f()}s(d)},children:"Max repeated word"}),Object(i.jsx)("button",{className:"btn btn-warning mx-2",onClick:function(){console.log("click Copy");var e=document.getElementById("exampleFormControlTextarea1");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy_Text"}),Object(i.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){console.log("handling space");var e=n.split(/[ ]+/);s(e.join(" "))},children:"Manage Space"}),Object(i.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){console.log("Clear"),s("")},children:"Clear Terminal"})]}),Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("hr",{}),Object(i.jsx)("h1",{children:"Overall Summary"}),Object(i.jsxs)("p",{children:["Letters == ",n.length]}),Object(i.jsxs)("p",{children:["Words == ",n.split(" ").length]}),Object(i.jsxs)("p",{children:["Time == ",.008*n.split(" ").length]}),Object(i.jsxs)("p",{children:["Current string == ",n]}),Object(i.jsx)("hr",{})]})]})}function h(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-info pt-3",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"HOME"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:e.aboutTxt})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"OPTIONS"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"A"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"B"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"C"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"D"})})]})]}),Object(i.jsx)("li",{className:"nav-item"})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}h.defaultProps={title:"set name",aboutTxt:"ABOUT US"};var b=function(){var e=Object(c.useState)(0),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Counting_Words"}),Object(i.jsx)("textarea",{className:"form-control",placeholder:"Enter you data here!",rows:"5",col:"10",onChange:function(e){return n(e.target.value.length)}}),Object(i.jsxs)("p",{children:["Total Number of characters: ",t]})]})})};function j(){var e=Object(c.useState)({color:"red",backgroundColor:"yellow"}),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5",style:t,children:[Object(i.jsx)("h2",{children:"ABOUT US"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){"red"===t.color?n({color:"green",backgroundColor:"violet"}):n({color:"red",backgroundColor:"yellow"})},children:"new Theme Mode"})})]})})}var m=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{title:"$$-app"}),Object(i.jsx)(d,{heading:"text-form"}),Object(i.jsx)(b,{}),Object(i.jsx)(j,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.0cf5f9f4.chunk.js.map