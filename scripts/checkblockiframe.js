// URLs to be loaded in the iframe
const urls = [
    "https://mathematics-pm5kizfgga-uw.a.run.app/service/hvtrs8%2F-hwb%2Canignju%60.zyx%2Fqhmw%3Duvm%5Dmgdkuo%3D%60iefmov",
  ];
  
  // Function to replace the iframe with a new URL
  function replaceIframe(url) {
    const iframe = document.getElementById("adframe");
    iframe.src = url;
  }
  
  // Function to handle the iframe load error
  function handleLoadError() {
    const currentUrl = urls.shift();
    if (currentUrl) {
      replaceIframe(currentUrl);
    } else {
      console.log("All URLs failed to load");
      iframe.style.display = "none"
    }
  }
  
  // Function to handle the iframe load success
  function handleLoadSuccess() {
    console.log("Iframe loaded successfully");
  }
  
  // Add event listeners to the iframe
  const iframe = document.getElementById("adframe");
  iframe.onload = handleLoadSuccess;
  iframe.onerror = handleLoadError;
  
  // Load the initial URL
  replaceIframe(urls[0]);
  