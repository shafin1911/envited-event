import { ArrowBack, Fullscreen, ZoomIn, ZoomOut } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { getPdfFile } from 'axios/uploading/pdfApi';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

import { Document, Page, pdfjs } from "react-pdf";
import CloseIcon from '@mui/icons-material/Close';
import AnimateButton from 'ui-component/extended/AnimateButton';
import FullScreenModal from './FullScreenModal';
import { useMemo } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer() {
    const navigate = useNavigate()
    const params = useParams()
    const [totalPages, setTotalPages] = useState(null)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [zoom, setZoom] = useState(0.7)
    const [file, setFiles] = useState()
    const onDocumentLoadSuccess = ({ numPages }) => setTotalPages(numPages)

    useEffect(async () => {
        const resultFile = await getPdfFile(params.url)
        setFiles(resultFile?.data?.message)
    }, [])

    const GenerateDoc = useMemo(() => {
        return (<Document
            file={file}
            className="pdf-container"
            onLoadSuccess={onDocumentLoadSuccess}
            pageMode={{
                fullScreen: true
            }}
        >
            {
                Array.apply(null, Array(totalPages))
                    .map((x, i) => i + 1)
                    .map((page) => <Page key={`pdf-page-id-${page}`}
                        pageNumber={page}
                        scale={zoom}
                    />)
            }
        </Document>)
    })

    const TopToolBar = ({ closeModal }) => {
        return (
            <>
                {closeModal &&
                    <Box >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => {
                                setIsFullScreen(false)
                                closeModal.handleClose()
                            }}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                }
                {!closeModal && <Box pr={1}>
                    <AnimateButton>
                        <Button
                            sx={{ boxShadow: "none", backgroundColor: 'primary.dark' }}
                            disableElevation
                            size='large'
                            variant='contained'
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBack /> Go Back
                        </Button>
                    </AnimateButton>
                </Box>}
                <Box sx={{ display: 'flex', marginLeft: closeModal ? 'auto' : '' }}>
                    <Box sx={{ pr: 1 }}>
                        <AnimateButton>
                            <Button
                                sx={{ boxShadow: "none", backgroundColor: 'primary.200' }}
                                disableElevation
                                size='large'
                                variant='contained'
                                onClick={() => setZoom(prevZoom => prevZoom + 0.3)}
                            >
                                <ZoomIn /> Zoom In
                            </Button>
                        </AnimateButton>
                    </Box>
                    <Box pr={1}>
                        <AnimateButton>
                            <Button
                                sx={{ boxShadow: "none", backgroundColor: 'primary.200' }}
                                disableElevation
                                size='large'
                                variant='contained'
                                onClick={() => setZoom(prevZoom => prevZoom - 0.3)}
                            >
                                <ZoomOut /> Zoom Out
                            </Button>
                        </AnimateButton>
                    </Box>
                </Box>
                {!closeModal && <Box pr={1}>
                    <AnimateButton>
                        <Button
                            sx={{ boxShadow: "none", backgroundColor: 'primary.dark' }}
                            disableElevation
                            size='large'
                            variant='contained'
                            onClick={() => setIsFullScreen(true)}
                        >
                            <Fullscreen /> Full Screen
                        </Button>
                    </AnimateButton>
                </Box>}
            </>
        )
    }

    return (
        <Box position='relative'>
            <Box
                display='flex'
                justifyContent='center'
                sx={{
                    backgroundColor: 'primary.dark',
                    p: 2,
                    position: 'absolute',
                    width: '100%',
                    zIndex: 1
                }}
            >
                <TopToolBar />
            </Box>
            <Box onContextMenu={(e) => e.preventDefault()} sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'primary.800',
                height: '85VH',
                overflow: 'auto',
                '& .pdf-container': {
                    marginTop: '100px'
                }
            }}>
                {file && isFullScreen ?
                    <FullScreenModal
                        isFullScreen={isFullScreen}
                        topToolBar={TopToolBar}
                    >
                        <>{GenerateDoc}</>
                    </FullScreenModal> :
                    <>{GenerateDoc}</>
                }
            </Box >
        </Box>
    )
}
