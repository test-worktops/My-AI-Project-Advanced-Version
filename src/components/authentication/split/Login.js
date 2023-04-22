import React from 'react';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bgImg from 'assets/img/generic/14.jpg';
import Flex from 'components/common/Flex';
import AdminPanelLoginForm from 'Mai Components/AdminLoginForm';

const Login = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg, position: '50% 20%' }}>
      <Flex alignItems="center" justifyContent="between">
        <h3>Staff Login</h3>
      </Flex>
      <AdminPanelLoginForm layout="split" hasLabel />
    </AuthSplitLayout>
  );
};

export default Login;
