(function(){
  var c=document.createElement('canvas');c.width=256;c.height=256;
  var ctx=c.getContext('2d');
  for(var i=0;i<14000;i++){var a=Math.random()*0.055;ctx.fillStyle='rgba(210,192,154,'+a+')';var w=Math.random()<0.3?2:1;ctx.fillRect(Math.random()*256,Math.random()*256,w,1)}
  document.documentElement.style.setProperty('--washi','url('+c.toDataURL()+')');
})();
