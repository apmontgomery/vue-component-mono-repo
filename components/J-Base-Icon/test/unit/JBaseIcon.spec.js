import { mount } from '@vue/test-utils';
import JBaseIcon from '../../src/JBaseIcon.vue';

describe('JBaseIcon', () => {

    it('Should render "Hello World"', () => {
        const cmp = mount(JBaseIcon);
        expect(cmp.find('h1').text()).toBe('Hello World 2!');
    });

});
