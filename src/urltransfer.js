$(document).ready(function() {
    var utf16to8 = function(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            }
        }
        return out;
    }	

    var generateQrCode = function() {
        var content = $('#target_id').val();
        console.log(content);
        if(content.length == 0) {
            return false;
        }
        //var imgDiv = '<img src="' + charUrl + content + '"width="200" height="200" style="border:solid #eeeeee 1px;padding:2px;"/>';
        $("#qrcode_canvas").empty();
        $("#qrcode_canvas").qrcode({
            width : 198,
            height : 198,
            text : utf16to8(content)
        });

        //$('#qrcode_container').empty().append(imgDiv);
        return true;
    }
	
	$("#ok_btn_id").bind('click', function() {
		if(generateQrCode())
			$("#info_div_id").show();
		return false;
	});
	
	$("#mini_btn_id").bind('click', function() {
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
	
	$("#history_btn_id").bind('click', function() {
		return false;
	});
	
	$("#current_btn_id").bind('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
			//chrome.tabs.update(tab.id, {url:newUrl});
			//console.log(tab.url);
			$('#target_id').val(tab.url);
		});
		return false;
	});
});
