;(function($, w){
    function htmlencode(s){  
        var div = document.createElement('div');  
        div.appendChild(document.createTextNode(s));  
        return div.innerHTML;  
    }  
    
    function htmldecode(s){  
        var div = document.createElement('div');  
        div.innerHTML = s;  
        return div.innerText || div.textContent;  
    }  

    var saveContent = function(content) {
        localStorage[uuid(8, 16)] = JSON.stringify({val:content,tt:moment().format()});
    }
    
    var removeContent = function(key) {
        localStorage.removeItem(key);
    }
    
    var clearContent = function() {
        localStorage.clear();
    }
    
    var listContent = function() {
        var contentList = $('#contentList');
        contentList.empty();
        moment.lang('zh-CN');
    
        for(idx in localStorage) {
            var content = JSON.parse(localStorage[idx]);
            console.log(content);
            var li = $('<li></li>');
            $('<div class="tt">' + moment(content.tt).format("dddd, YYYY年MM月DD日, h:mm:ss a") + '</div>').appendTo(li);
            $('<div class="content">' + htmlencode(content.val) + '</div>').appendTo(li);
            li.appendTo(contentList);  
        }
        
        $('#loadContent').hide();
        var clearContentHandler = $('#clearContent');
        clearContentHandler.click(function(){
            clearContent();
            contentList.empty();
        });
        clearContentHandler.show();
        contentList.show();
    }
    w.saveContent = saveContent;
    w.listContent = listContent;
    w.clearContent = clearContent;
})(jQuery, window);


