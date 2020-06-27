import React, { Component } from "react";

class Contact extends Component {
  render() {
    let contact = "< Contact Me />";
    let info = "James Lungu\njamesjjlungu@gmail.com\nNew York City, New York";
    return (
      <section id="contact-me">
        <h1 className="contact-header">{contact}</h1>
        <div class="row">
          <div class="col-sm">
            <img className="contact-profile" src="/images/me.jpg" />
            <hr id="line-break-contact-l" width="25%"></hr>
            <div id="info">
              <p class="info-text">James Lungu</p>
              <p class="info-text">jamesjjungu@gmail.com</p>
              <p class="info-text">New York City, New York</p>
            </div>
          </div>
          <div class="col-sm">
            <p id="contact-text">
              Thanks for visiting my website! Want to get in touch? Shoot me an
              email and we can have a great talk! Currently, I am searching for
              an Internship for Summer 2020, revolving around Computer
              Science/Software Development. But, with my graduation in about a
              year, I'm also looking into some opportunities post-university.
              Either way, I look forward to hearing from you!
            </p>
            <hr id="line-break-contact-r" width="50%"></hr>
            <a href="mailto:jamesjjlungu@gmail.com?Subject=" target="_top">
              <i class="fas fa-envelope contact-email fa-4x"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
