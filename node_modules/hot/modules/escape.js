'use strict'; /*jslint node:true*/

var html_escape_table = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;',
    "'": '&#39;'};
exports.html_escape = function(html){
    return html.replace(/[&<>"']/g, function(m){
    return html_escape_table[m[0]]; });
};

String.prototype.html_escape = function(){ return exports.html_escape(this); };

exports.escape_sh = function(s){
    if (typeof s == 'string') /* XXX serhan: remove */
	s = s.replace(/([\\"])/g, '\\$1');
    return '"'+s+'"';
};

exports.escape_sh_args = function(){
    var s = '', a = Array.isArray(arguments[0]) ? arguments[0] : arguments;
    for (var i=0; i<a.length; i++)
	s += (i ? ' ' : '')+exports.escape_sh(a[i]);
    return s;
};

exports.regex_escape = function(s){
    return s.replace(/[[\]{}()*+?.\\^$|\/]/g, "\\$&"); };

exports.to_uri = function(param){
    var uri = '';
    if (!param)
        return uri;
    for (var i in param)
    {
	var val = param[i];
	if (val===null || val===undefined)
	    continue;
        uri += (!uri ? '' : '&')+encodeURIComponent(i)+'='+
	    encodeURIComponent(val);
    }
    return uri;
};