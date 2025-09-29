import string 

# Global variables
possibleCharacters = string.ascii_letters + string.digits + string.punctuation
# for uppercase only, possible chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
key = 0
mode = ""
initialMsg = ""
outputMsg = ""

#Functions
def wraparound(index):
  global outputMsg
  global key
  global initialMsg
  global possibleCharacters
  
  index = index+key-len(possibleCharacters)
  outputMsg += possibleCharacters[index]

def encode():
  global outputMsg
  global key
  global initialMsg
  global possibleCharacters
  
  for i in range(len(initialMsg)): #iterate through whole message
    if initialMsg[i] in possibleCharacters:
      index = possibleCharacters.find(initialMsg[i])
      if index+key>25: # checks if the position should go back to the beginning of the character list
        wraparound(index)
      else:
        outputMsg+=possibleCharacters[index+key] # changes the index of the character in the charcter list based on the key
    
    else:
      outputMsg+= initialMsg[i]
      
  return outputMsg

def decode():
  global outputMsg
  global key
  global initialMsg
  global possibleCharacters
  
  for i in range(len(initialMsg)): #iterate through whole message
    if initialMsg[i] in possibleCharacters:
      index = possibleCharacters.find(initialMsg[i])
      outputMsg+=possibleCharacters[index-key] # moves the position in the alphabet of the letter back based on the key 
    else:
      outputMsg+= initialMsg[i] # if the character is not in the character list (ie a space) do not change
      
  return outputMsg

# Run code
# Introduction
print("Welcome! This program will encrypt or decrypt your secret message using the Caesar cipher. \n\nWhen creating your message, you may only choose from the following characters: " + possibleCharacters + "\n\nLet's get started!\n")

while True:
  # Receive user input
  initialMsg = input("Enter the message to be encoded/decoded:\n")
  key = int(input("Enter the shift/key of the text to be encoded/decoded from 0 to 25:\n"))
  mode = input("Do you wish to encode or decode the input text?\n")
  
  # Encrypt or decrypt the message
  # Print the shifted message
  if mode.lower() == "encode" or mode.lower() == "e" :
    print(encode())
  elif mode.lower() == "decode" or mode.lower() == "d":
    print(decode())
  else:
    print("Invalid Input")
    break
  