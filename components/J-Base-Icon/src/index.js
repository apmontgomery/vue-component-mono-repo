import JBaseIcon from './JBaseIcon.vue';

function install(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    Vue.component('JBaseIcon', JBaseIcon);
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

JBaseIcon.install = install;

export default JBaseIcon;
