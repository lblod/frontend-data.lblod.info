import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class FallbackController extends Controller {
	@computed('model.triples.directed', 'model.triples.inverse')
  get isEmpty() {
  	return this.model.triples.directed.length == 0 && this.model.triples.inverse.length == 0;
  }
}
