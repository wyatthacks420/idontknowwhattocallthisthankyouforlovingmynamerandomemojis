input.onButtonPressed(Button.A, function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
    basic.pause(500)
    wuKong.setAllMotor(100, 20)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    wuKong.setAllMotor(100, 100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    wuKong.setAllMotor(20, 100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(500)
    wuKong.setAllMotor(-100, -100)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
let strip: neopixel.Strip = null
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
