//colors http://www.colorhunt.co/c/7642
// #F38181 - background
// #FCE38A #EAFFD0 #95E1D3

var colors = ['#FCE38A', '#EAFFD0', '#95E1D3']

function Particle(canvasSizeX, canvasSizeY, life, size, color, opacity, x, y)
{
  this.canvasSizeX = canvasSizeX
  this.canvasSizeY = canvasSizeY
  this.life = life|| generateLifeTime(10)
  this.size = size || generateSize(100, 200)
  this.color = randomColorChooser()
  this.opacity = generateOpacity(.7)
  this.x = x || Math.floor(Math.random() * canvasSizeX)
  this.y = y || Math.floor(Math.random() * canvasSizeY)
}

Particle.prototype.createParticle = function()
{
  return new Particle()
}

Particle.prototype.drawParticle = function(element)
{
  element.appendChild(this)
}

var generateLifeTime = function(maxLife)
{
  return Math.ceil(Math.random() * maxLife)
}

var generateSize = function(minSize, maxSize)
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
Particle.prototype.updateParticle = function()
{

}
