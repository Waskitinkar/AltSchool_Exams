import { Link, Outlet } from 'react-router-dom';

export default function Electoral() {
  return (
    <div>
      <h1>Electoral Parties</h1>
      <ul>
        {['NDP', 'ANN', 'APC', 'PDP'].map((item) => (
          <li>
            <Link to={`/items/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
