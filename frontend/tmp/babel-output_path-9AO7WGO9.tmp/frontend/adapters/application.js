define("frontend/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
	exports["default"] = _emberData["default"].ActiveModelAdapter.extend({
		host: "http://localhost:3000",
		namespace: "api/v1"
	});
});