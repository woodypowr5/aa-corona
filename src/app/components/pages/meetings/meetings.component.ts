import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/meeting.model';
import { meetingsData } from 'src/app/data/meetings';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
	meetings: Meeting[] = meetingsData;
		
	constructor() { }

	ngOnInit() {
	}
}
