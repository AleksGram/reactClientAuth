import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
    handleFormSubmit = () => {

    };

    renderField = ({ input, type, meta: { touched, error } }) => (
        <div>
            <input {...input} type={type} className="form-control"/>
            {touched && ( <span>{error}</span>)}
        </div>
    );
    render () {
        const { handleSubmit } = this.props;
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
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field
                        className="form-control"
                        name="confirmPassword"
                        type="password"
                        component={this.renderField}
                        autoComplete="none"
                    />
                </fieldset>
                <button formAction="submit" className="btn btn-primary">Sign Up</button>
            </form>

        )
    }
}
function validate (formProps) {
    const errors = {};

    if(formProps.password !== formProps.confirmPassword) {
        errors.confirmPassword = 'Password should much'
    }
    return errors;
}

export default  compose(
    withRouter,
    connect (null, actions),
    reduxForm ({ form: 'signin', validate }),
) (SignUp);