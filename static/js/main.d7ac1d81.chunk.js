(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(9),n=a.n(o),l=(a(14),a(3)),r=(a(15),a(6)),i=a(0);function d(e){var t=Object(c.useState)("Enter the text"),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsxs)("div",{className:" container mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:Object(i.jsx)("h1",{style:(e.mode,{color:"info"===e.mode?"blue":"black"}),children:"ALPHABET_CONVERTERS"})}),Object(i.jsx)("textarea",{className:"form-control text-yellow",style:{backgroundColor:"light"===e.mode?"light":"dark"},value:s,onChange:function(e){console.log("Changed"),o(e.target.value)},id:"exampleFormControlTextarea1",rows:"10"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase here\n"+s),o("you have clicked on function upper\n");var t=s.toUpperCase();o(t),e.showAlert("capital format","success")},children:"Convert Upper from lower"}),Object(i.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){console.log("Uppercase here\n"+s),o("you have clicked on function upper\n");var t=s.toLowerCase();o(t),e.showAlert("smaller format","success")},children:"Convert Lower from Upper"}),Object(i.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){if(0===s.length)o("not defined");else{for(var t=s,a=new Array(256),c=0;c<256;c++)a[c]=0;for(var n=t.length,l=0;l<n;l++)a[t[l].charCodeAt(0)]+=1;for(var r=-1,i=" ",d=0;d<n;d++)r<a[t[d].charCodeAt(0)]&&(r=a[t[d].charCodeAt(0)],i=t[d]);o(i),e.showAlert("most-repeated char is here!","success")}},children:"Max repeated char"}),Object(i.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){var t,a=s.match(/\w+/g),c={},n=Object(r.a)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;c[l]?c[l]++:c[l]=1}}catch(m){n.e(m)}finally{n.f()}var i,d=0,h="",b=Object(r.a)(a);try{for(b.s();!(i=b.n()).done;){var j=i.value;c[j]>d&&(d=c[j],h=j)}}catch(m){b.e(m)}finally{b.f()}o(h),e.showAlert("most-repeated word is here!","success")},children:"Max repeated word"}),Object(i.jsx)("button",{className:"btn btn-warning mx-2",onClick:function(){console.log("click Copy");var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("text-copied!","success")},children:"Copy_Text"}),Object(i.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){console.log("handling space");var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("unnecessary spaces are removed","success")},children:"Manage Space"}),Object(i.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){console.log("Clear"),o(""),e.showAlert("textarea is cleared!","success")},children:"Clear Terminal"})]}),Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("hr",{}),Object(i.jsx)("h1",{style:{color:"light"===e.mode?"blue":"white"},children:"Overall Summary"}),Object(i.jsxs)("p",{style:{color:"light"===e.mode?"blue":"white"},children:["Letters == ",s.length]}),Object(i.jsxs)("p",{style:{color:"light"===e.mode?"blue":"white"},children:["Words == ",s.split(" ").length]}),Object(i.jsxs)("p",{style:{color:"light"===e.mode?"blue":"white"},children:["Time == ",.008*s.split(" ").length]}),Object(i.jsxs)("p",{style:{color:"light"===e.mode?"blue":"white"},children:["Current string == ",0!==s.length?s:"plz enter the text"]}),Object(i.jsx)("hr",{})]})]})}var h=a(5);function b(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," pt-3"),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(h.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link active","aria-current":"page",to:"/",children:"HOME"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link",to:"/about",children:e.aboutTxt})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"OPTIONS"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"A"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"B"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"C"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/",children:"D"})})]})]}),Object(i.jsx)("li",{className:"nav-item"})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat(e.mode),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.enableMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchDefault",children:"mode-1"})]}),"\xa0",Object(i.jsxs)("div",{className:"form-check form-switch text-".concat(e.mode),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.enableModex,type:"checkbox",id:"flexSwitchCheckDefault2"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchDefault",children:"mode-2"})]})]})]})})})}b.defaultProps={title:"set name",aboutTxt:"ABOUT US"};var j=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Counting_Words"}),Object(i.jsx)("textarea",{className:"form-control",placeholder:"Enter you data here!",rows:"5",col:"10",onChange:function(e){return s(e.target.value.length)}}),Object(i.jsxs)("p",{children:["Total Number of characters: ",a]})]})})};function m(){var e=Object(c.useState)({color:"red",backgroundColor:"yellow"}),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5",style:a,children:[Object(i.jsx)("h2",{children:"ABOUT US"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){"red"===a.color?s({color:"green",backgroundColor:"violet"}):s({color:"red",backgroundColor:"yellow"})},children:"New Theme Mode"})})]})})}var u=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),Object(i.jsxs)("strong",{children:[" : ",e.alert.msg]})]})},x=a(2);var p=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),r=n[0],p=n[1],O=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),3e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(b,{title:"$$-app",mode:a,enableMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="grey",O("theme 2 is enabled","success")):(s("light"),document.body.style.backgroundColor="white",O("default theme is enabled","success"))},enableModex:function(){"light"===a?(s("info"),O("theme 2 is enabled","success")):(s("light"),O("theme 3 is enabled","success"))}}),Object(i.jsx)(u,{alert:r}),Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/about",element:Object(i.jsx)(m,{})}),Object(i.jsx)(x.a,{exact:!0,path:"/",element:Object(i.jsx)(d,{heading:"text-form",mode:a,showAlert:O})}),Object(i.jsx)(x.a,{exact:!0,path:"/text",element:Object(i.jsx)(j,{})})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.d7ac1d81.chunk.js.map