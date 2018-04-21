import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import { AccountBalanceWallet, DoneAll } from '@material-ui/icons';
import { withStyles, Grid } from 'material-ui';

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

class Balance extends React.Component {
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
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={AccountBalanceWallet}
              iconColor="purple"
              title="Текущий баланс"
              description="100500 ₽"
              small="GB"
              statIcon={DoneAll}
              statIconColor="green"
              statLink={{ text: 'Все в порядке', href: '#pablo' }}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Balance.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Balance);
