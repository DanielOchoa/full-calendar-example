import React from 'react';
import Workout from './workout';

export default React.createClass({
  componentDidMount() {
    setupDraggable(this.getDOMNode(), this.props.data);
  },
  render() {
    var workouts = this.props.data.map(workout => {
      return (
        <Workout
          key={workout.id}
          type={workout.type}
          duration={workout.duration}
          distance={workout.distance}
        />
      );
    });
    return (
      <ul className="workout-list">
        {workouts}
      </ul>
    );
  }
});

function setupDraggable(list, workouts) {

  $(list).find('li').each((i, li) => {
    var workout = workouts[i];
    var title   = workout.type + "\n";
    title      += "Duration: " + workout.duration + "\n";
    title      += "Distance: " + workout.distance;

    $(li).data('event', {
      title,
      stick: true,
      activities: workout.activities
    });

    $(li).draggable({
      zIndex: 999,
      revert: true,
      revertDuration: 0
    });
  });

}
