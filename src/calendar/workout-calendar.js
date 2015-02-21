import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import jQueryUI from 'jquery-ui';
import fullCalendar from 'fullcalendar';
import WorkoutScheduler from '../../lib/workout-scheduler';
import Tooltip from '../../lib/tooltip';

export default React.createClass({
  componentDidMount() {
    setupCalendar($('.jquery-calendar'));
  },

  render() {
    return (
      <div className="jquery-calendar">
      </div>
    );
  }
});

function setupCalendar(calendar) {
  calendar.fullCalendar({
    editable: true,
    firstDay: 1,
    droppable: true,
    drop(date) {
      console.log(moment(date).toString());
    },
    eventReceive(event) {
      new WorkoutScheduler(calendar, event).scheduleActivities();
    },
    eventMouseover(event, jsEvent, view) {
      new Tooltip(jsEvent, event).show();
    },
    eventMouseout(event, jsEvent, view) {
      new Tooltip(jsEvent).hide();
    }
  });
}
