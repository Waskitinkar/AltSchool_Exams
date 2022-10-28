import { HashLink } from 'react-router-hash-link';

export default function About({ isHome }) {
  if (isHome) {
    return (
      <div id="about">
        <h1>About Inside Home</h1>
        <section style={{ marginBottom: '50rem' }}>
          <HashLink
            to="/#home"
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
    );
  }
  return (
    <div id="about">
      <h4> The Nigerian Electoral Registration Database was created in 1960 to protect the authenticity of casted votes.</h4><br></br>
      <h4>It is of extreme importance that every bonafide Nigerian cast their votes wisely. The result of each election is protected by this database.</h4>
    </div>
  );
}
