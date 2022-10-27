import React from 'react';
import { icons } from '../../assets';
import { Button } from '../Button';
import { TextField } from '../TextField';
import cx from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
    disabled?: boolean;
    name: string;
    value?: string | number;
    onSubmit?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

export const InputSearch = ({
    disabled,
    name,
    value,
    onSubmit,
    onChange,
    placeholder,
    className,
}: InputProps) => (
    <div className={cx(styles.wrap, className)}>
        <input
            value={value}
            name={name}
            disabled={disabled}
            className={styles.input}
            onKeyDown={(e) => {
                if (onSubmit && e.key === 'Enter') {
                    onSubmit();
                }
            }}
            onChange={(e) => {
                if (onChange) {
                    onChange(e);
                }
            }}
            placeholder={placeholder}
        />
        <Button
            className={styles.search_button}
            onClick={onSubmit}
            disabled={disabled}
        >
            <img src={icons.searchInputIcon} />
            <TextField type='normal-700-26-32' color='white'>
                Поиск
            </TextField>
        </Button>
    </div>
);
