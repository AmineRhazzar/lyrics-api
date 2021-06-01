var google = require("google");
var HTMLParser = require("node-html-parser");

google.resultsPerPage = 25;


google("shye - love u lyrics", function (err, res) {
    if (err) console.error(err);
    else {
        const root = HTMLParser.parse(res.body);
        var lyrics = root.querySelector(
            "div.hwc div[class='BNeawe tAd8D AP7Wnd'] div div[class='BNeawe tAd8D AP7Wnd']"
        ).childNodes[0].rawText;

        lyrics = lyrics ? lyrics : "no lyrics have been found";

        console.log(lyrics);
    }
});
