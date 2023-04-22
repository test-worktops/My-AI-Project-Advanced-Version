import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WizardInput from 'components/wizard/WizardInput';
import { Col, Container, Row, Card, Breadcrumb, Form, Button } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { Link } from 'react-router-dom';


const AddJobsForm = ({ register, errors, watch, }) => {

    return (
        <>

            <Breadcrumb className='mb-3 text-capitalize'>
                <Breadcrumb.Item href="#">
                    Jobs
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Add Jobs
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className='d-flex justify-content-between'>
                <div>
                    <h4>Add Jobs</h4>
                </div>
                <div>
                    {/* <WizardInput
                        type="select"
                        label="Status"
                        name="status"
                        placeholder='Draft'
                        errors={errors}
                        options={['Active']}
                        formGroupProps={{
                            className: 'w-100 mb-3'
                        }}
                        formControlProps={{
                            ...register('status', {
                                required: 'Status Required'
                            })
                        }}
                    /> */}
                </div>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card className='mt-3'>
                            <Card.Body>
                                <WizardInput
                                    label="Customer Email"
                                    name="customerEmail"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('customerEmail', {
                                            required: 'Customer Email is Required',
                                        })
                                    }}
                                />
                                <Row>

                                    <WizardInput
                                        type="select"
                                        label="Category"
                                        name="serviceCategory"
                                        placeholder="Select Category"
                                        errors={errors}
                                        options={['Kitchen Worktops', 'Interior Design', 'Electronic Works']}
                                        formGroupProps={{
                                            className: 'w-50 mb-3'
                                        }}
                                        formControlProps={{
                                            ...register('serviceCategory', {
                                                required: 'Category is Required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        type="select"
                                        label="Sub Category"
                                        name="servicesubCategory"
                                        placeholder="Select Sub-Category"
                                        errors={errors}
                                        options={['Kitchen Worktops', 'Interior Design', 'Electronic Works']}
                                        formGroupProps={{
                                            className: 'w-50 mb-3'
                                        }}
                                        formControlProps={{
                                            ...register('servicesubCategory', {
                                                required: 'Sub-Category is Required'
                                            })
                                        }}
                                    />
                                </Row>
                                <WizardInput
                                    label="Project Title"
                                    name="projectTitle"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('projectTitle', {
                                            required: 'ProjectTitle is Required',
                                        })
                                    }}
                                />
                                <WizardInput
                                    type="textarea"
                                    errors={errors}
                                    label="Description*"
                                    name="description"
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('description', {
                                            required: 'Please Describe Your Feedback',
                                            pattern: {
                                                value:
                                                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
                                                message: 'Email must be valid'
                                            }
                                        })
                                    }}
                                />

                                <Row className='mb-3'>
                                    <Form.Label>Upload Samples</Form.Label>
                                    <small>Drop Files here or Upload Samples</small>
                                    <Button className='btn btn-success m-2 w-25'>Upload</Button>

                                </Row>
                                <Row className="g-2 mb-3">
                                    <WizardInput
                                        errors={errors}
                                        label="Budget Type"
                                        name="budgetType"
                                        type='select'
                                        options={['Fixed Price:', 'No Idea', 'No Range']}
                                        placeholder="Select"
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('budgetType', {
                                                required: 'Budget Type is required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        errors={errors}
                                        label="Currency"
                                        name="currency"
                                        type='select'
                                        options={['£ GBP :', '£ EUR']}
                                        placeholder="Select"
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('currency', {
                                                required: 'Currency Type is required'
                                            })
                                        }}
                                    />
                                </Row>
                                <WizardInput
                                    errors={errors}
                                    label="Budget"
                                    name="budget"
                                    placeholder="£"
                                    type='number'
                                    formGroupProps={{
                                        className: 'mb-3 w-50'
                                    }}
                                    formControlProps={{
                                        ...register('budget', {
                                            required: 'Budget is Required'
                                        })
                                    }}
                                />
                                <WizardInput
                                    label="Project Locations"
                                    name="projectLocations"
                                    errors={errors}
                                    placeholder='Geo Locations'
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('projectLocations', {
                                            required: 'Project Locations is Required',
                                        })
                                    }}
                                />

                                <Row className="g-2 mb-3">
                                    <WizardInput
                                        errors={errors}
                                        label="Post Code"
                                        name="postcode"
                                        type='text'
                                        placeholder=""
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('postcode', {
                                                required: 'Post Code is required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        errors={errors}
                                        label="Starting Date (optional)"
                                        name="startingDate"

                                        type='date'
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('startingDate', {
                                                required: 'Starting Date is Required'
                                            })
                                        }}
                                    />
                                </Row>
                                <WizardInput
                                    type="textarea"
                                    label="Terms & Conditions"
                                    name="termsConditions"
                                    errors={errors}
                                    formGroupProps={{
                                        className: 'mb-3'
                                    }}
                                    formControlProps={{
                                        ...register('termsConditions', {
                                            required: 'You need to agree the terms and conditions.'
                                        })
                                    }}
                                />
                                <WizardInput
                                    type="radio"
                                    errors={errors}
                                    label={
                                        <>
                                            <strong>Public </strong>
                                            <small>
                                                (All freelancers can view the project post and send proposals)
                                            </small>
                                        </>
                                    }
                                    formGroupProps={{
                                        className: 'ms-3 mb-3'
                                    }}
                                    name="public"
                                    formControlProps={{
                                        ...register('public')
                                    }}
                                />
                                <WizardInput
                                    type="radio"
                                    errors={errors}
                                    label={
                                        <>
                                            <strong>Private</strong>
                                            <small>
                                                (Only freelancers that you specifically invite can view the
                                                project post and send proposal)
                                            </small>
                                        </>
                                    }
                                    formGroupProps={{
                                        className: 'ms-3 mb-3'
                                    }}
                                    name="public"
                                    formControlProps={{
                                        ...register('public'
                                            , {
                                                required: 'Select Anyone'
                                            })
                                    }}
                                />
                                <Row className="g-2 mb-3">
                                    <WizardInput
                                        errors={errors}
                                        label="Project Duration Time"
                                        name="projectDuration"
                                        type='text'
                                        placeholder=""
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('projectDuration', {
                                                required: 'Project Duration is required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        errors={errors}
                                        label="Expiry Date"
                                        name="expiryDate"

                                        type='date'
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('expiryDate', {
                                                required: 'Expiry Date is Required'
                                            })
                                        }}
                                    />
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <IconButton
                                            variant="success"
                                            className="ms-auto w-50 mt-3 "
                                            type="submit"
                                            iconAlign="right"
                                            transform="down-1 shrink-4"
                                        >
                                           Post a Job
                                        </IconButton>
                                    </Col>
                                    <Col lg={6}>
                                        <Link to='/e-commerce/jobs/all-jobs'>
                                            <Button className='btn btn-danger m-2 w-50'>Cancel</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

AddJobsForm.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    watch: PropTypes.func,
};

export default AddJobsForm;
