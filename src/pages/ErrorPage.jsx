import { HashLink } from 'react-router-hash-link';
import '../Components/Overview/ErrorOverview.css'


const ErrorPage = () => {
  return (
    <div>
       <div id="about">
 {
 (
      <div id="about">
        <h1>N E R C</h1>
        <section style={{ marginBottom: '5rem' }}>
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

      <div id='ErrorResult'>
      <h1 style={{ fontSize: '58px', fontWeight: 400 }}>404 Page</h1>
</div>
    </div>
  );
};

export default ErrorPage;


