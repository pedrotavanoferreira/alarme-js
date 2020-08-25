function DESL () {
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    CASA = 1
})
function LIGA () {
    basic.showIcon(IconNames.Sad)
    if (input.lightLevel() < 125) {
        music.playMelody("C E - A C5 E D C ", 120)
    } else {
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.B, function () {
    CASA = 0
})
let CASA = 0
CASA = 0
basic.forever(function () {
    if (CASA == 0) {
        DESL()
    }
    if (CASA == 1) {
        LIGA()
    }
})
 
