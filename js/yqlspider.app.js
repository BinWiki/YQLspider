/**
 * app.js
 */


$.YQLspider({
	url: 'http://www.jb51.net/books/',
	selector: '.panel-1 .list li a.title',
	success: function(r){
		console.log('-----*****The data is from jb51.net*****-----');
		
		// Data Source
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



