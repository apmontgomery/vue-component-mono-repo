import { storiesOf } from '@storybook/vue';

import JButton from '../src/JButton.vue';

storiesOf('JButton', module)
    .add('Usage', () => ({
        components: { JButton },
        template: '<JButton />',
    }));
