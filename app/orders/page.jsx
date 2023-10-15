import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import '@styles/globals.css'

export default function Orders() {
  return (
    <div className="body-wrapper">
      <Navbar />
      <div className="container-fluid">
        {/* <!--  Top 3 Cards --> */}
        <div className="row">
         {/* <!-- Column1 --> */}
         <div className="col-lg-4">
          {/* <!-- Yearly Breakup --> */}
          <div className="card overflow-hidden">
            <div className="card-body p-4">
              <h5 className="card-title mb-9 fw-semibold text-info">Products to be delivered</h5>
              <div className="row align-items-center">
                <div className="col-8">
                  <h4 className="fw-semibold mb-3">$36,358</h4>
                  <div className="d-flex align-items-center mb-3">
                    <span
                      className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                      <i className="ti ti-arrow-up-left text-success"></i>
                    </span>
                    <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                    <p className="fs-3 mb-0">last year</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                   <img src="../assets/images/logos/dash_1.png" alt="" srcSet="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* <!-- Column2 --> */}
          <div className="col-lg-4">
            {/* <!-- Yearly Breakup --> */}
            <div className="card overflow-hidden">
              <div className="card-body p-4">
                <h5 className="card-title mb-9 fw-semibold text-info">Income Progress</h5>
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="fw-semibold mb-3">$36,358</h4>
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                        <i className="ti ti-arrow-up-left text-success"></i>
                      </span>
                      <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                      <p className="fs-3 mb-0">last year</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center">
                     <img src="../assets/images/logos/dash-2.png" alt="" srcSet="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Column3 --> */}
          <div className="col-lg-4">
            {/* <!-- Yearly Breakup --> */}
            <div className="card overflow-hidden">
              <div className="card-body p-4">
                <h5 className="card-title mb-9 fw-semibold text-info">Expense Progress</h5>
                <div className="row align-items-center">
                  <div className="col-8">
                    <h4 className="fw-semibold mb-3">$36,358</h4>
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                        <i className="ti ti-arrow-up-left text-success"></i>
                      </span>
                      <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                      <p className="fs-3 mb-0">last year</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center">
                     <img src="../assets/images/logos/dash-3.png" alt="" srcSet="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  Income, Expense Chart --> */}
        <div className="row">
          <div className="col-lg-12 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">Income &amp; Expenditure Analysis</h5>
                  </div>
                  <div>
                    <select className="form-select">
                      <option value="1">Year 2022</option>
                      <option value="2">Year 2023</option>
                      <option value="3">Year 2024</option>
                      <option value="4">Year 2025</option>
                    </select>
                  </div>
                </div>
                <div id="chart"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  Recent Analysis --> */}
        <div className="row">
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <div className="mb-4">
                  <h5 className="card-title fw-semibold">Calendar</h5>
                </div>
                <div id="calendar"></div>
                <div id='formDiv'>
                  <fieldset style={{padding:"0 20px 20px 20px"}}>
                    <legend>
                      <h2> Add An Event </h2>
                    </legend>
                    <form name='myForm' onsubmit="myFunc()">
                      <table>
                        <tr>
                          <td>Name:</td>
                          <td><input type="text" name="eventName" id="eventName" required /></td>
                        </tr>
                        <tr>
                          <td>Type:</td>
                          <td style={{display:"flex"}}>
                            <select className="selectMenu" id="eventType" name="eventType" onchange="displayCol()" required>
                            <option value="">Select One</option>
                            <option value="Event">Event</option>
                            <option value="Leisure">Leisure</option>
                            <option value="Imp">Important</option>
                            </select>
                            <div id="eventColor"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>Date:</td>
                          <td><input type="date" name="eventDate" id="eventDate" required /></td>
                        </tr>
                        <tr>
                          <td><input type="submit" id="addEventBTN" value="Add Event" /></td>
                          <td><button id="closeBTN" onclick="closeForm()" form="noForm">Close Window</button></td>
                        </tr>
                      </table>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">Delivery Progress (Monthly)</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
      <Footer />
    </div>
  )
}
