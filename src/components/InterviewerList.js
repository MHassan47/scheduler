import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = function (props) {
  const interviewer = props.interviewers.map((interviewer) => {
    return (
      <section className="interviewers">
        <ul className="interviewers__list">
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={props.value === interviewer.id}
            setInterviewer={() => {
              props.onChange(interviewer.id);
              console.log(interviewer.id);
            }}
          />
        </ul>
      </section>
    );
  });
  return interviewer;
};

export default InterviewerList;
