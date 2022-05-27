import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GameGridRow from '../components/GameGridRow';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Game Components/Game Grid Row',
  component: GameGridRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GameGridRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameGridRow> = (args : any) => <GameGridRow {...args} />;

export const GridRow = Template.bind({});
GridRow.args =  {
    height: 4,
    width: 4
}