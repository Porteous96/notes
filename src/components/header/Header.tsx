import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import './Header.scss';


interface HeaderProps {
  createNewNote: () => void;
  handleModeChange: () => void;
  isEditing: boolean;
}

const Header = ({ createNewNote, handleModeChange, isEditing }: HeaderProps) => {
  return (
    // TODO styling here needs thought about. How should elements be positioned on header. Where would themes icon go?
    <header className='header'>
      <Typography className='logo' variant='h1'>Notes</Typography> { /* TODO update this font to be a different colour*/ }
      
      <div className='controls'>
        <Button onClick={createNewNote}>
          <Typography>+</Typography>
        </Button> { /* TODO this has lost it's styling */ }
        <FormControlLabel
          className='preview-switch-label'
          control={
            <Switch
              checked={!isEditing}
              onChange={handleModeChange}
            />
          }
          label='Preview'
        />
        <Button className='theme-selector-btn'>Pick a theme</Button>
      </div>
    </header>
  );
};

export default Header;