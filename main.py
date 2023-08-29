def on_button_pressed_a():
    global ent1
    ent1 += 1
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global ent2
    ent2 += 1
    pins.digital_write_pin(DigitalPin.P1, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

ent2 = 0
ent1 = 0
basic.clear_screen()
pins.digital_write_pin(DigitalPin.P0, 0)
pins.digital_write_pin(DigitalPin.P1, 0)
pins.digital_write_pin(DigitalPin.P2, 0)
while True:
    if ent1 + ent2 >= 5:
        basic.show_icon(IconNames.HAPPY)
        basic.show_string("Act")
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 1)
    else:
        basic.show_icon(IconNames.SAD)
        basic.show_string("N Act")
        pins.digital_write_pin(DigitalPin.P2, 0)