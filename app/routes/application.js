import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class ApplicationRoute extends Route {
    model() {
        return this.store.query('cpt-code', { 'filter[clinicianId]': 2 });
    }
}