import React from 'react';
import axios from "axios";
import './AddUsers.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dashboard from './dashboard';

class AddUsers extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    customerId: '',
                    customerName: '',
                    dateofreg:'',
                    contactPerson: '',
                    address:'',

                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    customerId: Yup.string()
                    .required('customer Name is required'),
                    customerName: Yup.string()
                        .required('customer Name is required'),
                        dateofreg: Yup.number()
                        .required('Date of Reg is required'),
                    contactPerson: Yup.string()
                        .required('contactPerson is required'),
                        address: Yup.string()
                        .required('Address is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={userdata => {
                    console.log(userdata);
                    axios.post("http://localhost:5000/postcustomers",userdata).then
                    (res=>{
                       console.log(res);
                    }) 
                    if(
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(userdata, null, 4)))
                    {
                        
                      
                    }
                }}
                render={({ errors, status, touched }) => (
                    <main>
                    <Dashboard/>
                    <section className="row">
                        <div className="col-12">
                    <Form>
                        <section className="card">
                            <aside className="card-header">
                                <h3 className="card-title">Primary Details</h3></aside>
                            <main className="card-body">
                    <div className="form-group col-sm-2">
                            <label htmlFor="customerId">customer Id</label>
                            <Field placeholder="customerId" name="customerId" type="text" className={'form-control' + (errors.customerId && touched.customerId ? ' is-invalid' : '')} />
                            <ErrorMessage name="customerId" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="customerName">customer Name</label>
                            <Field placeholder="customerName" name="customerName" type="text" className={'form-control' + (errors.customerName && touched.customerName ? ' is-invalid' : '')} />
                            <ErrorMessage name="customerName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="dateofreg">Date of Reg</label>
                            <Field placeholder="dateofreg" name="dateofreg" type="text" className={'form-control' + (errors.dateofreg && touched.dateofreg ? ' is-invalid' : '')} />
                            <ErrorMessage name="dateofreg" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="contactPerson">contactPerson</label>
                            <Field placeholder="contactPerson" name="contactPerson" type="text" className={'form-control' + (errors.contactPerson && touched.contactPerson ? ' is-invalid' : '')} />
                            <ErrorMessage name="contactPerson" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="address">Address</label>
                            <Field placeholder="address" name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="email">Email</label>
                            <Field placeholder="Email" name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="password">Password</label>
                            <Field placeholder="" name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field placeholder="" name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        </main>
                        <div className="form-group col-sm-2">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                        </section>
                    </Form>
                    </div>
                    </section>
                    </main>
                )}
            />
        )
    }
}

export default AddUsers ; 