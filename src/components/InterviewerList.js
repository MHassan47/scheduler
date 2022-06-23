import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

const InterviewerList = function (props) {
  const interviewer = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.value === interviewer.id}
      setInterviewer={() => {
        props.onChange(interviewer.id);
      }}
    />
  ));
  return (
    <section className="interviewers">
      <ul className="interviewers__list">{interviewer}</ul>
    </section>
  );
};
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
