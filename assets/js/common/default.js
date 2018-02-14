// ---------------------------------------------------------------------
/*
	Image Resources
*/
// ---------------------------------------------------------------------
var ImageResources = {
	items: [],
	getImage: function(id) {
		var iLength = this.items.length;
		for (var i = 0; i < iLength; i++) {
			if (this.items[i].id == id) {
				return this.items[i].image;
			}
		}
		return null;
	}
};

var imageResourceItem = {
	id: "1",
	image: new Image()
};
imageResourceItem.image.onload = function() {
	ImageResources.items.push(imageResourceItem);
}
imageResourceItem.image.src = checkboxResImage1;

var imageResourceItem2 = {
	id: "2",
	image: new Image()
};
imageResourceItem2.image.onload = function() {
	ImageResources.items.push(imageResourceItem2);
}
imageResourceItem2.image.src = checkboxResImage2;

var imageResourceItem3 = {
	id: "3",
	image: new Image()
};
imageResourceItem3.image.onload = function() {
	ImageResources.items.push(imageResourceItem3);
}
imageResourceItem3.image.src = checkboxResImage3;

var imageResourceItem4 = {
	id: "4",
	image: new Image()
};
imageResourceItem4.image.onload = function() {
	ImageResources.items.push(imageResourceItem4);
}
imageResourceItem4.image.src = checkboxResImage4;

var imageResourceItem5 = {
	id: "5",
	image: new Image()
};
imageResourceItem5.image.onload = function() {
	ImageResources.items.push(imageResourceItem5);
}
imageResourceItem5.image.src = checkboxResImage5;

var imageResourceItem6 = {
	id: "6",
	image: new Image()
};
imageResourceItem6.image.onload = function() {
	ImageResources.items.push(imageResourceItem6);
}
imageResourceItem6.image.src = checkboxResImage6;

var imageResourceItem7 = {
	id: "7",
	image: new Image()
};
imageResourceItem7.image.onload = function() {
	ImageResources.items.push(imageResourceItem7);
}
imageResourceItem7.image.src = circleButtonResImage1;

var imageResourceItem8 = {
	id: "8",
	image: new Image()
};
imageResourceItem8.image.onload = function() {
	ImageResources.items.push(imageResourceItem8);
}
imageResourceItem8.image.src = comboboxResImage1;



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
	multiline: false,
	change_text: function(text) {
		this.text = text;
		this.onTextChanged();
	},
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
	context.lineWidth = 1;
	context.strokeRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);
	context.fillStyle = "#FFFFFF";
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

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
Button2.multiline = true;
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
	context.lineWidth = 1;
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
	context.lineWidth = 1;
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

var Button4 = Object.create(Component);
Button4.id = "4";
Button4.name = "Button 1";
Button4.real_name = "Button 1";
Button4.text = "Button";
Button4.image = componentImage4;
Button4.default_size = {
	width: 100,
	height: 30
};
Button4.real_size = clone(Button4.default_size);
Button4.computed_size = clone(Button4.default_size);
Button4.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 2;
	var arrowRightBorder = this.computed_size.width / 9;
	var arrowTopBorder = this.computed_size.height / 3;
	var startX = this.computed_position.left + arrowRightBorder * 2;
	var startY = this.computed_position.top + arrowTopBorder;
	var middleX = this.computed_position.left + arrowRightBorder * 1.5;
	var middleY = this.computed_position.top + arrowTopBorder * 1.5;
	var endX = startX;
	var endY = this.computed_position.top + arrowTopBorder * 2;

	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(middleX, middleY);
	context.lineTo(endX, endY);
	context.stroke();

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, center.x, center.y);
};

