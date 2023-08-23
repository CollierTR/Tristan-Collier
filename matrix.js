
/*-----------------------------------------------------   this section sets the canvas size   */


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = document.documentElement.clientWidth;

var body = document.body,
html = document.documentElement;

var H = Math.max( body.scrollHeight, body.offsetHeight, 
               html.clientHeight, html.scrollHeight, html.offsetHeight );

canvas.width = W;
canvas.height = H;

/*-----------------------------------------------------   this section sets the text rain   */

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for(var i=0; i<columns; i++){
    drops.push(0);
}

/*-----------------------------------------------------   var 'str' sets the rain random options   */

var str = "On his robe and on his thigh he has a name written, King of kings and Lord of lords";

function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00cc33";  //  -------------------------- font color
    for(var i=0; i<columns; i++){
        var index = Math.floor(Math.random()*str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if(y >= canvas.height && Math.random() > 0.99){
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);