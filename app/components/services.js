import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default class Services extends Component {

    @service store;

    init() {
        super.init(...arguments);
        this.loadServices();

    }

    loadServices() {
        let codes  = this.store.query('cpt-code', {'filter[clinicianId]': 2});
        console.log(codes);
    }
};
