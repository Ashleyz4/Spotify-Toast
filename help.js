// did this cause it's easier for for people tbh.
// I don't like the way this turned out, but whatever, if it helps people /shrug.
var help = [
    "Usage: npm [OPTION , [OPTION2]]",
    "NPM version of Spotify-Toast ported from Windows",
    " ",
    "  start",
    "     Starts app",
    "  run help",
    "     Shows this",
    "  run make-[OPTION]",
    "     zip",
    "        Makes zip file with app",
    "     linux-deb OR linux-rpm",
    "        Package Linux app",
    "     mac",
    "         Package dmg for MacOS",
    " ",
    "Help can also be ran with node help.js",
    "Report bugs to http://github.com/Ashleyz4/Spotify-Toast"
];

for(i=0;i < help.length;i++) {
    var h = help[i];
    console.log(h);
}
