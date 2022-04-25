import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Ladakh = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Ladakh</h1>
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
                <th scope="row">Social Welfare Schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252585</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Rural Development Schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252458</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FCS & CA</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252376</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Tourism schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252297</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Agriculture schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252028</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Horticulture Schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252920</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Employment schemes</th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252249</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Health Schemes </th>
                <td className="fw-bold ">
                  <a href="callto:">01982-252012</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Control Room</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Fire Service</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Medical Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Election Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1950</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Ladakh
