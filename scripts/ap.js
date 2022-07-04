                function buildzero(){
                let mobile = "<i class='ri-device-line'></i>";
                let computer = "<i class='ri-computer-line'></i>"
                var buttonArr = [{
                    "icon": mobile,
                    "category": "Action",
                    "name": "Temple Run 2",
                    "url": "https://bigfoot9999.github.io/html5-games/games/templerun2/",
                }, {
                    "category": "Action",
                    "name": "Slope Game",
                    "url": "https://bigfoot9999.github.io/Slope-Game/",
                    "icon": computer,
                }, {
                    "category": "Action",
                    "name": "Run 3",
                    "url": "https://theadvancedsociety-tam.tbt.mx/tam-run3/",
                    "icon": computer,
                }, 
                {
                    "category": "Action",
                    "name": "Burrito Bison",
                    "url": "https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/607721921917323670/burrito-bison-ll.html",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "Google doodle champion island",
                    "url": "https://bigfoot9999.github.io/html5-games/games/google-kitsune/",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "The Legend of Zelda: Link to the Past",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#zelda_past",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "The Legend of Zelda: Minish Cap",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#zelda_minish",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "Mario Party",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#marioparty",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "Mortal Kombat",
                    "url": "https://t-rexrunner.github.io/GBA-Games/launcher.html#mortal_kombat",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "Kuru Panda",
                    "url": "https://www.panda2.io/content/games/kurupanda/",
                    "icon": computer,
                },
                {
                    "category": "Action",
                    "name": "Pappa's Taco Mia",
                    "url": "https://mazahacka2017.github.io/papa-taco-mia/",
                    "icon": computer,
                },
                
            
            ]

             //end array for game links
    
                buttonArr.forEach(function(arrayItem) {

                    //searchArr.push(arrayItem.name);
                    let link = arrayItem.url;
                    let name = arrayItem.name;
                    let category = arrayItem.category;
                    let proxiedlink = 'https://megaspaces.x-g-x.repl.co/main/'+ arrayItem.url;
                    document.getElementById('buttonDiv').innerHTML += `${arrayItem.icon}`;
            
             
                    document.getElementById('buttonDiv').innerHTML += `<button onClick="openGame('${link}')">${arrayItem.name}</button><br>`;
                    document.addEventListener('DOMContentLoaded', function () {
                    var checkbox = document.querySelector('input[type="checkbox"]');
                    checkbox.addEventListener('change', function () {
                  
                    if (checkbox.checked) {  
                            clear();
                            proxythelink();
                            document.getElementById('buttonDiv').innerHTML += `${arrayItem.icon}`;
                            document.getElementById('buttonDiv').innerHTML += `<button onClick="openGame('${proxiedlink}')">${arrayItem.name}</button><br>`;
                            
                } else {
                            document.getElementById('buttonDiv').innerHTML += `${arrayItem.icon}`;
                            document.getElementById('buttonDiv').innerHTML += `<button onClick="openGame('${proxiedlink}')">${arrayItem.name}</button><br>`;
                }
                     });
                     });
                     
                    } );
                
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
                }}