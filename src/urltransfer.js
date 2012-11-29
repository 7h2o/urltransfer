$(document).ready(function(){
	var charUrl = 'https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chld=L|1&chs=200x200&chl=';
	
	var generateQrCode = function(){
		var content = $('#target_id').val();
		console.log(content);
		if(content.length == 0)
			return false;
		var imgDiv = '<img src="' + charUrl + content + '"width="200" height="200" style="border:solid #eeeeee 1px;padding:2px;"/>';
		$('#qrcode_container').empty().append(imgDiv);
		return true;
	}
	
	$("#ok_btn_id").bind('click', function() {
		if(generateQrCode())
			$("#info_div_id").show();
		return false;
	});
	
	$("#mini_btn_id").bind('click', function(){
		var textareaHeight = $('#target_id').height();
		console.log(textareaHeight);
		
		if(textareaHeight > 20) {
			$('#target_id').height(20);
			$("#mini_btn_id").empty().append('FULL');
		}
		else {
			$('#target_id').height(120);
			$("#mini_btn_id").empty().append('MINI');
		}
		return false;
	});
	
	$("#history_btn_id").bind('click', function(){
		return false;
	});
	
	$("#current_btn_id").bind('click', function(){
		$('#target_id').val(window.location.href);
		return false;
	});
});