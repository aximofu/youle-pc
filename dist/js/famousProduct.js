!function(){var t,a;$(".icon-iconfontjiantou1").click(function(){window.history.back(),window.onpageshow=function(o){o.persisted&&window.location.reload()}}),new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0}}),t=1,a=!0,$(window).scroll(function(){var o=window.innerHeight,n=$(".more").offset().top,e=$(".more").height(),i=["gdmcprod","zhlzhprod","djxxprodGoods","czdjprodGoods","njzcprodGoods"];$(this).scrollTop()+o>=n+e&&(t<=i.length?a&&($(".floor-font").html("<div class='lazy'><img src='images/famousProduct/lazy.gif'></div>"),a=!1,$.ajax({tpye:"get",url:"https://service.ule.com/api/mobile/indexListingCommentGet.do",data:{jsonApiCallback:"jsonp"+t,moduleKeys:"ulenp2017_famousProduct_"+i[t-1],startIndex:0,pageSize:100,type:1,appkey:"4b9f40822ddd5cd5",version_no:"apr_2010_build01"},cache:!0,jsonpCallback:"jsonp"+t,jsonp:"jsonApiCallback",dataType:"jsonp",success:function(o){$(".floor-font").html("拉动继续加载");var n=o.result,e=ejs.render($("#tpl").html(),{shop:n});$(".more").append(e),5<t&&$(".floor-font").html("已经到底了，没有其他内容了"),a=!0}}),t++):a=!1)})}();