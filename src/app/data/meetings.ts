import { Meeting } from '../models/meeting.model';

export const meetingsData: Meeting[] = [
	{
		id: 1,
		name: "Wed Night Discussion",
		date: new Date("2020-03-18T20:00:00-07:00"),
		replacingMeeting: "Wednesday Night Live",
		format: "Discussion",
		secretary: "Chris W"
	},
	{
		id: 2,
		name: "Wed Night Discussion",
		date: new Date("2020-03-21T20:00:00-07:00"),
		replacingMeeting: "Empire Saturday Night Speaker",
		speakerName: "TBD",
		format: "Speaker/Discussion",
		secretary: "TBD"
	}
];