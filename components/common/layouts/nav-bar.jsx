import React from 'react';
import CustomLink from 'UI/custom-link';

/**
 * @description Компонент навигации по сайту, содержит несуществующую страницу которая выводит на дефолтную 404 страницу,
   можно кастомизировать
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = () => {
	return (
		<>
			<nav className={'app__navbar'}>
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
		</>
	);
};

export default NavBar;
