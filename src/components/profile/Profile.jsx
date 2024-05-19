import './Profile.css'

function Profile() {
  return (

<section className="videos p-3 p-md-4 p-xl-5">
  <div className="container module-profile  my-card">
    <div className="card-profile border-light-subtle shadow-sm">
      <div className="row g-0">
        <div className="col-12 col-md-12">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h3>Log in</h3>
                </div>
              </div>
            </div>
            <form action="#!">
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                  <input type="password" className="form-control" name="password" id="password" defaultValue="" required />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue="" name="remember_me" id="remember_me" />
                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4 border-secondary-subtle"></hr>
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                  <a href="#!" className="link-secondary text-decoration-none">Create new account</a>
                  <a href="#!" className="link-secondary text-decoration-none">Forgot password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Profile