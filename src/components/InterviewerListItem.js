import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

const InterviewerListItem = function (props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className={interviewerClass}
      onClick={() => props.setInterviewer(props.id)}
    >
      <img className="interviewers__item-image" src={props.avatar} />
      {props.name}
    </li>
  );
};

export default InterviewerListItem;
