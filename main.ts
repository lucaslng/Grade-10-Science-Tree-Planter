input.onButtonPressed(Button.A, function () {
    cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.MIDDLE)
    for (let index = 0; index < 4; index++) {
        cakLandMotor.turnLeft(25)
        basic.pause(2000)
        cakLandMotor.stop()
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.HALF_DOWN)
        basic.pause(500)
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.MIDDLE)
        seedsDropped += 1
    }
})
let seedsDropped = 0
basic.forever(function () {
    basic.showNumber(seedsDropped)
})
