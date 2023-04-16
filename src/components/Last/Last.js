import React from 'react';
import 'tachyons';
import './Last.css';
import pc1 from './final-pc1.jpg';
import pc2 from './final-pc2.jpg';
const Last=()=>{
  return(
    <div class="last tc absolute w-100 left-0 pt7 pb2 pl0 pr0">
    <div>
    <p class="final1 f-6 fw1">I WAS</p>
    <p class="final2 nt4 f-5 b">CREATED</p>
    <img src={pc1} class="final-pc1 fr w-10"alt=""/><br/>
    <img src={pc2} class="final-pc2 top-0 fl w-10 relative" alt=""/>
    <p class="final3 mr0 nt1 f-6 fw1">TO CREATE</p>
    
    <p class="ma1 dib washed-blue"><a href="https://linkedin.com/in/harshita-raj-18488320a" target="_blank">linkedIn</a></p>
    <p class="ma1 dib washed-blue"><a href="https://twitter.com/Harshit11731361?t=zIL_dpYp15zYEZ_rlveypA&s=08 " target="_blank">Twitter</a></p>
    <p class="ma1 washed-blue dib"><a href="https://github.com/HarshitaRaj17" target="_blank">Github</a></p>

  </div>
  <p class="pt1 pb1 b--black">@2021 Harshita Raj <a href="https://www.instagram.com/art_aurae/" target="_blank">@art_aura7</a></p>
</div>
);
}
export default Last;
