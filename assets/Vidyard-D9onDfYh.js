import{r as x,a as C,b as N,g as q}from"./index-CXq51k7c.js";function T(l,a){for(var p=0;p<a.length;p++){const s=a[p];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in l)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(l,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var P,O;function k(){if(O)return P;O=1;var l=Object.create,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,j=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},v=(t,e,r,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of s(e))!u.call(t,i)&&i!==r&&a(t,i,{get:()=>e[i],enumerable:!(d=p(e,i))||d.enumerable});return t},w=(t,e,r)=>(r=t!=null?l(o(t)):{},v(!t||!t.__esModule?a(r,"default",{value:t,enumerable:!0}):r,t)),S=t=>v(a({},"__esModule",{value:!0}),t),n=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),g={};j(g,{default:()=>y}),P=S(g);var c=w(x()),m=C(),b=N();const M="https://play.vidyard.com/embed/v4.js",R="VidyardV4",A="onVidyardAPI";class y extends c.Component{constructor(){super(...arguments),n(this,"callPlayer",m.callPlayer),n(this,"mute",()=>{this.setVolume(0)}),n(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),n(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:r,config:d,onError:i,onDuration:E}=this.props,h=e&&e.match(b.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,m.getSDK)(M,R,A).then(_=>{this.container&&(_.api.addReadyListener((f,L)=>{this.player||(this.player=L,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},h),_.api.renderPlayer({uuid:h,container:this.container,autoplay:r?1:0,...d.options}),_.api.getPlayerMetadata(h).then(f=>{this.duration=f.length_in_seconds,E(f.length_in_seconds)}))},i)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:r},c.default.createElement("div",{ref:this.ref}))}}return n(y,"displayName","Vidyard"),n(y,"canPlay",b.canPlay.vidyard),P}var V=k();const K=q(V),B=T({__proto__:null,default:K},[V]);export{B as V};
