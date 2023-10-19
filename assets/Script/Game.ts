export namespace gi {
    export let log = CC_EDITOR ? cc.log : console.log;
    export let warn = CC_EDITOR ? cc.warn : console.warn;
    export let error = CC_EDITOR ? cc.error : console.error;
    export let rootNode: cc.Node = null;
    export let pageNode: cc.Node = null;
    export function random(a: number, b: number = 0): number { return (a - b) * Math.random() + b; }
    export function randomInt(a: number, b: number = 0): number { return ~~((a - b) * Math.random() + b); }
    //全局消息节点
    export let messageNode: cc.Node = null;
    //显示全局消息
    export function showMessage(str: any) {
        gi.messageNode.getChildByName('Content').getComponent(cc.Label).string = str.toString();
        gi.messageNode.getComponent(cc.Animation).play();
    }
};
window['gi'] = gi;

const { ccclass, property } = cc._decorator;
@ccclass
export default class Game extends cc.Component {
    protected start() {
        cc.game.setFrameRate(60);
        cc.debug.setDisplayStats(false);
        cc.macro.ENABLE_MULTI_TOUCH = false;
        gi.rootNode = this.node;
        gi.messageNode = this.node.getChildByName('Message');
        gi.pageNode = this.node.getChildByName('PageGame');
    }
}