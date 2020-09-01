/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { createUseStyles } from 'react-jss';

type QuoteProps = {
    quote: string;
    author?: string;
    quoteColor?: string;
    borderColor?: string;
    authorColor?: string;
};

const useStyles = createUseStyles<QuoteProps>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    container: {
        borderLeftColor: (props: QuoteProps) => props.borderColor || '#78C0A8',
        borderLeftStyle: 'solid',
        borderLeftWidth: '0.5em',
        maxWidth: '40ch',
        fontSize: '1.5rem',
        padding: '0.5em 1em',
    },

    blockquote: {
        fontStyle: 'italic',
        margin: '.75em 1.5em',
        color: (props: QuoteProps) => props.quoteColor,
        '&:before': {
            content: '"\\201C"',
            margin: '0 0.25em 0 -.75em',
            color: (props: QuoteProps) => props.quoteColor,
        },
        '&:after': {
            content: '"\\201D"',
            margin: '0',
            color: (props: QuoteProps) => props.quoteColor,
        },
    },
    author: {
        color: (props: QuoteProps) => props.authorColor,
        fontstyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export const Quote = (props: QuoteProps) => {
    const { quote, author } = props;
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <blockquote className={classes.blockquote}>{quote}</blockquote>
                {author && <div className={classes.author}>- {author}</div>}
            </div>
        </div>
    );
};

Quote.defaultProps = {
    author: null,
    quoteColor: '#555555',
    borderColor: '#78C0A8',
    authorColor: '#333333',
};

export default Quote;
