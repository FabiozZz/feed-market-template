import React, { useEffect, useRef } from 'react';
import CustomLink from 'UI/custom-link';
import classNames from 'classnames';

/**
 * @description Компонент навигации по сайту, содержит несуществующую страницу которая выводит на дефолтную 404 страницу,
   можно кастомизировать
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = ({ show }) => {
	return (
		<nav
			className={classNames(
				'app__navbar ',
				{ ['app__navbar-open']: show },
				{ ['app__navbar-hide']: !show }
			)}>
			<CustomLink href={'/'} active={'active-app-link'} text={'Главная'} />
			<CustomLink
				href={'/counter'}
				active={'active-app-link'}
				text={'Счетчик без редакса'}
			/>
			<CustomLink
				href={'/counter-redux'}
				active={'active-app-link'}
				text={'Счетчик с редаксом'}
			/>
			<CustomLink
				active={'active-app-link'}
				href={'/some-page-navigate'}
				text={'Не существующая страница'}
			/>
		</nav>
	);
};

export default NavBar;
