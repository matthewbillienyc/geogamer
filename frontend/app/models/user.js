import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	total_number_games: DS.attr('string'),
	total_locations_visited: DS.attr('string'),
	total_clues_used: DS.attr('string'),
	// games: DS.hasMany('games', {async: true})
});
