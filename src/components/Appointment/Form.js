import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = function (props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [student, setStudent] = useState(props.student || "");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        <InterviewerList
          /* your code goes here */
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
        .
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button onClick={props.onSave(student, interviewer)} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
