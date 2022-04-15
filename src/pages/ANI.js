import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Help = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Andaman and Nicobar Islands
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
                <th scope="col">#</th>
                <th scope="col ">
                  <h3>State-Wise</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">POLICE CONTROL ROOM</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE SERVICE</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE </th>
                <td className="fw-bold ">
                  <a href="callto:">232102</a> ,<a href="callto:"> 233473</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SHIPPING </th>
                <td className="fw-bold ">
                  <a href="callto:"> 245555 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">POSTAL HELP LINE</th>
                <td className="fw-bold ">
                  <a href="callto:">232346</a> ,<a href="callto:"> 232890</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN </th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CHILDREN </th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">COAST GUARD</th>
                <td className="fw-bold ">
                  <a href="callto:">155211</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-345-4545</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DISASTER MANAGEMENT CONTROL </th>
                <td className="fw-bold ">
                  <a href="callto:">1070 </a> ,<a href="callto:"> 238881</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Help
