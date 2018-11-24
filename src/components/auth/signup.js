import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
    handleFormSubmit = (formProps) => {
        this.props.signupUser(formProps, this.props);
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

    renderField = ({ input, type, meta: { touched, error } }) => (
        <div>
            <input {...input} type={type} className="form-control"/>
            {touched && ( <span className="fieldError">{error}</span>)}
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
                        component={this.renderField}
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field
                        className="form-control"
                        name="password"
                        type="password"
                        component={this.renderField}
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
                {this.renderAlert()}
                <button formAction="submit" className="btn btn-primary">Sign Up</button>
            </form>

        )
    }
}

function validate (formProps) {
    const errors = {};
    const fields = ['email', 'password', 'confirmPassword'];
    fields.map((field) => {
        if (!formProps[field]) {
            errors[field] = `${field} is required`
        }
    });
    if(formProps.password !== formProps.confirmPassword) {
        errors.confirmPassword = 'Password should much'
    }
    return errors;
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error }
}
export default  compose (
    withRouter,
    connect (mapStateToProps, actions),
    reduxForm ({ form: 'signin', validate }),
) (SignUp);