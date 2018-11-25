var words = ['asshole','con','merde','salope','salop','salopes','salops','saloppe','bougnoul','bounioul','bougnoulle','bougnoule','pd','gouine','gouines','goudou','gouinasse','gouinasses','youpin','négro','bamboula','emburqinée','emburquiné','emburquinées','emburquinés','bicot','bico','bicots','crouille','crouilles','raton','youpin','youpins','tafiole','taffiole','tafioles','taffioles','tantouse','tantouze','tantouses','tarlouses','tarlouse','tarlouze','pute','putasse','pupute','puputes','putes','pétasse','petasse','petasses','pétasses','tasspé','tasspe','connasse','conasse','connasses','conasses','pouffiasse','pouffiasses','pouffiace','pouff','pouffiasse','pouf','pouffe','hollandouille','enculé','enculés','encules','godmiché','godmich','godmicher','sarkonard','sarkonnard','nabot','naboleon','naboléon','bouffonne','boufone','bouffone','bouffonnes','bouffon','boufon','boufons','bouffons','couille','couilles','connar','connard','conard','connards','conards','catin','katin','catins','katins','suceuse','suçeuse','suceuses','conne','connes','garce','garces','chiasse','chieur','chieurs','chieuses','chieuse','ducon','duconne','saloperie','bâtard','bâtards','bâtarde','bâtardes','batard','batarde','batards','batardes','couillon','sarkonnasse','sarkonasse','branleur','branleurs','lopette','lopettes','lopetes','lopete','pédé','pédés','pédérastes','pédéraste','radasse','salopard','salopart','salopar','mongolien','mongolienne','gogolène','bouffon','bouffons','trouduc','fdp','enfoiré','enfoirés','merdasse','merdasses','merdouille','merdouilles','raclure','raclures','negresse','négresse','salaud','salauds','tdq','battard','battards','tarlouze','tarlouzes','connace','musulmerde','juiffon','connars'];
var expr = '\\b(';
words.forEach(function(element) {
  if(element != words[words.length-1]) {
		expr += element +'|';
	} else {
		expr += element; //+' ';
	}
});
expr += ')\\b';
var rExp = new RegExp(expr, 'gi');
window.onload = replaceBaka;
function replaceBaka() {
  document.body.innerHTML = document.body.innerHTML.replace(rExp, "baka");
}
