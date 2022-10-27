import * as React from 'react';
import cx from 'classnames';
import styles from './TextField.module.scss';

export type TextColorsType = 'white' | 'full_black';
export type TextType =
    | 'normal-500-20-24'
    | 'normal-600-20-24'
    | 'normal-700-20-24'
    | 'normal-700-26-32';

export type TextProps = {
    type?: TextType;
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    color?: TextColorsType;
};

export const TextField = ({
    children,
    type,
    className,
    align,
    color,
}: TextProps) => (
    <span
        className={cx(
            styles.text,
            {
                [styles[`text--type--${type || ''}`]]: type,
                [styles[`text--align--${align || ''}`]]: align,
                [styles[`text--color--${color || ''}`]]: color,
            },
            className,
        )}
    >
        {children}
    </span>
);
