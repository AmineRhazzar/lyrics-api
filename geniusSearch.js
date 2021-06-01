const axios = require("axios");
var HTMLParser = require("node-html-parser");
const jsdom = require("jsdom");
const fs = require("fs");

const removeScriptTags = (htmlDocument) => {
    const scriptTags = htmlDocument.getElementsByTagName("script");
    var i = 4;
    while (i--) {
        console.log(scriptTags[i]);
    }
}


axios
    .get("https://genius.com/Billie-eilish-six-feet-under-lyrics")
    .then((res) => res.data)
    .then((body) => {
        body.replace(/<script>CURRENT_USER = null;(.*)<\/script>/, "");
        return new jsdom.JSDOM(body);
    })
    .then(dom => dom.window.document)
    .then((dom) => {
        console.log(dom.querySelector("div.lyrics p"));
   
    })
    .catch((err) => console.log(err));
