$(function(){$.ajax({type:"get",url:"api/doAddrList.php",data:{user:user},dataType:"json",success:function(a){if(0==a.code){var i=ejs.render($("#listl").html(),{listData:a.data});$(".addr-list").html(i),$(".addr-list .default i").click(function(){var i=$(this),a=i.parents("li").data("id");$.ajax({type:"get",url:"api/changeDefault.php",data:{user:user,id:a},dataType:"json",success:function(a){0==a.code&&($(".icon-dui1").removeClass("icon-dui1").addClass("icon-yuan").next().removeClass("active"),i.removeClass("icon-yuan").addClass("icon-dui1").next().addClass("active"))}})}),$(".icon-bianji").click(function(){var a=$(this).parents("li").data("id");setCookie("listID",a),location.href="change-addr.html"})}}})});