var Checkbox = Object.create(Component);
Checkbox.id = "5";
Checkbox.name = "Checkbox 1";
Checkbox.real_name = "Checkbox 1";
Checkbox.text = "*Checkbox";
Checkbox.image = componentImage5;
Checkbox.default_size = {
	width: 100,
	height: 30
};
Checkbox.real_size = clone(Checkbox.default_size);
Checkbox.computed_size = clone(Checkbox.default_size);
Checkbox.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;

	var kotakHeight = this.font_size / this.default_font_size * 15;
	var kotakWidth = kotakHeight;
	var kotakTop = this.computed_position.top + (this.computed_size.height - kotakHeight) / 2;
	var kotakLeft = this.computed_position.left + 10;

	var text_shown = this.text;
	var image_resource = null;
	var first2Letter = this.text.substring(0, 2).match(/[*]{1,2}|[-]{1,2}|[+]{1,2}/);
	switch (first2Letter[0]) {
		case "*":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("1");
			text_shown = this.text.substring(1);
			break;
		case "+":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("2");
			text_shown = this.text.substring(1);
			break;
		case "-":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("3");
			text_shown = this.text.substring(1);
			break;
		case "**":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("4");
			text_shown = this.text.substring(2);
			break;
		case "++":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("5");
			text_shown = this.text.substring(2);
			break;
		case "--":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("6");
			text_shown = this.text.substring(2);
			break;
	}

	if (image_resource != null) {
		context.drawImage(image_resource, kotakLeft, kotakTop, kotakWidth, kotakHeight);
	}

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(text_shown, kotakLeft + kotakWidth + 6, center.y);
};

var CheckboxGroup = Object.create(Component);
CheckboxGroup.id = "6";
CheckboxGroup.name = "Checkbox Group 1";
CheckboxGroup.real_name = "Checkbox Group 1";
CheckboxGroup.text = "*Not selected\n+Selected\n-Indeterminate\n**Disabled\n++Disabled selected\n--Disabled Indeterminate";
CheckboxGroup.multiline = true;
CheckboxGroup.image = componentImage6;
CheckboxGroup.font_spacing = 2;
CheckboxGroup.default_size = {
	width: 174,
	height: 154
};
CheckboxGroup.real_size = clone(CheckboxGroup.default_size);
CheckboxGroup.computed_size = clone(CheckboxGroup.default_size);
CheckboxGroup.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;

	var kotakHeight = this.font_size / this.default_font_size * 15;
	var kotakWidth = kotakHeight;
	var kotakCenter = kotakHeight / 2;
	var kotakTop = this.computed_position.top + kotakHeight / 2;
	var kotakLeft = this.computed_position.left + 10;
	
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();

	var lines = this.text.split("\n");
	var iLength = lines.length;
	var firstY = (iLength - 1) * this.font_size * this.font_spacing / 2;
	for (var i = 0; i < iLength; i++) {
		var current_line = lines[i];
		var text_shown = current_line;
		var image_resource = null;
		var first2Letter = current_line.substring(0, 2).match(/[*]{1,2}|[-]{1,2}|[+]{1,2}/);
		switch (first2Letter[0]) {
			case "*":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("1");
				text_shown = current_line.substring(1);
				break;
			case "+":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("2");
				text_shown = current_line.substring(1);
				break;
			case "-":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("3");
				text_shown = current_line.substring(1);
				break;
			case "**":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("4");
				text_shown = current_line.substring(2);
				break;
			case "++":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("5");
				text_shown = current_line.substring(2);
				break;
			case "--":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("6");
				text_shown = current_line.substring(2);
				break;
		}

		if (image_resource != null) {
			context.drawImage(image_resource, kotakLeft, center.y - firstY - kotakCenter, kotakWidth, kotakHeight);
		}
		
		context.fillText(text_shown, kotakLeft + kotakWidth + 6, center.y - firstY);
		firstY -= this.font_size * this.font_spacing;
	}
};

