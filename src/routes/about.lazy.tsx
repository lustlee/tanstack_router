import { createLazyFileRoute } from '@tanstack/react-router';

const About = () => {
	return (
		<div className='p-2'>
			<h3>Welcome About Page!</h3>
		</div>
	);
};

export const Route = createLazyFileRoute('/about')({
	component: About,
});
