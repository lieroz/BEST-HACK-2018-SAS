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
import 'react-credit-cards/es/styles-compiled.css';
import 'assets/css/styles.scss';

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

    this.state = this.props.state;
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
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />
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
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <Demo
              state={{
                number: '4237823284792344',
                name: 'Johnny Bravo',
                expiry: '05/21',
                cvc: '123',
                focused: 'true'
              }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Demo
              state={{
                number: '5237834284792344',
                name: 'Johnny Bravo',
                expiry: '12/19',
                cvc: '123',
                focused: 'true'
              }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Demo
              state={{
                number: '6237823284792344',
                name: 'Johnny Bravo',
                expiry: '08/18',
                cvc: '123',
                focused: 'true'
              }}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Finances.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Finances);
