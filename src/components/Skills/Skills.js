import React from 'react';
import 'tachyons';
import './Skills.css';
import skill from './skill.jpg';
const Skills=()=>{
  return (
    <div class="skill pb6 absolute left-0">
    <h1 class="heading1 fw1 relative f-5 z-5 normal-ns">SKILL & <br/> EXPERTISE</h1>
    <div class="ml7">
       <p>
          <table>
            <tr>
              <td><img src={skill} class="relative bottom-2" alt=""/></td>
              <td class="w-70 lh-copy-l">
                <ul class="dashed list skill-list mt7 mr0 nb3 fl tl" >
                  <li>React</li>
                  <li>Web Design</li>
                  <li>Javascript</li>
                  <li>OOPS with Java</li>
                  <li>Machine learning and AI with python</li>
                  <li>Frontend coding</li>
                  <li>Problem Solving</li>
                </ul>
              </td>
            </tr>
          </table>
        </p>
        </div>
        </div>
  );
}
export default Skills;
