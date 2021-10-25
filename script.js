var Jimp = require('jimp');

var pixelArray = [];
var finalPixelArray = []
var pixel;
var asciiArray = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", "o", "a", "h", "k", "b", "d", "p", "q", "w", "m", "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", "/", "|", "(", ")", "1", "{", "}", "[", "]", "?", "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", ";", ":", ',', '"', "^", "`", "'", ".", " "]

var inverse = false
 
Jimp.read('/Users/adamzhai/downloads/Wofffinal.png', (err, image) => {
  if (err) throw err;
  image
   for (var y = 0; y < image.bitmap.height; y++) {
       pixelArray.push([])
       for (var x = 0; x < image.bitmap.width; x++) {
           pixel = Jimp.intToRGBA(image.getPixelColor(x, y))
           pixelArray[y].push([pixel.r, pixel.g, pixel.b])
       }
   }

   for (var i = 0; i < pixelArray.length; i++) {
       finalPixelArray.push([])
    for (var j = 0; j < pixelArray[i].length; j++) {
        if (inverse == true) {
        for (var n = 0; n < 3; n++) {
        finalPixelArray[i].push(Math.abs((pixelArray[i][j][0] * 0.2126 + pixelArray[i][j][1] * 0.7152 + pixelArray[i][j][2] * 0.0722) - 255))
        }
    } else {
        for (var n = 0; n < 3; n++) {
            finalPixelArray[i].push(pixelArray[i][j][0] * 0.2126 + pixelArray[i][j][1] * 0.7152 + pixelArray[i][j][2] * 0.0722)
            } 
    }
    }
   }

   for (var k = 0; k < finalPixelArray.length; k++) { 
    for (var l = 0; l < finalPixelArray[k].length; l++) { 
        finalPixelArray[k][l] = asciiArray[Math.round(finalPixelArray[k][l]/3.75)]
    }
   }

   for (var m = 0; m < finalPixelArray.length; m++) { 
        console.log(finalPixelArray[m].join(""))
   }

});