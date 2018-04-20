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
function ServicesPage({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <RegularCard
            cardTitle={'Подключенные услуги'}
            cardSubtitle={'Список всех подключенных услуг'}
            headerColor={'green'}
            content={
              <div>
                <Grid container />
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <RegularCard
            cardTitle={'Неподключенные услуги'}
            cardSubtitle={'Список всех неподключенных услуг'}
            headerColor={'orange'}
            content={<div />}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default withStyles(style)(ServicesPage);
