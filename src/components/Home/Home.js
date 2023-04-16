import React from 'react';
import './Home.css';
import me from './me.jpg';
const Home=()=>{
  return (
    <div class="tc">
      <h1 class="relative z-5 f-8-l">Harshita Raj</h1>
      <img src={me} class="w-20 nt6 head-img" alt="hello"/>
      <h1 class=" portfolio z-5 f-9-l relative fw1">PORTFOLIO</h1>
      <h2 class="des mb0 f5-m fw1">Code Enthusiast</h2>
    </div>
  );
}
export default Home;
