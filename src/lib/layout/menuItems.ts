import { m } from '$lib/paraglide/messages';

const menuItems = [
	{
		name: m.about(),
		slug: '',
		icon: 'hugeicons:user-02'
	},
	{
		name: m.resume(),
		slug: 'resume',
		icon: 'hugeicons:agreement-03'
	},
	{
		name: m.portfolio(),
		slug: 'portfolio',
		icon: 'hugeicons:paint-board'
	},
	{
		name: m.blog(),
		slug: 'blog',
		icon: 'hugeicons:libraries'
	},
	{
		name: m.contact(),
		slug: 'contact',
		icon: 'hugeicons:mail-at-sign-01'
	}
];
export default menuItems;
