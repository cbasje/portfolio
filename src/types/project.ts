export interface Project {
    [key: string]: string | Date | undefined
	id: string;
	title: string;
	image: string;
	date: Date;
	keywords: string;
	url?: string;
}
