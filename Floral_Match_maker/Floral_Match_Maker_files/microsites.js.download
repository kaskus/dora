var s_tc_microsites=new TagContainer('microsites');

function TagContainer(n){var t=this,w=t.w=window;t.d=w.document;t._c='s_t';if(!w.s_c_il){w.s_c_il=[];w.s_c_in=0}t._il=w.s_c_il;t._in=w.s_c_in;t._il[t._in]=t;w.s_c_in++;t.tcn=t.l=0;t.stc=function(n){
var t=this,l=t.w.s_c_il,i,x;t.tcn=n;if(l)for(i=0;i<l.length;i++){x=l[i];if(x&&x._c=='s_l'&&x.tagContainerName==n)t.l=x}};t.stc(n);t.xd=function(s){var t=this,x=0;if(
t.d.implementation&&t.d.implementation.createDocument)x=(new DOMParser).parseFromString(s,'text/xml');else if(t.w.ActiveXObject){x=new ActiveXObject('Microsoft.XMLDOM');x.async='false';x.loadXML(s)}
return x};t.xe=function(x,t){var a,b=[],i,j;for(i=0;i<2;i++){if(i>0)t=t.toLowerCase();a=x.getElementsByTagName(t);if(a)for(j=0;j<a.length;j++)b[b.length]=a[j]}return b};t.xt=function(x){var t=this,b=
"",l,i;l=x.childNodes;if(l)for(i=0;i<l.length;i++)b+=t.xt(l[i]);if(x.data)b+=x.data;return b};t.cp=function(x){var t=this,tn=Math.floor((new Date).getTime()/1000),ts=x.s,te=x.e,tp=1,l=t.d.location,h=
l.hostname,hm=x.h,hp=1,p=l.pathname,pm=x.p,pp=1,q=l.search,qm=x.q,qp=1,qi,qv,c=t.d.cookie,cm=x.c,cp=1,ci,cv,i;if(ts)tp=(tn>=ts&&(!te||tn<=te));if(hm){hp=0;if(h){i=0;while(!hp&&i<hm.length){if(
h.indexOf(hm[i])>=0)hp=1;i++}}}if(pm){pp=0;if(p){i=0;while(!pp&&i<pm.length){if(p.indexOf(pm[i])>=0)pp=1;i++}}}if(qm){qp=0;if(q){if(q.substring(0,1)=='?')q=q.substring(1);q='&'+q+'&';i=0;while(
!qp&&i<qm.length){qi=q.indexOf('&'+qm[i].k+'=');if(!qm[i].v&&qi<0)qi=q.indexOf('&'+qm[i].k+'&');if(qi>=0)if(qm[i].v){qv=q.substring(qi+qm[i].k.length+2);qi=qv.indexOf('&');if(qi>=0){qv=unescape(
qv.substring(0,qi));if(qv==qm[i].v)qp=1}}else qp=1;i++}}}if(cm){cp=0;if(c){c=';'+c+';';c=c.split('; ').join(';');i=0;while(!cp&&i<cm.length){ci=c.indexOf(';'+cm[i].k+'=');if(!cm[i].v&&ci<0)ci=
c.indexOf(';'+cm[i].k+';');if(ci>=0)if(cm[i].v){cv=c.substring(ci+cm[i].k.length+2);ci=cv.indexOf(';');if(ci>=0){cv=unescape(cv.substring(0,ci));if(cv==cm[i].v)cp=1}}else cp=1;i++}}}return(
tp&&hp&&pp&&qp&&cp)};t.cl=[];t.cn=t.cpn=0;t.crt=0;t.bl=[];t.crl=function(cn,cpn){var t=this;if(cn==t.cn&&cpn==t.cpn)t.cr()};t.cr=function(){var t=this,d=t.d,b,c,p,n=1,o,u,x,y,l,i;if(t.cl.length>0){if(
!d.body){if(!t.crt)t.crt=setTimeout(function(){t.crt=0;t.cr()},13)}else{b=d.body;while(n&&t.cn<t.cl.length){c=t.cl[t.cn];if(t.cdwb){u=t.cdwb;t.cdwb=0;u='<div>'+u.replace(/&/g,'&amp;').replace(
/<img /gi,'<IMG ').replace(/<\/img>/gi,'</IMG>').replace(/<script /gi,'<SCRIPT ').replace(/<script>/gi,'<SCRIPT>').replace(/<\/script>/gi,'</SCRIPT>').replace(/<iframe /gi,'<IFRAME ').replace(
/<\/iframe>/gi,'</IFRAME>')+'</div>';x=t.xd(u);l=t.xe(x,'IMG');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'i',u:u})}l=t.xe(x,'SCRIPT');for(i=0;i<l.length;i++){u=l[i]
.getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'s',u:u});else{u=t.xt(l[i]);if(u)c.p.splice(t.cpn,0,{t:'c',c:u})}}l=t.xe(x,'IFRAME');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(
t.cpn,0,{t:'f',u:u})}}if((t.cpn>0||!c.x||t.cp(c.x))&&c.p&&t.cpn<c.p.length){p=c.p[t.cpn];if(p.t=='b'&&p.u){u=p.u;o=new Image;t.bl[t.bl.length]=o;o.onload=function(){var i;for(i=0;i<t.bl.length;i++)if(
t.bl[i]&&t.bl[i].src==u){t.bl.splice(i,1);return}};o.src=u}if((p.t=='s'&&p.u)||(p.t=='c'&&p.c)){n=0;t.cpn++;u=p.u;o=d.createElement('script');o.type='text/javascript';o.setAttribute('async','async')
x='s_c_il['+t._in+']';y=x+'.crl('+t.cn+','+t.cpn+')';if(p.t=='s'){o.n=new Function(y);o.t=0;o.i=setInterval(function(){if(o.readyState=='loaded')o.t++;if(o.readyState=='complete'||o.t>2){o.c();o.n()}}
,50);o.c=function(){if(o.i){clearInterval(o.i);o.i=0}};o.onreadystatechange=function(){if(o.readyState=='complete'){o.c();o.n()}};o.onload=function(){o.c();o.n()};o.src=u}else o.text=x+'.cdw='+x+
'.d.write;'+x+'.cdwb="";'+x+'.d.write=function(m){'+x+'.cdwb+=m};'+"\n"+p.c+"\n"+x+'.d.write='+x+'.cdw;'+y;x=b;l=d.getElementsByTagName('HEAD');if(l&&l[0])x=l[0];if(x.firstChild)x.insertBefore(o,
x.firstChild);else x.appendChild(o)}if(p.t=='f'&&p.u){u=p.u;o=d.createElement('IFRAME');o.setAttribute('style','display:none');o.setAttribute('width','0');o.setAttribute('height','0');o.setAttribute(
'src',u);b.appendChild(o)}if(n)t.cpn++}else{t.cn++;t.cpn=0}}if(n&&t.l){for(x in t.l.wl)if(!Object.prototype[x]){u=t.w[x];x=t.l.wl[x];if(u&&x)for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!=
'function'||(''+x[i]).indexOf('s_c_il')<0)u[i]=x[i]}}for(i=0;i<t.l.wq.length;i++){c=t.l.wq[i];u=c.f;if(u)if(c.o)x=t.w[c.o];else x=t.w;if(x[u]&&typeof(x[u])=='function'&&(''+x[u]).indexOf('s_c_il')<0){
if(c.a)x[u].apply(x,c.a);else x[u].apply(x)}}}}}};}

var s_Host=window.location.hostname.toLowerCase();
var s_URL=location.hostname+((location.pathname.charAt(0)=='/')?location.pathname:'/'+location.pathname);
var s_URL=s_URL.toLowerCase();
if (s_URL.indexOf("?")!=-1) s_URL=s_URL.replace(/\?(.*)/,""); // strip query string

var s_JsHost = (("https:" == document.location.protocol) ? "https://www.adobe.com" : "http://wwwimages.adobe.com");	

/** Define rsid and create s object**/
if (s_Host.indexOf("tv.adobe")!=-1) {
  if (s_Host.indexOf("dev.")!=-1 || s_Host.indexOf("stage.")!=-1 || s_Host.indexOf("cms.")!=-1 || s_Host.indexOf("office.")!=-1 || s_Host.indexOf("stage2.")!=-1)
    var s_adobe_account=(document.URL.indexOf("sc=hello")!=-1)?"adbhellodev":"adbadobenonacdcqa";
  else 
    var s_adobe_account=(document.URL.indexOf("sc=hello")!=-1)?"adbhelloproduction":"adbadobenonacdcprod";
} 
else if (s_Host.indexOf("adobe.com")!=-1) {
  if (s_Host.indexOf(".dev.adobe.") != -1 ||  s_Host.indexOf(".corp.adobe") != -1 || s_Host.indexOf(".dev0")!=-1 || s_Host.indexOf(".qa0")!=-1 || s_Host.indexOf(".pr0") != -1 || s_Host.indexOf("day.adobe.com")!=-1 || s_Host.indexOf("stage.")!=-1 || s_Host.indexOf("stage2.") != -1 || s_Host.indexOf("staging.") != -1 || s_Host.indexOf("forums7.adobe.com") != -1) 
      var s_adobe_account="adbadobenonacdcqa";
  else if (s_Host.indexOf("forums.adobe.com")!=-1)
  {
	  var s_adobe_account="adbadobenonacdcprod,adbadobeforumsprod";
  }

  else if (s_Host.indexOf("shop.adobe")!=-1) {
      var s_adobe_account="adbadobenonacdcprod,adbadobedigitalriverprod";
  }
  else var s_adobe_account="adbadobenonacdcprod";
}
else if (s_Host.indexOf("gc.digitalriver.com")!=-1)
      var s_adobe_account="adbadobenonacdcqa";
else if (s_Host.indexOf("echosign.com")!=-1) {
  if (s_Host.indexOf(".local.")!=-1  || s_Host.indexOf(".preview.")!=-1  || s_Host.indexOf(".demo.")!=-1)
	var s_adobe_account="adbadobenonacdcqa";
  else var s_adobe_account="adbadobenonacdcprod";
}
else var s_adobe_account="adbadobenonacdcprod";
if (s_Host.indexOf("forums.stage.adobe.com")!= -1)  {
	  var s_adobe_account="adbadobenonacdcqa,adbadobeforumsqa";
  }
var s_adobe=s_gi(s_adobe_account)
s_adobe.debugTracking=false
s_adobe.charSet = "UTF-8"

/* Link and ClickMap tracking */
s_adobe.trackDownloadLinks=true
s_adobe.trackExternalLinks=true
s_adobe.trackInlineStats=true
s_adobe.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls,hqx,dmg,mxp,bin,jar,adpp,air,msi,zxp,flv,xml,cptx,swc,tbz2,apk"
s_adobe.linkInternalFilters="javascript:,adobe.,adobesystems.,macromedia.,acrobat.com,www.adobecreativesuite.it,www.adobe-digital-marketing.com,www.hellodigitals.it,www.adobepartnernews.com,www.adobecoopmdf.com,www.channelconduit.com,www.gocreate.pro,Www.loveacrobat.co.za,www.adobetraining.pro,www.jaknapdf.cz,www.adobe-newsroom.de,www.adobe-solutions.de,adobe-digital-marketing.com,www.hellodigitals.it,adobedigitalmarketing.co.uk,adobecreate.co.uk,adobegeneration.co.uk,portal.adobecreate.co.uk,dpssummit.com,www.adobegeneration.com,adobegunlugu.com,acrobatclub.com,www.adobedigitalmarketing.co.uk,www.adobemarketing.co.uk,www.mediacenter-adobe.com,www.canaladobe.com,adobe-edu.ru,www.jaknapdf.cz,www.adobestudentlicensing.de,www.adobestudentlicensing.at,www.adobestudentlicensing.ch,www.adobedms.pl,www.adobedigitalmarketing.co.uk,www.adobemarketing.co.uk,www.mediacenter-adobe.com,adobegeneration.anz.com,adobegov.com,rhapsodyconcept.com.sg,adobeku.com,adobe-mobile.co.uk,adobe-mobile.de,adobe-mobile.fr,adobe-creativity.com,appspot.com,adoberatingreviews.webqamapps.com,adobe-onlineservices.com,adobe-target.com,lightroomcomp.jp,adobe-pepe.jp,adobeeventsonline.com,cmoconnect.com,echosign.com,../"
s_adobe.linkLeaveQueryString=false
s_adobe.linkTrackVars="None"
s_adobe.linkTrackEvents="None"

