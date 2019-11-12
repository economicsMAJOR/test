import React from 'react';
import BigText from '../components/BigText';

const Good = ({params}) => {
    return (
        <div>
            <BigText>{params.id}</BigText>
        </div>
    );
};

export default Good;