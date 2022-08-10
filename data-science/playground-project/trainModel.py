import tensorflow as tf

def generateModel():
    """
    Make a Keras Sequential Model.
    Feel free to change the layout of the layers.

    Read more about keras here: https://keras.io/api/
    Tensorflow setup adapted here: https://www.tensorflow.org/tutorials/quickstart/beginner
    """
    model = tf.keras.Sequential(name="2048_Model")
    model.add(tf.keras.Input(shape=(16,))) # Input layer.
    model.add(tf.keras.layers.Rescaling(scale=1./17, name="Indice_Normaliser")) # Example pre-processing layer.

    model.add(tf.keras.layers.Dense(40, activation="relu")) # Example Hidden Layer 1. Has 40 Nodes.
    model.add(tf.keras.layers.Dense(25, activation="sigmoid")) # Example Hidden Layer 2. Has 25 Nodes.
    model.add(tf.keras.layers.Dense(15, activation="tanh")) # Example Hidden Layer 3. Has 15 Nodes.

    model.add(tf.keras.layers.Dense(5, activation="softmax", name="Output_Probability")) # Output layer.

    model.compile(
        optimizer=tf.keras.optimizers.SGD(learning_rate=0.01), 
        loss=tf.keras.losses.BinaryCrossentropy(from_logits=False), 
        metrics=['accuracy']
    )

    return model


if __name__ == "__main__":
    from datetime import datetime
    import pandas as pd
    from sklearn.model_selection import train_test_split

    log_dir = "output/logs/" + datetime.now().strftime("%Y-%m-%d-%H:%M:%S")

    data = pd.read_csv("output/game_data.csv")
    model = generateModel()

    # Callbacks for QoL.
    tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)
    earlystop_callback = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=25, restore_best_weights=True)

    train, test = train_test_split(data, test_size=0.15, random_state=42)

    input_columns = [str(i) for i in range(16)]
    output_columns = ["up", "down", "left", "right", "gameOver"]

    # Train the model. Currently using supervised learning.
    train_x = tf.convert_to_tensor(train[input_columns])
    train_y = tf.convert_to_tensor(train[output_columns])

    # Check model accuracy with test data.
    test_x = tf.convert_to_tensor(test[input_columns])
    test_y = tf.convert_to_tensor(test[output_columns])

    model.fit(train_x, train_y,
        validation_data=(test_x, test_y),
        epochs=50000,
        batch_size=2000,
        callbacks=[tensorboard_callback, earlystop_callback],
        # verbose=0 # Uncomment this line to reduce the printing on console.
    )

    model.evaluate(test_x, test_y, verbose=2)
    model.save('output/my_model')
