/**
 * 应用入口
 */
import Layer from './components/layer/layer.js';
//import Layer from './components/layer/layer.tpl'; // 得到一个函数
import './css/common.css';

const App = () => {
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'john',
        arr: ['apple', 'opp']
    });
    // dom.innerHTML = Layer({
    //     name: 'john',
    //     arr: ['apple', 'opp']
    // });
};

new App();