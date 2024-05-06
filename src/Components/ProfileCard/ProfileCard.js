import React, { useState } from 'react';
import { apiOptions, imdbCdnPath, posterCdnPath } from '../../Utils/constants';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const ProfileCard = ({ finalCast }) => {
    const [open, setOpen] = useState(false);
    const [personInfo, setPersonInfo] = useState({})

    const handleClickOpen = (id) => {
        setOpen(true);
        fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, apiOptions)
            .then(response => response.json())
            .then(response => setPersonInfo(response))
            .catch(err => console.error(err));
    };
    const handleClose = () => {
        setOpen(false);
    };
    const gotoImdb = () => {
        window.open(imdbCdnPath + personInfo?.imdb_id, "_blank")
    }



    if (finalCast.profile_path == null) return null;
    const { profile_path } = finalCast;
    return (
        <div className=''>
            <img onClick={() => handleClickOpen(finalCast.id)} className='h-[120px] rounded-full cursor-pointer' src={posterCdnPath + profile_path} />
            <React.Fragment>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open dialog
                </Button> */}
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        {personInfo?.name}
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            {personInfo?.biography}
                        </Typography>
                        <Typography gutterBottom>
                            {personInfo?.birthday}
                        </Typography>


                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={gotoImdb}>
                            IMDB
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </React.Fragment>
            
        </div>
    );
};

export default ProfileCard;
