import React, { Component }  from 'react';
import { useTranslation } from "react-i18next"

function Footer() {
 
const { t } = useTranslation()
  
  var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/borui.link/");
    xhr.responseType = "json";
    xhr.onload = function() {
      const myCount = 1500+Math.round(this.response.value / 3)
      document.getElementById('visits').innerText =` ${t("Views_Count")} ${myCount}.`;
    }
    xhr.send();
  
    

  return (
  <div className="Footer">
    
    <div id="visits">Visits</div>

  </div>
  
)}

export default Footer;
