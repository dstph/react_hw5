import React from 'react';
import UserWrapper from '../UserWrapper/UserWrapper';
import CommentsWrapper from '../CommentsWrapper/CommentsWrapper';
import {
  Switch,
  Route
} from "react-router-dom";
import PropTypes from 'prop-types';

const Routing = ({location:{pathname}}) => {
  return(
    <Switch>
      <Route exact path='/' component={UserWrapper} />
      <Route path={pathname} render={ (props) => <CommentsWrapper {...props} /> } />
    </Switch>
  )
}

Routing.propTypes = {
	pathname: PropTypes.string,
}

export  default Routing;