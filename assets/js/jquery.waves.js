(function($) {

    $.fn.wavyGravy = function(userOptions) {

        // merge the options
        var defaultOptions = {
            redrawInterval: (1000.0 / 60.0),
            amplitude: 7,
            topOffset: 0,
            detailAmplitude: 2,
            phaseIncrement: 2,
            color: '#ffff00'
        };

        var options = defaultOptions;

        if (options != null && typeof options === 'object') {
            options = $.extend({}, defaultOptions, userOptions);
        }

        // create the canvas
        var canvas = $("<canvas></canvas>");
        var canvas_element = canvas[0];
        var context = canvas_element.getContext("2d");

        context.fillStyle = options.color;

        canvas.css({
            'height': '100%',
            'width': '100%',
            'position': 'relative'
        });

        var last_width = null;
        var phase = 0;
        var two_pi = (2.0 * Math.PI);
        var period = null;
        var realTopOffset = options.topOffset + options.detailAmplitude;

        var draw = function() {

            var canvas_width = canvas_element.width;
            var canvas_height = canvas_element.height;

            context.clearRect(0, 0, canvas_width, canvas_height);

            if (canvas_width != last_width) {
                //reset phase
                phase = 0;
                last_width = canvas_width;
                period = two_pi / canvas_width;
            }

            var phase_value = -1 * ((phase / canvas_width) * two_pi);

            for (var i = 0; i < canvas_width; ++i) {
                var sin_value = options.amplitude * Math.sin((period * i) + phase_value);
                var detail_value = options.detailAmplitude * Math.sin(2 * (period * i));
                sin_value += detail_value;


                var origin = realTopOffset + (options.amplitude - sin_value);
                context.fillRect(i, origin, 1, canvas_height - origin);
            }

            phase += options.phaseIncrement;
            phase = phase % canvas_width;

            schedule();
        };

        // this function schedules the drawing at around 60fps

        var self = this;
        var schedule = function() {
            if ($.contains(document, canvas_element)) {
                window.setTimeout(draw, options.redrawInterval);
            }
        };

        //set the current element's contents to the canvas
        this.empty().append(canvas);

        // go!
        schedule();
    };

}(jQuery));
