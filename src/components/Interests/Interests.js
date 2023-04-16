import React from 'react';
import 'tachyons';
import art1 from './art1.jpg';
import art2 from './art2.jpg';
import art3 from './art3.jpg';
import './Interests.css';
const Interests=()=>{
  return(
    <div class="Contact-me absolute tc pb3">
    <h1 class="f1 tc fw1 ">MY INTERESTS</h1>


        <p>
          <table>
            <tr>
              <td><img src={art1} class="i1 relative " alt=""/></td>
              <td><img src={art2} class="i2 relative" alt=""/></td>
              <td><img src={art3} class="i3 relative" alt=""/></td>
            </tr>
            <tr>
              <td><p class="in-des1 relative f2">Creating Blogs</p></td>
              <td><p class="in-des2 top-2 relative f2">Protecting your junk</p></td>
              <td><p class="in-des3 relative f2">Let your Artist live</p></td>
            </tr>
            <tr>
              <td><p class="in-elab1  top--2-m f5 relative ">providing shareable contents for<br/> some great discussions</p></td>
              <td><p class="top-1-m f5 relative">A reminder of the issues <br/>our planet is facing</p></td>
              <td><p class="in-elab3 top--2-m f5 relative">If I could say it in words there <br/>would be no reason to paint.</p></td>
            </tr>
          </table>

        </p>
      </div>
  );

}
export default Interests;
