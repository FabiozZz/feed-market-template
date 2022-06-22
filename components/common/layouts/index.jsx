import NavBar from 'components/common/layouts/nav-bar';
import Footer from 'components/common/layouts/footer';
import { useEffect, useRef, useState } from 'react';
import { func } from 'prop-types';

/**
 * @description Корневой Layout, содержит основную разметку страницы, одинаковую для нескольких страниц
 *
 * @example <caption>Пример использования компонента</caption>
 *
 * // pages/index.js
 *
 * export default function Index(){
 *     return (
 *         <Layout>
 *             // ... other code
 *         </Layout>
 *     )
 * }
 *
 *
 * @param children - страница которую вы оборачиваете
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ({ children }) => {
	const [navbar, setNavbar] = useState(true);

	/**
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const ref = useRef(null);
	useEffect(() => {
		/**
		 * @param {WheelEvent} e
		 */
		function scroll(e) {
			if (e.deltaY < 1) {
				setNavbar(true);
			} else if (e.deltaY > 1) {
				setNavbar(false);
			}
			console.log(e);
		}
		/**
		 * @param {TouchEvent} e
		 */
		function scrollMobile(e) {
			console.log(e);
		}
		if (ref.current) {
			ref.current.addEventListener('mousewheel', scroll);
			ref.current.addEventListener('touchmove', scrollMobile);
		}
		return () => {
			if (ref.current) {
				ref.current.removeEventListener('mousewheel', scroll);
				ref.current.removeEventListener('touchmove', scrollMobile);
			}
		};
	}, []);

	return (
		<div ref={ref} className={'app'}>
			<NavBar show={navbar} />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
