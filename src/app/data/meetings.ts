import { Meeting } from '../models/meeting.model';

export const meetingsData: Meeting[] = [
	{
		id: 1,
		name: "Wed Night Live",
		description: "All meetings at the All Saints Episcopal Church have been cancelled until further notice, including Wednesday Night Live. You will find some of us here during that time.",
		date: "18 March, 2020",
		time: "7 PM",
		format: "Discussion",
		secretary: "Chris W",
		link: "https://us04web.zoom.us/j/820995680"
	},
	{
		id: 2,
		name: "Saturday Noon Get Together",
		description: "Just for the hell of it.",
		date: "21 March, 2020",
		time: "12 PM",
		speakerName: "TBD",
		format: "Speaker/Discussion",
		secretary: "Chris W",
		link: "https://us04web.zoom.us/j/536016384"
	}
];