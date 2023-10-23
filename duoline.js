
    var colorPicker = new iro.ColorPicker(".ms-colorpicker", {
        width: 180,
        color: "rgb(252, 252, 252)",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var values = document.getElementById("values");
    var hexInput = document.getElementById("hexInput");
    var swatch = document.getElementById("colorSwatch");

    // https://iro.js.org/guide.html#color-picker-events
    colorPicker.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        values.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInput.value = color.hexString;
        swatch.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('#first-path');
          paths.forEach(element => {
            element.setAttribute('fill', selectedColor);
          });
          const pathss = svg.querySelectorAll('#second-path');
          pathss.forEach(element=> {
            element.setAttribute('fill', selectedColor);
            element.setAttribute('stroke', selectedColor);
          });
          const pathst = svg.querySelectorAll('#third-path');
          pathst.forEach(element => {
            element.setAttribute('stroke', selectedColor);
          });
        });
    });

    hexInput.addEventListener('change', function() {
        colorPicker.color.hexString = this.value;
        swatch.style.backgroundColor = this.value;
    });
    hexInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPicker.color.hexString = this.value;
            swatch.style.backgroundColor = this.value;
        }
      });

    var colorPickerSe = new iro.ColorPicker(".ms-colorpicker-se", {
        width: 180,
        color: "#fcfcfc",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });
    var valuesSe = document.getElementById("valuesSe");
    var hexInputSe = document.getElementById("hexInputSe");
    var swatchSe = document.getElementById("colorSwatchSe");


    colorPickerSe.on(["color:init", "color:change"], function(color) {
        valuesSe.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");
        hexInputSe.value = color.hexString;
        swatchSe.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;

        var secondaryPaths = document.querySelectorAll('#opacity-stroke');
        secondaryPaths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
        });
    });
    hexInputSe.addEventListener('change', function() {
        colorPickerSe.color.hexString = this.value;
        swatchSe.style.backgroundColor = this.value;
    });
    hexInputSe.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerSe.color.hexString = this.value;
            swatchSe.style.backgroundColor = this.value;
        }
      });

    //---------------- PATTERN ------------------------------------------

    var colorPickerPat = new iro.ColorPicker(".ms-colorpicker-pat", {
        width: 180,
        color: "#8f66ff",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesPat = document.getElementById("valuesPat");
    var hexInputPat = document.getElementById("hexInputPat");
    var swatchPat = document.getElementById("colorSwatchPat");

    // https://iro.js.org/guide.html#color-picker-events
    colorPickerPat.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        valuesPat.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputPat.value = color.hexString;
        swatchPat.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('#p1');
          paths.forEach(rect => {
            rect.setAttribute('fill', selectedColor);
          });
        });
    });

    hexInputPat.addEventListener('change', function() {
        colorPickerPat.color.hexString = this.value;
        swatchPat.style.backgroundColor = this.value;
    });
    hexInputPat.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerPat.color.hexString = this.value;
            swatchPat.style.backgroundColor = this.value;
        }
      });

    var colorPickerPatTwo = new iro.ColorPicker(".ms-colorpicker-pattwo", {
        width: 180,
        color: "#c8a1fd",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesPatTwo = document.getElementById("valuesPatTwo");
    var hexInputPatTwo = document.getElementById("hexInputPatTwo");
    var swatchPatTwo = document.getElementById("colorSwatchPatTwo");

    // https://iro.js.org/guide.html#color-picker-events
    colorPickerPatTwo.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        valuesPatTwo.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputPatTwo.value = color.hexString;
        swatchPatTwo.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('#p2');
          paths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
          });
          const pathsf = svg.querySelectorAll('#p2f');
          pathsf.forEach(path => {
            path.setAttribute('fill', selectedColor);
          });
        });
    });

    hexInputPatTwo.addEventListener('change', function() {
        colorPickerPatTwo.color.hexString = this.value;
        swatchPatTwo.style.backgroundColor = this.value;
    });
    hexInputPatTwo.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerPatTwo.color.hexString = this.value;
            swatchPatTwo.style.backgroundColor = this.value;
        }
      });


    var colorPickerPatThree = new iro.ColorPicker(".ms-colorpicker-patthree", {
        width: 180,
        color: "#6941c6",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesPatThree = document.getElementById("valuesPatThree");
    var hexInputPatThree = document.getElementById("hexInputPatThree");
    var swatchPatThree = document.getElementById("colorSwatchPatThree");

    // https://iro.js.org/guide.html#color-picker-events
    colorPickerPatThree.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        valuesPatThree.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputPatThree.value = color.hexString;
        swatchPatThree.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('#p3');
          paths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
          });
          const pathsf = svg.querySelectorAll('#p3f');
          pathsf.forEach(path => {
            path.setAttribute('fill', selectedColor);
          });
        });
    });

    hexInputPatThree.addEventListener('change', function() {
        colorPickerPatThree.color.hexString = this.value;
        swatchPatThree.style.backgroundColor = this.value;
    });
    hexInputPatThree.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerPatThree.color.hexString = this.value;
            swatchPatThree.style.backgroundColor = this.value;
        }
      });


    var colorPickerPatFour = new iro.ColorPicker(".ms-colorpicker-patfour", {
        width: 180,
        color: "#844fee",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesPatFour = document.getElementById("valuesPatFour");
    var hexInputPatFour = document.getElementById("hexInputPatFour");
    var swatchPatFour = document.getElementById("colorSwatchPatFour");

    // https://iro.js.org/guide.html#color-picker-events
    colorPickerPatFour.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        valuesPatFour.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputPatFour.value = color.hexString;
        swatchPatFour.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('#p4');
          paths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
          });
          const pathsf = svg.querySelectorAll('#p4f');
          pathsf.forEach(path => {
            path.setAttribute('fill', selectedColor);
          });
        });
    });

    hexInputPatFour.addEventListener('change', function() {
        colorPickerPatFour.color.hexString = this.value;
        swatchPatFour.style.backgroundColor = this.value;
    });
    hexInputPatFour.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerPatFour.color.hexString = this.value;
            swatchPatFour.style.backgroundColor = this.value;
        }
      });

    var colorPickerTest = new iro.ColorPicker(".ms-colorpicker-test", {
        width: 180,
        color: "rgb(0, 0, 0)",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesTest = document.getElementById("valuesTest");
    var hexInputTest = document.getElementById("hexInputTest");
    var swatchTest = document.getElementById("colorSwatchTest");

    colorPickerTest.on(["color:init", "color:change"], function(color) {
        valuesTest.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputTest.value = color.hexString;
        swatchTest.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;

       	const rectElements = document.querySelectorAll('#backgr');
        
        if (!document.getElementById('trans').checked) {
          function changeRectColor() {
            rectElements.forEach(rect => {
              rect.setAttribute('fill', selectedColor);
            });
          }
          changeRectColor();
        }
    });

    hexInputTest.addEventListener('change', function() {
        colorPickerTest.color.hexString = this.value;
        swatchTest.style.backgroundColor = this.value;
    });

    hexInputTest.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            colorPickerTest.color.hexString = this.value;
            swatchTest.style.backgroundColor = this.value;
        }
      });




