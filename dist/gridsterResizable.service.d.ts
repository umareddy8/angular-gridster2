import { GridsterItemComponent } from './gridsterItem.component';
import { GridsterResizeEventType } from './gridsterResizeEventType.interface';
import { GridsterPush } from './gridsterPush.service';
import { GridsterComponent } from './gridster.component';
export declare class GridsterResizable {
    gridsterItem: GridsterItemComponent;
    gridster: GridsterComponent;
    lastMouse: {
        pageX: number;
        pageY: number;
    };
    itemBackup: Array<number>;
    enabled: boolean;
    resizeEventScrollType: GridsterResizeEventType;
    directionFunction: Function;
    dragFunction: (event: any) => void;
    dragStopFunction: (event: any) => void;
    resizeEnabled: boolean;
    mousemove: Function;
    mouseup: Function;
    touchmove: Function;
    touchend: Function;
    touchcancel: Function;
    mousedown: Function;
    touchstart: Function;
    push: GridsterPush;
    minHeight: number;
    minWidth: number;
    offsetTop: number;
    offsetLeft: number;
    margin: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
    width: number;
    height: number;
    newPosition: number;
    static touchEvent(e: any): void;
    static getOffsetSum(originalElement: any): {
        top: number;
        left: number;
    };
    static getScrollSum(originalElement: any): {
        scrollTop: number;
        scrollLeft: number;
    };
    constructor(gridsterItem: GridsterItemComponent, gridster: GridsterComponent);
    dragStart(e: any): void;
    dragMove(e: any): void;
    dragStop(e: any): void;
    cancelResize(): void;
    makeResize(): void;
    getRealCords(e: any): {
        pageY: number;
        pageX: number;
    };
    handleN(e: any): void;
    handleW(e: any): void;
    handleS(e: any): void;
    handleE(e: any): void;
    handleNW(e: any): void;
    handleNE(e: any): void;
    handleSW(e: any): void;
    handleSE(e: any): void;
    toggle(): void;
}
