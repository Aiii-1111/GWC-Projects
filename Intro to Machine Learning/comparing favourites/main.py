##Talking Data Starter Code##
##Part 2 Setting up the program##
#importing libraries
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

#load Data
pd.set_option('display.max_columns', None)
pd.set_option('max_colwidth', None)

movieData = pd.read_csv('./rotten_tomatoes_movies.csv')
#print(movieData.head())
#print(movieData["movie_title"])

#set & print fave movie
favMovie = "Your Name. (Kimi No Na Wa.)"
print("My favourite movie is ",favMovie)

##Part 3 Investigate the data##
favMovieBool = movieData["movie_title"] == favMovie #check if each row = favMovie
favMovieData = movieData.loc[favMovieBool==True] #return rows if movie name = favMovie

##Part 4 Filter data##
print("\nThe data for my favorite movie is:\n",favMovieData)
movGenre = "Animation"
movGenreBool = movieData["genres"].str.contains(movGenre)
print("\n\n")

#Create a new variable to store a new data set with a certain genre
animation_df = movieData.loc[movGenreBool==True]
nMovies = len(movGenreBool)

print("We will be comparing " + favMovie +
      " to other movies under the genre "+movGenre+" in the data set.\n")
print("There are " + str(nMovies) + " movies under the category "+movGenre+".")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see more information about how " + favMovie +
      " compares to other movies in this genre.\n")

##Part 5 Describe data##
#min
min = min(animation_df["audience_rating"])
print("The min audience rating of the data set is: " + str(min))
print(favMovie + " is rated "+str(int(favMovieData["audience_rating"]-min))+" points higher than the lowest rated movie.")
print()

#find max
max = max(animation_df["audience_rating"])
print("The max audience rating of the data set is: " + str(max))
print(favMovie + " is rated "+str(int(max-favMovieData["audience_rating"]))+" points lower than the highest rated movie.")
print()

#find mean
mean = np.mean(animation_df["audience_rating"])
print("The mean audience rating of the data set is: " + str(mean))
print(favMovie + " is higher than the mean movie rating.")

#find median
median = np.median(animation_df["audience_rating"])
print("The median audience rating of the data set is: " + str(median))
print(favMovie + " is higher than the median movie rating.")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see data visualizations.\n")

##Part 6 Create graphs##
#Create histogram
plt.figure(figsize=(12,8))
plt.hist(x= animation_df["audience_rating"],bins=20,range=(0,100))
#Adds labels and adjusts histogram
plt.grid(True)
plt.title("Audience Rating Histogram")
plt.xlabel("Audience rating")
plt.ylabel("frequency density")

#Prints interpretation of histogram
print(
  "According to the histogram, the most common ratings are between 60 and 80. The distribution follows a vaguely normal looking distribution"
)
print("Close the graph by pressing the 'X' in the top right corner.\n")

#Show histogram
plt.show()

#Create scatterplot
plt.figure(figsize=(12,8))
plt.scatter(x= animation_df["audience_rating"], y= animation_df["critic_rating"])
#Adds labels and adjusts scatterplot
plt.grid(True)
plt.title("Critic rating vs Audience rating")
plt.xlabel("Audience rating")
plt.ylabel("Critic Rating ")
plt.xlim(0, 100)
plt.ylim(0, 100)

#Prints interpretation of scatterplot
print(
  "According to the scatter plot, there is a strong positive correlation between the two variables, with a few outlies"
)
print()

print("Close the graph by pressing the 'X' in the top right corner.")

#Show scatterplot
plt.show()

print("\nThank you for reading through my data analysis!")
