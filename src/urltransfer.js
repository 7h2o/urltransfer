$(document).ready(function(){
	var charUrl = 'https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chld=L|4&chs=200x200&chl=';//Hello,world
	
	var generateQrCode = function(){
		var content = $('#url_id').val();
		if(content.length == 0)
			return;
		var imgDiv = '<img src="' + charUrl + content + '" style="border:solid #eeeeee 1px;padding:2px;"/>';
		$('#qrcode_container').empty().append(imgDiv);
	}
	
	$("input[type='text']").bind('change', function() {
		generateQrCode();
	});
});