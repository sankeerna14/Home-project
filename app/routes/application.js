import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class ApplicationRoute extends Route {
    async model() {
        let cptCodes = await this.store.query('cpt-code', { 'filter[clinicianId]': 2 });
        return cptCodes;
    }
}