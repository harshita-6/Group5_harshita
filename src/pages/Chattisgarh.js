import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const Chattisgarh = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Chattisgarh
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
                  <a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Sanjivani Express</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Health Care and Health Counseling Center</th>
                <td className="fw-bold ">
                  <a href="callto:">104</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Mahatari Express </th>
                <td className="fw-bold ">
                  <a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Flood Control Room -Collectorate Raipur </th>
                <td className="fw-bold ">
                  <a href="callto:">0771-2413233</a>
                </td>
              </tr>
              <tr>
                <th scope="row">COVID</th>
                <td className="fw-bold ">
                  <a href="callto:">104</a>,
                  <a href="callto:"> 190771-2235091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a> ,<a href="callto:"> 233473</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Electricity problem </th>
                <td className="fw-bold ">
                  <a href="callto:">1912</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Bal Adhikar Sanrakshan Aayog</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-233-0055</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN </th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Kisan Call Center </th>
                <td className="fw-bold ">
                  <a href="callto:">1800-180-1551</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railway </th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PMJDY</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-233-4358</a>
                </td>
              </tr>
              <tr>
                <th scope="row">For complaints related to Ration Card </th>
                <td className="fw-bold ">
                  <a href="callto:">1800-233-3663 </a>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Chattisgarh
