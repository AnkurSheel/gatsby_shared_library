/* eslint-disable no-use-before-define */
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Video from '.';

const stories = storiesOf('Video', module);
stories.add('Basic Usage', () => (
    <div style={{ width: number('container width', 560) }}>
        <Video
            src={text('src', 'https://www.youtube.com/embed/9R7CWVYFrtc')}
            title={text('title', 'Ice Age Adventure Video')}
        />
    </div>
));