var CircleButton = Object.create(Component);
CircleButton.id = "7";
CircleButton.name = "Circle Button";
CircleButton.real_name = "Circle Button";
CircleButton.text = "+";
CircleButton.image = componentImage7;
CircleButton.default_size = {
	width: 60,
	height: 60
};
CircleButton.real_size = clone(CircleButton.default_size);
CircleButton.computed_size = clone(CircleButton.default_size);
CircleButton.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;
	var center = this.getCenterPosition();
	
	context.beginPath();
	context.moveTo(this.computed_position.left, center.y);
	context.quadraticCurveTo(this.computed_position.left, this.computed_position.bottom, center.x, this.computed_position.bottom);
	context.quadraticCurveTo(this.computed_position.right, this.computed_position.bottom, this.computed_position.right, center.y);
	context.quadraticCurveTo(this.computed_position.right, this.computed_position.top, center.x, this.computed_position.top);
	context.quadraticCurveTo(this.computed_position.left, this.computed_position.top, this.computed_position.left, center.y);
	context.stroke();

	var kotakHeight = this.computed_size.height / 3;
	var kotakWidth = kotakHeight;
	var kotakTop = this.computed_position.top + (this.computed_size.height - kotakHeight) / 2;
	var kotakLeft = this.computed_position.left + (this.computed_size.height - kotakHeight) / 2;

	var image_resource = ImageResources.getImage("7");
	context.drawImage(image_resource, kotakLeft, kotakTop, kotakWidth, kotakHeight);
};

var Combobox = Object.create(Component);
Combobox.id = "8";
Combobox.name = "Combobox";
Combobox.real_name = "Combobox";
Combobox.text = "Combobox";
Combobox.image = componentImage1;
Combobox.default_size = {
	width: 130,
	height: 30
};
Combobox.real_size = clone(Combobox.default_size);
Combobox.computed_size = clone(Combobox.default_size);
Combobox.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;
	context.strokeRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);
	context.fillStyle = "#FFFFFF";
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

	var kotakWidth = this.computed_size.width - 30;
	var kotakRight = this.computed_position.left + kotakWidth;
	var kotakCenterX = this.computed_position.left + kotakWidth / 2;
	context.beginPath();
	context.moveTo(kotakRight, this.computed_position.top);
	context.lineTo(kotakRight, this.computed_position.bottom);
	context.stroke();

	var segitigaLeft = kotakRight + 7;
	var segitigaRight = kotakRight + 23;
	var segitigaWidth = segitigaRight - segitigaLeft;
	var segitigaHeight = segitigaWidth;
	var segitigaTop = this.computed_position.top + (this.computed_size.height - segitigaHeight) / 2;
	var image_resource = ImageResources.getImage("8");
	context.drawImage(image_resource, segitigaLeft, segitigaTop, segitigaWidth, segitigaHeight);

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, kotakCenterX, center.y);
};

