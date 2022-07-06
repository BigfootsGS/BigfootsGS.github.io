/*//buttonDiv Games Array
                function buildgames(){
                let mobile = "<i class='ri-device-line'></i>";
                let computer = "<i class='ri-computer-line'></i>"
                var gameslist = [{
                    //Action games 
                    "icon": mobile,
                    "category": "buttonDiv",
                    "name": "Temple Run 2",
                    "url": "https://bigfoot9999.github.io/html5-games/games/templerun2/",
                }, {
                    "category": "buttonDiv",
                    "name": "Slope Game",
                    "url": "https://bigfoot9999.github.io/Slope-Game/",
                    "icon": computer,
                }, {
                    "category": "buttonDiv",
                    "name": "Run 3",
                    "url": "https://theadvancedsociety-tam.tbt.mx/tam-run3/",
                    "icon": computer,
                }, 
                {
                    "category": "buttonDiv",
                    "name": "Burrito Bison",
                    "url": "https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/607721921917323670/burrito-bison-ll.html",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "Google doodle champion island",
                    "url": "https://bigfoot9999.github.io/html5-games/games/google-kitsune/",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "The Legend of Zelda: Link to the Past",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#zelda_past",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "The Legend of Zelda: Minish Cap",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#zelda_minish",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "Mario Party",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#marioparty",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "Mortal Kombat",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#mortal_kombat",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "Kuru Panda",
                    "url": "https://www.panda2.io/content/games/kurupanda/",
                    "icon": computer,
                },
                {
                    "category": "buttonDiv",
                    "name": "Pappa's Taco Mia",
                    "url": "https://mazahacka2017.github.io/papa-taco-mia/",
                    "icon": computer,
                },
                //start retro games
                {
                    "icon": computer,
                    "category": "buttonDiv1",
                    "name": "Celeste",
                    "url": "https://rga-bigfoot9999.vercel.app/src/celeste/celeste.html"
                },{
                    "icon": computer,
                    "category": "buttonDiv1",
                    "name": "Chroma",
                    "url": "https://rga-bigfoot9999.vercel.app/src/chroma/index.html"
                },{
                    "icon": computer,
                    "category": "buttonDiv1",
                    "name": "Doodle Jump",
                    "url": "https://rga-bigfoot9999.vercel.app/src/doodle-jump/index.html"
                },{
                    "icon": computer,
                    "category": "buttonDiv1",
                    "name": "Economical",
                    "url": "https://rga-bigfoot9999.vercel.app/src/economical/index.html"
                },{
                    "icon": computer,
                    "category": "buttonDiv1",
                    "name": "Economical 2",
                    "url": "https://rga-bigfoot9999.vercel.app/src/economical2/index.html"
                },
                //start shooter games
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "1v1.lol",
                    "url": "https://advanced-channeler.02.gz-associates.com/?t=tam-1v1-lol",
                }, {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Zombs Royale",
                    "url": "https://theadvancedsociety-tam.tbt.mx/tmm-zombsroyale/",
                }, 
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Shell Shockers",
                    "url": "https://tam-shellshockers.arfotoarte.com/",
                }, 
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Blockpost.io",
                    "url": "https://ikatchelo.github.io/blockpost/",
                }, 
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Rooftop Snipers",
                    "url": "https://bigfoot9999.github.io/3kh0.github.io/projects/rooftop-snipers/",
                }, 
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Pixel Combat 2",
                    "url": "https://grandcanyonshuttles.com/uploads/5/0/5/6/5056555/custom_themes/607463927942590340/pixel-combat2.html",
                }, 
                {
                    "icon": computer,
                    "category": "buttonDiv2",
                    "name": "Modern Blocky Paint",
                    "url": "https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/593675271171586975/modern_blocky_paint_.html",
                }, 
            ]
//End Arrays 
let link = gameslist.url;
let name = gameslist.name;
let buttondivID = gameslist.category;
let proxiedlink = 'https://megaspaces.x-g-x.repl.co/main/'+ gameslist.url;
document.getElementById(`${gameslist.category}`).innerHTML += `${gameslist.icon}`;
document.getElementById(`${gameslist.category}`).innerHTML += `<button onClick="openGame('${link}')">${gameslist.name}</button><br>`;
let win;
function openGame(link) {
    if (win) {
        win.focus();
        return;
            }
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        const iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = link;
        win.document.body.appendChild(iframe);
                }
            }
buildgames();
function clear(){
    document.getElementById('buttonDiv').innerHTML = "";

    document.getElementById('buttonDiv1').innerHTML = "";

    document.getElementById('buttonDiv2').innerHTML = "";

    document.getElementById('buttonDiv3').innerHTML = "";

    document.getElementById('buttonDiv4').innerHTML = "";

}
*/