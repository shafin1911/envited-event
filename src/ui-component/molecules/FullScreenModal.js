import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenModal(props) {
    const [open, setOpen] = useState(props.isFullScreen);
    const TopToolBar = props.topToolBar
    useEffect(() => {
        setOpen(props.isFullScreen)
    }, [props.isFullScreen])


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <TopToolBar closeModal={{
                            handleClose,
                            showClose: true
                        }} />
                    </Toolbar>
                </AppBar>
                <Box sx={{

                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'primary.800',
                    overflow: 'auto',
                    '& .pdf-container': {
                        marginTop: '10px'
                    }
                }}>
                    {props.children}
                </Box>
            </Dialog>
        </div>
    );
}
