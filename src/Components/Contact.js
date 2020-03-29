<<<<<<< HEAD
import React, { Component } from "react";

class Contact extends Component {
  render() {
    let contact = "< Contact Me />";
    return (
      <section id="contact-me">
        <h1 className="contact-header">{contact}</h1>
        <div class="row">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/profile.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="images/profile.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="images/profile.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          {/* <p id="contact-text">
            Thanks for visiting my site! Want to get in contact with me? Shoot
            me an email, and we can have a chat. I look forward to hearing from
            you!
          </p> */}
        </div>
      </section>
    );
  }
}
export default Contact;
=======
import React, { Component } from "react";
class Contact extends Component {
  render() {
    let contact = "< Contact />";
    return (
      <section id="contact">
        <h1 className=" project-header">{contact}</h1>
      </section>
    );
  }
}
export default Contact;
>>>>>>> 07d84673e951833bd9f809f146ad25df33ee2435
