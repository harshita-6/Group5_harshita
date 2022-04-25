import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const AP = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Andhra Pradesh
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
                  <a href="callto:">100</a>,<a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE SERVICE</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE </th>
                <td className="fw-bold ">
                  <a href="callto:">108</a> ,<a href="callto:"> 102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DISHA HELPLINE </th>
                <td className="fw-bold ">
                  <a href="callto:"> 181 </a>,<a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SPANDANA ( CITIZEN GREVIENCE CENTRE )</th>
                <td className="fw-bold ">
                  <a href="callto:">1902</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CORRUPTION GREVIENCES</th>
                <td className="fw-bold ">
                  <a href="callto:">14400</a>
                </td>
              </tr>
              <tr>
                <th scope="row">RAILWAYS ENQUIRY </th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-425-8525</a>
                </td>
              </tr>
              <tr>
                <th scope="row">A.M.O.H-I, Vijayawada</th>
                <td className="fw-bold ">
                  <a href="callto:">9866514148 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">MEDICOVER HOSPITAL NELLORE' </th>
                <td className="fw-bold ">
                  <a href="callto:">040-68334455</a>
                </td>
              </tr>
              <tr>
                <th scope="row">ANDHRA HOSPITAL VIJAYWADA0866</th>
                <td className="fw-bold ">
                  <a href="callto:">2417577</a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">MANIPAL HOSPITAL , VIJAYWADA</th>
                <td className="fw-bold ">
                  <a href="callto:">0866-2222111</a>
                </td>
              </tr>
              <tr>
                <th scope="row">ANDHRA HOSPITAL HEART AND BRAIN</th>
                <td className="fw-bold ">
                  <a href="callto:">0866-2442333</a>
                </td>
              </tr>
              <tr>
                <th scope="row">VIRRD TRUST HOSPITAL ( West Godavari Dist )</th>
                <td className="fw-bold ">
                  <a href="callto:">08829 - 271176</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default AP
