window.onload = function(){
    var upSwiper = new Swiper('#upSwiper',{
        width:1100,
        slidesPerView: 5,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        initialSlide:2,
        autoplay:3000,
        // loop:true,
        observer:true,
		// virtualTranslate : true,
		on:{
			setTranslate: function(){
				this.$wrapperEl.transition('')
				TweenMax.to(this.$wrapperEl, 1.5, {x:this.translate, ease:Power4.easeOut})
				
			}
		},

    })
    var downSwiper = new Swiper('#downSwiper',{
        width:1044,
        slidesPerView: 4,
        // centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 33,
        initialSlide:2,
        // autoplay:3000,
        loop:true,
        prevButton:'.move-prev',
        nextButton:'.move-next',
    })
//     var w=$('.eR-bgimg').width();        
//     var zoom=w/1920;
//     var h =$('.er-bgimg').height()
//             $('.eR-bgimg').height(zoom*1360)
//              $(".guiding").css({
//              'top':432*zoom+'px'
//              });
//              $('.first-content').css({
//                  top:557.833-zoom*1360
//              })
// $(window).resize(
//      function(){        
//     var w=$('.eR-bgimg').width();        
//     var zoom=w/1920;
//     var h =$('.er-bgimg').height()
//             $('.eR-bgimg').height(zoom*1360)
//              $(".guiding").css({
//              'top':432*zoom+'px'
//              });
//              $('.first-content').css({
//                  top:557.833-zoom*1360
//              })
             
//       }
//  )
    }
