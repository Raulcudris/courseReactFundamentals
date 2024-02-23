import { addHours } from "date-fns";
import { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getMessagesEs, localizer } from "../../helpers/index";
import { CalendarEvent, Navbar } from "../index";

const events = [
  {
    title: "Cumpleaños de Jose",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Raul Cudris",
    },
  },
];

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastview')|| 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

const onDoubleClick = ( event ) =>{
  console.log({ doubleClick: event})
}

const onSelect = ( event ) =>{
  console.log({ Click: event})
}

const onViewChanged = ( event ) =>{
  localStorage.setItem('lastview', event );
  setLastView( event );
}


  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView= { lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
    </>
  );
};
