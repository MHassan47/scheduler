import React from "react";
import DayListItem from "./DayListItem";

const DayList = function (props) {
  // Mapping through Days data for rendering individual days on DayList
  const listItems = props.days.map((day) => {
    return (
      <ul key={day.id}>
        <DayListItem
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
