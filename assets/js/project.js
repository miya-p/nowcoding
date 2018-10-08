	/*  Project 모바일 대응  */
$(document).ready(function(){

    /* PROJECT view	*/
    var viewPrj = $(".origin, .btn_viewPrj");
    var viewPrjContent = $(".popupBg.projectArea, .project_view.web");

	/*  Mobile Navigation  */
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $(function() {
        var pause = 0;
        // will only process code within delay(function() { ... }) every 100ms.
        $(window).resize(function() {
            delay(function() {
                var width = $(window).width();
                console.log(width + 'ddddd resize');

				if ( width >= 980 ) {
					viewPrj.click(function(){
						$("body").addClass('fix');
						viewPrjContent.css('display', 'block');
					});

					$(".popupBg.projectArea").click(function(){
						$("body").removeClass("fix");
						viewPrjContent.css('display', 'none');
					});
                    
					$(".project_view.mob .left .block").css("height", "600px");

                } else {

					$("body").removeClass("fix");
					viewPrjContent.css('display', 'none');

					viewPrj.click(function(){
						$("body").removeClass("fix");
						viewPrjContent.css('display', 'none');
						$(location).attr('href','m_view.html')
					});

					var w_block = $(".project_view.mob .left").outerWidth();
					$(".project_view.mob .left .block").css("height", w_block);
                }
            }, pause);
        });
        $(window).resize();
    });

});
