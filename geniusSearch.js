//https://genius.com/Billie-eilish-six-feet-under-lyrics

const rp = require("request-promise");
const cheerio = require("cheerio");

const url = "https://genius.com/Panic-at-the-disco-house-of-memories-lyrics";

rp(url).then((html) => {
    const $ = cheerio.load(html);
    var children = $("div.Lyrics__Root-sc-1ynbvzw-0").contents();
    for (let i = 0; i < 5; i++) {
        var currNode = children[i + ""];
        var currLyrics = "";
// 
        currNode?.children?.forEach((ele) => {
            if (ele.type === "text") {
                currLyrics += ele.data+"\n";
            } else if (ele.name === "a") {
                ele.children.forEach((childel) => {
                    childel.children.forEach((ele1) => {
                        if (ele1.type === "text") {
                            currLyrics += ele1.data + "\n"
                        }
                    })
                })
            }
        });
        console.log(currLyrics);
    }
});
