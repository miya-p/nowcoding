	/*  Project 모바일 대응  */
$(document).ready(function(){
	
	/* 새 프로젝트 만들기 FAB 스크롤 제어 */
	window.onscroll = function() {
		var d = document.documentElement;
		var footHeight = $("footer").outerHeight();
		var offset = d.scrollTop + window.innerHeight + footHeight;
		var height = d.offsetHeight;
		var stopHeight = d.offsetHeight - footHeight - 115;

		if (offset >= height) {
			$("#fab-wp").css({"position":"absolute", "top": stopHeight + "px"});
		}else{
			$("#fab-wp").removeAttr("style");
			$("#fab-wp").css({"position":"fixed", "bottom":"35px"});
		}
	};

});
