"use strict";var _classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},Helpers=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,null,[{key:"getRandom",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}}]),t}(React.Component),_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},body=document.querySelector("body"),ApplicationMenu=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"application-menu"},React.createElement(ApplicationMenuCloseBtn,null))}}],[{key:"show",value:function(){body.setAttribute("class","show-application-menu")}},{key:"hide",value:function(){body.removeAttribute("class","show-application-menu")}}]),t}(React.Component),ApplicationMenuCloseBtn=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{onClick:ApplicationMenu.hide},"Close")}}]),t}(React.Component);React.render(React.createElement(ApplicationMenu,null),document.getElementById("applicationMenu"));var _classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},skillsSamples={all:470,kick:778,hat:331,snare:468},padPatterns={cols2rows2:{pattern:["all","all","kick","snare"]},cols3rows2:{pattern:["all","all","all","kick","hat","snare"]},cols4rows2:{pattern:["all","all","all","all","kick","hat","snare","all"]},cols2rows3:{pattern:["all","all","kick","snare","hat","all"]},cols2rows4:{pattern:["all","all","all","all","kick","snare","hat","all"]},cols3rows3:{pattern:["all","all","all","kick","snare","hat","all","all","all"]},cols3rows4:{pattern:["all","all","all","all","all","all","kick","snare","hat","all","all","all"]},cols4rows3:{pattern:["all","all","all","all","kick","snare","hat","all","all","all","all","all"]},cols4rows4:{pattern:["all","all","all","all","all","all","all","all","kick","snare","hat","all","all","all","all","all"]}},Skills=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"device device-skills"},React.createElement(SkillsHeader,null),React.createElement(SkillsPads,{cols:"3",rows:"4"}),React.createElement(DeviceMenu,null))}}]),t}(React.Component),SkillsHeader=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("section",{className:"skills-header"},React.createElement("div",{className:"container"},React.createElement("div",{className:"rows"},React.createElement("div",{className:"col-4 text-left"},React.createElement("div",{className:"icon skills-menu",onClick:DeviceMenu.show})),React.createElement("div",{className:"col-4 text-center"},React.createElement("div",{className:"icon random-all"})),React.createElement("div",{className:"col-4 text-right"},React.createElement("div",{className:"icon random-one"})))))}}]),t}(React.Component),SkillsPads=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props.cols,t=this.props.rows,n=padPatterns["cols"+e+"rows"+t].pattern;return React.createElement("div",{className:"skills-pads"},n.map(function(n){return React.createElement(SkillsPad,{cols:e,rows:t,kind:n})}))}}]),t}(React.Component),SkillsPad=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"setAudioFile",value:function(e){var t=skillsSamples[e],n=Helpers.getRandom(1,t);return"Skills/"+e+"/"+n+".mp3"}},{key:"play",value:function(e){Audio.play($(event.target).index(),!1)}},{key:"render",value:function(){var e=this.props.cols,t=this.props.rows,n=this.props.kind;return React.createElement("div",{className:"pad audio col-"+e+" pad-row-"+t,"data-audio-file":this.setAudioFile(n),"data-audio-length":"long","data-audio-hit":"oneshot",onClick:this.play},React.createElement("p",{className:"show"},this.kind),React.createElement("img",{src:"/svg/skills/random-one.svg",className:"refresh"}))}}]),t}(React.Component),_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},Device=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"device"},React.createElement(Skills,null),React.createElement(DeviceMenu,null))}}]),t}(React.Component),DeviceMenu=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("section",{"class":"device-menu"},React.createElement("button",null,"Close"),React.createElement("button",{"class":"js-delete-device"},"delete device"))}}]),t}(React.Component),_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},Device=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"workspace"},React.createElement("div",{className:"wrap"},React.createElement(Skills,null)))}}]),t}(React.Component),DeviceMenu=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"hide",value:function(e){var t=$(e.target).closest(".device-menu");t.removeClass("show")}},{key:"render",value:function(){return React.createElement("div",{className:"device-menu"},React.createElement("p",{onClick:this.hide},"Close"))}}],[{key:"show",value:function(e){var t=$(e.target).closest(".device"),n=t.find(".device-menu");n.addClass("show")}}]),t}(React.Component);React.render(React.createElement(Device,null),document.getElementById("workspace"));var _classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},Dock=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"dock container"},React.createElement("div",{className:"row"},React.createElement(DockLock,null),React.createElement(DockAddDevice,null),React.createElement(DockDevicesCarousel,null),React.createElement(DockApplicationMenu,null)))}}]),t}(React.Component),DockLock=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"dock-icon dock-lock col-2"})}}]),t}(React.Component),DockAddDevice=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"dock-icon dock-add-device col-2"})}}]),t}(React.Component),DockDevicesCarousel=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("section",{className:"js-device-carousel"}),React.createElement("div",null,React.createElement(DockDeviceIcon,{device:"skills",active:"true"}),React.createElement(DockDeviceIcon,{device:"swayer",active:"false"}))}}]),t}(React.Component),DockDeviceIcon=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"selectDevice",value:function(e){console.log(e.target),console.log(event.target.dataset.device),console.log(event.target.index)}},{key:"render",value:function(){var e=this.props.device,t="dock-icon dock-device dock-device-"+e+" col-2";return React.createElement("div",{className:t,onClick:this.selectDevice,"data-device":this.props.device},"true"===this.props.active?React.createElement(DockIconIndicate,null):null)}}]),t}(React.Component),DockIconIndicate=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"dock-icon-active-dot"})}}]),t}(React.Component),DockApplicationMenu=function(e){function t(){_classCallCheck(this,t),null!=e&&e.apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"dock-icon dock-menu js-toggle-menu col-2",onClick:ApplicationMenu.show})}}]),t}(React.Component);React.render(React.createElement(Dock,null),document.getElementById("dock"));var Audio={sources:[],contexts:[],buffers:{},createContext:function(e){this.contexts.push(new webkitAudioContext)},setFile:function(e,t){var n=[];n[e]=new XMLHttpRequest,n[e].soundName=e,n[e].open("GET","samples/"+t,!0),n[e].responseType="arraybuffer",n[e].addEventListener("load",function(t){Audio.setBuffer(t,e)},!1),n[e].send()},setBuffer:function(e,t){var n=e.target;this.buffers[n.soundName]=this.contexts[t].createBuffer(n.response,!1)},setOptions:function(e){var t=this.contexts[e].createGainNode();this.sources[e]=this.contexts[e].createBufferSource(),this.sources[e].buffer=this.buffers[e],this.sources[e].connect(t),t.connect(this.contexts[e].destination)},play:function(e,t){this.setOptions(e),this.sources[e].loop=t,this.sources[e].noteOn(0)},stop:function(e){this.sources[e].noteOff(0)},refresh:function(){Audio.contexts.length=0,$(".audio").each(function(e){var t=$(this).attr("data-audio-file");Audio.createContext(e),Audio.setFile(e,t)}),Audio.bind()},bind:function(){var e,t,n;$(".js-pad").on("touchstart click",function(){console.log("asd"),t=$(".js-pad").index($(event.target)),e="loop"===$(event.target).attr("data-audio-hit")?!0:!1,Audio.play(t,e)}).on("touchend mouseup",function(){n=$(event.target).attr("data-audio-length"),t=$(".js-pad").index($(event.target)),"short"===n&&Audio.stop(t)})},init:function(){var e=this;$(window).load(function(){e.refresh()})}};Audio.init();