import Layer from './components/layer/layer.js';
import './css/common.css';

const App = () => {
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'john',
        arr: ['apple', 'opp']
    });

};

new App();