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
    },
    length: 15,
    ctr: 0,
    add_ctr: function() {
        this.ctr++;
        if (this.ctr == this.length) {
            if (this.all_resources_onfinished) {
                this.all_resources_onfinished();
            }
        }
    },
    all_resources_onfinished: null,
    assign_all_resources_onfinished: function(fun) {
        this.all_resources_onfinished = fun;
        if (this.ctr == this.length) {
            this.all_resources_onfinished();
        }
    }
};

var imageResourceItem = {
	id: "1",
	image: new Image()
};
imageResourceItem.image.onload = function() {
    ImageResources.items.push(imageResourceItem);
    ImageResources.add_ctr();
};
imageResourceItem.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem.image.src = checkboxResImage1;

var imageResourceItem2 = {
	id: "2",
	image: new Image()
};
imageResourceItem2.image.onload = function() {
    ImageResources.items.push(imageResourceItem2);
    ImageResources.add_ctr();
}
imageResourceItem2.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem2.image.src = checkboxResImage2;

var imageResourceItem3 = {
	id: "3",
	image: new Image()
};
imageResourceItem3.image.onload = function() {
    ImageResources.items.push(imageResourceItem3);
    ImageResources.add_ctr();
}
imageResourceItem3.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem3.image.src = checkboxResImage3;

var imageResourceItem4 = {
	id: "4",
	image: new Image()
};
imageResourceItem4.image.onload = function() {
    ImageResources.items.push(imageResourceItem4);
    ImageResources.add_ctr();
}
imageResourceItem4.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem4.image.src = checkboxResImage4;

var imageResourceItem5 = {
	id: "5",
	image: new Image()
};
imageResourceItem5.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem5.image.onload = function() {
    ImageResources.items.push(imageResourceItem5);
    ImageResources.add_ctr();
}
imageResourceItem5.image.src = checkboxResImage5;

var imageResourceItem6 = {
	id: "6",
	image: new Image()
};
imageResourceItem6.image.onload = function() {
    ImageResources.items.push(imageResourceItem6);
    ImageResources.add_ctr();
}
imageResourceItem6.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem6.image.src = checkboxResImage6;

var imageResourceItem7 = {
	id: "7",
	image: new Image()
};
imageResourceItem7.image.onload = function() {
    ImageResources.items.push(imageResourceItem7);
    ImageResources.add_ctr();
}
imageResourceItem7.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem7.image.src = circleButtonResImage1;

var imageResourceItem8 = {
	id: "8",
	image: new Image()
};
imageResourceItem8.image.onload = function() {
    ImageResources.items.push(imageResourceItem8);
    ImageResources.add_ctr();
}
imageResourceItem8.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem8.image.src = comboboxResImage1;

var imageResourceItem9 = {
	id: "9",
	image: new Image()
};
imageResourceItem9.image.onload = function() {
    ImageResources.items.push(imageResourceItem9);
    ImageResources.add_ctr();
}
imageResourceItem9.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem9.image.src = accordionResImage1;

var imageResourceItem10 = {
	id: "10",
	image: new Image()
};
imageResourceItem10.image.onload = function() {
    ImageResources.items.push(imageResourceItem10);
    ImageResources.add_ctr();
}
imageResourceItem10.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem10.image.src = datepickerResImage1;

var imageResourceItem11 = {
	id: "11",
	image: new Image()
};
imageResourceItem11.image.onload = function() {
    ImageResources.items.push(imageResourceItem11);
    ImageResources.add_ctr();
}
imageResourceItem11.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem11.image.src = helpButtonResImage1;

var imageResourceItem12 = {
	id: "12",
	image: new Image()
};
imageResourceItem12.image.onload = function() {
    ImageResources.items.push(imageResourceItem12);
    ImageResources.add_ctr();
}
imageResourceItem12.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem12.image.src = radiobuttonResImage1;

var imageResourceItem13 = {
	id: "13",
	image: new Image()
};
imageResourceItem13.image.onload = function() {
    ImageResources.items.push(imageResourceItem13);
    ImageResources.add_ctr();
}
imageResourceItem13.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem13.image.src = radiobuttonResImage2;

var imageResourceItem14 = {
	id: "14",
	image: new Image()
};
imageResourceItem14.image.onload = function() {
    ImageResources.items.push(imageResourceItem14);
    ImageResources.add_ctr();
}
imageResourceItem14.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem14.image.src = radiobuttonResImage3;

var imageResourceItem15 = {
	id: "15",
	image: new Image()
};
imageResourceItem15.image.onload = function() {
    ImageResources.items.push(imageResourceItem15);
    ImageResources.add_ctr();
}
imageResourceItem15.image.onerror = function() {
    ImageResources.add_ctr();
};
imageResourceItem15.image.src = radiobuttonResImage4;



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
		this.computed_position.left = x;
		this.computed_position.top = y;
		this.computed_position.right = x + this.computed_size.width;
		this.computed_position.bottom = y + this.computed_size.height;

		this.real_position.left = x - Sheet.selisihOffset.left;
		this.real_position.top = y - Sheet.selisihOffset.top;
		this.real_position.right = x + this.real_size.width - Sheet.selisihOffset.left;
		this.real_position.bottom = y + this.real_size.height - Sheet.selisihOffset.top;
    },
    convertRealPositionToComputedPosition: function() {
        this.computed_position = {
            left: this.real_position.left + Sheet.selisihOffset.left,
            top: this.real_position.top + Sheet.selisihOffset.top,
            right: this.real_position.right + Sheet.selisihOffset.left,
            bottom: this.real_position.bottom + Sheet.selisihOffset.top
        };
    },
    convertRealSizeToComputedSize: function() {
        this.computed_size = clone(this.real_size);
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
    border_opacity: 1,
    border_color: "#000000",
    default_border_radius: 0,
    border_radius: 0,
    border_width: 1,
    default_background_color: "#FFFFFF",
    background_color: "#FFFFFF",
	default_font_color: "#000000",
	font_color: "#000000",
	has_text: true,
	text: "",
    multiline: false,
    custom_properties: [],
	children: [],
	change_text: function(text) {
		this.text = text;
		this.onTextChanged();
	},
    onTextChanged: function() {
        
	},
	change_font_family: function(font_family) {
		this.font_family = font_family;
	},
	change_font_size: function(font_size) {
		this.font_size = font_size;
    },
    change_font_color: function(font_color) {
        this.font_color = font_color;
    },
    change_border_color: function(border_color) {
        this.border_color = border_color;
    },
    change_border_width: function(border_width) {
        this.border_width = border_width;
    },
    change_border_radius: function(border_radius) {
        this.border_radius = border_radius;
    },
    change_border_opacity: function(border_opacity) {
        this.border_opacity = border_opacity / 100;
    },
    drawComponentBorder: function(context) {
        context.globalAlpha = this.border_opacity;
        context.strokeStyle = this.border_color;
        context.lineWidth = this.border_width;
    
        context.beginPath();
        context.moveTo(this.computed_position.left + this.border_radius, this.computed_position.top);
        context.lineTo(this.computed_position.right - this.border_radius, this.computed_position.top);
        context.arcTo(this.computed_position.right, this.computed_position.top, this.computed_position.right, this.computed_position.top + this.border_radius, this.border_radius);
        context.lineTo(this.computed_position.right, this.computed_position.bottom - this.border_radius);
        context.arcTo(this.computed_position.right, this.computed_position.bottom, this.computed_position.right - this.border_radius, this.computed_position.bottom, this.border_radius);
        context.lineTo(this.computed_position.left + this.border_radius, this.computed_position.bottom);
        context.arcTo(this.computed_position.left, this.computed_position.bottom, this.computed_position.left, this.computed_position.bottom - this.border_radius, this.border_radius);
        context.lineTo(this.computed_position.left, this.computed_position.top + this.border_radius);
        context.arcTo(this.computed_position.left, this.computed_position.top, this.computed_position.left + this.border_radius, this.computed_position.top, this.border_radius);
        context.stroke();

        context.globalAlpha = 1;
    },
    draw: function() {

	}
}


