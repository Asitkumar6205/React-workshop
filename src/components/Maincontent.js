import React from "react";
import "./stylesheet.css";

export default function Maincontent() {
  return (
    <>
      <div className="jumbotron-feature">
        <div className="container1">
          <div className="cont">
            <h1>
              <span className="glyphicon glyphicon-equalizer"></span>{" "}
              Dramatically Engage
            </h1>
            <p>
              Objectively innovate empowered manufactured products whereas
              parallel platforms.
            </p>
            <p>
              <a className="btn btn-default" href="#">
                Engage Now
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Superior Collaboration
              <small style={{ marginLeft: "1.5rem" }}>Visualize Quality</small>
            </h1>
            <p>
              Proactively envisioned multimedia based expertise and cross-media
              growth strategies. Seamlessly visualize quality intellectual
              capital without superior collaboration and idea-sharing.
              Holistically pontificate installed base portals after maintainable
              products.
            </p>
          </div>
        </div>

        <div className="row">
          <article className="col-md-4 article-intro">
            <a href="#">
              <img
                style={{
                  width: "100%",
                }}
                classNameName=""
                src="assets/download.svg"
                alt=""
              />
            </a>
            <h3>
              <a href="#">Efficiently Unleash</a>
            </h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </article>
          <article className="col-md-4 article-intro">
            <a href="#">
              <img
                style={{
                  width: "100%",
                }}
                classNameName=""
                src="assets/download.svg"
                alt=""
              />
            </a>
            <h3>
              <a href="#">Completely Synergize</a>
            </h3>
            <p>
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions. Efficiently unleash cross-media information
              without cross-media value. Quickly maximize timely deliverables
              for real-time schemas.
            </p>
          </article>
          <article className="col-md-4 article-intro">
            <a href="#">
              <img
                style={{
                  width: "100%",
                }}
                classNameName=""
                src="assets/download.svg"
                alt=""
              />
            </a>
            <h3>
              <a href="#">Dynamically Procrastinate</a>
            </h3>
            <p>
              Professionally cultivate one-to-one customer service with robust
              ideas. Completely synergize resource taxing relationships via
              premier niche markets. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
