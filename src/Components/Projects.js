import React, { Component } from "react";
import { Card, Icon, CardTitle, Modal, Button } from "react-materialize";
class Projects extends Component {
  render() {
    let wireframer = {  
      marginBottom: "24px",
    }
    let press = {
      marginTop: "-2px"
    }
    let project = {
      marginBottom: "45px",
    }
    return (
      <section id="projects">
        <h1 className=" project-header">My Projects</h1>
        <h3 className="project-h3">Here are a few of the most recent projects I have been working on</h3>
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card h-100">
                <img src="images/wireframer.png" class="card-img-top" alt="..." style={wireframer} />
                <div class="card-body">
                  <h5 class="card-title">Wireframer App</h5>
                  <p class="card-text project-text">
                  Wireframer Web App. Coded with JavaScript, React.js, Redux
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="images/todolist.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">To-Do List</h5>
                  <p class="card-text project-text">
                  To-Do List Manager.  Coded with ReactJS, JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="images/instructions.png" class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title" style={press}>Press Release Doc</h5>
                  <p class="card-text project-text">
                  Mock Press Release, created for Technical Communications Class.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="images/resources.png" class="card-img-top" style={project} />
                <div class="card-body">
                  <h5 class="card-title">Problem Solving</h5>
                  <p class="card-text project-text">
                  A group project, we identified a problem on campus and
                  came up with a simple solution to it.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}
export default Projects;
