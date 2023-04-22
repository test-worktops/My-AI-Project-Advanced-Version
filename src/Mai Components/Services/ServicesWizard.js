import React from 'react';
import PropTypes from 'prop-types';
import AuthWizardProvider from 'components/wizard/AuthWizardProvider';
import ServicesWizardLayout from './ServicesWizardLayout';

const ServicesWizard = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <ServicesWizardLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

ServicesWizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default ServicesWizard;
