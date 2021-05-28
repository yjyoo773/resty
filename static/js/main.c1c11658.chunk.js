(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{47:function(e,t,n){},58:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(34),l=n.n(a),i=n(5),o=n(6),c=n(8),u=n(7),h=(n(47),n(13)),d=n(1),p=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"RESTy"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/resty",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/history",children:"History"})}),Object(d.jsx)("li",{children:Object(d.jsx)(h.b,{to:"/help",children:"Help"})})]})})]})},j=n(21),b=n.n(j),O=n(36),f=(n(58),n(16)),g=n.n(f),m=(n(76),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleBodyChange=function(t){var n=t.target.value;e.props.handleBody(n)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{type:"text",placeholder:"type body in JSON format",onChange:this.handleBodyChange})})}}]),n}(r.a.Component)),y=(n(77),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleQueryChange=function(t){var n=t.target.value;e.props.handleQuery(n)},e.handleValueChange=function(t){var n=t.target.value;e.props.handleValue(n)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"query parameter",onChange:this.handleQueryChange}),Object(d.jsx)("input",{type:"text",placeholder:"value",onChange:this.handleValueChange})]})}}]),n}(r.a.Component)),v=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleUrlChange=function(e){var t=e.target.value;s.props.handleUrl(t)},s.handleBody=function(e){s.setState({body:e})},s.handleQuery=function(e){s.setState({query:e})},s.handleValue=function(e){s.setState({value:e})},s.handleRestButton=function(e){e.preventDefault();var t=e.target.value;s.props.handleRest(t)},s.handleGoButton=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,r,a,l,i,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=s.props.history,r={rest:s.props.rest,url:s.props.url,body:s.state.body,query:s.state.query,value:s.state.value},n.push(r),localStorage.getItem("".concat(s.props.rest,"-").concat(s.props.url))||localStorage.setItem("".concat(s.props.rest,"-").concat(s.props.url),JSON.stringify(r)),s.setState({history:n}),e.prev=6,l=[],s.props.toggleLoad(),"get"!==s.props.rest){e.next=13;break}return e.next=12,g.a.get(s.props.url);case 12:a=e.sent;case 13:if("post"!==s.props.rest){e.next=18;break}return console.log("body",s.state.body),e.next=17,g.a.post(s.props.url,s.state.body);case 17:a=e.sent;case 18:if("delete"!==s.props.rest){e.next=22;break}return e.next=21,g.a.delete(s.props.url);case 21:a=e.sent;case 22:i=a.data.count,o=a.headers,c=a.data,l.push(o),l.push(c),setTimeout((function(){s.props.handleForm(i,l,n),s.props.toggleLoad()}),1e3),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(6),setTimeout((function(){s.props.toggleLoad()}),1e3),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[6,30]])})));return function(t){return e.apply(this,arguments)}}(),s.state={body:"",query:"",value:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e="get"===this.props.rest;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["URL: \xa0",Object(d.jsx)("input",{type:"text",onChange:this.handleUrlChange,value:this.props.url}),Object(d.jsx)("button",{onClick:this.handleGoButton,children:"GO!"})]}),Object(d.jsx)("button",{onClick:this.handleRestButton,value:"get",children:"GET"}),Object(d.jsx)("button",{onClick:this.handleRestButton,value:"post",children:"POST"}),Object(d.jsx)("button",{onClick:this.handleRestButton,value:"put",children:"PUT"}),Object(d.jsx)("button",{onClick:this.handleRestButton,value:"delete",children:"DELETE"}),e?Object(d.jsx)(y,{handleQuery:this.handleQuery,handleValue:this.handleValue}):Object(d.jsx)(m,{handleBody:this.handleBody})]})}}]),n}(r.a.Component),x=(n(78),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).getvals=function(t){var n=t.target.innerHTML,s=(n=n.split(/[ ]+/))[1],r=n[0];e.props.handleRest(r),e.props.handleUrl(s)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.history.map((function(t,n){return Object(d.jsxs)("li",{onClick:e.getvals,className:"historyList",children:[t.rest," ",t.url]},n)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{children:t})})}}]),n}(r.a.Component)),C=n(37),k=n.n(C),S=(n(79),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("section",{className:"results",children:Object(d.jsx)(k.a,{src:this.props.results})})}}]),n}(r.a.Component)),R=n(38),U=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{handleForm:this.props.handleForm,handleUrl:this.props.handleUrl,handleRest:this.props.handleRest,toggleLoad:this.props.toggleLoad,history:this.props.history,url:this.props.url,rest:this.props.rest}),this.props.loading&&Object(d.jsx)(R.a,{}),Object(d.jsxs)("div",{className:"histults",style:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"center"},children:[Object(d.jsx)(x,{history:this.props.history,handleUrl:this.props.handleUrl,handleRest:this.props.handleRest}),this.props.results.length>0?Object(d.jsx)(S,{results:this.props.results,count:this.props.count}):""]})]})}}]),n}(r.a.Component),q=n(3),B=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getBody=function(e){var t=e.target.innerHTML;t=t.split("<"),s.setState({results2:JSON.parse(localStorage.getItem(t[0]))})},s.fillHome=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(e.target.value)),n=t.url,r=t.rest;s.props.handleUrl(n),s.props.handleRest(r);var a=s.props.history;a&&a.push("/resty")},s.state={results2:{}},s}return Object(o.a)(n,[{key:"render",value:function(){for(var e=this,t=[],n=0;n<localStorage.length;n++)t.push(localStorage.key(n));return t=t.map((function(t,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{onClick:e.getBody,className:"historyList",children:t},n),Object(d.jsx)("button",{onClick:e.fillHome,value:t,children:"Re-Run"})]})})),Object(d.jsxs)("div",{className:"histults",style:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"center"},children:[Object(d.jsx)("ul",{children:t}),0!==Object.keys(this.state.results2).length?Object(d.jsx)(S,{results:this.state.results2}):""]})}}]),n}(r.a.Component),L=Object(q.f)(B),T=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus risus at magna facilisis ornare. In hac habitasse platea dictumst. Aliquam euismod enim non odio bibendum sollicitudin. Ut id aliquam est. Nullam sed sapien mi. Maecenas euismod, mauris a dapibus cursus, mauris sapien varius arcu, at fringilla nibh sapien faucibus justo. Praesent mauris lorem, porta eu auctor non, porttitor vel magna. Curabitur semper finibus tincidunt. Phasellus tincidunt quam vitae eros convallis posuere. Nulla eu convallis ante. Pellentesque sit amet augue ut lorem fringilla tristique. Vestibulum at fermentum lorem. Sed quis tincidunt augue, eu dignissim augue. Morbi in euismod orci. Etiam scelerisque consequat turpis, sit amet malesuada ligula dignissim non. Duis luctus lacus at lacus dictum elementum. Phasellus at mauris id nibh pretium pulvinar sed sed nunc. Vestibulum venenatis semper justo sed laoreet. Vivamus sollicitudin aliquet ante, nec imperdiet lacus tincidunt in. Pellentesque non ullamcorper nulla. Pellentesque felis lectus, venenatis eget vehicula a, feugiat sed libero."})})}}]),n}(r.a.Component),N=(n(81),function(){return Object(d.jsx)("footer",{children:Object(d.jsx)("h4",{children:"\xa9 2021 RESTY "})})}),F=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleForm=function(e,t,n){s.setState({count:e,results:t,history:n})},s.toggleLoad=function(){s.setState({loading:!s.state.loading})},s.handleUrl=function(e){s.setState({url:e})},s.handleRest=function(e){s.setState({rest:e})},s.state={count:0,results:[],history:[],rest:"get",url:"",loading:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(q.c,{children:[Object(d.jsx)(q.a,{exact:!0,path:"/resty",children:Object(d.jsx)(U,{handleForm:this.handleForm,handleUrl:this.handleUrl,handleRest:this.handleRest,toggleLoad:this.toggleLoad,history:this.state.history,url:this.state.url,rest:this.state.rest,loading:this.state.loading,results:this.state.results,count:this.state.count})}),Object(d.jsx)(q.a,{exact:!0,path:"/history",children:Object(d.jsx)(L,{history:this.state.history,handleUrl:this.handleUrl,handleRest:this.handleRest})}),Object(d.jsx)(q.a,{exact:!0,path:"/help",children:Object(d.jsx)(T,{})})]}),Object(d.jsx)(N,{})]})}}]),n}(r.a.Component);l.a.render(Object(d.jsx)(h.a,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.c1c11658.chunk.js.map