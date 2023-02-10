var linkparameters = location.search.split('url=')[1];


var protocall = window.location.protocol;
var domain = window.location.host;
var gamelink = protocall+domain+"/g/"+linkparameters;
var gamelink1 = "../"+linkparameters;

/*
function blank(){
    var domain = window.location.host;

    let inFrame
const popup = open("about:blank", "_blank")
if (!popup || popup.closed) {
    alert("Popups are disabled! Enable Popups for " +  domain);
} else {
    const doc = popup.document
    const iframe = doc.createElement("iframe")
    const style = iframe.style
    const link = doc.createElement("link")

    doc.title = "Bigfoot's Game Shack";
    link.rel = "icon";
    link.href = "link";


    iframe.src = gamelink;



    style.position = "fixed"
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = "none"
    style.width = style.height = "100%"

    doc.body.appendChild(iframe)

}

location.assign("../index.html#buttonDiv21");

}

*/

setTimeout(loading, 3200);

function loading() {
    location.assign(gamelink1);

}


