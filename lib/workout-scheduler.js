import Scheduler from './scheduler';
import moment from 'moment';
import fullCalendar from 'fullcalendar';

export default class WorkoutScheduler extends Scheduler {

  scheduleActivities() {
    if (this.event.activities.length < 2) {
      this.event.metadata = this.event.activities[0];
      return;
    }

    this.removeDefaultEvent();
    this.createEventsForActivities();
  }

  removeDefaultEvent() {
    this.calendar.fullCalendar('removeEvents', [this.event._id]);
  }

  createEventsForActivities() {
    var activities = this.event.activities;
    activities.forEach(this.createEvent.bind(this));
  }

  createEvent(event) {
    var eventObject = this.buildCalendarEvent(event);
    this.calendar.fullCalendar('renderEvent', eventObject);
  }

  buildCalendarEvent(event) {
    return {
      title: event.description + "\n" + "Distance: " + event.distance + "\n" + "Duration: " + event.duration,
      start: this.makeDateForEvent(event.day),
      metadata: event
    }
  }

  makeDateForEvent(day) {
    var selectedDate = this.event.start;
    var startOfWeek  = moment(selectedDate).startOf('week');
    var eventDate    = startOfWeek.add(day, 'days');
    return eventDate;
  }
}
