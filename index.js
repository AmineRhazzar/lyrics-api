var google = require("google");
var HTMLParser = require("node-html-parser");



const googleResultsCallback = (err, res) => {
    if (err) return undefined;
    else {
        const root = HTMLParser.parse(res.body);
        var lyrics = root.querySelector(
            "div.hwc div[class='BNeawe tAd8D AP7Wnd'] div div[class='BNeawe tAd8D AP7Wnd']"
        )?.childNodes[0]?.rawText;

        lyrics = lyrics ? lyrics : "none";

        return lyrics;
    }
};

const geniusResultsCallback = () => {
    return "yay";
}

const commonCallBack = (err, res) => {
    var lyrics;
    const googleLyrics = googleResultsCallback(err, res);
    if (googleLyrics !== "none") {
        lyrics = googleLyrics;
    } else {
        lyrics = geniusResultsCallback();
    }
    console.log(lyrics);
}



const getLyrics = (songName, songMainArtist, cb) => {
    google(`${songName} ${songMainArtist} lyrics`, cb);
};

getLyrics("mean it", "gracie abrams", commonCallBack);
