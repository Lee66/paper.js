Doc = Base.extend({
	initialize: function(canvas) {
		if(canvas) {
			this.canvas = canvas;
			this.ctx = this.canvas.getContext('2d');
			this.size = new Size(canvas.offsetWidth, canvas.offsetHeight);
		}
		Paper.documents.push(this);
		this.activate();
		this.layers = [];
		this.activeLayer = new Layer();
	},
	
	activate: function() {
		Paper.activateDocument(this);
	},
	
	redraw: function() {
		if(this.canvas) {
			this.ctx.clearRect(0, 0, this.size.width, this.size.height);
			for(var i = 0, l = this.layers.length; i < l; i++) {
				this.layers[i].draw(this.ctx);
			}
		}
	}
});