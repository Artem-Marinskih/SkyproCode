import * as monaco from 'monaco-editor';
import './SkyproCode.styl';



export class SkyproCode {
    container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;

        this.render();
    }

    render() {
        monaco.editor.create(document.querySelector('.app'), {
            language: 'javascript',
            theme: 'vs-dark',
            wordWrap: 'on'
          });
    }
}