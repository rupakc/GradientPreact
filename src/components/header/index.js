import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Gradient</h1>
		<nav>
			<Link activeClassName={style.active} href="/">MealDB</Link>
			<Link activeClassName={style.active} href="/audio">AudioDB</Link>
			<Link activeClassName={style.active} href="/sport">SportsDB</Link>
		</nav>
	</header>
);

export default Header;
