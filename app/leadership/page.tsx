import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const Leadership = () => {
    return (
        <main>
            <Title title = 'Leadership Skills' icon ='leadership'></Title>
        </main>
    );
};

Leadership.propTypes = {};

export default Leadership;