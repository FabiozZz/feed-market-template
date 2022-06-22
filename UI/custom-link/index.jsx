import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * @description Кастомная ссылка для оборачивания Link от Next'а
 *
 * @param {string} href - путь на который должна ввести ссылка
 * @param {text} text - текст ссылки
 * @param {string} className - свой класс ссылки, заменит существующий
 * @param {string} active - класс для активной ссылки
 * @returns {JSX.Element}
 * @constructor
 */
const CustomLink = ({ href, text, className, active }) => {
	const { pathname } = useRouter();
	if (pathname === href) {
		return <span className={`${className || 'app-link'} ${active || ''}`}>{text}</span>;
	}
	return (
		<Link href={href}>
			<a className={className || 'app-link'}>{text}</a>
		</Link>
	);
};

export default CustomLink;
