import { storiesOf } from '@storybook/vue';

import JBaseIcon from '../src/JBaseIcon.vue';

storiesOf('JBaseIcon', module)
    .add('Usage', () => ({
        components: { JBaseIcon },
        template: '<JBaseIcon />',
    }));
