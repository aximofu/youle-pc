function doData(){var t=JSON.parse(localStorage.cart);if(0<t.length){$("footer").addClass("hp");var e=ejs.render($("#cartl").html(),{cartData:t});$("main").append(e),mycar()}else $("main").addClass("no"),$(".fixed-btn").show(),$("main .more").show(),$("main .nocenter").addClass("nocenter1"),getData(),nocontent()}function mycar(){function o(){var t=0,e=0;$("main i.chk-item").each(function(){$(this).hasClass("icon-dui1")&&(t+=parseInt($(this).parents(".store-item").find(".goods-num").val()),e+=parseFloat($(this).parents(".store-item").find(".price").html().slice(1))*parseInt($(this).parents(".store-item").find(".goods-num").val()))}),$("footer .btn-gotocar span").html(t),$("footer strong").html("￥"+e.toFixed(2))}function s(a,s,n){$.ajax({type:"get",url:"api/doCar.php",data:{style:3,user:user,id:n,n:s},dataType:"json",success:function(t){if(0==t.code){a.parent().children(".goods-num").val(s);var e=0;a.parents(".store-items").children().each(function(t){e+=parseInt(a.parents(".store-items").find(".goods-num").eq(t).val())}),a.parents(".car-store").find(".order-num span").html(e),o(),changeLS(n,s),i(a)}}})}function i(e){var a=0,s=0;e.parents(".store-items").children().each(function(t){a+=parseFloat(parseInt(e.parents(".store-items").find(".goods-num").eq(t).val())*(parseFloat(e.parents(".store-items").find("del").eq(t).html().slice(1))-parseFloat(e.parents(".store-items").find("span.price").eq(t).html().slice(1)))),s+=parseFloat(parseInt(e.parents(".store-items").find(".goods-num").eq(t).val())*parseFloat(e.parents(".store-items").find("span.price").eq(t).html().slice(1)))}),e.parents(".car-store").find(".all-dis span").html("￥"+a.toFixed(2)),e.parents(".car-store").find(".all-total").html("￥"+s.toFixed(2))}var e,n,t,a,c,r;$("footer .select-all").click(function(){$(this).toggleClass("active"),$(this).hasClass("active")?$("main i").addClass("icon-dui1").removeClass("icon-yuan"):$("main i").removeClass("icon-dui1").addClass("icon-yuan"),$("footer .btn-gotocar").removeClass("active"),$("main i").each(function(t,e){if($(e).hasClass("icon-dui1"))return $("footer .btn-gotocar").addClass("active"),!1}),o()}),$("main .car-store .chk-store").click(function(){var t=!0;$(this).toggleClass("icon-dui1").toggleClass("icon-yuan"),$(this).hasClass("icon-dui1")?$(this).parent().next().find("i").addClass("icon-dui1").removeClass("icon-yuan"):$(this).parent().next().find("i").removeClass("icon-dui1").addClass("icon-yuan"),$.each($("main .car-store .chk-store"),function(){if($(this).hasClass("icon-dui1"))return t=!1}),t?$("footer .select-all").addClass("active"):$("footer .select-all").removeClass("active"),$("footer .btn-gotocar").removeClass("active"),$("main i").each(function(t,e){if($(e).hasClass("icon-dui1"))return $("footer .btn-gotocar").addClass("active"),!1}),o()}),$("main .chk-item").click(function(){var t=!0,e=!0;$(this).toggleClass("icon-dui1").toggleClass("icon-yuan"),$.each($(this).parents(".store-items").find("i"),function(){if($(this).hasClass("icon-yuan"))return t=!1}),t?$(this).parents(".store-items").prev().find(".chk-store").addClass("icon-dui1").removeClass("icon-yuan"):$(this).parents(".store-items").prev().find(".chk-store").addClass("icon-yuan").removeClass("icon-dui1"),$.each($("main .chk-store"),function(){if($(this).hasClass("icon-yuan"))return e=!1}),e?$("footer .select-all").addClass("active"):$("footer .select-all").removeClass("active"),$("footer .btn-gotocar").removeClass("active"),$("main i").each(function(t,e){if($(e).hasClass("icon-dui1"))return $("footer .btn-gotocar").addClass("active"),!1}),o()}),$("main .btn-down").click(function(){var t=$(this).parents(".store-item").data("option"),e=$(this),a=$(this).next().val();--a<=1&&($(this).addClass("disabled"),a=1),s(e,a,t)}),$("main .btn-up").click(function(){$(this).prev().prev().removeClass("disabled");var t=$(this),e=$(this).parents(".store-item").data("option"),a=$(this).prev().val();s(t,++a,e)}),750<(t=document.documentElement.getBoundingClientRect().width)&&(t=750),e=7.5/t,$(".store-item").on("touchstart",function(t){a=t.touches[0].pageX,r=$(this).css("left")}),$(".store-item").on("touchmove",function(t){c=t.touches[0].pageX,(0==parseFloat(r)&&parseFloat(c)<parseFloat(a)||0!=parseFloat(r)&&parseFloat(c)>parseFloat(a))&&$(this).css("left",parseFloat(c*e)-parseFloat(a*e)+parseFloat(r)+"rem")}),$(".store-item").on("touchend",function(t){t.changedTouches[0].pageX<a?$(this).css("left","-1.2rem"):$(this).css("left","0rem")}),$(".item-box").on("touchmove",function(t){t.preventDefault()}),$(".delete").click(function(){var a,t=$(this);n=$(this).prev().data("option"),a=t,$(".tips .cancel").click(function(){$(".tips").hide()}),$(".tips .enter").click(function(){$(".tips").hide(),a.html("删除中..."),$.ajax({type:"get",url:"api/doCar.php",data:{style:2,id:n,user:user},dataType:"json",success:function(t){if(0==t.code){a.prev().find(".chk-item").addClass("icon-yuan").removeClass("icon-dui1"),o(),delLS(n),s(a),i(a),a.parents(".item-box").remove();for(var e=0;e<$("main").children().length;e++)0==$("main").children().eq(e).find(".store-item").length&&$("main").children().eq(e).remove();0==$("main").children().length&&history.go(0)}}})}),$(".tips").show()})}function jsonApiCallback3(t){var e=t.result,a=ejs.render($("#listl").html(),{listData:e});$(".more .content").append(a)}function nocontent(){var a=window.innerHeight,s=$(".more .content").offset().top,n=0,o=!0;$(window).scroll(function(){var t=$(".more .content").height(),e=$(window).scrollTop();t+s-e-a<=0&&o&&(o=!1,n+=10,$.ajax({type:"get",url:"https://static-content.ulecdn.com/mobilead/recommond/indexListingCommentGet",data:{sectionKeys:"ule_android_index_prodlist",startIndex:n,pageSize:10,type:1},cache:!0,jsonpCallback:"jsonApiCallback3",jsonp:"jsonApiCallback",dataType:"jsonp",success:function(t){10==t.result.length?o=!0:$(".more .no-data").show()}}))})}function getData(){$.ajax({type:"get",url:"https://static-content.ulecdn.com/mobilead/recommond/indexListingCommentGet",data:{sectionKeys:"ule_android_index_prodlist",startIndex:0,pageSize:10,type:1},cache:!0,jsonpCallback:"jsonApiCallback3",jsonp:"jsonApiCallback",dataType:"jsonp"})}function delLS(a){var t=JSON.parse(localStorage.cart),s=[];$.each(t,function(t,e){e.listId!=a&&s.push(e)}),localStorage.removeItem("cart"),localStorage.cart=JSON.stringify(s)}function changeLS(a,s){var t=JSON.parse(localStorage.cart),n=[];$.each(t,function(t,e){e.listId==a&&(e.listNum=s),n.push(e),localStorage.removeItem("cart"),localStorage.cart=JSON.stringify(n)})}$(function(){$(".icon-sangedian").click(function(){$(".classfiy-pop").addClass("active")}),$(".classfiy-pop").click(function(){$(".classfiy-pop").removeClass("active")})}),$(function(){$.ajax({type:"get",url:"api/doCar.php",data:{style:1,user:user},dataType:"json",success:function(t){localStorage.cart=JSON.stringify(t.data),doData()}})}),$(function(){$(".go-back").click(function(){$("html,body").scrollTo({toT:0})})});