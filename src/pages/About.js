import { HashLink } from 'react-router-hash-link';
import '../Components/Overview/AboutOverview.css'


export default function About({ isHome }) {
 
  return (
    <div >
      <div id="about">
 {
 (
      <div id="about">
        <h1>N E R C</h1>
        <section style={{ marginBottom: '0rem' }}>
          <HashLink
            to="/#about"
            smooth
            scroll={(el) => {
              console.log(el);
              el.scrollIntoView({ behavior: 'auto', block: 'end' });
            }}
          >
            {' '}
            Scroll Back To Home
          </HashLink>
        </section>
        
      </div>
    )
  }
  </div>
      
<div>
  
      
      <section style={{ marginBottom: '100px' }}>
       Company Motto This Database Contains the About Electoral Party, Voters, and casted votes.

       <div className='Text1'>
      <h1>AN OVERVIEW ABOUT US</h1><br></br>
       <h4>VOTING IS YOUR RIGHT!!!</h4>
       </div>
      <div className='Text2'><h4>YOU can't afford to loose it</h4></div>
  <div className='Text3'><p><h4> The Nigerian Electoral Registration Database was created in 1960 to protect the authenticity of casted votes.</h4><br></br>
      <h4>It is of extreme importance that every bonafide Nigerian cast their votes wisely. The result of each election is protected by this database.</h4>
      </p> </div>
    <div className='row1'>
      <button id='btn1'>Overview hjjju uuj uuuu hjjjm hhujuuu hjjkkkk </button>
    <button id='btn2'>Overview</button>
    <button id='btn3'>Overview</button>
    </div>

<div className='Text4'></div>

    <div className='row2'>
      <button id='btn1'>Overview</button>
    <button id='btn2'>Overview</button>
    <button id='btn3'>Overview</button>
    </div>
    <div className='row3'>
      <button id='btn1'>Overview</button>
    <button id='btn2'>Overview</button>
    <button id='btn3'>Overview</button>
    </div>
      </section>
      <a href="#about">Back To The Top</a> 
      </div>
    </div>
  );
}
