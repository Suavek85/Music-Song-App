(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,n){e.exports=n.p+"static/media/music-black-white.1c419989.jpg"},27:function(e,a,n){e.exports=n.p+"static/media/music-black-white-rotate.7223fc14.jpg"},28:function(e,a,n){e.exports=n.p+"static/media/brazil.2d2c23ed.jpg"},29:function(e,a,n){e.exports=n.p+"static/media/usa.87e4a6a5.jpg"},30:function(e,a,n){e.exports=n.p+"static/media/spain.a284017c.jpg"},31:function(e,a,n){e.exports=n.p+"static/media/generic.17e4dd24.jpg"},37:function(e,a,n){e.exports=n(56)},43:function(e,a,n){},44:function(e,a,n){},49:function(e,a,n){},55:function(e,a,n){},56:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),c=n(7),r=n.n(c),i=(n(43),n(6)),d=n(15),m=n(16),s=n(35),l=n(17),u=n(36),p=(n(44),n(18)),h=n.n(p),g=n(4),b=n(3),f=n(19);function v(){var e=Object(g.a)(["\n  color: grey;\n"]);return v=function(){return e},e}var k=Object(b.a)(f.a)(v()),y=(n(49),function(e){var a=e.headerSearch,n=e.searchChange;return o.a.createElement("form",{className:"search white-70",action:""},o.a.createElement("input",{type:"search",onChange:n,placeholder:"Justin Bieber",required:!0}),o.a.createElement("button",{type:"button",onClick:a},"Search"))}),w=function(e){return o.a.createElement("div",{style:{width:"18px",height:"18px",top:"-5%",right:"-3%",backgroundImage:"linear-gradient(to bottom, #fc9f8a, #fa623f)"},className:"tc br-100 db absolute pa1 br-100 ba"},o.a.createElement("span",{className:"f8",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",border:"0,5px solid transparent",textShadow:"0 1px rgba(0, 0, 0, 0.25)",color:"white"}},e.countFavs))},S=function(e){var a=e.headerSearch,n=e.showFavs,t=e.searchChange,c=e.countFavs,r={backgroundImage:"url(".concat(h.a,")")};return o.a.createElement("header",{className:"sans-serif  "},o.a.createElement("div",{className:"cover bg-left bg-center-l ",style:r},o.a.createElement("div",{className:"bg-black-80 pb5 pb6-m pb7-l "},o.a.createElement("nav",{className:"dt w-100 mw8 center"},o.a.createElement("div",{className:"dtc w2 v-mid pa3"},o.a.createElement("a",{href:"/",className:"dib w3 h3 pa1 grow-large "},o.a.createElement(k,null))),o.a.createElement("div",{className:"dtc v-mid tr pa3"},o.a.createElement("div",{onClick:n,className:"relative f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"},"Favorite songs",o.a.createElement(w,{countFavs:c})),o.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer",href:"#charts"},"Charts"),o.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba",href:"/"},"Sign Up"))),o.a.createElement("div",{className:"tc-l mt4 mt5-m mt6-l ph3"},o.a.createElement("h1",{className:"h1-clip"},"SONG FINDER"),o.a.createElement("h2",{className:"fw1 f3 white-80 mt3 mb4"},"Find top 3 tracks of your artist:"),o.a.createElement(y,{searchChange:t,headerSearch:a})))))},C=n(22);function E(){var e=Object(g.a)(["\n  color: rgba(0, 0, 0, 0.3);\n  width: 30px;\n  height: 30px;\n  color: red;\n  cursor: pointer;\n"]);return E=function(){return e},e}var x=Object(b.a)(C.a)(E()),F=n(23);function A(){var e=Object(g.a)(["\n  color: rgba(0, 0, 0, 0.3);\n  width: 30px;\n  height: 30px;\n  color: red;\n  cursor: pointer;\n"]);return A=function(){return e},e}var N=Object(b.a)(F.a)(A()),z=n(24);function I(){var e=Object(g.a)(["\n  width: 26px;\n  height: 26px;\n  color: lightgrey;\n  cursor: pointer;\n"]);return I=function(){return e},e}var j=Object(b.a)(z.a)(I()),T=function(e){return o.a.createElement("article",{className:" w-25 w-40-m center relative bg-near-white br3 pa3 pa4-ns mv5 ba b--black-10"},o.a.createElement("div",{className:"fav-wrapper grow-hov",style:{height:"32px",width:"32px",position:"absolute",top:"10px",left:"10px"},"data-id":e.id,onClick:e.onFavClick},e.favClicked?o.a.createElement(N,null):o.a.createElement(x,null)),o.a.createElement("div",{onClick:e.removeFavs,"data-id":e.id,className:"fav-wrapper grow-hov",style:{height:"26px",width:"26px",position:"absolute",top:"10px",right:"10px"}},e.addedToFav?o.a.createElement(j,null):null),o.a.createElement("div",{className:"tc"},o.a.createElement(k,{style:{height:"120px",width:"120px"}}),o.a.createElement("h1",{className:"f3 mb2 pb3 dark-red"},e.track),o.a.createElement("h2",{className:"f5 fw4 gray mt0"},o.a.createElement("span",{className:"dark-red"},"Artist:"),o.a.createElement("br",null),e.artist),o.a.createElement("h2",{className:"f5 fw4 gray mt0"},o.a.createElement("span",{className:"dark-red"},"Album:"),o.a.createElement("br",null),e.album)))},B=function(e){var a=e.cardsShow,n=e.music,t=e.onFavClick,c=e.input;return a?o.a.createElement("div",null,o.a.createElement("h1",{className:"f1 lh-title gray"},'Top Songs by "',c,'"'),o.a.createElement("div",{className:"flex flex-wrap relative justify-center"},n.map(function(e){return o.a.createElement(T,{onFavClick:t,key:e.id,id:e.id,track:e.track,album:e.album,artist:e.artist,favClicked:e.favClicked})}))):null},M=n(25);function L(){var e=Object(g.a)(["\n  width: 44px;\n  height: 44px;\n  padding-left: 20px;\n  color: lightgrey;\n  cursor: pointer;\n"]);return L=function(){return e},e}var R=Object(b.a)(M.a)(L()),_=function(e){var a=e.cardsShow,n=e.music,t=e.onFavClick,c=e.removeFavs,r=e.closeFavs;return a?null:o.a.createElement("div",null,o.a.createElement("h1",{className:"f1 lh-title gray"},"Your Favorites",o.a.createElement(R,{onClick:r})),o.a.createElement("div",{className:"flex flex-wrap relative justify-center"},n.map(function(e){return o.a.createElement(T,{onFavClick:t,removeFavs:c,key:e.id,id:e.id,track:e.track,album:e.album,artist:e.artist,favClicked:e.favClicked,addedToFav:e.addedToFav})})))},O=n(26),G=n.n(O),q=function(e){return o.a.createElement(G.a,{duration:2e3,left:e.fadeLeft,top:e.fadeTop,right:e.fadeRight},o.a.createElement("div",{className:"cover w-60 w-90-m bg-left bg-center-l",style:e.wrapperStyle},o.a.createElement("div",{className:"bg-black-80 pb5 pb6-m pb7-l h-inherit"},o.a.createElement("div",{style:e.textStyle},e.button?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",{style:e.textStyle,onChange:e.searchChange,placeholder:"Try your country...",required:!0})),o.a.createElement("p",{onClick:e.buttonClick,className:"f6 link dim ba bw1 ph4 pv2 mb2 dib hot-pink pointer tracked ttc "},"Go!")):e.name),e.showSongs?o.a.createElement("div",null,o.a.createElement("p",{className:"mb4 ml5 tl"},o.a.createElement("span",{style:e.circleStyle},"1"),o.a.createElement("span",{className:"white pl3 pr1 washed-red"},e.topSongs[0].track),o.a.createElement("span",{className:"white pr1"}," by "),o.a.createElement("span",{className:"white lightest-blue pr2"},e.topSongs[0].artist),o.a.createElement("span",{className:"fav-wrapper grow-hov dib",onClick:e.onCountryFavClick,"data-no":e.topSongs[0].number,"data-id":e.topSongs[0].id},e.topSongs[0].favClicked?o.a.createElement(N,null):o.a.createElement(x,null))),o.a.createElement("p",{className:"mb4 mt1 ml5 tl"},o.a.createElement("span",{style:e.circleStyle},"2"),o.a.createElement("span",{className:"white pl3 pr1 washed-red"},e.topSongs[1].track),o.a.createElement("span",{className:"white pr1"}," by "),o.a.createElement("span",{className:"white lightest-blue pr2"},e.topSongs[1].artist),o.a.createElement("span",{className:"fav-wrapper grow-hov dib",onClick:e.onCountryFavClick,"data-no":e.topSongs[1].number,"data-id":e.topSongs[1].id},e.topSongs[1].favClicked?o.a.createElement(N,null):o.a.createElement(x,null))),o.a.createElement("p",{className:"mb4 mt1  ml5 tl"},o.a.createElement("span",{style:e.circleStyle},"3"),o.a.createElement("span",{className:"white pl3 pr1 washed-red"},e.topSongs[2].track),o.a.createElement("span",{className:"white pr1"}," by "),o.a.createElement("span",{className:"white lightest-blue pr2"},e.topSongs[2].artist),o.a.createElement("span",{className:"fav-wrapper grow-hov dib",onClick:e.onCountryFavClick,"data-no":e.topSongs[2].number,"data-id":e.topSongs[2].id},e.topSongs[2].favClicked?o.a.createElement(N,null):o.a.createElement(x,null)))):null)))},P=function(e){var a=e.countries,n=e.onCountryFavClick;return o.a.createElement("div",null,o.a.createElement("h1",{id:"charts",className:"f1 lh-title gray"},"Top Songs in..."),a.map(function(e){return o.a.createElement(q,{wrapperStyle:e.wrapperStyle,circleStyle:e.circleStyle,textStyle:e.textStyle,key:e.id,number:e.number,name:e.name,topSongs:e.topSongs,fadeTop:e.fadeTop,fadeRight:e.fadeRight,fadeLeft:e.fadeLeft,showSongs:e.showSongs,onCountryFavClick:n})}))},V=function(e){var a=e.countryBottom,n=e.searchChange,t=e.buttonClick,c=e.onCountryFavClick;return o.a.createElement("div",null,a.map(function(e){return o.a.createElement(q,{wrapperStyle:e.wrapperStyle,textStyle:e.textStyle,circleStyle:e.circleStyle,key:e.id,name:e.name,number:e.number,topSongs:e.topSongs,fadeTop:e.fadeTop,fadeRight:e.fadeRight,fadeLeft:e.fadeLeft,button:e.button,showSongs:e.showSongs,searchChange:n,buttonClick:t,onCountryFavClick:c})}))},H=function(e){var a=e.countries,n=e.buttonClick,t=e.searchChange,c=e.countryBottom,r=e.onCountryFavClick,i=e.onSelectedCountryFavClick;return o.a.createElement("div",null,o.a.createElement(P,{countries:a,onCountryFavClick:r}),o.a.createElement(V,{buttonClick:n,searchChange:t,countryBottom:c,onCountryFavClick:i}))},D=n(27),J=n.n(D),U=function(){var e={backgroundImage:"url(".concat(J.a,")")};return o.a.createElement("footer",{style:e,className:"tc-l bg-center cover bg-black"},o.a.createElement("div",{className:"w-100 ph3 pv5 bg-black-80"},o.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://facebook.com",title:"Facebook"},o.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},o.a.createElement("path",{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0",fillRule:"nonzero"})),o.a.createElement("span",{className:"f6 ml3 pr2"},"Facebook")),o.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://instagram.com/mrmrs_",title:"Instagram"},o.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},o.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"})),o.a.createElement("span",{className:"f6 ml3 pr2"},"Instagram")),o.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://youtube.com",title:"youtube"},o.a.createElement("svg",{className:"dib w2 h2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},o.a.createElement("path",{d:"M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"})),o.a.createElement("span",{className:"f6 ml3 pr2"},"Youtube")),o.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://twitter.com/mrmrs_",title:"Twitter"},o.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},o.a.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",fillRule:"nonzero"})),o.a.createElement("span",{className:"f6 ml3 pr2"},"Twitter"))))},K="22d91306931ee5a074eb08a71662cc98",W="https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=".concat(K),Y=function(e){return"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=".concat(e,"&page_size=3&page=1&s_track_rating=desc & apikey=").concat(K)},Z=function(e){return"https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=".concat(e,"&f_has_lyrics=1%20&%20apikey=").concat(K)},Q=n(28),X=n.n(Q),$=n(29),ee=n.n($),ae=n(30),ne=n.n(ae),te=n(31),oe=n.n(te),ce={height:"350px",backgroundImage:"url(".concat(X.a,")"),backgroundAttachment:"fixed",margin:"100px auto 50px auto"},re={height:"350px",backgroundImage:"url(".concat(ee.a,")"),backgroundAttachment:"fixed",margin:"50px auto 50px auto"},ie={height:"350px",backgroundImage:"url(".concat(ne.a,")"),backgroundAttachment:"fixed",margin:"50px auto 80px auto"},de={height:"400px",backgroundImage:"url(".concat(oe.a,")"),backgroundAttachment:"fixed",margin:"50px auto 80px auto"},me={paddingTop:"5px",paddingBottom:"5px",paddingLeft:"13px",paddingRight:"13px",color:"white",fontSize:"18px",borderRadius:"50%",border:"1px solid white"},se=[{name:"Brazil",id:0,code:"BR",topSongs:[{artist:"Lady Gaga feat. Bradley Cooper",track:"Shallow",album:"A Star Is Born Soundtrack",id:158988975,number:11,favClicked:!1},{artist:"Melim",track:"Meu Abrigo",album:"Melim",id:142894014,number:12,favClicked:!1},{artist:"Lady Gaga",track:"Always Remember Us This Way",album:"A Star Is Born Soundtrack",id:158988985,number:13,favClicked:!1}],wrapperStyle:ce,textStyle:{fontSize:"60px",paddingTop:"30px",marginBottom:"40px",color:"pink",fontFamily:"'Montserrat', sans-serif",fontWeight:"900",lineHeight:"1, 5",letterSpacing:"5px"},circleStyle:me,fadeTop:!1,fadeRight:!1,fadeLeft:!0,button:!1,showSongs:!0},{name:"USA",id:1,code:"US",topSongs:[{artist:"Lil Nas X feat. Billy Ray Cyrus",track:"Old Town Road (Remix)",album:"Old Town Road (Remix)",id:17640248,number:21,favClicked:!1},{artist:"Blake Shelton",track:"God's Country",album:"God's Country",id:167306431,number:22,favClicked:!1},{artist:"Florence + The Machine",track:"Jenny of Oldstones (Game of Thrones)",album:"Jenny of Oldstones (Game of Thrones)",id:168716837,number:23,favClicked:!1}],wrapperStyle:re,textStyle:{fontSize:"60px",paddingTop:"30px",marginBottom:"40px",color:"pink",fontFamily:"'Montserrat', sans-serif",fontWeight:"900",lineHeight:"1, 5",letterSpacing:"7px"},circleStyle:me,fadeTop:!1,fadeRight:!0,fadeLeft:!1,button:!1,showSongs:!0},{name:"Spain",id:2,code:"ES",topSongs:[{artist:"Luis Fonsi feat. Sebastian Yatra & Nicky Jam",track:"Date La Vuelta",album:"Date La Vuelta",id:168814808,number:31,favClicked:!1},{artist:"ROSAL feat. J Balvin & El Guincho",track:"Con Altura",album:"Con Altura",id:167497251,number:32,favClicked:!1},{artist:"Alejandro Sanz feat. Camila Cabello",track:"Mi Persona Favorita",album:"#ELDISCO",id:167332228,number:33,favClicked:!1}],wrapperStyle:ie,textStyle:{fontSize:"60px",paddingTop:"30px",marginBottom:"40px",color:"pink",fontFamily:"'Montserrat', sans-serif",fontWeight:"900",lineHeight:"1, 5",letterSpacing:"5px"},circleStyle:me,fadeTop:!1,fadeRight:!1,fadeLeft:!0,button:!1,showSongs:!0}],le=[{name:"",id:0,code:"",topSongs:[{artist:"Artist",track:"Track",album:"Album",id:0,number:41,favClicked:!1},{artist:"Artist",track:"Track",album:"Album",id:0,number:42,favClicked:!1},{artist:"Artist",track:"Track",album:"Album",id:0,number:43,favClicked:!1}],wrapperStyle:de,textStyle:{backgroundColor:"transparent",color:"pink",border:"none",width:"90%",textAlign:"center",outline:"none",fontFamily:"'Montserrat', sans-serif",fontWeight:"900",fontSize:"60px",paddingTop:"20px",margin:"auto"},circleStyle:me,fadeTop:!1,fadeRight:!0,fadeLeft:!1,button:!0,showSongs:!1}],ue=[{track:"Loading...",album:"Loading...",artist:"Loading...",favClicked:!1,addedToFav:!1,id:0},{track:"Loading...",album:"Loading...",artist:"Loading...",favClicked:!1,addedToFav:!1,id:1},{track:"Loading...",album:"Loading...",artist:"Loading...",favClicked:!1,addedToFav:!1,id:2}],pe=[{code:"af",name:"Afghanistan"},{code:"ax",name:"Aland Islands"},{code:"al",name:"Albania"},{code:"dz",name:"Algeria"},{code:"as",name:"American Samoa"},{code:"ad",name:"Andorra"},{code:"ao",name:"Angola"},{code:"ai",name:"Anguilla"},{code:"aq",name:"Antarctica"},{code:"ag",name:"Antigua And Barbuda"},{code:"ar",name:"Argentina"},{code:"am",name:"Armenia"},{code:"aw",name:"Aruba"},{code:"au",name:"Australia"},{code:"at",name:"Austria"},{code:"az",name:"Azerbaijan"},{code:"bs",name:"Bahamas"},{code:"bh",name:"Bahrain"},{code:"bd",name:"Bangladesh"},{code:"bb",name:"Barbados"},{code:"by",name:"Belarus"},{code:"be",name:"Belgium"},{code:"bz",name:"Belize"},{code:"bj",name:"Benin"},{code:"bm",name:"Bermuda"},{code:"bt",name:"Bhutan"},{code:"bo",name:"Bolivia"},{code:"ba",name:"Bosnia And Herzegovina"},{code:"bw",name:"Botswana"},{code:"bv",name:"Bouvet Island"},{code:"br",name:"Brazil"},{code:"io",name:"British Indian Ocean Territory"},{code:"bn",name:"Brunei Darussalam"},{code:"bg",name:"Bulgaria"},{code:"bf",name:"Burkina Faso"},{code:"bi",name:"Burundi"},{code:"kh",name:"Cambodia"},{code:"cm",name:"Cameroon"},{code:"ca",name:"Canada"},{code:"cv",name:"Cape Verde"},{code:"ky",name:"Cayman Islands"},{code:"cf",name:"Central African Republic"},{code:"td",name:"Chad"},{code:"cl",name:"Chile"},{code:"cn",name:"China"},{code:"cx",name:"Christmas Island"},{code:"cc",name:"Cocos (Keeling) Islands"},{code:"co",name:"Colombia"},{code:"km",name:"Comoros"},{code:"cg",name:"Congo"},{code:"cd",name:"Congo, Democratic Republic"},{code:"ck",name:"Cook Islands"},{code:"cr",name:"Costa Rica"},{code:"ci",name:"Cote D'Ivoire"},{code:"hr",name:"Croatia"},{code:"cu",name:"Cuba"},{code:"cy",name:"Cyprus"},{code:"cz",name:"Czech Republic"},{code:"dk",name:"Denmark"},{code:"dj",name:"Djibouti"},{code:"dm",name:"Dominica"},{code:"do",name:"Dominican Republic"},{code:"ec",name:"Ecuador"},{code:"eg",name:"Egypt"},{code:"sv",name:"El Salvador"},{code:"gq",name:"Equatorial Guinea"},{code:"er",name:"Eritrea"},{code:"ee",name:"Estonia"},{code:"et",name:"Ethiopia"},{code:"fk",name:"Falkland Islands (Malvinas)"},{code:"fo",name:"Faroe Islands"},{code:"fj",name:"Fiji"},{code:"fi",name:"Finland"},{code:"fr",name:"France"},{code:"gf",name:"French Guiana"},{code:"pf",name:"French Polynesia"},{code:"tf",name:"French Southern Territories"},{code:"ga",name:"Gabon"},{code:"gm",name:"Gambia"},{code:"ge",name:"Georgia"},{code:"de",name:"Germany"},{code:"gh",name:"Ghana"},{code:"gi",name:"Gibraltar"},{code:"gr",name:"Greece"},{code:"gl",name:"Greenland"},{code:"gd",name:"Grenada"},{code:"gp",name:"Guadeloupe"},{code:"gu",name:"Guam"},{code:"gt",name:"Guatemala"},{code:"gg",name:"Guernsey"},{code:"gn",name:"Guinea"},{code:"gw",name:"Guinea-Bissau"},{code:"gy",name:"Guyana"},{code:"ht",name:"Haiti"},{code:"hm",name:"Heard Island & Mcdonald Islands"},{code:"va",name:"Holy See (Vatican City State)"},{code:"hn",name:"Honduras"},{code:"hk",name:"Hong Kong"},{code:"hu",name:"Hungary"},{code:"is",name:"Iceland"},{code:"in",name:"India"},{code:"id",name:"Indonesia"},{code:"ir",name:"Iran, Islamic Republic Of"},{code:"iq",name:"Iraq"},{code:"ie",name:"Ireland"},{code:"im",name:"Isle Of Man"},{code:"il",name:"Israel"},{code:"it",name:"Italy"},{code:"jm",name:"Jamaica"},{code:"jp",name:"Japan"},{code:"je",name:"Jersey"},{code:"jo",name:"Jordan"},{code:"kz",name:"Kazakhstan"},{code:"ke",name:"Kenya"},{code:"ki",name:"Kiribati"},{code:"kr",name:"Korea"},{code:"kw",name:"Kuwait"},{code:"kg",name:"Kyrgyzstan"},{code:"la",name:"Lao People's Democratic Republic"},{code:"lv",name:"Latvia"},{code:"lb",name:"Lebanon"},{code:"ls",name:"Lesotho"},{code:"lr",name:"Liberia"},{code:"ly",name:"Libyan Arab Jamahiriya"},{code:"li",name:"Liechtenstein"},{code:"lt",name:"Lithuania"},{code:"lu",name:"Luxembourg"},{code:"mo",name:"Macao"},{code:"mk",name:"Macedonia"},{code:"mg",name:"Madagascar"},{code:"mw",name:"Malawi"},{code:"my",name:"Malaysia"},{code:"mv",name:"Maldives"},{code:"ml",name:"Mali"},{code:"mt",name:"Malta"},{code:"mh",name:"Marshall Islands"},{code:"mq",name:"Martinique"},{code:"mr",name:"Mauritania"},{code:"mu",name:"Mauritius"},{code:"yt",name:"Mayotte"},{code:"mx",name:"Mexico"},{code:"fm",name:"Micronesia, Federated States Of"},{code:"md",name:"Moldova"},{code:"mc",name:"Monaco"},{code:"mn",name:"Mongolia"},{code:"me",name:"Montenegro"},{code:"ms",name:"Montserrat"},{code:"ma",name:"Morocco"},{code:"mz",name:"Mozambique"},{code:"mm",name:"Myanmar"},{code:"na",name:"Namibia"},{code:"nr",name:"Nauru"},{code:"np",name:"Nepal"},{code:"nl",name:"Netherlands"},{code:"an",name:"Netherlands Antilles"},{code:"nc",name:"New Caledonia"},{code:"nz",name:"New Zealand"},{code:"ni",name:"Nicaragua"},{code:"ne",name:"Niger"},{code:"ng",name:"Nigeria"},{code:"nu",name:"Niue"},{code:"nf",name:"Norfolk Island"},{code:"mp",name:"Northern Mariana Islands"},{code:"no",name:"Norway"},{code:"om",name:"Oman"},{code:"pk",name:"Pakistan"},{code:"pw",name:"Palau"},{code:"ps",name:"Palestinian Territory, Occupied"},{code:"pa",name:"Panama"},{code:"pg",name:"Papua New Guinea"},{code:"py",name:"Paraguay"},{code:"pe",name:"Peru"},{code:"ph",name:"Philippines"},{code:"pn",name:"Pitcairn"},{code:"pl",name:"Poland"},{code:"pt",name:"Portugal"},{code:"pr",name:"Puerto Rico"},{code:"qa",name:"Qatar"},{code:"re",name:"Reunion"},{code:"ro",name:"Romania"},{code:"ru",name:"Russia"},{code:"rw",name:"Rwanda"},{code:"bl",name:"Saint Barthelemy"},{code:"sh",name:"Saint Helena"},{code:"kn",name:"Saint Kitts And Nevis"},{code:"lc",name:"Saint Lucia"},{code:"mf",name:"Saint Martin"},{code:"pm",name:"Saint Pierre And Miquelon"},{code:"vc",name:"Saint Vincent And Grenadines"},{code:"ws",name:"Samoa"},{code:"sm",name:"San Marino"},{code:"st",name:"Sao Tome And Principe"},{code:"sa",name:"Saudi Arabia"},{code:"sn",name:"Senegal"},{code:"rs",name:"Serbia"},{code:"sc",name:"Seychelles"},{code:"sl",name:"Sierra Leone"},{code:"sg",name:"Singapore"},{code:"sk",name:"Slovakia"},{code:"si",name:"Slovenia"},{code:"sb",name:"Solomon Islands"},{code:"so",name:"Somalia"},{code:"za",name:"South Africa"},{code:"gs",name:"South Georgia And Sandwich Isl."},{code:"es",name:"Spain"},{code:"lk",name:"Sri Lanka"},{code:"sd",name:"Sudan"},{code:"sr",name:"Suriname"},{code:"sj",name:"Svalbard And Jan Mayen"},{code:"sz",name:"Swaziland"},{code:"se",name:"Sweden"},{code:"ch",name:"Switzerland"},{code:"sy",name:"Syrian Arab Republic"},{code:"tw",name:"Taiwan"},{code:"tj",name:"Tajikistan"},{code:"tz",name:"Tanzania"},{code:"th",name:"Thailand"},{code:"tl",name:"Timor-Leste"},{code:"tg",name:"Togo"},{code:"tk",name:"Tokelau"},{code:"to",name:"Tonga"},{code:"tt",name:"Trinidad And Tobago"},{code:"tn",name:"Tunisia"},{code:"tr",name:"Turkey"},{code:"tm",name:"Turkmenistan"},{code:"tc",name:"Turks And Caicos Islands"},{code:"tv",name:"Tuvalu"},{code:"ug",name:"Uganda"},{code:"ua",name:"Ukraine"},{code:"ae",name:"United Arab Emirates"},{code:"gb",name:"United Kingdom"},{code:"us",name:"United States"},{code:"us",name:"USA"},{code:"um",name:"United States Outlying Islands"},{code:"uy",name:"Uruguay"},{code:"uz",name:"Uzbekistan"},{code:"vu",name:"Vanuatu"},{code:"ve",name:"Venezuela"},{code:"vn",name:"Viet Nam"},{code:"vg",name:"Virgin Islands, British"},{code:"vi",name:"Virgin Islands, U.S."},{code:"wf",name:"Wallis And Futuna"},{code:"eh",name:"Western Sahara"},{code:"ye",name:"Yemen"},{code:"zm",name:"Zambia"},{code:"zw",name:"Zimbabwe"},{code:"af",name:"afghanistan"},{code:"ax",name:"aland Islands"},{code:"al",name:"albania"},{code:"dz",name:"algeria"},{code:"as",name:"american samoa"},{code:"ad",name:"andorra"},{code:"ao",name:"angola"},{code:"ai",name:"anguilla"},{code:"aq",name:"antarctica"},{code:"ag",name:"antigua And Barbuda"},{code:"ar",name:"argentina"},{code:"am",name:"armenia"},{code:"aw",name:"aruba"},{code:"au",name:"australia"},{code:"at",name:"austria"},{code:"az",name:"azerbaijan"},{code:"bs",name:"bahamas"},{code:"bh",name:"bahrain"},{code:"bd",name:"bangladesh"},{code:"bb",name:"barbados"},{code:"by",name:"belarus"},{code:"be",name:"belgium"},{code:"bz",name:"Bblize"},{code:"bj",name:"benin"},{code:"bm",name:"bermuda"},{code:"bt",name:"bhutan"},{code:"bo",name:"bolivia"},{code:"ba",name:"bosnia And Herzegovina"},{code:"bw",name:"botswana"},{code:"bv",name:"bouvet Island"},{code:"br",name:"brazil"},{code:"io",name:"british Indian Ocean Territory"},{code:"bn",name:"brunei Darussalam"},{code:"bg",name:"bulgaria"},{code:"bf",name:"burkina Faso"},{code:"bi",name:"burundi"},{code:"kh",name:"cambodia"},{code:"cm",name:"cameroon"},{code:"ca",name:"canada"},{code:"cv",name:"cape Verde"},{code:"ky",name:"cayman Islands"},{code:"cf",name:"central African Republic"},{code:"td",name:"chad"},{code:"cl",name:"Chile"},{code:"cn",name:"china"},{code:"cx",name:"christmas Island"},{code:"cc",name:"cocos (Keeling) Islands"},{code:"co",name:"Ccolombia"},{code:"km",name:"comoros"},{code:"cg",name:"congo"},{code:"cd",name:"congo"},{code:"ck",name:"cook Islands"},{code:"cr",name:"costa rica"},{code:"ci",name:"cote D'Ivoire"},{code:"hr",name:"croatia"},{code:"cu",name:"cuba"},{code:"cy",name:"cyprus"},{code:"cz",name:"czech republic"},{code:"dk",name:"denmark"},{code:"dj",name:"djibouti"},{code:"dm",name:"dminica"},{code:"do",name:"dominican republic"},{code:"ec",name:"ecuador"},{code:"eg",name:"egypt"},{code:"sv",name:"el salvador"},{code:"gq",name:"equatorial Guinea"},{code:"er",name:"eritrea"},{code:"ee",name:"estonia"},{code:"et",name:"ethiopia"},{code:"fk",name:"falkland Islands (Malvinas)"},{code:"fo",name:"faroe Islands"},{code:"fj",name:"fiji"},{code:"fi",name:"finland"},{code:"fr",name:"france"},{code:"gf",name:"french guiana"},{code:"pf",name:"french Polynesia"},{code:"tf",name:"french Southern Territories"},{code:"ga",name:"gabon"},{code:"gm",name:"gambia"},{code:"ge",name:"georgia"},{code:"de",name:"germany"},{code:"gh",name:"ghana"},{code:"gi",name:"gibraltar"},{code:"gr",name:"greece"},{code:"gl",name:"greenland"},{code:"gd",name:"grenada"},{code:"gp",name:"guadeloupe"},{code:"gu",name:"guam"},{code:"gt",name:"guatemala"},{code:"gg",name:"guernsey"},{code:"gn",name:"guinea"},{code:"gw",name:"guinea-Bissau"},{code:"gy",name:"guyana"},{code:"ht",name:"haiti"},{code:"hm",name:"heard Island & Mcdonald Islands"},{code:"va",name:"holy See (Vatican City State)"},{code:"hn",name:"honduras"},{code:"hk",name:"hong Kong"},{code:"hu",name:"hungary"},{code:"is",name:"iceland"},{code:"in",name:"india"},{code:"id",name:"indonesia"},{code:"ir",name:"iran"},{code:"iq",name:"iraq"},{code:"ie",name:"ireland"},{code:"im",name:"isle Of Man"},{code:"il",name:"israel"},{code:"it",name:"italy"},{code:"jm",name:"jamaica"},{code:"jp",name:"japan"},{code:"je",name:"jersey"},{code:"jo",name:"jordan"},{code:"kz",name:"kazakhstan"},{code:"ke",name:"kenya"},{code:"ki",name:"kiribati"},{code:"kr",name:"korea"},{code:"kw",name:"kuwait"},{code:"kg",name:"kyrgyzstan"},{code:"la",name:"lao People's Democratic Republic"},{code:"lv",name:"latvia"},{code:"lb",name:"lebanon"},{code:"ls",name:"lesotho"},{code:"lr",name:"liberia"},{code:"ly",name:"libyan Arab Jamahiriya"},{code:"li",name:"liechtenstein"},{code:"lt",name:"lithuania"},{code:"lu",name:"luxembourg"},{code:"mo",name:"macao"},{code:"mk",name:"macedonia"},{code:"mg",name:"madagascar"},{code:"mw",name:"malawi"},{code:"my",name:"malaysia"},{code:"mv",name:"maldives"},{code:"ml",name:"mali"},{code:"mt",name:"malta"},{code:"mh",name:"marshall Islands"},{code:"mq",name:"martinique"},{code:"mr",name:"mauritania"},{code:"mu",name:"mauritius"},{code:"yt",name:"mayotte"},{code:"mx",name:"mexico"},{code:"fm",name:"micronesia, Federated States Of"},{code:"md",name:"moldova"},{code:"mc",name:"monaco"},{code:"mn",name:"mongolia"},{code:"me",name:"montenegro"},{code:"ms",name:"montserrat"},{code:"ma",name:"morocco"},{code:"mz",name:"mozambique"},{code:"mm",name:"myanmar"},{code:"na",name:"namibia"},{code:"nr",name:"nauru"},{code:"np",name:"nepal"},{code:"nl",name:"netherlands"},{code:"an",name:"netherlands Antilles"},{code:"nc",name:"new Caledonia"},{code:"nz",name:"new Zealand"},{code:"ni",name:"nicaragua"},{code:"ne",name:"niger"},{code:"ng",name:"nigeria"},{code:"nu",name:"niue"},{code:"nf",name:"norfolk Island"},{code:"mp",name:"northern Mariana Islands"},{code:"no",name:"norway"},{code:"om",name:"oman"},{code:"pk",name:"pakistan"},{code:"pw",name:"palau"},{code:"ps",name:"palestinian Territory, Occupied"},{code:"pa",name:"panama"},{code:"pg",name:"papua New Guinea"},{code:"py",name:"paraguay"},{code:"pe",name:"peru"},{code:"ph",name:"philippines"},{code:"pn",name:"pitcairn"},{code:"pl",name:"poland"},{code:"pt",name:"portugal"},{code:"pr",name:"puerto Rico"},{code:"qa",name:"qatar"},{code:"re",name:"reunion"},{code:"ro",name:"romania"},{code:"ru",name:"russia"},{code:"rw",name:"rwanda"},{code:"bl",name:"saint Barthelemy"},{code:"sh",name:"saint Helena"},{code:"kn",name:"saint Kitts And Nevis"},{code:"lc",name:"saint Lucia"},{code:"mf",name:"saint Martin"},{code:"pm",name:"saint Pierre And Miquelon"},{code:"vc",name:"saint Vincent And Grenadines"},{code:"ws",name:"samoa"},{code:"sm",name:"san Marino"},{code:"st",name:"sao Tome And Principe"},{code:"sa",name:"saudi Arabia"},{code:"sn",name:"senegal"},{code:"rs",name:"serbia"},{code:"sc",name:"seychelles"},{code:"sl",name:"sierra Leone"},{code:"sg",name:"singapore"},{code:"sk",name:"slovakia"},{code:"si",name:"slovenia"},{code:"sb",name:"solomon Islands"},{code:"so",name:"somalia"},{code:"za",name:"south Africa"},{code:"gs",name:"south Georgia And Sandwich Isl."},{code:"es",name:"spain"},{code:"lk",name:"sri Lanka"},{code:"sd",name:"sudan"},{code:"sr",name:"suriname"},{code:"sj",name:"svalbard And Jan Mayen"},{code:"sz",name:"swaziland"},{code:"se",name:"sweden"},{code:"ch",name:"switzerland"},{code:"sy",name:"syrian Arab Republic"},{code:"tw",name:"taiwan"},{code:"tj",name:"tajikistan"},{code:"tz",name:"tanzania"},{code:"th",name:"thailand"},{code:"tl",name:"timor-Leste"},{code:"tg",name:"togo"},{code:"tk",name:"tokelau"},{code:"to",name:"tonga"},{code:"tt",name:"trinidad And Tobago"},{code:"tn",name:"tunisia"},{code:"tr",name:"turkey"},{code:"tm",name:"turkmenistan"},{code:"tc",name:"turks And Caicos Islands"},{code:"tv",name:"tuvalu"},{code:"ug",name:"uganda"},{code:"ua",name:"ukraine"},{code:"ae",name:"united Arab Emirates"},{code:"gb",name:"united Kingdom"},{code:"us",name:"united states"},{code:"us",name:"usa"},{code:"um",name:"united States Outlying Islands"},{code:"uy",name:"uruguay"},{code:"uz",name:"uzbekistan"},{code:"vu",name:"vanuatu"},{code:"ve",name:"venezuela"},{code:"vn",name:"viet Nam"},{code:"vg",name:"virgin Islands, British"},{code:"vi",name:"virgin Islands, U.S."},{code:"wf",name:"wallis And Futuna"},{code:"eh",name:"western Sahara"},{code:"ye",name:"yemen"},{code:"zm",name:"zambia"},{code:"zw",name:"zimbabwe"}],he=n(32),ge=function(e){return o.a.createElement("div",null,e.loading?o.a.createElement(he.RadarSpinner,{color:"red",className:"mt5 mb5 center"}):null)},be=function(){window.scrollTo({top:700,left:0,behavior:"smooth"})},fe=(n(55),function(e){function a(e){var n;return Object(d.a)(this,a),(n=Object(s.a)(this,Object(l.a)(a).call(this,e))).onSearchChange=function(e){n.setState({input:e.target.value})},n.onCardFavClick=function(e){if(n.state.cardsShow){var a=e.target.dataset.id,t=n.state.music.findIndex(function(e){return e.id===parseFloat(a)}),o={track:n.state.music[t].track,album:n.state.music[t].album,artist:n.state.music[t].artist,id:n.state.music[t].id,favClicked:!n.state.music[t].favClicked,addedToFav:!0};n.setState(function(e){var a=e.music[t].favClicked,n=Object(i.a)(e.music);return n[t].favClicked=!a,{music:n}}),n.setState(function(e){var a=Object(i.a)(e.favsArray).find(function(e){return e.id===parseFloat(o.id)});return o.favClicked&&void 0===a?{favsArray:[].concat(Object(i.a)(e.favsArray),[o])}:null})}},n.onHeaderSearch=function(){n.setState({isLoading:!0}),fetch(Y(n.state.input)).then(function(e){return e.json()}).then(function(e){0!==e.message.header.available&&(n.setState({cardsShow:!0}),n.setState({isLoading:!1}),n.setState(function(a){var n=a.music;return n.forEach(function(a,n){a.track=e.message.body.track_list[n].track.track_name,a.album=e.message.body.track_list[n].track.album_name,a.artist=e.message.body.track_list[n].track.artist_name,a.id=e.message.body.track_list[n].track.track_id,a.favClicked=!1}),{music:n}}),be())}).catch(function(e){console.log("Cannot load music cards")})},n.onShowFavs=function(){0!==n.state.favsArray.length&&(n.setState({cardsShow:!1}),be())},n.onRemoveFavs=function(e){var a=e.target.dataset.id,t=n.state.favsArray.findIndex(function(e){return e.id===parseFloat(a)});n.setState(function(e){var a=Object(i.a)(e.favsArray);return a.splice(t,1),{favsArray:a}})},n.onCountrySearchChange=function(e){n.setState({inputCountry:e.target.value})},n.onCountryButtonClick=function(){var e=pe.findIndex(function(e){return e.name===n.state.inputCountry});if(-1!==e){var a=pe[e].code;fetch(Z(a)).then(function(e){return e.json()}).then(function(e){e.message.body.track_list&&n.setState(function(a){var n=a.countryBottom;return n[0].showSongs=!0,n[0].topSongs.forEach(function(a,n){a.track=e.message.body.track_list[n].track.track_name,a.album=e.message.body.track_list[n].track.album_name,a.artist=e.message.body.track_list[n].track.artist_name,a.id=e.message.body.track_list[n].track.track_id}),{countryBottom:n}})})}},n.onCloseFavs=function(){n.setState({cardsShow:!0})},n.onCountryFavClick=function(e){var a=e.target.dataset.id,t=e.target.dataset.no,o=n.state.countries,c=[];[o[0].topSongs,o[1].topSongs,o[2].topSongs].forEach(function(e){return c.push.apply(c,Object(i.a)(e))});var r=c.findIndex(function(e){return e.id===parseFloat(a)}),d={track:c[r].track,album:c[r].album,artist:c[r].artist,id:c[r].id,favClicked:!0,addedToFav:!0};n.setState(function(e){var n=e.countries;return[0,1,2].forEach(function(e){n[e].topSongs.forEach(function(e){e.id===parseFloat(a)&&e.number===parseFloat(t)&&(e.favClicked=!e.favClicked)})}),{countries:n}}),n.setState(function(e){var a=e.favsArray;return void 0===a.find(function(e){return e.id===parseFloat(d.id)})?(a.push(d),{favsArray:a}):null})},n.onSelectedCountryFavClick=function(e){var a=e.target.dataset.id,t=e.target.dataset.no,o=n.state.countryBottom,c=o[0].topSongs.findIndex(function(e){return e.id===parseFloat(a)}),r={track:o[0].topSongs[c].track,album:o[0].topSongs[c].album,artist:o[0].topSongs[c].artist,id:o[0].topSongs[c].id,favClicked:!0,addedToFav:!0};n.setState(function(e){var n=e.countryBottom;return n[0].topSongs.forEach(function(e){e.id===parseFloat(a)&&e.number===parseFloat(t)&&(e.favClicked=!e.favClicked)}),{countryBottom:n}}),n.setState(function(e){var a=e.favsArray;return void 0===a.find(function(e){return e.id===parseFloat(r.id)})?(a.push(r),{favsArray:a}):null})},n.state={input:"Justin Bieber",inputCountry:"",isLoading:!0,cardsShow:!0,music:ue,countries:se,countryBottom:le,favsArray:[]},n}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(W).then(function(e){return e.json()}).then(function(a){0!==a.message.header.available&&(e.setState({isLoading:!1}),e.setState(function(e){var n=e.music;return n.forEach(function(e,n){e.track=a.message.body.track_list[n].track.track_name,e.album=a.message.body.track_list[n].track.album_name,e.artist=a.message.body.track_list[n].track.artist_name,e.id=a.message.body.track_list[n].track.track_id,e.favClicked=!1,e.addedToFav=!1}),{music:n}}),e.setState({cardsShow:!0}))}).catch(function(e){console.log("Cannot load music cards")}),[Z("br"),Z("us"),Z("es")].forEach(function(a,n){fetch(a).then(function(e){return e.json()}).then(function(a){e.setState(function(e){var t=e.countries;return t[n].topSongs.forEach(function(e,n){e.track=a.message.body.track_list[n].track.track_name,e.album=a.message.body.track_list[n].track.album_name,e.artist=a.message.body.track_list[n].track.artist_name,e.id=a.message.body.track_list[n].track.track_id}),{countries:t}})})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,{searchChange:this.onSearchChange,headerSearch:this.onHeaderSearch,showFavs:this.onShowFavs,countFavs:this.state.favsArray.length}),o.a.createElement(ge,{loading:this.state.isLoading}),o.a.createElement(B,{onFavClick:this.onCardFavClick,cardsShow:this.state.cardsShow,music:this.state.music,input:this.state.input}),o.a.createElement(_,{onFavClick:this.onFavClick,closeFavs:this.onCloseFavs,removeFavs:this.onRemoveFavs,cardsShow:this.state.cardsShow,music:this.state.favsArray}),o.a.createElement(H,{countries:this.state.countries,buttonClick:this.onCountryButtonClick,searchChange:this.onCountrySearchChange,countryBottom:this.state.countryBottom,onCountryFavClick:this.onCountryFavClick,onSelectedCountryFavClick:this.onSelectedCountryFavClick}),o.a.createElement(U,null))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.103b0a8c.chunk.js.map