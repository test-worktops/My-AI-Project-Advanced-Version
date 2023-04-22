import React from "react";
import AuthWizardProvider from "components/wizard/AuthWizardProvider";
import PropTypes from 'prop-types';
import ServicesWizard from "./ServicesWizard";
function AddServices(variant, validation, progressBar) {
  return (
    <>
      <AuthWizardProvider>
        <ServicesWizard
          variant={variant}
          validation={validation}
          progressBar={progressBar}

        />
      </AuthWizardProvider>
    </>
  )
};
AddServices.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default AddServices