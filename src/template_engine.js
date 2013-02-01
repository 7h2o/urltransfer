/* ==========================================================
 * lanyizi.com
 * ==========================================================
 * Copyright 2012 lanyizi.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

var template_engine = {};

template_engine.compile = function(template)
{
    //This code is from http://fins.iteye.com/blog/125834
    var TEMPLATE_START = '{{';  
        var TEMPLATE_END = '}}';  
    var templateC = [];  
    var snippets = [];  
    var current = 0;  
    while(true) {  
        var start = template.indexOf(TEMPLATE_START, current);  
        var sBegin = start + 2;  
        var sEnd = template.indexOf(TEMPLATE_END, sBegin);  

        if(sBegin >= 2 && sEnd > sBegin)
        {  
            templateC.push(template.substring(current, start) );  
            var sn = template.substring(sBegin, sEnd);  
            if(sn.indexOf('#') == 0)
            {  
                sn = eval(sn.substring(1));  
            }
            else
            {  
                snippets.push(templateC.length);  
            }  
            templateC.push(sn);  
        }
        else
        {  
            templateC.push(template.substring(current));  
            break;  
        }  
        current=sEnd + 2;  
    }  
    templateC.push(snippets);  
    return templateC;  
}

template_engine.render = function(templateC, data){
    var VAR = data;  
    var snippets = templateC[templateC.length - 1];  
    var rs = [];  
    var sIdx = 0;  

    for (var i = 0; i < templateC.length - 1; i++ )
    {  
        if (snippets[sIdx] == i ) {  
            rs.push(eval('VAR' + templateC[i]));  
            sIdx++;  
        }
        else {  
            rs.push(templateC[i])  
        }  
    }  
    return rs.join('');  	
}

