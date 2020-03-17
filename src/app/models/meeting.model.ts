export interface Meeting {
	id: number;
	name: string;
	date: Date;
	description?: string;
	replacingMeeting?: string;
	format: "Discussion" | "Speaker/Discussion" | "Speaker" | "Topic" | "No Format";
	speakerName?: string;
	secretary: string;
}