import React from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import MultiSelect from 'components/common/MultiSelect';

const AddFreelancer = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Breadcrumb className='mb-3 text-capitalize'>
                        <Breadcrumb.Item href="#">
                            Freelancer
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Add Freelancer
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>Add Freelancer</h4>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Freelancer Information</h5>
                                        <Form>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" />
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <Form.Control type="email" />
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Form.Label>You Operate as a</Form.Label>
                                                    <Form.Select>
                                                        <option>Self-Employed/Sole Trader</option>
                                                        <option>Limited Company</option>
                                                        <option>Ordinary Partnership</option>
                                                        <option>Limited Partnership</option>
                                                    </Form.Select>

                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Bussiness Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Form.Label>No.Of Employee</Form.Label>
                                                    <Form.Select>
                                                        <option>Select</option>
                                                        <option>Myself Only</option>
                                                        <option>2-5</option>
                                                        <option>5-10</option>
                                                        <option>10+</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Label>Primary Skill</Form.Label>
                                                <Form.Select>
                                                    <option>Select</option>
                                                    <option>Skill 1</option>
                                                    <option>Skill 2</option>
                                                    <option>Skill 3</option>
                                                </Form.Select>
                                            </Form.Group >
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Label>Secondary Skill</Form.Label>
                                                <MultiSelect />
                                            </Form.Group>
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Label>Bussiness Address</Form.Label>
                                                <Form.Control as="textarea" placeholder='Enter Your Bussiness Address....' rows={8} />
                                            </Form.Group>
                                            <Form.Group className='mb-3' as={Col}>

                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Check className='d-inline me-1'></Form.Check> <small> <strong> Note:</strong> Address and the Billing address should be same.</small>
                                            </Form.Group>
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Label>Billing Address</Form.Label>
                                                <Form.Control as="textarea" placeholder='Enter Your Billing Address....' rows={8} />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                            </Form.Group>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" />
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Check className='d-inline me-1'></Form.Check> <small><strong>You Agree to the terms & conditions.</strong></small>
                                            </Form.Group>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Button className='btn btn-success'>Create</Button>
                                                </Form.Group>
                                                <Form.Group as={Col}>
                                                    <Button className='btn btn-danger'>Cancel</Button>
                                                </Form.Group>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Freelancer Type</h5>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Fabricators</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Kitchen Designer</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Interior Designer</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Stone Seller</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Slink Manufacture</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Tap Seller</span>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check className='d-inline me-1'></Form.Check> <span>Construction Company</span>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Col>
                                    <Card className='mt-3'>
                                        <Card.Body>
                                            <h5 className='mb-3'>Documents</h5>
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Select className='mb-3'>
                                                    <option>Select</option>
                                                    <option>Driving License</option>
                                                    <option>Passport</option>
                                                    <option>Registration Document</option>
                                                    <option>VAT Document</option>
                                                    <option>Freelancer Type</option>
                                                </Form.Select>
                                                <Button>Upload</Button>
                                            </Form.Group >
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Select className='mb-3'>
                                                    <option>Select</option>
                                                    <option>Driving License</option>
                                                    <option>Passport</option>
                                                    <option>Registration Document</option>
                                                    <option>VAT Document</option>
                                                    <option>Freelancer Type</option>
                                                </Form.Select>
                                                <Button>Upload</Button>
                                            </Form.Group >
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Select className='mb-3'>
                                                    <option>Select</option>
                                                    <option>Driving License</option>
                                                    <option>Passport</option>
                                                    <option>Registration Document</option>
                                                    <option>VAT Document</option>
                                                    <option>Freelancer Type</option>
                                                </Form.Select>
                                                <Button>Upload</Button>
                                            </Form.Group >
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Select className='mb-3'>
                                                    <option>Select</option>
                                                    <option>Driving License</option>
                                                    <option>Passport</option>
                                                    <option>Registration Document</option>
                                                    <option>VAT Document</option>
                                                    <option>Freelancer Type</option>
                                                </Form.Select>
                                                <Button>Upload</Button>
                                            </Form.Group >
                                            <Form.Group className='mb-3' as={Col}>
                                                <Form.Select className='mb-3'>
                                                    <option>Select</option>
                                                    <option>Driving License</option>
                                                    <option>Passport</option>
                                                    <option>Registration Document</option>
                                                    <option>VAT Document</option>
                                                    <option>Freelancer Type</option>
                                                </Form.Select>
                                                <Button>Upload</Button>
                                            </Form.Group >
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Col>

                        </Row>

                    </Container>
                </Card.Body >
            </Card>

        </>
    )
}
export default AddFreelancer;