// ---------------------------------------------------------------------
/*
	Group Defaults
*/
// ---------------------------------------------------------------------
var Group = {
	temp_id: "-1",
    components: [],
    name: "",
	real_size: {
		width: 0,
		height: 0
	},
	computed_size: {
		width: 0,
		height: 0
	},
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
    convertRealSizeToComputedSize: function() {
        this.computed_size = clone(this.real_size);
    },
    convertRealPositionToComputedPosition: function() {
        this.computed_position = {
            left: this.real_position.left + Sheet.selisihOffset.left,
            top: this.real_position.top + Sheet.selisihOffset.top,
            right: this.real_position.right + Sheet.selisihOffset.left,
            bottom: this.real_position.bottom + Sheet.selisihOffset.top
        };
    }
};

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
    this.drawComponentBorder(context);
    
	context.fillStyle = this.background_color;
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
Button2.name = "Multiline Button";
Button2.real_name = "Multiline Button";
Button2.text = "Multiline\nButton";
Button2.multiline = true;
Button2.image = componentImage2;
Button2.default_size = {
	width: 100,
	height: 30
};
Button2.real_size = clone(Button2.default_size);
Button2.computed_size = clone(Button2.default_size);
Button2.default_border_radius = 11;
Button2.border_radius = 11;
Button2.font_size = 9;
Button2.draw = function(context) {
	this.drawComponentBorder(context);

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
Button3.custom_properties = [
    {
        group: "Button Color",
        item: [
            {
                label: "Normal",
                value: "#FFFFFF",
                value_type: "color"
            },
            {
                label: "Highlighted",
                value: "#FFFFFF",
                value_type: "color"
            }
        ]
    }
],
Button3.draw = function(context) {
	var items = this.text.split(",");
	this.drawComponentBorder(context);
	
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";

	var iLength = items.length;
	var eachButtonWidth = this.computed_size.width / iLength;
	context.beginPath();
	var centerY = this.computed_position.top + this.computed_size.height / 2;
	for (var i = 0; i < iLength; i++) {
        var lineOffset = this.computed_position.left + eachButtonWidth * i;
        context.fillStyle = this.custom_properties[0].item[0].value;
        context.fillRect(lineOffset, this.computed_position.top, eachButtonWidth, this.computed_size.height);

		var centerX = lineOffset + eachButtonWidth / 2;
        var text = items[i].trim();
        context.fillStyle = this.font_color;
		context.fillText(text, centerX, centerY);

        context.lineWidth = this.border_width;
		if (i > 0) {
			context.moveTo(lineOffset, this.computed_position.top);
			context.lineTo(lineOffset, this.computed_position.bottom);
		}
	}
	context.stroke();
};

var Button4 = Object.create(Component);
Button4.id = "4";
Button4.name = "Pointy Button";
Button4.real_name = "Pointy Button";
Button4.text = "Button";
Button4.image = componentImage4;
Button4.default_size = {
	width: 100,
	height: 30
};
Button4.real_size = clone(Button4.default_size);
Button4.computed_size = clone(Button4.default_size);
Button4.border_opacity = 0;
Button4.draw = function(context) {
    this.drawComponentBorder(context);

	context.strokeStyle = this.font_color;
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
Checkbox.text = "[]Checkbox";
Checkbox.image = componentImage5;
Checkbox.default_size = {
	width: 100,
	height: 30
};
Checkbox.real_size = clone(Checkbox.default_size);
Checkbox.computed_size = clone(Checkbox.default_size);
Checkbox.border_opacity = 0;
Checkbox.draw = function(context) {
    this.drawComponentBorder(context);
	context.strokeStyle = this.font_color;
	context.lineWidth = 1;

	var kotakHeight = this.font_size / this.default_font_size * 15;
	var kotakWidth = kotakHeight;
	var kotakTop = this.computed_position.top + (this.computed_size.height - kotakHeight) / 2;
	var kotakLeft = this.computed_position.left + 10;

	var text_shown = this.text;
	var image_resource = null;
	var first2Letter = this.text.substring(0, 4).match(/(\[\][d]{0,1})|(\[v\][d]{0,1})|(\[-\][d]{0,1})/);
	switch (first2Letter[0]) {
		case "[]":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("1");
			text_shown = this.text.substring(2);
			break;
		case "[v]":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("2");
			text_shown = this.text.substring(3);
			break;
		case "[-]":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("3");
			text_shown = this.text.substring(3);
			break;
		case "[]d":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("4");
			text_shown = this.text.substring(3);
			break;
		case "[v]d":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("5");
			text_shown = this.text.substring(4);
			break;
		case "[-]d":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("6");
			text_shown = this.text.substring(4);
			break;
	}

	if (image_resource != null) {
		context.drawImage(image_resource, kotakLeft, kotakTop, kotakWidth, kotakHeight);
	}

	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(text_shown, kotakLeft + kotakWidth + 6, center.y);
};

var CheckboxGroup = Object.create(Component);
CheckboxGroup.id = "6";
CheckboxGroup.name = "Checkbox Group";
CheckboxGroup.real_name = "Checkbox Group";
CheckboxGroup.text = "[]Not selected\n[v]Selected\n[-]Indeterminate\n[]dDisabled\n[v]dDisabled selected\n[-]dDisabled Indeterminate";
CheckboxGroup.multiline = true;
CheckboxGroup.image = componentImage6;
CheckboxGroup.font_spacing = 2;
CheckboxGroup.default_size = {
	width: 174,
	height: 154
};
CheckboxGroup.real_size = clone(CheckboxGroup.default_size);
CheckboxGroup.computed_size = clone(CheckboxGroup.default_size);
CheckboxGroup.border_opacity = 0;
CheckboxGroup.draw = function(context) {
    this.drawComponentBorder(context);
	context.strokeStyle = this.font_color;
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
		var first2Letter = current_line.substring(0, 4).match(/(\[\][d]{0,1})|(\[v\][d]{0,1})|(\[-\][d]{0,1})/);
		switch (first2Letter[0]) {
			case "[]":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("1");
				text_shown = current_line.substring(2);
				break;
			case "[v]":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("2");
				text_shown = current_line.substring(3);
				break;
			case "[-]":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("3");
				text_shown = current_line.substring(3);
				break;
			case "[]d":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("4");
				text_shown = current_line.substring(3);
				break;
			case "[v]d":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("5");
				text_shown = current_line.substring(4);
				break;
			case "[-]d":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("6");
				text_shown = current_line.substring(4);
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
CircleButton.has_text = false;
CircleButton.image = componentImage7;
CircleButton.default_size = {
	width: 60,
	height: 60
};
CircleButton.real_size = clone(CircleButton.default_size);
CircleButton.computed_size = clone(CircleButton.default_size);
CircleButton.draw = function(context) {
	context.strokeStyle = this.border_color;
	context.lineWidth = 1;
	
    var x1 = this.computed_position.left, y1 = this.computed_position.top, x2 = this.computed_position.right, y2 = this.computed_position.bottom;
    var radiusX = (x2 - x1) * 0.5,
        radiusY = (y2 - y1) * 0.5,
        centerX = x1 + radiusX,
        centerY = y1 + radiusY,
        step = 0.01,
        a = step,
        pi2 = Math.PI * 2 - step;
    
    context.beginPath();
    context.moveTo(centerX + radiusX * Math.cos(0), centerY + radiusY * Math.sin(0));

    for (; a < pi2; a += step) {
        context.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY * Math.sin(a));
    }
    
    context.closePath();
    context.stroke();

	var kotakHeight = this.font_size * 2;
	var kotakWidth = kotakHeight;
	var kotakTop = this.computed_position.top + (this.computed_size.height - kotakHeight) / 2;
	var kotakLeft = this.computed_position.left + (this.computed_size.width - kotakHeight) / 2;

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
    this.drawComponentBorder(context);
    
	context.fillStyle = this.background_color;
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

    context.strokeStyle = this.border_color;
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
Accordion.multiline = true;
Accordion.text = "List Item 1\nList Item 2\n*List Item 3   >\nList Item 4";
Accordion.image = componentImage9;
Accordion.default_size = {
	width: 160,
	height: 140
};
Accordion.real_size = clone(Accordion.default_size);
Accordion.computed_size = clone(Accordion.default_size);
Accordion.draw = function(context) {
	context.strokeStyle = this.border_color;
	context.lineWidth = 1;

	context.fillStyle = this.background_color;
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);

	context.beginPath();
	context.moveTo(this.computed_position.left, this.computed_position.top);
	context.lineTo(this.computed_position.right, this.computed_position.top);
	context.stroke();

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";

	var lines = this.text.split("\n");
	var iLength = lines.length;
	var rowHeight = this.computed_size.height / iLength;

	for (var i = 0; i < iLength; i++) {
		var rowTop = this.computed_position.top + i * rowHeight;
		var rowBottom = rowTop + rowHeight;

		var line = lines[i];
		var selected = line.substring(0, 1);
		if (selected == "*") {
			line = line.substring(1);
			context.fillStyle = "#CCCCCC";
			context.fillRect(this.computed_position.left + 1, rowTop + 1, this.computed_size.width - 2, rowHeight - 2);
		}

		context.fillStyle = this.font_color;
		var rightArrow = line.slice(-1);
		if (rightArrow == ">") {
			line = line.substring(0, line.length - 1);
			var iconLeft = this.computed_position.right - 20;
			var iconTop = rowTop + (rowHeight - 15) / 2;
			var image_resource = ImageResources.getImage("9");
			context.drawImage(image_resource, iconLeft, iconTop, 15, 15);
		}
		context.fillText(line, this.computed_position.left + 10, rowTop + rowHeight / 2);

		context.beginPath();
		context.moveTo(this.computed_position.left, rowTop);
		context.lineTo(this.computed_position.left, rowBottom);
		context.moveTo(this.computed_position.right, rowTop);
		context.lineTo(this.computed_position.right, rowBottom);
		context.moveTo(this.computed_position.left, rowBottom);
		context.lineTo(this.computed_position.right, rowBottom);
		context.stroke();
	}
};

var ColorPicker = Object.create(Component);
ColorPicker.id = "10";
ColorPicker.name = "Color Picker";
ColorPicker.real_name = "Color Picker";
ColorPicker.image = componentImage10;
ColorPicker.has_text = false;
ColorPicker.default_size = {
	width: 40,
	height: 40
};
ColorPicker.real_size = clone(ColorPicker.default_size);
ColorPicker.computed_size = clone(ColorPicker.default_size);
ColorPicker.border_width = 4;
ColorPicker.background_color = "#5555FF";
ColorPicker.draw = function(context) {
	context.fillStyle = this.background_color;
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);

	this.drawComponentBorder(context);
};

var DateChooser = Object.create(Component);
DateChooser.id = "11";
DateChooser.name = "DateChooser";
DateChooser.real_name = "DateChooser";
DateChooser.text = "06/05/1999";
DateChooser.image = componentImage11;
DateChooser.default_size = {
	width: 130,
	height: 30
};
DateChooser.real_size = clone(DateChooser.default_size);
DateChooser.computed_size = clone(DateChooser.default_size);
DateChooser.draw = function(context) {
	context.strokeStyle = this.border_color;
	context.lineWidth = 1;

	var textContainerRight = this.computed_position.right - 40;
	var textContainerWidth = this.computed_size.width - 40;
	context.strokeRect(this.computed_position.left, this.computed_position.top, textContainerWidth, this.computed_size.height);
	context.fillStyle = this.background_color;
	context.fillRect(this.computed_position.left, this.computed_position.top, textContainerWidth, this.computed_size.height)

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "center";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, (this.computed_position.left + textContainerRight) / 2, center.y);

	var image_resource = ImageResources.getImage("10");
	context.drawImage(image_resource, textContainerRight + 10, this.computed_position.top + (this.computed_size.height - 30) / 2, 30, 30);
};

var GroupBox = Object.create(Component);
GroupBox.id = "12";
GroupBox.name = "Group Box";
GroupBox.real_name = "Group Box";
GroupBox.text = "Group Box";
GroupBox.image = componentImage12;
GroupBox.default_size = {
	width: 180,
	height: 120
};
GroupBox.real_size = clone(GroupBox.default_size);
GroupBox.computed_size = clone(GroupBox.default_size);
GroupBox.draw = function(context) {
	this.drawComponentBorder(context);
    
	context.fillStyle = "#FFFFFF";
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var textWidth = context.measureText(this.text).width;
	var textLeft = this.computed_position.left + this.computed_size.width / 6;
	context.fillStyle = this.background_color;
	context.fillRect(textLeft - 7, this.computed_position.top - this.font_size / 2, textWidth + 14, this.font_size);
	context.fillStyle = this.font_color;
	context.fillText(this.text, textLeft, this.computed_position.top);
};

var DatePicker = Object.create(Component);
DatePicker.id = "13";
DatePicker.name = "Datepicker";
DatePicker.real_name = "Datepicker";
DatePicker.text = "04/10/2017";
DatePicker.text_year = "2017";
DatePicker.text_month = "October";
DatePicker.text_day = "4";
DatePicker.text_max_date = "31";
DatePicker.text_first_date = 1;
DatePicker.date_default = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
DatePicker.month_default = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
DatePicker.image = componentImage13;
DatePicker.default_size = {
	width: 230,
	height: 360
};
DatePicker.real_size = clone(DatePicker.default_size);
DatePicker.computed_size = clone(DatePicker.default_size);
DatePicker.custom_properties = [
    {
        group: "Header",
        item: [
            {
                label: "Background Color",
                value: "#DDDDDD",
                value_type: "color"
            },
            {
                label: "Year Color",
                value: "#000000",
                value_type: "color"
            },
            {
                label: "Month & Date Color",
                value: "#000000",
                value_type: "color"
            }
        ]
    },
    {
        group: "Body",
        item: [
            {
                label: "Background Color",
                value: "#FFFFFF",
                value_type: "color"
            },
            {
                label: "Month & Year Color",
                value: "#000000",
                value_type: "color"
            },
            {
                label: "Week Color",
                value: "#000000",
                value_type: "color"
            },
            {
                label: "Date Color",
                value: "#000000",
                value_type: "color"
            }
        ]
    },
    {
        group: "Button",
        item: [
            {
                label: "Cancel",
                value: "#000000",
                value_type: "color"
            },
            {
                label: "OK",
                value: "#000000",
                value_type: "color"
            }
        ]
    }
],
DatePicker.draw = function(context) {
    this.drawComponentBorder(context);
    
	context.fillStyle = this.custom_properties[1].item[0].value;
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height)

	context.fillStyle = this.custom_properties[0].item[0].value;
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, 70);

	var dateItem = this.text.split("/");
	var date = parseInt(dateItem[0]);
	var month = parseInt(dateItem[1]);
	var year = parseInt(dateItem[2]);
	
	var valid = false;
	if (!isNaN(date) && date < 32 && date > 0 && !isNaN(month) && month < 13 && month > 0 && !isNaN(year) && year > 1900 && year < 2100) {
		valid = true;
	}

	if (valid) {
		this.text_year = year;
		this.text_day = date;
		this.text_month = this.month_default[month - 1];
	}

	context.textBaseline = "middle";
	context.fillStyle = this.custom_properties[0].item[1].value;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
    context.fillText(this.text_year, this.computed_position.left + 10, this.computed_position.top + 20);
    
    context.fillStyle = this.custom_properties[0].item[2].value;
	context.font = this.font_size + 10 + "px " + this.font_family;
	context.fillText(this.text_month.substr(0, 3) + " " + this.text_day, this.computed_position.left + 10, this.computed_position.top + 40);

    context.fillStyle = this.custom_properties[1].item[1].value;
	context.font = "bold " +  (this.font_size + 1) + "px " + this.font_family;
	context.textAlign = "center";
	var center = this.getCenterPosition();
	context.fillText(this.text_month + " " + this.text_year, center.x, this.computed_position.top + 90);

    context.fillStyle = this.custom_properties[1].item[2].value;
	context.font = this.font_size + "px " + this.font_family;
	var horizontalMargin = (this.computed_size.width - 30) / 6;
	var firstLeft = this.computed_position.left + 15;
	var dayNames = ["S", "M", "T", "W", "T", "F", "S"];
	var iLength = dayNames.length;
	for (var i = 0; i < iLength; i++) {
		context.fillText(dayNames[i], firstLeft + i * horizontalMargin, this.computed_position.top + 120);
	}

	var d = new Date(year, month - 1, 1);
	var dates = [];
	var daysInMonth = new Date(year, month, 0).getDate();
	for (var i = 1; i <= daysInMonth; i++) {
		dates.push(i + "");
	}

	var first_date = d.getDay();
	for (var i = 0; i < first_date; i++) {
		dates.splice(0, 0, "");
	}

    context.fillStyle = this.custom_properties[1].item[3].value;
	var line = 1;
	var col = 0;
	var verticalMargin = (this.computed_size.height - 200) / 5;
	var iLength = dates.length;
	for (var i = 0; i < iLength; i++) {
		if (col == 7) {
			col = 0;
			line++;
		}

		context.fillText(dates[i], firstLeft + col * horizontalMargin, this.computed_position.top + 120 + line * verticalMargin);

		col++;
	}

    context.fillStyle = this.custom_properties[2].item[0].value;
    context.fillText("CANCEL", this.computed_position.right - 80, this.computed_position.bottom - 20);
    context.fillStyle = this.custom_properties[2].item[1].value;
	context.fillText("OK", this.computed_position.right - 30, this.computed_position.bottom - 20);
};

