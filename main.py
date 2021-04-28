i = 0
s = ["apple", "banana", "grape"]
# unknown expression:  178
morse = {
    "a" : "01",
    "b" : "1000",
    "c" : "1010",
    "d" : "100",
    "e" : "0",
    "f" : "0010",
    "g" : "110",
    "h" : "0000",
    "i" : "00",
    "j" : "0111",
    "k" : "101",
    "l" : "0100",
    "m" : "11",
    "n" : "10",
    "o" : "111",
    "p" : "0110",
    "q" : "1101",
    "r" : "010",
    "s" : "000",
    "t" : "1",
    "u" : "001",
    "v" : "0001",
    "w" : "011",
    "x" : "1001",
    "y" : "1011",
    "z" : "1100",
}
for c in s[0]:
    
    # unknown expression:  202
    print(morse[c as keyof typeof morse])
    

def on_forever():
    pass
basic.forever(on_forever)

def on_button_pressed_a():
    global i
    if i < 2:
        i += 1
    else:
        i = 0
input.on_button_pressed(Button.A, on_button_pressed_a)
