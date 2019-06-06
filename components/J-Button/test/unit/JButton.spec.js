import { mount } from '@vue/test-utils';
import JButton from '../../src/JButton.vue';

describe('JButton', () => {

    it('Should render "Hello World"', () => {
        const cmp = mount(JButton);
        expect(cmp.find('h1').text()).toBe('Hello World!');
    });

});
