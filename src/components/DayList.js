import React from "react";
import DayListItem from "./DayListItem";

const DayList = function (props) {
  const listItems = props.days.map((day) => {
    return (
      <ul>
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          setDay={props.onChange}
        />
      </ul>
    );
  });
  return listItems;
};

export default DayList;
