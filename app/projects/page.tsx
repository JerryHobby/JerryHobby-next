import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const Projects = () => {
    return (
        <main>
            <Title title = 'Projects and Demos' icon ='projects'></Title>
        </main>
    );
};

Projects.propTypes = {};

export default Projects;