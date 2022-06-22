import NavBar from 'components/common/layouts/nav-bar';
import Footer from 'components/common/layouts/footer';

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
	return (
		<div className={'app'}>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
