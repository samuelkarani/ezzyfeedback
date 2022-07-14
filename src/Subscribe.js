import React from "react";
import PropTypes from "prop-types";
import MailChimp from "react-mailchimp-subscribe";

export const SUBSCRIBE_URL =
  "https://ezzyfeedback.us17.list-manage.com/subscribe/post?u=64c23096f4dc1dd3c4169b140&id=5277d2b126";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function Form({ status, message, onValidated }) {
  let email, name;

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && validateEmail(email.value))
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
      });
  }

  return (
    <form className="uk-form-stacked" onSubmit={handleSubmit}>
      <div className="uk-margin-small uk-form-controls">
        <div className="uk-inline">
          <button
            type="button"
            className="uk-form-icon"
            data-uk-icon="user"
          ></button>
          <input
            className="uk-input uk-form-small"
            ref={(node) => (name = node)}
            type="text"
            required
            placeholder="Your name"
          />
        </div>
      </div>
      <div className="uk-margin-small uk-form-controls">
        <div className="uk-inline">
          <button
            type="button"
            className="uk-form-icon"
            data-uk-icon="mail"
          ></button>
          <input
            className="uk-input uk-form-small"
            ref={(node) => (email = node)}
            type="email"
            required
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="uk-margin-small">
        <button
          type="submit"
          className="uk-button uk-button-default uk-button-small"
        >
          subscribe
        </button>
      </div>
      <div className="uk-margin-small">
        {status === "sending" && <span>subscribing...</span>}
        {status === "error" && (
          <span dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === "success" && (
          <span dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </form>
  );
}

Form.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
};

function Subscribe() {
  return (
    <MailChimp
      url={SUBSCRIBE_URL}
      render={({ subscribe, status, message }) => (
        <Form
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

export default Subscribe;
