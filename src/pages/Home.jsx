// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import About from './About';
// import Overview from '../Components/Overview/Overview';
import '../Components/Overview/HomeOverview.css';


export default function Home() {
  return (
    <div>
      <div>
           </div>
    <div className='Text4' id="home">
      <h1>N E R C</h1>
      <HashLink
        to="#home"
        smooth
        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
      >
        Quick insight to Learn about US  
      </HashLink>
      - - -
       
      <section style={{ marginBottom: '100px' }}>
       TO HAVE A RIGHT TO VOTE & BE VOTED FOR  

       <div className='Text1'>
      <h1>HOME</h1><br></br>
       <h4>VOTING IS YOUR RIGHT!!!</h4>
       </div>
      <div className='Text2'><h4>YOU can't afford to loose it</h4></div>
  <div className='Text3'><p>INTRODUCTION The Nigerian Government has constituted Nigerian Electoral Registration Council as the regulatory body for all pre and post elections.
    The Nigerian Governing states, thirty six in Numbers, re well representred by Honorable Commisioners in the administrative 
    sections of the NERC body. It contains data about this Electoral Party, Voters, and casted votes.   </p> </div>
    <div className='row1'>
      <button id='btn1'>EXECUTIVE ARM OF GOVERNMENT </button>
    <button id='btn2'>JUDICIARY</button>
    <button id='btn3'>LEGISLATIVE</button>
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
      <a href="#home">Back To The Top</a> 
            
    </div>
    
    </div>
  );
}
