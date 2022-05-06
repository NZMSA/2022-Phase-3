import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GameGrid from '../components/GameGrid';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game Components/GameGrid',
  component: GameGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GameGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameGrid> = (args) => <GameGrid {...args} />;

export const Grid = Template.bind({});
Grid.args =  {
    height: 4,
    width: 4
}