/*  checkbox, radio  */
(function($) {
	$.fn.customizeCRInput = function(options) {
		var options = $.extend({
			checked_class : "checked",
    		anime_class : "animated rubberBand"
		}, options);

		return this.each(function(){
			var input = $(this);
			input.on("change",function(){
				var is_checked = input.is(":checked");
				var type = input.attr("type");
				var id = input.attr("id");
				var label = $("label[for="+id+"]");
				var chk = $("label[for="+id+"] i");
				if (type == "checkbox") {
					if (input.is(":checked")) {
						label.addClass(options.checked_class);
    					chk.addClass(options.anime_class);
					} else {
						label.removeClass(options.checked_class);
    					chk.removeClass(options.anime_class);
					}
				} else if (type == "radio") {
					$("input[name="+input.attr("name")+"]").each(function(idx){
						$("label[for="+$(this).attr("id")+"]").removeClass(options.checked_class);
					});
					label.addClass(options.checked_class);
				}
			});
		});
	};
})(jQuery);

/*  textarea letter count  */
function countChar(val) {
    var len = val.value.length;
    if (len >= 500) {
        val.value = val.value.substring(0, 500);
    } else {
        $('#charNum').show('slow').text(500 - len + " / 500");
    }
};


$(document).ready(function(){
    $("input[type=checkbox], input[type=radio]").customizeCRInput();

    $("#tphone").keypress(function (e) {
       if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg").html("숫자만 입력해주세요.").show().fadeOut("slow");
            return false;
        }
    });
	$(".numeric").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^0-9\.]/g,''));
		if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
			event.preventDefault();
		}
	});
});