//Setup Clickmap
function s_adobe_getObjectID(o) 
{
	var ID=o.href;
	return ID;
}
s_adobe.getObjectID=s_adobe_getObjectID;

s_adobe.usePlugins=true
function s_adobe_doPlugins(s_adobe) {
    if ("file:" == document.location.protocol) s_adobe.abort=true;
    if(s_adobe.getQueryParam("nosc")) s_adobe.abort=true;
    s_adobe.server=s_adobe.prop3=window.location.hostname.toLowerCase();
    if (s_adobe.pageName) {
	      s_adobe.pageName=s_adobe.pageName.replace(/#rpctoken=(.*)/,"");
		s_adobe.pageName=s_adobe.pageName.replace(":index.html","");
		s_adobe.pageName=s_adobe.pageName.replace("www.adobe.","adobe.");
		s_adobe.pageName=s_adobe.pageName.replace(/\.edu$|\.html$|\:$/,"");
    }

   if (s_adobe.prop4)
        s_adobe.prop5=s_adobe.prop4+":"+s_adobe.pageName;
   else s_adobe.prop5=s_adobe.pageName;
    s_adobe.eVar28=s_URL;
      s_adobe.eVar36=s_adobe.getQueryParam('pid');  //Affiliate Tracking
	s_adobe.visitstart=s_adobe.getVisitStart('s_vs');
	if(s_adobe.visitstart&&s_adobe.visitstart==1)
		s_adobe.firstPage='firstpage';
	s_adobe.clickPast(s_adobe.firstPage,'event19','event20');
	
/*******************CAMPAIGN TRACKING DIGITAL MARKETING - MEDIA BEGIN*****************/  
if(!s_adobe.campaign){
  	s_adobe.campaign=s_adobe.getQueryParam('sdid');
  	if(!s_adobe.campaign) s_adobe.campaign=s_adobe.getQueryParam('trackingid');
  	if(!s_adobe.campaign) s_adobe.campaign=s_adobe.getQueryParam('s_cid');
  	if(!s_adobe.campaign) s_adobe.campaign=s_adobe.getQueryParam('s_rtid');
	if(s_adobe.campaign)
 		s_adobe.eVar6=s_adobe.campaign=s_adobe.getValOnce(s_adobe.campaign,'s_a_campaign',0); 
}
 
if(!s_adobe.eVar4){
                s_adobe.eVar4=s_adobe.getQueryParam('s_osc');
}
 
if(!s_adobe.eVar5){
                s_adobe.eVar5=s_adobe.getQueryParam('promoid');
}
 
if(!s_adobe.eVar7){
                s_adobe.eVar7=s_adobe.getQueryParam('s_iid');
}

if(!s_adobe.eVar17){
                s_adobe.eVar17=s_adobe.getQueryParam('chid');
}
/**********CAMPAIGN TRACKING DIGITAL MARKETING - MEIDA END********************/

	/* Determine Search Location, Add-to-Cart Location and Percentage of Page Viewed via previous page name*/
	s_adobe.prop12=s_adobe.eVar16=s_adobe.getPreviousValue(s_adobe.pageName,'gpv','');
	if(s_adobe.events&&s_adobe.events.indexOf('scAdd')>-1)
	{
		s_adobe.linkTrackVars=s_adobe.apl(s_adobe.linkTrackVars,'eVar23',',',2);
		if(s_adobe.prop12)
			s_adobe.eVar23=s_adobe.prop12;
	}
	
	if (s_adobe.prop12)
		s_adobe.prop13=s_adobe.getPercentPageViewed();
		
	/* Determine whether visitor is New or a Repeat visitor within the last 365 days */
	s_adobe.eVar18=s_adobe.getNewRepeat(365);
	

	/* Context Data to remove forums.adobe.com from the pageNames in the Forums Sites */
    if(s_adobe.pageName && (s_Host.indexOf("forums.adobe.com")!=-1 || s_Host.indexOf("forums.stage.adobe.com")!= -1)){
    	s_adobe.contextData["forums.PN"] = s_adobe.pageName.replace(/( \| forums.adobe.com|forums.adobe.com \: )/gi,"");
    	s_adobe.contextData["forums.PPN"] = s_adobe.prop12.replace(/( \| forums.adobe.com|forums.adobe.com \: )/gi,"");

    }
	/* Automate Finding Method eVar 
	var internalFlag = false;
	if(document.referrer)
	{
		var filters = s_adobe.split(s_adobe.linkInternalFilters,',');
		var docRef = s_adobe.split(document.referrer,'/');
		docRef = docRef[2];
		for(var f in filters)
		{
			if(docRef.indexOf(filters[f])>-1)
				internalFlag = true;
		}
	}	
	if(s_adobe.campaign)
	{	
		s_adobe.eVar1=s_adobe.eVar6=s_adobe.eVar7='external campaign referral';
		s_adobe.eVar2='non-browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar14='non-cross sell';		
		s_adobe.eVar15='D=v14';
	}
	else if(document.referrer&&!internalFlag)
	{	
		s_adobe.eVar1=s_adobe.eVar6=s_adobe.eVar7='external natural referral';
		s_adobe.eVar2='non-browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar14='non-cross sell';		
		s_adobe.eVar15='D=v14';
	}	
	else if(s_adobe.eVar3&&s_adobe.eVar3!='non-search')
	{
		s_adobe.eVar1='internal keyword search';
		s_adobe.eVar2='non-browse';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar6=s_adobe.eVar7='non external natural referral';
		s_adobe.eVar14='non-cross sell';		
		s_adobe.eVar15='D=v14';
	}
	else if(s_adobe.eVar4&&s_adobe.eVar4!='non-internal campaign')
	{
		s_adobe.eVar1='internal campaign';
		s_adobe.eVar2='non-browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar6=s_adobe.eVar7='non external natural referral';
		s_adobe.eVar14='non-cross sell';		
		s_adobe.eVar15='D=v14';
	}	
	else if(s_adobe.eVar2&&s_adobe.eVar2!='non-browse')
	{
		s_adobe.eVar1='browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar6=s_adobe.eVar7='non external natural referral';
		s_adobe.eVar14='non-cross sell';		
		s_adobe.eVar15='D=v14';
	}
	else if(s_adobe.eVar14&&s_adobe.eVar14!='non-cross sell')
	{
		if(s_adobe.products)
			s_adobe.newProduct='true';
		s_adobe.linkTrackVars=s_adobe.apl(s_adobe.linkTrackVars,'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar7',',',2);
		s_adobe.eVar1='cross-sell';
		s_adobe.eVar2='non-browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar6=s_adobe.eVar7='non external natural referral';
		if(!s_adobe.eVar15)
			s_adobe.eVar15='non-product cross-sell click';
	}
	else if(s_adobe.events&&s_adobe.events.indexOf('purchase')>-1)
	{	
		s_adobe.eVar1='unknown at time of purchase';
		s_adobe.eVar2=s_adobe.eVar3=s_adobe.eVar4=s_adobe.eVar5=s_adobe.eVar6=s_adobe.eVar7=s_adobe.eVar14=s_adobe.eVar15='D=v1';
	}
	else if(s_adobe.eVar1)
	{
		s_adobe.eVar2='non-browse';
		s_adobe.eVar3='non-search';
		s_adobe.eVar4=s_adobe.eVar5='non-internal campaign';
		s_adobe.eVar6=s_adobe.eVar7='non external natural referral';
		s_adobe.eVar14='non-cross sell';
		s_adobe.eVar15='D=v14';
	}
**/

	//time parting (pacific time zone)
	s_adobe.eVar22=s_adobe.getTimeParting('d','-8') + ' - ' + s_adobe.getTimeParting('h','-8');
	
	//Blank out products if events isn't set so that we don't inflate prodViews
	if(s_adobe.products&&!s_adobe.events)
		s_adobe.products='';
	
	//Setup Clickmap Object IDs
	s_adobe.setupDynamicObjectIDs();

  	//T&T Integration
  	if (s_adobe.c_r("omniture_optout")!=1 && s_URL.indexOf("/misc/optout")==-1) {
	  if(typeof(window['mboxVersion']) != "undefined") {
	    mboxLoadSCPlugin(s_adobe);
	    s_adobe.tnt=s_adobe.trackTNT();
	  }
      }
	
	// Cross-Channel Targeting Integration
	if(!s_adobe.eVar43) s_adobe.eVar43=s_adobe.getQueryParam('ttsrccat'); 

	//Get rid of browser plugins_adobe.  Not used in SC15/not needed
	s_adobe.plugins='';
}
s_adobe.doPlugins=s_adobe_doPlugins

/************************** PLUGINS SECTION *************************/
/* s_crossSell: Record the referring product and cross-sell location when a recommended item is clicked */
function s_crossSell()
{ 
	s_adobe.linkTrackVars='eVar14,eVar15,events,products';
	s_adobe.eVar14=s_adobe.pageName;
	s_adobe.eVar15=s_adobe.products?s_adobe.products.substring(1):'non-product cross-sell click';
	s_adobe.tl(this,'o','cross-sell');
}

/* Utility manageVars v1.4 - clear variable values (requires split 1.5) */
s_adobe.manageVars=new Function("c","l","f",""
+"var s_adobe=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s_adobe[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s_adobe.spl"
+"it(l,',');vla=s_adobe.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s_adobe.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s_adobe.pt(vl,',',c,0"
+");return true;}else{return false;}");
s_adobe.clearVars=new Function("t","var s_adobe=this;s_adobe[t]='';");
s_adobe.lowercaseVars=new Function("t",""
+"var s_adobe=this;if(s_adobe[t]&&t!='events'){s_adobe[t]=s_adobe[t].toString();if(s_adobe[t].index"
+"Of('D=')!=0){s_adobe[t]=s_adobe[t].toLowerCase();}}");

/* Plugin: getQueryParam 2.4 */
s_adobe.getQueryParam=new Function("p","d","u","h",""
+"var s_adobe=this,v='',i,j,t;d=d?d:'';u=u?u:(s_adobe.pageURL?s_adobe.pageURL:s_adobe.wd.loca"
+"tion);if(u=='f')u=s_adobe.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s_adobe.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s_adobe.p_gpv=new Function("k","u","h",""
+"var s_adobe=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s_adobe.pt(q,'&','p_gvf',k)}return v");
s_adobe.p_gvf=new Function("t","k",""
+"if(t){var s_adobe=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s_adobe."
+"epa(v)}return''");

/* Plugin: getValOnce v1.1 */
s_adobe.getValOnce=new Function("v","c","e","t",""
+"var s_adobe=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s_adobe.c_r(c);if(v){a.setTime(a.getTime()+e*i);s_adobe.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/* TNT Integration Plugin v1.0 */
s_adobe.trackTNT =new Function("v","p","b",""
+"var s_adobe=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s_adobe."
+"getQueryParam){pm=s_adobe.getQueryParam(p);}if(pm){r+=(pm+',');}if(s_adobe.wd[v"
+"]!=undefined){r+=s_adobe.wd[v];}if(b){s_adobe.wd[v]='';}return r;");

/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s_adobe.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Plugin Utility: apl v1.1 */
s_adobe.apl=new Function("l","v","d","u",""
+"var s_adobe=this,m=0;if(!l)l='';if(u){var i,n,a=s_adobe.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/* Function - read combined cookies v 0.35 */
if(!s_adobe.__ccucr)
{
	s_adobe.c_rr=s_adobe.c_r;
	s_adobe.__ccucr = true;
	function c_r(k)
	{
		var s_adobe=this,d=new Date,v=s_adobe.c_rr(k),c=s_adobe.c_rr('s_pers'),i,m,e;
		if(v)return v;k=s_adobe.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s_adobe.c_rr('s_sess'):c;
		i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';',i);
		m=m>0?m:e;v=i<0?'':s_adobe.epa(c.substring(i+2+k.length,m<0?c.length:m));
		if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.getTime())
		{d.setTime(d.getTime()-60000);s_adobe.c_w(s_adobe.epa(k),'',d);v='';}return v;
	}
	s_adobe.c_r=c_r;
}

/* Function - write combined cookies v 0.36 */
if(!s_adobe.__ccucw)
{
	s_adobe.c_wr=s_adobe.c_w;
	s_adobe.__ccucw = true;
	function c_w(k,v,e)
	{
		var s_adobe=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,c,i,t;
		d.setTime(d.getTime()-60000);if(s_adobe.c_rr(k)) s_adobe.c_wr(k,'',d);k=s_adobe.ape(k);
		pv=s_adobe.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1)
		{pv=pv.substring(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s_adobe.c_rr(sn);
		i=sv.indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(';',i)+1);
		sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime()){pv+=' '+k+'='+s_adobe.ape(v)+'|'+e.getTime()+';';
		pc=1;}}else{sv+=' '+k+'='+s_adobe.ape(v)+';';sc=1;}sv=sv.replace(/%00/g,'');	
		pv=pv.replace(/%00/g,'');if(sc) s_adobe.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t.indexOf(';')!=-1){
		var t1=parseInt(t.substring(t.indexOf('|')+1,t.indexOf(';')));
		t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s_adobe.c_wr(pn,pv,d);}
		return v==s_adobe.c_r(s_adobe.epa(k));
	}
	s_adobe.c_w=c_w;
}

