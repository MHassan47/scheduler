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

function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];

    return { ...interview, interviewer };
  }
  return null;
}

export { getAppointmentsForDay, getInterview };
