(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"O/Q+":function(e,t,a){},UV5A:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("9eSz"),i=a.n(c),m=a("Bl7J"),s=a("vrFN"),o=(a("O/Q+"),function(e){var t=new Date,a=new Date(e),n=a.getFullYear()<t.getFullYear(),r=a.getFullYear()==t.getFullYear()&&a.getMonth()<t.getMonth(),l=a.getFullYear()==t.getFullYear()&&a.getMonth()==t.getMonth()&&a.getDate()<t.getDate();return n||r||l}),u=function(e){var t=e.path,a=e.image.childImageSharp.fluid,n=e.title,c=e.date;return r.a.createElement("div",{className:"events-page-item",key:t},r.a.createElement(l.Link,{to:t},r.a.createElement("div",{className:"image-container"},r.a.createElement(i.a,{fluid:a})),r.a.createElement("div",{className:"text"},r.a.createElement("span",{className:"title"},n),r.a.createElement("br",null),r.a.createElement("span",{className:"details"},c))))},d="1046651195";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=t.filter((function(e){var t=e.node;return o(t.frontmatter.date)})),n=t.filter((function(e){var t=e.node;return!o(t.frontmatter.date)}));return r.a.createElement(m.a,null,r.a.createElement(s.a,{title:"Events"}),r.a.createElement("div",{className:"events-page-container"},r.a.createElement("h1",null,"Upcoming Events"),0==n.length?r.a.createElement("div",{className:"no-events"},"Nothing yet... Check back later this month!"):r.a.createElement("div",{className:"events-items-container"},n.map((function(e){var t=e.node;return u(t.frontmatter)}))),r.a.createElement("h1",null,"Past Events"),r.a.createElement("div",{className:"events-items-container"},a.map((function(e){var t=e.node;return u(t.frontmatter)})))))}}}]);
//# sourceMappingURL=component---src-pages-events-js-92186ce5d07182a97a4c.js.map