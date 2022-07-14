import React from "react";
import Subscribe from "./Subscribe";
import data from "./data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="uk-child-width-expand@m uk-flex-center" data-uk-grid>
      <div>
        <h6 className="uk-margin-small">
          <span data-uk-icon="location" />
          <a
            className="uk-margin-small-left"
            href="https://goo.gl/maps/PDLZK1RCXyKJWQtc6"
            target="_blank"
            rel="noopener noreferrer"
          >
            5 Parvis Alan Turing
          </a>
        </h6>
        <h6 className="uk-margin-small">
          <span data-uk-icon="mail" />
          <a
            className="uk-margin-small-left"
            href="mailto:hello@ezzyfeedback.com"
          >
            hello@ezzyfeedback.com
          </a>
        </h6>
        <div className="uk-margin-small">
          <a
            href="https://www.facebook.com/Annootate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-uk-icon="facebook" />
          </a>
          <a
            className="uk-margin-small-left"
            href="https://twitter.com/EzzyFeedback"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-uk-icon="twitter" />
          </a>
          <a
            className="uk-margin-small-left"
            href="https://www.linkedin.com/company/ezzyfeedback/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-uk-icon="linkedin" />
          </a>
          <a
            className="uk-margin-small-left"
            href="https://www.instagram.com/annootate_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-uk-icon="instagram" />
          </a>
        </div>
        <h6 className="uk-margin-small uk-text-muted">
          Copyright © {year} EzzyFeedback Inc. <br /> All rights reserved.
        </h6>
      </div>
      <div>
        <div className="uk-margin-small">Subscribe to updates</div>
        <Subscribe />
      </div>
      <div>
        <ul className="uk-nav uk-nav-default">
          {data.map((item) => (
            <li key={item.title} className="uk-active">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="uk-border-circle"
                  width="16"
                  height="16"
                  src={item.logo}
                  alt="logo"
                />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
