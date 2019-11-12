import React from 'react';
import BigText from '../components/BigText';
import GoodLinks from '../components/GoodLinks';

const Shop = ({children}) => {
    return (
        <div>
            <BigText>샵을 만들 예정</BigText>
            <GoodLinks/>
            {children}
        </div>
    );
};

export default Shop;
