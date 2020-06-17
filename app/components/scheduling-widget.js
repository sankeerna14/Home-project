import Component from '@ember/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SchedulingWidget extends Component {

	title = 'Request an Appointment';
	tagLine = 'The Therapy Center';

	@tracked steppers = [
		{
			completed: true,
			label: 'CLINICIAN',
			infos: ['Rob Gross, MFT'],
			textColor: '',
			active: false,
		},
		{
			completed: false,
			label: 'SERVICE',
			infos: [],
			textColor: '',
			active: true
		},
		{
			completed: false,
			label: 'LOCATION',
			infos: [],
			textColor: 'text-gray',
			active: false
		}
	];

	get current() {
		return this.steppers.find(item => item.active);
	}

	@action
	setActiveService(newSvc) {
		const infos = [
			newSvc.description,
			`${newSvc.duration} minutes`
		];

		let selection = this.steppers;

		selection[1] = { // changing service stepper to inactive
			...selection[1],
			infos,
			active: false
		};

		const locStepper = selection[2];
		set(locStepper, 'active', true);

		set(this, 'steppers', selection);
		set(this, 'activeSvc', newSvc);
	}

}
