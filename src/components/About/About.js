import React from 'react';
import me1 from './me1.jpg';
import me2 from './me2.jpg';
import 'tachyons';
import './About.css';
const About=()=>{
  return(
    <div class="about absolute left-0 aspect-ratio--3x4">

      <h1 class="fw1 ml7 tl f-5">A LITTLE<br/>ABOUT ME</h1>
      <img src={me1} class="me1 w-20 fr"alt=""/>
      <img src={me2} class="me2 fr w-20" alt=""/>
      <p class="about-row w-40 tl lh-copy-ns">Software engineer with a proven ability to adapt<br/> in both self-starting and collaborative environment <br/>while staying focused on achieving high <br/>quality results under strict deadlines.</p>

    </div>
  );

}
export default About;
