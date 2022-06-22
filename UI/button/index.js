import classNames from 'classnames';
import classes from './btn.module.scss';

/**
 * @description Компонент кнопки
 * @param {React.ButtonHTMLAttributes} props
 * @property {('success'|'danger'|'default')} props.factor
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
	const { factor, children, ...other } = props;
	const factorClass = 'btn__' + factor || 'default';
	return (
		<button {...other} className={classNames(classes.btn, classes[factorClass])}>
			{children}
		</button>
	);
};

export default Button;
