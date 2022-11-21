

    console.warn(
        "%cREAD ME!",
        "color: black; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
        "If you know html, css, js, or just know a ton of games, we might be able to add you to our dev team! We have tons of benefits, including custom graphics for your website/logos, etc. All the graphics are custom, except for the bigfoot in our logo. Im not that good at detials lol. We also need people to add thumbnails to our main page. As you can probably tell, we need some help. If you are just trying to steal my games, they are on github. Just give me credit if you use my code (like the array code). I can tell if you steal it btw. Anyway have a good day :)"
      );
      var win;
      var link= "../g/glanding.html";

  
       

       
      
//
const getCode = (e) => {
  e = e || window.event;
  return e.key;
};
const handleKeyPress = (e) => {
  const key = getCode(e);
  if (key == 5) {
    const btn = document.getElementById('iframe');

    const el = document.getElementById('maincode');
    

      if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.style.display = 'none';
        applyUrl('https://bgs.pages.dev/images/logonew.png', "Bigfoot's Game Shack");

      } 
      
      else {
        applyUrl('https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico', 'Class notes - Google Docs');5

        el.style.display = 'none';
        btn.style.display = 'block';

      }
    console.log(`Number ${key} was pressed!`);
  }
};
document.addEventListener("keypress", handleKeyPress);
