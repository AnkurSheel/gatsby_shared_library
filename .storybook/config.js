// import { withInfo } from '@storybook/addon-info';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.tsx$/);

addDecorator(withInfo({ inline: true, source: false }));

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

configure(loadStories, module);
