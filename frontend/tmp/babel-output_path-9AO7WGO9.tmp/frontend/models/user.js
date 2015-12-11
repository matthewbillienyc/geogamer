define('frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		email: _emberData['default'].attr('string'),
		total_number_games: _emberData['default'].attr('integer'),
		total_locations_visited: _emberData['default'].attr('integer'),
		total_clues_used: _emberData['default'].attr('integer')
	});
});
// games: DS.hasMany('games', {async: true})