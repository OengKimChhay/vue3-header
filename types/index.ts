export type TPrimaryMenu = {
	label: string;
	link: string;
	submenu?: ISecondaryMenu[];
};

export interface ISecondaryMenu extends TPrimaryMenu {
	icon: string;
}
