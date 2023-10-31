import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const Resume = () => {
    return (
        <main>
            <Title title = 'Download Resumes' icon ='resume'></Title>
        </main>
    );
};

Resume.propTypes = {};

export default Resume;