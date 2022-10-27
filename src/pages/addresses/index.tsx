import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { InputSearch } from '../../components/InputSearch';
import { TextField } from '../../components/TextField';
import { AddressState, fetchAddresses } from '../../store/addressReducer';
import { RootState, useAppDispatch } from '../../store/store';
import styles from './addresses.module.scss';
import cx from 'classnames';

type AddressesProps = {};

export const Addresses = ({}: AddressesProps) => {
    const dispatch = useAppDispatch();
    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
            if (values.search.trim().length > 2) {
                void dispatch(fetchAddresses(values.search));
            }
        },
    });
    const { addresses }: { addresses: AddressState } = useSelector(
        (state: RootState) => state,
    );
    console.log(addresses);

    return (
        <div className={styles.wrap}>
            <TextField type='normal-700-26-32' className={styles.title}>
                Новости
            </TextField>
            <TextField type='normal-500-20-24' className={styles.address_title}>
                Введите интересующий вас адрес
            </TextField>
            <InputSearch
                className={styles.search}
                placeholder='Введите интересующий вас адрес'
                name='search'
                value={values.search}
                onSubmit={handleSubmit}
                onChange={handleChange}
                disabled={addresses.isLoading}
            />
            {addresses.data !== undefined && (
                <div className={styles.response_wrap}>
                    <div className={cx(styles.row, styles.first)}>
                        <TextField type='normal-700-26-32'>Адреса</TextField>
                    </div>
                    {addresses.data.map((adr) => (
                        <div className={styles.row} key={adr}>
                            <TextField
                                color='full_black'
                                type='normal-500-20-24'
                            >
                                {adr}
                            </TextField>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
