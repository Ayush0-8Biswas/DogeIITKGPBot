// hot.js - Hola Template
// based on hot.js template engine
/*jslint node:true, evil:true*/
(function() {
    "use strict";
    var hot = {
    version: '1.0.0',
	templateSettings: {
	    evaluate:    /\{\{([\s\S]+?\}?)\}\}/g,
	    interpolate: /\{\{=([\s\S]+?)\}\}/g,
	    encode:      /\{\{!([\s\S]+?)\}\}/g,
	    use:         /\{\{#([\s\S]+?)\}\}/g,
	    useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
	    define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
	    defineParams:/^\s*([\w$]+):([\s\S]+)/,
	    conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
	    iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
	    varname:	'it',
	    strip:		true,
	    trim:		true,
	    append:		true,
	    selfcontained: false,
	    defineit:    /\{\{-\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)-\}\}/g,
	    fileinclude: /\{\{include ([\s\S]+?)\}\}/g,
	},
	template: undefined, //fn, compile template
	compile:  undefined, //fn, for express
	viewsDir: undefined, //str, for tests
	helpers: {},  //{} of fn, user defined helpers
    };
    var mainDir = require.main ? require('path').dirname(require.main.filename) : '',
	fs = require('fs');
    if (typeof module !== 'undefined' && module.exports) {
	module.exports = hot;
    } else if (typeof define === 'function' && define.amd) {
	define(function(){return hot;});
    }

    function encodeHTMLSource() {
	var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;",
	        '"': '&#34;', "'": '&#39;', "/": '&#47;',},
	    matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
	return function() {
	    return this ? this.replace(matchHTML, function(m) {
		return encodeHTMLRules[m] || m;}) : this;
	};
    }
    String.prototype.encodeHTML = encodeHTMLSource();

    var startend = {
	append: { start: "'+(",      end:
	    ")+'",      endencode: "||'').toString().encodeHTML()+'" },
	split:  { start: "';out+=(", end: ");out+='",
	    endencode: "||'').toString().encodeHTML();out+='"},
    }, skip = /$^/;

    function resolveDefs(c, block, def) {
	return ((typeof block === 'string') ? block : block.toString())
	.replace(c.define || skip, function(m, code, assign, value) {
	    if (code.indexOf('def.') === 0) {
		code = code.substring(4);
	    }
	    if (assign === ':') {
		if (c.defineParams) value.replace(c.defineParams,
		    function(m, param, v) {
		        def[code] = {arg: param, text: v};});
		def[code]= value;
	    } else {
		new Function("def", "def['"+code+"']=" + value)(def);
	    }
	    return '';
	})
	.replace(c.fileinclude || skip, function(m, filename) {
	    var v = fs.readFileSync((hot.viewsDir || mainDir+'/views')
	        +'/'+filename, 'utf8');
	    return v ? resolveDefs(c, v, def) : v;
	})
	.replace(c.use || skip, function(m, code) {
	    if (c.useParams)
	    code = code.replace(c.useParams, function(m, s, d, param) {
		if (def[d] && def[d].arg && param) {
		    var rw = (d+":"+param).replace(/'|\\/g, '_');
		    def.__exp = def.__exp || {};
		    def.__exp[rw]
		        = def[d].text.replace(new RegExp("(^|[^\\w$])"
			+ def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
		    return s + "def.__exp['"+rw+"']";
		}
	    });
	    var v = new Function("def", "return " + code)(def);
	    var res =  v ? resolveDefs(c, v, def) : v;
	    return (res === undefined || res === null) ? "" : res;
	});
    }
    function unescape(code) {
	return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, ' ');
    }
    hot.template = function(tmpl, c, def) {
	c = c || hot.templateSettings;
	var cse = c.append ? startend.append : startend.split, needhtmlencode,
	    sid = 0, indv,
	    str  = (c.use || c.define)
		? resolveDefs(c, tmpl, def || {}) : tmpl;
	str = ("var out='" + (c.strip ?
	    str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g,' ')
	    .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,''): str)
	    .replace(/'|\\/g, '\\$&')
	.replace(c.defineit || skip, function(m, code, assign, value) {
	    return "';" + code+"='"+value
		+ "';out+='";
	})
	.replace(c.interpolate || skip, function(m, code) {
	    var res = unescape(code);
	    return cse.start
	    +'('+res+' === undefined || '+res+' === null) ? "" : '+res
	    +cse.end;
	})
	.replace(c.encode || skip, function(m, code) {
	    needhtmlencode = true;
	    return cse.start + unescape(code) + cse.endencode;
	})
	.replace(c.conditional || skip, function(m, elsecase, code) {
	    return elsecase ?
		(code ? "';}else if(" + unescape(code)
		+ "){out+='" : "';}else{out+='") :
		(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
	})
	.replace(c.iterate || skip, function(m, iterate, vname, iname) {
	    if (!iterate) return "';} } out+='";
	    sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
	    return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","
	        +indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid
	        +"){"+vname+"=arr"+sid+"["+indv+"+=1];out+='";
	})
	.replace(c.evaluate || skip, function(m, code) {
	    return "';" + unescape(code) + "out+='";
	})
	+ (c.trim?"';out=out.trim();out+='":"")
	+ "';return out;")
	.replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r')
	.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, '')
	.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

	if (needhtmlencode && c.selfcontained) {
	    str = "String.prototype.encodeHTML=(" + encodeHTMLSource.toString()
		+ "());" + str;
	}
	str="if("+c.varname+"&&"+c.varname+".def) var def=it.def;"+str;
	str="if("+c.varname+"&&"+c.varname
	    +".helpers) var helpers=it.helpers;"+str;
	try {
	    //console.log('function to compile: '+str);
	    return new Function(c.varname, str);
	} catch (e) {
	    if (typeof console !== 'undefined')
		console.log("Could not create a template function: " + str);
	    throw e;
	}
    };
    hot.compile = function(tmpl, def) {
	return hot.template(tmpl, null, def);
    };
}());
