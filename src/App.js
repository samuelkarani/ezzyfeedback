import React from "react";
import Footer from "./Footer";
import image from "./image.svg";
import data from "./data";

function Card({ title, description, logo, link }) {
  return (
    <div className="uk-card uk-card-default uk-card-hover uk-card-small">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove">{title}</h3>
          </div>
        </div>
      </div>
      <div className="uk-card-body">{description}</div>
      <div className="uk-card-footer">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="uk-button uk-button-text"
        >
          learn more
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="uk-section uk-section-primary uk-light">
        <div className="uk-container">
          <div
            className="uk-child-width-1-2@m uk-grid-small uk-flex-middle"
            data-uk-grid
          >
            <div>
              <h1 className="uk-margin">Qualified Feedback Instantly.</h1>
              <h4 className="uk-margin">
                A suite of services helping you gather feedback from your
                audience.
              </h4>
            </div>
            <div>
              <img src={image} alt="ezzyfeedback" className="uk-height-large" />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div className="uk-child-width-1-3@m uk-grid-small" data-uk-grid>
            {data.map((item) => (
              <div key={item.name}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-secondary uk-section-small uk-light">
        <div className="uk-container">
          <Footer data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
