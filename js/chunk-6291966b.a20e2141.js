(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6291966b"],{"5c33":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._v(" rick and morty "),e("div",{staticClass:"characters-list"},t._l(t.characters,(function(t){return e("character-block",{key:t.id,attrs:{character:t}})})),1),t.pages?e("paginate",{attrs:{"page-count":t.pages,"page-range":3,"margin-pages":2,"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}}):t._e()],1)},r=[],n=(e("d3b7"),e("3ca3"),e("ddb0"),e("6d24")),s=function(){return e.e("chunk-2d0dee55").then(e.t.bind(null,"8832",7))},i={name:"rick-and-morty-list",components:{CharacterBlock:n["a"],Paginate:s},data:function(){return{currentPage:1}},computed:{characters:function(){return this.$store.getters["getCharactersByPage"](this.currentPage)},firstCharacter:function(){return this.$store.getters["getCharacterById"]({id:1,page:1})},pages:function(){return this.$store.state.pages}},watch:{currentPage:{handler:function(t){this.$store.dispatch("fetchCharacters",t)},immediate:!0}},methods:{clickCallback:function(t){console.log({pageNum:t})}}},l=i,o=e("2877"),u=Object(o["a"])(l,c,r,!1,null,null,null);a["default"]=u.exports},"6d24":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"character-block"},[e("div",{staticClass:"character-block__image"},[e("img",{attrs:{src:t.character.image,alt:t.character.name}})]),e("div",{staticClass:"character-block__info"},[e("span",{on:{click:t.detailedInfo}},[t._v(" "+t._s(t.character.name)+" ")]),e("span",[t._v(" "+t._s(t.character.status)+" - "+t._s(t.character.species)+" ")]),e("span",[t._v(" Last know location: "+t._s(t.character.location.name)+" ")])])])},r=[],n={name:"character-block",props:{character:{type:Object,required:!0}},methods:{detailedInfo:function(){this.$router.push({name:"CharacterDetails",params:{id:this.character.id}})}}},s=n,i=e("2877"),l=Object(i["a"])(s,c,r,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-6291966b.a20e2141.js.map