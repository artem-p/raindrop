(this.webpackJsonpraindrop=this.webpackJsonpraindrop||[]).push([[0],{109:function(e,n,o){},110:function(e,n,o){},217:function(e,n,o){},218:function(e,n,o){"use strict";o.r(n);var c=o(1),i=o(2),t=o.n(i),a=o(72),l=o.n(a),r=(o(83),o(13)),s=o.n(r),d=o(27),b=o(12),h=(o(85),o(86),o(7));o(87);var u,_=function(){var e=Object(i.useState)(new h.DateTime.local),n=Object(b.a)(e,2),o=n[0],t=n[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return t(h.DateTime.local())}),1e3);return function(){clearInterval(e)}}),[]),Object(c.jsx)("div",{className:"datetime-container",children:Object(c.jsxs)("div",{className:"datetime",children:[Object(c.jsx)("h1",{className:"datetime__time",children:o.toLocaleString(h.DateTime.TIME_SIMPLE)}),Object(c.jsx)("h1",{className:"datetime__date",children:o.toLocaleString(h.DateTime.DATE_MED_WITH_WEEKDAY)})]})})},j=(o(43),o(88),o(89),o(0)),m=(u={200:{label:"thunderstorm with light rain",icon:"storm-showers",icon_code:"\uf010",icon_night:"night-alt-storm-showers",icon_code_night:"\uf02c"},201:{label:"thunderstorm with rain",icon:"storm-showers",icon_code:"\uf010",icon_night:"",icon_code_night:""},202:{label:"thunderstorm with heavy rain",icon:"storm-showers",icon_code:"\uf010",icon_night:"",icon_code_night:""},210:{label:"light thunderstorm",icon:"storm-showers",icon_code:"\uf016",icon_night:"",icon_code_night:""},211:{label:"thunderstorm",icon:"thunderstorm",icon_code:"\uf016",icon_night:"",icon_code_night:""},212:{label:"heavy thunderstorm",icon:"thunderstorm",icon_code:"\uf016",icon_night:"",icon_code_night:""},221:{label:"ragged thunderstorm",icon:"thunderstorm",icon_code:"\uf016",icon_night:"",icon_code_night:""},230:{label:"thunderstorm with light drizzle",icon:"storm-showers",icon_code:"\uf01e",icon_night:"",icon_code_night:""},231:{label:"thunderstorm with drizzle",icon:"storm-showers",icon_code:"\uf01e"},232:{label:"thunderstorm with heavy drizzle",icon:"storm-showers",icon_code:"\uf01e"},300:{label:"light intensity drizzle",icon:"sprinkle",icon_code:"\uf01c"},301:{label:"drizzle",icon:"sprinkle",icon_code:"\uf01c"},302:{label:"heavy intensity drizzle",icon:"sprinkle",icon_code:"\uf019"},310:{label:"light intensity drizzle rain",icon:"sprinkle",icon_code:"\uf017"},311:{label:"drizzle rain",icon:"sprinkle",icon_code:"\uf019"},312:{label:"heavy intensity drizzle rain",icon:"sprinkle",icon_code:"\uf019"},313:{label:"shower rain and drizzle",icon:"sprinkle",icon_code:"\uf01a"},314:{label:"heavy shower rain and drizzle",icon:"sprinkle",icon_code:"\uf019"},321:{label:"shower drizzle",icon:"sprinkle",icon_code:"\uf01c"}},Object(j.a)(u,"321",{label:"shower drizzle",icon:"sprinkle",icon_code:"\uf01c"}),Object(j.a)(u,"500",{label:"light rain",icon:"rain",icon_code:"\uf019"}),Object(j.a)(u,"501",{label:"moderate rain",icon:"rain",icon_code:"\uf01a"}),Object(j.a)(u,"502",{label:"heavy intensity rain",icon:"rain",icon_code:"\uf01a"}),Object(j.a)(u,"503",{label:"very heavy rain",icon:"rain",icon_code:"\uf01a"}),Object(j.a)(u,"504",{label:"extreme rain",icon:"rain",icon_code:"\uf01a"}),Object(j.a)(u,"511",{label:"freezing rain",icon:"rain-mix",icon_code:"\uf017"}),Object(j.a)(u,"520",{label:"light intensity shower rain",icon:"showers",icon_code:"\uf01a"}),Object(j.a)(u,"521",{label:"shower rain",icon:"showers",icon_code:"\uf01a"}),Object(j.a)(u,"522",{label:"heavy intensity shower rain",icon:"showers",icon_code:"\uf01a"}),Object(j.a)(u,"531",{label:"ragged shower rain",icon:"showers",icon_code:"\uf01d"}),Object(j.a)(u,"600",{label:"light snow",icon:"snow",icon_code:"\uf01b"}),Object(j.a)(u,"601",{label:"snow",icon:"snow",icon_code:"\uf01b"}),Object(j.a)(u,"602",{label:"heavy snow",icon:"snow",icon_code:"\uf0b5"}),Object(j.a)(u,"611",{label:"sleet",icon:"sleet",icon_code:"\uf017"}),Object(j.a)(u,"612",{label:"shower sleet",icon:"sleet",icon_code:"\uf017"}),Object(j.a)(u,"615",{label:"light rain and snow",icon:"rain-mix",icon_code:"\uf017"}),Object(j.a)(u,"616",{label:"rain and snow",icon:"rain-mix",icon_code:"\uf017"}),Object(j.a)(u,"620",{label:"light shower snow",icon:"rain-mix",icon_code:"\uf017"}),Object(j.a)(u,"621",{label:"shower snow",icon:"rain-mix",icon_code:"\uf01b"}),Object(j.a)(u,"622",{label:"heavy shower snow",icon:"rain-mix",icon_code:"\uf01b"}),Object(j.a)(u,"701",{label:"mist",icon:"sprinkle",icon_code:"\uf014"}),Object(j.a)(u,"711",{label:"smoke",icon:"smoke",icon_code:"\uf062"}),Object(j.a)(u,"721",{label:"haze",icon:"day-haze",icon_code:"\uf0b6"}),Object(j.a)(u,"731",{label:"sand, dust whirls",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"741",{label:"fog",icon:"fog",icon_code:"\uf014"}),Object(j.a)(u,"751",{label:"sand",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"761",{label:"dust",icon:"dust",icon_code:"\uf063"}),Object(j.a)(u,"762",{label:"volcanic ash",icon:"smog",icon_code:"\uf063"}),Object(j.a)(u,"771",{label:"squalls",icon:"day-windy",icon_code:"\uf011"}),Object(j.a)(u,"781",{label:"tornado",icon:"tornado",icon_code:"\uf056"}),Object(j.a)(u,"800",{label:"clear sky",icon:"day-sunny",icon_night:"night-clear",icon_code:"\uf00d",icon_code_night:"\uf02e"}),Object(j.a)(u,"801",{label:"few clouds",icon:"day-cloudy",icon_code:"\uf002",icon_night:"night-alt-cloudy",icon_code_night:"\uf086"}),Object(j.a)(u,"802",{label:"scattered clouds",icon:"cloudy",icon_code:"\uf002",icon_night:"night-alt-cloudy",icon_code_night:"\uf086"}),Object(j.a)(u,"803",{label:"broken clouds",icon:"cloudy",icon_code:"\uf013"}),Object(j.a)(u,"804",{label:"overcast clouds",icon:"cloudy",icon_code:"\uf013"}),Object(j.a)(u,"900",{label:"tornado",icon:"tornado",icon_code:"\uf056"}),Object(j.a)(u,"901",{label:"tropical storm",icon:"hurricane",icon_code:"\uf01d"}),Object(j.a)(u,"902",{label:"hurricane",icon:"hurricane",icon_code:"\uf073"}),Object(j.a)(u,"903",{label:"cold",icon:"snowflake-cold",icon_code:"\uf076"}),Object(j.a)(u,"904",{label:"hot",icon:"hot",icon_code:"\uf072"}),Object(j.a)(u,"905",{label:"windy",icon:"windy",icon_code:"\uf021"}),Object(j.a)(u,"906",{label:"hail",icon:"hail",icon_code:"\uf015"}),Object(j.a)(u,"951",{label:"calm",icon:"sunny",icon_code:"\uf00d"}),Object(j.a)(u,"952",{label:"light breeze",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"953",{label:"gentle breeze",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"954",{label:"moderate breeze",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"955",{label:"fresh breeze",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"956",{label:"strong breeze",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"957",{label:"high wind, near gale",icon:"cloudy-gusts",icon_code:"\uf050"}),Object(j.a)(u,"958",{label:"gale",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"959",{label:"severe gale",icon:"cloudy-gusts",icon_code:"\uf063"}),Object(j.a)(u,"960",{label:"storm",icon:"thunderstorm",icon_code:"\uf016"}),Object(j.a)(u,"961",{label:"violent storm",icon:"thunderstorm",icon_code:"\uf016"}),Object(j.a)(u,"962",{label:"hurricane",icon:"cloudy-gusts",icon_code:"\uf063"}),u),v=m;var w=function(e){var n=e.weatherCode,o=e.isDay,i="";n&&(i=v[n].icon,[800,801,802].includes(n)&&(o||(i=v[n].icon_night)));var t="wi wi-"+i;return Object(c.jsx)("div",{className:"WeatherIcon",children:Object(c.jsx)("i",{className:t})})};var O=function(e){var n=e.weatherCode,o=e.weatherText,i=e.temp,t=e.feelsLike,a=e.isDay;return Object(c.jsxs)("div",{className:"weather",children:[Object(c.jsx)("div",{className:"weather__icon",children:Object(c.jsx)(w,{className:"weather__icon",weatherCode:n,isDay:a})}),Object(c.jsxs)("div",{className:"temperature__measured",children:[i?(i-273.15).toFixed(0):""," "," "," \xb0\u0421"]}),Object(c.jsx)("div",{className:"weather__text",children:o}),Object(c.jsxs)("div",{className:"temperature__feelslike",children:["Feels like ",t?(t-273.15).toFixed(0):""," ","\xb0\u0421"]})]})};o(90),o(91);var g=function(e){var n=e.dir,o=e.speed;return Object(c.jsxs)("div",{className:"wind",children:[Object(c.jsx)("div",{className:"wind__icon",children:Object(c.jsx)("i",{className:"wi wi-wind from-".concat(n,"-deg")})}),Object(c.jsxs)("div",{className:"wind__speed",children:[null===o||void 0===o?void 0:o.toFixed(0)," \u043c/\u0441"]})]})},p=o(73),f=o.n(p).a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),y="3a7c9da63552f741f703b56817b3e594",x="Saint Petersburg, ru",z={fetchCurrentWeather:"weather?q=".concat(x,"&appid=").concat(y),fetchForecast:"forecast?q=".concat(x,"&appid=").concat(y)},k=(o(109),o(77)),N=(o(110),o(74)),I=o.p+"static/media/wi-cloud.f7ed7c0e.svg";o(15),o(216);var D=function(e){var n=e.forecast,o=[],i=[],t=[],a=[];if(new Image(64,64).src=I,n&&n.list&&n.list.length>0){var l=n.list.slice(0,9);o=l.map((function(e){return{x:new Date(1e3*e.dt),y:(e.main.temp-273.15).toFixed(1)}})),a=l.map((function(e){return(e.rain?e.rain["3h"]:0)+(e.snow?e.snow["3h"]:0)})),i=l.map((function(e){var n=(e.rain?e.rain["3h"]:0)+(e.snow?e.snow["3h"]:0);return{x:new Date(1e3*e.dt),y:n}})),t=l.map((function(e){var n,o,c=function(e,n){return n&&"n"==n&&m[e].icon_code_night?m[e].icon_code_night:m[e].icon_code}(null===(n=e.weather[0])||void 0===n?void 0:n.id,null===(o=e.sys)||void 0===o?void 0:o.pod);return{x:new Date(1e3*e.dt),y:0,owmIconCode:c}}))}var r={datasets:[{yAxisID:"weather",data:t,type:"scatter",backgroundColor:"white",pointRadius:0,datalabels:{display:!0,color:"white",font:{family:"WeatherIcons",size:30},formatter:function(e,n){return console.log(e),e.owmIconCode?e.owmIconCode:""}}},{yAxisID:"temp",data:o,borderColor:"white"},{yAxisID:"prec",data:i,type:"bar",backgroundColor:"#004e89"}]},s={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{id:"temp",gridLines:{display:!1},ticks:{fontColor:"white",stepSize:2,fontSize:16}},{id:"prec",position:"right",gridLines:{display:!1},ticks:{max:Math.max(1,Math.max.apply(Math,Object(k.a)(a))),fontColor:"white"}},{id:"weather",display:!1}],xAxes:[{type:"time",time:{unit:"hour",tooltipFormat:"lll",unitStepSize:3},gridLines:{display:!1},ticks:{fontColor:"white",fontSize:16}}]},plugins:{datalabels:{display:!1}}};return Object(c.jsx)("div",{className:"forecast-chart",children:Object(c.jsx)(N.a,{data:r,options:s})})};o(217);var C=function(){var e=Object(i.useState)({}),n=Object(b.a)(e,2),o=n[0],t=n[1];return Object(i.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(d.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(z.fetchForecast);case 2:n=e.sent,console.log(n.data),t(n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var o=setInterval(e,3e5);return function(){return clearInterval(o)}}),[]),Object(c.jsx)(D,{forecast:o})};var S=function(){var e,n,o,t,a,l,r,h,u=Object(i.useState)({}),j=Object(b.a)(u,2),m=j[0],v=j[1];return Object(i.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(d.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(z.fetchCurrentWeather);case 2:n=e.sent,v(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var o=setInterval(e,3e5);return function(){return clearInterval(o)}}),[]),console.log(m),Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"content__top",children:[Object(c.jsx)(_,{}),Object(c.jsx)("div",{className:"weather__state",children:Object(c.jsx)(O,{weatherCode:(null===m||void 0===m?void 0:m.weather)?null===m||void 0===m||null===(e=m.weather[0])||void 0===e?void 0:e.id:null,weatherText:(null===m||void 0===m?void 0:m.weather)?null===m||void 0===m||null===(n=m.weather[0])||void 0===n?void 0:n.description:"",temp:null===m||void 0===m||null===(o=m.main)||void 0===o?void 0:o.temp,feelsLike:null===m||void 0===m||null===(t=m.main)||void 0===t?void 0:t.feels_like,isDay:(null===m||void 0===m||null===(a=m.sys)||void 0===a?void 0:a.sunrise)<=(null===m||void 0===m?void 0:m.dt)&&(null===m||void 0===m?void 0:m.dt)<(null===m||void 0===m||null===(l=m.sys)||void 0===l?void 0:l.sunset)})}),Object(c.jsx)(g,{dir:null===m||void 0===m||null===(r=m.wind)||void 0===r?void 0:r.deg,speed:null===m||void 0===m||null===(h=m.wind)||void 0===h?void 0:h.speed})]}),Object(c.jsx)("div",{className:"content__bottom",children:Object(c.jsx)(C,{})})]})})};l.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root"))},43:function(e,n,o){},83:function(e,n,o){},86:function(e,n,o){},87:function(e,n,o){},88:function(e,n,o){},89:function(e,n,o){},90:function(e,n,o){},91:function(e,n,o){}},[[218,1,2]]]);
//# sourceMappingURL=main.45a98137.chunk.js.map