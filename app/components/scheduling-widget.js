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
            active: false,
        },
        {
            completed: false,
            label: 'SERVICE',
            infos: [],
            active: true
        },
        {
            completed: false,
            label: 'LOCATION',
            infos: [],
            active: false
        }
    ];

    get current() {
        return this.steppers.find(item => item.active === true);
    }

    @action
    setActiveService(newSvc) {
        const infos = [
            newSvc.description,
            `${newSvc.duration} minutes`
        ];

        const steppers = this.steppers;

        steppers[1] = { // changing service stepper to inactive
            ...steppers[1],
            infos,
            active: false
        };

        const locStepper = steppers[2];
        set(locStepper, 'active', true);

        set(this, 'steppers', steppers);
        set(this, 'activeSvc', newSvc);
    }

}
