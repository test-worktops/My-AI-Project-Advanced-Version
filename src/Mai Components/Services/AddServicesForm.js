import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WizardInput from 'components/wizard/WizardInput';
import { Col, Container, Row, Card, Breadcrumb, Form, Button } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import MultiSelect from 'components/common/MultiSelect';

const AddServicesForm = ({ register, errors, watch, }) => {

    return (
        <>

            <Breadcrumb className='mb-3 text-capitalize'>
                <Breadcrumb.Item href="#">
                    Services
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Add Services
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className='d-flex justify-content-between'>
                <div>
                    <h4>Add Services</h4>
                </div>
                <div>
                    <WizardInput
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
                    />
                </div>
            </div>
            <Container>
                <Row>
                    <Col lg={7}>
                        <Card className='mt-3'>
                            <Card.Body>
                                <WizardInput
                                    label="Service Title"
                                    name="serviceTitle"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('serviceTitle', {
                                            required: 'Service Title is Required',
                                        })
                                    }}
                                />
                                <Row>

                                    <WizardInput
                                        type="select"
                                        label="Service Category"
                                        name="serviceCategory"
                                        placeholder="Select Category"
                                        errors={errors}
                                        options={['Kitchen Worktops', 'Interior Design', 'Electronic Works']}
                                        formGroupProps={{
                                            className: 'w-50 mb-3'
                                        }}
                                        formControlProps={{
                                            ...register('serviceCategory', {
                                                required: 'This Field is Required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        type="select"
                                        label="Service Email"
                                        name="serviceEmail"
                                        placeholder="Service Email"
                                        errors={errors}
                                        options={['testwroktops@gmail.com', 'indiaproduced@gmail.com']}
                                        formGroupProps={{
                                            className: 'w-50 mb-3'
                                        }}
                                        formControlProps={{
                                            ...register('serviceEmail', {
                                                required: 'This Field is Required'
                                            })
                                        }}
                                    />
                                </Row>
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
                                <WizardInput
                                    type={<MultiSelect />}
                                    label="Service Location"
                                    name="serviceLocation"
                                    placeholder="Service Location..."
                                    errors={errors}
                                    formGroupProps={{
                                        className: 'w-100 mb-3'
                                    }}
                                    formControlProps={{
                                        ...register('serviceLocation', {
                                            required: 'Service Location is Required'
                                        })
                                    }}
                                />
                                <WizardInput
                                    type={<MultiSelect />}
                                    label="Service Range"
                                    name="serviceRange"
                                    placeholder="Service Range..."
                                    errors={errors}
                                    formGroupProps={{
                                        className: 'w-100 mb-3'
                                    }}
                                    formControlProps={{
                                        ...register('serviceRange', {
                                            required: 'Service Range is Required'
                                        })
                                    }}
                                />



                                {/* <WizardInput
                                    type="checkbox"
                                    errors={errors}
                                    label={
                                        <>
                                            Shipping Requires
                                        </>
                                    }
                                    formGroupProps={{
                                        className: 'w-50 mb-3'
                                    }}
                                    name="shippingRequires"
                                    formControlProps={{
                                        ...register('shippingRequires', {
                                            required: 'You need to agree the terms.'
                                        })
                                    }}
                                />
                                <WizardInput
                                    type="checkbox"
                                    errors={errors}
                                    label="Charge Taxes on this product"
                                    formGroupProps={{
                                        className: 'ms-3 mb-3'
                                    }}
                                    name="chargeTaxes"
                                    formControlProps={{
                                        ...register('chargeTaxes', {
                                            required: 'You need to agree the terms.'
                                        })
                                    }}
                                /> */}
                                <Row className="g-2 mb-3">
                                    <WizardInput
                                        errors={errors}
                                        label="Price Type"
                                        name="priceType"
                                        type='select'
                                        options={['Price type-1', 'Price type-2', 'Price type-3']}
                                        placeholder="Price Type"
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('priceType', {
                                                required: 'Price Type is required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        errors={errors}
                                        label="Price"
                                        name="price"
                                        placeholder="£"
                                        type='number'
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('price', {
                                                required: 'Price is Required'
                                            })
                                        }}
                                    />
                                </Row>
                                <Row className="g-2 mb-3">
                                    <WizardInput
                                        errors={errors}
                                        label="Office Price"
                                        name="officePrice"
                                        type='number'
                                        placeholder="£"
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('officePrice', {
                                                required: 'Office Price is required'
                                            })
                                        }}
                                    />
                                    <WizardInput
                                        errors={errors}
                                        label="Display Price"
                                        name="displayPrice"
                                        placeholder="£"
                                        type='number'
                                        formGroupProps={{
                                            className: 'mb-3 w-50'
                                        }}
                                        formControlProps={{
                                            ...register('displayPrice', {
                                                required: 'Display Price is Required'
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

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5}>
                        <Card className='mt-3'>
                            <Card.Body>
                                <Row>
                                    <Form.Label>Service Images</Form.Label>
                                    <Button className='btn btn-success m-2 w-75'>Upload</Button>
                                    <Button className='btn btn-danger m-2 w-75'>Remove</Button>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='mt-3'>
                            <Card.Body>
                                <h5 className='mb-3'>Services Handle And Metafields</h5>
                                <WizardInput
                                    label="Service Handle"
                                    name="servicehandle"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('servicehandle', {
                                            required: 'Service Handle is Required',
                                        })
                                    }}
                                />
                                <h5 className='mb-3'>Services Metafields</h5>
                                <WizardInput
                                    label="Title Tag Meta Field"
                                    name="titleTagMetaField"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('titleTagMetaField', {
                                            required: 'Title Tag Meta Field is Required',
                                        })
                                    }}
                                />

                                <WizardInput
                                    label="Descrption Tag Meta Field"
                                    name="decriptionTagMetaField"
                                    errors={errors}
                                    formGroupProps={{ className: 'mb-3' }}
                                    formControlProps={{
                                        ...register('decriptionTagMetaField', {
                                            required: 'Descrption Tag Meta Field is Required',
                                        })
                                    }}
                                />

                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        {/* <Card className='mt-3'>
                            <Card.Body> */}
                                <IconButton
                                variant="success"
                                className="ms-auto mt-3 px-5"
                                type="submit"
                                iconAlign="right"
                                transform="down-1 shrink-4"
                            >
                                Add Services
                            </IconButton>
                            {/* </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

AddServicesForm.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    watch: PropTypes.func,
};

export default AddServicesForm;
