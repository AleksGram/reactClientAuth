import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

 class Signin extends Component {

     handleFormSubmit = ({ email, password }) => {
         this.props.signinUser({ email, password }, this.props);
     };
     renderAlert () {
         if (this.props.errorMessage ) {
             return (
                 <div className='alert alert-danger'>
                     <strong>Oops! </strong> {this.props.errorMessage}
                 </div>
             )
         }
     }
    render () {
        const { handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field
                        className="form-control"
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field
                        className="form-control"
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                {this.renderAlert()}
                <button formAction="submit" className="btn btn-primary">Sign In</button>
            </form>
        )
    }
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error }
}
export default  compose(
    withRouter,
    connect (mapStateToProps, actions),
    reduxForm ({form: 'signin'}),
) (Signin);