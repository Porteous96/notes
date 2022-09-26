import { Toolbar } from '@material-ui/core';
import { CommandController } from 'react-mde';

import { CommandNames, EditorCommand } from '../../types/editor/Commands';
import EditorToolbarButton from './EditorToolbarButton';


interface EditorToolbarProps {
  commands: EditorCommand[];
  commandController: CommandController<keyof typeof CommandNames>;
}

const EditorToolbar = ({commands, commandController}: EditorToolbarProps) => {

  const createCommandButtons = (commands: EditorCommand[]) => {
    return commands.map((command) => {

      return <EditorToolbarButton
        key={command.name}
        name={command.name}
        Icon={command.icon}
        onClick={async() => {
          await commandController.executeCommand(command.name);
        }}
      />;
    });
  };

  return (
    <Toolbar>
      {createCommandButtons(commands)}
    </Toolbar>
  );
};

export default EditorToolbar;