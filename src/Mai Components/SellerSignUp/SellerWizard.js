import React from 'react';
import PropTypes from 'prop-types';
import AuthWizardProvider from 'components/wizard/AuthWizardProvider';
import SellerWizardLayout from './SellerWizardLayout';

const SellerWizard = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <SellerWizardLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

SellerWizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default SellerWizard;
