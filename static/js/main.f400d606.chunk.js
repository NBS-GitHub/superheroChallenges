(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),i=(a(24),a(12)),o=a(5),s=a(6),u=a(10),m=a(7),d=a(11),h=a(37),f=a(38),E=a(16),p=(a(25),a(39)),v=(a(26),function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"superhero challenges"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.a,{to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/about"},"About"))))}),g=(a(30),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.text,l=t.checked,r=t.date;n.length<1||a.props.add(n,r,l)&&a.setState({text:"",checked:!1,date:a.minDate})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h2",null,"Add Challenge"),l.a.createElement("div",{className:"inputs"},l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"text",placeholder:"Enter Challenge Name",value:this.state.text,onChange:this.handleText})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"important",type:"checkbox",checked:this.state.checked,onChange:this.handleCheckbox}),l.a.createElement("label",{htmlFor:"important"},"High Priority")),l.a.createElement("div",{className:"row date"},l.a.createElement("label",{htmlFor:"deadline"},"Deadline: "),l.a.createElement("input",{id:"deadline",type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate})),l.a.createElement("button",null,"do it!")))}}]),t}(n.Component)),k=(a(31),function(e){var t=e.task,a=t.text,n=t.date,r=t.id,c=t.active,i=t.important,o=t.finishDate;if(c)return l.a.createElement("div",{className:"task unfinished"},l.a.createElement("div",{className:"row"},l.a.createElement("strong",null,i?l.a.createElement("span",{style:{color:"var(--red)"}},"! \u2003"):l.a.createElement("span",null,"\xa0\xa0\u2003")," ",a)),l.a.createElement("div",{className:"row"},l.a.createElement("span",null,"to do by ",n)),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:function(){return e.change(r)}},"Done"),l.a.createElement("button",{onClick:function(){return e.delete(r)}},"X")));var s=new Date(o).toLocaleString();return l.a.createElement("div",{className:"task finished"},l.a.createElement("div",{className:"row"},l.a.createElement("strong",null,a),l.a.createElement("span",null," (to do by ",n,")")),l.a.createElement("div",{className:"row"},"accomplished ",l.a.createElement("span",null,s)),l.a.createElement("button",{onClick:function(){return e.delete(r)}},"X"))}),b=(a(32),function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});t.length>1&&t.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0}),a.length>1&&a.sort(function(e,t){return t.finishDate-e.finishDate});var n=t.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}),r=a.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})});return l.a.createElement("div",{className:"tasksWrapper"},l.a.createElement("div",{className:"todo"},l.a.createElement("h2",null,"Challenges to do ",t.length>0&&"(".concat(t.length,")")),n.length>0?n:l.a.createElement("p",null,"All challenges done")),l.a.createElement("div",{className:"done"},l.a.createElement("h3",null,"Challenges done (",a.length,")"),r))}),w=(a(33),function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h3",null,"about"),l.a.createElement("p",null,"What is the difference between an ordinary superhero and a legendary one? The latter has got the SuCh-System\u2122 - which stands for the superhero Challenges Management System!"),l.a.createElement("p",null,"Flood, asteroid, volcano, or maybe an alien attack? Peace of cake! Be always on time with SuCh-System\u2122!"),l.a.createElement("p",null,"With this intuitive, cutting-edge app you can manage your challenges in a smooth and convenient way."),l.a.createElement("p",null,"Save your time and save the word",l.a.createElement("br",null),"with the SuCh-System\u2122!"))}),y=(a(34),function(){return l.a.createElement("div",{className:"error"},l.a.createElement("h3",null,"The Jamerikan - Wrong Path"),l.a.createElement("iframe",{src:"https://www.youtube.com/embed/94wFAzwO2oI"}))}),S=(a(35),function(){return l.a.createElement("footer",null,l.a.createElement("h3",null,l.a.createElement("a",{href:"http://frontepic.com",target:"_blank"},l.a.createElement("small",null,"front"),"Epic")," \xa9 2k19"))}),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteTask=function(e){var t=Object(i.a)(a.state.tasks);t=t.filter(function(t){return t.id!==e}),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var l={id:a.drawId(),text:e,date:t,important:n,active:!0,finishDate:null};return a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[l])}}),!0},a.drawId=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},a.state={tasks:[{id:a.drawId(),text:"stop the volcano eruption - Italy",date:"2019-02-15",important:!0,active:!0,finishDate:null},{id:a.drawId(),text:"milk x2, bread, gift for aunt",date:"2019-05-23",important:!1,active:!0,finishDate:null},{id:a.drawId(),text:"save people from the flood in the central Brasil",date:"2019-02-12",important:!0,active:!0,finishDate:null}]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",{className:"appWrap"},l.a.createElement(v,null),l.a.createElement("main",null,l.a.createElement(f.a,null,l.a.createElement(E.a,{path:"/",exact:!0,render:function(){return l.a.createElement("div",null,l.a.createElement(g,{add:e.addTask}),l.a.createElement(b,{tasks:e.state.tasks,delete:e.deleteTask,change:e.changeTaskStatus}))}}),l.a.createElement(E.a,{path:"/about",component:w}),l.a.createElement(E.a,{component:y}))),l.a.createElement(S,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f400d606.chunk.js.map