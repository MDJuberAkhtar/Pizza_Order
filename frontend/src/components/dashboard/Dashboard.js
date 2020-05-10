import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaCount from './PizzaCount';

const Dashboard = ({auth:{user} }) =>{
  return(
    <Fragment>
      <p className="lead"><i className="fas fa-user"></i>Welcome { user && user.name }</p>
      <PizzaCount/>
    </Fragment>
  )
}

Dashboard.propTypes = {

  auth: PropTypes.object.isRequired

};

const mapStateToProps =state =>({
  auth: state.auth,

});

export default connect(mapStateToProps)(Dashboard)
