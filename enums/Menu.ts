import type { ISecondaryMenu, TPrimaryMenu } from '~/types';

const primaryMenus = [
	{
		label: 'lịch trực tiếp',
		link: '#',
		submenu: [
			{ label: 'BÓNG ĐÁ', link: '#', icon: '/icons/ball1.png' },
			{ label: 'Đua bi', link: '#', icon: '/icons/ball2.png' },
			{ label: 'BÓNG rổ', link: '#', icon: '/icons/ball3.png' },
			{ label: 'e-sports', link: '#', icon: '/icons/game.png' },
			{ label: 'Casino', link: '#', icon: '/icons/casino.png' },
		],
	},
	{
		label: 'lịch thi đấu',
		link: '#',
		submenu: [
			{ label: 'BÓNG ĐÁ', link: '#', icon: '/icons/ball1.png' },
			{ label: 'Đua bi', link: '#', icon: '/icons/ball2.png' },
			{ label: 'BÓNG rổ', link: '#', icon: '/icons/ball3.png' },
			{ label: 'e-sports', link: '#', icon: '/icons/game.png' },
			{ label: 'Casino', link: '#', icon: '/icons/casino.png' },
		],
	},
	{ label: 'tỷ lệ kèo', link: '#' },
	{ label: 'kết quả', link: '#' },
	{ label: 'phòng chat', link: '#' },
] as TPrimaryMenu[];

const secondaryMenus = [
	{ label: 'Bảng Tin', link: '#', icon: '/icons/message.png' },
	{ label: 'Reels', link: '#', icon: '/icons/reels.png' },
	{ label: 'Highlight', link: '#', icon: '/icons/highlight.png' },
	{ label: 'Tip Kèo', link: '#', icon: '/icons/rate.png' },
	{ label: 'Phim Ảnh', link: '#', icon: '/icons/film.png' },
	{ label: 'Truyện Tranh', link: '#', icon: '/icons/book.png' },
] as ISecondaryMenu[];

export { primaryMenus, secondaryMenus };
