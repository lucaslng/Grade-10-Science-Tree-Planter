def on_button_pressed_a():
    cakLandMotor.turn_left(25)
    basic.pause(2000)
    cakLandMotor.stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