function updateSelectors() {
const svgsc = document.querySelectorAll('#my-svg');
  svgsc.forEach(svg => {
    const paths = svg.querySelectorAll('#my-path');
    paths.forEach(path => {
      path.setAttribute('stroke', colorPicker.color.hexString);
    });
  });
    const paths1 = document.querySelectorAll('#p1');
    paths1.forEach(rect => {
    rect.setAttribute('fill', colorPickerPat.color.hexString);
    });
    const paths2 = document.querySelectorAll('#p2');
    paths2.forEach(path => {
    path.setAttribute('stroke', colorPickerPatTwo.color.hexString);
    });
    const paths2f = document.querySelectorAll('#p2f');
    paths2f.forEach(path => {
    path.setAttribute('fill', colorPickerPatTwo.color.hexString);
    });
    const paths3 = document.querySelectorAll('#p3');
    paths3.forEach(path => {
    path.setAttribute('stroke', colorPickerPatThree.color.hexString);
    });
    const paths3f = document.querySelectorAll('#p3f');
    paths3f.forEach(path => {
    path.setAttribute('fill', colorPickerPatThree.color.hexString);
    });
    const paths4 = document.querySelectorAll('#p4');
    paths4.forEach(path => {
    path.setAttribute('stroke', colorPickerPatFour.color.hexString);
    });
    const paths4f = document.querySelectorAll('#p4f');
    paths4f.forEach(path => {
    path.setAttribute('fill', colorPickerPatFour.color.hexString);
    });

    scalePath();
}

//Pattern

const sliderPattern = document.getElementById('pattern-size');

function changePattern() {
	const pathsp = document.querySelectorAll('pattern');
    var transformString = 'scale(' + sliderPattern.value + ')';
  pathsp.forEach(pattern => {
    pattern.setAttribute('patternTransform', transformString);
  });
}

