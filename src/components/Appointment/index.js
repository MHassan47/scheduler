import React from "react";
// import Appointment from "components/Appointment";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Error from "./Error";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

// Mode constants
const EMPTY = "EMPTY";
const EDITING = "EDITING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

// conditional rendering using custom hook

const Appointment = function (props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Saving a new interview
  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer,
    };
    Promise.resolve(props.bookInterview(props.id, interview))
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE));
  }

  function onConfirm() {
    transition(CONFIRM);
  }

  // Deleting an interview
  function deleteInterview() {
    transition(DELETING, true);
    Promise.resolve(props.cancelInterview(props.id))
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  function editingInterview() {
    transition(EDITING);
  }

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
          onCancel={back}
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
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment" onClose={back} />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not delete appointment" onClose={back} />
      )}
    </article>
  );
};

export default Appointment;
