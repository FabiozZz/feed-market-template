import React, { useEffect } from 'react';
import Layout from 'components/common/layouts';
import HeadMeta from 'components/common/head-meta';
import Counter from 'components/common/counter/counter';
/**
 * @description Страница с отображением состояния из redux
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CounterRedux = () => {
	return (
		<Layout>
			<HeadMeta
				title={'Счетчик с редаксом'}
				description={'Главная страница для проверки и тестов темплейта'}
				author={'Mr_FabiozZz'}
				keywords={'js javascript next nextjs'}
			/>
			<Counter />
		</Layout>
	);
};

export default CounterRedux;