var HelpButton = Object.create(Component);
HelpButton.id = "14";
HelpButton.name = "Help Button";
HelpButton.real_name = "Help Button";
HelpButton.has_text = false;
HelpButton.image = componentImage14;
HelpButton.default_size = {
	width: 60,
	height: 60
};
HelpButton.real_size = clone(HelpButton.default_size);
HelpButton.computed_size = clone(HelpButton.default_size);
HelpButton.draw = function(context) {
	context.strokeStyle = this.border_color;
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
	var kotakLeft = this.computed_position.left + (this.computed_size.width - kotakHeight) / 2;

	var image_resource = ImageResources.getImage("11");
	context.drawImage(image_resource, kotakLeft, kotakTop, kotakWidth, kotakHeight);
};

var RadioButton = Object.create(Component);
RadioButton.id = "15";
RadioButton.name = "Radiobutton";
RadioButton.real_name = "Radiobutton";
RadioButton.text = "(*)Radiobutton";
RadioButton.image = componentImage15;
RadioButton.default_size = {
	width: 110,
	height: 30
};
RadioButton.real_size = clone(RadioButton.default_size);
RadioButton.computed_size = clone(RadioButton.default_size);
RadioButton.border_opacity = 0;
RadioButton.draw = function(context) {
    this.drawComponentBorder(context);

	context.strokeStyle = "#000000";
	context.lineWidth = 1;

	var kotakHeight = this.font_size / this.default_font_size * 15;
	var kotakWidth = kotakHeight;
	var kotakTop = this.computed_position.top + (this.computed_size.height - kotakHeight) / 2;
	var kotakLeft = this.computed_position.left + 10;

	var text_shown = this.text;
	var image_resource = null;
	var first4Letter = this.text.substring(0, 4).match(/(\(\)[d]{0,1})|(\(\*\)[d]{0,1})/);
	switch (first4Letter[0]) {
		case "()":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("12");
			text_shown = this.text.substring(2);
			break;
		case "(*)":
			context.fillStyle = this.font_color;
			image_resource = ImageResources.getImage("13");
			text_shown = this.text.substring(3);
			break;
		case "()d":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("14");
			text_shown = this.text.substring(3);
			break;
		case "(*)d":
			context.fillStyle = "#999";
			image_resource = ImageResources.getImage("15");
			text_shown = this.text.substring(4);
			break;
	}

	if (image_resource != null) {
		context.drawImage(image_resource, kotakLeft, kotakTop, kotakWidth, kotakHeight);
	}

	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(text_shown, kotakLeft + kotakWidth + 6, center.y);
};

var RadioButtonGroup = Object.create(Component);
RadioButtonGroup.id = "16";
RadioButtonGroup.name = "Radiobutton Group";
RadioButtonGroup.real_name = "Radiobutton Group";
RadioButtonGroup.text = "()Unchecked\n(*)Checked\n()dUnchecked Disabled\n(*)dChecked Disabled";
RadioButtonGroup.multiline = true;
RadioButtonGroup.image = componentImage16;
RadioButtonGroup.font_spacing = 2;
RadioButtonGroup.default_size = {
	width: 170,
	height: 105
};
RadioButtonGroup.real_size = clone(RadioButtonGroup.default_size);
RadioButtonGroup.computed_size = clone(RadioButtonGroup.default_size);
RadioButtonGroup.border_opacity = 0;
RadioButtonGroup.draw = function(context) {
    this.drawComponentBorder(context);

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
		var first4Letter = current_line.substring(0, 4).match(/(\(\)[d]{0,1})|(\(\*\)[d]{0,1})/);
		switch (first4Letter[0]) {
			case "()":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("12");
				text_shown = text_shown.substring(2);
				break;
			case "(*)":
				context.fillStyle = this.font_color;
				image_resource = ImageResources.getImage("13");
				text_shown = text_shown.substring(3);
				break;
			case "()d":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("14");
				text_shown = text_shown.substring(3);
				break;
			case "(*)d":
				context.fillStyle = "#999";
				image_resource = ImageResources.getImage("15");
				text_shown = text_shown.substring(4);
				break;
		}

		if (image_resource != null) {
			context.drawImage(image_resource, kotakLeft, center.y - firstY - kotakCenter, kotakWidth, kotakHeight);
		}
		
		context.fillText(text_shown, kotakLeft + kotakWidth + 6, center.y - firstY);
		firstY -= this.font_size * this.font_spacing;
	}
};

var Icon = Object.create(Component);
Icon.id = "17";
Icon.name = "Icon";
Icon.real_name = "Icon";
Icon.image = componentImage17;
Icon.has_text = false;
Icon.default_size = {
	width: 40,
	height: 40
};
Icon.real_size = clone(Icon.default_size);
Icon.computed_size = clone(Icon.default_size);
Icon.default_border_radius = 11;
Icon.border_radius = 11;
Icon.border_width = 2;
Icon.draw = function(context) {
	this.drawComponentBorder(context);
};

var SingleLineText = Object.create(Component);
SingleLineText.id = "18";
SingleLineText.name = "Single Line Text";
SingleLineText.real_name = "Single Line Text";
SingleLineText.text = "This is a single line text.";
SingleLineText.image = componentImage18;
SingleLineText.default_size = {
	width: 160,
	height: 30
};
SingleLineText.real_size = clone(SingleLineText.default_size);
SingleLineText.computed_size = clone(SingleLineText.default_size);
SingleLineText.border_opacity = 0;
SingleLineText.draw = function(context) {
    this.drawComponentBorder(context);
    
	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, this.computed_position.left + 10, center.y);
};

var MultiLineText = Object.create(Component);
MultiLineText.id = "19";
MultiLineText.name = "Multi Line Text";
MultiLineText.real_name = "Multi Line Text";
MultiLineText.text = "This is a multi line text.This multi line text consists of lines of text";
MultiLineText.image = componentImage19;
MultiLineText.default_size = {
	width: 180,
	height: 60
};
MultiLineText.real_size = clone(MultiLineText.default_size);
MultiLineText.computed_size = clone(MultiLineText.default_size);
MultiLineText.border_opacity = 0;
MultiLineText.draw = function(context) {
    this.drawComponentBorder(context);

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "top";
	
	var x = this.computed_position.left + 10;
	var y = this.computed_position.top + 10;
	var maxWidth = this.computed_size.width - 20;
	var words = this.text.split(" ");
	var line = "";
	for (var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + ' ';
		var testWidth = context.measureText(testLine).width;
		if (testWidth > maxWidth && n > 0) {
			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += this.font_size * this.font_spacing;
		}
		else {
			line = testLine;
		}
	}
	context.fillText(line, x, y);
};

