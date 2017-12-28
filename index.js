var Crawler = require("crawler");

var patt = /[0-9]+/;

var c = new Crawler()

// 士林
c.queue([
    {
        uri: 'http://www.slsc-taipei.org/',

        callback: function(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                var $ = res.$;
                let text = $('span.number').eq(0).text();
                console.log('士林: '+patt.exec(text)[0]+'\n');
            }
            done();
        }
    }
]);

// 北投
c.queue([
    {
        uri: 'http://www.btsport.org.tw/zh-TW/onsitenum?wmode=opaque',

        callback: function(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                var $ = res.$;
                let text = $('span.flow_number').eq(0).text();
                console.log('北投: '+patt.exec(text)[0]+'\n');
            }
            done();
        }
    }
]);

// 汐止
c.queue([
    {
        uri: 'https://testxzcsc.cyc.org.tw/IISystem/Portal/root/',
        callback: function(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                var $ = res.$;
                let text = $('#div_Gym_Result').text();
                console.log('汐止: '+patt.exec(text)[0]+'\n');
            }
            done();
        }
    }
]);
