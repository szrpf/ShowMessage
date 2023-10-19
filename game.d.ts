declare namespace gi {
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
    export function showMessage(str: any);
}