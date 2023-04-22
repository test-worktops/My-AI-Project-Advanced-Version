import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from 'components/wizard/WizardInput';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MultiSelect from 'components/common/MultiSelect';

const SellerBillingUserForm = ({ register, errors, setValue }) => {
    return (
        <>
            <Row className="g-2 mb-3">
                <WizardInput
                    errors={errors}
                    label="Bussiness Name"
                    name="bussinessName"
                    placeholder="eg.Worktops"
                    formGroupProps={{
                        className: 'mb-3'
                    }}
                    formControlProps={{
                        ...register('bussinessName', {
                            required: 'Bussiness Name is Required'
                        })
                    }}
                />
            </Row>
            <Row className="g-2 mb-3">


                <WizardInput
                    type="select"
                    label="You Operate as a"
                    name="operateAs"
                    placeholder="You Operate as a..."
                    errors={errors}
                    options={['Self-Employed/Sole Trader', 'Limited Company', 'Limited Partnership', 'Ordinary Partnership']}
                    formGroupProps={{
                        className: 'w-50 mb-3'
                    }}
                    formControlProps={{
                        ...register('operateAs', {
                            required: 'This Field is Required'
                        })
                    }}
                />
                <WizardInput
                    type="select"
                    label="No.Of Employee"
                    name="employeelist"
                    placeholder="No.Of Employee..."
                    errors={errors}
                    options={['Myself Only', '2-5', '5-10', '10 +']}
                    formGroupProps={{
                        className: 'w-50 mb-3'
                    }}
                    formControlProps={{
                        ...register('employeelist', {
                            required: 'This Field is Required'
                        })
                    }}
                />
            </Row>

            <Row className="g-2 mb-3">
                <WizardInput
                    type="select"
                    label="Primary Skills"
                    name="primarySkills"
                    placeholder="Primary Skills..."
                    errors={errors}
                    options={['Skill-123', 'Skill-123', 'Skill-123', 'Skill-123']}
                    formGroupProps={{
                        className: 'w-50 mb-3'
                    }}
                    formControlProps={{
                        ...register('primarySkills', {
                            required: 'Primary Skills is Required'
                        })
                    }}
                />

                <WizardInput
                    type={<MultiSelect />}
                    label="Secondary Skills"
                    name="secondarySkills"
                    placeholder="Secondary Skills..."
                    errors={errors}
                    formGroupProps={{
                        className: 'w-50 mb-3'
                    }}
                    formControlProps={{
                        ...register('secondarySkills', {
                            required: 'Secondary Skills is Required'
                        })
                    }}
                />
            </Row>
            <Row className="g-2 mb-3">
                <WizardInput
                    type="select"
                    label="Upload Document"
                    name="uploadDoc"
                    placeholder="Select Document"
                    errors={errors}
                    options={['Passport', 'Driving License','Bio-Metric']}
                    formGroupProps={{
                        className: 'w-50 mb-3'
                    }}
                    formControlProps={{
                        ...register('uploadDoc', {
                            required: 'Upload Any One of the Document'
                        })
                    }}
                />
            </Row>
            <Button className='btn btn-outline'>Upload</Button>
        </>
    );
};

SellerBillingUserForm.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    setValue: PropTypes.func.isRequired
};

export default SellerBillingUserForm;
