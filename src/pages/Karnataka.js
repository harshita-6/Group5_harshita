import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Karnataka = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Karnataka
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
                <th scope="row">POLICE DEPARTMENT</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">State Helpline Number</th>
                <td className="fw-bold ">
                  <a href="callto:">1902</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN'S HELPLINE</th>
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
                <th scope="row">Department of Health and Family Welfare</th>
                <td className="fw-bold ">
                  <a href="callto:">104</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Department of Food and Civil Supplies</th>
                <td className="fw-bold ">
                  <a href="callto:"> 1967 / 18000-425-9339</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Department of Agriculture</th>
                <td className="fw-bold ">
                  <a href="callto:">08022212818/08022210237</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Department of Public Grievances</th>
                <td className="fw-bold ">
                  <a href="callto:">08044554455</a>
                </td>
              </tr>
              <tr>
                <th scope="row">BBMP</th>
                <td className="fw-bold ">
                  <a href="callto:">08022660000</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Department of Labor </th>
                <td className="fw-bold ">
                  <a href="callto:">155214</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Bescom</th>
                <td className="fw-bold ">
                  <a href="callto:">1912</a>
                </td>
              </tr>
              <tr>
                <th scope="row">BWSSB</th>
                <td className="fw-bold ">
                  <a href="callto:">1916</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Department of Social Welfare</th>
                <td className="fw-bold ">
                  <a href="callto:">155214</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Under Mahatma Gandhi National Rural Employment Guarantee
                  Scheme (Narega)
                </th>
                <td className="fw-bold ">
                  <a href="callto:">18004258666</a>
                </td>
              </tr>

              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-4259-7777</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Karnataka
