import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';



export default class Services extends Component {

	@service store;

	init() {
		super.init(...arguments);
		this.loadServices();
	}

	async loadServices() {
		const codes = await this.store.query('cpt-code', { 'filter[clinicianId]': 2 });
		set(this, 'serviceCodes', codes);
	}
};
