import HeadMeta from 'components/common/head-meta';
import Layout from 'components/common/layouts';

/**
 *
 * @description Главная страница сайта
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
	return (
		<Layout>
			<HeadMeta
				title={'Главная'}
				description={'Главная страница для проверки и тестов темплейта'}
				author={'Mr_FabiozZz'}
				keywords={'js javascript next nextjs'}
			/>
			<p>
				Это главная страница, если вы посмотрите на код страницы (<code>CTRL+U</code>) то
				увидите мета теги которые я проставил, такие как автор, описание, ключевые слова
				это все проставляется в компоненте <code>HeadMeta</code> в папке{' '}
				<code>/components</code>. Да и в целом будут отображены все данные в{' '}
				<code>&lt;div id="__next"&gt;&lt;/div&gt;</code>
			</p>

			<p>
				Компонент <code>&lt;NoSsr/&gt;</code> и hoc <code>withNoSSR</code> прячут контент
				и он не будет виден в просмотре документа (<code>CTRL+U</code>) на странице{' '}
				<code>/counter-redux</code> продемонстрирован способ с компонентом{' '}
				<code>&lt;NoSsr/&gt;</code>
			</p>

			<p>
				Это необходимо при обновлении страницы когда данные из redux восстанавливаются.
				Серверный рендеринг Next'а создает страницу со старыми данными из redux, а потом
				они восстанавливаются и появляется ошибка, в нашем случае на странице ожидается 0
				в счетчике а из redux'а прилетает, допустим 4
			</p>
			<p>
				Другой выход сделать локальное состояние, допустим с нулем и в при монтировании в{' '}
				<code>useEffect()</code> сделать подстановку данными из redux, тогда (в случае со
				счетчиком) в просмотре документа будет 0, а затем будет динамика и данные
				изменятся но сервер об этом уже не знает
			</p>

			<p>
				Для примера я сделал три ссылки в navbar'е для того чтобы показать как в Next
				можно делать навигацию
			</p>
		</Layout>
	);
}
