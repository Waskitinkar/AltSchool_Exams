
// const User = () => {
//     return (
//       <div>
//         <h1 style={{ fontSize: '58px', fontWeight: 400 }}>User Page</h1>
//       </div>
//     );
//   };
  
//   export default User;

  import { useState } from 'react';
import useFetch from './useFetch';

function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
    console.log({ loading, error, data });
  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 50;
  const skip = page * PER_PAGE - PER_PAGE;
  console.log(skip, total);
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="App">
      <h1>Learning Pagination Firebase</h1>
      <h2 className="title">List of Users</h2>
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
    </div>
  );
}

export default User;
