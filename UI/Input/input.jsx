import React from 'react';
import classes from './index.module.scss'
import classNames from "classnames";

const Input = ({size='default'}) => {
    const sizeInput = 'size_'+size
    return (
        <input type="text" className={classNames(classes.input,classes[sizeInput])}/>
    );
};

export default Input;