changePattern();

sliderPattern.addEventListener('input', changePattern);

const path = document.querySelectorAll('#group');
const sliderSize = document.getElementById('slider-size');
function scalePath() {
const path = document.querySelectorAll('#group');
path.forEach(path => {
  const scale = sliderSize.value;
  const bbox = path.getBBox();
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  const tx = -centerX * (scale - 1);
  const ty = -centerY * (scale - 1);
  const transform = `translate(${tx},${ty}) scale(${scale})`;
  path.setAttribute('transform', transform);
  });
}
sliderSize.addEventListener('input', scalePath);
scalePath();

const sliderStroke = document.getElementById('slider-stroke');

function changeStroke() {
    const paths = document.querySelectorAll('#opacity-stroke, #third-path');
  paths.forEach(path => {
    path.setAttribute('stroke-width', sliderStroke.value);
  });
  paths.forEach(rect => {
    rect.setAttribute('stroke-width', sliderStroke.value);
  });
}

sliderStroke.addEventListener('input', changeStroke);

const sliderOpacity = document.getElementById('slider-opacity');

function changeOpacity() {
    const paths = document.querySelectorAll('#opacity-stroke');
  paths.forEach(path => {
    path.setAttribute('opacity', sliderOpacity.value);
  });
}

sliderOpacity.addEventListener('input', changeOpacity);


  const colorPicker1 = new iro.ColorPicker(".ms-colorpicker-second", {
    width: 180,
    color: "rgb(143, 102, 255)",
    borderWidth: 1,
    borderColor: "#1b1b1b",
  });

  const valuesSecond = document.getElementById("valuesSecond");
  const hexInputSecond = document.getElementById("hexInputSecond");
  const swatchSecond = document.getElementById("colorSwatchSecond");

  colorPicker1.on(["color:init", "color:change"], function(color) {

    valuesSecond.innerHTML = [
      "hex: " + color.hexString,
      "rgb: " + color.rgbString,
      "hsl: " + color.hslString,
    ].join("<br>");

    hexInputSecond.value = color.hexString;
    swatchSecond.style.backgroundColor = color.hexString;
  });

  hexInputSecond.addEventListener('change', function() {
    colorPicker1.color.hexString = this.value;
    swatchSecond.style.backgroundColor = this.value;
  });
  hexInputSecond.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        colorPicker1.color.hexString = this.value;
        swatchSecond.style.backgroundColor = this.value;
    }
  });
  
