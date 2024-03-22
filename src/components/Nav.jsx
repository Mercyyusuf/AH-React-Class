import './Nav.css';

const Nav = () => {
  return (
    <>
    <nav className="nav-container">
      <div className="logo">
        <h2>CatPhotoApp</h2>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav