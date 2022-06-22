import Layout from 'components/common/layouts';
import React, { useState } from 'react';
import HeadMeta from 'components/common/head-meta';
import C from 'components/common/counter/counter';
/**
 * @description Страница с локальным счетчиком
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Counter = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => setCounter((prevState) => prevState + 1);
	const decrement = () => setCounter((prevState) => prevState - 1);
	return (
		<Layout>
			<HeadMeta
				title={'Счетчик без редакса'}
				description={'Главная страница для проверки и тестов темплейта'}
				author={'Mr_FabiozZz'}
				keywords={'js javascript next nextjs'}
			/>

			<C counter={counter} decrement={decrement} increment={increment} />
		</Layout>
	);
};

export default Index;