var Link = Object.create(Component);
Link.id = "20";
Link.name = "Link";
Link.real_name = "Link";
Link.text = "This is a link";
Link.font_color = "#0400d3";
Link.image = componentImage20;
Link.default_size = {
	width: 100,
	height: 30
};
Link.real_size = clone(Link.default_size);
Link.computed_size = clone(Link.default_size);
Link.border_opacity = 0;
Link.draw = function(context) {
    this.drawComponentBorder(context);

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();
	context.fillText(this.text, this.computed_position.left + 10, center.y);
	var textWidth = context.measureText(this.text).width;

	var underlineTop = center.y + this.font_size / 1.4;
	var underlineRight = this.computed_position.left + 10 + textWidth;
	context.strokeStyle = this.font_color;
	context.lineWidth = 1;
	context.beginPath();
	context.moveTo(this.computed_position.left + 10, underlineTop);
	context.lineTo(underlineRight, underlineTop);
	context.stroke();
};

var LinkBar = Object.create(Component);
LinkBar.id = "21";
LinkBar.name = "Link Bar";
LinkBar.real_name = "Link Bar";
LinkBar.text = "Home, Products, Company, Blog";
LinkBar.font_color = "#0400d3";
LinkBar.image = componentImage20;
LinkBar.default_size = {
	width: 260,
	height: 30
};
LinkBar.real_size = clone(LinkBar.default_size);
LinkBar.computed_size = clone(LinkBar.default_size);
LinkBar.border_opacity = 0;
LinkBar.custom_properties = [
    {
        group: "Divider",
        item: [
            {
                label: "Color",
                value: "#000000",
                value_type: "color"
            },
            {
                label: "Distance",
                value: 10,
                value_type: "number"
            },
            {
                label: "Width",
                value: 1,
                value_type: "number"
            }
        ]
    }
];
LinkBar.draw = function(context) {
    this.drawComponentBorder(context);

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";
	var center = this.getCenterPosition();

	var texts = this.text.split(",");
    var iLength = texts.length;
    var distance = this.custom_properties[0].item[1].value;
	var left = this.computed_position.left + distance;
	var underlineTop = center.y + this.font_size / 1.4;

	var lineTop = center.y - this.font_size / 1.5;
	var lineBottom = center.y + this.font_size / 1.5;
    context.lineWidth = this.custom_properties[0].item[2].value;
    
	for (var i = 0; i < iLength; i++) {
		texts[i] = texts[i].trim();
		context.fillText(texts[i], left, center.y);

		var textWidth = context.measureText(texts[i]).width;
		var underlineRight = left + textWidth;

		context.strokeStyle = this.font_color;
		context.beginPath();
		context.moveTo(left, underlineTop);
		context.lineTo(underlineRight, underlineTop);
		context.stroke();

		if (i < iLength - 1) {
			context.strokeStyle = this.custom_properties[0].item[0].value;
			context.beginPath();
			context.moveTo(left + textWidth + distance, lineTop);
			context.lineTo(left + textWidth + distance, lineBottom);
			context.stroke();
		}

		left += textWidth + distance * 2;
	}
};

var Menu = Object.create(Component);
Menu.id = "22";
Menu.name = "Menu";
Menu.real_name = "Menu";
Menu.multiline = true;
Menu.text = "Open, Ctrl + O\nOpen Recent, >\n\n(*)Option One\nOption Two\n\n(v)Toggle Item\ndDisabled Item\nExit, Ctrl + Q";
Menu.image = componentImage9;
Menu.default_size = {
	width: 160,
	height: 250
};
Menu.real_size = clone(Menu.default_size);
Menu.computed_size = clone(Menu.default_size);
Menu.draw = function(context) {
	context.strokeStyle = "#000000";
	context.lineWidth = 1;

	context.fillStyle = "#FFFFFF";
	context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);

	context.beginPath();
	context.moveTo(this.computed_position.left, this.computed_position.top);
	context.lineTo(this.computed_position.right, this.computed_position.top);
	context.stroke();

	context.fillStyle = this.font_color;
	context.font = this.font_size + "px " + this.font_family;
	context.textAlign = "left";
	context.textBaseline = "middle";

	var lines = this.text.split("\n");
	var iLength = lines.length;
	var rowHeight = this.computed_size.height / iLength;

	for (var i = 0; i < iLength; i++) {
		var rowTop = this.computed_position.top + i * rowHeight;
		var rowBottom = rowTop + rowHeight;

		var line = lines[i];
		var selected = line.substring(0, 3);
		if (selected == "(*)") {
			line = line.substring(3);
			context.fillStyle = "#CCCCCC";
			context.fillRect(this.computed_position.left + 1, rowTop + 1, this.computed_size.width - 2, rowHeight - 2);
		} else if (selected == "(v)") {
			line = line.substring(3);
			context.fillStyle = "#CCCCCC";
			context.fillRect(this.computed_position.left + 1, rowTop + 1, this.computed_size.width - 2, rowHeight - 2);
		}

		context.fillStyle = this.font_color;
		var rightArrow = line.slice(-1);
		if (rightArrow == ">") {
			line = line.substring(0, line.length - 1);
			var iconLeft = this.computed_position.right - 20;
			var iconTop = rowTop + (rowHeight - 15) / 2;
			var image_resource = ImageResources.getImage("9");
			context.drawImage(image_resource, iconLeft, iconTop, 15, 15);
		}
		context.fillText(line, this.computed_position.left + 10, rowTop + rowHeight / 2);
	}
};

var ImageX = Object.create(Component);
ImageX.id = "23";
ImageX.name = "Image";
ImageX.real_name = "Image";
ImageX.has_text = false;
ImageX.image = componentImage23;
ImageX.default_size = {
	width: 150,
	height: 100
};
ImageX.real_size = clone(ImageX.default_size);
ImageX.computed_size = clone(ImageX.default_size);
ImageX.draw = function(context) {    
	context.fillStyle = this.background_color;
    context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);

    this.drawComponentBorder(context);
    
    context.globalAlpha = this.border_opacity;
    context.strokeStyle = this.border_color;
    context.lineWidth = this.border_width;
    context.beginPath();
    context.moveTo(this.computed_position.left, this.computed_position.top);
    context.lineTo(this.computed_position.right, this.computed_position.bottom);
    context.moveTo(this.computed_position.right, this.computed_position.top);
    context.lineTo(this.computed_position.left, this.computed_position.bottom);
    context.stroke();
    context.globalAlpha = 1;
};

