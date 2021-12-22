"use strict";

import '../styles/app.scss';
import '../styles/base.scss';

import router from "./route/router.js";

const DOM = {
    'app' : document.querySelector('#app'),
    'container' : document.querySelector('.container')
}

function render(){
    //DOM.container.innerHTML = router.render();
};


render();



