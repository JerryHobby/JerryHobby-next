import React from 'react';
import PropTypes from 'prop-types';
import Title from "@/app/components/Title";

interface Props {
}

const Contact = () => {
    return (
        <main>
            <Title title = 'Contact Jerry' icon ='contact'></Title>
        </main>
    );
};

Contact.propTypes = {};

export default Contact;