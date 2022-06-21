const getAppointmentsForDay = function (state, day) {
  const appointmentByDay = state.days.find((eachDay) => eachDay.name === day);

  //   console.log({ appointmentByDay });
  if (!appointmentByDay || !appointmentByDay.appointments) {
    return [];
  }
  const appointments = appointmentByDay.appointments.map(
    (appointmentID) => state.appointments[appointmentID]
  );
  //   console.log(appointments);
  return appointments;
};

const getInterviewersForDay = function (state, day) {
  const interviewByDay = state.days.find((eachDay) => eachDay.name === day);

  if (!interviewByDay || !interviewByDay.interviewers) {
    return [];
  }
  const interviewers = interviewByDay.interviewers.map(
    (interviewID) => state.interviewers[interviewID]
  );

  return interviewers;
};

function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];

    return { ...interview, interviewer };
  }
  return null;
}

export { getAppointmentsForDay, getInterviewersForDay, getInterview };
