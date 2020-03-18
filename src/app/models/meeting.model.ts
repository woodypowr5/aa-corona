export interface Meeting {
	id: number;
	name: string;
	date: string;
	time: string;
	link?: string;
	description?: string;
	format: "Discussion" | "Speaker/Discussion" | "Speaker" | "Topic" | "No Format";
	speakerName?: string;
	secretary: string;
}