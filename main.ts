input.onButtonPressed(Button.A, function () {
    led.toggle(Position % 5, Position / 5)
    Blink = false
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= Position; index++) {
        if (led.point(Scan_Pos % 5, Scan_Pos / 5)) {
            Final_Number = Final_Number + Max2
            Max2 = Max2 / 2
            Scan_Pos = Scan_Pos + 1
        } else {
            Max2 = Max2 / 2
            Scan_Pos = Scan_Pos + 1
        }
    }
    basic.showNumber(Final_Number)
})
input.onButtonPressed(Button.B, function () {
    Position = Position + 1
    Blink = true
    Max2 = Max2 * 2
})
function Reset () {
    basic.clearScreen()
    Blink = true
    Position = 0
    Scan_Pos = 0
    Final_Number = 0
    Scan_Pos = 0
    Max2 = 1
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Reset()
})
let Max2 = 0
let Final_Number = 0
let Scan_Pos = 0
let Blink = false
let Position = 0
Reset()
basic.forever(function () {
    while (Blink == true) {
        led.toggle(Position % 5, Position / 5)
        basic.pause(100)
    }
})
