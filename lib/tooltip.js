import $ from 'jquery';

export default class Tooltip {
  constructor(jsEvent, event) {
    this.el         = jsEvent.currentTarget;
    this.coords     = this.el.getBoundingClientRect();
    this.event      = event;
    this.tooltipDiv = $('.tooltip');
  }

  show() {
    var eventBoxWidth   = $(this.el).width();
    var eventBoxHeight  = $(this.el).height();
    var x               = this.coords.left + window.scrollX + eventBoxWidth + 'px';
    var y               = this.coords.top + window.scrollY + eventBoxHeight + 'px';

    this.setTextForTooltip();
    this.showTooltip(x, y);
  }

  showTooltip(x, y) {
    this.tooltipDiv.css({
      position: 'absolute',
      display: 'block',
      left: x,
      top: y,
    });
  }

  hide() {
    this.tooltipDiv.css('display', 'none');
  }

  setTextForTooltip() {
    var data = this.event.metadata;
    var text = "Description: " + data.description + "<br/>";
    text    += "Distance: " + data.distance + "<br/>";
    text    += "Duration: " + data.duration + "<br />";
    text    += "Type: " + data.type;

    this.tooltipDiv.html(text);
  }
}
