# jQuery YQLspider插件
> jQuery YQLspider插件用于模拟服务器请求，如果你不喜欢操作数据库的话！更重要的是你可以利用它抓取页面数据并将它同步到自己的数据库！！[项目地址](http://devtip.github.io/YQLspider/index.html)


## 使用说明
> 非常容易配置，只需3个参数
- url对应的是要抓取页面的地址
- selector代表抓取页面的选择器，
- success为数据抓取成功时的回调！



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

		// 在对应的容器中填充拼接后的字符串
		$('#navList').html(htmlStrArr);
		
	}
});
```


## 注意
即使url或者selector出错，YQL服务器最终可能会返回这样的结果:

``` json
/**/jQuery214029177518015036474_1451403767322({"query":{"count":1,"created":"2015-12-29T15:42:58Z","lang":"en-US","results":{"results":null}}}});
```


注意`"results":null`这样的代码，可能会导致大家的success回调方法出错，原因很简单，jQuery YQLspider插件关注的是results这一对象，而JavaScript对undefined、null进行操作会报错！


## 反馈
- 本插件代码量非常少，源代码都在js目录下，压缩版本在dist目录下！如若遇到什么问题，请向我反馈，欢迎关注！