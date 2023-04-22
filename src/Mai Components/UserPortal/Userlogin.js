import React from 'react';
import { Link } from 'react-router-dom';
import AuthCardLayout from 'layouts/AuthCardLayout';
import { Button } from 'react-bootstrap';
import AdminPanelLoginForm from 'Mai Components/AdminLoginForm';

const Userlogin = () => {
  return (
    <AuthCardLayout
      leftSideContent={
        <p className="pt-3 text-white">
          Have an account?
          <br />
          <Button
            as={Link}
            variant="outline-light"
            className="mt-2 px-4"
            to="/authentication/card/login"
          >
            Log In
          </Button>
        </p>
      }
      footer={false}
    >
      <h3>Register</h3>
      <AdminPanelLoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Userlogin;
