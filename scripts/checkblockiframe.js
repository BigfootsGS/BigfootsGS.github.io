// URLs to be loaded in the iframe
const urls = [
    "https://hub.alienhub.xyz/show?utm_medium=bigfoot",
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
  