var Accordion = Object.create(Component);
Accordion.id = "9";
Accordion.name = "Accordion";
Accordion.real_name = "Accordion";
Accordion.text = "List Item 1\nList Item 2\nList Item 3\nList Item 4";
Accordion.image = componentImage1;
Accordion.default_size = {
	width: 120,
	height: 120
};
Accordion.real_size = clone(Accordion.default_size);
Accordion.computed_size = clone(Accordion.default_size);
Accordion.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;

	var lines = this.text.split("\n");
	var iLength = lines.length;
	for (var i = 0; i < iLength; i++) {
		
	}

	context.strokeRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);
	context.fillStyle = "#FFFFFF";
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, center.x, center.y);
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
ALL_COMPONENTS.items.push(Button4);
ALL_COMPONENTS.items.push(Checkbox);
ALL_COMPONENTS.items.push(CheckboxGroup);
ALL_COMPONENTS.items.push(CircleButton);
ALL_COMPONENTS.items.push(Combobox);


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
	isHittingComponentOnMouseDown: false,
	active_components: [],
	setActiveComponent: function(temp_id) {
		var component = this.getComponentByTempId(temp_id);
		if (component != null) {
			this.active_components.push(component);
		}
	},
	isActiveComponent: function(component) {
		var temp_id = component.temp_id;
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.active_components[i].temp_id == temp_id) {
				return true;
			}
		}
		return false;
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
	updateComponentTextByTempId: function(temp_id, text) {
		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.components[i].temp_id == temp_id) {
				this.components[i].change_text(text);
				break;
			}
		}
	},
	updateActiveComponentsPosition: function(tempComponents) {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			this.active_components[i].real_position = {
				top: tempComponents[i].real_position.top,
				left: tempComponents[i].real_position.left,
				right: tempComponents[i].real_position.right,
				bottom: tempComponents[i].real_position.bottom
			};

			this.active_components[i].computed_position = {
				top: tempComponents[i].real_position.top,
				left: tempComponents[i].real_position.left,
				right: tempComponents[i].real_position.right,
				bottom: tempComponents[i].real_position.bottom
			};

			this.updateComponentPositionFromActiveComponent(this.active_components[i]);
		}
	},
	updateComponentPositionFromActiveComponent: function(active_component) {
		var component = this.getComponentByTempId(active_component.temp_id);
		
		component.real_position = {
			top: active_component.real_position.top,
			left: active_component.real_position.left,
			right: active_component.real_position.right,
			bottom: active_component.real_position.bottom
		};

		component.computed_position = {
			top: active_component.real_position.top,
			left: active_component.real_position.left,
			right: active_component.real_position.right,
			bottom: active_component.real_position.bottom
		};
	},
	updateComponentSizeFromActiveComponent: function(active_component) {
		var component = this.getComponentByTempId(active_component.temp_id);
		
		component.real_position = {
			top: active_component.real_position.top,
			left: active_component.real_position.left,
			right: active_component.real_position.right,
			bottom: active_component.real_position.bottom
		};

		component.computed_position = {
			top: active_component.real_position.top,
			left: active_component.real_position.left,
			right: active_component.real_position.right,
			bottom: active_component.real_position.bottom
		};

		component.real_size = {
			width: active_component.real_size.width,
			height: active_component.real_size.height
		};

		component.computed_size = {
			width: active_component.computed_size.width,
			height: active_component.computed_size.height
		};
	},
	updateActiveComponentsSize: function(tempComponents) {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			this.active_components[i].real_size = {
				width: tempComponents[i].real_size.width,
				height: tempComponents[i].real_size.height
			};

			this.active_components[i].computed_size = {
				width: tempComponents[i].computed_size.width,
				height: tempComponents[i].computed_size.height
			};

			this.active_components[i].real_position = {
				top: tempComponents[i].real_position.top,
				left: tempComponents[i].real_position.left,
				right: tempComponents[i].real_position.right,
				bottom: tempComponents[i].real_position.bottom
			};

			this.active_components[i].computed_position = {
				top: tempComponents[i].real_position.top,
				left: tempComponents[i].real_position.left,
				right: tempComponents[i].real_position.right,
				bottom: tempComponents[i].real_position.bottom
			};

			this.updateComponentSizeFromActiveComponent(this.active_components[i]);
		}
	},
	deleteComponentsFromActiveComponents: function() {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			var temp_id = this.active_components[i].temp_id;
			var jLength = this.components.length;
			for (var j = 0; j < jLength; j++) {
				if (this.components[j].temp_id == temp_id) {
					this.components.splice(j, 1);
					break;
				}
			}
		}
		this.active_components = [];
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
		context.lineWidth = 1;
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
			var centerY = top + height / 2;
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
			context.arc(left, centerY, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(right, centerY, 5, 0, 2 * Math.PI);
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
	drawWithoutActiveComponent: function(context) {
		context.strokeStyle = "#000000";
		context.lineWidth = 1;
		context.clearRect(0, 0, this.width, this.height);

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			if (!this.isActiveComponent(this.components[i])) {
				this.components[i].draw(context);
			}
		}
	},
	isHittingComponent: function(x, y) {
		var iLength = this.components.length;
		var top, left, right, bottom;
		for (var i = iLength - 1; i >= 0; i--) {
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
	dotsHit: "",
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
	updateComponentsSize: function(currentMousePosition, shiftPressed) {
		var selisihX = currentMousePosition.x - this.mousePosition.x;
		var selisihY = currentMousePosition.y - this.mousePosition.y;
		this.mousePosition = currentMousePosition;

		var iLength = this.components.length;
		switch (this.dotsHit) {
			case "top-left":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height -= selisihY;
					this.components[i].computed_size.height -= selisihY;
					this.components[i].real_position.top += selisihY;
					this.components[i].computed_position.top += selisihY;

					this.components[i].real_size.width -= selisihX;
					this.components[i].computed_size.width -= selisihX;
					this.components[i].real_position.left += selisihX;
					this.components[i].computed_position.left += selisihX;
				}
				break;
			case "top-center":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height -= selisihY;
					this.components[i].computed_size.height -= selisihY;
					this.components[i].real_position.top += selisihY;
					this.components[i].computed_position.top += selisihY;
				}
				break;
			case "top-right":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height -= selisihY;
					this.components[i].computed_size.height -= selisihY;
					this.components[i].real_position.top += selisihY;
					this.components[i].computed_position.top += selisihY;

					this.components[i].real_size.width += selisihX;
					this.components[i].computed_size.width += selisihX;
					this.components[i].real_position.right += selisihX;
					this.components[i].computed_position.right += selisihX;
				}
				break;
			case "middle-left":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.width -= selisihX;
					this.components[i].computed_size.width -= selisihX;
					this.components[i].real_position.left += selisihX;
					this.components[i].computed_position.left += selisihX;
				}
				break;
			case "middle-right":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.width += selisihX;
					this.components[i].computed_size.width += selisihX;
					this.components[i].real_position.right += selisihX;
					this.components[i].computed_position.right += selisihX;
				}
				break;
			case "bottom-left":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height += selisihY;
					this.components[i].computed_size.height += selisihY;
					this.components[i].real_position.bottom += selisihY;
					this.components[i].computed_position.bottom += selisihY;

					this.components[i].real_size.width -= selisihX;
					this.components[i].computed_size.width -= selisihX;
					this.components[i].real_position.left += selisihX;
					this.components[i].computed_position.left += selisihX;
				}
				break;
			case "bottom-center":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height += selisihY;
					this.components[i].computed_size.height += selisihY;
					this.components[i].real_position.bottom += selisihY;
					this.components[i].computed_position.bottom += selisihY;
				}
				break;
			case "bottom-right":
				for (var i = 0; i < iLength; i++) {
					this.components[i].real_size.height += selisihY;
					this.components[i].computed_size.height += selisihY;
					this.components[i].real_position.bottom += selisihY;
					this.components[i].computed_position.bottom += selisihY;

					this.components[i].real_size.width += selisihX;
					this.components[i].computed_size.width += selisihX;
					this.components[i].real_position.right += selisihX;
					this.components[i].computed_position.right += selisihX;
				}
				break;
		}
	},
	removeAllComponents: function() {
		this.components = [];
		this.dotsHit = "";
		this.mousePosition = {
			x: 0,
			y: 0
		};
	},
	draw: function(context) {
		context.strokeStyle = "#000000";
		context.lineWidth = 1;
		context.clearRect(0, 0, this.width, this.height);

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			this.components[i].draw(context);

			context.strokeStyle = "#0D47A1";
			context.lineWidth = 1;
			context.fillStyle = "#FFFFFF";

			var top = this.components[i].computed_position.top;
			var left = this.components[i].computed_position.left;
			var bottom = this.components[i].computed_position.bottom;
			var right = this.components[i].computed_position.right;
			var width = this.components[i].computed_size.width;
			var height = this.components[i].computed_size.height;

			var centerX = left + width / 2;
			var centerY = top + height / 2;
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
			context.arc(left, centerY, 5, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
			context.beginPath();
			context.arc(right, centerY, 5, 0, 2 * Math.PI);
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