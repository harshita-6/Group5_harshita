import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
const Haryana = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Haryana</h1>
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
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE ( MEDICAL HELP )</th>
                <td className="fw-bold ">
                  <a href="callto:">102, 2782457</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE HELPLINE </th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police</th>
                <td className="fw-bold ">
                  <a href="callto:"> 100 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN HELPLINE ( DOMESTIC ABUSE )</th>
                <td className="fw-bold ">
                  <a href="callto:">181</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row"> RAILWAYS ENQUIRY</th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Hospital Emergency (P.G.I)</th>
                <td className="fw-bold ">
                  <a href="callto:">2746018,2747005</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-180-1111</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Blood Bank (P.G.I)</th>
                <td className="fw-bold ">
                  <a href="callto:">2747585-94</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railway Accident Emergency Service</th>
                <td className="fw-bold ">
                  <a href="callto:">1072</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Road Accident Emergency Service</th>
                <td className="fw-bold ">
                  <a href="callto:"> 1073 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Road Accident Emergency Service On National Highway For
                  Private Operator
                </th>
                <td className="fw-bold ">
                  <a href="callto:"> 1033 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Kisan Call Centre</th>
                <td className="fw-bold ">
                  <a href="callto:">1551</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Road Accident</th>
                <td className="fw-bold ">
                  <a href="callto:">1073</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Relief Commissioner For Natural Calamities </th>
                <td className="fw-bold ">
                  <a href="callto:"> 1070</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Children Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Helpdesk Toll Free No.</th>
                <td className="fw-bold ">
                  <a href="callto:">18001802128</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Haryana
