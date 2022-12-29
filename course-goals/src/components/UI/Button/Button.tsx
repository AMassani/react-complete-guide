import React from 'react';

import styles from './Button.module.css';

type Props = {
    onClick: any;
    type: "button" | "reset" | "submit" ;
    children?: React.ReactNode;
    className: string;
}

const Button = (props: Props) => {
    // @ts-ignore
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
        {props.children}
        </button>
);
};

export default Button;