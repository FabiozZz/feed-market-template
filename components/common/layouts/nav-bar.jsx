import React, { useEffect, useRef } from 'react';
import CustomLink from 'UI/custom-link';
import classNames from 'classnames';
import Image from 'next/image'
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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
			<div className={'nav-wrapper'}>
				<div className='nav-wrapper__logo'>
					<Image src={'/Logo.svg'} width={148} height={64} alt={'logo'}/>
				</div>
				<div className='nav-wrapper__links'>
					<CustomLink href={'/some'} className={'link'} active={'link_active'}>Птицы</CustomLink>
					<CustomLink href={'/some'} className={'link'} active={'link_active'}>КРС</CustomLink>
					<CustomLink href={'/some'} className={'link'} active={'link_active'}>Свиньи</CustomLink>
					<CustomLink href={'/some'} className={'link'} active={'link_active'}>Сырьё</CustomLink>
				</div>
				<div className='nav-wrapper__search'>
					<TextField
						id="standard-basic"
						label="Поиск"
						variant="standard"
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/></div>
				<div className='nav-wrapper__settings'></div>
			</div>
		</nav>
	);
};

export default NavBar;
