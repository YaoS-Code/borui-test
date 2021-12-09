
function Footer() {
 
  
  var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/borui.link/hangman");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('visits').innerText = `Views Count: ${this.response.value}.`;
    }
    xhr.send();
  
    

  return (
  <div className="Footer">
    
    <div id="visits">Visits</div>

  </div>
  
)}

export default Footer;
