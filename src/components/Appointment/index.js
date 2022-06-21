import React from "react";
import { Fragment } from "react";
// import Appointment from "components/Appointment";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

// Mode constants
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

// conditional rendering using custom hook

const Appointment = function (props) {
  // console.log("This is the props.interviewers", props.interviewers);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    props.bookInterview(props.id, interview);
    console.log(props.id);
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          interview={props.interview}
          onCancel={() => back()}
          onSave={save}
          bookInterview={props.bookInterview}
        />
      )}
    </article>
  );
};

export default Appointment;
