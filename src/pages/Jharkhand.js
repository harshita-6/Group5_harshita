import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Jharkhand = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Jharkhand
        </h1>
        <div
          className="row row-header justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <table
            class="table table-bordered table-striped"
            style={{ paddingBottom: "50px" }}
          >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col ">
                  <h3></h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">POLICE</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE</th>
                <td className="fw-bold ">
                  <a href="callto:">101,0651-2283825 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE </th>
                <td className="fw-bold ">
                  <a href="callto:">102, 108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline ( Police )</th>
                <td className="fw-bold ">
                  <a href="callto:">9771432103</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child helpline ( Police )</th>
                <td className="fw-bold ">
                  <a href="callto:">8877444444</a>
                </td>
              </tr>
              <tr>
                <th scope="row">H.E.C Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">2408525</a>
                </td>
              </tr>

              <tr>
                <th scope="row">Sadar Hospital Rachi </th>
                <td className="fw-bold ">
                  <a href="callto:">9709016627</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Red Cross Blood Bank</th>
                <td className="fw-bold ">
                  <a href="callto:">834005, 309290, 308587</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Voluntary Blood Donors Association</th>
                <td className="fw-bold ">
                  <a href="callto:">834002, 500576</a>
                </td>
              </tr>
              <tr>
                <th scope="row">State Tourism Bus Stand</th>
                <td className="fw-bold ">
                  <a href="callto:">2314826, 2306941</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Bisra Bus Stand</th>
                <td className="fw-bold ">
                  <a href="callto:">2301622, 2304328</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Cyber Crime</th>
                <td className="fw-bold ">
                  <a href="callto:">9771432133</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Terrorist Activities</th>
                <td className="fw-bold ">
                  <a href="callto:">9771438670 </a>
                </td>
              </tr>
              <tr>
                <th scope="row"> Anti Corruption Bureau</th>
                <td className="fw-bold ">
                  <a href="callto:">0651-2281530</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Jharkhand
