$(function(){$.ajax({type:"get",url:"api/user-info.php",data:{user:user},dataType:"json",success:function(a){0==a.code&&$("main .addr").html(a.data[0].addr1+" "+a.data[0].addr2)}})});