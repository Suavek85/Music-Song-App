(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/music-black-white.1c419989.jpg"},21:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),i=(a(27),a(11)),l=a(12),m=a(19),o=a(13),u=a(20),h=(a(28),a(14)),b=a.n(h),d=a(4),p=a(2),f=a(15);function k(){var e=Object(d.a)(["\n  color: grey;\n"]);return k=function(){return e},e}var w=Object(p.a)(f.a)(k()),g=(a(34),function(e){var t=e.buttonSubmit,a=e.searchChange;return r.a.createElement("form",{className:"search white-70",action:""},r.a.createElement("input",{type:"search",onChange:a,placeholder:"Justin Bieber",required:!0}),r.a.createElement("button",{type:"button",onClick:t},"Search"))}),v={backgroundImage:"url("+b.a+")"},E=function(e){var t=e.buttonSubmit,a=e.searchChange;return r.a.createElement("header",{className:"sans-serif"},r.a.createElement("div",{className:"cover bg-left bg-center-l",style:v},r.a.createElement("div",{className:"bg-black-80 pb5 pb6-m pb7-l"},r.a.createElement("nav",{className:"dt w-100 mw8 center"},r.a.createElement("div",{className:"dtc w2 v-mid pa3"},r.a.createElement("a",{href:"/",className:"dib w3 h3 pa1 grow-large "},r.a.createElement(w,null))),r.a.createElement("div",{className:"dtc v-mid tr pa3"},r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3",href:"/"},"Your Favorite"),r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3",href:"/"},"Songs"),r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3",href:"/"},"About"),r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba",href:"/"},"Sign Up"))),r.a.createElement("div",{className:"tc-l mt4 mt5-m mt6-l ph3"},r.a.createElement("h1",{className:"h1-clip"},"SONG FINDER"),r.a.createElement("h2",{className:"fw1 f3 white-80 mt3 mb4"},"Find top 3 tracks of your artist:"),r.a.createElement(g,{searchChange:a,buttonSubmit:t})))))},N=a(18);function y(){var e=Object(d.a)(["\n  color: rgba(0,0,0,.3);\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  cursor: pointer;\n"]);return y=function(){return e},e}var _=Object(p.a)(N.a)(y()),S=function(e){return r.a.createElement("article",{className:" mw5 center relative bg-white br3 pa3 pa4-ns mv5 ba b--black-10"},r.a.createElement(_,{absolute:!0,"top-10":!0,"left-10":!0,"hvr-pulse":!0}),r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement("h1",{className:"f3 mb2 pb3 dark-red"},e.track),r.a.createElement("h2",{className:"f5 fw4 gray mt0"},r.a.createElement("span",{className:"dark-red"},"Artist:"),r.a.createElement("br",null),e.artist),r.a.createElement("h2",{className:"f5 fw4 gray mt0"},r.a.createElement("span",{className:"dark-red"},"Album:"),r.a.createElement("br",null),e.album)))},j=function(e){var t=e.isMusic,a=e.music;return!1===t?r.a.createElement("p",null,"Search now"):r.a.createElement("div",{className:"flex flex-wrap relative justify-center"},a.map(function(e,t){return r.a.createElement(S,{key:t,track:e.track,album:e.album,artist:e.artist})}))},O=(a(35),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).onSearchChange=function(t){e.setState({input:t.target.value}),console.log(t.target.value)},e.onButtonSubmit=function(){var t="https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=".concat(e.state.input,"&page_size=3&page=1&s_track_rating=desc & apikey=").concat("22d91306931ee5a074eb08a71662cc98");fetch(t).then(function(e){return e.json()}).then(function(t){0!==t.message.header.available&&(e.setState({music:[{track:t.message.body.track_list[0].track.track_name,album:t.message.body.track_list[0].track.album_name,artist:t.message.body.track_list[0].track.artist_name},{track:t.message.body.track_list[1].track.track_name,album:t.message.body.track_list[1].track.album_name,artist:t.message.body.track_list[1].track.artist_name},{track:t.message.body.track_list[2].track.track_name,album:t.message.body.track_list[2].track.album_name,artist:t.message.body.track_list[2].track.artist_name}]}),e.setState({cardsShow:!0}))})},e.state={input:"",cardsShow:!1,music:[{track:"",album:"",artist:""},{track:"",album:"",artist:""},{track:"",album:"",artist:""}]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{searchChange:this.onSearchChange,buttonSubmit:this.onButtonSubmit}),r.a.createElement(j,{isMusic:this.state.cardsShow,music:this.state.music}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.2bdbc14a.chunk.js.map