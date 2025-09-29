##Import Libraries##
import pandas as pd
import GWCutilities as util
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix

##Set up Df##
pd.set_option('display.max_columns', None)
pd.set_option('max_colwidth', None)

print("\n-----\n")

#read the dataset & print introduction
df = pd.read_csv("heartDisease_2020_sampling.csv")
print("We will be performing data analysis on this Indicators of Heart Disease Dataset. Here is a sample of it: \n")

#Print the dataset's first five rows
print(df.head())
input("\n Press Enter to continue.\n")

##Data Cleaning##
#Label encode the dataset
#dictionary to map values for columns which contain only yes or no (heartDisease, 
#smoking, alcoholDrinking, physicalActivity)
yes_no_code_dict = {"Yes":1,
                   "No":0} 
sex_code_dict = {"Male":1,
           "Female":0} # dictionary to map values in sex column

df["HeartDisease"] = df["HeartDisease"].map(yes_no_code_dict)
df["Smoking"] = df["Smoking"].map(yes_no_code_dict)
df["AlcoholDrinking"] = df["AlcoholDrinking"].map(yes_no_code_dict)
df["PhyicalActivity"] = df["PhysicalActivity"].map(yes_no_code_dict)
df["Sex"] = df["Sex"].map(sex_code_dict)

print("\nHere is a preview of the dataset after label encoding. \n")
print(df.head())

input("\nPress Enter to continue.\n")

#One hot encode the dataset
df = util.oneHotEncoder(df,["AgeCategory","Race","GenHealth"])
print("\nHere is a preview of the dataset after one hot encoding. This will be the dataset used for data analysis: \n")
print(df.head())

input("\nPress Enter to continue.\n")

##Creates and trains Decision Tree Model##
X = df[df.columns[1:]]
y = df["HeartDisease"]

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.3,random_state=42)# random state has no effect on results

clf = DecisionTreeClassifier(max_depth = 3,class_weight = 'balanced')
clf_fit = clf.fit(X_train,y_train)
clf_y_pred = clf_fit.predict(X_test)

#Test the model with the testing data set and prints accuracy score
test_acc = accuracy_score(clf_y_pred,y_test)
print("Test Accuracy: ",test_acc)
util.printTree(clf, X.columns)

#Prints the confusion matrix
print(confusion_matrix(y_test, clf_y_pred, labels = [1, 0]))
input("\nPress Enter to continue.\n")

#Test the model with the training data set and prints accuracy score
clf_y_pred2 = clf_fit.predict(X_train)
train_acc = accuracy_score(clf_y_pred2,y_train)
print("Test Accuracy: ",train_acc)
util.printTree(clf, X.columns)

#Prints the confusion matrix
print(confusion_matrix(y_train, clf_y_pred2, labels = [1, 0]))

input("\nPress Enter to continue.\n")

#Prints another application of Decision Trees and considerations

print("Decision trees can be used in business decision making to model risks and decision outcomes\n")
print("Model accuracy can be improved by removing bias eg by using under sampling or over sampling")




#Prints a text representation of the Decision Tree
print("\nBelow is a text representation of how the Decision Tree makes choices:\n")
input("\nPress Enter to continue.\n")