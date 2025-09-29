#import modules
import string

# Global variables
possibleCharacters = string.ascii_letters + string.digits + string.punctuation
key = 0
initialMsg = ""
outputMsg = ""

# Define the function called decrypt
def decrypt():
  global outputMsg
  global key
  global initialMsg
  global possibleCharacters
  
  for i in range(len(initialMsg)):
    if initialMsg[i] in possibleCharacters:
      index = possibleCharacters.find(initialMsg[i])
      outputMsg+=possibleCharacters[index-key]
    else:
      outputMsg+= initialMsg[i]
      
  return outputMsg

# Run code
# Introduction
print("Welcome! This program will crack the Caesar cipher and figure out any secret message that was encrypted with the Caesar cipher. Type in your encrypted message and this program will print all of the key possibilities of your message below. \n\nYour message can only include the following characters: " + possibleCharacters + "\n\n")

# Receive user input
initialMsg = input("What is your encrypted message? ")
input("\nPress enter to generate all of the key possibilities for your encrypted message.\n")

# Cycle through all possible keys
for i in range(len(possibleCharacters)):
  outputMsg = ""
  # Decrypt the message
  key = i
  print(i,": ",decrypt())


# Closing message
print("\nNow scroll through all of the key possibilities above and find the readable plaintext message.")