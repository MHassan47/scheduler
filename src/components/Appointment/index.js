import React from "react";
import { Fragment } from "react";
// import Appointment from "components/Appointment";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

// Mode constants
const EMPTY = "EMPTY";
const EDITING = "EDITING";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

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
    transition(SAVING);
    Promise.resolve(props.bookInterview(props.id, interview))
      .then(() => transition(SHOW))
      .catch((error) => console.log(error));
  }

  function onConfirm() {
    transition(CONFIRM);
  }
  function deleteInterview() {
    transition(DELETING);
    Promise.resolve(props.cancelInterview(props.id))
      .then(() => transition(EMPTY))
      .catch((error) => console.log("Error deleting", error));
  }

  function editingInterview() {
    transition(EDITING);
  }

  // console.log(props.interview.interviewer);
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          {...props.interview}
          onConfirm={onConfirm}
          onEdit={editingInterview}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          interview={props.interview}
          onCancel={() => back()}
          onSave={save}
          bookInterview={props.bookInterview}
          cancelInterview={props.cancelInterview}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm onCancel={() => back()} onDelete={deleteInterview} />
      )}
      {mode === EDITING && (
        <Form
          student={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
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
