import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const MP = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Madhya Pradesh
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
                  <a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">C.M. HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">181</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>,<a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline Number</th>
                <td className="fw-bold ">
                  <a href="callto:">109, 1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">We Care for You (Indore)</th>
                <td className="fw-bold ">
                  <a href="callto:">0731-2522111</a>
                </td>
              </tr>
              <tr>
                <th scope="row">We Care for You (Gwalior)</th>
                <td className="fw-bold ">
                  <a href="callto:">0751-2522100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railways Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Indian Airlines Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">143</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Sarvate Bus Stand</th>
                <td className="fw-bold ">
                  <a href="callto:">24656888</a>
                </td>
              </tr>
              <tr>
                <th scope="row">BLOOD BANK</th>
                <td className="fw-bold ">
                  <a href="callto:">1910</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SNAKE PICKER</th>
                <td className="fw-bold ">
                  <a href="callto:">9179137698</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SENIOR CITIZEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">0731-2510308</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CITY MUNICIPAL CORPORATION ( M.P ONLY ) </th>
                <td className="fw-bold ">
                  <a href="callto:">0731-253 5555</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-233-4035</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default MP
