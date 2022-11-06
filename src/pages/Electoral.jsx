import { Link, Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../Components/Overview/ElectoralOverview.css'



export default function Electoral({ isHome }) {
  return (
    <div >
   <div id="about">
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
      <h1>ELECTORAL</h1><br></br>
       <h4>VOTING IS YOUR RIGHT!!!</h4>
       </div>
       <Outlet id='Outlet'/>
      <div className='Text2'><h4>YOU can't afford to loose it</h4></div>
  <div className='Text3'><h5>Casting your vote is your right. <i>Vote</i> rightly and <i>Vote</i> correctly.</h5> </div>
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
    <h1>Electoral Parties</h1>
    <ul>
        {['NDP', 'rrt','ttt','FFF','TUYSH','DRTY','ANN', 'APC', 'PDP'].map((item) => (
          <li>
            <Link to={`/items/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <button id='btn1'>Overview</button>
    <button id='btn2'>Overview</button>
    <button id='btn3'>Overview</button>
    </div>
      </section>
      <a href="#about">Back To The Top</a> 
      </div>
    </div>
    <div>
      
      

    </div>
    </div>
  );
}
