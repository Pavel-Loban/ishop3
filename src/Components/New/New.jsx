import React from 'react';
import { useContext } from 'react';
import { TextContainer } from "../Store/Store"

const New = () => {

    const context = useContext(TextContainer)

    return (
        <div>
            {context}
        </div>
    );
};

export default {New};