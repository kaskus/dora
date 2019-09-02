/**
 * SCEditor SVG Custom KASKUS plugin
 *
 * @author babono
 */
(function (document, sceditor) {
	'use strict';

	var dom = sceditor.dom;
	var selectedColor;
	var fontName;
	var fontSize;

	/* eslint max-len: off*/
	var icons = {
		'color': '<rect class="sce-color" width="20" height="20"/>'
		// 'color': '<text x="50%" y="8" text-anchor="middle" dy=".5ex" font-family="Dejavu Sans, Helvetica, Arial, sans-serif" font-size="13" font-weight="bold">A</text><path class="sce-color" d="M2 13h12v2H2z"/>'
	};

	function rgbToHex(r, g, b) {
	    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	sceditor.icons.custom = function () {
		var nodes = {};
		var colorPath;

		return {
			create: function (command) {
				if (command in icons) {
					nodes[command] = sceditor.dom.parseHTML(
						'<svg xmlns="http://www.w3.org/2000/svg" ' +
							'viewbox="0 0 16 16" unselectable="on">' +
								icons[command] +
						'</svg>'
					).firstChild;

					if (command === 'color') {
						colorPath = nodes[command].querySelector('.sce-color');
					}
				}

				return nodes[command];
			},
			update: function (isSourceMode, currentNode) {

				if (colorPath) {
					var color = 'inherit';

					if (!isSourceMode && currentNode) {
						color = currentNode.ownerDocument.queryCommandValue('forecolor');
						fontSize = currentNode.ownerDocument.queryCommandValue('fontsize');
						fontName = currentNode.ownerDocument.queryCommandValue('fontname');


						// Needed for IE
						if (parseInt(color) === color) {
							// eslint-disable-next-line
							color = ((color & 0x0000ff) << 16) | (color & 0x00ff00) | ((color & 0xff0000) >>> 16);
							color = '#' + ('000000' + color.toString(16)).slice(-6);
						}
						dom.css(colorPath, 'fill', color);
					}
					
					var colorRGB = color.replace(/[^\d,]/g, '').split(',');
					var colorHex = rgbToHex(parseInt(colorRGB[0]),parseInt(colorRGB[1]),parseInt(colorRGB[2]));
					var targetColorOption = ".sceditor-color-option[data-color='"+ colorHex +"']";
					$(targetColorOption).addClass('is-selected');

					var targetFontSizeOption = ".sceditor-fontsize-option[data-size='"+ fontSize +"']";
					$(targetFontSizeOption).addClass('is-selected');

					var targetFontNameOption = ".sceditor-font-option[data-font='"+ fontName +"']";
					$(targetFontNameOption).addClass('is-selected');
				}
			}
		};
	};

	sceditor.icons.custom.icons = icons;
})(document, sceditor);
