import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to rentals route', function(assert) {
  let route = this.subject({
    transitionTo(routeName) {
      assert.equal(routeName, 'rentals.index', 'transition to route name rentals.index');
    }
  });
  route.beforeModel();
});
