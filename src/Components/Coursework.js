import React, { Component } from "react";
class Coursework extends Component {
  render() {
    let coursework = "< Coursework />";
    return (
      <section id="coursework">
        <h1 className=" project-header">{coursework}</h1>
        <div class="row">
          <div class="col-sm">
            <h3 class="coursework-headers">//Current</h3>
            <div className="course-pos-even">
              <div className="coursework-items">
                <div className="coursework-item-text">
                  Analysis of Algorithms and Algorithm Design
                </div>
              </div>
            </div>
            <div className="course-pos-even">
              <div className="coursework-items">
                <div className="coursework-item-text">
                  C Programming, Fundamentals of Operating Systems, Compilers
                </div>
              </div>
            </div>
            <div className="course-pos-odd">
              <div className="coursework-items">
                <div className="coursework-item-text">
                Fundamentals of Computer Networks
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <h3 class="coursework-headers">#Previous</h3>
          </div>
        </div>
      </section>
    );
  }
}
export default Coursework;
