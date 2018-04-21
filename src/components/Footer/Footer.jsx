import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, withStyles } from 'material-ui';

import footerStyle from 'assets/jss/material-dashboard-react/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.center}>
          <span>
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://sas-2018.herokuapp.com" className={classes.a}>
              SAS
            </a>, нам очень важно ваше мнение
            {/* ее гавнокод */}
            <img style={{height:"20px"}} src="data:image/png;base64,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"></img>
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
