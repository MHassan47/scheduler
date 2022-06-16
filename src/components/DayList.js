import React from "react";
import DayListItem from "./DayListItem";

const DayList = function (props) {
  const listItems = props.days.map((day) => {
    return (
      <ul>
        <DayListItem
          name={day.name}
          spots={day.spots}
          selected={day.name === props.day}
          setDay={props.setDay}
        />
      </ul>
    );
  });
  return listItems;
};

export default DayList;
