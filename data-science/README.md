# Data Science Phase 3

Welcome to Phase 3! Congratulations for making it so far. For Phase 3, the requirement is to train a Deep Neural Network for item/animal detection.

Basically the aim is to be able to have the model determine the probability that there is mentioned item/animal. For example if I choose a dog label, 0 means a dog is not there, 1 means there is certainly a dog in there.

## Getting Started:
A skeleton project indicated by the `skeleton-code` is added to the repository. You can use the project setup to get started with your section. The model is already fitted with tensorboard logging and early stopping.

## Basic Requirements:

You are to complete all of these:

1. Download the CIFAR-10 dataset from [here](https://www.cs.toronto.edu/~kriz/cifar.html). You are only allowed to use the dataset downloaded from said page, placed in your project directory and opened from your project directory.

2. Exploratory Data Analysis. Show at least the following:
    * Show the shape of the datasets.
    * Render 5 images from each label to show that you know how to assemble an image from the dataset.
    * Pick __ONE__ label that you will be using for probabability that the item/animal is there.

3. Data Processing. Do at least the following:
    * Obtain your training and testing dataset. Use the data batches as how they are meant to be used.
    * Ensure that there is no data imbalance between the images belonging to the label you selected. Simply, there should be 10000 data entries for training and 2000 for testing.

4. Data Modelling.
    * Create your Model. A skeleton notebook with example Neural Network is provided. Feel free to change the shape of your model:
        * Adding/changing hidden layers with their node counts and [activation types](https://keras.io/api/layers/activations/).
        * Changing the [optimizer](https://keras.io/api/optimizers/), [loss](https://keras.io/api/losses/) and the [metric](https://keras.io/api/metrics/) for the output.
        * Feel free to change the input and output if you know what you are doing.
    * Fit your training and validation (testing in this case) dataset to the model.

5. Write a report about your model. A template report notebook is supplied with the skeleton project. It should include the following:
    * Introduction.
        * Which label you picked for item/animal detection.
        * Optional: Why?
    * Modelling Process.
        * What is the shape of your model?
        * Why did you pick selected loss and optimizer?
    * Model Performance.
        * Show the results of your training through the use of graphs. The graphs can be obtained from tensorboard. These include:
            * Accuracy
            * Loss
            * Validation Accuracy
            * Validation Loss
        * Comments about the results.
    * Conclusion.
        * Summarise the report without adding too much information.

## Advanced Features:

You are to complete any 2 of the listed features.

1. Apply hyperparameter tuning to your model so you can find out the best possible model compilation parameters for accuracy.

2. Upload the model to Azure Machine Learning Studio and expose the model as an API.

3. Make a python application/function that can evaluate your model when you give it any PNG and/or JPEG image. This application should be able to resize your images to 32x32 before having the model evaluate said image.

4. Make your front-end and/or back-end use the model in some way, an example would be:
    * Have the front-end be a platform to send image data to the model to determine probability.
    * Have the back-end store results of mentioned image with probability for caching.

## Submission Details:
Your repository submission should have the following for the data science section:
- Training model notebook.
- Report notebook.
- Only the final model saved.
- `requirements.txt` file.
- Any files used for advanced features.

## Example Repository

The example repository is meant to be a playground so that you can get started with playing with the neural network implementation and provide a way to use the model.

Also the top 3 submitters with the most accurate model gets a prize when the results are released. The submitted model will be tested for its accuracy. 😄
