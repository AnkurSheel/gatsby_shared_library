/* eslint-disable no-use-before-define */
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        margin: '1rem 0',
    },
    iframe: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        border: 0,
    },
});

type VideoProps = {
    src: string;
    title: string;
};

export const Video = (props: VideoProps) => {
    const classes = useStyles();
    const { src, title } = props;

    return (
        <div className={classes.wrapper}>
            <iframe className={classes.iframe} src={src} title={title} allowFullScreen />
        </div>
    );
};

export default Video;
