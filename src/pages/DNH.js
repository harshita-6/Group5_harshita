import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const DNH = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Gujarat</h1>
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
                <th scope="row">POLICE CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>, <a href="callto:">0260-2220444</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE </th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">ENQUIRY</th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">EMERGENCY</th>
                <td className="fw-bold ">
                  <a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMAN HELPLINE </th>
                <td className="fw-bold ">
                  <a href="callto:"> 1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CHILD HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE & RESCUE</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-233-1000</a>
                </td>
              </tr>
              <tr>
                <th scope="row">RAILWAY ENQUIRY </th>
                <td className="fw-bold ">
                  <a href="callto:">135</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SENIOR CITIZEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1291</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DNH COVID-19 CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">1077</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DNH-FLOOD CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:"> 0260-2630304 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">TOLL FREE NUMBER</th>
                <td className="fw-bold ">
                  <a href="callto:"> 1800-4252727</a>
                </td>
              </tr>
              <tr>
                <th scope="row">COMPLAIN NUMBER</th>
                <td className="fw-bold ">
                  <a href="callto:"> 01126701728</a>
                </td>
              </tr>
              <tr>
                <th scope="row">POLICE CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">0260-2642033</a>
                </td>
              </tr>
              <tr>
                <th scope="row">IRB CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">0260-2645276</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FLOOD CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">0260-2630304</a>
                </td>
              </tr>
              <tr>
                <th scope="row">NMDA CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">080-26961629</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default DNH
