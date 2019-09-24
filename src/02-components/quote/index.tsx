import { css } from '@emotion/core';
import React from 'react';

const styles = {
    root: css({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    }),
    container: css({
        borderLeft: '8px solid #78C0A8',
        background: '#EDEDED',
        width: '40ch',
        fontSize: '1.5rem',
        padding: '0.5em 1em',
    }),

    blockquote: css({
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
    }),
    author: css({
        color: '#333333',
        fontstyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'right',
    }),
};

interface QuoteProps {
    quote: string;

    author?: string;
}
export const Quote = (props: QuoteProps) => {
    const { quote, author } = props;

    return (
        <div css={styles.root}>
            <div css={styles.container}>
                <blockquote css={styles.blockquote}>{quote}</blockquote>
                {author && <div css={styles.author}>- {author}</div>}
            </div>
        </div>
    );
};

export default Quote;
