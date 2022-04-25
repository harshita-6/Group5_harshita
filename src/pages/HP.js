import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const HP = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Himachal Pradesh
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
                <th scope="row">POLICE </th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance/Medical</th>
                <td className="fw-bold ">
                  <a href="callto:">102, 108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Disaster Management Control Room</th>
                <td className="fw-bold ">
                  <a href="callto:">01772812344</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Cyber Crime Cell</th>
                <td className="fw-bold ">
                  <a href="callto:">191, 01772621714</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline </th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Gudiya Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1515</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Fire</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Disaster Management</th>
                <td className="fw-bold ">
                  <a href="callto:">1070, 1077</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Report Against Corruption</th>
                <td className="fw-bold ">
                  <a href="callto:">01772629813</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Hoshiyar Singh Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1090</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default HP
