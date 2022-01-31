import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// import casus from "../assets/icon/casus.svg";
import reactLogo from "../logo.svg";
import dummyPreview from "../assets/icon/dummyPreview.svg";

import "./templateStyle.scss";

dayjs.extend(relativeTime);

const classes = {
  wrapper: "Template-wrapper",
  description: "Template-description",
  title: "Template-title",
  date: "Template-date",
  logo: "Template-logo",
};

export default function Template({ template: { id, title, date, state } }) {
  const string = dayjs(date).fromNow();

  return (
    <div className={classes.wrapper}>
      <img
        data-testid="dummy-preview"
        src={dummyPreview}
        alt="Template preview."
      />
      <div className={classes.description}>
        <span className={classes.title}>{title}</span>
        <span className={classes.date}>
          <img
            className={classes.logo}
            data-testid="small-logo-icon"
            src={reactLogo}
            alt="Casus logo didn't work so I used the react one."
          />
          <span data-testid="time-span">{string}</span>
        </span>
      </div>
    </div>
  );
}

Template.propTypes = {
  /** Composition of the task */
  template: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Date of the task **/
    date: PropTypes.string.isRequired,
    /** Current state of the task */
    // state: PropTypes.string.isRequired,
  }),
};
