import React from 'react';

import cx from 'classnames';
import styles from './Layout.module.scss';
import { MainMenu } from '../MainMenu';
import { Header } from '../Header';
import { icons } from '../../assets';

interface OwnProps {
    children?: any;
    className?: string;
}

interface LayoutProps extends OwnProps {
    // eslint-disable-next-line react/no-unused-prop-types
    location?: string;
}
const menuLinks: Array<{
    icon: string;
    label: string;
    link?: string;
    secondLevel?: boolean;
}> = [
    {
        icon: icons.mainIcon,
        label: 'Главная',
        link: '/',
    },
    {
        icon: icons.searchIcon,
        label: 'Поиск адресов',
        link: '/address',
    },
    {
        icon: icons.tablesIcon,
        label: 'Таблицы',
    },
    {
        icon: icons.mapsIcon,
        label: 'Карты',
    },
    {
        icon: icons.widgetsIcon,
        label: 'Виджеты',
    },
    {
        icon: icons.settingsIcon,
        label: 'Настройки',
    },
    {
        icon: icons.profileIcon,
        label: 'Настройки профиля',
        secondLevel: true,
    },
    {
        icon: icons.financesIcon,
        label: 'Управление финансами',
        secondLevel: true,
    },
    {
        icon: icons.exitIcon,
        label: 'Выход',
    },
];

export function Layout({ children, className }: LayoutProps) {
    return (
        <div className={cx(styles.main_layout, className)}>
            <Header />
            <div className={styles.menu_and_content}>
                <MainMenu menuLinks={menuLinks} />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}

export default null;
