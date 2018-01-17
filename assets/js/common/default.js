// ---------------------------------------------------------------------
/*
	Component Defaults
*/
// ---------------------------------------------------------------------
var Component = {
	id: "-1",
	name: "",
	real_name: "",
	image: null,
	real_position: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	computed_position: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	getCenterPosition: function() {
		return {
			x: this.computed_position.left + (this.computed_size.width / 2),
			y: this.computed_position.top + (this.computed_size.height / 2)
		};
	},
	setPosition: function(x, y) {
		this.real_position.left = x;
		this.real_position.top = y;
		this.real_position.right = x + this.real_size.width;
		this.real_position.bottom = y + this.real_size.height;
		
		this.computed_position.left = x;
		this.computed_position.top = y;
		this.computed_position.right = x + this.computed_size.width;
		this.computed_position.bottom = y + this.computed_size.height;
	},
	rotation: 0,
	default_size: {
		width: 0,
		height: 0
	},
	real_size: {
		width: 0,
		height: 0
	},
	computed_size: {
		width: 0,
		height: 0
	},
	default_font_family: "Verdana",
	font_family: "Verdana",
	default_font_size: 16,
	font_size: 16,
	default_font_color: "#000000",
	font_color: "#000000",
    text: "",
    onTextChanged: function() {

    },
    draw: function() {

	}
}

var Button1 = Object.create(Component);
Button1.id = "1";
Button1.name = "Button 1";
Button1.real_name = "Button 1";
Button1.text = "Button";
Button1.image = componentImage1;
Button1.default_size = {
	width: 150,
	height: 45
};
Button1.real_size = clone(Button1.default_size);
Button1.computed_size = clone(Button1.default_size);
Button1.draw = function(context) {
    context.strokeStyle = "#000000";
	context.strokeRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);
	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, center.x, center.y);
};

var Button2 = Object.create(Component);
Button2.id = "2";
Button2.name = "Multiline Button 1";
Button2.real_name = "Multiline Button 1";
Button2.image = componentImage2;
Button2.default_size = {
	width: 150,
	height: 71
};
Button2.real_size = clone(Button2.default_size);
Button2.computed_size = clone(Button2.default_size);
Button2.text = "Multiline Button";

var Button3 = Object.create(Component);
Button3.id = "3";
Button3.name = "Button Bar";
Button3.real_name = "Button Bar";
Button3.image = componentImage3;
Button3.default_size = {
	width: 446,
	height: 45
};
Button3.real_size = clone(Button3.default_size);
Button3.computed_size = clone(Button3.default_size);
Button3.text = "One, Two, Three";
Button3.draw = function(context) {
	var items = this.text.split(",");
	context.strokeStyle = "#000000";
	context.strokeRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);
	
	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";

	var iLength = items.length;
	var eachButtonWidth = this.computed_size.width / iLength;
	context.beginPath();
	var centerY = this.computed_position.top + this.computed_size.height / 2;
	for (var i = 0; i < iLength; i++) {
		var lineOffset = this.computed_position.left + eachButtonWidth * i;
		var centerX = lineOffset + eachButtonWidth / 2;
		var text = items[i].trim();
		context.fillText(text, centerX, centerY);

		if (i > 0) {
			context.moveTo(lineOffset, this.computed_position.top);
			context.lineTo(lineOffset, this.computed_position.bottom);
		}
	}
	context.stroke();
	
};

var ALL_COMPONENTS = {
	items: [],
	getComponentById: function(id) {
		var iLength = this.items.length;
		for (var i = 0; i < iLength; i++) {
			if (this.items[i].id == id) {
				return clone(this.items[i]);
			}
		}
		return null;
	}
};
ALL_COMPONENTS.items.push(Button1);
ALL_COMPONENTS.items.push(Button2);
ALL_COMPONENTS.items.push(Button3);


// ---------------------------------------------------------------------
/*
	Sheet Default
*/
// ---------------------------------------------------------------------
var Sheet = {
	width: 700,
	height: 700,
	offset: {
		left: 0,
		top: 0
	},
	temp_id: 1,
	components: [],
	addComponent: function(component) {
		component.temp_id = this.temp_id;
		this.components.push(component);
		this.removeAllActiveComponents();
		this.setActiveComponent(this.temp_id);
		this.temp_id++;
	},
	active_components: [],
	setActiveComponent: function(temp_id) {
		var component = this.getComponentByTempId(temp_id);
		if (component != null) {
			this.active_components.push(component);
		}
	},
	removeActiveComponent: function(temp_id) {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.active_components[i].temp_id == temp_id) {
				this.active_components.splice(i, 1);
				break;
			}
		}
	},
	removeAllActiveComponents: function() {
		this.active_components = [];
	},
	getComponentByTempId: function(temp_id) {
		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.components[i].temp_id == temp_id) {
				return this.components[i];
			}
		}

		return null;
	},
	draw: function(context) {
		context.strokeStyle = "#000000";
		context.lineWidth = 1;
		context.clearRect(0, 0, this.width, this.height);

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			this.components[i].draw(context);
		}

		context.strokeStyle = "#0D47A1";
		context.lineWidth = 2;
		iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			var top = this.active_components[i].computed_position.top;
			var left = this.active_components[i].computed_position.left;
			var bottom = this.active_components[i].computed_position.bottom;
			var right = this.active_components[i].computed_position.right;
			var width = this.active_components[i].computed_size.width;
			var height = this.active_components[i].computed_size.height;
			context.strokeRect(left, top, width, height);
		}
	},
	isHittingComponent: function(x, y) {
		var iLength = this.components.length;
		var top, left, right, bottom;
		for (var i = 0; i < iLength; i++) {
			top = this.components[i].computed_position.top;
			left = this.components[i].computed_position.left;
			right = this.components[i].computed_position.right;
			bottom = this.components[i].computed_position.bottom;

			if (x >= left && x <= right && y >= top && y <= bottom) {
				return this.components[i];
			}
		}

		return null;
	}
};

function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);

    return temp;
}