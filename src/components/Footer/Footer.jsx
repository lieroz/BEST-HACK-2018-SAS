import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, withStyles } from 'material-ui';

import footerStyle from 'assets/jss/material-dashboard-react/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://sas-2018.herokuapp.com" className={classes.a}>
              SAS
            </a>, нам очень вадно ваше мнение
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
