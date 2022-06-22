import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

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

export default InterviewerList;
