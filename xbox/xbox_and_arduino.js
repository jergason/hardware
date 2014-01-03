var XB = require('xbox-controller')
var five = require('johnny-five')


var board = new five.Board()
var xb = new XB()


board.on('ready', function() {
  var fan = new five.Pin({
    pin: 4,
    type: 'digital'
  })

  xb.on('lefttrigger', function(value) {
    console.log('left trigger with', value)
    if (value > 30) {
      fan.high()
    }
    else {
      fan.low()
    }
  })
})
