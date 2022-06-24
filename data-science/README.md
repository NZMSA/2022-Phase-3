# Phase 2 Data Science Section

Welcome to the data science section!

This module contains a skeleton setup of a Keras supervised model training setup which is used to make a Neural Network (NN for short) to be used for move prediction for a game called 2048.

## Contents:
* `api.py` - Has the API setup for the user to run a mini backend server instance.

* `game.py` - Has a class that handles the 2048 logic. Designed for the users deciding to do the data science stream.

* `genData.py` - Has a coded agent that will play a game instance for you. The agent currently selects valid moves randomly.

* `trainModel.py` - A model setup that the user can use to train the model. Includes tuning the model and is designed to use the dataset generated from this project. The model is saved after the training is done.

* `useModel.py` - Uses the model made from `trainModel.py` to predict the suggested move or tell the user the game is over. The API setup uses this script for telling the user this.

* `viewGameData.py` - A terminal viewer for the user to see the generated game data.

## Requirements:

* [Python 3.9+](https://www.python.org/downloads/)
* Text Editor for Python ([Visual Studio Code](https://code.visualstudio.com/) with [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) installed is recommended)

Recommended:
* [Anaconda](https://www.anaconda.com/)
* [Virtualenv](https://virtualenv.pypa.io/en/latest/installation.html)

## For students:

- [ ] Obtain a good dataset either by:
    - [ ] Improving the agent to make more strategic moves.
    - [ ] Play a couple of instances yourself and generate game history.
- [ ] Tune your Neural Network model(s) to make valid moves.
- [ ] Your trained model(s) are to be exposed as an API for other services to use to predict next move.
- [ ] Write a report in markdown in a notebook about your model, a template is provided.

Note: We assume we can run your model(s) by just running the API instance after cloning your repository so make sure your final model(s) is saved in the repository.

## Setting Up:

Install the libraries listed in the `requirements.txt` via the command:
```bash
pip install -r requirements.txt
```

Recommended to use a virtual environment either from either [virtualenv](https://docs.python.org/3/library/venv.html) or [anaconda](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html). This setup helps isolate project dependencies from user dependencies as to avoid version conflicts.

## Creating the dataset:
A dataset is essential, especially for supervised learning. In this stream, you get to create your own dataset. Data scientists spend more time on making/obtaining a good dataset that can be used for model training.

You can create your dataset to be used for training the model using the provided scripts in this directory. A few ways to make your dataset is to run the following command(s) as listed below.

Run
```
python genData.py
```
to make the agent pick random valid moves. You are advised to change the agent behaviour to picking more strategic moves in this file. Saved in `./output/game_data.csv` file.

You can also run
```
python game.py
```
to use an interactive CLI game that can log your moves while you play the game. The moves and game states are saved in `./output/game_hist/[number].csv` where `number` is any number.

It is recommended that you understand your dataset and any bugs produced in the scripts are to be fixed yourself. We do not guarantee that the generating scripts are bug free. 

Also ensure there is enough of a balance of early-game, mid-game, end-game and game over states on the board as datasets that contain these will allow the model to be more better at predicting correct and valid moves.

Common issues that can come with datasets:

* __Imbalanced classes__ - Lack of input data that gives a mentioned output.
* __Missing values__ - Scenarios in this case.
* __Outliers__ - May not be applicable in this case.

## Training the model(s):

Once you have the dataset, you can start tuning your model shape and then train your model.

Currently the layers are there just to show you a couple of ways you can create and shape your model. Points of interest to tune your model(s) include:

1. Adding/changing hidden layers with their node counts and [activation types](https://keras.io/api/layers/activations/).
2. Changing the [optimizer](https://keras.io/api/optimizers/), [loss](https://keras.io/api/losses/) and the [metric](https://keras.io/api/metrics/) for the output.
3. Changing the test size of the `train_test_split`.
4. Changing the `batch_size` and number of `epochs` when fitting the model.
5. Feel free to change the input and output if you know what you are doing.

Once you are ready to train your model, run the following command:
```bash
python trainModel.py
```

Notes to consider: 
* The training includes an [early stopper](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/EarlyStopping) that can stop training the model when it predicts that a metric cannot be improved.
* The model is saved after the training is done so it can be used directly by the API.
* The _learning rate_ for the optimiser is important for your model's performance.
* **For Experts**: You can experiment with [hyperparameter tuning](https://www.tensorflow.org/tensorboard/hyperparameter_tuning_with_hparams) but is not implemented here yet.

Optional: 
* Run `python useModel.py` to see your model predicting moves or declare the game over after the model has completed its training.
* Run `tensorboard --logdir output/logs/` to run [tensorboard](https://github.com/tensorflow/tensorboard/blob/master/README.md). The main points of interests are accuracy and loss graphs. The tensorboard application can then be opened via the site `http://localhost:6006/`.

Common issues that can come with model training:

* __Instability__ - Learning rate is too high that the loss and/or accuracy fluctuates.
* __Over-fitting__ - Validation loss starts to steadily increase.
* __Slow Progress__ - Learning rate is too low that it takes way more epochs to reach certain accuracy.
* __Under-fitting__ - Validation loss can still be improved by continuing the training.

## Exposing the model as an API:

To allow other applications to use the model as an API one must run the following command in your machine:
```bash
uvicorn api:root
```

Or in development mode:
```bash
uvicorn api:root --reload
```

And then go to the site `http://localhost:8000/docs` to see the Swagger UI for how the API endpoints look like and the required request format.

The available URL endpoints are (assuming hosted locally):
* GET - `http://localhost:8000/api/health`
* POST - `http://localhost:8000/api/move`

It is advised **NOT** to run the API and train the model at the **same time**.