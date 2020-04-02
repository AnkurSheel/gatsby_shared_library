import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Quote from '.';

const stories = storiesOf('Quote', module);
stories.add('With Author', () => (
    <Quote
        author={text('author', 'Author')}
        quote={text('quote', 'Enter a quote.')}
        quoteColor={text('quote colour', '')}
        authorColor={text('author colour', '')}
        borderColor={text('border colour', '')}
    />
));

stories.add('Without Author', () => <Quote quote={text('quote', 'Enter a quote.')} />);
