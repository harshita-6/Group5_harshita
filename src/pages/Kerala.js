import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Kerala = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Kerala</h1>
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
                <th scope="row">Crime Stopper</th>
                <td className="fw-bold ">
                  <a href="callto:">1090</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Pink Police Partol Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1515</a>
                </td>
              </tr>
              <tr>
                <th scope="row">C.M. HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance Support</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline Number</th>
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

export default Kerala
