import React from 'react';
import data from './workouts';
import WorkoutList from './activities/workout-list';
import WorkoutCalendar from './calendar/workout-calendar';
import Tooltip from './tooltip/tooltip';

export default React.createClass({
  render() {
    return (
      <div className="calendar-component">
        <div className="left-content">
          <WorkoutList data={data} />
        </div>
        <div className="right-content">
          <WorkoutCalendar data={data} />
        </div>
        <div className="hidden-Components">
          <Tooltip />
        </div>
      </div>
    );
  }
})
