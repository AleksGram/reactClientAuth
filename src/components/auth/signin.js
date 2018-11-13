import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

 class Signin extends Component {
     handleFormSubmit = ({ email, password }) => {
         console.log(email, password);
     };

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
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button formAction="submit" className="btn btn-primary">Sign In</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}) (Signin)