/* DynamicObjectIDs v1.5: Setup Dynamic Object IDs based on URL */
s_adobe.setupDynamicObjectIDs=new Function(""
+"var s_adobe=this;if(!s_adobe.doi){s_adobe.doi=1;if(s_adobe.apv>3&&(!s_adobe.isie||!s_adobe.ismac||s_adobe.apv"
+">=5)){if(s_adobe.wd.attachEvent)s_adobe.wd.attachEvent('onload',s_adobe.setOIDs);else"
+" if(s_adobe.wd.addEventListener)s_adobe.wd.addEventListener('load',s_adobe.setOIDs,fa"
+"lse);else{s_adobe.doiol=s_adobe.wd.onload;s_adobe.wd.onload=s_adobe.setOIDs}}s_adobe.wd.s_semapho"
+"re=1}");
s_adobe.setOIDs=new Function("e",""
+"var s_adobe=s_c_il["+s_adobe._in+"],b=s_adobe.eh(s_adobe.wd,'onload'),o='onclick',x,l,u,c,i"
+",a=new Array;if(s_adobe.doiol){if(b)s[b]=s_adobe.wd[b];s_adobe.doiol(e)}if(s_adobe.d.links)"
+"{for(i=0;i<s_adobe.d.links.length;i++){l=s_adobe.d.links[i];c=l[o]?''+l[o]:'';b"
+"=s_adobe.eh(l,o);z=l[b]?''+l[b]:'';u=s_adobe.getObjectID(l);if(u&&c.indexOf('s_"
+"objectID')<0&&z.indexOf('s_objectID')<0){u=s_adobe.repl(u,'\"','');u=s_adobe.re"
+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
+"s_oc?this.s_oc(e):true';if(s_adobe.isns&&s_adobe.apv>=5)l.setAttribute(o,x);l[o"
+"]=new Function('e',x)}}}s_adobe.wd.s_semaphore=0;return true");

