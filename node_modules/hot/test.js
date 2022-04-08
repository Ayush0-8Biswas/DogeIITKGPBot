var assert = require('assert'),
    hot = require("./hot"),
    fs = require("fs");

function zhot_test() {
    var t = function(name, str, arg, expected) {
        it(name, function() {
            var hotCompiled = hot.compile(str, arg);
            assert.equal(hotCompiled(arg), expected);
        });
    };
    t("def_basic", "{{##def.t:\n<a href='#'>link</a>\nok\n#}}\n{{#def.t}}", {}, "<a href='#'>link</a>ok");
    t("it_basic", "{{=it.foo}}{{!it.foo2}}{{it.foo3='foo3 value';}}{{=it.foo3}}", {
        foo: "foo"
    }, "foofoo3 value");
    t("figure_brackets", "function(hola){\n{{?it.init_scripts}}{{=it.init_scripts}}{{??}}" + "hola.www_google_analytics({{=it.page404}});" + "{{?}}}", {
        page404: "foo"
    }, "function(hola){hola.www_google_analytics(foo);}");
    t("it_blocks", "{{##def.t:\na\nb\n#}}{{-it.b:\n<h2>block1</h2>\n" + "<div class='c'>div1</div>\n" + "{{#def.t}}{{=it.f1}}\n-}}{{=it.b}}" + "{{-it.b:\n<h2>block2</h2>\n" + "<div class=\"c\">div2</div>\n" + "{{#def.t}}{{=it.f1}}\n-}}{{=it.b}}", {
        f1: "foo"
    }, "<h2>block1</h2><div class='c'>div1</div>abfoo" + '<h2>block2</h2><div class="c">div2</div>abfoo');
    t("it_undefined_and_0", "{{=it.a}},{{=it.b}}", {
        a: 0
    }, "0,");
    t("def_undefined_and_0", "{{##def.a:0#}}{{#def.a}},{{#def.b}}", {}, "0,");
    t("it_override_and_trim", "{{##def.t:\na\nb\n#}}{{=it.t}}", {
        t: 1
    }, "a\nb");
    t("it_not_defined", ">{{=it.b}}<", {
        t: 1
    }, "><");
    t("it_encode", "{{!it.b}}", {
        b: "< >&@"
    }, "&#60; &#62;&#38;@");
    t("conditional", "{{?!it.b}}true{{??}}false{{?}}", {
        b: "false"
    }, "false");
    t("def_not_defined", ">{{#def.b}}<", {
        t: 1
    }, "><");
    t("def_override", "{{##def.o:\nbefore\n#}}\n{{#def.o}}\n,\n{{##def.o:\nafter\n#}}" + "{{#def.o}}", {
        o: 'it'
    }, "after,after");
    it("helper", function() {
        var escape = escape || require('./modules/escape.js');
        var it = {};
        var t = function(str, arg, expected) {
            hot.helpers.mailto = function(m) {
                var mailto_url = function(to, cc, subject, body) {
                    return "mailto:" + (to || '') + "?" + escape.to_uri({
                        cc: cc,
                        subject: subject,
                        body: body
                    });
                };
                m = m || {};
                return mailto_url(m.to, m.cc, m.subject, m.body);
            };
            it.helpers = hot.helpers;
            var hotCompiled = hot.compile(str, arg),
                res = hotCompiled(arg);
            assert.equal(res, expected);
        };
        t('{{=helpers.mailto({to: "info@hola.org", subject:' + '"I have Feedback!"})}}', it, "mailto:info@hola.org?subject=I%20have%20Feedback!");
    });
    it("file_include", function() {
        var t = function(str, arg, expected) {
            hot.viewsDir = __dirname;
            fs.writeFileSync('dot_cnt1', "'dot_cnt1{{include dot_cnt2}}123");
            fs.writeFileSync('dot_cnt2', '"dot_cnt2{{#def.d}}{{=it.f}}');
            var hotCompiled = hot.compile(str, arg),
                res = hotCompiled(arg);
            fs.unlinkSync('dot_cnt1');
            fs.unlinkSync('dot_cnt2');
            assert.equal(res, expected);
        };
        t("{{##def.d:\ndef1\n#}}filecaller{{include dot_cnt1}}012", {
            f: "foo"
        }, "filecaller'dot_cnt1\"dot_cnt2def1foo123012");
        hot.viewsDir = null;
    });
}
describe('zhot', zhot_test);