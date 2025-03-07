function Header() {
    return (
      <div className="header">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s' width={55} height={50} />
        <h1 className='inline'>React Facts</h1>
        <ul className='headerUL'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
export default Header;