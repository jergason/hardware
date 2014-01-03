var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function() {
  var button = new five.Pin({
    pin: 2,
    type: 'digital'
  })
  var led = new five.Led(13)

  button.read(toggleLedIfPressed(led))
})

function toggleLedIfPressed(led) {
  return function(state) {
    console.log('button state changed, state is', state)
    if (state) {
      led.toggle()
    }
  }
}
