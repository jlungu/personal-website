import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    let about = "< About Me />";

    return (
      <section id="about">
        <h1 className="about-header">{about}</h1>
        <div className="row">
          <div class="col mb-3">
            <img className="about-profile" src="/images/italy.png" />
          </div>
          <div class="col mb-3">
            <img className="about-profile_2" src="/images/profile.jpg" />
          </div>
          <div class="col mb-3">
            <img className="about-profile" src="/images/mello.png" />
          </div>
        </div>
        <div class="row">
          <hr id="line-break" width="35%"></hr>
        </div>
        <div class=" about-text">
          <div id="about-text" className="nine columns main-col">
            <p>{bio}</p>
            <div className="row">
              <div className="download">
                <p>
                  <a
                    href={resumeDownload}
                    id="resume-button"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
