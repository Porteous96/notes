import { IconButton, Tooltip } from '@material-ui/core';
import { IconType } from 'react-icons';


interface EditorToolbarButtonProps {
  Icon: IconType;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const EditorToolbarButton = ({name, Icon, onClick}: EditorToolbarButtonProps) => {
  return (
    <Tooltip title={name} arrow>
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default EditorToolbarButton;