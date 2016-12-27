define(function(require, exports, module){
	
	var $ = require('jquery');
	var tools = require('dtools');

	var snowDrop = function(options){
		this._initsnowDrop(options);
	};

	snowDrop.prototype = {
		_initsnowDrop: function(options){
			this.options = tools.mix({
				duration: 800,//频率
				maxsize: 20,//最大尺寸
				minsize: 10//最小尺寸
				
			}, options);

			this._initUI();
		},
		_initUI: function(){
			var self = this;

			// 窗口高度
			var winWidth = $(window).width();
			var winHeight = $(window).height();

			var $ele = $('<div class="snow"></div>');
			
			var max = this.options.maxsize,
				min = this.options.minsize,
				minus =  max - min;

			var initTimer = null;
			initTimer = setInterval(function(){

				var left = Math.random() * winWidth,
					size = parseInt(Math.random() * minus + min, 10),
					endHeight = winHeight - 20,
					endWidth = Math.random() * winWidth,
					speed = winHeight * 10 + Math.random() * 5000;

				$ele.clone().appendTo($('body')).css({
					width: size,
					height: size,
					left: left

				}).animate({
					top: endHeight,
					left: endWidth,
					opacity: 0.2
				}, speed, function(){
					$(this).remove();
				});

			}, this.options.duration);

		}
	};

	module.exports = snowDrop;
});