// import React, { Component } from "react";
// import SchedulerCalendar from 'scheduler-calendar';
// import 'scheduler-calendar/dist/index.css';


  // const Example extends Component {
  //   render() {
  //     return <SchedulerCalendar />
  //   }
  // }


// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       },
//     ],
//   };

//   onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: [...state.events] };
//     });
//   };

//   onEventDrop = (data) => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div className="App">
//         <DnDCalendar
//           defaultDate={moment().toDate()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// export default Example;