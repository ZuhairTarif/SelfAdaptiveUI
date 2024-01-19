# Self Adaptive User Interface (SAUI)
This is the implementation of our thesis project, where we have constructed a model to serve as a proof of concept.

## Installation:
You do not need to install anything to run the application, as long as you have a browser on your system. Simply run the index.html file to launch the application and check the browser's **Local Storage** for the values.

## Overview:
The purpose of the project is to implement SAUI. To achieve this, we will measure user mis-clicks and ratings while they use the application. Using our own **Bayesian Network Model**, we will calculate the necessary changes in the UI, such as increasing or decreasing the text or icon size.

Each time the user utilizes the application, the measured data is automatically stored in the Local Storage. For example, the first time the user runs the project, the data is fetched from Local Storage, and after using the application and closing it, the data is then updated in Local Storage.
