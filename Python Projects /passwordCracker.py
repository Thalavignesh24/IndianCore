#Python Program To Cracking Password 

from random import *
import os

print(os.system('clear'))

pwd = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9","a", "b", "c", "d", "e", "f","g","h"]


u_pwd=input("Enter your password: ")

pw=""
while(pw!=u_pwd):
	pw=""
	for letter in range(len(u_pwd)):
		guess_pwd=pwd[randint(0,17)]
		pw =str(guess_pwd)+str(pw)
		print(pw)
		print("Cracking password....please wait.....")
		os.system("clear")

print("Your password ",pw)