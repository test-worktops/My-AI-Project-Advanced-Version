import React from 'react';
import PropTypes from 'prop-types';
import AuthWizardProvider from 'components/wizard/AuthWizardProvider';
import JobWizardLayout from './JobWizardLayout';
// import ServicesWizardLayout from './ServicesWizardLayout';

const JobWizard = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <JobWizardLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

JobWizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default JobWizard;
