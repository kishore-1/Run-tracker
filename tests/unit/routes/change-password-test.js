import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | change-password', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:change-password');
    assert.ok(route);
  });
});
