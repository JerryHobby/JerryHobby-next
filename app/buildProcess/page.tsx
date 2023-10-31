import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const BuildProcess = () => {
    return (
        <main>
            <Title title = 'Build Process' icon ='buildProcess'></Title>
        </main>
    );
};

BuildProcess.propTypes = {};

export default BuildProcess;