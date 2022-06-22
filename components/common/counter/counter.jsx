import React, { useEffect, useState } from 'react';
import { useAction } from 'hooks/useActions';
import classes from './counter.module.scss';
import Button from 'UI/button';

/**
 * @description Компонент предназначен для того чтобы управлять счетчиком, своего состояния не имеет,
   использовать получая данные от родителя
 *
 * @example <caption>Пример использования компонента с локальным состоянием</caption>
 *
 * 	const [counter,setCounter] = useState(0)
 *
 * 	<Counter
 * 		counter={counter}
 * 		decrement={()=>setCounter(prevState=>prevState - 1)}
 * 		increment={()=>setCounter(prevState=>prevState + 1)}
 * 	/>
 *
 *
 * @example <caption>Пример использования компонента с состоянием из redux</caption>
 *
 *  const {counter} = useSelector(state=>state.reducer)
 *
 * 	const [counter,setCounter] = useState(0)
 *
 * 	// useEffect здесь нужен чтобы при первой отрисовке не было проблем и страница пришла с сервера с 0,
 *  // а потом при монтировании подтянулись данные из редакс, страница перерендерилась на клиенте
 * 	useEffect(()=>{
 * 	   setCounter(counter)
 * 	},[])
 *
 * 	<Counter counter={counter} decrement={()=>setCounter(prevState=>prevState - 1)} increment={()=>setCounter(prevState=>prevState + 1)} />
 *
 *
 * @param {number} counter - счетчик
 * @param {function():void} decrement - функция для уменьшения счетчика
 * @param {function():void} increment - функция для увеличения счетчика
 * @returns {JSX.Element}
 * @constructor
 */
const Counter = ({ counter, decrement, increment }) => {
	return (
		<div className={classes.counter}>
			<Button factor={'success'} onClick={increment}>
				+
			</Button>
			<span>Счетчик {counter}</span>
			<Button factor={'danger'} onClick={decrement}>
				-
			</Button>
		</div>
	);
};

export default Counter;
