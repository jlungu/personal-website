import React, { Component } from "react";

class Skills extends Component {
  render() {
    let style = {
      width: "25%",
      backgroundColor: "#2B2B2B"
    };
    
    //Style for Progress Bars
    let js_prog = {
      width: "70%",
      backgroundColor: "#e6c300"
    };
    let java_prog = {
      width: "85%",
      backgroundColor: "crimson"
    };
    let python_prog = {
      width: "70%",
      backgroundColor: "steelblue"
    };
    let react_prog = {
      width: "75%",
      backgroundColor: "mediumturquoise"
    };
    let html5_prog = {
      width: "75%",
      backgroundColor: "darkorange"
    };
    let c_prog = {
      width: "55%",
      backgroundColor: "gray"
    };
    let sql_prog = {
      width: "25%",
      backgroundColor: "maroon"
    };
    let heights = {
      height: "28px",
      marginTop: "5px",
      marginBottom: "20px"
    };
    let git_prog ={
      width: "75%",
      backgroundColor: "black"
    };
    let windows_prog ={
      width: "90%",
      backgroundColor: "deepskyblue"
    };
    let excel_prog ={
      width: "80%",
      backgroundColor: "green"
    };
    let ppt_prog ={
      width: "95%",
      backgroundColor: "orangered"
    };
    let gsuite_prog ={
      width: "90%",
      backgroundColor: "olive"
    };
    let azure_prog ={
      width: "45%",
      backgroundColor: "dodgerblue"
    };
    let linux_prog ={
      width: "30%",
      backgroundColor: "purple"
    };

    //Style for Icons
    let js = {color: "#e6c300"};
    let java = {color: "crimson"};
    let python = {color: "steelblue"};
    let react = {color: "mediumturquoise"};
    let html5 = {color: "darkorange"};
    let sql = {color: "maroon"};
    let c = {color: "gray"};
    let git = {color: "black"};
    let windows = {color: "deepskyblue"};
    let excel = {color: "green"};
    let ppt = {color: "orangered"};
    let gsuite = {color: "olive"};
    let azure = {color: "dodgerblue"};
    let linux = {color: "purple"};
    
  

    let myskills = "< Skills />";
    return (
      <section id="skills">
        <h1 className=" project-header">{myskills}</h1>
        <div class="row">
          <div class="col-sm">
            <div className="skills-sub-header">Programming</div>
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
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
            </div>
          </div>
          <div class="col-sm">
          <div className="skills-sub-header">Software</div>
          <i class="fab fa-github fa-2x icon" style={git}></i>
          <span class="progress-labels">GitHub</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={git_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fab fa-windows fa-2x icon" style={windows}></i>
            <span class="progress-labels">Windows 7/8/10</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={windows_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fas fa-file-excel fa-2x icon" style={excel}></i>
            <span class="progress-labels">Excel</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={excel_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fas fa-file-powerpoint fa-2x icon" style={ppt}></i>
            <span class="progress-labels">PowerPoint</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={ppt_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fab fa-google-drive fa-2x icon" style={gsuite}></i>
            <span class="progress-labels">GSuite</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={gsuite_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fas fa-cloud fa-2x icon" style={azure}></i>
            <span class="progress-labels">Microsoft Azure</span> 
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={azure_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <i class="fab fa-linux fa-2x icon" style={linux}></i>
            <span class="progress-labels">Linux</span>
            <div class="progress" style={heights}>
              <div
                class="progress-bar"
                role="progressbar"
                style={linux_prog}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}
export default Skills;
