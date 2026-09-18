export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="nav-menu">
        CINELABS
      </a>
      <nav>
        <a href="/" className="nav-item nav-item-active">Movies</a>
        <a href="/" className="nav-item">TV Series</a>
        <a href="/" className="nav-item">FAQ</a>
      </nav>
    </header>
  );
}
