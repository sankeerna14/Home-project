import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import config from 'ember-get-config';
import { classNames } from '@ember-decorators/component';


@classNames('d-flex')
export default class Locations extends Component {

	@service store;

	init() {
		super.init(...arguments);
		this.loadOffices();
	}

	async loadOffices() {
		const offices = await this.store.query('office', {
			filter: {
				clinicianId: config.APP.clinicianId,
				cptCodeId : this.svc.id
			}
		});
		set(this, 'officeDetails', offices);
	}

}
