

export default function Navbar(props) {
  
    return (
      <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            tadarab
            <span>ماذا تريد ان تتعلم اليوم؟</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                  data-toggle="dropdown" aria-expanded="false">
                  إستكشف
                </a>
              </li>
              <form class="form-inline">
                <input class="form-control" type="search" placeholder="إكتشف هواياتك" />
                <i class="fas fa-search fa-fw"></i>
              </form>
              <li class="nav-item">
                <a class="nav-link" href="#">تدرب الشركات</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">إنضم كمدرب</a>
              </li>
              <li class="nav-item">
                <a class="nav-link signup" href="#">حساب جديد</a>
              </li>
              <li class="nav-item">
                <a class="nav-link login" href="#">تسجيل دخول</a>
              </li>
              <div class="icon">
                <i class="fas fa-cart-arrow-down fa-fw"></i>
                <span class="shoping-calc">2</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      </>
  )
}