import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Nav, ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import AppContext, { AuthWizardContext } from 'context/Context';
import IconButton from 'components/common/IconButton';


import Flex from 'components/common/Flex';
import WizardModal from 'components/wizard/WizardModal';
import AddServicesForm from './AddServicesForm';


const ServicesWizardLayout = ({ variant, validation, progressBar }) => {
    const { isRTL } = useContext(AppContext);
    const { user, setUser, step, setStep } = useContext(AuthWizardContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
        clearErrors
    } = useForm();

    const [modal, setModal] = useState(false);

    //   const navItems = [
    //     {
    //       icon: 'lock',
    //       label: 'Account'
    //     },
    //     {
    //       icon: 'user',
    //       label: 'Personal Details'
    //     },
    //     {
    //       icon: 'dollar-sign',
    //       label: 'Bussiness Address'
    //     },
    //     {
    //       icon: 'thumbs-up',
    //       label: 'Done'
    //     }
    //   ];

    const onSubmitData = data => {
        setUser({ ...user, ...data });
        setStep(step + 1);
    };
    const onError = () => {
        if (!validation) {
            clearErrors();
            setStep(step + 1);
        }
    };

    const toggle = () => setModal(!modal);

    const handleNavs = targetStep => {
        if (step !== 4) {
            if (targetStep < step) {
                setStep(targetStep);
            } else {
                handleSubmit(onSubmitData, onError)();
            }
        } else {
            toggle();
        }
    };

    return (
        <>
            <WizardModal modal={modal} setModal={setModal} />
            <Card
                as={Form}
                noValidate
                onSubmit={handleSubmit(onSubmitData, onError)}
                className="theme-wizard mb-5"
            >
                {progressBar && <ProgressBar now={step * 25} style={{ height: 2 }} />}
                <Card.Body className="fw-normal px-md-6 py-4">

                    {step === 1 && (
                        <AddServicesForm register={register} errors={errors} watch={watch} />
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

const NavItem = ({ index, step, handleNavs, icon, label }) => {
    return (
        <Nav.Item>
            <Nav.Link
                className={classNames('fw-semi-bold', {
                    done: index < 4 ? step > index : step > 3,
                    active: step === index
                })}
                onClick={() => handleNavs(index)}
            >
                <span className="nav-item-circle-parent">
                    <span className="nav-item-circle">
                        <FontAwesomeIcon icon={icon} />
                    </span>
                </span>
                <span className="d-none d-md-block mt-1 fs--1">{label}</span>
            </Nav.Link>
        </Nav.Item>
    );
};

const NavItemPill = ({ index, step, handleNavs, icon, label }) => {
    return (
        <Nav.Item>
            <Nav.Link
                className={classNames('fw-semi-bold', {
                    done: step > index,
                    active: step === index
                })}
                onClick={() => handleNavs(index)}
            >
                <Flex alignItems="center" justifyContent="center">
                    <FontAwesomeIcon icon={icon} />
                    <span className="d-none d-md-block mt-1 fs--1 ms-2">{label}</span>
                </Flex>
            </Nav.Link>
        </Nav.Item>
    );
};

ServicesWizardLayout.propTypes = {
    variant: PropTypes.oneOf(['pills']),
    validation: PropTypes.bool,
    progressBar: PropTypes.bool
};

NavItemPill.propTypes = {
    index: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    handleNavs: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

NavItem.propTypes = NavItemPill.propTypes;

export default ServicesWizardLayout;
