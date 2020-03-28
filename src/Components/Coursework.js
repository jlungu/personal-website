import React, { Component } from "react";
class Coursework extends Component {
  render() {
    let coursework = "< Coursework />";
    return (
      <section id="coursework">
        <h1 className=" project-header">{coursework}</h1>
        <div class="row">
          <div class="col-sm">
            <h3 class="coursework-headers">/*Current*/</h3>
            {/*Each div has a hyperlink to the class information*/}
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE373"
              target="_blank"
            >
              {/*So all we really have is text, wrapped in div controlling color/shape, wrapped in div controlling positioning :)*/}
              {/*Even = row of two links, have different spacing than row of just 1. */}
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Analysis of Algorithms and Algorithm Design
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE320"
              target="_blank"
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Fundamentals of Operating Systems, Compilers (C)
                  </div>
                </div>
              </div>
            </a>
            <a
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    <i class="fas fa-book-open fa-4x"></i>
                  </div>
                </div>
              </div>
            </a>
            <a
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    <i class="fas fa-code fa-4x"></i>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE310"
              target="_blank"
            >
              <div className="course-pos-odd">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Fundamentals of Computer Networks
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm">
            <h3 class="coursework-headers">/*Previous*/</h3>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE114"
              target="_blank"
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Object Oriented Programming (Java)
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE214"
              target="_blank"
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">Data Structures</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE220"
              target="_blank"
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Computer Architecture (MIPS Assembly)
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE316"
              target="_blank"
            >
              <div className="course-pos-even">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Software Development Principles (JavaScript, HTML5/CSS,
                    React.js/Redux)
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.cs.stonybrook.edu/students/Undergraduate-Studies/courses/CSE216"
              target="_blank"
            >
              <div className="course-pos-odd">
                <div className="coursework-items">
                  <div className="coursework-item-text">
                    Programming Paradigms (Python, OCaml)
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Coursework;
