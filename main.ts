input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.newLine()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("B - A - E - C C ", 200)
    OLED.writeStringNewLine("It's NOT the same Ship. All parts have been replaced.")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G - F - E - F A ", 260)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("It can be either way, depends on how you argue it.")
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.newLine()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("B - A - E - C C ", 200)
    OLED.writeStringNewLine("It IS the Same Ship those new parts with the old Ship became \"Old parts\" of the new ship it was not all replaced at once.")
})
OLED.init(128, 64)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # #
    # . # . #
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . #
    . # # # #
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . . #
    . . # . #
    . # # # .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . # .
    . . # # .
    . # # # .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . . #
    . . # . #
    . # # # .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . # .
    . . # # .
    . # # # .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . . . . .
    . . . . .
    `)
OLED.writeStringNewLine("If a Ship falls apart and you replace every piece is it the same ship still? Click \"A\" for yes, or \"B\" for no.")
basic.forever(function () {
	
})
