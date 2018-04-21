import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from '@material-ui/icons';
import { withStyles, Grid } from 'material-ui';

import Cards from 'react-credit-cards';

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from 'components';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts';

import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';

import Payment from 'payment';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: ''
    };
  }

  componentDidMount() {
    Payment.formatCardNumber(document.querySelector('[name="number"]'));
    Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
    Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      this.setState({
        [target.name]: target.value.replace(/ /g, '')
      });
    } else if (target.name === 'expiry') {
      this.setState({
        [target.name]: target.value.replace(/ |\//g, '')
      });
    } else {
      this.setState({
        [target.name]: target.value
      });
    }
  };

  handleCallback(type, isValid) {
    console.log(type, isValid); //eslint-disable-line no-console
  }

  render() {
    const { name, number, expiry, cvc, focused } = this.state;
    return (
      <div className="rccs__demo">
        <h1>React Credit Cards</h1>
        <div className="rccs__demo__content">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form>
            <div>
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <div>E.g.: 49..., 51..., 36..., 37...</div>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div>
              <input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </form>
        </div>
        <div className="rccs__demo__footer">
          <iframe
            title="GitHub Stars"
            src="https://ghbtns.com/github-btn.html?user=amarofashion&repo=react-credit-cards&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="110px"
            height="20px"
          />
          <iframe
            title="GitHub Followers"
            src="https://ghbtns.com/github-btn.html?user=amarofashion&type=follow&count=true"
            frameBorder="0"
            scrolling="0"
            width="150px"
            height="20px"
          />
        </div>
      </div>
    );
  }
}

class Finances extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}

Finances.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Finances);
