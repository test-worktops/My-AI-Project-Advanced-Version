import React from "react";
import AuthWizardProvider from "components/wizard/AuthWizardProvider";
import PropTypes from 'prop-types';
import JobWizard from "./JobWizard";
// import ServicesWizard from "./ServicesWizard";
function AddJobs(variant, validation, progressBar) {
  return (
    <>
      <AuthWizardProvider>
        <JobWizard
          variant={variant}
          validation={validation}
          progressBar={progressBar}

        />
      </AuthWizardProvider>
    </>
  )
};
AddJobs.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default AddJobs