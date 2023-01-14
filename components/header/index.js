import Link from 'next/link';
import '../../styles/Header.module.css';
const Header = () => {
  return (
    <div className="header">
      <Link href="/billboard" className="logo"></Link>
      <div className="nav">
        <ul>
          <li>
            <Link href="/billboard">Billboard</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/functions">Functions</Link>
          </li>
          <li>
            <Link href="/tickets">Tickets</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
