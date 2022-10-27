import React from 'react';
import { icons } from '../../assets';
import { TextField } from '../TextField';

import styles from './Header.module.scss';

type HeaderProps = {};

// eslint-disable-next-line no-empty-pattern
export const Header = ({}: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.header_part}>
                <img src={icons.logo} className={styles.icon_logo} />
                <TextField type='normal-700-20-24' color='white'>
                    Wrench CRM
                </TextField>
            </div>
            <div className={styles.header_part}>
                <img src={icons.personIcon} className={styles.icon_profile} />
                <TextField type='normal-700-20-24' color='white'>
                    Имя Фамилия
                </TextField>
            </div>
        </div>
    );
};
export default null;
