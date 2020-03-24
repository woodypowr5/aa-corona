import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/meeting.model';
import { meetingsData, dailyMeetingsData } from 'src/app/data/meetings';
import { Weekday, weekdays } from 'src/app/models/day-of-week';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
	meetings: Meeting[] = meetingsData;
	dailyMeetings: Meeting[] = dailyMeetingsData;
	weekdays: Weekday[] = weekdays;
	filteredWeekdays: Weekday[] = weekdays;
	filterOptions: any = ["Show All", ...weekdays];

	constructor() { }

	ngOnInit() {
	}

	selectionChange(event: any): void {
		if (event.value === "Show All") {
			this.filteredWeekdays = this.weekdays;
		} else {
			this.filteredWeekdays = [event.value];
		}
	}

	getMeetingsForWeekday(weekday: Weekday): Meeting[] {
		return this.meetings.filter((meeting: Meeting) => meeting.day === weekday);
	}
}
