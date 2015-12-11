import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	total_number_games: DS.attr('integer'),
	total_locations_visited: DS.attr('integer'),
	total_clues_used: DS.attr('integer'),
	// games: DS.hasMany('games', {async: true})			
});