const colorPicker2 = new iro.ColorPicker(".ms-colorpicker-third", {
    width: 180,
    color: "rgb(61, 18, 255)",
    borderWidth: 1,
    borderColor: "#1b1b1b",
  });

  const valuesThird = document.getElementById("valuesThird");
  const hexInputThird = document.getElementById("hexInputThird");
  const swatchThird = document.getElementById("colorSwatchThird");

  colorPicker2.on(["color:init", "color:change"], function(color) {
    valuesThird.innerHTML = [
      "hex: " + color.hexString,
      "rgb: " + color.rgbString,
      "hsl: " + color.hslString,
    ].join("<br>");

    hexInputThird.value = color.hexString;
    swatchThird.style.backgroundColor = color.hexString;
  });

  hexInputThird.addEventListener('change', function() {
    colorPicker2.color.hexString = this.value;
    swatchThird.style.backgroundColor = this.value;
  });
  hexInputThird.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        colorPicker2.color.hexString = this.value;
        swatchThird.style.backgroundColor = this.value;
    }
  });

  function applyBackground() {
  const svgs = document.querySelectorAll('#my-svg');
  svgs.forEach(svg => {
      
    const colorStart = colorPicker1.color.hexString;
    const colorEnd = colorPicker2.color.hexString;
    
    const stop1 = svg.querySelectorAll('.stop1');
    stop1.forEach(stop => {
      stop.setAttribute('stop-color', colorStart);
    });
    
    const stop2 = svg.querySelectorAll('.stop2');
    stop2.forEach(stop => {
      stop.setAttribute('stop-color', colorEnd);
    });

	if (!document.getElementById('trans').checked) {
		if (!document.getElementById('checkbox').checked) {
      const rectss = svg.querySelectorAll('#backgr');
      rectss.forEach(rect => {
        rect.setAttribute('fill', 'url(#gradient1)');
      });
    } else {
      const rectss = svg.querySelectorAll('#backgr');
      rectss.forEach(rect => {
        rect.setAttribute('fill', colorPickerTest.color.hexString);
      });
    }
    }
    
    if (document.getElementById('checkbox').checked) {
        const paths = svg.querySelectorAll('#first-path');
        paths.forEach(element => {
          element.setAttribute('fill', 'url(#gradient1)');
        });
        const pathso = svg.querySelectorAll('#opacity-stroke');
        pathso.forEach(element => {
          element.setAttribute('stroke', 'url(#gradient1)');
        });
        const pathss = svg.querySelectorAll('#second-path');
        pathss.forEach(element=> {
          element.setAttribute('fill', 'url(#gradient1)');
          element.setAttribute('stroke', 'url(#gradient1)');
        });
        const pathst = svg.querySelectorAll('#third-path');
        pathst.forEach(element => {
          element.setAttribute('stroke', 'url(#gradient1)');
        });
    } else {
        const paths = svg.querySelectorAll('#first-path');
        paths.forEach(element => {
          element.setAttribute('fill', colorPicker.color.hexString);
        });
        const pathso = svg.querySelectorAll('#opacity-stroke');
        pathso.forEach(element => {
          element.setAttribute('stroke', colorPickerSe.color.hexString);
        });
        const pathss = svg.querySelectorAll('#second-path');
        pathss.forEach(element=> {
          element.setAttribute('fill', colorPicker.color.hexString);
          element.setAttribute('stroke', colorPicker.color.hexString);
        });
        const pathst = svg.querySelectorAll('#third-path');
        pathst.forEach(element => {
          element.setAttribute('stroke', colorPicker.color.hexString);
        });
    }
  });
}
  
	colorPicker1.on(['color:init', 'color:change'], applyBackground);

	colorPicker2.on(['color:init', 'color:change'], applyBackground);

  applyBackground();
  function makeTrans() {
    if (document.getElementById('trans').checked) {
      const rectElements = document.querySelectorAll('#backgr');
      rectElements.forEach(rect => {
        rect.setAttribute('fill', 'none');
      });
    }
  }
  const checkbox = document.getElementById('checkbox');
  const trans = document.getElementById('trans');
  checkbox.addEventListener('change', applyBackground);
  trans.addEventListener('change', makeTrans);
  trans.addEventListener('change', applyBackground);

  function patternBack() {
    const patternChecked = document.getElementById('patternbox').checked;
    const svgs = document.querySelectorAll('#my-svg');
  
    svgs.forEach(svg => {
      const patternElements = svg.querySelectorAll('pattern');
  
      if (patternElements.length > 0) {
        if (patternChecked) {
            const paths = svg.querySelectorAll('#first-path');
            paths.forEach(element => {
              element.setAttribute('fill', 'url(#a)');
            });
            const pathso = svg.querySelectorAll('#opacity-stroke');
            pathso.forEach(element => {
              element.setAttribute('stroke', 'url(#a)');
            });
            const pathss = svg.querySelectorAll('#second-path');
            pathss.forEach(element=> {
              element.setAttribute('fill', 'url(#a)');
              element.setAttribute('stroke', 'url(#a)');
            });
            const pathst = svg.querySelectorAll('#third-path');
            pathst.forEach(element => {
              element.setAttribute('stroke', 'url(#a)');
            });
            if (!document.getElementById('trans').checked) {
                const rectElements = svg.querySelectorAll('#backgr');
                rectElements.forEach(rect => {
                    rect.setAttribute('fill', colorPickerTest.color.hexString);
                });
            }
        } else {
            if (!document.getElementById('trans').checked) {
                const rectElements = svg.querySelectorAll('#backgr');
                rectElements.forEach(rect => {
                    rect.setAttribute('fill', 'url(#a)');
                });
            }
          const paths = svg.querySelectorAll('#first-path');
          paths.forEach(element => {
            element.setAttribute('fill', colorPicker.color.hexString);
          });
          const pathso = svg.querySelectorAll('#opacity-stroke');
          pathso.forEach(element => {
            element.setAttribute('stroke', colorPickerSe.color.hexString);
          });
          const pathss = svg.querySelectorAll('#second-path');
          pathss.forEach(element=> {
            element.setAttribute('fill', colorPicker.color.hexString);
            element.setAttribute('stroke', colorPicker.color.hexString);
          });
          const pathst = svg.querySelectorAll('#third-path');
          pathst.forEach(element => {
            element.setAttribute('stroke', colorPicker.color.hexString);
          });
        }
      }
    });
  }
  
  const checkboxPattern = document.getElementById('patternbox');
  checkboxPattern.addEventListener('change', patternBack);
  
