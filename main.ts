input.onButtonPressed(Button.A, function () {
    ent1 += 1
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    ent2 += 1
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
let ent2 = 0
let ent1 = 0
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
while (true) {
    if (ent1 + ent2 >= 5) {
        basic.showIcon(IconNames.Happy)
        basic.showString("Act")
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.showString("N Act")
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
pins.digitalWritePin(DigitalPin.P2, 0)
