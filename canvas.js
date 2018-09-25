var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(400, 150, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 300, 100, 100);
*/


//Line
/*
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "red";
c.stroke();
*/

//Circle


/*
for (var i = 0; i < 100; i++){
    var x = Math.random() * window.innerWidth,
        y = Math.random() * window.innerHeight,
        z = Math.random() * 50,
        colorOf = ['red', 'yellow', 'blue', 'black', 'green', 'pink', 'grey', 'blue', 'violet', 'orange'];
       
c.beginPath();
c.arc(x, y, z, 0, Math.PI * 2, false);
c.strokeStyle = colorOf[Math.floor(Math.random()*10)];
c.stroke(); 
}
*/

var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 20,
    minRadius = 2;

//Mouse following
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
} )


//Resizing the window

//--------------------------------------The code doesn't execute witout resizing the browser window---------------------------------------------------------                    
/*window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init()
} )*/
//--------------------------------------This part of the code doesn't execute witout resizing the browser window---------------------------------------------------------

//Description of thr Circle
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = minRadius;
    var colorOf = ['yellow', '#FFFFF0', 'orange', '#7FFF00', '#FFFFFF'];
    this.color = colorOf[Math.floor(Math.random() * colorOf.length)];
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill(); 
    }
    
    this.update = function(){
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
            }
            if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            
//Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
           
            if (this.radius < maxRadius){
                this.radius += 1;
            }
            
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }
  
            this.draw();
    }
}

//Creating array of circles
var circleArray = [];

//--------------------------------------This part of the code doesn't execute witout resizing the browser window---------------------------------------------------------
/*
function init(){
    circleArray = [];*/
//--------------------------------------This part of the code doesn't execute witout resizing the browser window---------------------------------------------------------
    for (var i =0; i < 1000; i++){
        var x = Math.random() * window.innerWidth + radius,
        y = Math.random() * window.innerHeight + radius,
        dx = (Math.random() - 0.5),
        dy = (Math.random() - 0.5),
        radius = Math.random() * 5 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
//--------------------------------------This part of the code doesn't execute witout resizing the browser window---------------------------------------------------------
//}
//--------------------------------------This part of the code doesn't execute witout resizing the browser window---------------------------------------------------------
 



//Animating of circles
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
   }

animate();


