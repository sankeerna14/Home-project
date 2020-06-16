import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class Locations extends Component {

	@service store;

	init() {
		super.init(...arguments);
		this.loadOffices();
	}

	async loadOffices() {
		const offices = await this.store.query('office', { 'filter[clinicianId]': 2, 'filter[cptCodeId]': this.svc.id });
		set(this, 'officeDetails', offices);
	}

}
