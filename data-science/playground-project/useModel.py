import tensorflow as tf
import pandas as pd

model = tf.keras.models.load_model('output/my_model')

def useModel(grid: list) -> str:
    """
    Attempt to use the model to predict next move or game over state.
    Returns:
        string: Model's suggested move or result.
    """
    output = list(model.predict(tf.convert_to_tensor(pd.DataFrame([grid], columns=[str(i) for i in range(16)])))[0])

    max_number = max(output)
    index = output.index(max_number)

    map_dir = ["Up", "Down", "Left", "Right", "Game Over"]
    return map_dir[index]


if __name__ == "__main__":
    print(model.summary())
    print(useModel([1,2,3,4,4,3,2,1,1,2,3,4,2,1,2,3])) # Should be Game Over.
    print(useModel([1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]))
    print(useModel([1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]))
