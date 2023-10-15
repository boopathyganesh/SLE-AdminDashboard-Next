import '@styles/globals.css'

const Sidebar = () => {
  return (
    <div>
      <aside className="left-sidebar">
      {/* <!-- Sidebar scroll--> */}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img src="../assets/images/logos/sle_logo.png" width="180" alt="" />
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        {/* <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./index.html" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description"></i>
                </span>
                <span className="hide-menu">Forms</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Products</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./product.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture"></i>
                </span>
                <span className="hide-menu">Product Management</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Orders</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./orders.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture"></i>
                </span>
                <span className="hide-menu">Order Management</span>
              </a>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-voilet position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-white w-85">Welcome Admin !</h6>
              </div>
              <div className="unlimited-access-img">
                <img src="../assets/images/backgrounds/rocket.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- End Sidebar navigation --> */}
      </div>
      {/* <!-- End Sidebar scroll--> */}
    </aside>
    </div>
  )
}

export default Sidebar
