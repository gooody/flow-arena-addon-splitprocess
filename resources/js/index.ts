
import { AbstractServiceProvider } from 'virtual:AddOnAbstract';
import { defineAsyncComponent, Component } from 'vue';
import SplitProcess from './components/SplitProcess';

export default class FrontServiceProvider extends AbstractServiceProvider
{
    /**
     * Returns the addon icon (small image) used for visual identification 
     * in the user interface.
     * @returns string
     */
    getIco():string
    {
        return new URL('./assets/split-process-logo.png', import.meta.url).href
    }
    
    /**
     * Returns a larger collage image representing the addon, typically 
     * used in previews or detailed views.
     * @returns string
     */
    getCollage():string
    {
        return new URL('./assets/split-process-collage.png', import.meta.url).href
    }

    /**
     * Returns configuration for workflow graph blocks, including structure, 
     * behavior, and interaction rules.
     * @returns string[]
     */
    getWorkflowBlocks():string[]
    {
        return [
            SplitProcess,
        ]
    }

    /**
     * Returns a Vue.js component representing the configuration form with 
     * available addon options.
     * @returns Component
     */    
    getOptionsForm(): Component
    {
        return defineAsyncComponent(() =>
            import('./views/OptionsForm.vue')
        )
    }

}