//colors http://www.colorhunt.co/c/7642
// #F38181 - background
// #FCE38A #EAFFD0 #95E1D3

var colors = ['#FCE38A', '#EAFFD0', '#95E1D3']

function Particle( maxX, maxY, snap, life, radius, color, opacity)
{
  this.life = life|| generateLifeTime(10)
  this.radius = radius || generateRadius(10, 25)
  this.color = color||randomColorChooser()
  this.opacity = opacity||generateOpacity(.5)
  this.x =  Math.floor(Math.random() * maxX) || 100
  this.y =  Math.floor(Math.random() * 350) - 100 || 100 // -100 -> 200
  this.animationTime = 3000 //ms
  console.log(this.x,this.y)
}

Particle.prototype.addToSnap = function(snap)
{
  var out = snap.circle(this.x,this.y,this.radius) //x y radius
  out.attr({
    fill: this.color,
    fillOpacity: this.opacity,
  })
  out.animate({r: this.radius * 1.5}, this.animationTime)
  var fadeOut = this.animationTime / 2
  setTimeout(function(){
    out.animate({opacity: '0'}, fadeOut) //((opacity, animatoin length), start time)
  }, fadeOut)
  return out
}

var generateLifeTime = function(maxLife)
{
  return Math.ceil(Math.random() * maxLife)
}

var generateRadius = function(minSize, maxSize)
{
  return Math.ceil((maxSize-minSize) * Math.random() + minSize)
}

var generateOpacity = function(minOpacity)
{
  return ((1-minOpacity) * Math.random() + minOpacity)
}

var randomColorChooser = function()
{
  return colors[Math.floor(Math.random() * colors.length)]
}
