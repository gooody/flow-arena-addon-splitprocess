

import { AbstractFlowElements } from 'virtual:AddOnAbstract';
import { WorkflowTypes } from 'virtual:AddOnMiscellaneous';
import img from "../assets/split-process-logo.png";


export default class SplitProcess extends AbstractFlowElements 
                                implements WorkflowTypes.FlowArenaMicroservicesInterface 
{
    /**
     * Unique node shape identifier used by @antv/x6 to define 
     * visual representation and behavior.
     */
    static readonly nodeShape = 'SplitProcess';

    /**
     * Defines the default number of expansion points available 
     * when the node is initialized.
     */
    readonly defaultNumberOfExpansionPoint:number = 3;

    /**
     * Specifies the maximum allowed number of expansion points 
     * that can be added to the node.
     */
    readonly maximumNumberOfExpansionPoint:number = -1;

    /**
     * Specifies the minimum required number of expansion points 
     * that must exist on the node.
     */
    readonly minimumNumberOfExpansionPoint:number = 1;
    
    /**
     * List of required keys that cannot be removed to preserve 
     * essential node configuration.
     */
    protected keyDeletionForbidden = [];

    /**
     * Returns the display label used to identify the node within 
     * the UI or workflow editor.
     * @returns string
     */
    protected getLabel():string {
        return 'sPlit (x)';
    }

    /**
     * Returns the node schema describing its structure, appearance, 
     * and interaction rules in @antv/x6.
     * @returns object
     */
    protected getNodeDefinition()
    {
        return {
            width: 140,
            height: 80,
            markup: [
                { tagName: 'rect', selector: 'body', },
                { tagName: 'polygon', selector: 'diamond', },
                { tagName: 'circle', selector: 'iconBg', },
                { tagName: 'image', selector: 'icon', },
                { tagName: 'text', selector: 'label', },
            ],
            attrs: {
                body: {
                    width: 120,
                    height: 60,
                    x: 10,
                    y: 10,
                    fill: '#91a2ff',
                    stroke: '#656db1',
                    strokeWidth: 2,
                },
                diamond: {
                    points: '70,0 140,40 70,80 0,40',
                    fill: '#b3e921',
                    stroke: '#7ba017',
                    strokeWidth: 2,
                },
                label: {
                    text: this.getLabel(),
                    refX: '50%',
                    refY: '50%',
                    textAnchor: 'middle',
                    textVerticalAnchor: 'middle',
                    fontSize: 14,
                    fill: '#000',
                },
                iconBg: {
                    cx: 30,
                    cy: 10,
                    r: 18,
                    fill: '#f0f0f0',
                    stroke: '#979797',
                    strokeWidth: 2,
                    pointerEvents: 'none',
                },
                icon: {
                    'xlink:href': img,
                    width: 60,
                    height: 60,
                    x: 0,
                    y: -18,
                    pointerEvents: 'none',
                },
            },
        }
    }
}

