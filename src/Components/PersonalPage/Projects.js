import React, { Component } from "react";
import { Card, Icon, CardTitle, Modal, Button } from "react-materialize";
class Projects extends Component {
  render() {
    let wireframer = {
      marginBottom: "24px"
    };
    let press = {
      marginTop: "-2px"
    };
    let project = {
      marginBottom: "45px"
    };
    let github = " My GitHub";
    let myprojects = "< My Projects />";
    return (
      <section id="projects">
        <h1 className=" project-header">{myprojects}</h1>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4">
            <div class="card h-100 shadow my-cards">
              <img
                src="images/wireframer.png"
                class="card-img-top"
                alt="..."
                style={wireframer}
              />
              <div class="card-body">
                <h5 class="card-title project-title">Wireframer App</h5>
                <p class="card-text project-text">
                  Simplified Wireframer Web App, using Firestore as database.
                  Coded with JavaScript, React.js, Redux
                </p>
                <a
                  href="https://github.com/jlungu/wireframer_app"
                  target="_blank"
                  class="btn btn-outline-secondary view-but-src"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 shadow my-cards">
              <img src="images/todolist.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title project-title">To-Do List</h5>
                <p class="card-text project-text">
                  To-Do List Manager, complete with individual user accounts.
                  Coded with React.js, JavaScript
                </p>
                <a
                  href="https://github.com/jlungu/todo_hw3"
                  target="_blank"
                  class="btn btn-outline-secondary view-but-src"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 shadow my-cards">
              <img src="images/press.png" class="card-img-top press-release" />
              <div class="card-body">
                <h5 class="card-title project-title" style={press}>
                  Press Release Doc
                </h5>
                <p class="card-text project-text">
                  Mock Press Release document, created for Technical
                  Communications Class.
                </p>
                <a
                  href="https://drive.google.com/file/d/1LFqSxNtUsJl3oTwkpQqiu2qiuJ6cX1r-/view?usp=sharing"
                  target="_blank"
                  class="btn btn-outline-secondary view-but"
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 shadow my-cards">
              <img
                src="images/resources.png"
                class="card-img-top"
                style={project}
              />
              <div class="card-body">
                <h5 class="card-title project-title">Problem Solving</h5>
                <p class="card-text project-text">
                  A group project, we identified a problem on campus and came up
                  with a simple solution to it.
                </p>
                <a
                  href="https://prezi.com/p/6ni4dr_4rr5q/?present=1"
                  target="_blank"
                  class="btn btn-outline-secondary view-but"
                >
                  View Prezi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="git-btn-pos">
            <p>
              <a href="https://github.com/jlungu" target="_blank" id="github-btn" className="button">
                <i className="fa fa-github"></i>
                {github}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
