const SerialPort = require('serialport')
const Readline = require("@serialport/parser-readline")

const port = new SerialPort('COM3', {
  baudRate: 115200
})

// The serial port parser
const parser = new Readline();
port.pipe(parser);

// Switches the port into "flowing mode"
parser.on('data', function (data) {
    console.log('Data:', data)
  })