import React from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <>
            <Card className='mt-5'>
                <Card.Body>
                    <Breadcrumb className='mb-3 text-uppercase'>
                        <Breadcrumb.Item href="#">
                            Products
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Add Product
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4 className='mt-2'>Add Product</h4>
                            <small>Duplicate </small>
                            <small> Preview</small>
                        </div>
                        <div>
                            <Button className='m-1 d-block w-100'>Save</Button>
                            {''}
                            <Button className='m-1 btn btn-warning d-block w-100'>Save as Draft</Button>
                            {''}
                            <Button className='m-1 btn btn-success d-block w-100'>Publish Now</Button>
                            {''}
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Product Information</h5>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" className='w-100' />
                                            </Form.Group>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>SKU</Form.Label>
                                                    <Form.Control type="text" placeholder='eg.324812302' />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Weight</Form.Label>
                                                    <InputGroup className="mb-3">
                                                        <FormControl placeholder='0.0' type="number" aria-label="Text input with dropdown button" />

                                                        <DropdownButton
                                                            variant="outline-secondary"
                                                            title="Kg"
                                                            id="input-group-dropdown-2"
                                                            align="end"
                                                        >
                                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                        </DropdownButton>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                    <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                                </Form.Group>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Pricing</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Pricing</Form.Label>
                                            <InputGroup className="mb-3">
                                                <FormControl placeholder='0.00' type="number" aria-label="Text input with dropdown button" />

                                                <DropdownButton
                                                    variant="outline-secondary"
                                                    title="lb"
                                                    id="input-group-dropdown-2"
                                                    align="end"
                                                >
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </DropdownButton>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Compare Price</Form.Label>
                                            <Form.Control type="number" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Handling Charges</Form.Label>
                                            <Form.Control type="number" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Sales Price</Form.Label>
                                            <Form.Control type="number" className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={7}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        {/* <Flex justifyContent={between}> */}
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-3'>Media</h5>
                                            <div>
                                                <DropdownButton id="dropdown-basic-button" title="Add media from URL" variant='falcon-default'>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                </DropdownButton>
                                            </div>
                                        </div>
                                        {/* </Flex> */}
                                        <div className='mt-3 border-secondary w-100'>
                                            <small className='d-block text-align-center w-25'>
                                                Drag and Drop
                                                Your Files Here
                                                or
                                            </small>
                                            <Button className='mt-3 btn text-light btn-outline-secondary'>Browse Files</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Organization</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Vendor</Form.Label>
                                            <Form.Control type="text" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select>
                                                <option>Marble</option>
                                                <option>Tiles</option>
                                                <option>Quartz</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={7}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-3'>Variants</h5>
                                            <div>
                                                <Button className='bg-transparent text-secondary border-light'>+ Add Variant</Button>
                                            </div>
                                        </div>
                                        <h6 className='mt-3 mb-3'>OPTIONS</h6>
                                        <Row className="mb-3 g-3">
                                            <Form.Group as={Col} className='mb-3'>

                                                <Form.Select className='w-75'>
                                                    <option>Size</option>
                                                    <option>Colour</option>
                                                    <option>Material</option>
                                                    <option>Style</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} className='mb-3'>
                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3 g-3">
                                            <Form.Group as={Col} className='mb-3'>

                                                <Form.Select className='w-75'>
                                                    <option>Size</option>
                                                    <option>Colour</option>
                                                    <option>Material</option>
                                                    <option>Style</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} className='mb-3'>
                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3 g-3">
                                            <Form.Group as={Col} className='mb-3'>

                                                <Form.Select className='w-75'>
                                                    <option>Size</option>
                                                    <option>Colour</option>
                                                    <option>Material</option>
                                                    <option>Style</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} className='mb-3'>
                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                            </Form.Group>
                                        </Row>
                                        <Button className='bg-transparent text-primary'>+ Add Option</Button>
                                        {/* <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th scope="col"><Form.Check /></th>
                                                    <th scope='col'>IMAGE</th>
                                                    <th scope="col">COLOUR</th>
                                                    <th scope="col">SIZE</th>
                                                    <th scope="col">FINISH TYPE</th>
                                                    <th scope="col">PRICE</th>
                                                    <th scope="col">QUANTITY</th>
                                                    <th className="text-end" scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Form.Check /></td>
                                                    <td><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td className="text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Form.Check /></td>
                                                    <td><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td className="text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Form.Check /></td>
                                                    <td><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td>
                                                        <Form.Control type="text" className='w-100' />
                                                    </td>
                                                    <td className="text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Product Handle and Metafields</h5>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                Product handle
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <h5 className='mb-3'>Product Metafields</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Title Tag Meta Field
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Description Tag Meta Field
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Product Tag</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Category
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Colour
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Finish Type
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Length
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Width
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Thickness
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Pattern
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Stock Location
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Origin
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Offers
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body >
            </Card>

        </>
    )
}
export default AddProduct;