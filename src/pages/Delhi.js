import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Delhi = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Delhi</h1>
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
                <th scope="row">FIRE AND RESCUE</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Doorstep Delivery</th>
                <td className="fw-bold ">
                  <a href="callto:">1076</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline Number</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Disaster Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1077</a>
                </td>
              </tr>
              <tr>
                <th scope="row">NGMS</th>
                <td className="fw-bold ">
                  <a href="callto:">155271</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Covid Helpine Number</th>
                <td className="fw-bold ">
                  <a href="callto:">011-22307145</a>
                </td>
              </tr>
              <tr>
                <th scope="row"> PWD Helpine</th>
                <td className="fw-bold ">
                  <a href="callto:">1800110093</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Businessmen/Taxatation Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">180042500025</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Water HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1916</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DDMA Helpine</th>
                <td className="fw-bold ">
                  <a href="callto:">1077</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Delhi
