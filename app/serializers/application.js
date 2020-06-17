import JSONAPISerializer from 'ember-data/serializers/json-api';
import { camelize } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {

	keyForAttribute(attr) {
		return camelize(attr);
	}
}