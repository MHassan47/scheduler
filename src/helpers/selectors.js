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

const state = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];

    return { ...interview, interviewer };
  }
  return null;
}

export { getAppointmentsForDay, getInterview };
