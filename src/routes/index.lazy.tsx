import { createFileRoute, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	validateSearch: (params: Record<string, unknown>): { page: number } => {
		//zod or yup
		return {
			page: 1,
		};
	},
	loaderDeps: ({search} => ({search});
	loader: async ({deps: {search}}) => new Promise((resolve) => setTimeout(resolve, 1000));
	pendingComponent: Homepage;
	errorComponent: Homepage;
	component: Homepage;
});

function Homepage() {
	const { page } = Route.useSearch();

	return (
		<div className='p-2'>
			<h3>Welcome Home!</h3>
		</div>
	);
}
