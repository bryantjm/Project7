
FlipClock.MyClock2Face = FlipClock.Face.extend({
	
	build: function() {
		this.log('This method is used to build your clock face.');
	},
	
	reset: function() {
		this.log('This method is triggered when the clock is reset');
	},
	
	start: function() {
		this.log('This method is triggered when the clock is started');
	},
	
	stop: function() {
		this.log('This method is triggered when the clock is stopped');
	},
	
	flip: function() {
		this.log('This method is triggered when the clock is flipped');
	}
	
});