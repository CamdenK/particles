$(function(){
  var addParticleInDecreasingTime = function(){

  }

  var maxX = 300
  var intervalForNewPart = 200//ms

  var svgCanvas = $('#particleSVG').get(0)
  var widthSVG = svgCanvas.width.baseVal.value
  var heightSVG = svgCanvas.height.baseVal.value
  svgCanvas.setAttribute('viewBox', '0 0 '+widthSVG+' '+heightSVG)
  svgCanvas.setAttribute('width', '100%')
  svgCanvas.setAttribute('height', '100%')

  var snapSVG = Snap('#particleSVG')

  var addingParticles = setInterval(function(){
    addParticle(maxX,snapSVG)
  }, intervalForNewPart)

  easeElementIn($('#name').get(0),1000)
  easeElementIn($('#subtitle').get(0),2000)
})

var easeElementIn = function(element, time)
{
  setTimeout(function(){
    element.className += ' visible'
  },time)
}

var addParticle = function(maxX, snap)
{
  var tempParticle = new Particle(maxX)
  tempParticle.addToSnap(snap)
}

