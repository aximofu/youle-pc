function resize(){var e=document.documentElement,n=e.getBoundingClientRect().width/7.5;e.style.fontSize=n+"px"}resize(),window.onresize=function(){console.log("resize"),setTimeout(function(){resize()},16.7)};