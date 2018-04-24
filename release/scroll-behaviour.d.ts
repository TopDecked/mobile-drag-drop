import { DragImageTranslateOverrideFn } from "./index";
export interface ScrollOptions {
    threshold: ThresholdConfig;
    velocityFn: (velocity: number, threshold: number) => number;
}
export interface ThresholdConfig {
    vertical: number;
    horizontal: number;
}
export declare const scrollBehaviourDragImageTranslateOverride: DragImageTranslateOverrideFn;
export as namespace MobileDragDrop;