/* Plugin Utility: Replace v1.0 */
s_adobe.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat */
s_adobe.getNewRepeat=new Function("d","cn",""
+"var s_adobe=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s_adobe.c_r(cn);if(cval.length="
+"=0){s_adobe.c_w(cn,ct+'-New',e);return'New';}sval=s_adobe.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s_adobe.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s_adobe.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/* Plugin: getPreviousValue_v1.0 - return previous value of designated variable (requires split utility) */
s_adobe.getPreviousValue=new Function("v","c","el",""
+"var s_adobe=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s_adobe.events){i=s_adobe.split(el,',');j=s_adobe.split(s_adobe.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s_adobe.c_r(c)) r=s_adobe.c_r(c);v?s_adobe.c_w(c,v,t)"
+":s_adobe.c_w(c,'no value',t);return r}}}}}else{if(s_adobe.c_r(c)) r=s_adobe.c_r(c);v?"
+"s_adobe.c_w(c,v,t):s_adobe.c_w(c,'no value',t);return r}");

/* Plugin Utility - first only */
s_adobe.p_fo=new Function("n",""
+"var s_adobe=this;if(!s_adobe.__fo){s_adobe.__fo=new Object;}if(!s_adobe.__fo[n]){s_adobe.__fo[n]="
+"new Object;return 1;}else {return 0;}");

/* Plugin: getTimeParting 2.1  */
s_adobe.getTimeParting=new Function("t","z","y","l","j",""
+"var s_adobe=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s_adobe.dstStart&&s_adobe.dstEnd){B=s_adobe.dstStart;C=s_adobe.dstEnd}else{;U=U"
+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+"|161306|171205|181104|191003';X=s_adobe.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(j=='1'){if(C>15){X='15'}if(C>30){X='30'}if(C"
+">45){X='45'}}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0)"
+"{A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}els"
+"e{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A"
+"}}else{return Z+', '+W}}}");

/*
* Plugin: getPercentPageViewed v1.5
*/
s_adobe.handlePPVevents=new Function("",""
+"var s_adobe=s_c_il["+s_adobe._in+"];if(!s_adobe.getPPVid)return;var dh=Math.max(Math."
+"max(s_adobe.d.body.scrollHeight,s_adobe.d.documentElement.scrollHeight),Math.ma"
+"x(s_adobe.d.body.offsetHeight,s_adobe.d.documentElement.offsetHeight),Math.max("
+"s_adobe.d.body.clientHeight,s_adobe.d.documentElement.clientHeight)),vph=s_adobe.wd.i"
+"nnerHeight||(s_adobe.d.documentElement.clientHeight||s_adobe.d.body.clientHeigh"
+"t),st=s_adobe.wd.pageYOffset||(s_adobe.wd.document.documentElement.scrollTop||s_adobe"
+".wd.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh"
+"*100),100),c=s_adobe.c_r('s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[]"
+",id=(a.length>0)?(a[0]):escape(s_adobe.getPPVid),cv=(a.length>1)?parseInt"
+"(a[1]):(0),p0=(a.length>2)?parseInt(a[2]):(pv),cy=(a.length>3)?pars"
+"eInt(a[3]):(0),cn=(pv>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy"
+")?vh:cy)):'';s_adobe.c_w('s_ppv',cn);");
s_adobe.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s_adobe=this,ist=!s_adobe.getPPVid?true:false;if(typeof(s_adobe.l"
+"inkType)!='undefined'&&s_adobe.linkType!='e')return'';var v=s_adobe.c_r('s_ppv'"
+"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+"a[0]);s_adobe.getPPVpid=pid;s_adobe.c_w('s_ppv',escape(pid));if(ist){s_adobe.getPPVid"
+"=(pid)?(pid):(s_adobe.pageName?s_adobe.pageName:document.location.href);s_adobe.c_w('"
+"s_ppv',escape(s_adobe.getPPVid));if(s_adobe.wd.addEventListener){s_adobe.wd.addEventL"
+"istener('load',s_adobe.handlePPVevents,false);s_adobe.wd.addEventListener('scro"
+"ll',s_adobe.handlePPVevents,false);s_adobe.wd.addEventListener('resize',s_adobe.handl"
+"ePPVevents,false);}else if(s_adobe.wd.attachEvent){s_adobe.wd.attachEvent('onlo"
+"ad',s_adobe.handlePPVevents);s_adobe.wd.attachEvent('onscroll',s_adobe.handlePPVevent"
+"s);s_adobe.wd.attachEvent('onresize',s_adobe.handlePPVevents);}}return(pid!='-'"
+")?(a):(a[1]);");

/* Plugin: getVisitStart v2.0 - returns 1 on first page of visit otherwise 0 */
s_adobe.getVisitStart=new Function("c",""
+"var s_adobe=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s_adobe.c_r(c"
+")){v=0}if(!s_adobe.c_w(c,1,t)){s_adobe.c_w(c,1,0)}if(!s_adobe.c_r(c)){v=0}return v;"); 

/*  Plugin: clickPast - version 1.0*/
s_adobe.clickPast=new Function("scp","ct_ev","cp_ev","cpc",""
+"var s_adobe=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s_adobe.p_fo(ct_ev)==1){if(!cpc)"
+"{cpc='s_cpc';}ev=s_adobe.events?s_adobe.events+',':'';if(scp){s_adobe.events=ev+ct_ev"
+";s_adobe.c_w(cpc,1,0);}else{if(s_adobe.c_r(cpc)>=1){s_adobe.events=ev+cp_ev;s_adobe.c_w(cpc"
+",0,0);}}}");

/* Plug-in: crossVisitParticipation v1.7 - stacks values from specified variable in cookie and returns value */
s_adobe.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s_adobe=this,ce;if(typeof(dv)==='undefined')dv=0;if(s_adobe.events&&ev){var"
+" ay=s_adobe.split(ev,',');var ea=s_adobe.split(s_adobe.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s_adobe.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s_adobe.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s_adobe.split(c,'],[');for(q=0;q<arry.length; q++){z=a"
+"rry[q];z=s_adobe.repl(z,'[','');z=s_adobe.repl(z,']','');z=s_adobe.repl(z,\"'\", '');"
+"arry[q] = s_adobe.split(z, ',');}}var e=new Date();e.setFullYear(e.getFul"
+"lYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry["
+"arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,n"
+"ew Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;va"
+"r td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.ro"
+"und((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(a"
+"rry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s_adobe.join(a,{de"
+"lim:',',front:'[',back:']',wrap:\"'\"});s_adobe.c_w(cn,data,e);var r=s_adobe.jo"
+"in(h,{delim:dl});if(ce)s_adobe.c_w(cn,'');return r;");

/* s_adobe.join: 1.0 - Joins an array into a string */
s_adobe.join = new Function("v","p",""
+"var s_adobe = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s_adobe.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* Configure Modules and Plugins */

s_adobe.enableVideoTracking=false;
if(s_adobe.getQueryParam("nosc")=="true")  
	s_adobe.enableVideoTracking=false;
else if (s_Host.indexOf("tv.adobe")!=-1 || s_Host.indexOf("createnow.adobe.")!=-1)
	s_adobe.enableVideoTracking=true;

if (s_adobe.enableVideoTracking==true) {
	s_adobe.loadModule("Media");
	s_adobe.Media.autoTrack=false;
	s_adobe.Media.trackVars="events,prop8,eVar9,eVar10,eVar11,eVar39";
	s_adobe.Media.trackEvents="event4,event5,event6,event7,event8,event9,event10";
	s_adobe.Media.trackMilestones="25,50,75";
	/*
	if (s_Host.indexOf("tv.adobe")!=-1) 
	  s_adobe.eVar39 = s_adobe.Media.playerName;
	else
	  s_adobe.eVar39 = s_adobe.Media.playerName;
	*/
	s_adobe.Media.segmentByMilestones=true;
	s_adobe.Media.trackUsingContextData=true;
	s_adobe.Media.contextDataMapping = {
		"a.media.name":"eVar9,prop8",
		"a.media.segment":"eVar10",
		"a.contentType":"eVar11",
		"a.media.timePlayed":"event4",
		"a.media.view":"event5",
		"a.media.segmentView":"event6",
		//"a.media.playerName":"eVar39",
		"a.media.complete":"event10",
		"a.media.milestones":{
		25:"event7",
		50:"event8",
		75:"event9"
		}
	};
}

/****************************** MODULES *****************************/
/* Module: Media */
s_adobe.m_Media_c="var m=s_adobe.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l"
+"om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function"
+"(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new "
+"Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o"
+"){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v"
+"o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n"
+"s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti"
+"mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'"
+"]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe="
+"pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin"
+"g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if("
+"e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x"
+"+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even"
+"ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='"
+"--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!"
+"=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr"
+"ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam"
+"e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i"
+".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi"
+"me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?"
+"'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if("
+"(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c"
+"&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w"
+".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0"
+";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+"
+"=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||("
+"x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m."
+"completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime"
+"=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new "
+"Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)"
+";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,"
+"pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){"
+"var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7"
+"='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new"
+" Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch("
+"e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p="
+"'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8"
+")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x."
+"type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p=="
+"2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime"
+"Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x"
+"!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c"
+");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL"
+"ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|"
+"|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new"
+" Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack"
+"&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s_adobe.wd.attachEvent)s_adobe.wd.attachEvent('onload',m.as);else if(s_adobe.wd."
+"addEventListener)s_adobe.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";s_adobe.m_i("Media");

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s_adobe.visitorNamespace = "adobecorp"
s_adobe.trackingServer = "stats.adobe.com"
s_adobe.trackingServerSecure = "sstats.adobe.com"


s_adobe.loadModule("Integrate")
s_adobe.Integrate.onLoad=function(s,m){
if (s_adobe.c_r("omniture_optout")!=1 && s_URL.indexOf("echosign.com")==-1) {
if("function"!=typeof DIL)DIL=function(a,b){var d=[],c,f;a!==Object(a)&&(a={});var e,h,j,o,p,s,l,t,y,B,w;e=a.partner;h=a.containerNSID;j=a.iframeAttachmentDelay;o=!!a.disableDestinationPublishingIframe;p=a.iframeAkamaiHTTPS;s=a.mappings;l=a.uuidCookie;t=!0===a.enableErrorReporting;y=a.visitorService;B=!0===a.disableScriptAttachment;w=!0===a.removeFinishedScriptsAndCallbacks;t&&DIL.errorModule.activate();(c=b)&&d.push(c+"");if(!e||"string"!=typeof e)return c="DIL partner is invalid or not specified in initConfig",
DIL.errorModule.handleError({name:"error",message:c,filename:"dil.js"}),Error(c);c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(h||"number"==typeof h)h=parseInt(h,10),!isNaN(h)&&0<=h&&(c="");c&&(h=0,d.push(c),c="");f=DIL.getDil(e,h);if(f instanceof DIL&&f.api.getPartner()==e&&f.api.getContainerNSID()==h)return f;if(this instanceof DIL)DIL.registerDil(this,e,h);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+
e+" and containerNSID = "+h);var u={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},A={stuffed:{}},i={},n={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,
num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,uuid:null,noADMS:!1,instanceType:null,releaseType:"no ADMS",admsProcessingStarted:!1,process:function(g){try{if(!this.admsProcessingStarted){var a=this,k,b,c,d;if("function"==typeof g&&"function"==typeof g.getDefault&&"function"==typeof g.getInstance&&(y===Object(y)&&(k=y.namespace)&&"string"==typeof k?(this.instanceType="namespace: "+k,b=g.getInstance(k)):(this.instanceType="default",
b=g.getDefault()),b===Object(b)&&"function"==typeof b.getVisitorID)){this.admsProcessingStarted=!0;c=function(g){if("ADMS"!=a.releaseType)a.uuid=g,a.releaseType="ADMS",a.releaseRequests()};d=b.getVisitorID(c);if(-1==d){this.releaseType="failed ADMS";this.releaseRequests();return}if("string"==typeof d&&d.length){c(d);return}setTimeout(function(){if("ADMS"!=a.releaseType)a.releaseType="timeout",a.releaseRequests()},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.noADMS=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},
releaseRequests:function(){this.calledBack=!0;n.registerRequest()}},registerRequest:function(g){var a=this.firingQueue;g===Object(g)&&a.push(g);if(!this.firing&&a.length)if(this.adms.calledBack){if(g=a.shift(),x.fireRequest(g),!this.firstRequestHasFired&&"script"==g.tag)this.firstRequestHasFired=!0}else this.processADMS()},processADMS:function(){this.adms.process(window.ADMS)},requestRemoval:function(g){if(!w)return"removeFinishedScriptsAndCallbacks is not boolean true";var a=this.toRemove,k,b;if(g===
Object(g))k=g.script,b=g.callbackName,(k===Object(k)&&"SCRIPT"==k.nodeName||"no script created"==k)&&"string"==typeof b&&b.length&&a.push(g);if(this.readyToRemove&&a.length){b=a.shift();k=b.script;b=b.callbackName;"no script created"!=k?(g=k.src,k.parentNode.removeChild(k)):g=k;window[b]=null;try{delete window[b]}catch(d){}this.removed.push({scriptSrc:g,callbackName:b});DIL.variables.scriptsRemoved.push(g);DIL.variables.callbacksRemoved.push(b);return this.requestRemoval()}return"requestRemoval() processed"}};
f=function(){var g="http://fast.";u.IS_HTTPS&&(g=!0===p?"https://fast.":"https://");return g+e+".demdex.net/dest4.html?d_nsid="+h+"#"+encodeURIComponent(document.location.href)};var v={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+e+"_"+h,url:f(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:u.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var g=this,a=document.createElement("iframe");a.id=
this.id;a.style.cssText="display: none; width: 0; height: 0;";a.src=this.url;m.addListener(a,"load",function(){g.iframeHasLoaded=!0;g.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(g){var a=this;g&&!q.isEmptyObject(g)&&this.process(g);if(this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages){if(!this.throttleTimerSet)this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=u.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START);this.sendingMessages=
!0;this.sendMessages()}},process:function(g){var a=encodeURIComponent,k,b,d,c,e;if((k=g.dests)&&k instanceof Array&&(b=k.length))for(d=0;d<b;d++)c=k[d],c=[a("dests"),a(c.id||""),a(c.y||""),a(c.c||"")],this.addMessage(c.join("|"));if((k=g.ibs)&&k instanceof Array&&(b=k.length))for(d=0;d<b;d++)c=k[d],c=[a("ibs"),a(c.id||""),a(c.tag||""),m.encodeAndBuildRequest(c.url||[],","),a(c.ttl||"")],this.addMessage(c.join("|"));if((k=g.dpcalls)&&k instanceof Array&&(b=k.length))for(d=0;d<b;d++)c=k[d],e=c.callback||
{},e=[e.obj||"",e.fn||"",e.key||"",e.tag||"",e.url||""],c=[a("dpm"),a(c.id||""),a(c.tag||""),m.encodeAndBuildRequest(c.url||[],","),a(c.ttl||""),m.encodeAndBuildRequest(e,",")],this.addMessage(c.join("|"));this.jsonProcessed.push(g)},addMessage:function(g){var a=encodeURIComponent;this.messages.push((t?a("---destpub-debug---"):a("---destpub---"))+g)},sendMessages:function(){var g=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),
setTimeout(function(){g.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},C={traits:function(g){if(q.isValidPdata(g)){if(!(i.sids instanceof Array))i.sids=[];m.extendArray(i.sids,g)}return this},pixels:function(g){if(q.isValidPdata(g)){if(!(i.pdata instanceof Array))i.pdata=[];m.extendArray(i.pdata,g)}return this},logs:function(g){if(q.isValidLogdata(g)){if(i.logdata!==Object(i.logdata))i.logdata={};m.extendObject(i.logdata,g)}return this},customQueryParams:function(g){q.isEmptyObject(g)||
m.extendObject(i,g,n.reservedKeys);return this},signals:function(g,a){var b,c=g;if(!q.isEmptyObject(c)){if(a&&"string"==typeof a)for(b in c={},g)g.hasOwnProperty(b)&&(c[a+b]=g[b]);m.extendObject(i,c,n.reservedKeys)}return this},result:function(g){if("function"==typeof g)i.callback=g;return this},afterResult:function(g){if("function"==typeof g)i.postCallbackFn=g;return this},useImageRequest:function(){i.useImageRequest=!0;return this},clearData:function(){i={};return this},submit:function(){x.submitRequest(i);
i={};return this},getPartner:function(){return e},getContainerNSID:function(){return h},getEventLog:function(){return d},getState:function(){var g={},a={};m.extendObject(g,n,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});m.extendObject(a,v,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:i,otherRequestInfo:g,destinationPublishingInfo:a}},idSync:function(g){if(g!==Object(g)||"string"!=typeof g.dpid||!g.dpid.length)return"Error: config or config.dpid is empty";
if("string"!=typeof g.url||!g.url.length)return"Error: config.url is empty";var a=g.url,b=g.minutesToLive,c=encodeURIComponent,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";g=["ibs",c(g.dpid),"img",c(a),b];v.addMessage(g.join("|"));n.firstRequestHasFired&&v.requestToProcess();return"Successfully queued"},aamIdSync:function(g){if(g!==Object(g)||"string"!=typeof g.dpuuid||
!g.dpuuid.length)return"Error: config or config.dpuuid is empty";g.url="//dpm.demdex.net/ibs:dpid="+g.dpid+"&dpuuid="+g.dpuuid;return this.idSync(g)}},x={submitRequest:function(g){n.registerRequest(x.createQueuedRequest(g));return!0},createQueuedRequest:function(g){var a=n,b,c=g.callback,d="img";if(!q.isEmptyObject(s)){var f,l,o;for(f in s)if(s.hasOwnProperty(f)&&(l=s[f],!(null==l||""===l)&&f in g&&!(l in g)&&!(l in n.reservedKeys)))o=g[f],null==o||""===o||(g[l]=o)}if(!q.isValidPdata(g.sids))g.sids=
[];if(!q.isValidPdata(g.pdata))g.pdata=[];if(!q.isValidLogdata(g.logdata))g.logdata={};g.logdataArray=m.convertObjectToKeyValuePairs(g.logdata,"=",!0);g.logdataArray.push("_ts="+(new Date).getTime());if("function"!=typeof c)c=this.defaultCallback;if(a.useJSONP=!g.useImageRequest||"boolean"!=typeof g.useImageRequest)d="script",b=a.callbackPrefix+"_"+e+"_"+h+"_"+(new Date).getTime();return{tag:d,src:x.makeRequestSrc(g,b),internalCallbackName:b,callbackFn:c,postCallbackFn:g.postCallbackFn,useImageRequest:g.useImageRequest,
requestData:g}},defaultCallback:function(g){var a,b,c,d,e,f,h,j,p;if((a=g.stuff)&&a instanceof Array&&(b=a.length))for(c=0;c<b;c++)if((d=a[c])&&d===Object(d)){e=d.cn;f=d.cv;h=d.ttl;if("undefined"==typeof h||""===h)h=Math.floor(m.getMaxCookieExpiresInMinutes()/60/24);j=d.dmn||"."+document.domain;p=d.type;if(e&&(f||"number"==typeof f))"var"!=p&&(h=parseInt(h,10))&&!isNaN(h)&&m.setCookie(e,f,1440*h,"/",j,!1),A.stuffed[e]=f}a=g.uuid;if("string"==typeof a&&a.length&&!q.isEmptyObject(l)){b=l.path;if("string"!=
typeof b||!b.length)b="/";c=parseInt(l.days,10);isNaN(c)&&(c=100);m.setCookie(l.name||"aam_did",a,1440*c,b,l.domain||"."+document.domain,!0===l.secure)}!o&&!n.abortRequests&&v.requestToProcess(g)},makeRequestSrc:function(a,b){a.sids=q.removeEmptyArrayValues(a.sids||[]);a.pdata=q.removeEmptyArrayValues(a.pdata||[]);var c=n,d=m.encodeAndBuildRequest(a.sids,","),f=m.encodeAndBuildRequest(a.pdata,","),l=(a.logdataArray||[]).join("&");delete a.logdataArray;var o=u.IS_HTTPS?"https://":"http://",j;j=[];
var p,i,s,t;for(p in a)if(!(p in c.reservedKeys)&&a.hasOwnProperty(p))if(i=a[p],p=encodeURIComponent(p),i instanceof Array)for(s=0,t=i.length;s<t;s++)j.push(p+"="+encodeURIComponent(i[s]));else j.push(p+"="+encodeURIComponent(i));j=j.length?"&"+j.join("&"):"";return o+e+".demdex.net/event?d_nsid="+h+(d.length?"&d_sid="+d:"")+(f.length?"&d_px="+f:"")+(l.length?"&d_ld="+encodeURIComponent(l):"")+j+(c.useJSONP?"&d_rtbd=json&d_jsonv="+DIL.jsonVersion+"&d_dst=1&d_cts=1&d_cb="+(b||""):"")},fireRequest:function(a){"img"==
a.tag?this.fireImage(a):"script"==a.tag&&this.fireScript(a)},fireImage:function(a){var b=n,e,f;if(!b.abortRequests)b.firing=!0,e=new Image(0,0),b.sent.push(a),e.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},f=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type;d.push(c);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},e.addEventListener?(e.addEventListener("error",f,!1),e.addEventListener("abort",
f,!1)):e.attachEvent&&(e.attachEvent("onerror",f),e.attachEvent("onabort",f)),e.src=a.src},fireScript:function(a){var b=this,f=n,h,l,j=a.src,p=a.postCallbackFn,o="function"==typeof p,i=a.internalCallbackName;if(!f.abortRequests)f.firing=!0,window[i]=function(b){try{b||(b={});var h=a.callbackFn;f.firing=!1;f.fired.push(a);f.num_of_jsonp_responses++;h(b);o&&p(b)}catch(r){r.message="DIL jsonp callback caught error with message "+r.message;c=r.message;d.push(c);r.filename=r.filename||"dil.js";r.partner=
e;DIL.errorModule.handleError(r);try{h({error:r.name+"|"+r.message}),o&&p({error:r.name+"|"+r.message})}catch(j){}}finally{f.requestRemoval({script:l,callbackName:i}),f.registerRequest()}},B?(f.firing=!1,f.requestRemoval({script:"no script created",callbackName:i})):(l=document.createElement("script"),l.addEventListener&&l.addEventListener("error",function(d){f.requestRemoval({script:l,callbackName:i});c="jsonp script tag error listener received the event of type "+d.type+" with src "+j;b.handleScriptError(c,
a)},!1),l.type="text/javascript",l.src=j,h=DIL.variables.scriptNodeList[0],h.parentNode.insertBefore(l,h)),f.sent.push(a)},handleScriptError:function(a,b){var c=n;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.num_of_jsonp_errors++;c.registerRequest()}},q={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],"undefined"!=typeof d&&null!=d&&e.push(d);return e},isPopulatedString:function(a){return"string"==typeof a&&a.length}},m={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,
b,c){var d=[],b=b||"=",e,f;for(e in a)f=a[e],"undefined"!=typeof f&&null!=f&&d.push(e+b+(c?encodeURIComponent(f):f));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),f=0;f<d;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},filter:function(a,
b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=[],e=0;e<d;e++)if(e in c){var h=c[e];b.call(b,h,e,c)&&f.push(h)}return f}return a.filter(b)},getCookie:function(a){var a=a+"=",b=document.cookie.split(";"),c,d,e;for(c=0,d=b.length;c<d;c++){for(e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,
b,c,d,e,f){var h=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)if(b.hasOwnProperty(d)&&(q.isEmptyObject(c)||!(d in c)))a[d]=b[d];return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(u.COOKIE_MAX_EXPIRATION_DATE)).getTime()-
(new Date).getTime())/1E3/60}};"error"==e&&0==h&&m.addListener(window,"load",function(){DIL.windowLoaded=!0});var z=function(){E();!o&&!n.abortRequests&&v.attachIframe();n.readyToRemove=!0;n.requestRemoval()},E=function(){o||setTimeout(function(){!n.firstRequestHasFired&&!n.adms.admsProcessingStarted&&!n.adms.calledBack&&C.submit()},DIL.constants.TIME_TO_DEFAULT_REQUEST)},D=document;"error"!=e&&(DIL.windowLoaded?z():"complete"!=D.readyState&&"loaded"!=D.readyState?m.addListener(window,"load",z):DIL.isAddedPostWindowLoadWasCalled?
m.addListener(window,"load",z):(j="number"==typeof j?parseInt(j,10):0,0>j&&(j=0),setTimeout(z,j||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));this.api=C;this.getStuffedVariable=function(a){var b=A.stuffed[a];!b&&"number"!=typeof b&&(b=m.getCookie(a),!b&&"number"!=typeof b&&(b=""));return b};this.validators=q;this.helpers=m;this.constants=u;this.log=d;if(window._dil_unit_tests)this.pendingRequest=i,this.requestController=n,this.setDestinationPublishingUrl=f,this.destinationPublishing=v,
this.requestProcs=x,this.variables=A},function(){var a=document,b;if(null==a.readyState&&a.addEventListener)a.readyState="loading",a.addEventListener("DOMContentLoaded",b=function(){a.removeEventListener("DOMContentLoaded",b,!1);a.readyState="complete"},!1)}(),DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},DIL.extendStaticPropertiesAndMethods({version:"3.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},
variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof a?!!a():"boolean"==typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(b){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,b,d){b=b+"$"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;"string"!=typeof a&&(a="");b||(b=0);d=a+"$"+b;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+b+" was not found")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):""},xd:{postMessage:function(a,b,d){var c=1;if(b)if(window.postMessage)d.postMessage(a,
b.replace(/([^:]+:\/\/[^\/]+).*/,"$1"));else if(b)d.location=b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"&"+a}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return"DIL error module has not been activated";
c!==Object(c)&&(c={});var f=c.name?(new String(c.name)).toLowerCase():"",e=[],c={name:f,filename:c.filename?c.filename+"":"",partner:c.partner?c.partner+"":"no_partner",site:c.site?c.site+"":document.location.href,message:c.message?c.message+"":""};e.push(f in b?b[f]:b.noerrortypedefined);a.api.pixels(e).logs(c).useImageRequest().submit();return"DIL error report sent"},pixelMap:b}}(),DIL.tools={},DIL.modules={};
DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil("error"),c=DIL.tools.decomposeURI(a||document.referrer),f="",e="",h={queryParam:"q"},f=d.helpers.filter([b===Object(b)?b:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!c.hostname.match(a.hostPattern))}).shift();return!f?{valid:!1,name:"",keywords:""}:{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(h,
f),e=h.queryPattern?(f=(""+c.search).match(h.queryPattern))?f[1]:"":c.uriParams[h.queryParam],decodeURIComponent(e||"").replace(/\+|%20/g," "))}};
DIL.tools.decomposeURI=function(a){var b=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){b.helpers.map(d.split("&"),function(b){b=b.split("=");a[b.shift()]=b.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},b=document.getElementsByTagName("meta"),d,c,f,e,h;for(d=0,f=arguments.length;d<f;d++)if(e=arguments[d],null!==e)for(c=0;c<b.length;c++)if(h=b[c],h.name==e){a[e]=h.content;break}return a};
DIL.modules.siteCatalyst={init:function(a,b,d){try{var c=this,f={name:"DIL Site Catalyst Module Error"},e=function(a){f.message=a;DIL.errorModule.handleError(f);return a};if(!(b instanceof DIL))return e("dilInstance is not a valid instance of DIL");f.partner=b.api.getPartner();if(a!==Object(a))return e("siteCatalystReportingSuite is not an object");if("function"!=typeof a.m_i||"function"!=typeof a.loadModule)return e("s.m_i is not a function or s.loadModule is not a function");a.m_DIL=function(a){a=
a.m_i("DIL");if(a!==Object(a))return e("m is not an object");a.trackVars=c.constructTrackVars(d);a.d=0;a._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,f,h=[];f=[];var j={},w=!1;if(d!==Object(d)||!(d.va_t instanceof Array))return e("Error in m._t function: s is not an object or s.va_t is not an array");if(this.d){if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType){a=d.linkTrackVars;if(d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]))a=
d[b].trackVars;a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",")}if(a){for(b=0,h=a.split(",");b<h.length;b++)0<=c.indexOf(","+h[b]+",")&&f.push(h[b]);f.length&&(c=","+f.join(",")+",")}for(f=0,b=d.va_t.length;f<b;f++)a=d.va_t[f],0<=c.indexOf(","+a+",")&&null!=d[a]&&""!==d[a]&&(j[a]=d[a],w=!0);w&&this.d.api.signals(j,"c_").submit()}};a.setup=function(){this.d=b}};a.loadModule("DIL");if(a.DIL!==Object(a.DIL)||"function"!=typeof a.DIL.setup)return e("s.DIL is not an object or s.DIL.setup is not a function");a.DIL.setup();
if(f.message)return f.message}catch(h){h.message="DIL Site Catalyst module caught error with message "+h.message;if(b instanceof DIL)h.partner=b.api.getPartner();DIL.errorModule.handleError(h);return h.message}},constructTrackVars:function(a){var b=[],d,c,f,e,h;if(a===Object(a)){d=a.names;if(d instanceof Array&&(f=d.length))for(c=0;c<f;c++)e=d[c],"string"==typeof e&&e.length&&b.push(e);a=a.iteratedNames;if(a instanceof Array&&(f=a.length))for(c=0;c<f;c++)if(d=a[c],d===Object(d)&&(e=d.name,h=parseInt(d.maxIndex,
10),"string"==typeof e&&e.length&&!isNaN(h)&&0<=h))for(d=0;d<=h;d++)b.push(e+d);if(b.length)return b.join(",")}return this.constructTrackVars({names:"pageName,channel,campaign,products,events,pe,pev1,pev2,pev3".split(","),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var c={name:"DIL GA Module Error"},f="";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(f="dilInstance is not a valid instance of DIL",c.message=f,DIL.errorModule.handleError(c));
!(a instanceof Array)||!a.length?(f="gaArray is not an array or is empty",c.message=f,DIL.errorModule.handleError(c)):this.arr=a;this.tv=this.constructTrackVars(d);this.errorMessage=f}catch(e){e.message="DIL GA module caught error with message "+e.message;if(b instanceof DIL)e.partner=b.api.getPartner();DIL.errorModule.handleError(e);this.errorMessage=e.message}finally{return this}},constructTrackVars:function(a){var b=[],d,c,f,e;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){f=this.defaultTrackVars;
e={};for(d=0,c=f.length;d<c;d++)e[f[d]]=!0;this.defaultTrackVarsObj=e}else e=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(c=a.length))for(d=0;d<c;d++)f=a[d],"string"==typeof f&&f.length&&f in e&&b.push(f);if(b.length)return b}return this.defaultTrackVars},constructGAObj:function(a){var b={},a=a instanceof Array?a:this.arr,d,c,f,e;for(d=0,c=a.length;d<c;d++)f=a[d],f instanceof Array&&f.length&&(e=f.shift(),"string"==typeof e&&e.length&&(b[e]instanceof Array||(b[e]=[]),
b[e].push(f)));return b},addToSignals:function(a,b){if("string"!=typeof a||""===a||null==b||""===b)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(b);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),b={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c){"string"==typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,f,e){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",
b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",f);this.addToSignals("c_itemQuantity",e)},_addTrans:function(a,b,c,d,f,e,h,j){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",f);this.addToSignals("c_transCity",e);this.addToSignals("c_transState",h);this.addToSignals("c_transCountry",j)},_trackSocial:function(a,
b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,c,f,e,h,j,o;for(c=0,f=d.length;c<f;c++)if(e=d[c],a.hasOwnProperty(e)&&b.hasOwnProperty(e)&&(o=a[e],o instanceof Array))for(h=0,j=o.length;h<j;h++)b[e].apply(this,o[h])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),
"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){a.message="DIL GA module caught error with message "+a.message;if(this.dil instanceof DIL)a.partner=this.dil.api.getPartner();DIL.errorModule.handleError(a);return this.errorMessage=a.message}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],init:function(a,b,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};var d={name:"DIL Peer39 Module Error"},c=[],f="";if(this.isSecurePageButNotEnabled(document.location.protocol))f="Module has not been enabled for a secure page",c.push(f),d.message=f,DIL.errorModule.handleError(d);b instanceof DIL?(this.dil=b,d.partner=this.dil.api.getPartner()):
(f="dilInstance is not a valid instance of DIL",c.push(f),d.message=f,DIL.errorModule.handleError(d));"string"!=typeof a||!a.length?(f="aid is not a string or is empty",c.push(f),d.message=f,DIL.errorModule.handleError(d)):this.aid=a;this.errorMessage=c.join("\n")}catch(e){e.message="DIL Peer39 module init() caught error with message "+e.message;if(b instanceof DIL)e.partner=b.api.getPartner();DIL.errorModule.handleError(e);this.errorMessage=e.message}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"==
a&&!0!==this.optionals.enableHTTPS?!0:!1},constructSignals:function(){var a=this,b=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(d){}finally{a.calledBack=!0,"function"==typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(b,d);this.scriptsSent.push(b);return"Request sent to Peer39"},processData:function(a){var b,
d,c,f,e={},h=!1;this.returnedData.push(a);if(a instanceof Array)for(b=0,d=a.length;b<d;b++)c=a[b].split("="),f=c[0],c=c[1],f&&isFinite(c)&&!isNaN(parseInt(c,10))&&(e[f]instanceof Array||(e[f]=[]),e[f].push(c),h=!0);return{hasSignals:h,signals:e}},constructScript:function(){var a=document.createElement("script"),b=this.optionals,d=b.scriptId,c=b.scriptSrc,b=b.scriptParams;a.id="string"==typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"==typeof c&&c.length?a.src=c:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof b&&b.length&&(a.src+="?"+b));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){a.message="DIL Peer39 module submit() caught error with message "+a.message;if(this.dil instanceof DIL)a.partner=this.dil.api.getPartner();DIL.errorModule.handleError(a);return this.errorMessage=a.message}}};
var _scDilObj = s_gi(s_adobe_account);
//Instantiate DIL v3.4 code
var adobeDil = DIL.create({
	partner: 'adobe',
	uuidCookie:{
     name:'aam_uuid',
     days:30
   }
});

DIL.modules.siteCatalyst.init(_scDilObj, adobeDil, {
        names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
        iteratedNames: [{
               name: 'eVar',
               maxIndex: 75
        }, {
               name: 'prop',
               maxIndex: 75
        }, {
               name: 'pev',
               maxIndex: 3
        }, {
               name: 'hier',
               maxIndex: 4
        }]
});
}

/** socialAuthors v1.5.1 */
s_adobe.socialAuthors=new Function("",""+"var s_adobe=this,g;g=s_adobe.referrer?s_adobe.referrer:document.referrer;if(g.indexOf"+"('http://t.co/')===0||g.indexOf('https://t.co/')===0||g.indexOf('pi"+"nterest.com/pin')!==-1||g.indexOf('tumblr.com')!==-1||g.indexOf('yo"+"utube.com')!==-1){s_adobe.Integrate.add('SocialAuthor');s_adobe.Integrate.Socia"+"lAuthor.get('http://sa-services.social.omniture.com/author/name?var"+"=[VAR]&callback=s_adobe.socialAuthorSearch&rs='+encodeURIComponent(s_adobe_acco"+"unt)+'&q='+encodeURIComponent(g));s_adobe.Integrate.SocialAuthor.delay();"+"s_adobe.Integrate.SocialAuthor.setVars=function(s_adobe,p){s_adobe.contextData['a.soc"+"ialauthor']=s_adobe.user;}}");s_adobe.socialAuthorSearch=new Function("obj",""+"var s=this;if(typeof obj==='undefined'||typeof obj.author==='undefi"+"ned'){s_adobe.user='Not Found';}else{s_adobe.user=obj.author;}s_adobe.Integrate.Socia"+"lAuthor.ready();");

s_adobe.maxDelay='1000';  //max time to wait for 3rd party api response in milliseconds

s_adobe.socialAuthors();

(function () {

  "use strict";

  function getCookie(name) {
    var dc = document.cookie,
        prefix = name + "=",
        begin = dc.indexOf("; " + prefix),
        end;
    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) { return null; }
    } else { begin += 2; }
    end = document.cookie.indexOf(";", begin);
    if (end === -1) { end = dc.length; }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  function setCookie(name, value, days) {
    var domain = "adobe.com",
        path = "/",
        domain_string = "; domain=" + domain,
        path_string = "; path=" + path,
        date,
        expires_string;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires_string = "; expires=" + date.toGMTString();
    } else { expires_string = ""; }
    document.cookie = name + "=" + value + expires_string + domain_string + path_string;
  }

  function getKeys(obj) {
    var keys = [],
        key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  function regexEscape(s) {
    return s.replace(/[\-\/\[\]\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  if (getCookie("sfdc_session") === null) {

    setCookie("sfdc_session", "-");

    var has_referrer = !!document.referrer,
        cid_mappings,
        seo_url_patterns,
        referrer_host,
        i,
        host_pattern,
        cid;

    if (has_referrer && !/[?&]skwcid=/.test(location.href)) {
      cid_mappings = {
        '.google.'         : '70130000000kXAt',
        '.search-results.' : '701a0000000mrYs',
        '.nifty.'          : '701a0000000mrZH',
        '.biglobe.'        : '701a0000000mrZ7',
        '.soso.'           : '701a0000000mrZ2',
        '.goo.'            : '701a0000000mrYx',
        '.seznam.'         : '701a0000000mrYn',
        '.mywebsearch.'    : '701a0000000mrYY',
        'mail.ru'          : '701a0000000mrYJ',
        '.sogou.'          : '701a0000000mrTt',
        '.daum.'           : '701a0000000mrTo',
        '.askjeeves.'      : '70130000000kvNi',
        '.aol.'            : '70130000000kvNd',
        '.excite.'         : '70130000000kvNY',
        '.baidu.'          : '70130000000kvNT',
        '.naver.'          : '70130000000kvNO',
        '.yandex.'         : '70130000000kvNE',
        '.yahoo.'          : '70130000000kvN9',
        '.bing.'           : '70130000000kvN4'
      };

      seo_url_patterns = getKeys(cid_mappings);
      referrer_host = document.referrer.split('/')[2];

      for (i = 0; i < seo_url_patterns.length; i += 1) {
        host_pattern = regexEscape(seo_url_patterns[i]);

        if ((new RegExp(host_pattern)).test(referrer_host)) {
          cid = cid_mappings[seo_url_patterns[i]];
          setCookie('s_cid',cid,30);
          break;
        }
      }
    }
  }

})();









}

s_adobe.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disab"
+"le=0;p.get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){"
+"p=m[m.l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._f"
+"u=function(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()"
+"*10000000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2"
+")=='s.'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {"
+"x=y}}}}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m"
+".delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.di"
+"sable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p="
+"this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)"
+"}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s_adobe.m_i("Integrate");


s_adobe.setTagContainer("microsites")
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.26.1';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLow"
+"erCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.vers"
+"ion+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if"
+"(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]"
+"=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd["
+"imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');"
+"if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['"
+"+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<"
+"500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a"
+"){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if("
+"x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexO"
+"f(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.s"
+"p(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.l"
+"ength-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(s"
+"k in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn"
+"++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);n"
+"f=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.c"
+"ontextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;els"
+"e if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){va"
+"r s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s"
+".pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if ("
+"s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>"
+"=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.subs"
+"tring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationSer"
+"ver'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase"
+"()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProv"
+"ider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='"
+"c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionTyp"
+"e')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k]"
+",fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='"
+"retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop'"
+")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h"
+"){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+"
+"1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef"
+"=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.inde"
+"xOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_"
+"il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf"
+")=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s."
+"d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEvent"
+"Listener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!="
+"\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&("
+"!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf("
+"s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.m"
+"etaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.tar"
+"get;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.p"
+"rotocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':''"
+")+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'|"
+"|t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if("
+"o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'"
+"||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oi"
+"d};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u="
+"'+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function("
+"t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=functio"
+"n(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.pro"
+"totype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return"
+" s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\""
+"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s"
+".b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.M"
+"ouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.vi"
+"sitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>"
+"v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i"
+"+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m="
+"s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=t"
+"his;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;i"
+"f(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n="
+"n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;f"
+"or(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\""
+"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m"
+"._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,"
+"f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}"
+"}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;i"
+"f(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i"
+">=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s"
+":'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}"
+"';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.cre"
+"ateElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':"
+"'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i"
+"(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s["
+"k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Dat"
+"e,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli"
+")s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.ma"
+"xDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floo"
+"r(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s."
+"applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['"
+"+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorI"
+"D']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000)"
+":tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+"
+"tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',"
+"c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>"
+"=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if"
+"(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled"
+"()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d"
+".documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\""
+"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<"
+"s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHe"
+"ight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.a"
+"bort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.l"
+"nk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t"
+"=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQuery"
+"String||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;i"
+"f(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-"
+"id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb"
+">=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)=="
+"ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;"
+"try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oi"
+"dt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if"
+"(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd."
+"s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.li"
+"nkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=th"
+"is,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c"
+"']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_i"
+"l')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq."
+"length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagN"
+"ame('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Oper"
+"a')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));els"
+"e if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;el"
+"se if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fi"
+"d,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,ligh"
+"tProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomain"
+"Periods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,"
+"events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.s"
+"p(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl"
+"_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicA"
+"ccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,link"
+"TrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){"
+"s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


s_tc_microsites.cl=[{x:{h:["adobe.com"]},
p:[{t:'c',c:'var TIDNum=Number(new Date);\nvar TIDflag=0;\nvar outgoingSAMCAPcode;\nvar TIDquerysub="";\nif (s_adobe.getQueryParam(\'sdid\')) {\n  outgoingSAMCAPcode=s_adobe.getQueryParam(\'sdid\');\n   if (outgoingSAMCAPcode.match(/^[a-zA-Z0-9_]*$/)) {\n      TIDquerysub="sdid="+outgoingSAMCAPcode+"&";\n      TIDflag=1;\n   }\n}\nif(s_adobe.getQueryParam(\'trackingid\')) {\n  outgoingSAMCAPcode=s_adobe.getQueryParam(\'trackingid\');\n   if (outgoingSAMCAPcode.match(/^[a-zA-Z0-9_]*$/)) {\n      TIDquerysub=TIDquerysub+"trackingid="+outgoingSAMCAPcode+"&";\n      TIDflag=1;\n   }  \n}\nif(s_adobe.getQueryParam(\'promoid\')) {\n  outgoingSAMCAPcode=s_adobe.getQueryParam(\'promoid\');\n   if (outgoingSAMCAPcode.match(/^[a-zA-Z0-9_]*$/)) {\n      TIDquerysub=TIDquerysub+"promoid="+outgoingSAMCAPcode+"&";\n      TIDflag=1;\n   }  \n}\nif(TIDflag > 0) {\n  TIDquerysub=TIDquerysub.replace(/\\&$/,"");\n  scTIDImg=document.createElement(\'img\');\n  scTIDImg.src=document.location.protocol + \'//www.adobe.com/images/pixel.gif?\'+TIDNum+"&"+TIDquerysub;\n  scTIDImg.style.display="none";\n  document.body.appendChild(scTIDImg);\n}'}]},
{p:[{t:'c',c:'var s_adbdtmstats; // set this globally\n\nfunction trackAnalytics() {\n  \'use strict\';\n\n  /*\n   ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============\n\n  AppMeasurement for JavaScript version: 1.4.3\n  Copyright 1996-2013 Adobe, Inc. All Rights Reserved\n  More info available at http://www.omniture.com\n  */\n  function AppMeasurement(){var a=this;a.version="1.4.3";var n=window;n.s_c_in||(n.s_c_il=[],n.s_c_in=0);a._il=n.s_c_il;a._in=n.s_c_in;a._il[a._in]=a;n.s_c_in++;a._c="s_c";var q=n.Bb;q||(q=null);var r=n,p,u;try{for(p=r.parent,u=r.location;p&&p.location&&u&&""+p.location!=""+u&&r.location&&""+p.location!=""+r.location&&p.location.host==u.host;)r=p,p=r.parent}catch(x){}a.qb=function(a){try{console.log(a)}catch(b){}};a.Fa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||0>a.indexOf(b)?\n  a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()\'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.hb=function(){var c=n.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&!/^[0-9.]+$/.test(c)&&\n  (b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.hb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=\n  b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.H=[];a.da=function(c,b,d){if(a.ya)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);\n  if(g&&"prerender"==g){if(!a.ea)for(a.ea=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ea=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.H.push({m:c,a:b,t:e}),a.ea||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.qa();0<a.H.length;){d=a.H.shift();if(b&&!d.t&&d.t>c){a.H.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));\n  break}a.ya=1;a[d.m].apply(a,d.a);a.ya=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.da("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.L,(k=a.lightTrackVars)&&(k=","+k+","+a.ja.join(",")+",");else{d=a.c;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,\n  a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].Ab,f=a[e].zb));k&&(k=","+k+","+a.C.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.N=function(c,b,d,f,e){var g="",k,m,n,y,p=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){n=!1;if(p)for(m=0;m<p.length;m++)k.substring(0,\n  p[m].length)==p[m]&&(n=!0);if(!n&&(""==g&&(g+="&"+c+"."),m=b[k],e&&(k=k.substring(e.length)),0<k.length))if(n=k.indexOf("."),0<n)m=k.substring(0,n),n=(e?e:"")+m+".",p||(p=[]),p.push(n),g+=a.N(m,b,d,f,n);else if("boolean"==typeof m&&(m=m?"true":"false"),m){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(n=k.substring(0,4),y=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Fa(y)&&("prop"==n?k="c"+y:"eVar"==n?k="v"+\n  y:"list"==n?k="l"+y:"hier"==n&&(k="h"+y,m=m.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(m)}}""!=g&&(g+="&."+c)}return g};a.jb=function(){var c="",b,d,f,e,g,k,m,n,p="",t="",q=d="";if(a.lightProfileID)b=a.L,(p=a.lightTrackVars)&&(p=","+p+","+a.ja.join(",")+",");else{b=a.c;if(a.pe||a.linkType)p=a.linkTrackVars,t=a.linkTrackEvents,a.pe&&(d=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[d]&&(p=a[d].Ab,t=a[d].zb));p&&(p=","+p+","+a.C.join(",")+",");t&&(t=","+t+",",p&&(p+=",events,"));a.events2&&\n  (q+=(""!=q?",":"")+a.events2)}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.N("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);!g&&"events"==e&&q&&(g=q,q="");if(g&&(!p||0<=p.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e=\n  "aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&\n  (g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";\n  break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":q&&(g+=(""!=g?",":"")+q);if(t)for(k=g.split(","),g="",f=0;f<k.length;f++)m=k[f],n=m.indexOf("="),0<=n&&(m=m.substring(0,n)),n=m.indexOf(":"),0<=n&&(m=m.substring(0,n)),0<=t.indexOf(","+m+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.N("c",a[e],p,e);g="";break;case "lightProfileID":e=\n  "mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.N("mts",a[e],p,e));g="";break;default:a.Fa(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&\n  (c+=a.e)}return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.Eb||"undefined"!=""+a.ub&&"HTML"!=(""+a.ub).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Aa=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:\n  "",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.I=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\\r",""),"\\n",""),"\\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),\n  g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.Aa(c),e)?{id:e.substring(0,100),type:g}:0};a.Cb=function(c){for(var b=a.B(c),d=a.I(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.I(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.tb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.ka=1;d||(a.ka=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.I(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:\n  d.parentNode)c=a.B(d),b=a.I(d);b&&"BODY"!=c||(d=0);if(d){var m=d.onclick?""+d.onclick:"";if(0<=m.indexOf(".tl(")||0<=m.indexOf(".trackLink("))d=0}}else a.ka=1;!e&&d&&(e=a.Aa(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var p=0,q=0,t;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(m=e.toLowerCase(),g=m.indexOf("?"),k=m.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(m=m.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(t=\n  g[k])&&m.substring(m.length-(t.length+1))=="."+t&&(f="d");if(a.trackExternalLinks&&!f&&(m=e.toLowerCase(),a.Ea(m)&&(a.linkInternalFilters||(a.linkInternalFilters=n.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),p=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)t=g[k],0<=m.indexOf(t)&&(q=1);q?p&&(f="e"):p||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e=\n  "",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),n.s_objectID&&(b.id=n.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.kb=function(){var c=a.ka,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats){var b=\n  {},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,m,n,e=0;if(g)for(k=0;k<g.length;k++)m=g[k].split("="),f=a.unescape(m[0]).split(","),m=a.unescape(m[1]),b[m]=f;f=a.account.split(",");if(c||a.e){c&&!a.e&&(e=1);for(m in b)if(!Object.prototype[m])for(k=0;k<f.length;k++)for(e&&(n=b[m].join(","),n==a.account&&(a.e+=("&"!=m.charAt(0)?"&":"")+m,b[m]=[],d=1)),g=0;g<b[m].length;g++)n=b[m][g],n==f[k]&&(e&&(a.e+="&u="+a.escape(n)+("&"!=m.charAt(0)?"&":"")+m+"&u=0"),b[m].splice(g,1),d=1);c||(d=1);if(d){e="";\n  k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(m in b)!Object.prototype[m]&&0<k&&0<b[m].length&&(e+=(e?"&":"")+a.escape(b[m].join(","))+"="+a.escape(m),k--);a.cookieWrite("s_sq",e)}}}return c};a.lb=function(){if(!a.yb){var c=new Date,b=r.location,d,f,e=f=d="",g="",k="",m="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",p="",q="";if(c.setUTCDate&&(m="1.3",(0).toPrecision&&(m="1.5",c=[],c.forEach))){m="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(m="1.7",c.reduce&&(m="1.8",m.trim&&(m=\n  "1.8.1",Date.parse&&(m="1.8.2",Object.create&&(m="1.8.5")))))}catch(s){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),p=a.b.Db(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(w){}a.resolution=d;a.colorDepth=f;\n  a.javascriptVersion=m;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=p;a.yb=1}};a.M={};a.loadModule=function(c,b){var d=a.M[c];if(!d){d=n["AppMeasurement_Module_"+c]?new n["AppMeasurement_Module_"+c](a):{};a.M[c]=a[c]=d;d.Ta=function(){return d.Wa};d.Xa=function(b){if(d.Wa=b)a[c+"_onLoad"]=b,a.da(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Ta,set:d.Xa}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=\n  b,a.da(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.M)if(!Object.prototype[b]&&(d=a.M[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.ob=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.P=function(c,b){var d,\n  f,e,g,k,m;for(d=0;2>d;d++)for(f=0<d?a.ra:a.c,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(m in a[g])k[m]||(k[m]=a[g][m]);a[g]=k}};a.Ma=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.ra:a.c,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.gb=function(a){var b,d,f,e,g,k=0,m,n="",p="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(m=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,\n  7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&m)))){if((a=m.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:p+=(p?"&":"")+e;n&&p?m=n+"&"+p:p=""}d=253-(m.length-p.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+m}return a};a.Sa=function(c){var b=\n  a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.aa=!1;a.F=!1;a.Ya=function(){a.F=!0;a.i()};a.Y=!1;a.T=!1;a.Va=function(c){a.marketingCloudVisitorID=c;a.T=!0;a.i()};a.V=!1;a.Q=!1;a.Oa=function(c){a.analyticsVisitorID=c;a.Q=!0;a.i()};a.X=!1;a.S=!1;a.Qa=function(c){a.audienceManagerLocationHint=\n  c;a.S=!0;a.i()};a.W=!1;a.R=!1;a.Pa=function(c){a.audienceManagerBlob=c;a.R=!0;a.i()};a.Ra=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.D=!1;a.qa=function(){a.D=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.aa||a.F||(a.Sa(a.Ya)?a.F=!0:a.aa=!0);if(a.aa&&!a.F)return!1;b&&b.isAllowed()&&(a.Y||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.Y=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,\n  a.Va]),a.marketingCloudVisitorID&&(a.T=!0)),a.V||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.V=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Oa]),a.analyticsVisitorID&&(a.Q=!0)),a.X||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.X=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Qa]),a.audienceManagerLocationHint&&(a.S=!0)),a.W||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.W=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Pa]),\n  a.audienceManagerBlob&&(a.R=!0)),a.Y&&!a.T&&!a.marketingCloudVisitorID||a.V&&!a.Q&&!a.analyticsVisitorID||a.X&&!a.S&&!a.audienceManagerLocationHint||a.W&&!a.R&&!a.audienceManagerBlob)&&(c=!1);a.Z||a.D||(a.Ra(a.qa)?a.D=!0:a.Z=!0);a.Z&&!a.D&&(c=!1);return c};a.k=q;a.q=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.bb=c;f.ab=b;f.Za=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.q&&(a.q=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.q&&(clearInterval(a.q),a.q=0),a.k!=q))for(;0<\n  a.k.length;)c=a.k.shift(),c.ab.apply(c.bb,c.Za)};a.Ua=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ma(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.ib=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+\n  d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset()),k;a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+\n  a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Ua(c)||(b&&a.P(b),c&&(d={},a.Ma(d,0),a.P(c)),a.ob()&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.ib()),a.tb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=n.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Na||(a.referrer=r.document.referrer),a.Na=1,a.referrer=a.gb(a.referrer),a.l("_g")),a.kb()&&!a.abort&&(a.lb(),g+=a.jb(),k=a.sb(e,\n  g),a.l("_t"),a.referrer=""))),c&&a.P(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=n.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.O=0;return k};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.A=e);return a.track(f)};a.t_s=a.trackSync=function(c,b,d){a.O=1;a.Ka="number"===typeof d?d:500;return a.track(c,b)};a.tl_s=a.trackLinkSync=function(c,b,d,f,e,g){a.O=1;a.Ka="number"===typeof g?g:500;\n  return a.trackLink(c,b,d,f,e)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.c.length;c++)if(b=a.c[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.getTrackingServer=function(){var c=\n  a.trackingServer,b="",d=a.dc,f="sc.",e=a.visitorNamespace;c?a.trackingServerSecure&&a.ssl&&(c=a.trackingServerSecure):(e||(e=a.account,c=e.indexOf(","),0<=c&&(e=e.substring(0,c)),e=e.replace(/[^A-Za-z0-9]/g,"")),b||(b="2o7.net"),d=d?(""+d).toLowerCase():"d1","2o7.net"==b&&("d1"==d?d="112":"d2"==d&&(d="122"),f=""),c=e+"."+d+"."+f+b);return c};a.tagContainerMarker="";a.Ca=function(c,b){var d=a.account,f=a.mobile?"5.":"",e=a.AudienceManagement&&a.AudienceManagement.isReady();return"/b/ss/"+d+"/"+f+(b?\n  b:e?"10":"1")+"/JS-"+a.version+(a.xb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c};a.wait=function(a){for(a=(new Date).getTime()+a;(new Date).getTime()<a;);};a.sb=function(c,b){var d=a.ssl?"https://":"http://",f=a.getTrackingServer(),e=a.Ca(c),g=a.AudienceManagement&&a.AudienceManagement.isReady(),e=d+f+e+("?AQB=1&ndh=1&pf=1&"+(g?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1"),k,m,p,q,r=0,s,u,w;if(a.O)if(m=a.c_r("s_vi"),(p=a.U()||m)&&"undefined"!==typeof XMLHttpRequest&&\n  (w=new XMLHttpRequest)&&"withCredentials"in w){a.U()?m="":(m&&(m=m.split("|"),1<m.length&&0<=m[0].indexOf("v1")&&(k=m[1],m=k.indexOf("["),0<=m&&(k=k.substring(0,m)),k&&k.match(/^[0-9a-fA-F\\-]+$/)||(k=0))),m="&aid="+k);k=a.Ca(c,"10");m="AQB=1&ndh=1&pf=1"+m+"&"+b+"&AQE=1";q=p=d+f+k+"?"+m;s="GET";u=null;2047<p.length&&(q=d+f+k,s="POST",u=m);try{a.ia=a.o();a.xa=p;a.wa=n["s_i_"+a.replace(a.account,",","_")]=w;w.open(s,q,!1);w.send(u);if(200==w.status&&""!==w.responseText){a.p=0;if(g&&a.u)try{a.AudienceManagement.passData(a.r(w.responseText))}catch(x){}return a.u?\n  a.r(w.responseText):w.responseText}r=1}catch(z){r=1}}else r=1;a.eb(e);a.fa();a.O&&r&&a.wait(a.Ka);return""};a.eb=function(c){a.g||a.mb();a.g.push(c);a.ha=a.o();a.La()};a.mb=function(){a.g=a.pb();a.g||(a.g=[])};a.pb=function(){var c,b;if(a.na()){try{(b=n.localStorage.getItem(a.la()))&&(c=n.JSON.parse(b))}catch(d){}return c}};a.na=function(){var c=!0;a.trackOffline&&a.offlineFilename&&n.localStorage&&n.JSON||(c=!1);return c};a.Ba=function(){var c=0;a.g&&(c=a.g.length);a.p&&c++;return c};a.fa=function(){if(!a.p)if(a.Da=\n  q,a.ma)a.ha>a.K&&a.Ia(a.g),a.pa(500);else{var c=a.$a();if(0<c)a.pa(c);else if(c=a.za())a.p=1,a.rb(c),a.vb(c)}};a.pa=function(c){a.Da||(c||(c=0),a.Da=setTimeout(a.fa,c))};a.$a=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.o()-a.ia;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.za=function(){if(0<a.g.length)return a.g.shift()};a.rb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\\n\\t"+a.unescape(c[d]);\n  a.qb(b)}};a.U=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.u=!1;var s;try{s=JSON.parse(\'{"x":"y"}\')}catch(z){s=null}s&&"y"==s.x?(a.u=!0,a.r=function(a){return JSON.parse(a)}):n.$&&n.$.parseJSON?(a.r=function(a){return n.$.parseJSON(a)},a.u=!0):a.r=function(){return null};a.vb=function(c){var b,d,f;a.U()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),\n  b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.u?b.ta=!0:b=0));!b&&a.nb&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="");b.va=function(){try{a.oa&&(clearTimeout(a.oa),a.oa=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};\n  b.onload=b.wb=function(){b.va();a.cb();a.ba();a.p=0;a.fa();if(b.ta){b.ta=!1;try{var c=a.r(b.responseText);AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.fb=function(){b.va();(a.trackOffline||a.ma)&&a.p&&a.g.unshift(a.xa);a.p=0;a.ha>a.K&&a.Ia(a.g);a.ba();a.pa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.wb():b.fb())};a.ia=a.o();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\\[\\]]+/,"");1==d?\n  (b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ga)try{f.removeChild(a.Ga)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ga=a.wa}b.abort&&(a.oa=setTimeout(b.abort,5E3));a.xa=c;a.wa=n["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.G||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ca=setTimeout(a.ba,a.forcedLinkTrackingTimeout)};a.cb=function(){if(a.na()&&!(a.Ha>a.K))try{n.localStorage.removeItem(a.la()),\n  a.Ha=a.o()}catch(c){}};a.Ia=function(c){if(a.na()){a.La();try{n.localStorage.setItem(a.la(),n.JSON.stringify(c)),a.K=a.o()}catch(b){}}};a.La=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.za()}};a.forceOffline=function(){a.ma=!0};a.forceOnline=function(){a.ma=!1};a.la=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.o=function(){return(new Date).getTime()};a.Ea=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&\n  0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.xb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.P(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&\n  "function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:n.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?\n  a.unescape(b):""}};a.C="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");\n  a.c=a.C.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ja="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.L=a.ja.slice(0);a.ra="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");\n  for(p=0;250>=p;p++)76>p&&(a.c.push("prop"+p),a.L.push("prop"+p)),a.c.push("eVar"+p),a.L.push("eVar"+p),6>p&&a.c.push("hier"+p),4>p&&a.c.push("list"+p);p="latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");a.c=a.c.concat(p);a.C=a.C.concat(p);a.ssl=0<=n.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";\n  a.ia=0;a.ha=0;a.K=0;a.Ha=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=n;a.d=n.document;try{a.nb="Microsoft Internet Explorer"==navigator.appName}catch(A){}a.ba=function(){a.ca&&(n.clearTimeout(a.ca),a.ca=q);a.j&&a.G&&a.j.dispatchEvent(a.G);a.A&&("function"==typeof a.A?a.A():a.j&&a.j.href&&(a.d.location=a.j.href));a.j=a.G=a.A=0};a.Ja=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ua)if(a.useForcedLinkTracking)a.b.removeEventListener("click",\n  a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ua=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.J&&a.J==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var k=a.J=a.clickObject;a.ga&&(clearTimeout(a.ga),a.ga=0);a.ga=setTimeout(function(){a.J==k&&(a.J=0)},1E4);f=a.Ba();a.track();if(f<a.Ba()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&\n  e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ea(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||n.name&&d==n.name))){try{b=a.d.createEvent("MouseEvents")}catch(m){b=new n.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(p){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=\n  1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.G=b)}}}}}catch(q){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&n.MouseEvent)&&(a.ua=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ja,30)};a.Ja()}\n  function s_gi(a){var n,q=window.s_c_il,r,p,u=a.split(","),x,s,z=0;if(q)for(r=0;!z&&r<q.length;){n=q[r];if("s_c"==n._c&&(n.account||n.oun))if(n.account&&n.account==a)z=1;else for(p=n.account?n.account:n.oun,p=n.allAccounts?n.allAccounts:p.split(","),x=0;x<u.length;x++)for(s=0;s<p.length;s++)u[x]==p[s]&&(z=1);r++}z||(n=new AppMeasurement);n.setAccount?n.setAccount(a):n.sa&&n.sa(a);return n}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);\n  function s_pgicq(){var a=window,n=a.s_giq,q,r,p;if(n)for(q=0;q<n.length;q++)r=n[q],p=s_gi(r.oun),p.setAccount(r.un),p.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();\n\n  /************************** Global Config *************************************/\n  var container = \'\';\n  var namespace = \'adobecorp\';\n  var sObjectName = \'s_adbdtmstats\';\n  /************************** Global Config End *********************************/\n\n  \n  /************************** VisitorAPI.js Config ******************************/\n  //var visitor = new Visitor(namespace); // not yet...\n  //visitor.trackingServer = \'stats.adobe.com\'; // not yet...\n  //visitor.trackingServerSecure = \'sstats.adobe.com\'; // not yet...\n  /************************** VisitorAPI.js Config End **************************/\n\n  /************************** AppMeasurement.js Config **************************/\n  var w = window,\n    s = new AppMeasurement();\n\n  window.s_adbdtmstats = s;\n\n  s.account = \'adbdtmstatsqa\';\n\n  //--------------------- Plugins ------------------------------------------------\n  var effectiveDomain = \'\';\n\n  s._getDomain = function () {\n    if (effectiveDomain) {\n      return effectiveDomain;\n    }\n\n    var parts = window.location.hostname.toLowerCase().split(\'.\'),\n      domain = [],\n      part = \'\',\n      date = null,\n      successfullySet = false;\n\n    // we know we can\'t set on tld, so just skip tld\n    part = parts.pop();\n    domain.unshift(part);\n\n    while (parts.length > 0) {\n      part = parts.pop();\n\n      domain.unshift(part);\n\n      date = new Date();\n      date.setTime(date.getTime() + 1000);\n\n      document.cookie = [\n        \'sat_domain\', \'=\', \'A\',\n        \'; expires=\' + date.toUTCString(),\n        \'; domain=\' + domain.join(\'.\'),\n        \'; path=\' + \'/\'\n      ].join(\'\');\n\n      if (this.Util.cookieRead(\'sat_domain\') === \'A\') {\n        successfullySet = true;\n        effectiveDomain = domain.join(\'.\');\n        break;\n      }\n    }\n\n    return successfullySet ? effectiveDomain : \'\';\n  };\n\n  s._getDomainPeriods = function () {\n    var domain = this._getDomain();\n    return domain ? domain.split(\'.\').length : 2;\n  };\n\n  //--------------------- Visitor Config -----------------------------------------\n  //s.visitorNamespace = namespace; //technically not needed\n  //s.visitor = Visitor.getInstance(namespace); // not yet...\n  //s.visitorID = \'\'; // not yet...\n\n  //--------------------- Other Config -------------------------------------------\n  s.charSet = \'UTF-8\';\n  s.trackingServer = \'stats.adobe.com\';\n  s.trackingServerSecure = \'sstats.adobe.com\';\n  s.cookieDomainPeriods = s._getDomainPeriods();\n  s.fpCookieDomainPeriods = s._getDomainPeriods();\n  //s.cookieLifetime = \'\'; //set in UI\n  //s.currencyCode = \'\'; //set in UI\n  //s.debugTracking = false; // not going to set yet...\n  //s.dynamicVariablePrefix = \'D=\'; //set in UI\n  //s.mobile = \'\'; //not going to set here...not applicable\n\n  //--------------------- Link Tracking Config -----------------------------------\n  //s.maxDelay = 1000; // not going to set yet...\n  s.trackInlineStats = false; // ClickMap\n  s.trackDownloadLinks = false;\n  s.trackExternalLinks = false;\n  s.linkLeaveQueryString = false;\n  s.linkTrackEvents = "None";\n  s.linkTrackVars = "None";\n  s.linkDownloadFileTypes = \'\';\n  s.linkExternalFilters = \'\'; //none\n  s.linkInternalFilters = \'\';\n\n\n  //--------------------- doPlugins ----------------------------------------------\n  s.usePlugins = true;\n  s.doPlugins = function (s) {\n      var hostname = w.location.hostname.toLowerCase(),\n          pathname = w.location.pathname,\n          protocol = w.location.protocol.toLowerCase(),\n          pathPiecesTemp = [],\n          pathPieceTemp = \'\',\n          pathPieces = [],\n          pathTemp = \'\',\n          url = w.location.href;\n\n      // pageName - hostname + \'|\' + pathname.split(\'/\').join(\':\')\n      pathPiecesTemp = pathname.split(\'/\');\n      for (var i=0, l=pathPiecesTemp.length; i<l; i++) {\n          pathPieceTemp = pathPiecesTemp[i];\n          if (pathPieceTemp !== \'\') {\n              pathPieces.push(pathPieceTemp);\n          }\n      }\n      pathTemp = pathPieces.join(\':\');\n      s.pageName = hostname + (pathTemp ? \'|\' + pathTemp : \'\');\n\n      // prop1 - dtm container\n      if (w._satellite && w._satellite.settings && w._satellite.settings.libraryName) {\n        s.prop1 = w._satellite.settings.libraryName;\n      } else {\n        s.prop1 = \'(none)\';\n      }\n\n      // prop2 - dtm container name\n      s.prop2 = container;\n\n      // prop3 - domain\n      s.prop3 = hostname;\n\n      // prop4 - effective domain\n      s.prop4 = s._getDomain();\n\n      // prop5 - protocol\n      s.prop5 = protocol;\n\n      // prop6 - s\n      s.prop6 = (w.s ? \'true\' : \'false\');\n\n      // prop7 - s_adobe;\n      s.prop7 = (w.s_adobe ? \'true\' : \'false\');\n\n      // prop8 - _satellite\n      s.prop8 = (w._satellite ? \'true\' : \'false\');\n\n      s.prop9 = \'test\';\n\n      // atm name\n      s.prop10 = \'microsites\';\n\n      // atm company\n      s.prop11 = \'Adobe Corp\';\n\n      // prop50\n      if (!s.prop50 && w.s) {\n        if (w.s.account) {\n          s.prop50 = w.s.account;\n        } else if (w.s.un) {\n          s.prop50 = w.s.un;\n        }\n      }\n\n      if (!s.prop50 && w.s_adobe) {\n        if (w.s_adobe.account) {\n          s.prop50 = w.s_adobe.account;\n        } else if (w.s_adobe.un) {\n          s.prop50 = w.s_adobe.un;\n        }\n      }\n\n      if (!s.prop50) {\n        s.prop50 = \'(none)\';\n      }\n\n      // prop51\n      if (!s.prop51 && w.s_adobe) {\n        if (w.s_adobe.account) {\n          s.prop51 = w.s_adobe.account;\n        } else if (w.s_adobe.un) {\n          s.prop51 = w.s_adobe.un;\n        }\n      }\n\n      if (!s.prop51) {\n        s.prop51 = \'(none)\';\n      }\n\n      // prop52\n      if (pathPieces[0]) {\n        s.prop52 = pathPieces[0];\n      }\n      \n      // prop53\n      if (pathPieces[1]) {\n        s.prop53 = pathPieces[1];\n      }\n\n      // prop54\n      if (pathTemp) {\n        s.prop54 = pathTemp;\n      }\n\n      // eVar1 - page url\n      s.eVar1 = url;\n\n      // eVar2 - pageUrl shorter\n      pathTemp = pathPieces.join(\'/\');\n      s.eVar2 = hostname + (pathTemp ? \'/\' + pathTemp : \'\');\n\n      // eVar3 - dtm container\n      s.eVar3 = s.prop1;\n\n      // eVar4 - domain\n      s.eVar4 = s.prop3;\n\n      // eVar5 - effective domain\n      s.eVar5 = s.prop4;\n\n      // eVar6 - protocol\n      s.eVar6 = s.prop5;\n\n      // eVar7 - s\n      s.eVar7 = s.prop6;\n\n      // eVar8 - s_adobe;\n      s.eVar8 = s.prop7;\n\n      // eVar9 - _satellite\n      s.eVar9 = s.prop8;\n\n      // evar10 - atm name\n      s.eVar10 = s.prop10;\n\n      // eVar11 - atm company\n      s.eVar11 = s.prop11;\n\n      // eVar50\n      s.eVar50 = s.prop50;\n\n      // eVar51\n      s.eVar51 = s.prop51;\n\n      // eVar52\n      s.eVar52 = s.prop52;\n\n      // eVar53\n      s.eVar53 = s.prop53;\n\n      // eVar54\n      s.eVar54 = s.prop54;\n      \n  };\n\n  /************************** AppMeasurement.js Config End **********************/\n\n\n  /************************** Send beacon ***************************************/\n  s.t();\n  /************************** Send beacon End ***********************************/\n\n}\n\ntrackAnalytics();'}]}];
s_tc_microsites.cr();