const getAppointmentsForDay = function (state, day) {
  const appointmentByDay = state.days.find((eachDay) => eachDay.name === day);

  console.log({ appointmentByDay });
  if (!appointmentByDay || !appointmentByDay.appointments) {
    return [];
  }
  const appointments = appointmentByDay.appointments.map(
    (appointmentID) => state.appointments[appointmentID]
  );
  console.log(appointments);
  return appointments;
};

export { getAppointmentsForDay };
