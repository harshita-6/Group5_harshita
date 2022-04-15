import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  GeoFill,
  House,
  Speedometer2,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"
import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"
const Help = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="py-5 border-bottom align-items-center fw-bold ">HELPLINE</h1>
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
              <th scope="row">1</th>
              <td className="fw-bold ">
                <Link to="/ANI">Andaman and Nicobar Islands</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="fw-bold ">
                <a href="#">Andhra Pradesh</a>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="fw-bold ">
                <a href="#">Arunachal Pradesh</a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td className="fw-bold ">
                <Link to="/assam">Assam </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td className="fw-bold ">
                <a href="#">Bihar</a>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td className="fw-bold ">
                <a href="#">Chhattisgarh</a>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td className="fw-bold ">
                <a href="#">Goa</a>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td className="fw-bold ">
                <a href="#">Gujarat</a>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td className="fw-bold ">
                <a href="#">Haryana</a>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td className="fw-bold ">
                <a href="#">Himachal Pradesh</a>
              </td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td className="fw-bold ">
                <a href="#">Jharkhand</a>
              </td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td className="fw-bold ">
                <a href="#">Karnataka</a>
              </td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td className="fw-bold ">
                <a href="#">Kerala</a>
              </td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td className="fw-bold ">
                <a href="#">Madhya Pradesh</a>
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td className="fw-bold ">
                <a href="#">Maharashtra</a>
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td className="fw-bold ">
                <a href="#">Manipur</a>
              </td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td className="fw-bold ">
                <a href="#">Meghalaya</a>
              </td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td className="fw-bold ">
                <a href="#">Mizoram</a>
              </td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td className="fw-bold ">
                <a href="#">Nagaland</a>
              </td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td className="fw-bold ">
                <a href="#">Odisha</a>
              </td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td className="fw-bold ">
                <a href="#">Punjab</a>
              </td>
            </tr>
            <tr>
              <th scope="row">23</th>
              <td className="fw-bold ">
                <a href="#">Rajasthan</a>
              </td>
            </tr>
            <tr>
              <th scope="row">24</th>
              <td className="fw-bold ">
                <a href="#">Sikkim</a>
              </td>
            </tr>
            <tr>
              <th scope="row">25</th>
              <td className="fw-bold ">
                <a href="#">Tamil Nadu</a>
              </td>
            </tr>
            <tr>
              <th scope="row">26</th>
              <td className="fw-bold ">
                <a href="#">Telangana</a>
              </td>
            </tr>
            <tr>
              <th scope="row">27</th>
              <td className="fw-bold ">
                <a href="#">Tripura</a>
              </td>
            </tr>
            <tr>
              <th scope="row">28</th>
              <td className="fw-bold ">
                <a href="#">Uttar Pradesh</a>
              </td>
            </tr>
            <tr>
              <th scope="row">29</th>
              <td className="fw-bold ">
                <a href="#">Uttarakhand</a>
              </td>
            </tr>
            <tr>
              <th scope="row">30</th>
              <td className="fw-bold ">
                <a href="#">West Bengal</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Help
