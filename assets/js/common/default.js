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
	default_font_size: 11,
	font_size: 11,
	default_font_spacing: 1.2,
	font_spacing: 1.2,
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
	width: 100,
	height: 30
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
Button2.text = "Multiline\nButton";
Button2.image = componentImage2;
Button2.default_size = {
	width: 63,
	height: 30
};
Button2.real_size = clone(Button2.default_size);
Button2.computed_size = clone(Button2.default_size);
Button2.real_corner_radius = 11;
Button2.computed_corner_radius = 11;
Button2.font_size = 9;
Button2.draw = function(context) {
	context.strokeStyle = "#000000";
	context.beginPath();
	context.moveTo(this.computed_position.left + this.computed_corner_radius, this.computed_position.top);
	context.lineTo(this.computed_position.right - this.computed_corner_radius, this.computed_position.top);
	context.arcTo(this.computed_position.right, this.computed_position.top, this.computed_position.right, this.computed_position.top + this.computed_corner_radius, this.computed_corner_radius);
	context.lineTo(this.computed_position.right, this.computed_position.bottom - this.computed_corner_radius);
	context.arcTo(this.computed_position.right, this.computed_position.bottom, this.computed_position.right - this.computed_corner_radius, this.computed_position.bottom, this.computed_corner_radius);
	context.lineTo(this.computed_position.left + this.computed_corner_radius, this.computed_position.bottom);
	context.arcTo(this.computed_position.left, this.computed_position.bottom, this.computed_position.left, this.computed_position.bottom - this.computed_corner_radius, this.computed_corner_radius);
	context.lineTo(this.computed_position.left, this.computed_position.top + this.computed_corner_radius);
	context.arcTo(this.computed_position.left, this.computed_position.top, this.computed_position.left + this.computed_corner_radius, this.computed_position.top, this.computed_corner_radius);
	context.stroke();

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	var lines = this.text.split("\n");
	var iLength = lines.length;
	var firstY = (iLength - 1) * this.font_size * this.font_spacing / 2;
	for (var i = 0; i < lines.length; i++) {
		context.fillText(lines[i], center.x, center.y - firstY);
		firstY -= this.font_size * this.font_spacing;
	}
};

var Button3 = Object.create(Component);
Button3.id = "3";
Button3.name = "Button Bar";
Button3.real_name = "Button Bar";
Button3.image = componentImage3;
Button3.default_size = {
	width: 298,
	height: 30
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
		context.fillStyle = "#FFFFFF";
		iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			var top = this.active_components[i].computed_position.top;
			var left = this.active_components[i].computed_position.left;
			var bottom = this.active_components[i].computed_position.bottom;
			var right = this.active_components[i].computed_position.right;
			var width = this.active_components[i].computed_size.width;
			var height = this.active_components[i].computed_size.height;

			var centerX = left + width / 2;
			context.strokeRect(left, top, width, height);
			context.beginPath();
			context.arc(left, top, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(centerX, top, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(right, top, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(left, bottom, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(centerX, bottom, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(right, bottom, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
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

// ---------------------------------------------------------------------
/*
	Sheet Temp Default
*/
// ---------------------------------------------------------------------
var SheetTemp = {
	width: 0,
	height: 0,
	offset: {
		top: 0,
		left: 0
	},
	selisihOffset: {
		top: 0,
		left: 0
	},
	mousePosition: {
		x: 0,
		y: 0
	},
	components: [],
	addComponent: function(component) {
		component = clone(component);
		component.computed_position.top = component.real_position.top + this.selisihOffset.top;
		component.computed_position.left = component.real_position.left + this.selisihOffset.left;
		component.computed_position.right = component.real_position.right + this.selisihOffset.left;
		component.computed_position.bottom = component.real_position.bottom + this.selisihOffset.top;
		this.components.push(component);
	},
	updateComponentsPosition: function(currentMousePosition) {
		var selisihX = currentMousePosition.x - this.mousePosition.x;
		var selisihY = currentMousePosition.y - this.mousePosition.y;
		this.mousePosition = currentMousePosition;

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			this.components[i].real_position.top += selisihY;
			this.components[i].real_position.left += selisihX;
			this.components[i].real_position.right += selisihX;
			this.components[i].real_position.bottom += selisihY;

			this.components[i].computed_position.top += selisihY;
			this.components[i].computed_position.left += selisihX;
			this.components[i].computed_position.right += selisihX;
			this.components[i].computed_position.bottom += selisihY;
		}
	},
	removeAllComponents: function() {
		this.components = [];
	},
	draw: function(context) {
		context.strokeStyle = "#000000";
		context.lineWidth = 1;
		context.clearRect(0, 0, this.width, this.height);

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			this.components[i].draw(context);
		}
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