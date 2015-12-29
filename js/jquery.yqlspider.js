/*
 * jQuery YQLspider插件
 * @author DevTip
 * @date 2015-09-08 14:16
 */

;(function($, encodeURIComponent){

	/* 静态方法 */
	$.YQLspider= function(options){
		
		// 插件默认配置对象
		/**
		 * @type {Object}
		 * @Function callback: 回调函数
		 * @String url: 要找取的地址
		 * @String selector: 样式选择器
		 */
		var defaults = {
			success: function(){},
			url: '',
			selector: ''
		};

		// 合并配置对象
		var opt = $.extend({}, defaults, options);
	

		// SQL
		var query = 'select * from data.html.cssselect where url="' + opt.url + '" and css="' + opt.selector + '"';

		// 组装API
		var yqlAPI = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query)
+ ' &format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';

		return $.ajax({
		  dataType: "json",
		  url: yqlAPI,
		  cache: true
		}).promise().then(function(responseJSON){
			// 如果你关注所有数据
			// 将代码修改为“opt.success(responseJSON);即可”
			opt.success(responseJSON.query.results.results);
		});
		
	}
})(jQuery, encodeURIComponent);






