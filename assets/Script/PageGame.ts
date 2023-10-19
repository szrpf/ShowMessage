const { ccclass, property } = cc._decorator;

@ccclass
export default class PageGame extends cc.Component {
    start() {
        gi.pageNode.getChildByName('Background').on(cc.Node.EventType.TOUCH_START, (event: cc.Event.EventTouch) => {
            gi.showMessage('点击屏幕 '+event.getLocation());
        }, this);
        gi.pageNode.getChildByName('Button0').on(cc.Node.EventType.TOUCH_START, () => {
            gi.showMessage('生成随机整数：' + gi.randomInt(50, 100));
        }, this);
        gi.pageNode.getChildByName('Button1').on(cc.Node.EventType.TOUCH_START, () => {
            gi.showMessage('生成随机小数：' + gi.random(50, 100).toFixed(2));
        }, this);
    }
}
