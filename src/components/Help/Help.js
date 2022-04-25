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
import Image from "../Images/images"
const Help = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="py-5 border-bottom align-items-center fw-bold ">HELPLINE</h1>
      <div
        className="row row-header justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        <div className="col-12 col-lg-8 col-md col-sm-6 ">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item text-center">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4>STATE-WISE</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <table
                    class="table table-bordered table-striped"
                    style={{ paddingBottom: "50px" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col ">
                          <h3>States</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td className="fw-bold ">
                          <a href="/AP">Andhra Pradesh</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td className="fw-bold ">
                          <a href="/ArP">Arunachal Pradesh</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td className="fw-bold ">
                          <a href="/assam">Assam </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td className="fw-bold ">
                          <a href="/bihar">Bihar</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td className="fw-bold ">
                          <a href="/Chattisgarh">Chhattisgarh</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td className="fw-bold ">
                          <a href="/goa">Goa</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td className="fw-bold ">
                          <a href="/gujarat">Gujarat</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td className="fw-bold ">
                          <a href="/haryana">Haryana</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td className="fw-bold ">
                          <a href="/HP">Himachal Pradesh</a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">10</th>
                        <td className="fw-bold ">
                          <a href="/Jharkhand">Jharkhand</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td className="fw-bold ">
                          <a href="/Karnataka">Karnataka</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td className="fw-bold ">
                          <a href="/Kerala">Kerala</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td className="fw-bold ">
                          <a href="/MP">Madhya Pradesh</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td className="fw-bold ">
                          <a href="/Mah">Maharashtra</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">15</th>
                        <td className="fw-bold ">
                          <a href="#">Manipur</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">16</th>
                        <td className="fw-bold ">
                          <a href="#">Meghalaya</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">17</th>
                        <td className="fw-bold ">
                          <a href="#">Mizoram</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">18</th>
                        <td className="fw-bold ">
                          <a href="#">Nagaland</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">19</th>
                        <td className="fw-bold ">
                          <a href="#">Odisha</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">20</th>
                        <td className="fw-bold ">
                          <a href="#">Punjab</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">21</th>
                        <td className="fw-bold ">
                          <a href="#">Rajasthan</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">22</th>
                        <td className="fw-bold ">
                          <a href="#">Sikkim</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">23</th>
                        <td className="fw-bold ">
                          <a href="#">Tamil Nadu</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">24</th>
                        <td className="fw-bold ">
                          <a href="#">Telangana</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">25</th>
                        <td className="fw-bold ">
                          <a href="#">Tripura</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">26</th>
                        <td className="fw-bold ">
                          <a href="#">Uttar Pradesh</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">27</th>
                        <td className="fw-bold ">
                          <a href="#">Uttarakhand</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">28</th>
                        <td className="fw-bold ">
                          <a href="#">West Bengal</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="accordion-item text-center">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <h4>Union Territory</h4>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <table
                      class="table table-bordered table-striped"
                      style={{ paddingBottom: "50px" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col ">
                            <h3>Union Territory</h3>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="fw-bold ">
                            <a href="/ANI">Andaman and Nicobar Islands</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="fw-bold ">
                            <a href="/chandigarh">Chandigarh</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="fw-bold ">
                            <a href="/DNH">Dadra and Nagar Haveli</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="fw-bold ">
                            <a href="/Delhi">Delhi</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td className="fw-bold ">
                            <a href="/JK">Jammu and Kashmir</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td className="fw-bold ">
                            <a href="/Ladakh">Ladakh</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td className="fw-bold ">
                            <a href="/Lakshadweep">Lakshadweep</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md col-sm-6 ">
          <Image
            className="d-block mx-lg-auto img-fluid align-self-center shadow"
            filename="help.jpg"
            style={{ borderRadius: "10px" }}
            alt="1"
          />
        </div>
      </div>
    </div>
  )
}

export default Help
