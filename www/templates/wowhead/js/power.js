if(typeof $WH=="undefined"){$WH={wowheadRemote:true}}if(typeof $WowheadPower=="undefined"){var $WowheadPower=new function(){var X=$WH.wowheadRemote;var z={applyto:3},r=document.getElementsByTagName("head")[0],I=false,g,Q,U,L,u,ac,O,M,i=0,ah=false,P={},h={},B={},J={},W={},aj={},e={},t,y,ag,A,Z,ab=1,D=1,T=0,R=1,j=2,v=3,S=4,x=1,l=2,F=3,K=5,w=6,o=10,k=100,q=15,H=15,E={loading:"Loading...",noresponse:"No response from server :(",achievementcomplete:"Achievement earned by $1 on $2/$3/$4"},s={1:[P,"npc","NPC"],2:[h,"object","Object"],3:[B,"item","Item"],5:[J,"quest","Quest"],6:[W,"spell","Spell"],10:[aj,"achievement","Achievement"],100:[e,"profile","Profile"]},d={0:"enus",2:"frfr",3:"dede",6:"eses",7:"ruru"},b={wotlk:"www"};if(X){var V={id:0,name:"enus"}}if(I){d[25]="ptr"}else{b.ptr="www"}function ad(){if(X){var ak=document.createElement("script");ak.src="http://static.wowhead.com/js/basic.js?5";r.appendChild(ak)}else{Y()}}function Y(){if(ah){return}ah=true;$WH.aE(document,"mouseover",C)}this.init=function(){if(X){$WH.ae(r,$WH.ce("link",{type:"text/css",href:"http://static.wowhead.com/css/basic.css?5",rel:"stylesheet"}));if($WH.Browser.ie67){$WH.ae(r,$WH.ce("link",{type:"text/css",href:"http://static.wowhead.com/css/basic_ie67.css?5",rel:"stylesheet"}));if($WH.Browser.ie6){$WH.ae(r,$WH.ce("link",{type:"text/css",href:"http://static.wowhead.com/css/basic_ie6.css?5",rel:"stylesheet"}))}}}Y()};function p(ak){var al=$WH.g_getCursorPos(ak);O=al.x;M=al.y}function af(ax,at){if(ax.nodeName!="A"&&ax.nodeName!="AREA"){return -2323}if(!ax.href.length){return}if(ax.rel&&ax.rel.indexOf("np")!=-1){return}var ap,ao,am,al,aq={},aowow="";u=aq;var ak=function(ay,aA,az){if(aA=="buff"||aA=="sock"){aq[aA]=true}else{if(aA=="rand"||aA=="ench"||aA=="lvl"||aA=="c"){aq[aA]=parseInt(az)}else{if(aA=="gems"||aA=="pcs"){aq[aA]=az.split(":")}else{if(aA=="who"||aA=="domain"){aq[aA]=az}else{if(aA=="when"){aq[aA]=new Date(parseInt(az))}}}}}};if(z.applyto&1){ao=2;am=3;if(ax.href.indexOf("http://")==0){ap=1;al=ax.href.match(/^(http:\/\/.+?)?\?(item|quest|spell|achievement|npc|object)=([0-9]+)/);if(al==null){al=ax.href.match(/^(http:\/\/.+?)?\?(profile)=([^&#]+)/)}if(al)aowow=al[1];D=0}else{al=ax.href.match(/()\?(item|quest|spell|achievement|npc|object)=([0-9]+)/);if(al==null){al=ax.href.match(/()\?(profile)=([^&#]+)/)}D=1}}if(al==null&&ax.rel&&(z.applyto&2)){ap=0;ao=1;am=2;al=ax.rel.match(/(item|quest|spell|achievement|npc|object).?([0-9]+)/);if(al==null){al=ax.rel.match(/(profile).?([^&#]+)/)}D=1}ax.href.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g,ak);if(ax.rel){ax.rel.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g,ak)}if(aq.gems&&aq.gems.length>0){var ar;for(ar=Math.min(3,aq.gems.length-1);ar>=0;--ar){if(parseInt(aq.gems[ar])){break}}++ar;if(ar==0){delete aq.gems}else{if(ar<aq.gems.length){aq.gems=aq.gems.slice(0,ar)}}}if(al){var aw,an="www";ac=ax;if(aq.domain){an=aq.domain}else{if(ap&&al[ap]){an=al[ap]}}if(b[an]){an=b[an]}aw=$WH.g_getLocaleFromDomain(an);L=an;if(ax.href.indexOf("#")!=-1&&document.location.href.indexOf(al[ao]+"="+al[am])!=-1){return}i=((ax.parentNode.className.indexOf("icon")==0&&ax.parentNode.nodeName=="DIV")?1:0);if(!ax.onmouseout){if(i==0){ax.onmousemove=a}ax.onmouseout=ae}p(at);var av=$WH.g_getIdFromTypeName(al[ao]),au=al[am];if(av==k&&(typeof g_dev=="undefined"||!g_dev)){aw=0}G(av,au,aw,aq,aowow)}}function C(am){am=$WH.$E(am);var al=am._target;var ak=0;while(al!=null&&ak<5&&af(al,am)==-2323){al=al.parentNode;++ak}}function a(ak){ak=$WH.$E(ak);p(ak);$WH.Tooltip.move(O,M,0,0,q,H)}function ae(){g=null;ac=null;$WH.Tooltip.hide()}function aa(ak){return(u&&u.buff?"buff_":"tooltip_")+d[ak]}function m(al,an,am){var ak=s[al][0];if(ak[an]==null){ak[an]={}}if(ak[an].status==null){ak[an].status={}}if(ak[an].status[am]==null){ak[an].status[am]=T}}function G(al,ap,an,ao,aowow){if(!ao){ao={}}var am=f(ap,ao);g=al;Q=am;U=an;u=ao;m(al,am,an);var ak=s[al][0];if(ak[am].status[an]==S||ak[am].status[an]==v){ai(ak[am][aa(an)],ak[am].icon)}else{if(ak[am].status[an]==R){ai(E.loading)}else{c(al,ap,an,null,ao,aowow)}}}function c(au,ao,av,am,ap,aowow){var ak=f(ao,ap);var ar=s[au][0];if(ar[ak].status[av]!=T&&ar[ak].status[av]!=j){return}ar[ak].status[av]=R;if(!am){ar[ak].timer=setTimeout(function(){n.apply(this,[au,ak,av])},333)}var an="";for(var aq in ap){if(aq!="rand"&&aq!="ench"&&aq!="gems"&&aq!="sock"){continue}if(typeof ap[aq]=="object"){an+="&"+aq+"="+ap[aq].join(":")}else{if(aq=="sock"){an+="&sock"}else{an+="&"+aq+"="+ap[aq]}}}var al="";if(typeof g_dev=="undefined"||!g_dev){al+=aowow}else{if(document.domain.indexOf("dev.wowhead.com")!=-1){var at=$WH.g_getDomainFromLocale(av);if(at!="www"&&document.domain.indexOf(at)!=0){al+="http://"+$WH.g_getDomainFromLocale(av)+"."+document.domain}}}al+="ajax.php?"+s[au][1]+"="+ao+"&power"+an;$WH.g_ajaxIshRequest(al)}function ai(an,ao){if(ac&&ac._fixTooltip){an=ac._fixTooltip(an,g,Q,ac)}var ap=false;if(!an){an=s[g][2]+" not found :(";ao="inv_misc_questionmark";ap=true}else{if(u!=null){if(u.pcs&&u.pcs.length){var aq=Q.match(/^(\d+)/);aq=aq[1];var ar=0;for(var am=0,al=u.pcs.length;am<al;++am){var ak;if(ak=an.match(new RegExp("<span><!--si([0-9]+:)*"+u.pcs[am]+'(:[0-9]+)*--><a href="/\\?item=(\\d+)">(.+?)</a></span>'))){if($WH.isset("g_items")&&g_items[u.pcs[am]]){an=an.replace(ak[0],'<span class="q8"><!--si'+u.pcs[am]+'--><a href="/?item='+u.pcs[am]+'">'+g_items[u.pcs[am]]["name_"+d[U]]+"</a></span>");++ar}else{if(aq==u.pcs[am]){an=an.replace(ak[0],'<span class="q8"><!--si'+u.pcs[am]+'--><a href="/?item='+u.pcs[am]+'">'+ak[4]+"</a></span>");++ar}}}else{if(ak=an.match(new RegExp("<span><!--si([0-9]+:)*"+u.pcs[am]+"(:[0-9]+)*-->"))){an=an.replace(ak[0],'<span class="q8"><!--si'+u.pcs[am]+"-->");++ar}}}if(ar>0){an=an.replace("(0/","("+ar+"/");an=an.replace(new RegExp("<span>\\(([0-"+ar+"])\\)","g"),'<span class="q2">($1)')}}if(u.lvl){an=$WH.g_setTooltipItemLevel(an,u.lvl)}if(u.who&&u.when){an=an.replace("<table><tr><td><br />",'<table><tr><td><br /><span class="q2">'+$WH.sprintf(E.achievementcomplete,u.who,u.when.getMonth()+1,u.when.getDate(),u.when.getFullYear())+"</span><br /><br />");an=an.replace(/class="q0"/g,'class="r3"')}}}if(i==1){$WH.Tooltip.setIcon(null);$WH.Tooltip.show(ac,an)}else{$WH.Tooltip.setIcon(ao);$WH.Tooltip.showAtXY(an,O,M,q,H)}if(X&&$WH.Tooltip.logo){$WH.Tooltip.logo.style.display=(D?"block":"none")}}function n(al,an,am){if(g==al&&Q==an&&U==am){ai(E.loading);var ak=s[al][0];ak[an].timer=setTimeout(function(){N.apply(this,[al,an,am])},3850)}}function N(al,an,am){var ak=s[al][0];ak[an].status[am]=j;if(g==al&&Q==an&&U==am){ai(E.noresponse)}}function f(al,ak){return al+(ak.rand?"r"+ak.rand:"")+(ak.ench?"e"+ak.ench:"")+(ak.gems?"g"+ak.gems.join(","):"")+(ak.sock?"s":"")}this.register=function(am,ao,an,al){var ak=s[am][0];m(am,ao,an);if(ak[ao].timer){clearTimeout(ak[ao].timer);ak[ao].timer=null}$WH.cO(ak[ao],al);if(ak[ao].status[an]==R){if(ak[ao][aa(an)]){ak[ao].status[an]=S}else{ak[ao].status[an]=v}}if(g==am&&ao==Q&&U==an){ai(ak[ao][aa(an)],ak[ao].icon)}};this.registerNpc=function(am,al,ak){this.register(x,am,al,ak)};this.registerObject=function(am,al,ak){this.register(l,am,al,ak)};this.registerItem=function(am,al,ak){this.register(F,am,al,ak)};this.registerQuest=function(am,al,ak){this.register(K,am,al,ak)};this.registerSpell=function(am,al,ak){this.register(w,am,al,ak)};this.registerAchievement=function(am,al,ak){this.register(o,am,al,ak)};this.registerProfile=function(am,al,ak){this.register(k,am,al,ak)};this.request=function(ak,ao,am,an){if(!an){an={}}var al=f(ao,an);m(ak,al,am);c(ak,ao,am,1,an,"/")};this.requestItem=function(al,ak){this.request(F,al,V.id,ak)};this.requestSpell=function(ak){this.request(w,ak,V.id)};this.getStatus=function(al,an,am){var ak=s[al][0];if(ak[an]!=null){return ak[an].status[am]}else{return T}};this.getItemStatus=function(al,ak){this.getStatus(F,al,ak)};this.getSpellStatus=function(al,ak){this.getStatus(w,al,ak)};if(X){this.set=function(ak){$WH.cO(z,ak)};this.showTooltip=function(am,ak,al){p(am);ai(ak,al)};this.hideTooltip=function(){$WH.Tooltip.hide()};this.moveTooltip=function(ak){a(ak)}}ad()}};