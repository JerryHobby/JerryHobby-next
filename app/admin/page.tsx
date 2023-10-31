import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const AdminHomePage = () => {
    return (
        <>
            <Title title = 'Admin' icon ='admin'></Title>
        </>
    );
};

AdminHomePage.propTypes = {};

export default AdminHomePage;