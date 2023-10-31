import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const Technical = () => {
    return (
        <main>
            <Title title = 'Technical Skills' icon ='technical'></Title>
        </main>
    );
};

Technical.propTypes = {};

export default Technical;