$(function(){
  var maxX = 300
  var maxY = 300
  var intervalForNewPart = 150//ms

  var svgCanvas = $('#particleSVG').get(0)
  var widthSVG = svgCanvas.width.baseVal.value
  var heightSVG = svgCanvas.height.baseVal.value
  svgCanvas.setAttribute('viewBox', '0 0 '+widthSVG+' '+heightSVG)
  svgCanvas.setAttribute('width', '100%')
  svgCanvas.setAttribute('height', '100%')

  var snapSVG = Snap('#particleSVG')
  var particles = []
  for(var numParticles = 0; numParticles < 15; numParticles++)
  {
    var tempParticle = new Particle(maxX,maxY)
    particles.push(tempParticle.addToSnap(snapSVG))
  }

  var addingParticles = setInterval(function(){
    var tempParticle = new Particle(maxX, maxY)
    particles.push(tempParticle.addToSnap(snapSVG))
  }, intervalForNewPart)
})

