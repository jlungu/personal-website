import React, { Component } from "react";

class Skills extends Component {
  render() {
    let style = {
      width: "25%",
      backgroundColor: "#2B2B2B"
    };

    let js_prog = {
        width: "70%",
        backgroundColor: "#2B2B2B"
    }
    let java_prog = {
        width: "85%",
        backgroundColor: "#2B2B2B"
    }
    let python_prog = {
        width: "70%",
        backgroundColor: "#2B2B2B"
    }
    let react_prog = {
        width: "75%",
        backgroundColor: "#2B2B2B"
    }
    let html5_prog = {
        width: "75%",
        backgroundColor: "#2B2B2B"
    }
    let c_prog = {
        width: "55%",
        backgroundColor: "#2B2B2B"
    }
    let sql_prog = {
        width: "25%",
        backgroundColor: "#2B2B2B"
    }
    let heights = {
      height: "28px",
      marginTop: "5px",
      marginBottom: "30px"
    };

    let js = {
        color: "#ccad00"
    }
    let java = {
        color: "crimson"
    }
    let python = {
        color: "steelblue"
    }
    let react = {
        color: "mediumturquoise"
    }
    let html5 = {
        color: "darkorange"
    }
    let c = {
        
    }
    let sql = {
        color: "rebeccapurple"
    }
    
    let myskills = "< Skills />";
    return (
      <section id="skills">
        <h1 className=" project-header">{myskills}</h1>
        <div class="row">
          <div class="col-sm">
          <i class="fab fa-js-square fa-2x icon" style={js}></i>
          <span class="progress-labels">JavaScript</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={js_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                color="red"
              >
                
              </div>
            </div>
            <i class="fab fa-java fa-2x icon" style={java}></i>
            <span class="progress-labels">Java</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={java_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <i class="fab fa-python fa-2x icon" style={python}></i>
            <span class="progress-labels">Python</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={python_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <i class="fab fa-react fa-2x icon" style={react}></i>
            <span class="progress-labels">React.js</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={react_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <i class="fab fa-html5 fa-2x icon" style={html5}></i>
            <span class="progress-labels">HTML5/CSS</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={html5_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <i class="fab fa-cuttlefish fa-2x icon" style={c}></i>
            <span class="progress-labels">C</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={c_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
            <i class="fas fa-database fa-2x icon" style={sql}></i>
            <span class="progress-labels">SQL</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={sql_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={style}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
