import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
const JK = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Jammu and Kashmir
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
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE</th>
                <td className="fw-bold ">
                  <a href="callto:">101, 132</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AMBULANCE </th>
                <td className="fw-bold ">
                  <a href="callto:">102, 108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Headquaters Jammu</th>
                <td className="fw-bold ">
                  <a href="callto:">0191-2455113-15</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Headquaters Srinagar</th>
                <td className="fw-bold ">
                  <a href="callto:">0194-2443022-23</a>
                </td>
              </tr>
              <tr>
                <th scope="row">WOMEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CRPF MADADGAAR HELPLINE </th>
                <td className="fw-bold ">
                  <a href="callto:">9469793260, 14111</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DIRECTOR HEALTH SERVICES</th>
                <td className="fw-bold ">
                  <a href="callto:">0194-2452050/52</a>
                </td>
              </tr>

              <tr>
                <th scope="row">BONE & JOINT HOSPITAL</th>
                <td className="fw-bold ">
                  <a href="callto:"> 0194-2430149/115</a>
                </td>
              </tr>
              <tr>
                <th scope="row">KHYBER HOSPITAL</th>
                <td className="fw-bold ">
                  <a href="callto:">0194-2455130</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Govt. Hospital Gandhi Nagar</th>
                <td className="fw-bold ">
                  <a href="callto:">2530041</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Children Hospital , Ambphalla Jammu</th>
                <td className="fw-bold ">
                  <a href="callto:"> 2547635</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Govt. Medical Hospital Bakshi Nagar</th>
                <td className="fw-bold ">
                  <a href="callto:">2549621/2549625</a>
                </td>
              </tr>
              <tr>
                <th scope="row">JAMMU AIRPORT</th>
                <td className="fw-bold ">
                  <a href="callto:"> 0191-2431917</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SRINAGAR AIRPORT</th>
                <td className="fw-bold ">
                  <a href="callto:">0194-2303311 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">LAKDAKH (LEH ) AIRPORT</th>
                <td className="fw-bold ">
                  <a href="callto:"> 0198-2253076</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default JK