var Rectangle = Object.create(Component);
Rectangle.id = "24";
Rectangle.name = "Image";
Rectangle.real_name = "Image";
Rectangle.has_text = false;
Rectangle.image = componentImage24;
Rectangle.default_size = {
	width: 150,
	height: 100
};
Rectangle.real_size = clone(Rectangle.default_size);
Rectangle.computed_size = clone(Rectangle.default_size);
Rectangle.draw = function(context) {
    context.fillStyle = this.background_color;
    context.fillRect(this.computed_position.left, this.computed_position.top, this.computed_size.width, this.computed_size.height);

    this.drawComponentBorder(context);
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
ALL_COMPONENTS.items.push(Accordion);
ALL_COMPONENTS.items.push(ColorPicker);
ALL_COMPONENTS.items.push(DateChooser);
ALL_COMPONENTS.items.push(GroupBox);
ALL_COMPONENTS.items.push(DatePicker);
ALL_COMPONENTS.items.push(HelpButton);
ALL_COMPONENTS.items.push(RadioButton);
ALL_COMPONENTS.items.push(RadioButtonGroup);
ALL_COMPONENTS.items.push(Icon);
ALL_COMPONENTS.items.push(SingleLineText);
ALL_COMPONENTS.items.push(MultiLineText);
ALL_COMPONENTS.items.push(Link);
ALL_COMPONENTS.items.push(LinkBar);
ALL_COMPONENTS.items.push(Menu);
ALL_COMPONENTS.items.push(ImageX);
ALL_COMPONENTS.items.push(Rectangle);


// ---------------------------------------------------------------------
/*
	Sheet Default
*/
// ---------------------------------------------------------------------
var Sheet = {
	width: 0,
	height: 0,
	offset: {
		left: 0,
		top: 0
	},
	selisihOffset: {
		top: 0,
		left: 0
	},
    temp_id: 1,
    group_temp_id: 1,
	components: [],
	addComponent: function(component) {
        component.temp_id = this.temp_id;
        var id = component.id;
        var ctr = 1;
        var iLength = this.components.length;
        for (var i = 0; i < iLength; i++) {
            if (this.components[i].id == id) {
                ctr++;
            }
        }
        component.name = component.real_name + " " + ctr;
		this.components.push(component);
		this.removeAllActiveComponents();
		this.setActiveComponent(this.temp_id);
		this.temp_id++;

        History.addToStack({
            type: "add_component",
            components: [{
                componentIndex: this.components.length - 1,
                component: clone(component)
            }]
        });
    },
    addComponentsFromHistory: function(currentState) {
        var components = currentState.components;
		var iLength = components.length;
        this.removeAllActiveComponents();
        for (var i = 0; i < iLength; i++) {
            this.components.splice(components[i].componentIndex, 0, components[i].component);
			this.setActiveComponent(components[i].component.temp_id);
			var index = components[i].componentIndex;
        }
	},
	addComponentsAndGroupsFromHistory: function(currentState) {
        var components = currentState.components;
        var iLength = components.length;
		this.removeAllActiveComponents();
		
        for (var i = 0; i < iLength; i++) {
            this.components.splice(components[i].componentIndex, 0, components[i].component);
            this.setActiveComponent(components[i].component.temp_id);
		}
		
		var groups = currentState.groups;
		iLength = groups.length;
		for (var i = 0; i < iLength; i++) {
			var jLength = groups[i].group.components.length;
			for (var j = 0; j < jLength; j++) {
				this.components.push(groups[i].group.components[j]);
			}

			this.groups.splice(groups[i].groupIndex, 0, groups[i].group);
			this.setActiveGroup(groups[i].group);
		}
    },
	isHittingComponentOnMouseDown: false,
    active_components: [],
    onActiveComponentChanged: null,
    activeComponentChanged: function() {
        if (this.onActiveComponentChanged != null) {
            this.onActiveComponentChanged();
        }
    },
	setActiveComponent: function(temp_id) {
		var component = this.getComponentByTempId(temp_id);
		if (component != null) {
            component = clone(component);

            var isInGroup = false;
            var iLength = this.groups.length;
            for (var i = 0; i < iLength; i++) {
                var group = this.groups[i];
                var jLength = group.components.length;
                for (var j = 0; j < jLength; j++) {
                    if (group.components[j].temp_id == temp_id) {
                        this.setActiveGroup(group);
                        isInGroup = true;
                    }
                }
            }

            if (!isInGroup) {
                this.active_components.push(component);
            }

            this.activeComponentChanged();
		}
    },
    setActiveComponents: function(temp_id_arr) {
        var kLength = temp_id_arr.length;
        for (var k = 0; k < kLength; k++) {
            var component = this.getComponentByTempId(temp_id_arr[k]);
            if (component != null) {
                component = clone(component);

                var isInGroup = false;
                var iLength = this.groups.length;
                for (var i = 0; i < iLength; i++) {
                    var group = this.groups[i];
                    var jLength = group.components.length;
                    for (var j = 0; j < jLength; j++) {
                        if (group.components[j].temp_id == temp_id) {
                            this.setActiveGroup(group);
                            isInGroup = true;
                        }
                    }
                }

                if (!isInGroup) {
                    this.active_components.push(component);
                }
            }
        }
        this.activeComponentChanged();
    },
    setActiveComponentsAndGroups: function(temp_id_arr, group_temp_id_arr) {
        var iLength = temp_id_arr.length;
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(temp_id_arr[i]);
            if (component != null) {
                component = clone(component);
                this.active_components.push(component);
            }
        }

        iLength = group_temp_id_arr.length;
        for (var i = 0; i < iLength; i++) {
            var group = this.getGroupByTempId(group_temp_id_arr[i]);
            this.setActiveGroup(group);
        }

        this.activeComponentChanged();
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
    indexOfActiveComponent: function(temp_id) {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.active_components[i].temp_id == temp_id) {
				return i;
			}
		}
		return -1;
    },
	removeAllActiveComponents: function() {
        this.active_components = [];
        this.active_groups = [];
        this.activeComponentChanged();
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
    onPropertyChanged: null,
    updateComponentPropertyByTempId: function(temp_id, type, value, context) {
        var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			if (this.components[i].temp_id == temp_id) {
				this.components[i][type](value);
				break;
			}
        }
        
        iLength = this.active_components.length;
        for (var i = 0; i < iLength; i++) {
            this.active_components[i][type](value);
        }

        this.draw(context);
        if (this.onPropertyChanged != null) {
            this.onPropertyChanged();
        }
    },
	updateActiveComponentsPosition: function(tempComponents, tempGroups) {
		var components_arr = [];
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			var component = this.getComponentByTempId(this.active_components[i].temp_id);

            this.active_components[i].real_position = clone(tempComponents[i].real_position);
            this.active_components[i].computed_position = clone(tempComponents[i].computed_position);
            
            var old_real_position = clone(component.real_position);
            var old_computed_position = clone(component.computed_position);
			var real_position = clone(this.active_components[i].real_position);
			var computed_position = clone(this.active_components[i].computed_position);
			
			components_arr.push({
                id: component.id,
                name: component.name,
                temp_id: component.temp_id,
                old_real_position: old_real_position,
                old_computed_position: old_computed_position,
                real_position: real_position,
                computed_position: computed_position
            });
        }
        this.updateComponentPositionFromActiveComponent();
		
		var groups_arr = [];
        iLength = this.active_groups.length;
		for (var i = 0; i < iLength; i++) {
			var group_components_arr = [];
            var jLength = tempGroups[i].components.length;
            for (var j = 0; j < jLength; j++) {
                this.active_groups[i].components[j].real_position = clone(tempGroups[i].components[j].real_position);
                this.active_groups[i].components[j].computed_position = clone(tempGroups[i].components[j].computed_position);

				var component = this.getComponentByTempId(this.active_groups[i].components[j].temp_id);
                
                var old_real_position = clone(component.real_position);
				var old_computed_position = clone(component.computed_position);
				var real_position = clone(this.active_groups[i].components[j].real_position);
                var computed_position = clone(this.active_groups[i].components[j].computed_position);

				group_components_arr.push({
                    id: component.id,
					temp_id: component.temp_id,
					old_real_position: old_real_position,
					old_computed_position: old_computed_position,
					real_position: real_position,
					computed_position: computed_position
				});
            }

            this.active_groups[i].real_position = clone(tempGroups[i].real_position);
            this.active_groups[i].computed_position = clone(tempGroups[i].computed_position);
			
            var group = this.getGroupByTempId(this.active_groups[i].temp_id);
            
            var old_real_position = clone(group.real_position);
			var old_computed_position = clone(group.computed_position);
			var real_position = clone(this.active_groups[i].real_position);
            var computed_position = clone(this.active_groups[i].computed_position);

			groups_arr.push({
                name: group.name,
				temp_id: group.temp_id,
				old_real_position: old_real_position,
				old_computed_position: old_computed_position,
				real_position: real_position,
				computed_position: computed_position,
				components: group_components_arr
			});
            
            this.updateGroupPositionFromActiveGroup(this.active_groups[i]);
		}

		History.addToStack({
            type: "move_component_or_group",
			components: components_arr,
			groups: groups_arr
        });
	},
	updateComponentPositionFromActiveComponent: function() {
        var components_arr = [];
        var iLength = this.active_components.length;
        for (var i = 0; i < iLength; i++) {
            var active_component = this.active_components[i];
            var component = this.getComponentByTempId(active_component.temp_id);
            
            component.real_position = {
                top: active_component.real_position.top,
                left: active_component.real_position.left,
                right: active_component.real_position.right,
                bottom: active_component.real_position.bottom
            };

            component.computed_position = {
                top: active_component.computed_position.top,
                left: active_component.computed_position.left,
                right: active_component.computed_position.right,
                bottom: active_component.computed_position.bottom
            };
        }
    },
    moveComponentFromHistoryUndo: function(currentState) {
        this.removeAllActiveComponents();
        var iLength = currentState.components.length;
        var temp_id_arr = [];
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(currentState.components[i].temp_id);
            var old_real_position = currentState.components[i].old_real_position;
            var old_computed_position = currentState.components[i].old_computed_position;

            component.real_position = {
                top: old_real_position.top,
                left: old_real_position.left,
                right: old_real_position.right,
                bottom: old_real_position.bottom
            };
            component.computed_position = {
                top: old_computed_position.top,
                left: old_computed_position.left,
                right: old_computed_position.right,
                bottom: old_computed_position.bottom
            };

            temp_id_arr.push(component.temp_id);
        }
		
		iLength = currentState.groups.length;
		var group_temp_id_arr = [];
		for (var i = 0; i < iLength; i++) {
			var group = this.getGroupByTempId(currentState.groups[i].temp_id);
			var old_real_position = currentState.groups[i].old_real_position;
			var old_computed_position = currentState.groups[i].old_computed_position;

			group.real_position = {
				top: old_real_position.top,
				left: old_real_position.left,
                right: old_real_position.right,
                bottom: old_real_position.bottom
			};
			group.computed_position = {
				top: old_computed_position.top,
                left: old_computed_position.left,
                right: old_computed_position.right,
                bottom: old_computed_position.bottom
			};

			var jLength = currentState.groups[i].components.length;
			for (var j = 0; j < jLength; j++) {
				var component = this.getComponentByTempId(currentState.groups[i].components[j].temp_id);
				var old_real_position = currentState.groups[i].components[j].old_real_position;
				var old_computed_position = currentState.groups[i].components[j].old_computed_position;

				component.real_position = {
					top: old_real_position.top,
					left: old_real_position.left,
					right: old_real_position.right,
					bottom: old_real_position.bottom
				};
				component.computed_position = {
					top: old_computed_position.top,
					left: old_computed_position.left,
					right: old_computed_position.right,
					bottom: old_computed_position.bottom
				};
			}

			group_temp_id_arr.push(group.temp_id);
		}

		this.setActiveComponentsAndGroups(temp_id_arr, group_temp_id_arr);
    },
    moveComponentFromHistoryRedo: function(currentState) {
        this.removeAllActiveComponents();
        var iLength = currentState.components.length;
        var temp_id_arr = [];
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(currentState.components[i].temp_id);
            var real_position = currentState.components[i].real_position;
            var computed_position = currentState.components[i].computed_position;

            component.real_position = {
                top: real_position.top,
                left: real_position.left,
                right: real_position.right,
                bottom: real_position.bottom
            };
            component.computed_position = {
                top: computed_position.top,
                left: computed_position.left,
                right: computed_position.right,
                bottom: computed_position.bottom
            };

            temp_id_arr.push(component.temp_id);
		}
		
		iLength = currentState.groups.length;
		var group_temp_id_arr = [];
		for (var i = 0; i < iLength; i++) {
			var group = this.getGroupByTempId(currentState.groups[i].temp_id);
			var real_position = currentState.groups[i].real_position;
			var computed_position = currentState.groups[i].computed_position;

			group.real_position = {
				top: real_position.top,
				left: real_position.left,
                right: real_position.right,
                bottom: real_position.bottom
			};
			group.computed_position = {
				top: computed_position.top,
                left: computed_position.left,
                right: computed_position.right,
                bottom: computed_position.bottom
			};

			var jLength = currentState.groups[i].components.length;
			for (var j = 0; j < jLength; j++) {
				var component = this.getComponentByTempId(currentState.groups[i].components[j].temp_id);
				var real_position = currentState.groups[i].components[j].real_position;
				var computed_position = currentState.groups[i].components[j].computed_position;

				component.real_position = {
					top: real_position.top,
					left: real_position.left,
					right: real_position.right,
					bottom: real_position.bottom
				};
				component.computed_position = {
					top: computed_position.top,
					left: computed_position.left,
					right: computed_position.right,
					bottom: computed_position.bottom
				};
			}

			group_temp_id_arr.push(group.temp_id);
		}

        this.setActiveComponentsAndGroups(temp_id_arr, group_temp_id_arr);
    },
    updateGroupPositionFromActiveGroup: function(active_group) {
        var group = this.getGroupByTempId(active_group.temp_id);
        group.real_position = {
			top: active_group.real_position.top,
			left: active_group.real_position.left,
			right: active_group.real_position.right,
			bottom: active_group.real_position.bottom
		};

		group.computed_position = {
			top: active_group.computed_position.top,
			left: active_group.computed_position.left,
			right: active_group.computed_position.right,
			bottom: active_group.computed_position.bottom
        };
        
        var iLength = group.components.length;
        for (var i = 0; i < iLength; i++) {
            group.components[i].real_position = {
                top: active_group.components[i].real_position.top,
                left: active_group.components[i].real_position.left,
                right: active_group.components[i].real_position.right,
                bottom: active_group.components[i].real_position.bottom
            };
    
            group.components[i].computed_position = {
                top: active_group.components[i].computed_position.top,
                left: active_group.components[i].computed_position.left,
                right: active_group.components[i].computed_position.right,
                bottom: active_group.components[i].computed_position.bottom
            };
        }
    },
    resizeComponentFromHistoryUndo: function(currentState) {
        this.removeAllActiveComponents();
        var iLength = currentState.components.length;
        var temp_id_arr = [];
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(currentState.components[i].temp_id);

			component.real_position = clone(currentState.components[i].old_real_position);
            component.computed_position = clone(currentState.components[i].old_computed_position);
            component.real_size = clone(currentState.components[i].old_real_size);
            component.computed_size = clone(currentState.components[i].old_computed_size);

            temp_id_arr.push(component.temp_id);
        }
		
		iLength = currentState.groups.length;
		var group_temp_id_arr = [];
		for (var i = 0; i < iLength; i++) {
            var group = this.getGroupByTempId(currentState.groups[i].temp_id);
            
			group.real_position = clone(currentState.groups[i].old_real_position);
            group.computed_position = clone(currentState.groups[i].old_computed_position);
            group.real_size = clone(currentState.groups[i].old_real_size);
            group.computed_size = clone(currentState.groups[i].old_computed_size);

			group_temp_id_arr.push(group.temp_id);
			
			var jLength = currentState.groups[i].components.length;
			for (var j = 0; j < jLength; j++) {
				var component = this.getComponentByTempId(currentState.groups[i].components[j].temp_id);

				component.real_position = clone(currentState.groups[i].components[j].old_real_position);
				component.computed_position = clone(currentState.groups[i].components[j].old_computed_position);
				component.real_size = clone(currentState.groups[i].components[j].old_real_size);
				component.computed_size = clone(currentState.groups[i].components[j].old_computed_size);
			}
		}
		
		this.setActiveComponentsAndGroups(temp_id_arr, group_temp_id_arr);
    },
    resizeComponentFromHistoryRedo: function(currentState) {
        this.removeAllActiveComponents();
        var iLength = currentState.components.length;
        var temp_id_arr = [];
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(currentState.components[i].temp_id);

            component.real_position = clone(currentState.components[i].real_position);
            component.computed_position = clone(currentState.components[i].computed_position);
            component.real_size = clone(currentState.components[i].real_size);
            component.computed_size = clone(currentState.components[i].computed_size);

            temp_id_arr.push(component.temp_id);
		}
		
		iLength = currentState.groups.length;
		var group_temp_id_arr = [];
		for (var i = 0; i < iLength; i++) {
            var group = this.getGroupByTempId(currentState.groups[i].temp_id);
            
			group.real_position = clone(currentState.groups[i].real_position);
            group.computed_position = clone(currentState.groups[i].computed_position);
            group.real_size = clone(currentState.groups[i].real_size);
            group.computed_size = clone(currentState.groups[i].computed_size);

			group_temp_id_arr.push(group.temp_id);
			
			var jLength = currentState.groups[i].components.length;
			for (var j = 0; j < jLength; j++) {
				var component = this.getComponentByTempId(currentState.groups[i].components[j].temp_id);

				component.real_position = clone(currentState.groups[i].components[j].real_position);
				component.computed_position = clone(currentState.groups[i].components[j].computed_position);
				component.real_size = clone(currentState.groups[i].components[j].real_size);
				component.computed_size = clone(currentState.groups[i].components[j].computed_size);
			}
		}
		
		this.setActiveComponentsAndGroups(temp_id_arr, group_temp_id_arr);
    },
	updateComponentSizeFromActiveComponent: function() {
        var components_arr = [];
        var iLength = this.active_components.length;
        for (var i = 0; i < iLength; i++) {
            var active_component = this.active_components[i];
            var component = this.getComponentByTempId(active_component.temp_id);

			var old_real_position = clone(component.real_position);
            var old_computed_position = clone(component.computed_position);
			var real_position = clone(active_component.real_position);
			var computed_position = clone(active_component.computed_position);

			var old_real_size = clone(component.real_size);
            var old_computed_size = clone(component.computed_size);
			var real_size = clone(active_component.real_size);
			var computed_size = clone(active_component.computed_size);
			
			component.real_position = clone(active_component.real_position);
            component.computed_position = clone(active_component.computed_position);
            component.real_size = clone(active_component.real_size);
            component.computed_size = clone(active_component.computed_size);

            components_arr.push({
                id: component.id,
                name: component.name,
                temp_id: component.temp_id,
                old_real_position: old_real_position,
                old_computed_position: old_computed_position,
                real_position: real_position,
                computed_position: computed_position,
                old_real_size: old_real_size,
                old_computed_size: old_computed_size,
                real_size: real_size,
                computed_size: computed_size
            });
		}
		
		var groups_arr = [];
		iLength = this.active_groups.length;
		for (var i = 0; i < iLength; i++) {
			var active_group = this.active_groups[i];
			var group = this.getGroupByTempId(active_group.temp_id);
			
			var group_components_arr = [];
			var jLength = active_group.components.length;
			for (var j = 0; j < jLength; j++) {
				var active_component = active_group.components[j];
				var component = this.getComponentByTempId(active_component.temp_id);

				var old_real_position = clone(component.real_position);
				var old_computed_position = clone(component.computed_position);
				var real_position = clone(active_component.real_position);
				var computed_position = clone(active_component.computed_position);

				var old_real_size = clone(component.real_size);
				var old_computed_size = clone(component.computed_size);
				var real_size = clone(active_component.real_size);
				var computed_size = clone(active_component.computed_size);
				
				component.real_position = clone(active_component.real_position);
				component.computed_position = clone(active_component.computed_position);
				component.real_size = clone(active_component.real_size);
				component.computed_size = clone(active_component.computed_size);

				group_components_arr.push({
					temp_id: component.temp_id,
					old_real_position: old_real_position,
					old_computed_position: old_computed_position,
					real_position: real_position,
					computed_position: computed_position,
					old_real_size: old_real_size,
					old_computed_size: old_computed_size,
					real_size: real_size,
					computed_size: computed_size
				});
			}

			var old_real_position = clone(group.real_position);
            var old_computed_position = clone(group.computed_position);
			var real_position = clone(active_group.real_position);
			var computed_position = clone(active_group.computed_position);

			var old_real_size = clone(group.real_size);
            var old_computed_size = clone(group.computed_size);
			var real_size = clone(active_group.real_size);
			var computed_size = clone(active_group.computed_size);
			
			group.real_position = clone(active_group.real_position);
            group.computed_position = clone(active_group.computed_position);
            group.real_size = clone(active_group.real_size);
			group.computed_size = clone(active_group.computed_size);

            groups_arr.push({
                name: group.name,
				temp_id: group.temp_id,
				components: group_components_arr,
                old_real_position: old_real_position,
                old_computed_position: old_computed_position,
                real_position: real_position,
                computed_position: computed_position,
                old_real_size: old_real_size,
                old_computed_size: old_computed_size,
                real_size: real_size,
                computed_size: computed_size
			});
		}

        History.addToStack({
            type: "resize_component_or_group",
			components: components_arr,
			groups: groups_arr
        });
	},
	updateActiveComponentsSize: function(tempComponents, tempGroups) {
		var iLength = this.active_components.length;
		for (var i = 0; i < iLength; i++) {
			this.active_components[i].real_size = clone(tempComponents[i].real_size);
			this.active_components[i].computed_size = clone(tempComponents[i].computed_size);
			this.active_components[i].real_position = clone(tempComponents[i].real_position);
			this.active_components[i].computed_position = clone(tempComponents[i].computed_position);
        }
		
		iLength = this.active_groups.length;
		for (var i = 0; i < iLength; i++) {
			this.active_groups[i].real_size = clone(tempGroups[i].real_size);
			this.active_groups[i].computed_size = clone(tempGroups[i].computed_size);
			this.active_groups[i].real_position = clone(tempGroups[i].real_position);
			this.active_groups[i].computed_position = clone(tempGroups[i].computed_position);

			var jLength = this.active_groups[i].components.length;
			for (var j = 0; j < jLength; j++) {
				this.active_groups[i].components[j].real_size = clone(tempGroups[i].components[j].real_size);
				this.active_groups[i].components[j].computed_size = clone(tempGroups[i].components[j].computed_size);
				this.active_groups[i].components[j].real_position = clone(tempGroups[i].components[j].real_position);
				this.active_groups[i].components[j].computed_position = clone(tempGroups[i].components[j].computed_position);
			}
		}

		this.updateComponentSizeFromActiveComponent();
	},
	deleteComponentsFromActiveComponents: function() {
        var iLength = this.active_components.length;
        var components_arr = [];
		for (var i = 0; i < iLength; i++) {
			var temp_id = this.active_components[i].temp_id;
			var jLength = this.components.length;
			for (var j = 0; j < jLength; j++) {
				if (this.components[j].temp_id == temp_id) {
                    components_arr.push({
                        componentIndex: j,
                        component: this.components[j]
                    });
					this.components.splice(j, 1);
					break;
				}
			}
		}
		
		iLength = this.active_groups.length;
		var groups_arr = [];
		for (var i = 0; i < iLength; i++) {
			var temp_id = this.active_groups[i].temp_id;
			var jLength = this.groups.length;
			for (var j = 0; j < jLength; j++) {
				if (this.groups[j].temp_id == temp_id) {
					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						var component_temp_id = this.groups[j].components[k].temp_id;
						var lLength = this.components.length;
						for (var l = 0; l < lLength; l++) {
							if (this.components[l].temp_id == component_temp_id) {
								this.components.splice(l, 1);
								break;
							}
						}
					}

					groups_arr.push({
						groupIndex: j,
						group: this.groups[j]
					});
					this.groups.splice(j, 1);
					break;
				}
			}
		}

		this.removeAllActiveComponents();

        History.addToStack({
            type: "delete_component_or_group",
			components: components_arr,
			groups: groups_arr
        });
    },
    deleteComponentsFromHistory: function(currentState) {
        var components = currentState.components;
        var iLength = components.length;
		for (var i = 0; i < iLength; i++) {
            var temp_id = components[i].component.temp_id;
            var jLength = this.components.length;
            for (var j = 0; j < jLength; j++) {
                if (this.components[j].temp_id == temp_id) {
                    this.components.splice(j, 1);
                    break;
                }
            }
        }
        this.removeAllActiveComponents();
	},
	deleteComponentsAndGroupsFromHistory: function(currentState) {
        var components = currentState.components;
        var iLength = components.length;
		for (var i = 0; i < iLength; i++) {
            var temp_id = components[i].component.temp_id;
            var jLength = this.components.length;
            for (var j = 0; j < jLength; j++) {
                if (this.components[j].temp_id == temp_id) {
                    this.components.splice(j, 1);
                    break;
                }
            }
        }
		
		iLength = this.active_groups.length;
		for (var i = 0; i < iLength; i++) {
			var temp_id = this.active_groups[i].temp_id;
			var jLength = this.groups.length;
			for (var j = 0; j < jLength; j++) {
				if (this.groups[j].temp_id == temp_id) {
					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						var component_temp_id = this.groups[j].components[k].temp_id;
						var lLength = this.components.length;
						for (var l = 0; l < lLength; l++) {
							if (this.components[l].temp_id == component_temp_id) {
								this.components.splice(l, 1);
								break;
							}
						}
					}

					this.groups.splice(j, 1);
					break;
				}
			}
		}

		this.removeAllActiveComponents();
    },
    groups: [],
    active_groups: [],
    createGroupFromActiveComponents: function() {
        var temp_computed_position = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };

        var temp_real_position = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        var temp_computed_size = {
            width: 0,
            height: 0
        };

        var temp_real_size = {
            width: 0,
            height: 0
        };

        var groupComponents = [];

        var old_components_arr = [];
        var new_group_components = [];
        var iLength = this.active_components.length;
        for (var i = 0; i < iLength; i++) {
            var temp_id = this.active_components[i].temp_id;
            old_components_arr.push(temp_id);
            new_group_components.push(temp_id);
            var component = this.getComponentByTempId(temp_id);
            if (i == 0) {
                temp_computed_position.left = component.computed_position.left;
                temp_computed_position.right = component.computed_position.right;
                temp_computed_position.top = component.computed_position.top;
                temp_computed_position.bottom = component.computed_position.bottom;

                temp_real_position.left = component.real_position.left;
                temp_real_position.right = component.real_position.right;
                temp_real_position.top = component.real_position.top;
                temp_real_position.bottom = component.real_position.bottom;
            }

            if (component.computed_position.left < temp_computed_position.left) {
                temp_computed_position.left = component.computed_position.left;
                temp_real_position.left = component.real_position.left;
            }
            if (component.computed_position.top < temp_computed_position.top) {
                temp_computed_position.top = component.computed_position.top;
                temp_real_position.top = component.real_position.top;
            }
            if (component.computed_position.right > temp_computed_position.right) {
                temp_computed_position.right = component.computed_position.right;
                temp_real_position.right = component.real_position.right;
            }
            if (component.computed_position.bottom > temp_computed_position.bottom) {
                temp_computed_position.bottom = component.computed_position.bottom;
                temp_real_position.bottom = component.real_position.bottom;
            }

            groupComponents.push(component);
        }

        if (this.active_components.length == 0) {
            temp_computed_position.left = this.active_groups[0].computed_position.left;
            temp_computed_position.right = this.active_groups[0].computed_position.right;
            temp_computed_position.top = this.active_groups[0].computed_position.top;
            temp_computed_position.bottom = this.active_groups[0].computed_position.bottom;

            temp_real_position.left = this.active_groups[0].real_position.left;
            temp_real_position.right = this.active_groups[0].real_position.right;
            temp_real_position.top = this.active_groups[0].real_position.top;
            temp_real_position.bottom = this.active_groups[0].real_position.bottom;
        }

        var old_groups_arr = [];
        
        iLength = this.active_groups.length;
        for (var i = 0; i < iLength; i++) {
            var currentGroup = this.active_groups[i];
            var old_group = {
                temp_id: currentGroup.temp_id,
                real_position: null,
                computed_position: null,
                real_size: null,
                computed_size: null,
                components: []
            };
            old_group.real_position = {
                top: currentGroup.real_position.top,
                left: currentGroup.real_position.left,
                right: currentGroup.real_position.right,
                bottom: currentGroup.real_position.bottom
            };
            old_group.computed_position = {
                top: currentGroup.computed_position.top,
                left: currentGroup.computed_position.left,
                right: currentGroup.computed_position.right,
                bottom: currentGroup.computed_position.bottom
            };
            old_group.real_size = {
                width: currentGroup.real_size.width,
                height: currentGroup.real_size.height
            };
            old_group.computed_size = {
                width: currentGroup.computed_size.width,
                height: currentGroup.computed_size.height
            };

            var jLength = currentGroup.components.length;
            for (var j = 0; j < jLength; j++) {
                var temp_id = currentGroup.components[j].temp_id;
                var component = this.getComponentByTempId(temp_id);
                groupComponents.push(component);
                old_group.components.push(temp_id);
                new_group_components.push(temp_id);
            }

            if (currentGroup.computed_position.left < temp_computed_position.left) {
                temp_computed_position.left = currentGroup.computed_position.left;
                temp_real_position.left = currentGroup.real_position.left;
            }
            if (currentGroup.computed_position.top < temp_computed_position.top) {
                temp_computed_position.top = currentGroup.computed_position.top;
                temp_real_position.top = currentGroup.real_position.top;
            }
            if (currentGroup.computed_position.right > temp_computed_position.right) {
                temp_computed_position.right = currentGroup.computed_position.right;
                temp_real_position.right = currentGroup.real_position.right;
            }
            if (currentGroup.computed_position.bottom > temp_computed_position.bottom) {
                temp_computed_position.bottom = currentGroup.computed_position.bottom;
                temp_real_position.bottom = currentGroup.real_position.bottom;
            }

            this.ungroup(currentGroup.temp_id);
            old_groups_arr.push(old_group);
        }

        temp_computed_size.width = temp_computed_position.right - temp_computed_position.left;
        temp_computed_size.height = temp_computed_position.bottom - temp_computed_position.top;
        temp_real_size.width = temp_real_position.right - temp_real_position.left;
        temp_real_size.height = temp_real_position.bottom - temp_real_position.top;
        
        var group = {
            temp_id: this.group_temp_id,
            components: groupComponents,
            name: "Group " + this.group_temp_id,
            computed_position: temp_computed_position,
            real_position: temp_real_position,
            computed_size: temp_computed_size,
            real_size: temp_real_size
		};
        
        this.groups.push(group);
        this.group_temp_id++;

        this.removeAllActiveComponents();
        this.setActiveGroup(group);

        var stackItem = {
            type: "create_group",
            old_groups: old_groups_arr,
            old_components: old_components_arr,
            new_group: {
                name: group.name,
                temp_id: group.temp_id,
                components: new_group_components,
                real_position: clone(group.real_position),
                computed_position: clone(group.computed_position),
                real_size: clone(group.real_size),
                computed_size: clone(group.computed_size)
            }
		};

        History.addToStack(stackItem);
    },
    createGroupFromUngroup: function(currentState) {
        this.groups.push(currentState.old_group);
        this.removeAllActiveComponents();
        this.setActiveGroup(currentState.old_group);
    },
    createGroupFromHistoryRedo: function(currentState) {
        var group_components = [];
        var iLength = currentState.old_components.length;
        for (var i = 0; i < iLength; i++) {
            var component = this.getComponentByTempId(currentState.old_components[i]);
            group_components.push(component);
        }

        iLength = currentState.old_groups.length;
        for (var i = 0; i < iLength; i++) {
            var group = currentState.old_groups[i];
            var jLength = group.components.length;
            for (var j = 0; j < jLength; j++) {
                var component = this.getComponentByTempId(group.components[j]);
                group_components.push(component);
            }
            this.ungroup(group.temp_id);
        }

        var new_group = {
            temp_id: currentState.new_group.temp_id,
            components: group_components,
            real_position: null,
            computed_position: null,
            real_size: null,
            computed_size: null
		};
		new_group.real_position = clone(currentState.new_group.real_position);
        new_group.computed_position = clone(currentState.new_group.computed_position);
        new_group.real_size = clone(currentState.new_group.real_size);
        new_group.computed_size = clone(currentState.new_group.computed_size);
        
        this.groups.push(new_group);
        this.removeAllActiveComponents();
        this.setActiveGroup(new_group);
    },
    getGroupByTempId: function(temp_id) {
        var iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            if (this.groups[i].temp_id == temp_id) {
                return this.groups[i];
            }
        }
        return null;
    },
    ungroup: function(temp_id) {
        var iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            if (this.groups[i].temp_id == temp_id) {
                this.groups.splice(i, 1);
                break;
            }
        }
    },
    ungroupFromHistoryRedo: function(currentState) {
        var temp_id = currentState.old_group.temp_id;
        var iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            if (this.groups[i].temp_id == temp_id) {
                this.groups.splice(i, 1);
                break;
            }
        }

        var temp_id_arr = [];
        iLength = currentState.components.length;
        for (var i = 0; i < iLength; i++) {
            temp_id_arr.push(currentState.components[i].temp_id);
        }

        this.removeAllActiveComponents();
        this.setActiveComponents(temp_id_arr);
    },
	deleteGroup: function() {

	},
    ungroupFromHistoryUndo: function(currentState) {
        var group_temp_id = currentState.new_group.temp_id;
        var iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            if (this.groups[i].temp_id == group_temp_id) {
                this.groups.splice(i, 1);
                break;
            }
        }

        var group_temp_id_arr = [];
        var iLength = currentState.old_groups.length;
        for (var i = 0; i < iLength; i++) {
            var old_group = clone(currentState.old_groups[i]);
            group_temp_id_arr.push(old_group.temp_id);
            var group = {
                temp_id: old_group.temp_id,
                real_size: null,
                computed_size: null,
                real_position: null,
                computed_position: null,
                components: []
            };
            group.real_position = {
                top: old_group.real_position.top,
                left: old_group.real_position.left,
                right: old_group.real_position.right,
                bottom: old_group.real_position.bottom
            };
            group.computed_position = {
                top: old_group.computed_position.top,
                left: old_group.computed_position.left,
                right: old_group.computed_position.right,
                bottom: old_group.computed_position.bottom
            };
            group.real_size = {
                width: old_group.real_size.width,
                height: old_group.real_size.height
            };
            group.computed_size = {
                width: old_group.computed_size.width,
                height: old_group.computed_size.height
            };

            var group_components = [];
            var jLength = old_group.components.length;
            for (var j = 0; j < jLength; j++) {
                var component = this.getComponentByTempId(old_group.components[j]);
                group_components.push(component);
            }
            group.components = group_components;

            this.groups.push(group);
        }

        this.removeAllActiveComponents();
        this.setActiveComponentsAndGroups(currentState.old_components, group_temp_id_arr);
    },
    ungroupActiveGroup: function() {
        var iLength = this.active_groups.length;
        var components = [];
        var group = null;
        for (var i = 0; i < iLength; i++) {
            var temp_id = this.active_groups[i].temp_id;
            var jLength = this.groups.length;
            for (var j = 0; j < jLength; j++) {
                if (this.groups[j].temp_id == temp_id) {
                    group = clone(this.groups[j]);
                    components = this.groups[j].components;
                    this.groups.splice(j, 1);
                    break;
                }
            }
        }
        this.active_groups = [];

        iLength = components.length;
        for (var i = 0; i < iLength; i++) {
            this.setActiveComponent(components[i].temp_id);
        }

        History.addToStack({
            type: "ungroup",
            old_group: clone(group),
            components: clone(group.components)
        });
    },
    setActiveGroup: function(group) {
        group = clone(group);
		this.active_groups.push(group);
		this.activeComponentChanged();
    },
    isInGroup: function(temp_id) {
        var iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            var group = this.groups[i];
            var jLength = group.components.length;
            for (var j = 0; j < jLength; j++) {
                if (group.components[j].temp_id == temp_id) {
                    return true;
                }
            }
        }

        return false;
    },
    isInActiveGroup: function(temp_id) {
        var iLength = this.active_groups.length;
        for (var i = 0; i < iLength; i++) {
            var group = this.active_groups[i];
            var jLength = group.components.length;
            for (var j = 0; j < jLength; j++) {
                if (group.components[j].temp_id == temp_id) {
                    return true;
                }
            }
        }

        return false;
    },
    clipboard: null,
    copy: function(itemType, item) {
        this.clipboard = {
            type: itemType,
            item: item
        };
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
			this.drawSelection(top, left, bottom, right, width, height, centerX, centerY, context);
        }
        
        iLength = this.active_groups.length;
        for (var i = 0; i < iLength; i++) {
            var top = this.active_groups[i].computed_position.top;
			var left = this.active_groups[i].computed_position.left;
			var bottom = this.active_groups[i].computed_position.bottom;
			var right = this.active_groups[i].computed_position.right;
			var width = this.active_groups[i].computed_size.width;
            var height = this.active_groups[i].computed_size.height;
            
            var centerX = left + width / 2;
			var centerY = top + height / 2;
			this.drawSelection(top, left, bottom, right, width, height, centerX, centerY, context);
        }
	},
	drawWithoutActiveComponent: function(context) {
        var componentExceptions = [];
        var iLength = this.active_components.length;
        for (var i = 0; i < iLength; i++) {
            componentExceptions.push(this.active_components[i].temp_id);
        }

        iLength = this.active_groups.length;
        for (var i = 0; i < iLength; i++) {
            var jLength = this.active_groups[i].components.length;
            for (var j = 0; j < jLength; j++) {
                componentExceptions.push(this.active_groups[i].components[j].temp_id);
            }
        }

		context.strokeStyle = "#000000";
		context.lineWidth = 1;
		context.clearRect(0, 0, this.width, this.height);

		var iLength = this.components.length;
		for (var i = 0; i < iLength; i++) {
			if (componentExceptions.indexOf(this.components[i].temp_id) == -1) {
				this.components[i].draw(context);
			}
        }
    },
    drawSelection: function(top, left, bottom, right, width, height, centerX, centerY, context) {
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
        
        iLength = this.groups.length;
        for (var i = 0; i < iLength; i++) {
            this.groups[i].real_position.top += selisihY;
			this.groups[i].real_position.left += selisihX;
			this.groups[i].real_position.right += selisihX;
			this.groups[i].real_position.bottom += selisihY;

			this.groups[i].computed_position.top += selisihY;
			this.groups[i].computed_position.left += selisihX;
			this.groups[i].computed_position.right += selisihX;
            this.groups[i].computed_position.bottom += selisihY;
            
            var jLength = this.groups[i].components.length;
            for (var j = 0; j < jLength; j++) {
                this.groups[i].components[j].real_position.top += selisihY;
                this.groups[i].components[j].real_position.left += selisihX;
                this.groups[i].components[j].real_position.right += selisihX;
                this.groups[i].components[j].real_position.bottom += selisihY;

                this.groups[i].components[j].computed_position.top += selisihY;
                this.groups[i].components[j].computed_position.left += selisihX;
                this.groups[i].components[j].computed_position.right += selisihX;
                this.groups[i].components[j].computed_position.bottom += selisihY;
            }
        }
	},
	updateComponentsSize: function(currentMousePosition, shiftPressed) {
		var selisihX = currentMousePosition.x - this.mousePosition.x;
		var selisihY = currentMousePosition.y - this.mousePosition.y;
		this.mousePosition = currentMousePosition;

		var iLength = this.components.length;
		var jLength = this.groups.length;
		switch (this.dotsHit) {
			case "top-left":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_topLeft(this.components[i], selisihX, selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_topLeft(this.groups[j], selisihX, selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_topLeft(this.groups[j].components[k], selisihX, selisihY);
					}
				}
				break;
			case "top-center":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_topCenter(this.components[i], selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_topCenter(this.groups[j], selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_topCenter(this.groups[j].components[k], selisihY);
					}
				}
				break;
			case "top-right":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_topRight(this.components[i], selisihX, selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_topRight(this.groups[j], selisihX, selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_topRight(this.groups[j].components[k], selisihX, selisihY);
					}
				}
				break;
			case "middle-left":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_middleLeft(this.components[i], selisihX);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_middleLeft(this.groups[j], selisihX);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_middleLeft(this.groups[j].components[k], selisihX);
					}
				}
				break;
			case "middle-right":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_middleRight(this.components[i], selisihX);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_middleRight(this.groups[j], selisihX);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_middleRight(this.groups[j].components[k], selisihX);
					}
				}
				break;
			case "bottom-left":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_bottomLeft(this.components[i], selisihX, selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_bottomLeft(this.groups[j], selisihX, selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_bottomLeft(this.groups[j].components[k], selisihX, selisihY);
					}
				}
				break;
			case "bottom-center":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_bottomCenter(this.components[i], selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_bottomCenter(this.groups[j], selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_bottomCenter(this.groups[j].components[k], selisihY);
					}
				}
				break;
			case "bottom-right":
				for (var i = 0; i < iLength; i++) {
					this.updateObjectSize_bottomRight(this.components[i], selisihX, selisihY);
				}

				for (var j = 0; j < jLength; j++) {
					this.updateObjectSize_bottomRight(this.groups[j], selisihX, selisihY);

					var kLength = this.groups[j].components.length;
					for (var k = 0; k < kLength; k++) {
						this.updateObjectSize_bottomRight(this.groups[j].components[k], selisihX, selisihY);
					}
				}
				break;
		}
	},
	updateObjectSize_topLeft: function(obj, selisihX, selisihY) {
		obj.real_size.height -= selisihY;
		obj.computed_size.height -= selisihY;
		obj.real_position.top += selisihY;
		obj.computed_position.top += selisihY;

		obj.real_size.width -= selisihX;
		obj.computed_size.width -= selisihX;
		obj.real_position.left += selisihX;
		obj.computed_position.left += selisihX;
	},
	updateObjectSize_topCenter: function(obj, selisihY) {
		obj.real_size.height -= selisihY;
		obj.computed_size.height -= selisihY;
		obj.real_position.top += selisihY;
		obj.computed_position.top += selisihY;
	},
	updateObjectSize_topRight: function(obj, selisihX, selisihY) {
		obj.real_size.height -= selisihY;
		obj.computed_size.height -= selisihY;
		obj.real_position.top += selisihY;
		obj.computed_position.top += selisihY;

		obj.real_size.width += selisihX;
		obj.computed_size.width += selisihX;
		obj.real_position.right += selisihX;
		obj.computed_position.right += selisihX;
	},
	updateObjectSize_middleLeft: function(obj, selisihX) {
		obj.real_size.width -= selisihX;
		obj.computed_size.width -= selisihX;
		obj.real_position.left += selisihX;
		obj.computed_position.left += selisihX;
	},
	updateObjectSize_middleRight: function(obj, selisihX) {
		obj.real_size.width += selisihX;
		obj.computed_size.width += selisihX;
		obj.real_position.right += selisihX;
		obj.computed_position.right += selisihX;
	},
	updateObjectSize_bottomLeft: function(obj, selisihX, selisihY) {
		obj.real_size.height += selisihY;
		obj.computed_size.height += selisihY;
		obj.real_position.bottom += selisihY;
		obj.computed_position.bottom += selisihY;

		obj.real_size.width -= selisihX;
		obj.computed_size.width -= selisihX;
		obj.real_position.left += selisihX;
		obj.computed_position.left += selisihX;
	},
	updateObjectSize_bottomCenter: function(obj, selisihY) {
		obj.real_size.height += selisihY;
		obj.computed_size.height += selisihY;
		obj.real_position.bottom += selisihY;
		obj.computed_position.bottom += selisihY;
	},
	updateObjectSize_bottomRight: function(obj, selisihX, selisihY) {
		obj.real_size.height += selisihY;
		obj.computed_size.height += selisihY;
		obj.real_position.bottom += selisihY;
		obj.computed_position.bottom += selisihY;

		obj.real_size.width += selisihX;
		obj.computed_size.width += selisihX;
		obj.real_position.right += selisihX;
		obj.computed_position.right += selisihX;
	},
	removeAllComponents: function() {
        this.components = [];
        this.groups = [];
		this.dotsHit = "";
		this.mousePosition = {
			x: 0,
			y: 0
		};
    },
    groups: [],
    addGroup: function(group) {
        group = clone(group);
		this.groups.push(group);
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
        
        iLength = this.groups.length;
		for (var i = 0; i < iLength; i++) {
            var jLength = this.groups[i].components.length;
            for (var j = 0; j < jLength; j++) {
                this.groups[i].components[j].draw(context);
            }

            context.strokeStyle = "#0D47A1";
			context.lineWidth = 1;
			context.fillStyle = "#FFFFFF";

			var top = this.groups[i].computed_position.top;
			var left = this.groups[i].computed_position.left;
			var bottom = this.groups[i].computed_position.bottom;
			var right = this.groups[i].computed_position.right;
			var width = this.groups[i].computed_size.width;
			var height = this.groups[i].computed_size.height;

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

var History = {
    pointer: -1,
    stack: [],
    saveStack: [],
    addToStack: function(data) {
        if (this.pointer + 1 < this.stack.length) {
			this.stack.splice(this.pointer + 1, this.stack.length - this.pointer + 1);
        }
        this.stack.push(data);
        this.saveStack.push(data);
        this.pointer++;
        this.stackValueChanged();
    },
    onStackValueChanged: null,
    stackValueChanged: function() {
        if (this.onStackValueChanged != null) {
            this.onStackValueChanged();
        }
    },
    do_undo: function(context) {
        if (this.pointer > -1) {
            var currentState = clone(this.stack[this.pointer]);
            switch (currentState.type) {
                case "add_component":
                    Sheet.deleteComponentsFromHistory(currentState);
                    break;
                case "move_component_or_group":
                    Sheet.moveComponentFromHistoryUndo(currentState);
                    break;
                case "resize_component_or_group":
                    Sheet.resizeComponentFromHistoryUndo(currentState);
                    break;
                case "delete_component_or_group":
                    Sheet.addComponentsAndGroupsFromHistory(currentState);
                    break;
                case "create_group":
                    Sheet.ungroupFromHistoryUndo(currentState);
                    break;
                case "ungroup":
                    Sheet.createGroupFromUngroup(currentState);
                    break;
			}

            this.pointer--;
            this.saveStack.pop();
            this.stackValueChanged();
            Sheet.draw(context);
        }
    },
    do_redo: function(context) {
        if (this.pointer + 1 < this.stack.length) {
            this.pointer++;
            var currentState = clone(this.stack[this.pointer]);
            switch (currentState.type) {
                case "add_component":
                    Sheet.addComponentsFromHistory(currentState);
                    break;
                case "move_component_or_group":
                    Sheet.moveComponentFromHistoryRedo(currentState);
                    break;
                case "resize_component_or_group":
                    Sheet.resizeComponentFromHistoryRedo(currentState);
                    break;
                case "delete_component_or_group":
                    Sheet.deleteComponentsAndGroupsFromHistory(currentState);
                    break;
                case "create_group":
                    Sheet.createGroupFromHistoryRedo(currentState);
                    break;
                case "ungroup":
                    Sheet.ungroupFromHistoryRedo(currentState);
                    break;
			}

            this.saveStack.push(currentState);
            this.stackValueChanged();
            Sheet.draw(context);
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