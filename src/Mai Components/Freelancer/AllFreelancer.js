import React from "react";
import { Card, Breadcrumb, Button, DropdownButton, Dropdown, Row, Col, Form, Table } from "react-bootstrap";

import AdvancedFreelancerTable from "./AdvancedFreelancerTable";

function AllFreelancer() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Breadcrumb className='mb-3 text-uppercase'>
                        <Breadcrumb.Item href="#">
                            Freelancer
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            All Freelancer
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>All Freelancer</h4>
                        </div>
                        <div>
                            <Row>
                                <Col lg={5}>
                                    <DropdownButton
                                        variant="outline-secondary"
                                        title="More Action"
                                        id="input-group-dropdown-2"
                                        align="end"
                                        className="mt-1"
                                    >
                                        <Dropdown.Item href="#">Bulk Edit</Dropdown.Item>
                                        <Dropdown.Item href="#">Add Product By CSV</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col lg={7}>
                                    <Button className='m-1 bg-success border-success'>Add Freelancer</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="mt-3">
                        <AdvancedFreelancerTable />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default AllFreelancer