import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';

interface ISnackbar {
  isActive: boolean;
  txt: string;
}

const Snackbars = (props?:ISnackbar) => {
    return <>
     <Snackbar
        open={props?.isActive}
        TransitionComponent={Fade}
        message={props?.txt}
        key={'Fade'}
      />
    </>
}

export default Snackbars