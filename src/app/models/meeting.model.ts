import { Weekday } from './day-of-week';

export interface Meeting {
	day?: Weekday;
	name: string;
	date: string;
	time: string;
	link?: string;
	description?: string;
	password?: string;
	format: "Discussion" | "Speaker/Discussion" | "Speaker" | "Topic" | "No Format" | "Book Study" | "TBD" | "Secretary's Choice";
	speakerName?: string;
	secretary: string;
}