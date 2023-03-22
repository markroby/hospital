import pyautogui as gui
import time

number = input("How many messages ya raye2 : ")

time.sleep(4)

for i in range(int(number)):
    message = 'shokran '
    m2 = "shokran"

    gui.typewrite(message)
    gui.press('Enter')
    gui.typewrite(m2)
    gui.press('Enter')
