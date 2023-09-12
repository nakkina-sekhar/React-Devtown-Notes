import React from 'react';
const Template= () =>
{
  return(
    <div>
<nav class="nav-bar">
<h1>SEKHAR</h1>
    <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Services</a></li>
    <li><a href="/">Portfolio</a></li>
    <li><a href="/">Team</a></li>

    <li><select> 
        <option>Drop Down</option>
        <option>1</option>
        <option>2</option>
        </select></li>
    <li><a href="/">Contact</a></li>
    <li class="get"><a href="/">Get Started</a></li>
  </ul>
  </nav>

  <div class="main-content">
    <div class="section">
      <h2>Better Solutions For Your Business </h2>
      
      <p>We are team of talanted designers making websites with Bootstrap
      </p>
      <div class="content">
      <p>Get Started</p>&nbsp;&nbsp;
      <img src="https://www.pngmart.com/files/3/Play-Button-PNG-Image.png" class="logo" alt="video logo"></img>
      Watch Video</div>
    </div>
     </div>
     <div></div>
    </div>
     );
}
export default Template;

