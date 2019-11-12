import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    container: {
        borderLeft: '8px solid #78C0A8',
        background: '#EDEDED',
        width: '40ch',
        fontSize: '1.5rem',
        padding: '0.5em 1em',
    },

    blockquote: {
        fontStyle: 'italic',
        color: '#555555',
        ':before': {
            content: '"\\201C"',
            margin: '0 0.25em 0 -.75em',
            color: '#316a57',
        },
        ':after': {
            content: '"\\201D"',
            margin: '0 0 0 0',
            color: '#316a57',
        },
    },
    author: {
        color: '#333333',
        fontstyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

type QuoteProps = {
    quote: string;

    author?: string;
};
export const Quote = (props: QuoteProps) => {
    const { quote, author } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <blockquote className={classes.blockquote}>{quote}</blockquote>
                {author && <div className={classes.author}>- {author}</div>}
            </div>
        </div>
    );
};

export default Quote;
