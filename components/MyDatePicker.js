import React, {Component} from 'react';
import moment from 'moment';
import {DatetimePickerTrigger} from 'rc-datetime-picker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moment: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      moment
    });
  }

  render() {
    const shortcuts = {
      'Today': moment(),
      'Yesterday': moment().subtract(1, 'days'),
      'Clear': ''
    };

    return (
      <DatetimePickerTrigger
        shortcuts={shortcuts} 
        moment={this.state.moment}
        onChange={this.handleChange}>
        <input type="text" value={this.state.moment.format('YYYY-MM-DD HH:mm')} readOnly />
      </DatetimePickerTrigger>
    );
  }
}

