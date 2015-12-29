# jQuery YQLspider插件


## 这个插件能干什么? :-)
- 模拟服务器请求，如果你不喜欢操作数据库的话！
- 抓取页面数据


## 使用说明
> 非常容易配置，只需3个参数
- url对应的是要抓取页面的地址
- selector代表抓取页面的选择器，
- success为找取数据成功时的回调！

## 如何使用？
``` javascript
// 从jb51.net获取JavaScript模块的pdf书籍链接
$.YQLspider({
	url: 'http://www.jb51.net/books/',
	selector: '.panel-1 .list li a.title',
	success: function(r){
		console.log('-----*****从jb51.net找取数据*****-----');
		
		// 数据源
		var data = r.a;
		var host = 'http://www.jb51.net';
		var htmlStrArr = []
		$.each(data, function(idx, val){
			var html = '<li><a href="'+ host + this.href + '">' + this.title + '</a></li>';
			htmlStrArr.push(html);
		});
		var htmlstr = htmlStrArr.join('');
		$('#navList').html(htmlStrArr);
		
	}
});
```


## 注意
即使url或者selector出错，YQL服务器最终也不会出错,但可能会返回这样的结果:

``` json
/**/jQuery214029177518015036474_1451403767322({"query":{"count":1,"created":"2015-12-29T15:42:58Z","lang":"en-US","results":{"results":null}}}});
```


注意`"results":null`这样的代码，可能会导致大家的success方法出错，原因很简单，jQuery YQLspider插件关注的是results这一对象，而JavaScript对undefined、null进行操作会报错！


## 反馈
- 如果你遇到什么问题，请反馈，欢迎关注！