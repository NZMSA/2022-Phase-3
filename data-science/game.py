import random

class Game():
    """
    Create an instance of the 2048 game.
    """
    def __init__(self, matrix = []):
        """
        Initialise the class with a pre-set board.
        If no board supplied, start a game as usual.
        """
        self.matrix = matrix
        if len(self.matrix) == 0:
            self.new_game()
        elif len(self.matrix) != 16:
            raise ValueError("Inappropriate array size supplied, must supply 16 values.")


    def board(self) -> list:
        return self.matrix.copy()


    def new_game(self):
        """
        Reset the game state to where only 2 times are generated for the player to start.
        """
        self.matrix = []
        for _ in range(4):
            for _ in range(4):
                self.matrix.append(0)

        for _ in range(2):
            self.gen_random_number_tile()


    def gen_random_number_tile(self):
        """
        Generate a 2 or 4 on an empty tile indicated by a 0.
        """
        gen_2_chance = 0.9 # Between 0 and 1.
        list_free_spots = []

        for i in range(len(self.matrix)): # Get index of free spots (indicated by 0)
            if self.matrix[i] == 0: 
                list_free_spots.append(i)

        chosen_index = random.randrange(0, len(list_free_spots))
        gen_number = random.random()

        if gen_number < gen_2_chance:
            chosen_number = 1 # 2 ^ 1 = 2
        else:
            chosen_number = 2 # 2 ^ 2 = 4

        self.matrix[list_free_spots[chosen_index]] = chosen_number


    def move(self, option):
        """
        Make a move on 2048 board.
        Board order for reference:
          0 |  1 |  2 |  3 
        ----+----+----+----
          4 |  5 |  6 |  7
        ----+----+----+----
          8 |  9 | 10 | 11   
        ----+----+----+----
         12 | 13 | 14 | 15  
        """
        if option == 0: # Up
            four_arrays = [[0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15]]
        elif option == 1: # Right
            four_arrays = [[3,2,1,0], [7,6,5,4], [11,10,9,8], [15,14,13,12]]
        elif option == 2: # Down
            four_arrays = [[12,8,4,0], [13,9,5,1], [14,10,6,2], [15,11,7,3]]
        elif option == 3: # Left
            four_arrays = [[0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15]]
        else:
            raise ValueError("Option should be integers between 0 and 3 both inclusive.")

        should_gen = False

        for array_index in four_arrays:
            # Two or more tiles in said row/column.
            sample_column = [self.matrix[i] for i in array_index]

            non_empty_index = []
            for i in range(len(sample_column)):
                if sample_column[i] != 0:
                    non_empty_index.append(i)

            if len(non_empty_index) == 0:
                continue

            if len(non_empty_index) == 1:
                while sample_column[0] == 0:
                    sample_column.pop(0)
                    sample_column.append(0)
                    should_gen = True

                for i in range(len(sample_column)):
                    self.matrix[array_index[i]] = sample_column[i]
                continue

            i = 0
            size_non_empty_original = len(non_empty_index)

            # Fusing numbers phase.
            while i < size_non_empty_original - 1: 
                current_selected_value = sample_column[non_empty_index[i]]
                next_selected_value = sample_column[non_empty_index[i+1]]

                if current_selected_value == next_selected_value:
                    sample_column[non_empty_index[i]] += 1
                    sample_column[non_empty_index[i+1]] = 0
                    i += 2
                    should_gen = True
                else:
                    i += 1

            non_empty_index = []
            for i in range(len(sample_column)):
                if sample_column[i] != 0:
                    non_empty_index.append(i)

            i = 0
            size_non_empty_original = len(non_empty_index)

            # Putting tiles to the edge.
            while i < size_non_empty_original: 
                if sample_column[i] == 0:
                    sample_column.pop(i)
                    sample_column.append(0)
                    should_gen = True
                else:
                    i += 1
            
            for i in range(len(sample_column)):
                self.matrix[array_index[i]] = sample_column[i]
        
        if should_gen:
            self.gen_random_number_tile()


    def isGameOver(self) -> bool:
        """
        A check the ensure that a valid move can no longer be made.
        Returns:
            Boolean: Value to indicate game over status.
        """
        arrays_to_check = [[0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15], [3,2,1,0], [7,6,5,4], [11,10,9,8], [15,14,13,12]]
        for array in arrays_to_check:
            for i in range(len(array) - 1):
                current_item_value = self.matrix[array[i]]
                next_item_value = self.matrix[array[i+1]]

                if current_item_value == 0 or current_item_value == next_item_value or next_item_value == 0:
                    return False
        
        return True