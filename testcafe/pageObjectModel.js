import {Selector } from 'testcafe';

class Page{
    constructor(){
        this.nameDev = Selector('#developer-name');
        this.checkboxRemoteTest = Selector('#remote-testing');
        this.radioButtonLinux = Selector ('#linux');
        this.listaInterface = Selector ('#preferred-interface');
        this.elementJavascriptApi = Selector ('#preferred-interface > option:nth-child(2)');
        this.checkboxTriedTC = Selector('#tried-test-cafe');
        this.textArea = Selector('#comments');

        this.sliderObjeto = Selector ('#slider');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')
        }
    }

}

export default new Page();