input.onButtonPressed(Button.A, function () {
    if (i < s.length - 1) {
        i += 1
    } else {
        i = 0
    }
    basic.showNumber(i)
    input.onButtonPressed(Button.B, () => {
        stage[vl].showImage(0)
        input.onButtonPressed(Button.A, () => {
            if (vl > 0) {
                v *= 1.4
                vl -= 1
                stage[vl].showImage(0)
            }
        })
        input.onButtonPressed(Button.B, () => {
            if (vl < 4) {
                v /= 1.4
                vl += 1
                stage[vl].showImage(0)
            }
        })
    })
})
input.onButtonPressed(Button.AB, function () {
    for (let c of s[i]) {
        if (c == " ") {
            basic.pause(7 * v)
        } else {
            basic.showString(c)
            for (let n of morse[c as keyof typeof morse]) {
                if (n == "0") {
                    pins.digitalWritePin(DigitalPin.P0, 1)
                    basic.pause(v)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 1)
                    basic.pause(3 * v)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                }
                basic.pause(v)
            }
            basic.pause(3 * v)
            basic.clearScreen()
            basic.pause(v / 2)
        }
    }
    basic.showString("Finish", v/2)
basic.showNumber(i)
})
let i = 0
let s: string[] = []
let v = 0
v = 100
let vl = 2
s = ["apple", "grape", "strawberry", "hello world", "i am a student of oit nice to meet you"]
let morse = {
    "a" : "01", "b" : "1000", "c" : "1010", "d" : "100", "e" : "0", "f" : "0010", "g" : "110",
    "h" : "0000", "i" : "00", "j" : "0111", "k" : "101", "l" : "0100", "m" : "11", "n" : "10",
    "o" : "111", "p" : "0110", "q" : "1101", "r" : "010", "s" : "000", "t" : "1", "u" : "001",
    "v" : "0001", "w" : "011", "x" : "1001", "y" : "1011","z" : "1100"
}
let stage = [images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `), images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # . . .
    `), images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . # # . .
    # # # . .
    `), images.createImage(`
    . . . . .
    . . . # .
    . . # # .
    . # # # .
    # # # # .
    `), images.createImage(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)]
basic.showNumber(i)
