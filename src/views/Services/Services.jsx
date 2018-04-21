import React from 'react';
import { withStyles, Grid } from 'material-ui';

import {
  P,
  Quote,
  Muted,
  Primary,
  Info,
  Success,
  Warning,
  Danger,
  Small,
  RegularCard,
  ItemGrid
} from 'components';

import Toggle from 'react-toggle';
import './temp.css';

const style = {
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px'
  }
};

const services = [];

function fillServices() {
  for (let i = 0; i < 100; i++) {
    services.push({ name: 'Услуга ' + i.toString() });
  }
}

fillServices();

console.info(services);

function ServicesPage({ ...props }) {
  return (
    <div>
      <RegularCard
        cardTitle={'Подключенные услуги'}
        cardSubtitle={'Список всех подключенных услуг'}
        headerColor={'green'}
        content={
          <div>
            <Grid container>
              {services.map(function(d, idx) {
                return (
                  <ItemGrid xs={12} sm={12} md={4} key={idx}>
                    <Toggle defaultChecked={false} onChange={false} />
                    <span style={{ padding: 10 }}>{d.name}</span>
                  </ItemGrid>
                );
              })}
            </Grid>
          </div>
        }
      />
    </div>
  );
}

export default withStyles(style)(ServicesPage);
