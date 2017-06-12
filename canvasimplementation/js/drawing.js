$(function(){
  var initializeCanvas = function(){
    window.addEventListener('resize', resizeCanvas, false)
    resizeCanvas()
  }

  var resizeCanvas = function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log(canvas.width,canvas.height)
  }

  var canvas = $('#particleCanvas')
  var context = canvas[0].getContext('2d')
  initializeCanvas()
})



