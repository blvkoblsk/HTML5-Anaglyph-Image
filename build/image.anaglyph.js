/*
 *  HTML5 Anaglyph Image
 * 
 *  Copyright (C) 2012 Kevin Tong (logicmd AT gmail.com)
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 function stereoDrawImage(u,s,v,k,w,t){var p=new Image;p.src=u;document.getElementsByTagName("img");var m=p.height,n=p.width,l=document.getElementById(t);if(!l)l=document.createElement("canvas"),l.id=t,end=document.getElementById("canvasEnd"),document.body.insertBefore(l,end);var q=l.getContext("2d"),e=0,f=0;switch(s){case "Anaglyph":case "Flat":e=n;f=m;break;case "StereoLR":case "StereoRL":e=n/2;f=m;break;case "StereoWD":e=n,f=m/2}l.width=e;l.height=f;document.createElement("canvas");var j=0,c=0;
(function(){var a=document.createElement("canvas");a.width=n;a.height=m;bufctx=a.getContext("2d");bufctx.drawImage(p,0,0,n,m);switch(s){case "Anaglyph":case "Flat":c=j=bufctx.getImageData(0,0,e,f);break;case "StereoLR":j=bufctx.getImageData(0,0,e,f);c=bufctx.getImageData(e,0,e,f);break;case "StereoRL":c=bufctx.getImageData(0,0,e,f);j=bufctx.getImageData(e,0,e,f);break;case "StereoUD":j=bufctx.getImageData(0,0,e,f),c=bufctx.getImageData(0,f,e,f);case "StereoDU":c=bufctx.getImageData(0,0,e,f),j=bufctx.getImageData(0,
f,e,f)}})(e,f,j,c);imageData=q.createImageData(e,f);(function(){var a=0,o=e*f;switch(v){case "TrueAnaglyph":if("RedCyan"==k)var d=j,h=c,i=c;else if("GreenMagenta"==k)d=c,i=h=j;else return;for(x=0;x++<o;)r=0.299*d.data[a+0]+0.587*d.data[a+1]+0.114*d.data[a+2],"GreenMagenta"==k?(g=0.299*h.data[a+0]+0.587*h.data[a+1]+0.114*h.data[a+2],b=0):(g=0,b=0.299*i.data[a+0]+0.587*i.data[a+1]+0.114*i.data[a+2]),r=Math.min(Math.max(r,0),255),b=Math.min(Math.max(b,0),255),imageData.data[a++]=r,imageData.data[a++]=
g,imageData.data[a++]=b,imageData.data[a++]=255;break;case "GrayAnaglyph":if("RedCyan"==k)d=j,i=h=c;else if("GreenMagenta"==k)d=c,h=j,i=c;else return;for(x=0;x++<o;)r=0.299*d.data[a+0]+0.587*d.data[a+1]+0.114*d.data[a+2],g=0.299*h.data[a+0]+0.587*h.data[a+1]+0.114*h.data[a+2],b=0.299*i.data[a+0]+0.587*i.data[a+1]+0.114*i.data[a+2],r=Math.min(Math.max(r,0),255),g=Math.min(Math.max(g,0),255),b=Math.min(Math.max(b,0),255),imageData.data[a++]=r,imageData.data[a++]=g,imageData.data[a++]=b,imageData.data[a++]=
255;break;case "ColorAnaglyph":if("RedCyan"==k)d=j,i=h=c;else if("GreenMagenta"==k)d=c,h=j,i=c;else return;for(x=0;x++<o;)imageData.data[a]=d.data[a++],imageData.data[a]=h.data[a++],imageData.data[a]=i.data[a++],imageData.data[a]=255,a++;break;case "OptimizedAnaglyph":if("RedCyan"==k)d=j,i=h=c;else if("GreenMagenta"==k)d=c,h=j,i=c;else return;for(x=0;x++<o;)r=0.7*d.data[a+1]+0.3*d.data[a+2],g=h.data[a+1],b=i.data[a+2],r=Math.min(Math.max(r,0),255),imageData.data[a++]=r,imageData.data[a++]=g,imageData.data[a++]=
b,imageData.data[a++]=255;break;case "Optimized+Anaglyph":if("RedCyan"==k)d=j,i=h=c;else if("GreenMagenta"==k)d=c,h=j,i=c;else return;for(x=0;x++<o;)g=d.data[a+1]+0.45*Math.max(0,d.data[a+0]-d.data[a+1]),b=d.data[a+2]+0.25*Math.max(0,d.data[a+0]-d.data[a+2]),r=0.749*g+0.251*b,g=h.data[a+1]+0.45*Math.max(0,h.data[a+0]-h.data[a+1]),b=i.data[a+2]+0.25*Math.max(0,i.data[a+0]-i.data[a+2]),r=Math.min(Math.max(r,0),255),g=Math.min(Math.max(g,0),255),b=Math.min(Math.max(b,0),255),imageData.data[a++]=r,imageData.data[a++]=
g,imageData.data[a++]=b,imageData.data[a++]=255}q.putImageData(imageData,0,0)})(e,f,j,c);(function(a){var c=document.createElement("canvas");c.width=e;c.height=f;c.getContext("2d").putImageData(imageData,0,0);l.width=e*a;l.height=f*a;q.scale(a,a);q.drawImage(c,0,0)})(w)};
