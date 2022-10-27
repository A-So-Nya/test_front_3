import React from 'react';
import cx from 'classnames';
import styles from './MainMenu.module.scss';
import { TextField } from '../TextField';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

interface OwnProps {
    className?: string;
    menuLinks: Array<{
        icon: string;
        label: string;
        link?: string;
        secondLevel?: boolean;
    }>;
    onClick?: () => void;
}

type MainMenuProps = OwnProps;

export const MainMenu = ({ className, menuLinks }: MainMenuProps) => {
    const history = useNavigate();
    return (
        <div className={cx(styles.main_menu, className)}>
            <div className={styles.menuPart} id='first'>
                <TextField type='normal-700-20-24'>Меню</TextField>
            </div>
            {menuLinks.map((menuPart) => (
                <div key={menuPart.label}>
                    <Button
                        onClick={() => {
                            if (menuPart.link) {
                                history(menuPart.link);
                            }
                        }}
                        className={cx(
                            styles.menuPart,
                            menuPart.secondLevel && styles.secondLevel,
                        )}
                    >
                        <img src={menuPart.icon} />
                        <TextField
                            type='normal-600-20-24'
                            className={styles.label}
                            align='left'
                        >
                            {menuPart.label}
                        </TextField>
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default null;
