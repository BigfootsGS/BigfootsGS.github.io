var linkparameters = location.search.split('url=')[1];


var protocall = window.location.protocol;
var domain = window.location.host;
var gamelink = protocall+domain+"/g/"+linkparameters;
var gamelink1 = "../"+linkparameters;


setTimeout(loading, 3200);

function loading() {
    location.assign(gamelink1);

}


