

export default function Navbar(props) {
  
    return (
      <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            tadarab
            <span>ماذا تريد ان تتعلم اليوم؟</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                  data-toggle="dropdown" aria-expanded="false">
                  إستكشف
                </a>
              </li>
              <form className="form-inline">
                <input className="form-control" type="search" placeholder="إكتشف هواياتك" />
                <i className="fas fa-search fa-fw"></i>
              </form>
              <li className="nav-item">
                <a className="nav-link" href="#">تدرب الشركات</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">إنضم كمدرب</a>
              </li>
              <li className="nav-item">
                <a className="nav-link signup" href="#">حساب جديد</a>
              </li>
              <li className="nav-item">
                <a className="nav-link login" href="#">تسجيل دخول</a>
              </li>
              <div className="icon">
                <i className="fas fa-cart-arrow-down fa-fw"></i>
                <span className="shoping-calc">2</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      </>
  )
}