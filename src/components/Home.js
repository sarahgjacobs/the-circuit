
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <section>
        <div class="edge-gradient top-gradient"></div>

      <h1>The Circuit</h1>
      <div class="circle__box">
  <div class="circle__wrapper circle__wrapper--right">
    <div class="circle__whole circle__right"></div>
  </div>
  <div class="circle__wrapper circle__wrapper--left">
    <div class="circle__whole circle__left"></div>
  </div>
</div>
<div class="container">
<Link to="/characters" class="button">Enter The Circuit</Link>
        <br />
<a href="https://github.com/sarahgjacobs">Github</a>
</div>
    </section>
  );
}

export default Home;
