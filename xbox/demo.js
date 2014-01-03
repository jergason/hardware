var XB = require('xbox-controller')
var xb = new XB()

xb.on('lefttrigger', function(value) {
  console.log('lt value is', value)
})

xb.on('a:press', function(key) {
  console.log('key ', key, ' was pressed, lets LIGHT EM UP')
  xb.setLed(0x0A)
})

xb.on('b:press', function(key) {
  console.log(key, ' was pressed, ABORT ABORT')
  xb.setLed(0)
})


xb.on('x:press', function(key) {
  console.log(key, ' pressed, RUMBLERUMBLE')
  xb.rumble(255, 255)
})

xb.on('y:press', function(key) {
  console.log(key, ' pressed, STEALTH MODE')
  xb.rumble(0, 0)
})
