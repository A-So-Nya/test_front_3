import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    // eslint-disable-next-line no-unused-vars
    onClick?: (event?: React.SyntheticEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    isLoading?: boolean;
}

export function Button({
    className,
    onClick,
    disabled,
    children,
    isLoading,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cx(
                styles.button,
                isLoading ? styles.loading : '',
                className,
            )}
        >
            {children}
        </button>
    );
}

export default null;
