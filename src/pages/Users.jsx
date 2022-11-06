import { useState } from 'react';
import useFetch from './useFetch';
import { HashLink } from 'react-router-hash-link';
import '../Components/Overview/UsersOverview.css'


function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
    console.log({ loading, error, data });
  const PER_PAGE = 4;
  const total = data?.results?.length;
  const pages = 10;
  const skip = page * PER_PAGE - PER_PAGE;
  console.log(skip, total);

  
  if (loading) {
    return <>
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
  
  <div id='UserResult'>Loading...</div>
  </>;
  }

  if (!loading && error) {
    return <>
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
          Back To The Top
        </HashLink>
      </section>
      
    </div>
  )
}
</div>

<div id='UserResult'>Error</div>
</>;
  }

  return (
    
    <div className="App">
      
      <div><div id="about">
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
            Back To The Top
          </HashLink>
        </section>
        
      </div>
    )
  }
  </div></div>
  
  <div id='Result'>
      <h1>REGISTERED VOTERS FOR THE ELECTION</h1>
      <h2 className="title">List of Voters</h2>
      {data?.results
        .slice(skip, skip + PER_PAGE)
        .map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      }
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
    </div></div>
  );
}

export default User;
