module.exports = [
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-ssr] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].update(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeElement",
    ()=>resizeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-dom/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return {
            width: inlineSize,
            height: blockSize
        };
    } else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    } else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler)=>{
        handler({
            target,
            contentSize: contentRect,
            get size () {
                return getElementSize(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeWindow",
    ()=>resizeWindow
]);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const info = {
            target: window,
            size,
            contentSize: size
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resize",
    ()=>resize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs [app-ssr] (ecmascript)");
;
;
function resize(a, b) {
    return typeof a === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeWindow"])(a) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeElement"])(a, b);
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScrollInfo",
    ()=>createScrollInfo,
    "updateScrollInfo",
    ()=>updateScrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs [app-ssr] (ecmascript)");
;
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcInset",
    ()=>calcInset
]);
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namedEdges",
    ()=>namedEdges,
    "resolveEdge",
    ()=>resolveEdge
]);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffset",
    ()=>resolveOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-ssr] (ecmascript)");
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : `0`
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollOffset",
    ()=>ScrollOffset
]);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffsets",
    ()=>resolveOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/clamp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/interpolate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/offsets/default.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(info[axis].offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultOffset"])(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(0, 1, info[axis].interpolate(info[axis].current));
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnScrollHandler",
    ()=>createOnScrollHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$warn$2d$once$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/warn-once.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-ssr] (ecmascript)");
;
;
;
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */ if ("TURBOPACK compile-time truthy", 1) {
        if (container && target && target !== container) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$warn$2d$once$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: ()=>measure(element, options.target, info),
        update: (time)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollInfo",
    ()=>scrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/resize/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-ssr] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers)handler.measure();
        };
        const updateAll = ()=>{
            for (const handler of containerHandlers){
                handler.update(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            }
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers)handler.notify();
        };
        const listener = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].read(measureAll, false, true);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].read(updateAll, false, true);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$resize$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const listener = scrollListeners.get(container);
    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frame"].read(listener, false, true);
    return ()=>{
        var _a;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelFrame"])(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scroll",
    ()=>scroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-dom/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-ssr] (ecmascript)");
;
;
;
;
function scrollTimelineFallback({ source, container, axis = "y" }) {
    // Support legacy source argument. Deprecate later.
    if (source) container = source;
    // ScrollTimeline records progress as a percentage CSSUnitValue
    const currentTime = {
        value: 0
    };
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
        currentTime.value = info[axis].progress * 100;
    }, {
        container,
        axis
    });
    return {
        currentTime,
        cancel
    };
}
const timelineCache = new Map();
function getTimeline({ source, container = document.documentElement, axis = "y" } = {}) {
    // Support legacy source argument. Deprecate later.
    if (source) container = source;
    if (!timelineCache.has(container)) {
        timelineCache.set(container, {});
    }
    const elementCache = timelineCache.get(container);
    if (!elementCache[axis]) {
        elementCache[axis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() ? new ScrollTimeline({
            source: container,
            axis
        }) : scrollTimelineFallback({
            source: container,
            axis
        });
    }
    return elementCache[axis];
}
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */ function needsElementTracking(options) {
    return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observeTimeline"])(onScroll, getTimeline(options));
    }
}
function scrollAnimation(animation, options) {
    animation.flatten();
    if (needsElementTracking(options)) {
        animation.pause();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            animation.time = animation.duration * info[options.axis].progress;
        }, options);
    } else {
        const timeline = getTimeline(options);
        if (animation.attachTimeline) {
            return animation.attachTimeline(timeline, (valueAnimation)=>{
                valueAnimation.pause();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                    valueAnimation.time = valueAnimation.duration * progress;
                }, timeline);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        }
    }
}
function scroll(onScroll, { axis = "y", ...options } = {}) {
    const optionsWithDefaults = {
        axis,
        ...options
    };
    return typeof onScroll === "function" ? scrollFunction(onScroll, optionsWithDefaults) : scrollAnimation(onScroll, optionsWithDefaults);
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
function refWarning(name, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warning"])(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = ()=>({
        scrollX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollXProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollYProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motionValue"])(0)
    });
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
    useLifecycleEffect(()=>{
        refWarning("target", target);
        refWarning("container", container);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scroll"])((_progress, { x, y })=>{
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
            target: (target === null || target === void 0 ? void 0 : target.current) || undefined
        });
    }, [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    return values;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/transform.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/interpolate.mjs [app-ssr] (ecmascript)");
;
const isCustomValueType = (v)=>{
    return v && typeof v === "object" && v.mix;
};
const getMixer = (v)=>isCustomValueType(v) ? v.mix : undefined;
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(inputRange, outputRange, {
        mixer: getMixer(outputRange[0]),
        ...options
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-ssr] (ecmascript)");
;
;
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current = [];
    compute();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    return value;
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransform",
    ()=>useTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-ssr] (ecmascript)");
;
;
;
;
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComputed"])(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], ([latest])=>transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(()=>[]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values, ()=>{
        latest.length = 0;
        const numValues = values.length;
        for(let i = 0; i < numValues; i++){
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>tr,
    "b",
    ()=>mr,
    "c",
    ()=>Yr,
    "d",
    ()=>Xr,
    "e",
    ()=>Qr,
    "f",
    ()=>tn,
    "g",
    ()=>en,
    "h",
    ()=>on,
    "i",
    ()=>un,
    "j",
    ()=>ln,
    "k",
    ()=>cn,
    "l",
    ()=>kr,
    "m",
    ()=>fn,
    "n",
    ()=>hn,
    "o",
    ()=>dn,
    "p",
    ()=>pn
]);
var Vt = {}, ge = function(t, e, r, a, n) {
    var i = new Worker(Vt[e] || (Vt[e] = URL.createObjectURL(new Blob([
        t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], {
        type: "text/javascript"
    }))));
    return i.onmessage = function(s) {
        var u = s.data, l = u.$e$;
        if (l) {
            var o = new Error(l[0]);
            o.code = l[1], o.stack = l[2], n(o, null);
        } else n(null, u);
    }, i.postMessage(r, a), i;
}, O = Uint8Array, H = Uint16Array, Ct = Int32Array, At = new O([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), bt = new O([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), qt = new O([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), Rt = function(t, e) {
    for(var r = new H(31), a = 0; a < 31; ++a)r[a] = e += 1 << t[a - 1];
    for(var n = new Ct(r[30]), a = 1; a < 30; ++a)for(var i = r[a]; i < r[a + 1]; ++i)n[i] = i - r[a] << 5 | a;
    return {
        b: r,
        r: n
    };
}, $t = Rt(At, 2), It = $t.b, _e = $t.r;
It[28] = 258, _e[258] = 28;
var Jt = Rt(bt, 0), Ht = Jt.b, ut = new H(32768);
for(_ = 0; _ < 32768; ++_)R = (_ & 43690) >> 1 | (_ & 21845) << 1, R = (R & 52428) >> 2 | (R & 13107) << 2, R = (R & 61680) >> 4 | (R & 3855) << 4, ut[_] = ((R & 65280) >> 8 | (R & 255) << 8) >> 1;
var R, _, K = function(t, e, r) {
    for(var a = t.length, n = 0, i = new H(e); n < a; ++n)t[n] && ++i[t[n] - 1];
    var s = new H(e);
    for(n = 1; n < e; ++n)s[n] = s[n - 1] + i[n - 1] << 1;
    var u;
    if (r) {
        u = new H(1 << e);
        var l = 15 - e;
        for(n = 0; n < a; ++n)if (t[n]) for(var o = n << 4 | t[n], c = e - t[n], f = s[t[n] - 1]++ << c, h = f | (1 << c) - 1; f <= h; ++f)u[ut[f] >> l] = o;
    } else for(u = new H(a), n = 0; n < a; ++n)t[n] && (u[n] = ut[s[t[n] - 1]++] >> 15 - t[n]);
    return u;
}, tt = new O(288);
for(_ = 0; _ < 144; ++_)tt[_] = 8;
var _;
for(_ = 144; _ < 256; ++_)tt[_] = 9;
var _;
for(_ = 256; _ < 280; ++_)tt[_] = 7;
var _;
for(_ = 280; _ < 288; ++_)tt[_] = 8;
var _, Wt = new O(32);
for(_ = 0; _ < 32; ++_)Wt[_] = 5;
var _;
var Gt = K(tt, 9, 1);
var Zt = K(Wt, 5, 1), st = function(t) {
    for(var e = t[0], r = 1; r < t.length; ++r)t[r] > e && (e = t[r]);
    return e;
}, N = function(t, e, r) {
    var a = e / 8 | 0;
    return (t[a] | t[a + 1] << 8) >> (e & 7) & r;
}, ot = function(t, e) {
    var r = e / 8 | 0;
    return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >> (e & 7);
}, Kt = function(t) {
    return (t + 7) / 8 | 0;
}, lt = function(t, e, r) {
    return (e == null || e < 0) && (e = 0), (r == null || r > t.length) && (r = t.length), new O(t.subarray(e, r));
};
var Yt = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
], E = function(t, e, r) {
    var a = new Error(e || Yt[t]);
    if (a.code = t, Error.captureStackTrace && Error.captureStackTrace(a, E), !r) throw a;
    return a;
}, Xt = function(t, e, r, a) {
    var n = t.length, i = a ? a.length : 0;
    if (!n || e.f && !e.l) return r || new O(0);
    var s = !r, u = s || e.i != 2, l = e.i;
    s && (r = new O(n * 3));
    var o = function(Ut) {
        var Ft = r.length;
        if (Ut > Ft) {
            var Bt = new O(Math.max(Ft * 2, Ut));
            Bt.set(r), r = Bt;
        }
    }, c = e.f || 0, f = e.p || 0, h = e.b || 0, p = e.l, m = e.d, d = e.m, y = e.n, v = n * 8;
    do {
        if (!p) {
            c = N(t, f, 1);
            var A = N(t, f + 1, 3);
            if (f += 3, A) if (A == 1) p = Gt, m = Zt, d = 9, y = 5;
            else if (A == 2) {
                var C = N(t, f, 31) + 257, D = N(t, f + 10, 15) + 4, V = C + N(t, f + 5, 31) + 1;
                f += 14;
                for(var x = new O(V), q = new O(19), b = 0; b < D; ++b)q[qt[b]] = N(t, f + b * 3, 7);
                f += D * 3;
                for(var L = st(q), mt = (1 << L) - 1, nt = K(q, L, 1), b = 0; b < V;){
                    var U = nt[N(t, f, mt)];
                    f += U & 15;
                    var g = U >> 4;
                    if (g < 16) x[b++] = g;
                    else {
                        var T = 0, at = 0;
                        for(g == 16 ? (at = 3 + N(t, f, 3), f += 2, T = x[b - 1]) : g == 17 ? (at = 3 + N(t, f, 7), f += 3) : g == 18 && (at = 11 + N(t, f, 127), f += 7); at--;)x[b++] = T;
                    }
                }
                var Tt = x.subarray(0, C), $ = x.subarray(C);
                d = st(Tt), y = st($), p = K(Tt, d, 1), m = K($, y, 1);
            } else E(1);
            else {
                var g = Kt(f) + 4, M = t[g - 4] | t[g - 3] << 8, S = g + M;
                if (S > n) {
                    l && E(0);
                    break;
                }
                u && o(h + M), r.set(t.subarray(g, S), h), e.b = h += M, e.p = f = S * 8, e.f = c;
                continue;
            }
            if (f > v) {
                l && E(0);
                break;
            }
        }
        u && o(h + 131072);
        for(var me = (1 << d) - 1, ve = (1 << y) - 1, vt = f;; vt = f){
            var T = p[ot(t, f) & me], Z = T >> 4;
            if (f += T & 15, f > v) {
                l && E(0);
                break;
            }
            if (T || E(2), Z < 256) r[h++] = Z;
            else if (Z == 256) {
                vt = f, p = null;
                break;
            } else {
                var Nt = Z - 254;
                if (Z > 264) {
                    var b = Z - 257, Q = At[b];
                    Nt = N(t, f, (1 << Q) - 1) + It[b], f += Q;
                }
                var yt = m[ot(t, f) & ve], gt = yt >> 4;
                yt || E(3), f += yt & 15;
                var $ = Ht[gt];
                if (gt > 3) {
                    var Q = bt[gt];
                    $ += ot(t, f) & (1 << Q) - 1, f += Q;
                }
                if (f > v) {
                    l && E(0);
                    break;
                }
                u && o(h + 131072);
                var jt = h + Nt;
                if (h < $) {
                    var Lt = i - $, ye = Math.min($, jt);
                    for(Lt + h < 0 && E(3); h < ye; ++h)r[h] = a[Lt + h];
                }
                for(; h < jt; ++h)r[h] = r[h - $];
            }
        }
        e.l = p, e.p = vt, e.b = h, e.f = c, p && (c = 1, e.m = d, e.d = m, e.n = y);
    }while (!c)
    return h != r.length && s ? lt(r, 0, h) : r.subarray(0, h);
};
var we = new O(0);
var Ae = function(t, e) {
    var r = {};
    for(var a in t)r[a] = t[a];
    for(var a in e)r[a] = e[a];
    return r;
}, Pt = function(t, e, r) {
    for(var a = t(), n = t.toString(), i = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/\s+/g, "").split(","), s = 0; s < a.length; ++s){
        var u = a[s], l = i[s];
        if (typeof u == "function") {
            e += ";" + l + "=";
            var o = u.toString();
            if (u.prototype) if (o.indexOf("[native code]") != -1) {
                var c = o.indexOf(" ", 8) + 1;
                e += o.slice(c, o.indexOf("(", c));
            } else {
                e += o;
                for(var f in u.prototype)e += ";" + l + ".prototype." + f + "=" + u.prototype[f].toString();
            }
            else e += o;
        } else r[l] = u;
    }
    return e;
}, it = [], be = function(t) {
    var e = [];
    for(var r in t)t[r].buffer && e.push((t[r] = new t[r].constructor(t[r])).buffer);
    return e;
}, Ie = function(t, e, r, a) {
    if (!it[r]) {
        for(var n = "", i = {}, s = t.length - 1, u = 0; u < s; ++u)n = Pt(t[u], n, i);
        it[r] = {
            c: Pt(t[s], n, i),
            e: i
        };
    }
    var l = Ae({}, it[r].e);
    return ge(it[r].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", r, l, be(l), a);
}, xe = function() {
    return [
        O,
        H,
        Ct,
        At,
        bt,
        qt,
        It,
        Ht,
        Gt,
        Zt,
        ut,
        Yt,
        K,
        st,
        N,
        ot,
        Kt,
        lt,
        E,
        Xt,
        xt,
        Qt,
        te
    ];
};
var Qt = function(t) {
    return postMessage(t, [
        t.buffer
    ]);
}, te = function(t) {
    return t && {
        out: t.size && new O(t.size),
        dictionary: t.dictionary
    };
}, Ee = function(t, e, r, a, n, i) {
    var s = Ie(r, a, n, function(u, l) {
        s.terminate(), i(u, l);
    });
    return s.postMessage([
        t,
        e
    ], e.consume ? [
        t.buffer
    ] : []), function() {
        s.terminate();
    };
};
var P = function(t, e) {
    return t[e] | t[e + 1] << 8;
}, F = function(t, e) {
    return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0;
}, _t = function(t, e) {
    return F(t, e) + F(t, e + 4) * 4294967296;
};
function Oe(t, e, r) {
    return r || (r = e, e = {}), typeof r != "function" && E(7), Ee(t, e, [
        xe
    ], function(a) {
        return Qt(xt(a.data[0], te(a.data[1])));
    }, 1, r);
}
function xt(t, e) {
    return Xt(t, {
        i: 2
    }, e && e.out, e && e.dictionary);
}
var wt = typeof TextDecoder < "u" && new TextDecoder, ze = 0;
try {
    wt.decode(we, {
        stream: !0
    }), ze = 1;
} catch  {}
var Se = function(t) {
    for(var e = "", r = 0;;){
        var a = t[r++], n = (a > 127) + (a > 223) + (a > 239);
        if (r + n > t.length) return {
            s: e,
            r: lt(t, r - 1)
        };
        n ? n == 3 ? (a = ((a & 15) << 18 | (t[r++] & 63) << 12 | (t[r++] & 63) << 6 | t[r++] & 63) - 65536, e += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023)) : n & 1 ? e += String.fromCharCode((a & 31) << 6 | t[r++] & 63) : e += String.fromCharCode((a & 15) << 12 | (t[r++] & 63) << 6 | t[r++] & 63) : e += String.fromCharCode(a);
    }
};
function W(t, e) {
    if (e) {
        for(var r = "", a = 0; a < t.length; a += 16384)r += String.fromCharCode.apply(null, t.subarray(a, a + 16384));
        return r;
    } else {
        if (wt) return wt.decode(t);
        var n = Se(t), i = n.s, r = n.r;
        return r.length && E(8), i;
    }
}
var Me = function(t, e) {
    return e + 30 + P(t, e + 26) + P(t, e + 28);
}, De = function(t, e, r) {
    var a = P(t, e + 28), n = W(t.subarray(e + 46, e + 46 + a), !(P(t, e + 8) & 2048)), i = e + 46 + a, s = F(t, e + 20), u = r && s == 4294967295 ? Te(t, i) : [
        s,
        F(t, e + 24),
        F(t, e + 42)
    ], l = u[0], o = u[1], c = u[2];
    return [
        P(t, e + 10),
        l,
        o,
        n,
        i + P(t, e + 30) + P(t, e + 32),
        c
    ];
}, Te = function(t, e) {
    for(; P(t, e) != 1; e += 4 + P(t, e + 2));
    return [
        _t(t, e + 12),
        _t(t, e + 4),
        _t(t, e + 20)
    ];
};
var kt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(t) {
    t();
};
function ee(t, e, r) {
    r || (r = e, e = {}), typeof r != "function" && E(7);
    var a = [], n = function() {
        for(var y = 0; y < a.length; ++y)a[y]();
    }, i = {}, s = function(y, v) {
        kt(function() {
            r(y, v);
        });
    };
    kt(function() {
        s = r;
    });
    for(var u = t.length - 22; F(t, u) != 101010256; --u)if (!u || t.length - u > 65558) return s(E(13, 0, 1), null), n;
    var l = P(t, u + 8);
    if (l) {
        var o = l, c = F(t, u + 16), f = c == 4294967295 || o == 65535;
        if (f) {
            var h = F(t, u - 12);
            f = F(t, h) == 101075792, f && (o = l = F(t, h + 32), c = F(t, h + 48));
        }
        for(var p = e && e.filter, m = function(y) {
            var v = De(t, c, f), A = v[0], g = v[1], M = v[2], S = v[3], C = v[4], D = v[5], V = Me(t, D);
            c = C;
            var x = function(b, L) {
                b ? (n(), s(b, null)) : (L && (i[S] = L), --l || s(null, i));
            };
            if (!p || p({
                name: S,
                size: g,
                originalSize: M,
                compression: A
            })) if (!A) x(null, lt(t, V, V + g));
            else if (A == 8) {
                var q = t.subarray(V, V + g);
                if (g < 32e4) try {
                    x(null, xt(q, {
                        out: new O(M)
                    }));
                } catch (b) {
                    x(b, null);
                }
                else a.push(Oe(q, {
                    size: M
                }, x));
            } else x(E(14, "unknown compression type " + A, 1), null);
            else x(null, null);
        }, d = 0; d < o; ++d)m(d);
    } else s(null, {});
    return n;
}
function re(t) {
    return (Array.isArray(t) ? t : t.issues).reduce((e, r)=>{
        if (r.path) {
            let a = r.path.map(({ key: n })=>n).join(".");
            e.nested[a] = [
                ...e.nested[a] || [],
                r.message
            ];
        } else e.root = [
            ...e.root || [],
            r.message
        ];
        return e;
    }, {
        nested: {}
    });
}
var Ne = class extends Error {
    issues;
    constructor(t){
        super(t[0].message), this.name = "ValiError", this.issues = t;
    }
};
function je(t, e) {
    return {
        reason: t == null ? void 0 : t.reason,
        validation: e.validation,
        origin: (t == null ? void 0 : t.origin) || "value",
        message: e.message,
        input: e.input,
        abortEarly: t == null ? void 0 : t.abortEarly,
        abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
    };
}
function Le(t, e) {
    return {
        reason: e,
        origin: t == null ? void 0 : t.origin,
        abortEarly: t == null ? void 0 : t.abortEarly,
        abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
    };
}
function J(t, e, r, a) {
    if (!e || !e.length) return {
        output: t
    };
    let n, i, s = t;
    for (let u of e){
        let l = u(s);
        if (l.issue) {
            n = n || Le(r, a);
            let o = je(n, l.issue);
            if (i ? i.push(o) : i = [
                o
            ], n.abortEarly || n.abortPipeEarly) break;
        } else s = l.output;
    }
    return i ? {
        issues: i
    } : {
        output: s
    };
}
function B(t, e) {
    return !t || typeof t == "string" ? [
        t,
        e
    ] : [
        void 0,
        t
    ];
}
function k(t, e, r, a, n, i) {
    return {
        issues: [
            {
                reason: e,
                validation: r,
                origin: (t == null ? void 0 : t.origin) || "value",
                message: a,
                input: n,
                issues: i,
                abortEarly: t == null ? void 0 : t.abortEarly,
                abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
            }
        ]
    };
}
function ne(t = []) {
    return {
        schema: "any",
        async: !1,
        _parse (e, r) {
            return J(e, t, r, "any");
        }
    };
}
function Y(t, e, r) {
    let [a, n] = B(e, r);
    return {
        schema: "array",
        array: {
            item: t
        },
        async: !1,
        _parse (i, s) {
            if (!Array.isArray(i)) return k(s, "type", "array", a || "Invalid type", i);
            let u, l = [];
            for(let o = 0; o < i.length; o++){
                let c = i[o], f = t._parse(c, s);
                if (f.issues) {
                    let h = {
                        schema: "array",
                        input: i,
                        key: o,
                        value: c
                    };
                    for (let p of f.issues)p.path ? p.path.unshift(h) : p.path = [
                        h
                    ], u == null || u.push(p);
                    if (u || (u = f.issues), s != null && s.abortEarly) break;
                } else l.push(f.output);
            }
            return u ? {
                issues: u
            } : J(l, n, s, "array");
        }
    };
}
function ct(t, e) {
    let [r, a] = B(t, e);
    return {
        schema: "boolean",
        async: !1,
        _parse (n, i) {
            return typeof n != "boolean" ? k(i, "type", "boolean", r || "Invalid type", n) : J(n, a, i, "boolean");
        }
    };
}
function Et(t, e) {
    return {
        schema: "literal",
        literal: t,
        async: !1,
        _parse (r, a) {
            return r !== t ? k(a, "type", "literal", e || "Invalid type", r) : {
                output: r
            };
        }
    };
}
function ae(t, e) {
    return {
        schema: "native_enum",
        nativeEnum: t,
        async: !1,
        _parse (r, a) {
            return Object.values(t).includes(r) ? {
                output: r
            } : k(a, "type", "native_enum", e || "Invalid type", r);
        }
    };
}
function j(t, e) {
    let [r, a] = B(t, e);
    return {
        schema: "number",
        async: !1,
        _parse (n, i) {
            return typeof n != "number" ? k(i, "type", "number", r || "Invalid type", n) : J(n, a, i, "number");
        }
    };
}
function z(t, e, r) {
    let [a, n] = B(e, r), i;
    return {
        schema: "object",
        object: t,
        async: !1,
        _parse (s, u) {
            if (!s || typeof s != "object") return k(u, "type", "object", a || "Invalid type", s);
            i = i || Object.entries(t);
            let l, o = {};
            for (let [c, f] of i){
                let h = s[c], p = f._parse(h, u);
                if (p.issues) {
                    let m = {
                        schema: "object",
                        input: s,
                        key: c,
                        value: h
                    };
                    for (let d of p.issues)d.path ? d.path.unshift(m) : d.path = [
                        m
                    ], l == null || l.push(d);
                    if (l || (l = p.issues), u != null && u.abortEarly) break;
                } else o[c] = p.output;
            }
            return l ? {
                issues: l
            } : J(o, n, u, "object");
        }
    };
}
function w(t) {
    return {
        schema: "optional",
        wrapped: t,
        async: !1,
        _parse (e, r) {
            return e === void 0 ? {
                output: e
            } : t._parse(e, r);
        }
    };
}
function I(t, e) {
    let [r, a] = B(t, e);
    return {
        schema: "string",
        async: !1,
        _parse (n, i) {
            return typeof n != "string" ? k(i, "type", "string", r || "Invalid type", n) : J(n, a, i, "string");
        }
    };
}
function Ue(t, e, r, a) {
    if (typeof e == "object" && !Array.isArray(e)) {
        let [s, u] = B(r, a);
        return [
            t,
            e,
            s,
            u
        ];
    }
    let [n, i] = B(e, r);
    return [
        I(),
        t,
        n,
        i
    ];
}
var Fe = [
    "__proto__",
    "prototype",
    "constructor"
];
function Ot(t, e, r, a) {
    let [n, i, s, u] = Ue(t, e, r, a);
    return {
        schema: "record",
        record: {
            key: n,
            value: i
        },
        async: !1,
        _parse (l, o) {
            if (!l || typeof l != "object") return k(o, "type", "record", s || "Invalid type", l);
            let c, f = {};
            for (let [h, p] of Object.entries(l))if (!Fe.includes(h)) {
                let m, d = n._parse(h, {
                    origin: "key",
                    abortEarly: o == null ? void 0 : o.abortEarly,
                    abortPipeEarly: o == null ? void 0 : o.abortPipeEarly
                });
                if (d.issues) {
                    m = {
                        schema: "record",
                        input: l,
                        key: h,
                        value: p
                    };
                    for (let v of d.issues)v.path = [
                        m
                    ], c == null || c.push(v);
                    if (c || (c = d.issues), o != null && o.abortEarly) break;
                }
                let y = i._parse(p, o);
                if (y.issues) {
                    m = m || {
                        schema: "record",
                        input: l,
                        key: h,
                        value: p
                    };
                    for (let v of y.issues)v.path ? v.path.unshift(m) : v.path = [
                        m
                    ], c == null || c.push(v);
                    if (c || (c = y.issues), o != null && o.abortEarly) break;
                }
                !d.issues && !y.issues && (f[d.output] = y.output);
            }
            return c ? {
                issues: c
            } : J(f, u, o, "record");
        }
    };
}
function Be(t, e, r) {
    if (typeof t == "object" && !Array.isArray(t)) {
        let [i, s] = B(e, r);
        return [
            t,
            i,
            s
        ];
    }
    let [a, n] = B(t, e);
    return [
        void 0,
        a,
        n
    ];
}
function zt(t, e, r, a) {
    let [n, i, s] = Be(e, r, a);
    return {
        schema: "tuple",
        tuple: {
            items: t,
            rest: n
        },
        async: !1,
        _parse (u, l) {
            if (!Array.isArray(u) || !n && t.length !== u.length || n && t.length > u.length) return k(l, "type", "tuple", i || "Invalid type", u);
            let o, c = [];
            for(let f = 0; f < t.length; f++){
                let h = u[f], p = t[f]._parse(h, l);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: u,
                        key: f,
                        value: h
                    };
                    for (let d of p.issues)d.path ? d.path.unshift(m) : d.path = [
                        m
                    ], o == null || o.push(d);
                    if (o || (o = p.issues), l != null && l.abortEarly) break;
                } else c[f] = p.output;
            }
            if (n) for(let f = t.length; f < u.length; f++){
                let h = u[f], p = n._parse(h, l);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: u,
                        key: f,
                        value: h
                    };
                    for (let d of p.issues)d.path ? d.path.unshift(m) : d.path = [
                        m
                    ], o == null || o.push(d);
                    if (o || (o = p.issues), l != null && l.abortEarly) break;
                } else c[f] = p.output;
            }
            return o ? {
                issues: o
            } : J(c, s, l, "tuple");
        }
    };
}
function ft(t, e) {
    return {
        schema: "union",
        union: t,
        async: !1,
        _parse (r, a) {
            let n, i;
            for (let s of t){
                let u = s._parse(r, a);
                if (u.issues) if (n) for (let l of u.issues)n.push(l);
                else n = u.issues;
                else {
                    i = [
                        u.output
                    ];
                    break;
                }
            }
            return i ? {
                output: i[0]
            } : k(a, "type", "union", e || "Invalid type", r, n);
        }
    };
}
function X(t, e, r) {
    let [a, n] = B(e, r);
    return z(t.reduce((i, s)=>({
            ...i,
            ...s.object
        }), {}), a, n);
}
function ie(t, e, r, a) {
    let [n, i] = B(r, a);
    return z(Object.entries(t.object).reduce((s, [u, l])=>e.includes(u) ? s : {
            ...s,
            [u]: l
        }, {}), n, i);
}
function se(t, e, r) {
    let a = t._parse(e, r);
    return a.issues ? {
        success: !1,
        error: new Ne(a.issues),
        issues: a.issues
    } : {
        success: !0,
        data: a.output,
        output: a.output
    };
}
function ht(t, e) {
    return (r)=>r > t ? {
            issue: {
                validation: "max_value",
                message: e || "Invalid value",
                input: r
            }
        } : {
            output: r
        };
}
function dt(t, e) {
    return (r)=>r < t ? {
            issue: {
                validation: "min_value",
                message: e || "Invalid value",
                input: r
            }
        } : {
            output: r
        };
}
var Ve = Object.create, St = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, fe = Object.getOwnPropertyNames, ke = Object.getPrototypeOf, Ce = Object.prototype.hasOwnProperty, qe = (t, e, r)=>e in t ? St(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r, et = (t, e)=>function() {
        return e || (0, t[fe(t)[0]])((e = {
            exports: {}
        }).exports, e), e.exports;
    }, Re = (t, e, r, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let n of fe(e))!Ce.call(t, n) && n !== r && St(t, n, {
        get: ()=>e[n],
        enumerable: !(a = Pe(e, n)) || a.enumerable
    });
    return t;
}, $e = (t, e, r)=>(r = t != null ? Ve(ke(t)) : {}, Re(e || !t || !t.__esModule ? St(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t)), Je = (t, e, r)=>(qe(t, typeof e != "symbol" ? e + "" : e, r), r), He = et({
    "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.copy = void 0;
        var e = (r, a, n = 0, i = 0, s = r.width - n, u = r.height - i, l = 0, o = 0)=>{
            if (n = n | 0, i = i | 0, s = s | 0, u = u | 0, l = l | 0, o = o | 0, s <= 0 || u <= 0) return;
            let c = new Uint32Array(r.data.buffer), f = new Uint32Array(a.data.buffer);
            for(let h = 0; h < u; h++){
                let p = i + h;
                if (p < 0 || p >= r.height) continue;
                let m = o + h;
                if (!(m < 0 || m >= a.height)) for(let d = 0; d < s; d++){
                    let y = n + d;
                    if (y < 0 || y >= r.width) continue;
                    let v = l + d;
                    if (v < 0 || v >= a.width) continue;
                    let A = p * r.width + y, g = m * a.width + v;
                    f[g] = c[A];
                }
            }
        };
        t.copy = e;
    }
}), We = et({
    "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateImageFactory = (e = [
            0,
            0,
            0,
            0
        ], r = 4)=>{
            if (r = Math.floor(r), isNaN(r) || r < 1) throw TypeError("channels should be a positive non-zero number");
            if (!("length" in e) || e.length < r) throw TypeError(`fill should be iterable with at least ${r} members`);
            e = new Uint8ClampedArray(e).slice(0, r);
            let a = e.every((i)=>i === 0);
            return (i, s, u)=>{
                if (i === void 0 || s === void 0) throw TypeError("Not enough arguments");
                if (i = Math.floor(i), s = Math.floor(s), isNaN(i) || i < 1 || isNaN(s) || s < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                let l = i * s * r;
                if (u === void 0 && (u = new Uint8ClampedArray(l)), u instanceof Uint8ClampedArray) {
                    if (u.length !== l) throw TypeError("Index or size is negative or greater than the allowed amount");
                    if (!a) for(let o = 0; o < s; o++)for(let c = 0; c < i; c++){
                        let f = (o * i + c) * r;
                        for(let h = 0; h < r; h++)u[f + h] = e[h];
                    }
                    return {
                        get width () {
                            return i;
                        },
                        get height () {
                            return s;
                        },
                        get data () {
                            return u;
                        }
                    };
                }
                throw TypeError("Expected data to be Uint8ClampedArray or undefined");
            };
        }, t.createImage = t.CreateImageFactory();
    }
}), Ge = et({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filters = void 0;
        var e = 14, r = (i, s)=>{
            if (i <= -s || i >= s || i == 0) return 0;
            let u = i * Math.PI;
            return Math.sin(u) / u * Math.sin(u / s) / (u / s);
        }, a = (i)=>Math.round(i * ((1 << e) - 1)), n = (i, s, u, l, o)=>{
            let c = o ? 2 : 3, f = 1 / u, h = Math.min(1, u), p = c / h, m = Math.floor((p + 1) * 2), d = new Int16Array((m + 2) * s), y = 0;
            for(let v = 0; v < s; v++){
                let A = (v + .5) * f + l, g = Math.max(0, Math.floor(A - p)), M = Math.min(i - 1, Math.ceil(A + p)), S = M - g + 1, C = new Float32Array(S), D = new Int16Array(S), V = 0, x = 0;
                for(let U = g; U <= M; U++){
                    let T = r((U + .5 - A) * h, c);
                    V += T, C[x] = T, x++;
                }
                let q = 0;
                for(let U = 0; U < C.length; U++){
                    let T = C[U] / V;
                    q += T, D[U] = a(T);
                }
                D[s >> 1] += a(1 - q);
                let b = 0;
                for(; b < D.length && D[b] === 0;)b++;
                let L = D.length - 1;
                for(; L > 0 && D[L] === 0;)L--;
                let mt = g + b, nt = L - b + 1;
                d[y++] = mt, d[y++] = nt, d.set(D.subarray(b, L + 1), y), y += nt;
            }
            return d;
        };
        t.filters = n;
    }
}), Ze = et({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convolve = void 0;
        var e = 14, r = (a, n, i, s, u, l)=>{
            let o = 0, c = 0;
            for(let f = 0; f < s; f++){
                let h = 0;
                for(let p = 0; p < u; p++){
                    let m = l[h++], d = o + m * 4 | 0, y = 0, v = 0, A = 0, g = 0;
                    for(let M = l[h++]; M > 0; M--){
                        let S = l[h++];
                        y = y + S * a[d] | 0, v = v + S * a[d + 1] | 0, A = A + S * a[d + 2] | 0, g = g + S * a[d + 3] | 0, d = d + 4 | 0;
                    }
                    n[c] = y + 8192 >> e, n[c + 1] = v + 8192 >> e, n[c + 2] = A + 8192 >> e, n[c + 3] = g + 8192 >> e, c = c + s * 4 | 0;
                }
                c = (f + 1) * 4 | 0, o = (f + 1) * i * 4 | 0;
            }
        };
        t.convolve = r;
    }
}), Ke = et({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.lanczos2 = t.lanczos = void 0;
        var e = He(), r = We(), a = Ge(), n = Ze(), i = (l, o, c = !1)=>{
            let f = o.width / l.width, h = o.height / l.height, p = a.filters(l.width, o.width, f, 0, c), m = a.filters(l.height, o.height, h, 0, c), d = new Uint8ClampedArray(o.width * l.height * 4);
            n.convolve(l.data, d, l.width, l.height, o.width, p), n.convolve(d, o.data, l.height, o.width, o.height, m);
        }, s = (l, o, c = 0, f = 0, h = l.width - c, p = l.height - f, m = 0, d = 0, y = o.width - m, v = o.height - d)=>{
            if (c = c | 0, f = f | 0, h = h | 0, p = p | 0, m = m | 0, d = d | 0, y = y | 0, v = v | 0, h <= 0 || p <= 0 || y <= 0 || v <= 0) return;
            if (c === 0 && f === 0 && h === l.width && p === l.height && m === 0 && d === 0 && y === o.width && v === o.height) {
                i(l, o);
                return;
            }
            let A = r.createImage(h, p), g = r.createImage(y, v);
            e.copy(l, A, c, f), i(A, g), e.copy(g, o, 0, 0, g.width, g.height, m, d);
        };
        t.lanczos = s;
        var u = (l, o, c = 0, f = 0, h = l.width - c, p = l.height - f, m = 0, d = 0, y = o.width - m, v = o.height - d)=>{
            if (c = c | 0, f = f | 0, h = h | 0, p = p | 0, m = m | 0, d = d | 0, y = y | 0, v = v | 0, h <= 0 || p <= 0 || y <= 0 || v <= 0) return;
            if (c === 0 && f === 0 && h === l.width && p === l.height && m === 0 && d === 0 && y === o.width && v === o.height) {
                i(l, o, !0);
                return;
            }
            let A = r.createImage(h, p), g = r.createImage(y, v);
            e.copy(l, A, c, f), i(A, g, !0), e.copy(g, o, 0, 0, g.width, g.height, m, d);
        };
        t.lanczos2 = u;
    }
});
var he = ((t)=>(t.Bounce = "bounce", t.Normal = "normal", t))(he || {}), Ye = ae(he), de = z({
    autoplay: w(ct()),
    defaultTheme: w(I()),
    direction: w(ft([
        Et(1),
        Et(-1)
    ])),
    hover: w(ct()),
    id: I(),
    intermission: w(j()),
    loop: w(ft([
        ct(),
        j()
    ])),
    playMode: w(Ye),
    speed: w(j()),
    themeColor: w(I())
}), Xe = z({
    animations: Y(I()),
    id: I()
}), Qe = z({
    activeAnimationId: w(I()),
    animations: Y(de),
    author: w(I()),
    custom: w(Ot(I(), ne())),
    description: w(I()),
    generator: w(I()),
    keywords: w(I()),
    revision: w(j()),
    themes: w(Y(Xe)),
    states: w(Y(I())),
    version: w(I())
}), tr = ie(de, [
    "id"
]), G = z({
    state: I()
}), er = G, rr = X([
    G,
    z({
        ms: j()
    })
]), nr = X([
    G,
    z({
        count: j()
    })
]), ar = G, ir = G, sr = G, or = X([
    G,
    z({
        threshold: w(Y(j([
            dt(0),
            ht(1)
        ])))
    })
]), ur = z({
    onAfter: w(rr),
    onClick: w(er),
    onComplete: w(sr),
    onEnter: w(nr),
    onMouseEnter: w(ar),
    onMouseLeave: w(ir),
    onShow: w(or)
}), lr = X([
    tr,
    z({
        playOnScroll: w(zt([
            j([
                dt(0),
                ht(1)
            ]),
            j([
                dt(0),
                ht(1)
            ])
        ])),
        segments: w(ft([
            zt([
                j(),
                j()
            ]),
            I()
        ]))
    })
]);
X([
    ur,
    z({
        animationId: w(I()),
        playbackSettings: lr
    })
]);
var dr = {
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    bmp: "image/bmp",
    svg: "image/svg+xml",
    webp: "image/webp",
    mpeg: "audio/mpeg",
    mp3: "audio/mp3"
}, oe = {
    jpeg: [
        255,
        216,
        255
    ],
    png: [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ],
    gif: [
        71,
        73,
        70
    ],
    bmp: [
        66,
        77
    ],
    webp: [
        82,
        73,
        70,
        70,
        87,
        69,
        66,
        80
    ],
    svg: [
        60,
        63,
        120
    ],
    mp3: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ],
    mpeg: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ]
};
var pr = (t)=>{
    let e = null, r = [];
    if (!t) return null;
    let a = t.substring(t.indexOf(",") + 1);
    ("TURBOPACK compile-time value", "undefined") > "u" ? e = Buffer.from(a, "base64").toString("binary") : e = atob(a);
    let n = new Uint8Array(e.length);
    for(let i = 0; i < e.length; i += 1)n[i] = e.charCodeAt(i);
    r = Array.from(n.subarray(0, 8));
    for(let i in oe){
        let s = oe[i];
        if (s && r.every((u, l)=>u === s[l])) return dr[i];
    }
    return null;
};
var Mt = class extends Error {
    constructor(t, e){
        super(t), Je(this, "code"), this.name = "[dotlottie-js]", this.code = e;
    }
};
function pe(t) {
    let e;
    if (("TURBOPACK compile-time value", "undefined") > "u") e = Buffer.from(t).toString("base64");
    else {
        let a = Array.prototype.map.call(t, (n)=>String.fromCharCode(n)).join("");
        e = window.btoa(a);
    }
    return `data:${pr(e)};base64,${e}`;
}
function ue(t) {
    return "w" in t && "h" in t && !("xt" in t) && "p" in t;
}
function pt(t) {
    return !("h" in t) && !("w" in t) && "p" in t && "e" in t && "u" in t && "id" in t;
}
async function rt(t, e = ()=>!0) {
    if (!(t instanceof Uint8Array)) throw new Mt("DotLottie not found", "INVALID_DOTLOTTIE");
    return await new Promise((a, n)=>{
        ee(t, {
            filter: e
        }, (i, s)=>{
            i && n(i), a(s);
        });
    });
}
async function Dt(t, e, r) {
    if (!(t instanceof Uint8Array)) throw new Mt("DotLottie not found", "INVALID_DOTLOTTIE");
    return (await rt(t, (n)=>n.name === e && (!r || r(n))))[e];
}
async function mr(t) {
    let e = "manifest.json", a = (await rt(t, (n)=>n.name === e))[e];
    if (!(typeof a > "u")) return JSON.parse(W(a, !1));
}
async function vr(t) {
    if (!(t instanceof Uint8Array)) return {
        success: !1,
        error: "DotLottie not found"
    };
    let e = await mr(t);
    if (typeof e > "u") return {
        success: !1,
        error: "Invalid .lottie file, manifest.json is missing"
    };
    let r = se(Qe, e);
    return r.success ? {
        success: !0
    } : {
        success: !1,
        error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(re(r.error).nested, null, 2)}`
    };
}
async function Yr(t) {
    let e = new Uint8Array(t), r = await vr(e);
    if (r.error) throw new Mt(r.error, "INVALID_DOTLOTTIE");
    return e;
}
async function yr(t, e) {
    let r = await rt(t, (n)=>{
        let i = n.name.replace("audio/", "");
        return n.name.startsWith("audio/") && (!e || e({
            ...n,
            name: i
        }));
    }), a = {};
    for(let n in r){
        let i = r[n];
        if (i instanceof Uint8Array) {
            let s = n.replace("audio/", "");
            a[s] = pe(i);
        }
    }
    return a;
}
async function gr(t, e) {
    var n;
    let r = new Map;
    for (let [i, s] of Object.entries(e))for (let u of s.assets || [])if (pt(u)) {
        let l = u.p;
        r.has(l) || r.set(l, new Set), (n = r.get(l)) == null || n.add(i);
    }
    let a = await yr(t, (i)=>r.has(i.name));
    for (let [i, s] of r){
        let u = a[i];
        if (u) for (let l of s){
            let o = e[l];
            for (let c of (o == null ? void 0 : o.assets) || [])pt(c) && c.p === i && (c.p = u, c.u = "", c.e = 1);
        }
    }
}
async function _r(t, e) {
    let r = await rt(t, (n)=>{
        let i = n.name.replace("images/", "");
        return n.name.startsWith("images/") && (!e || e({
            ...n,
            name: i
        }));
    }), a = {};
    for(let n in r){
        let i = r[n];
        if (i instanceof Uint8Array) {
            let s = n.replace("images/", "");
            a[s] = pe(i);
        }
    }
    return a;
}
async function wr(t, e) {
    var n;
    let r = new Map;
    for (let [i, s] of Object.entries(e))for (let u of s.assets || [])if (ue(u)) {
        let l = u.p;
        r.has(l) || r.set(l, new Set), (n = r.get(l)) == null || n.add(i);
    }
    let a = await _r(t, (i)=>r.has(i.name));
    for (let [i, s] of r){
        let u = a[i];
        if (u) for (let l of s){
            let o = e[l];
            for (let c of (o == null ? void 0 : o.assets) || [])ue(c) && c.p === i && (c.p = u, c.u = "", c.e = 1);
        }
    }
}
async function Xr(t, e, { inlineAssets: r } = {}, a) {
    let n = `animations/${e}.json`, i = await Dt(t, n, a);
    if (typeof i > "u") return;
    let s = JSON.parse(W(i, !1));
    if (!r) return s;
    let u = {
        [e]: s
    };
    return await wr(t, u), await gr(t, u), s;
}
async function Qr(t, e, r) {
    let a = `themes/${e}.json`, n = await Dt(t, a, r);
    if (!(typeof n > "u")) return JSON.parse(W(n, !1));
}
async function tn(t, e) {
    let r = {}, a = await rt(t, (n)=>{
        let i = n.name.replace("states/", "").replace(".json", "");
        return n.name.startsWith("states/") && (!e || e({
            ...n,
            name: i
        }));
    });
    for(let n in a){
        let i = a[n];
        if (i instanceof Uint8Array) {
            let s = n.replace("states/", "").replace(".json", "");
            r[s] = W(i, !1);
        }
    }
    return r;
}
async function en(t, e, r) {
    let a = `states/${e}.json`, n = await Dt(t, a, r);
    return typeof n > "u" ? void 0 : JSON.parse(W(n, !1));
}
$e(Ke());
function on(t, e = "dotLottie-common") {
    return new Error(`[${e}]: ${t}`);
}
function un(t, e = "dotLottie-common", ...r) {
    console.error(`[${e}]:`, t, ...r);
}
function ln(t, e = "dotLottie-common", ...r) {
    console.warn(`[${e}]:`, t, ...r);
}
function cn(t = "") {
    let e = t.trim(), r = e.lastIndexOf("/"), a = e.substring(r + 1), n = a.indexOf(".");
    return n !== -1 ? a.substring(0, n) : a;
}
function kr(t) {
    return [
        "v",
        "ip",
        "op",
        "layers",
        "fr",
        "w",
        "h"
    ].every((r)=>Object.prototype.hasOwnProperty.call(t, r));
}
function fn(t) {
    let e = t.assets;
    return e ? e.some((r)=>pt(r)) : !1;
}
function hn(t) {
    try {
        let e = JSON.parse(t);
        return kr(e);
    } catch  {
        return !1;
    }
}
function dn(t, e) {
    let r = Object.keys(t).find((a)=>t[a] === e);
    if (r === void 0) throw new Error("Value not found in the object.");
    return r;
}
function pn(t) {
    return JSON.parse(JSON.stringify(t));
}
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-DCAKKOYV.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-74T7T5LL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>m
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)");
;
var m = class {
    _dotLottie;
    _animationsMap = new Map;
    _themeMap = new Map;
    _stateMachinesMap = new Map;
    _manifest;
    get dotLottie() {
        return this._dotLottie;
    }
    get animationsMap() {
        return this._animationsMap;
    }
    get themeMap() {
        return this._themeMap;
    }
    get stateMachinesMap() {
        return this._stateMachinesMap;
    }
    get manifest() {
        return this._manifest;
    }
    async loadFromUrl(i) {
        let t = await fetch(i, {
            method: "GET",
            mode: "cors"
        });
        if (!t.ok) throw new Error(`Failed to load dotLottie from ${i} with status ${t.status}`);
        let a = t.headers.get("content-type");
        if (a != null && a.includes("application/json")) {
            let e = await t.json();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(e)) throw new Error(`Invalid lottie JSON at ${i}`);
            let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(i);
            this._animationsMap.set(n, e);
            let p = {
                activeAnimationId: n,
                animations: [
                    {
                        id: n
                    }
                ]
            };
            this._manifest = p;
        } else {
            this._dotLottie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(await t.arrayBuffer());
            let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this._dotLottie);
            if (!e) throw new Error("Manifest not found");
            this._manifest = e;
        }
    }
    loadFromLottieJSON(i) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(i)) throw new Error("Invalid lottie JSON");
        let t = "my-animation";
        this._animationsMap.set(t, i);
        let a = {
            activeAnimationId: t,
            animations: [
                {
                    id: t
                }
            ]
        };
        this._manifest = a;
    }
    async loadFromArrayBuffer(i) {
        this._dotLottie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(i);
        let t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this._dotLottie);
        if (!t) throw new Error("Manifest not found");
        this._manifest = t;
    }
    async getAnimation(i) {
        if (this._animationsMap.get(i)) return this._animationsMap.get(i);
        if (!this._dotLottie) return;
        let t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(this._dotLottie, i, {
            inlineAssets: !0
        });
        return t && this._animationsMap.set(i, t), t;
    }
    async getTheme(i) {
        if (this._themeMap.get(i)) return this._themeMap.get(i);
        if (!this._dotLottie) return;
        let t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(this._dotLottie, i);
        return t && this._themeMap.set(i, t), t;
    }
    async getStateMachines() {
        if (!this._dotLottie) return;
        let i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(this._dotLottie);
        for(let t in i)if (t) {
            let a = i[t];
            if (a) {
                let e = JSON.parse(a);
                if (e) {
                    let n = e.descriptor.id;
                    this._stateMachinesMap.get(n) || this._stateMachinesMap.set(n, e);
                }
            }
        }
        return Array.from(this._stateMachinesMap.values());
    }
    async getStateMachine(i) {
        if (this._stateMachinesMap.get(i)) return this._stateMachinesMap.get(i);
        if (!this._dotLottie) return;
        let t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(this._dotLottie, i);
        return t && this._stateMachinesMap.set(t.descriptor.id, t), t;
    }
};
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-74T7T5LL.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-GSRQSB3U.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)");
;
async function r(t, o) {
    let [{ DotLottieStateMachineManager: a }] = await Promise.all([
        __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/dotlottie-state-machine-manager-2E7RUGJG.js [app-ssr] (ecmascript, async loader)")
    ]);
    if (!t.length) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No state machines available inside this .lottie!");
    return new a(t, o);
}
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-GSRQSB3U.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-BHJSY5WG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>g
]);
function a() {
    throw new Error("Cycle detected");
}
function d() {
    if (e > 1) e--;
    else {
        for(var t, i = !1; h !== void 0;){
            var o = h;
            for(h = void 0, c++; o !== void 0;){
                var n = o.o;
                if (o.o = void 0, o.f &= -3, !(8 & o.f) && S(o)) try {
                    o.c();
                } catch (_) {
                    i || (t = _, i = !0);
                }
                o = n;
            }
        }
        if (c = 0, e--, i) throw t;
    }
}
var r = void 0;
var h = void 0, e = 0, c = 0, u = 0;
function l(t) {
    if (r !== void 0) {
        var i = t.n;
        if (i === void 0 || i.t !== r) return i = {
            i: 0,
            S: t,
            p: r.s,
            n: void 0,
            t: r,
            e: void 0,
            x: void 0,
            r: i
        }, r.s !== void 0 && (r.s.n = i), r.s = i, t.n = i, 32 & r.f && t.S(i), i;
        if (i.i === -1) return i.i = 0, i.n !== void 0 && (i.n.p = i.p, i.p !== void 0 && (i.p.n = i.n), i.p = r.s, i.n = void 0, r.s.n = i, r.s = i), i;
    }
}
function s(t) {
    this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
s.prototype.h = function() {
    return !0;
};
s.prototype.S = function(t) {
    this.t !== t && t.e === void 0 && (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
s.prototype.U = function(t) {
    if (this.t !== void 0) {
        var i = t.e, o = t.x;
        i !== void 0 && (i.x = o, t.e = void 0), o !== void 0 && (o.e = i, t.x = void 0), t === this.t && (this.t = o);
    }
};
s.prototype.subscribe = function(t) {
    var i = this;
    return m(function() {
        var o = i.value, n = 32 & this.f;
        this.f &= -33;
        try {
            t(o);
        } finally{
            this.f |= n;
        }
    });
};
s.prototype.valueOf = function() {
    return this.value;
};
s.prototype.toString = function() {
    return this.value + "";
};
s.prototype.toJSON = function() {
    return this.value;
};
s.prototype.peek = function() {
    return this.v;
};
Object.defineProperty(s.prototype, "value", {
    get: function() {
        var t = l(this);
        return t !== void 0 && (t.i = this.i), this.v;
    },
    set: function(t) {
        if (r instanceof f && function() {
            throw new Error("Computed cannot have side-effects");
        }(), t !== this.v) {
            c > 100 && a(), this.v = t, this.i++, u++, e++;
            try {
                for(var i = this.t; i !== void 0; i = i.x)i.t.N();
            } finally{
                d();
            }
        }
    }
});
function y(t) {
    return new s(t);
}
function S(t) {
    for(var i = t.s; i !== void 0; i = i.n)if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !0;
    return !1;
}
function w(t) {
    for(var i = t.s; i !== void 0; i = i.n){
        var o = i.S.n;
        if (o !== void 0 && (i.r = o), i.S.n = i, i.i = -1, i.n === void 0) {
            t.s = i;
            break;
        }
    }
}
function b(t) {
    for(var i = t.s, o = void 0; i !== void 0;){
        var n = i.p;
        i.i === -1 ? (i.S.U(i), n !== void 0 && (n.n = i.n), i.n !== void 0 && (i.n.p = n)) : o = i, i.S.n = i.r, i.r !== void 0 && (i.r = void 0), i = n;
    }
    t.s = o;
}
function f(t) {
    s.call(this, void 0), this.x = t, this.s = void 0, this.g = u - 1, this.f = 4;
}
(f.prototype = new s).h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === u)) return !0;
    if (this.g = u, this.f |= 1, this.i > 0 && !S(this)) return this.f &= -2, !0;
    var t = r;
    try {
        w(this), r = this;
        var i = this.x();
        (16 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -17, this.i++);
    } catch (o) {
        this.v = o, this.f |= 16, this.i++;
    }
    return r = t, b(this), this.f &= -2, !0;
};
f.prototype.S = function(t) {
    if (this.t === void 0) {
        this.f |= 36;
        for(var i = this.s; i !== void 0; i = i.n)i.S.S(i);
    }
    s.prototype.S.call(this, t);
};
f.prototype.U = function(t) {
    if (this.t !== void 0 && (s.prototype.U.call(this, t), this.t === void 0)) {
        this.f &= -33;
        for(var i = this.s; i !== void 0; i = i.n)i.S.U(i);
    }
};
f.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(var t = this.t; t !== void 0; t = t.x)t.t.N();
    }
};
f.prototype.peek = function() {
    if (this.h() || a(), 16 & this.f) throw this.v;
    return this.v;
};
Object.defineProperty(f.prototype, "value", {
    get: function() {
        1 & this.f && a();
        var t = l(this);
        if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
        return this.v;
    }
});
function x(t) {
    var i = t.u;
    if (t.u = void 0, typeof i == "function") {
        e++;
        var o = r;
        r = void 0;
        try {
            i();
        } catch (n) {
            throw t.f &= -2, t.f |= 8, p(t), n;
        } finally{
            r = o, d();
        }
    }
}
function p(t) {
    for(var i = t.s; i !== void 0; i = i.n)i.S.U(i);
    t.x = void 0, t.s = void 0, x(t);
}
function T(t) {
    if (r !== this) throw new Error("Out-of-order effect");
    b(this), r = t, this.f &= -2, 8 & this.f && p(this), d();
}
function v(t) {
    this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
v.prototype.c = function() {
    var t = this.S();
    try {
        if (8 & this.f || this.x === void 0) return;
        var i = this.x();
        typeof i == "function" && (this.u = i);
    } finally{
        t();
    }
};
v.prototype.S = function() {
    1 & this.f && a(), this.f |= 1, this.f &= -9, x(this), w(this), e++;
    var t = r;
    return r = this, T.bind(this, t);
};
v.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = h, h = this);
};
v.prototype.d = function() {
    this.f |= 8, 1 & this.f || p(this);
};
function m(t) {
    var i = new v(t);
    try {
        i.c();
    } catch (o) {
        throw i.d(), o;
    }
    return i.d.bind(i);
}
var g = class {
    _state;
    _prevState;
    constructor(i){
        this._prevState = i, this._state = y(i);
    }
    setState(i) {
        this._prevState = this._state.value, this._state.value = i;
    }
    subscribe(i) {
        return this._state.subscribe((o)=>i(o, this._prevState));
    }
};
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-BHJSY5WG.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>W,
    "b",
    ()=>K,
    "c",
    ()=>G,
    "d",
    ()=>u,
    "e",
    ()=>Q,
    "f",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$74T7T5LL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-74T7T5LL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$GSRQSB3U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-GSRQSB3U.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$BHJSY5WG$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-BHJSY5WG.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)");
;
;
;
;
var U = {
    name: "@dotlottie/common",
    version: "0.7.11",
    type: "module",
    description: "",
    author: "Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",
    license: "MIT",
    engines: {
        node: ">18.0.0"
    },
    module: "dist/index.js",
    main: "dist/index.js",
    types: "dist/index.d.ts",
    files: [
        "dist"
    ],
    keywords: [],
    scripts: {
        build: "tsup",
        dev: "tsup --watch",
        lint: "eslint .",
        "type-check": "tsc --noEmit"
    },
    dependencies: {
        "@dotlottie/dotlottie-js": "^0.7.0",
        "@preact/signals-core": "^1.2.3",
        howler: "^2.2.3",
        "lottie-web": "^5.12.2",
        xstate: "^4.38.1"
    },
    devDependencies: {
        "@lottiefiles/lottie-types": "^1.2.0",
        "@types/howler": "^2.2.8",
        tsup: "^7.2.0",
        typescript: "^4.7.4"
    },
    publishConfig: {
        access: "public"
    }
};
var W = ((l)=>(l.Complete = "complete", l.DataFail = "data_fail", l.DataReady = "data_ready", l.Error = "error", l.Frame = "frame", l.Freeze = "freeze", l.LoopComplete = "loopComplete", l.Pause = "pause", l.Play = "play", l.Ready = "ready", l.Stop = "stop", l.VisibilityChange = "visibilityChange", l))(W || {}), K = ((d)=>(d.Completed = "completed", d.Error = "error", d.Fetching = "fetching", d.Frozen = "frozen", d.Initial = "initial", d.Loading = "loading", d.Paused = "paused", d.Playing = "playing", d.Ready = "ready", d.Stopped = "stopped", d))(K || {}), G = ((e)=>(e.Bounce = "bounce", e.Normal = "normal", e))(G || {}), u = {
    autoplay: !1,
    direction: 1,
    hover: !1,
    intermission: 0,
    loop: !1,
    playMode: "normal",
    speed: 1,
    defaultTheme: ""
}, Q = {
    activeStateId: "",
    autoplay: !1,
    currentState: "initial",
    frame: 0,
    seeker: 0,
    direction: 1,
    hover: !1,
    loop: !1,
    playMode: "normal",
    speed: 1,
    background: "transparent",
    intermission: 0,
    currentAnimationId: void 0,
    visibilityPercentage: 0
}, j = class {
    _lottie;
    _src;
    _animationConfig;
    _prevUserPlaybackOptions = {};
    _userPlaybackOptions;
    _hover = !1;
    _loop = !1;
    _counter = 0;
    _intermission = 0;
    _counterInterval = null;
    _container = null;
    _name;
    _mode = "normal";
    _background = "transparent";
    _animation;
    _defaultTheme;
    _activeAnimationId;
    _currentAnimationId;
    _testId;
    _listeners = new Map;
    _currentState = "initial";
    _stateBeforeFreeze = "initial";
    state = new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$BHJSY5WG$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"](Q);
    _light = !1;
    _worker = !1;
    _dotLottieLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$74T7T5LL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"];
    _activeStateId;
    _inInteractiveMode = !1;
    _scrollTicking = !1;
    _scrollCallback = void 0;
    _onShowIntersectionObserver = void 0;
    _visibilityPercentage = 0;
    _audios = [];
    _stateMachineManager;
    constructor(t, e, i){
        typeof t == "string" ? this._src = t : this._src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(t), i != null && i.testId && (this._testId = i.testId), this._defaultTheme = (i == null ? void 0 : i.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(i || {}), typeof (i == null ? void 0 : i.activeAnimationId) == "string" && (this._activeAnimationId = i.activeAnimationId), this._container = e || null, typeof (i == null ? void 0 : i.background) == "string" && this.setBackground(i.background), typeof (i == null ? void 0 : i.activeStateId) < "u" && (this._activeStateId = i.activeStateId);
        let { rendererSettings: n, ...o } = i || {};
        this._animationConfig = {
            loop: !1,
            autoplay: !1,
            renderer: "svg",
            rendererSettings: {
                clearCanvas: !0,
                progressiveLoad: !0,
                hideOnTransparent: !0,
                filterSize: {
                    width: "200%",
                    height: "200%",
                    x: "-50%",
                    y: "-50%"
                },
                ...n
            },
            ...o
        }, i != null && i.light && (this._light = i.light), i != null && i.worker && (this._worker = i.worker), this._listenToHover(), this._listenToVisibilityChange();
    }
    _listenToHover() {
        var i, n, o, a;
        let t = ()=>{
            this._hover && this.currentState !== "playing" && this.play();
        }, e = ()=>{
            this._hover && this.currentState === "playing" && this.stop();
        };
        (i = this._container) == null || i.removeEventListener("mouseenter", t), (n = this._container) == null || n.removeEventListener("mouseleave", e), (o = this._container) == null || o.addEventListener("mouseleave", e), (a = this._container) == null || a.addEventListener("mouseenter", t);
    }
    _onVisibilityChange() {
        !this._lottie || typeof document > "u" || (document.hidden && this.currentState === "playing" ? this.freeze() : this.currentState === "frozen" && this.unfreeze());
    }
    _listenToVisibilityChange() {
        typeof document < "u" && typeof document.hidden < "u" && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange());
    }
    _getOption(t) {
        var i;
        if (typeof this._userPlaybackOptions[t] < "u") return this._userPlaybackOptions[t];
        let e = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((n)=>n.id === this._currentAnimationId);
        return e && typeof e[t] < "u" ? e[t] : u[t];
    }
    _getPlaybackOptions() {
        let t = {};
        for(let e in u)typeof u[e] < "u" && (t[e] = this._getOption(e));
        return t;
    }
    _setPlayerState(t) {
        var i, n, o;
        let e = t(this._getPlaybackOptions());
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]._parse(e);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(`Invalid PlaybackOptions, ${JSON.stringify(e, null, 2)}`);
            return;
        }
        typeof e.defaultTheme < "u" && (this._defaultTheme = e.defaultTheme), typeof e.playMode < "u" && (this._mode = e.playMode), typeof e.intermission < "u" && (this._intermission = e.intermission), typeof e.hover < "u" && (this._hover = e.hover), typeof e.loop < "u" && (this.clearCountTimer(), this._loop = e.loop, this._counter = 0, (i = this._lottie) == null || i.setLoop(typeof e.loop == "number" ? !0 : e.loop)), typeof e.speed < "u" && ((n = this._lottie) == null || n.setSpeed(e.speed)), typeof e.autoplay < "u" && this._lottie && (this._lottie.autoplay = e.autoplay), typeof e.direction < "u" && ((o = this._lottie) == null || o.setDirection(e.direction));
    }
    _getOptionsFromAnimation(t) {
        let { id: e, ...i } = t;
        return {
            ...u,
            ...i
        };
    }
    _updateTestData() {
        !this._testId || !this._lottie || (window.dotLottiePlayer || (window.dotLottiePlayer = {
            [this._testId]: {}
        }), window.dotLottiePlayer[this._testId] = {
            direction: this._lottie.playDirection,
            currentState: this._currentState,
            loop: this.loop,
            mode: this._mode,
            speed: this._lottie.playSpeed
        });
    }
    setContainer(t) {
        t !== this._container && (this._container = t, this.setBackground(this._background), this._listenToHover());
    }
    get currentState() {
        return this._currentState;
    }
    clearCountTimer() {
        this._counterInterval && clearInterval(this._counterInterval);
    }
    setCurrentState(t) {
        this._currentState = t, this._notify(), this._updateTestData();
    }
    static isPathJSON(t) {
        var e;
        return ((e = t.split(".").pop()) == null ? void 0 : e.toLowerCase()) === "json";
    }
    get src() {
        return this._src;
    }
    updateSrc(t) {
        this._src !== t && (typeof t == "string" ? this._src = t : this._src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(t), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load());
    }
    get intermission() {
        return this._intermission;
    }
    get hover() {
        return this._hover;
    }
    setHover(t) {
        typeof t == "boolean" && (this._hover = t, this._userPlaybackOptions.hover = t, this._notify());
    }
    setIntermission(t) {
        this._intermission = t, this._userPlaybackOptions.intermission = t, this._notify();
    }
    get mode() {
        return this._mode;
    }
    get animations() {
        return this._dotLottieLoader.animationsMap;
    }
    get themes() {
        return this._dotLottieLoader.themeMap;
    }
    setMode(t) {
        typeof t == "string" && (this._mode = t, this._userPlaybackOptions.playMode = t, this._setPlayerState(()=>({
                playMode: t
            })), this._notify(), this._updateTestData());
    }
    get container() {
        if (this._container) return this._container;
    }
    goToAndPlay(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("goToAndPlay() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndPlay(t, e, i), this.setCurrentState("playing");
    }
    goToAndStop(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("goToAndStop() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndStop(t, e, i), this.setCurrentState("stopped");
    }
    seek(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("seek() Can't use whilst loading.");
            return;
        }
        let e = t;
        typeof e == "number" && (e = Math.round(e));
        let i = /^(\d+)(%?)$/u.exec(e.toString());
        if (!i) return;
        let n = i[2] === "%" ? this.totalFrames * Number(i[1]) / 100 : i[1];
        n !== void 0 && (this._lottie.goToAndPlay(n, !0), this.currentState === "playing" ? this.play() : this.currentState === "frozen" ? this.freeze() : this.pause());
    }
    _areNumbersInRange(t, e) {
        return t >= 0 && t <= 1 && e >= 0 && e <= 1;
    }
    _updatePosition(t, e, i$1) {
        let [n, o] = t != null ? t : [
            0,
            this.totalFrames - 1
        ], [a, h] = e != null ? e : [
            0,
            1
        ];
        if (!this._areNumbersInRange(a, h)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("threshold values must be between 0 and 1");
            return;
        }
        if (this.container) {
            let { height: f, top: p } = this.container.getBoundingClientRect(), d = window.innerHeight - p, m = window.innerHeight + f, l = d / m, _ = n + Math.round((l - a) / (h - a) * (o - n));
            i$1 && i$1(l), this.goToAndStop(_, !0), (_ >= o || l >= h) && this._handleAnimationComplete();
        }
        this._scrollTicking = !1;
    }
    _requestTick(t, e, i) {
        this._scrollTicking || (requestAnimationFrame(()=>this._updatePosition(t, e, i)), this._scrollTicking = !0);
    }
    playOnScroll(t) {
        this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = ()=>this._requestTick(t == null ? void 0 : t.segments, t == null ? void 0 : t.threshold, t == null ? void 0 : t.positionCallback), window.addEventListener("scroll", this._scrollCallback);
    }
    stopPlayOnScroll() {
        this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0);
    }
    stopPlayOnShow() {
        this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0);
    }
    addIntersectionObserver(t) {
        if (!this.container) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("Can't play on show, player container element not available.");
        let e = {
            root: null,
            rootMargin: "0px",
            threshold: t != null && t.threshold ? t.threshold : [
                0,
                1
            ]
        }, i = (n)=>{
            n.forEach((o)=>{
                var a, h;
                this._visibilityPercentage = o.intersectionRatio * 100, o.isIntersecting ? (t != null && t.callbackOnIntersect && t.callbackOnIntersect(this._visibilityPercentage), (a = this._container) == null || a.dispatchEvent(new Event("visibilityChange"))) : t != null && t.callbackOnIntersect && (t.callbackOnIntersect(0), (h = this._container) == null || h.dispatchEvent(new Event("visibilityChange")));
            });
        };
        this._onShowIntersectionObserver = new IntersectionObserver(i, e), this._onShowIntersectionObserver.observe(this.container);
    }
    playOnShow(t) {
        var e;
        if (this.stop(), !this.container) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("Can't play on show, player container element not available.");
        this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
            threshold: (e = t == null ? void 0 : t.threshold) != null ? e : [],
            callbackOnIntersect: (i)=>{
                i === 0 ? this.pause() : this.play();
            }
        });
    }
    _validatePlaybackOptions(t) {
        if (!t) return {};
        let e = {};
        for (let [i, n] of Object.entries(t))switch(i){
            case "autoplay":
                typeof n == "boolean" && (e.autoplay = n);
                break;
            case "direction":
                typeof n == "number" && [
                    1,
                    -1
                ].includes(n) && (e.direction = n);
                break;
            case "loop":
                (typeof n == "boolean" || typeof n == "number") && (e.loop = n);
                break;
            case "playMode":
                typeof n == "string" && [
                    "normal",
                    "bounce"
                ].includes(n) && (e.playMode = n);
                break;
            case "speed":
                typeof n == "number" && (e.speed = n);
                break;
            case "themeColor":
                typeof n == "string" && (e.themeColor = n);
                break;
            case "hover":
                typeof n == "boolean" && (e.hover = n);
                break;
            case "intermission":
                typeof n == "number" && (e.intermission = n);
                break;
            case "defaultTheme":
                typeof n == "string" && (e.defaultTheme = n);
                break;
        }
        return this._requireValidPlaybackOptions(e), e;
    }
    _requireAnimationsInTheManifest() {
        var t;
        if (!((t = this._dotLottieLoader.manifest) != null && t.animations.length)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No animations found in manifest.");
    }
    _requireAnimationsToBeLoaded() {
        if (this._dotLottieLoader.animationsMap.size === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No animations have been loaded.");
    }
    async play(t, e) {
        var i, n;
        if ([
            "initial",
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("Player unable to play whilst loading.");
            return;
        }
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !t) {
            this._lottie.playDirection === -1 && this._lottie.currentFrame === 0 ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
            return;
        }
        if (typeof t == "number") {
            let o = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations[t];
            if (!o) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
            typeof e == "function" ? await this.render({
                id: o.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(o))
            }) : await this.render({
                id: o.id
            });
        }
        if (typeof t == "string") {
            let o = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.animations.find((a)=>a.id === t);
            if (!o) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
            typeof e == "function" ? await this.render({
                id: o.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(o))
            }) : await this.render({
                id: o.id
            });
        }
    }
    playSegments(t, e) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("playSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.playSegments(t, e), this.setCurrentState("playing");
    }
    resetSegments(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("resetSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.resetSegments(t);
    }
    togglePlay() {
        this.currentState === "playing" ? this.pause() : this.play();
    }
    _getAnimationByIdOrIndex(t) {
        var e, i;
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), typeof t == "number") {
            let n = (e = this._dotLottieLoader.manifest) == null ? void 0 : e.animations[t];
            if (!n) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
            return n;
        }
        if (typeof t == "string") {
            let n = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((o)=>o.id === t);
            if (!n) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
            return n;
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("first param must be a number or string");
    }
    get activeAnimationId() {
        return this._getActiveAnimationId();
    }
    get currentAnimationId() {
        return this._currentAnimationId;
    }
    get activeStateId() {
        return this._activeStateId;
    }
    async _startInteractivity(t) {
        if (!this._inInteractiveMode) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
            return;
        }
        if (this._dotLottieLoader.stateMachinesMap.size === 0 && await this._dotLottieLoader.getStateMachines(), this._dotLottieLoader.stateMachinesMap.size === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No interactivity states are available.");
        if (t === "undefined") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("stateId is not specified.");
        this._stateMachineManager || (this._stateMachineManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$GSRQSB3U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(t);
    }
    enterInteractiveMode(t) {
        var e;
        if (t) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
            ...this._userPlaybackOptions
        }), this._inInteractiveMode && ((e = this._stateMachineManager) == null || e.stop()), this._activeStateId = t, this._inInteractiveMode = !0, this._startInteractivity(t);
        else throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("stateId must be a non-empty string.");
    }
    exitInteractiveMode() {
        var t;
        this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", (t = this._stateMachineManager) == null || t.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
            ...this._prevUserPlaybackOptions
        }, this._prevUserPlaybackOptions = {}, this.reset());
    }
    reset() {
        var i;
        let t = this._getActiveAnimationId(), e = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((n)=>n.id === t);
        if (this._inInteractiveMode && this.exitInteractiveMode(), !e) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
        this.play(t);
    }
    previous(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("manifest not found.");
        if (this._inInteractiveMode) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("previous() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    next(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("manifest not found.");
        if (this._inInteractiveMode) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("next() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e + 1) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    getManifest() {
        return this._dotLottieLoader.manifest;
    }
    resize() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("resize() Can't use whilst loading.");
            return;
        }
        this._lottie.resize();
    }
    stop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("stop() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._counter = 0, this._setPlayerState(()=>({
                direction: this._getOption("direction")
            })), this._lottie.stop(), this.setCurrentState("stopped");
    }
    pause() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("pause() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused");
    }
    freeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("freeze() Can't use whilst loading.");
            return;
        }
        this.currentState !== "frozen" && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen");
    }
    unfreeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("unfreeze() Can't use whilst loading.");
            return;
        }
        this._stateBeforeFreeze === "playing" ? this.play() : this.pause();
    }
    destroy() {
        var t, e;
        (t = this._container) != null && t.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach((i)=>{
            i.unload();
        }), this._audios = []), this.clearCountTimer(), typeof document < "u" && document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()), this._counter = 0, (e = this._lottie) == null || e.destroy(), this._lottie = void 0;
    }
    getAnimationInstance() {
        return this._lottie;
    }
    static getLottieWebVersion() {
        return `${U.dependencies["lottie-web"]}`;
    }
    addEventListener(t, e) {
        var i$1, n, o;
        this._listeners.has(t) || this._listeners.set(t, new Set), (i$1 = this._listeners.get(t)) == null || i$1.add(e);
        try {
            t === "complete" ? (n = this._container) == null || n.addEventListener(t, e) : (o = this._lottie) == null || o.addEventListener(t, e);
        } catch (a) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(`addEventListener ${a}`);
        }
    }
    getState() {
        var t, e, i, n, o, a, h;
        return {
            autoplay: (e = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e : !1,
            currentState: this._currentState,
            frame: this._frame,
            visibilityPercentage: this._visibilityPercentage,
            seeker: this._seeker,
            direction: (n = (i = this._lottie) == null ? void 0 : i.playDirection) != null ? n : 1,
            hover: this._hover,
            loop: this._loop || !1,
            playMode: this._mode,
            speed: (a = (o = this._lottie) == null ? void 0 : o.playSpeed) != null ? a : 1,
            background: this._background,
            intermission: this._intermission,
            defaultTheme: this._defaultTheme,
            currentAnimationId: this._currentAnimationId,
            activeStateId: (h = this._activeStateId) != null ? h : ""
        };
    }
    _notify() {
        this.state.setState(this.getState());
    }
    get totalFrames() {
        var t;
        return ((t = this._lottie) == null ? void 0 : t.totalFrames) || 0;
    }
    get direction() {
        return this._lottie ? this._lottie.playDirection : 1;
    }
    setDirection(t) {
        this._requireValidDirection(t), this._setPlayerState(()=>({
                direction: t
            })), this._userPlaybackOptions.direction = t;
    }
    get speed() {
        var t;
        return ((t = this._lottie) == null ? void 0 : t.playSpeed) || 1;
    }
    setSpeed(t) {
        this._requireValidSpeed(t), this._setPlayerState(()=>({
                speed: t
            })), this._userPlaybackOptions.speed = t;
    }
    get autoplay() {
        var t, e;
        return (e = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e : !1;
    }
    setAutoplay(t) {
        if (this._requireValidAutoplay(t), !this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("setAutoplay() Can't use whilst loading.");
            return;
        }
        this._setPlayerState(()=>({
                autoplay: t
            })), this._userPlaybackOptions.autoplay = t;
    }
    toggleAutoplay() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("toggleAutoplay() Can't use whilst loading.");
            return;
        }
        this.setAutoplay(!this._lottie.autoplay);
    }
    get defaultTheme() {
        return this._defaultTheme;
    }
    setDefaultTheme(t) {
        this._setPlayerState(()=>({
                defaultTheme: t
            })), this._userPlaybackOptions.defaultTheme = t, this._animation && this.render();
    }
    get loop() {
        return this._loop;
    }
    setLoop(t) {
        this._requireValidLoop(t), this._setPlayerState(()=>({
                loop: t
            })), this._userPlaybackOptions.loop = t;
    }
    toggleLoop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("toggleLoop() Can't use whilst loading.");
            return;
        }
        this.setLoop(!this._loop);
    }
    get background() {
        return this._background;
    }
    setBackground(t) {
        this._requireValidBackground(t), this._background = t, this._container && (this._container.style.backgroundColor = t);
    }
    get _frame() {
        return this._lottie ? this.currentState === "completed" ? this.direction === -1 ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0;
    }
    get _seeker() {
        return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0;
    }
    async revertToManifestValues(t) {
        var n;
        let e;
        !Array.isArray(t) || t.length === 0 ? e = [
            "autoplay",
            "defaultTheme",
            "direction",
            "hover",
            "intermission",
            "loop",
            "playMode",
            "speed",
            "activeAnimationId"
        ] : e = t;
        let i = !1;
        if (e.includes("activeAnimationId")) {
            let o = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.activeAnimationId, a = this._getAnimationByIdOrIndex(o || 0);
            this._activeAnimationId = o, await this._setCurrentAnimation(a.id), i = !0;
        }
        e.forEach((o)=>{
            switch(o){
                case "autoplay":
                    delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                    break;
                case "defaultTheme":
                    delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                    break;
                case "direction":
                    delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                    break;
                case "hover":
                    delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                    break;
                case "intermission":
                    delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                    break;
                case "loop":
                    delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                    break;
                case "playMode":
                    delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                    break;
                case "speed":
                    delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"));
                    break;
            }
        }), i && this.render();
    }
    removeEventListener(t, e) {
        var i$1, n, o;
        try {
            t === "complete" ? (i$1 = this._container) == null || i$1.removeEventListener(t, e) : (n = this._lottie) == null || n.removeEventListener(t, e), (o = this._listeners.get(t)) == null || o.delete(e);
        } catch (a) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])("removeEventListener", a);
        }
    }
    _handleAnimationComplete() {
        var e;
        typeof this._loop == "number" && this.stop();
        let t = this.direction === -1 ? 0 : this.totalFrames - 1;
        this.goToAndStop(t, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), (e = this._container) == null || e.dispatchEvent(new Event("complete"));
    }
    addEventListeners() {
        var t;
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("addEventListeners() Can't use whilst loading.");
            return;
        }
        this._lottie.addEventListener("enterFrame", ()=>{
            var i;
            if (!this._lottie) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("enterFrame event : Lottie is undefined.");
                return;
            }
            Math.floor(this._lottie.currentFrame) === 0 && this.direction === -1 && ((i = this._container) == null || i.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify();
        }), this._lottie.addEventListener("loopComplete", ()=>{
            var n;
            if (!this._lottie) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("loopComplete event : Lottie is undefined.");
                return;
            }
            (n = this._container) == null || n.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
            let e = this._lottie.playDirection;
            if (typeof this._loop == "number" && this._loop > 0 && (this._counter += this._mode === "bounce" ? .5 : 1, this._counter >= this._loop)) {
                this._handleAnimationComplete();
                return;
            }
            this._mode === "bounce" && typeof e == "number" && (e = Number(e) * -1);
            let i = e === -1 ? this._lottie.totalFrames - 1 : 0;
            this.intermission ? (this.goToAndPlay(i, !0), this.pause(), this._counterInterval = window.setTimeout(()=>{
                this._lottie && (this._setPlayerState(()=>({
                        direction: e
                    })), this.goToAndPlay(i, !0));
            }, this._intermission)) : (this._setPlayerState(()=>({
                    direction: e
                })), this.goToAndPlay(e === -1 ? this.totalFrames - 1 : 0, !0));
        }), this._lottie.addEventListener("complete", ()=>{
            if (this._lottie && this._loop === !1 && this._mode === "bounce") {
                if (this._counter += .5, this._counter >= 1) {
                    this._handleAnimationComplete();
                    return;
                }
                this._counterInterval = window.setTimeout(()=>{
                    if (!this._lottie) return;
                    let e = this._lottie.playDirection;
                    this._mode === "bounce" && typeof e == "number" && (e = Number(e) * -1);
                    let i = e === -1 ? this.totalFrames - 1 : 0;
                    this._setPlayerState(()=>({
                            direction: e
                        })), this.goToAndPlay(i, !0);
                }, this._intermission);
            } else this._handleAnimationComplete();
        });
        for (let [e, i] of this._listeners)if (e === "complete") for (let n of i)(t = this._container) == null || t.addEventListener(e, n);
        else for (let n of i)this._lottie.addEventListener(e, n);
    }
    async _setCurrentAnimation(t) {
        this._currentState = "loading";
        let e = await this._dotLottieLoader.getAnimation(t);
        this._currentAnimationId = t, this._animation = e, this._currentState = "ready";
    }
    async _getAudioFactory() {
        if (this._animation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(this._animation)) {
            let { DotLottieAudio: t } = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/dotlottie-audio.js [app-ssr] (ecmascript, async loader)");
            return (i)=>{
                let n = new t({
                    src: [
                        i
                    ]
                });
                return this._audios.push(n), n;
            };
        }
        return null;
    }
    async render(t) {
        var b, g, v, P, S, L, k, w, I, O, C, M, T, A, D, E, F, x;
        if (t != null && t.id) await this._setCurrentAnimation(t.id);
        else if (!this._animation) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("no animation selected");
        let e = (b = u.loop) != null ? b : !1, i = (g = u.autoplay) != null ? g : !1, n = (v = u.playMode) != null ? v : "normal", o = (P = u.intermission) != null ? P : 0, a = (S = u.hover) != null ? S : !1, h$1 = (L = u.direction) != null ? L : 1, f = (k = u.speed) != null ? k : 1, p$1 = (w = u.defaultTheme) != null ? w : "";
        e = (I = t == null ? void 0 : t.loop) != null ? I : this._getOption("loop"), i = (O = t == null ? void 0 : t.autoplay) != null ? O : this._getOption("autoplay"), n = (C = t == null ? void 0 : t.playMode) != null ? C : this._getOption("playMode"), o = (M = t == null ? void 0 : t.intermission) != null ? M : this._getOption("intermission"), a = (T = t == null ? void 0 : t.hover) != null ? T : this._getOption("hover"), h$1 = (A = t == null ? void 0 : t.direction) != null ? A : this._getOption("direction"), f = (D = t == null ? void 0 : t.speed) != null ? D : this._getOption("speed"), p$1 = (E = t == null ? void 0 : t.defaultTheme) != null ? E : this._getOption("defaultTheme");
        let d = {
            ...this._animationConfig,
            autoplay: a ? !1 : i,
            loop: typeof e == "number" ? !0 : e,
            renderer: this._worker ? "svg" : (F = this._animationConfig.renderer) != null ? F : "svg"
        }, [m, l, _] = await Promise.all([
            this._dotLottieLoader.getTheme(p$1),
            this._getLottiePlayerInstance(),
            this._getAudioFactory()
        ]);
        if (m && this._animation ? (this._animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(this._animation), this._animation.slots = m) : this._animation = await this._dotLottieLoader.getAnimation((x = this._currentAnimationId) != null ? x : ""), this._activeStateId && !this._inInteractiveMode) {
            this.enterInteractiveMode(this._activeStateId);
            return;
        }
        this.destroy(), this._setPlayerState(()=>({
                defaultTheme: p$1,
                playMode: n,
                intermission: o,
                hover: a,
                loop: e
            })), _ ? this._lottie = l.loadAnimation({
            ...d,
            container: this._container,
            animationData: this._animation,
            audioFactory: _
        }) : this._lottie = l.loadAnimation({
            ...d,
            container: this._container,
            animationData: this._animation
        }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = ()=>{
            var V;
            (V = this._lottie) == null || V.playSegments([
                0,
                this._lottie.totalFrames
            ], !0);
        }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(()=>({
                direction: h$1,
                speed: f
            })), i && !a && (e === !1 && h$1 === -1 ? this.play() : this.setCurrentState("playing")), this._updateTestData();
    }
    async _getLottiePlayerInstance() {
        var i;
        let t = (i = this._animationConfig.renderer) != null ? i : "svg", e;
        if (this._worker) return t !== "svg" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_worker-Q23FJ6ZR.js [app-ssr] (ecmascript, async loader)"), e.default;
        switch(t){
            case "svg":
                {
                    this._light ? e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_light-KMJEUZFY.js [app-ssr] (ecmascript, async loader)") : e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_svg-MJGYILXD.js [app-ssr] (ecmascript, async loader)");
                    break;
                }
            case "canvas":
                {
                    this._light ? e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_light_canvas-B5UTTNXA.js [app-ssr] (ecmascript, async loader)") : e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_canvas-CDSUBMCL.js [app-ssr] (ecmascript, async loader)");
                    break;
                }
            case "html":
                {
                    this._light ? e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_light_html-SLCECTRT.js [app-ssr] (ecmascript, async loader)") : e = await __turbopack_context__.A("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/lottie_html-X3TYKVQI.js [app-ssr] (ecmascript, async loader)");
                    break;
                }
            default:
                throw new Error(`Invalid renderer: ${t}`);
        }
        return e.default;
    }
    _getActiveAnimationId() {
        var e, i, n, o;
        let t = this._dotLottieLoader.manifest;
        return (o = (n = (e = this._activeAnimationId) != null ? e : t == null ? void 0 : t.activeAnimationId) != null ? n : (i = t == null ? void 0 : t.animations[0]) == null ? void 0 : i.id) != null ? o : void 0;
    }
    async load(t) {
        if (this._currentState === "loading") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])("Loading in progress..");
            return;
        }
        try {
            if (this.setCurrentState("loading"), typeof this._src == "string") if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(this._src)) {
                let i = JSON.parse(this._src);
                this._dotLottieLoader.loadFromLottieJSON(i);
            } else {
                let i = new URL(this._src, window.location.href);
                await this._dotLottieLoader.loadFromUrl(i.toString());
            }
            else if (typeof this._src == "object" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
            else throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("Invalid src provided");
            if (!this._dotLottieLoader.manifest) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No manifest found");
            let e = this._getActiveAnimationId();
            if (!e) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("No active animation found");
            await this._setCurrentAnimation(e), await this.render(t);
        } catch (e) {
            this.setCurrentState("error"), e instanceof Error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(`Error loading animation: ${e.message}`);
        }
    }
    setErrorState(t) {
        this.setCurrentState("error"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(t);
    }
    _requireValidDirection(t) {
        if (t !== -1 && t !== 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("Direction can only be -1 (backwards) or 1 (forwards)");
    }
    _requireValidIntermission(t) {
        if (t < 0 || !Number.isInteger(t)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("intermission must be a positive number");
    }
    _requireValidLoop(t) {
        if (typeof t == "number" && (!Number.isInteger(t) || t < 0)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("loop must be a positive number or boolean");
    }
    _requireValidSpeed(t) {
        if (typeof t != "number") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("speed must be a number");
    }
    _requireValidBackground(t) {
        if (typeof t != "string") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("background must be a string");
    }
    _requireValidAutoplay(t) {
        if (typeof t != "boolean") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("autoplay must be a boolean");
    }
    _requireValidPlaybackOptions(t) {
        t.direction && this._requireValidDirection(t.direction), t.intermission && this._requireValidIntermission(t.intermission), t.loop && this._requireValidLoop(t.loop), t.speed && this._requireValidSpeed(t.speed);
    }
};
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-NZJZ4CCL.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-B7OIQIGJ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>m,
    "b",
    ()=>n
]);
var g = Object.create;
var f = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf, k = Object.prototype.hasOwnProperty;
var m = (b, a)=>()=>(a || b((a = {
            exports: {}
        }).exports, a), a.exports);
var l = (b, a, c, e)=>{
    if (a && typeof a == "object" || typeof a == "function") for (let d of i(a))!k.call(b, d) && d !== c && f(b, d, {
        get: ()=>a[d],
        enumerable: !(e = h(a, d)) || e.enumerable
    });
    return b;
};
var n = (b, a, c)=>(c = b != null ? g(j(b)) : {}, l(a || !b || !b.__esModule ? f(c, "default", {
        value: b,
        enumerable: !0
    }) : c, b));
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-B7OIQIGJ.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$74T7T5LL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-74T7T5LL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$GSRQSB3U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-GSRQSB3U.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$BHJSY5WG$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-BHJSY5WG.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$B7OIQIGJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-B7OIQIGJ.js [app-ssr] (ecmascript)"); //# sourceMappingURL=out.js.map
 //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript) <export h as createError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-XVC7DH25.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>P,
    "b",
    ()=>F,
    "c",
    ()=>A,
    "d",
    ()=>ve,
    "e",
    ()=>de,
    "f",
    ()=>pe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__createError$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-DCAKKOYV.js [app-ssr] (ecmascript) <export h as createError>");
;
;
function x() {
    var e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!0);
    return e.current ? (e.current = !1, !0) : e.current;
}
var T = function(e, o) {
    var t = x();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!t) return e();
    }, o);
}, P = T;
var c = function() {};
function m(e) {
    for(var o = [], t = 1; t < arguments.length; t++)o[t - 1] = arguments[t];
    e && e.addEventListener && e.addEventListener.apply(e, o);
}
function d(e) {
    for(var o = [], t = 1; t < arguments.length; t++)o[t - 1] = arguments[t];
    e && e.removeEventListener && e.removeEventListener.apply(e, o);
}
var v = ("TURBOPACK compile-time value", "undefined") < "u";
var w = [
    "mousedown",
    "touchstart"
], D = function(e, o, t) {
    t === void 0 && (t = w);
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(o);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        r.current = o;
    }, [
        o
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        for(var u = function(a) {
            var s = e.current;
            s && !s.contains(a.target) && r.current(a);
        }, f = 0, n = t; f < n.length; f++){
            var p = n[f];
            m(document, p, u);
        }
        return function() {
            for(var a = 0, s = t; a < s.length; a++){
                var l = s[a];
                d(document, l, u);
            }
        };
    }, [
        t,
        e
    ]);
}, F = D;
var b = v ? window : null, y = function(e) {
    return !!e.addEventListener;
}, L = function(e) {
    return !!e.on;
}, B = function(e, o, t, r) {
    t === void 0 && (t = b), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (o && t) return y(t) ? m(t, e, o, r) : L(t) && t.on(e, o, r), function() {
            y(t) ? d(t, e, o, r) : L(t) && t.off(e, o, r);
        };
    }, [
        e,
        o,
        t,
        JSON.stringify(r)
    ]);
}, E = B;
var H = function(e) {
    return typeof e == "function" ? e : typeof e == "string" ? function(o) {
        return o.key === e;
    } : e ? function() {
        return !0;
    } : function() {
        return !1;
    };
}, U = function(e, o, t, r) {
    o === void 0 && (o = c), t === void 0 && (t = {}), r === void 0 && (r = [
        e
    ]);
    var u = t.event, f = u === void 0 ? "keydown" : u, n = t.target, p = t.options, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var s = H(e), l = function(i) {
            if (s(i)) return o(i);
        };
        return l;
    }, r);
    E(f, a, n, p);
}, A = U;
var C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null), de = C.Provider, pe = ()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(C);
    if (typeof e > "u") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$DCAKKOYV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__createError$3e$__["createError"])("useDotLottieContext must be used within a DotLottieProvider");
    return e;
};
var ve = (e, o, t)=>{
    let [r, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>t());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let f = e(()=>{
            let n = o();
            u(n);
        });
        return ()=>{
            f();
        };
    }, [
        e
    ]), r;
};
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-XVC7DH25.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export e as DEFAULT_STATE>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_STATE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export b as PlayerState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-O2M23KUL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>C,
    "b",
    ()=>S3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-XVC7DH25.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__DEFAULT_STATE$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export e as DEFAULT_STATE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export b as PlayerState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
var we = ()=>{};
function C(t) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (n !== null) return t(n.getState());
    }, [
        t,
        n
    ]), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((s)=>n === null ? we : n.state.subscribe(s), [
        n
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(c, e, ()=>t(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__DEFAULT_STATE$3e$__["DEFAULT_STATE"]));
}
var U = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M8.33325 11.6667C7.78097 11.6667 7.33325 12.1144 7.33325 12.6667C7.33325 13.2189 7.78097 13.6667 8.33325 13.6667C8.88554 13.6667 9.33325 13.2189 9.33325 12.6667C9.33325 12.1144 8.88554 11.6667 8.33325 11.6667Z",
        fill: "currentColor"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M7.33325 8C7.33325 7.44771 7.78097 7 8.33325 7C8.88554 7 9.33325 7.44771 9.33325 8C9.33325 8.55228 8.88554 9 8.33325 9C7.78097 9 7.33325 8.55228 7.33325 8Z",
        fill: "currentColor"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M7.33325 3.33333C7.33325 2.78105 7.78097 2.33333 8.33325 2.33333C8.88554 2.33333 9.33325 2.78105 9.33325 3.33333C9.33325 3.88562 8.88554 4.33333 8.33325 4.33333C7.78097 4.33333 7.33325 3.88562 7.33325 3.33333Z",
        fill: "currentColor"
    }));
var $ = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.8654 2.31311C11.0607 2.11785 11.3772 2.11785 11.5725 2.31311L13.4581 4.19873C13.6534 4.39399 13.6534 4.71058 13.4581 4.90584L11.5725 6.79146C11.3772 6.98672 11.0607 6.98672 10.8654 6.79146C10.6701 6.5962 10.6701 6.27961 10.8654 6.08435L11.6162 5.33354H4V6.66687C4 7.03506 3.70152 7.33354 3.33333 7.33354C2.96514 7.33354 2.66666 7.03506 2.66666 6.66687L2.66666 4.66687C2.66666 4.29868 2.96514 4.0002 3.33333 4.0002H11.8454L10.8654 3.02022C10.6701 2.82496 10.6701 2.50838 10.8654 2.31311Z",
        fill: "currentColor"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12.4375 11.9998C12.8057 11.9998 13.1042 11.7013 13.1042 11.3331V9.33313C13.1042 8.96494 12.8057 8.66647 12.4375 8.66647C12.0693 8.66647 11.7708 8.96494 11.7708 9.33313V10.6665H4.15462L4.90543 9.91565C5.10069 9.72039 5.10069 9.40381 4.90543 9.20854C4.71017 9.01328 4.39359 9.01328 4.19832 9.20854L2.31271 11.0942C2.11744 11.2894 2.11744 11.606 2.31271 11.8013L4.19832 13.6869C4.39359 13.8821 4.71017 13.8821 4.90543 13.6869C5.10069 13.4916 5.10069 13.175 4.90543 12.9798L3.92545 11.9998H12.4375Z",
        fill: "currentColor"
    }));
var z = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z",
        fill: "currentColor"
    }));
var O = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z",
        fill: "currentColor"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z",
        fill: "currentColor"
    }));
var j = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z",
        fill: "currentColor"
    }));
var Q = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z",
        fill: "currentColor"
    }));
var Y = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z",
        fill: "currentColor"
    }));
var ee = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z",
        fill: "currentColor"
    }));
var te = ({ children: t, enableReset: n, expand: e = !1, onBack: c, onExpand: a, onReset: s, title: m })=>{
    let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        c();
    }, [
        c
    ]), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        a();
    }, [
        a
    ]), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        s();
    }, [
        s
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, !e && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: "popover-item",
        "aria-label": `Go to ${m}`,
        onClick: x
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            flex: 1
        }
    }, m), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", null, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ee, null))), e && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "popover-submenu"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "popover-header"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: d
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Y, null)), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "popover-header-title",
        style: {
            flex: 1
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", null, m), n && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: "reset-theme",
        onClick: h,
        "aria-label": `Reset ${m}`
    }, "Reset"))), t));
};
var ne = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.5283 5.9372C20.8211 6.23009 20.8211 6.70497 20.5283 6.99786L9.4631 18.063C9.32181 18.2043 9.12997 18.2833 8.93016 18.2826C8.73035 18.2819 8.53907 18.2015 8.39877 18.0593L3.46807 13.0596C3.17722 12.7647 3.18052 12.2898 3.47544 11.999C3.77036 11.7081 4.24522 11.7114 4.53608 12.0063L8.93646 16.4683L19.4676 5.9372C19.7605 5.64431 20.2354 5.64431 20.5283 5.9372Z",
        fill: "currentColor"
    }));
var re = ({ onSelectItem: t, selected: n = !1, value: e, ...c })=>{
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        t == null || t(e);
    }, [
        t,
        e
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": `Select ${e}`,
        className: `popover-item ${n ? "selected" : ""}`,
        onClick: a,
        ...c
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            visibility: n ? "visible" : "hidden"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ne, null)), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        style: {
            flex: 1
        }
    }, e));
};
var se = ({ items: t = [], onSelectItem: n, onDismiss: e, ...c$1 })=>{
    let [a, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(m, ()=>{
        s(""), e();
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])("Escape", ()=>{
        s(""), e();
    });
    let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        s("");
    }, [
        s
    ]), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((r)=>()=>s(r), [
        s
    ]), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((r, v)=>()=>n(r, v), [
        n
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("dialog", {
        ref: m,
        style: {
            padding: a ? "0px" : "8px"
        },
        className: "popover",
        "aria-label": "Popover Menu",
        ...c$1
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
        "aria-label": "Popover content",
        className: "popover-content"
    }, t.map((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("li", {
            key: r.title,
            style: {
                width: "100%"
            }
        }, (a === r.title || !a) && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(te, {
            expand: a === r.title,
            title: r.title,
            onExpand: x(r.title),
            onBack: d,
            enableReset: r.enableReset,
            onReset: h(r.title, "")
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
            className: "popover-items",
            "aria-label": `List of ${r.title}`
        }, r.items.map((v)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("li", {
                key: v.value
            }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(re, {
                value: v.value,
                selected: v.selected,
                onSelectItem: h(r.title, v.value)
            })))))))));
};
var ke = [
    "play",
    "stop",
    "loop",
    "next",
    "previous",
    "animations",
    "themes"
], S3 = ({ buttons: t = ke, ...n })=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(), c = C((o)=>o.loop), a = C((o)=>o.currentState), s = C((o)=>o.seeker), m = C((o)=>o.currentAnimationId), d = C((o)=>o.defaultTheme), x = C((o)=>o.direction), h = C((o)=>o.activeStateId), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>a === __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Playing, [
        a
    ]), [v, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [b, ie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [V, le] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [B, ae] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let o = [], u = b.map((l)=>({
                value: l.id,
                selected: m === l.id
            })), S = V.filter((l)=>l.animations.length === 0 || l.animations.includes(m || "")).map((l)=>({
                value: l.id,
                selected: d === l.id
            })), w = B.map((l)=>({
                value: l,
                selected: h === l
            }));
        return Array.isArray(u) && u.length !== 0 && o.push({
            title: "Animations",
            items: u,
            enableReset: !1
        }), Array.isArray(w) && w.length !== 0 && o.push({
            title: "States",
            items: w,
            enableReset: !0
        }), Array.isArray(S) && S.length !== 0 && o.push({
            title: "Themes",
            items: S,
            enableReset: !!d
        }), o;
    }, [
        b,
        V,
        m,
        d,
        B,
        h
    ]), pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>t.includes("themes") && Array.isArray(V) && V.length ? !0 : t.includes("animations") && Array.isArray(b) && b.length > 1, [
        H
    ]), me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        A(!v);
    }, [
        A
    ]), ue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        A(!1);
    }, [
        A
    ]), ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.toggleLoop();
    }, [
        e
    ]), ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.freeze();
    }, [
        e
    ]), fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.unfreeze();
    }, [
        e
    ]), Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.next();
    }, [
        e
    ]), de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.previous();
    }, [
        e
    ]), he = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        e == null || e.togglePlay();
    }, [
        e
    ]), ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((o, u)=>{
        o === "Animations" && (e == null || e.play(u)), o === "Themes" && (e == null || e.setDefaultTheme(u)), o === "States" && (u ? e == null || e.enterInteractiveMode(u) : e == null || e.exitInteractiveMode());
    }, [
        e
    ]), be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((o)=>{
        e == null || e.seek(String(o.currentTarget.value).concat("%"));
    }, [
        e
    ]);
    function D() {
        var w, l, Z;
        let o = (w = e == null ? void 0 : e.getManifest()) == null ? void 0 : w.animations, u = (l = e == null ? void 0 : e.getManifest()) == null ? void 0 : l.themes, S = (Z = e == null ? void 0 : e.getManifest()) == null ? void 0 : Z.states;
        o && ie(o), u && le(u), S && ae(S);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!(typeof e > "u")) return e == null || e.addEventListener("DOMLoaded", D), ()=>{
            e == null || e.removeEventListener("DOMLoaded", D);
        };
    }, [
        e
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "aria-label": "lottie-animation-controls",
        className: "toolbar",
        ...n
    }, t.includes("previous") && b.length > 1 && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: de,
        "aria-label": "play-previous"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Q, null)), t.includes("play") && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: he,
        "aria-label": "play-pause"
    }, r ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(O, null) : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(j, null)), t.includes("next") && b.length > 1 && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: Ce,
        "aria-label": "play-next"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(z, null)), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        style: {
            width: "100%",
            "--seeker": s
        },
        className: `seeker ${x === 1 ? "" : "to-left"}`,
        type: "range",
        min: 0,
        step: 0,
        max: 100,
        value: s || 0,
        onInput: be,
        onMouseDown: ve,
        onMouseUp: fe,
        "aria-valuemin": 1,
        "aria-valuemax": 100,
        role: "slider",
        "aria-valuenow": s,
        "aria-label": "lottie-seek-input"
    }), t.includes("loop") && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        onClick: ce,
        className: c ? "active" : "",
        "aria-label": "loop-toggle"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement($, null)), pe && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "relative"
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(se, {
        items: H,
        open: v,
        onDismiss: ue,
        onSelectItem: ge
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: `${v ? "popover-active" : ""}`,
        "aria-label": "open-popover",
        onClick: me
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, null))));
};
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-O2M23KUL.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export a as PlayerEvents>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerEvents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export f as DotLottieCommonPlayer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotLottieCommonPlayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-ZAFYX2AB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>fe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-XVC7DH25.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export b as PlayerState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export a as PlayerEvents>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__DotLottieCommonPlayer$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export f as DotLottieCommonPlayer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__DEFAULT_STATE$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/chunk-NZJZ4CCL.js [app-ssr] (ecmascript) <export e as DEFAULT_STATE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
var Z = ("TURBOPACK compile-time value", "undefined") > "u" ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"], H = (e, o, d)=>{
    let [a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__DotLottieCommonPlayer$3e$__["DotLottieCommonPlayer"](e, o.current, d)), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1);
    return Z(()=>{
        async function m() {
            !u.current && o.current && (u.current = !0, a.setContainer(o.current), await a.load());
        }
        return m(), ()=>{
            u.current && a.destroy();
        };
    }, [
        a
    ]), a;
};
function L(e, o) {
    let d$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>o(e.getState()), [
        o,
        e
    ]), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((m)=>e.state.subscribe(m), [
        e
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(a, d$1, ()=>o(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__DEFAULT_STATE$3e$__["DEFAULT_STATE"]));
}
var N = {
    animation: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    animationWithControls: {
        position: "relative"
    }
}, fe = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ onEvent: e$1, activeAnimationId: o, autoplay: d, background: a$1 = "transparent", direction: u, intermission: m, loop: D, playMode: P, hover: f, speed: g, renderer: U = "svg", rendererSettings: $ = {}, src: S, className: j = "", testId: p, children: b, defaultTheme: y, light: v = !1, worker: z = !1, activeStateId: C, lottieRef: B, ...I }, W)=>{
    let R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), i = H(S, R, {
        renderer: U,
        activeAnimationId: o,
        rendererSettings: {
            clearCanvas: !0,
            progressiveLoad: !1,
            hideOnTransparent: !0,
            ...$
        },
        hover: f,
        loop: D,
        direction: u,
        speed: g,
        intermission: m,
        background: a$1,
        playMode: P,
        autoplay: f ? !1 : d,
        testId: p,
        defaultTheme: y,
        light: v,
        worker: z,
        activeStateId: C
    }), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(i);
    t.current = i, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(W, ()=>i, [
        i
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(B, ()=>i, [
        i
    ]);
    let T = L(i, (n)=>n.currentState), k = L(i, (n)=>n.frame), q = L(i, (n)=>n.seeker), G = L(i, (n)=>n.currentAnimationId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof D > "u" ? t.current.revertToManifestValues([
            "loop"
        ]) : t.current.setLoop(D);
    }, [
        D
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Initial,
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Loading
        ].includes(T) || (typeof d > "u" ? t.current.revertToManifestValues([
            "autoplay"
        ]) : t.current.setAutoplay(d));
    }, [
        d
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof u > "u" ? t.current.revertToManifestValues([
            "direction"
        ]) : t.current.setDirection(u);
    }, [
        u
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof g > "u" ? t.current.revertToManifestValues([
            "speed"
        ]) : t.current.setSpeed(g);
    }, [
        g
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof P > "u" ? t.current.revertToManifestValues([
            "playMode"
        ]) : t.current.setMode(P);
    }, [
        P
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof f > "u" ? t.current.revertToManifestValues([
            "hover"
        ]) : t.current.setHover(f);
    }, [
        f
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof a$1 > "u" ? t.current.setBackground("transparent") : t.current.setBackground(a$1);
    }, [
        a$1
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof m > "u" ? t.current.revertToManifestValues([
            "intermission"
        ]) : t.current.setIntermission(m);
    }, [
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof y > "u" || !y ? t.current.revertToManifestValues([
            "defaultTheme"
        ]) : t.current.setDefaultTheme(y);
    }, [
        y
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        o && t.current.play(o);
    }, [
        o
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>(typeof C < "u" && t.current.enterInteractiveMode(C), ()=>{
            t.current.exitInteractiveMode();
        }), [
        C
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        typeof S < "u" && t.current.updateSrc(S);
    }, [
        S
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let n = ()=>{
            e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Ready);
        }, w = ()=>{
            e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].DataReady);
        }, x = ()=>{
            e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].DataFail);
        }, V = ()=>{
            t.current.currentState !== __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Playing && (e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Complete));
        }, h = ()=>{
            e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].LoopComplete);
        };
        return t.current.addEventListener("DOMLoaded", n), t.current.addEventListener("data_ready", w), t.current.addEventListener("data_failed", x), t.current.addEventListener("complete", V), t.current.addEventListener("loopComplete", h), ()=>{
            t.current.removeEventListener("DOMLoaded", n), t.current.removeEventListener("data_ready", w), t.current.removeEventListener("data_failed", x), t.current.removeEventListener("complete", V), t.current.removeEventListener("loopComplete", h);
        };
    }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        switch(T){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Stopped:
                e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Stop);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Paused:
                e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Pause);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Playing:
                e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Play);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Frozen:
                e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Freeze);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Error:
                e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Error);
                break;
        }
    }, [
        T
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        e$1 == null || e$1(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__PlayerEvents$3e$__["PlayerEvents"].Frame, {
            frame: k,
            seeker: q
        });
    }, [
        k
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"], {
        value: i
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `dotlottie-container main ${b ? "controls" : ""} ${j}`,
        lang: "en",
        ...p && {
            "data-testid": p
        },
        ...I
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: R,
        "data-name": `${G}`,
        role: "figure",
        className: `animation ${b ? "controls" : ""}`,
        style: b ? N.animationWithControls : N.animation,
        ...p && {
            "data-testid": "animation"
        }
    }, T === __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$chunk$2d$NZJZ4CCL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__b__as__PlayerState$3e$__["PlayerState"].Error && __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...p && {
            "data-testid": "error"
        },
        className: "error"
    }, "\u26A0\uFE0F")), b));
});
;
 //# sourceMappingURL=out.js.map
 //# sourceMappingURL=chunk-ZAFYX2AB.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$O2M23KUL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-O2M23KUL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$ZAFYX2AB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-ZAFYX2AB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$XVC7DH25$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-XVC7DH25.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/common/dist/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=out.js.map
 //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-ZAFYX2AB.js [app-ssr] (ecmascript) <export a as DotLottiePlayer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotLottiePlayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$ZAFYX2AB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f40$dotlottie$2f$react$2d$player$2f$dist$2f$chunk$2d$ZAFYX2AB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@dotlottie/react-player/dist/chunk-ZAFYX2AB.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-blur-svg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-blur-svg.js [app-ssr] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/side-effect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
const useClientOnlyLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
const useClientOnlyEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        headManager?.mountedInstances?.add(props.children);
        return ()=>{
            headManager?.mountedInstances?.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/head.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/side-effect.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/image-config-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ImageConfigContext; //# sourceMappingURL=image-config-context.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].RouterContext; //# sourceMappingURL=router-context.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/find-closest-quality.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof process !== "undefined" && process.platform) {
                    return process.platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/match-local-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/find-closest-quality.js [app-ssr] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/match-local-pattern.js [app-ssr] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-ssr] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/head.js [app-ssr] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/image-config-context.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/router-context.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", []),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if ("TURBOPACK compile-time truthy", 1) {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: ("TURBOPACK compile-time truthy", 1) ? configContext?.localPatterns : "TURBOPACK unreachable"
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/image.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/countup.js/dist/countUp.min.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>i
]);
var t = function() {
    return t = Object.assign || function(t) {
        for(var i, n = 1, s = arguments.length; n < s; n++)for(var a in i = arguments[n])Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        return t;
    }, t.apply(this, arguments);
}, i = function() {
    function i(i, n, s) {
        var a = this;
        this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: "",
            enableScrollSpy: !1,
            scrollSpyDelay: 200,
            scrollSpyOnce: !1
        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
            a.startTime || (a.startTime = t);
            var i = t - a.startTime;
            a.remaining = a.duration - i, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i / a.duration);
            var n = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
            a.frameVal = n ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
        }, this.formatNumber = function(t) {
            var i, n, s, e, o = t < 0 ? "-" : "";
            i = Math.abs(t).toFixed(a.options.decimalPlaces);
            var r = (i += "").split(".");
            if (n = r[0], s = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
                e = "";
                for(var l = 3, h = 0, u = 0, p = n.length; u < p; ++u)a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n[p - u - 1] + e;
                n = e;
            }
            return a.options.numerals && a.options.numerals.length && (n = n.replace(/[0-9]/g, function(t) {
                return a.options.numerals[+t];
            }), s = s.replace(/[0-9]/g, function(t) {
                return a.options.numerals[+t];
            })), o + a.options.prefix + n + s + a.options.suffix;
        }, this.easeOutExpo = function(t, i, n, s) {
            return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
        }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof i ? document.getElementById(i) : i, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != ("TURBOPACK compile-time value", "undefined") && this.options.enableScrollSpy && (this.error ? console.error(this.error, i) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
            return a.handleScroll(a);
        }), window.onscroll = function() {
            window.onScrollFns.forEach(function(t) {
                return t();
            });
        }, this.handleScroll(this)));
    }
    return i.prototype.handleScroll = function(t) {
        if (t && window && !t.once) {
            var i = window.innerHeight + window.scrollY, n = t.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
            a < i && a > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                return t.start();
            }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > a || s > i) && !t.paused && t.reset();
        }
    }, i.prototype.determineDirectionAndSmartEasing = function() {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var i = t - this.startVal;
        if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t;
            var n = this.countDown ? 1 : -1;
            this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
        } else this.endVal = t, this.finalEndVal = null;
        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
    }, i.prototype.start = function(t) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i.prototype.reset = function() {
        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i.prototype.update = function(t) {
        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i.prototype.printValue = function(t) {
        var i;
        if (this.el) {
            var n = this.formattingFn(t);
            if (null === (i = this.options.plugin) || void 0 === i ? void 0 : i.render) this.options.plugin.render(this.el, n);
            else if ("INPUT" === this.el.tagName) this.el.value = n;
            else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
        }
    }, i.prototype.ensureNumber = function(t) {
        return "number" == typeof t && !isNaN(t);
    }, i.prototype.validateValue = function(t) {
        var i = Number(t);
        return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
    }, i.prototype.resetDuration = function() {
        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i;
}();
;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var countup_js = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/countup.js/dist/countUp.min.js [app-ssr] (ecmascript)");
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Silence SSR Warnings.
 * Borrowed from Formik v2.1.1, Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : React.useEffect;
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Create a stable reference to a callback which is updated after each render is committed.
 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ function useEventCallback(fn) {
    var ref = React.useRef(fn);
    // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect(function() {
        ref.current = fn;
    });
    return React.useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}
var createCountUpInstance = function createCountUpInstance(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
        startVal: start,
        duration: duration,
        decimal: decimal,
        decimalPlaces: decimals,
        easingFn: easingFn,
        formattingFn: formattingFn,
        numerals: numerals,
        separator: separator,
        prefix: prefix,
        suffix: suffix,
        plugin: plugin,
        useEasing: useEasing,
        useIndianSeparators: useIndianSeparators,
        useGrouping: useGrouping,
        enableScrollSpy: enableScrollSpy,
        scrollSpyDelay: scrollSpyDelay,
        scrollSpyOnce: scrollSpyOnce
    });
};
var _excluded$1 = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate"
];
var DEFAULTS = {
    decimal: '.',
    separator: ',',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
};
var useCountUp = function useCountUp(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== undefined;
    }));
    var _useMemo = React.useMemo(function() {
        return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
    }, [
        props
    ]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback(function() {
        return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
    });
    var getCountUp = useEventCallback(function(recreate) {
        var countUp = countUpRef.current;
        if (countUp && !recreate) {
            return countUp;
        }
        var newCountUp = createInstance();
        countUpRef.current = newCountUp;
        return newCountUp;
    });
    var start = useEventCallback(function() {
        var run = function run() {
            return getCountUp(true).start(function() {
                onEnd === null || onEnd === void 0 || onEnd({
                    pauseResume: pauseResume,
                    reset: reset,
                    start: restart,
                    update: update
                });
            });
        };
        if (delay && delay > 0) {
            timerRef.current = setTimeout(run, delay * 1000);
        } else {
            run();
        }
        onStart === null || onStart === void 0 || onStart({
            pauseResume: pauseResume,
            reset: reset,
            update: update
        });
    });
    var pauseResume = useEventCallback(function() {
        getCountUp().pauseResume();
        onPauseResume === null || onPauseResume === void 0 || onPauseResume({
            reset: reset,
            start: restart,
            update: update
        });
    });
    var reset = useEventCallback(function() {
        // Quick fix for https://github.com/glennreyes/react-countup/issues/736 - should be investigated
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (getCountUp().el) {
            timerRef.current && clearTimeout(timerRef.current);
            getCountUp().reset();
            onReset === null || onReset === void 0 || onReset({
                pauseResume: pauseResume,
                start: restart,
                update: update
            });
        }
    });
    var update = useEventCallback(function(newEnd) {
        getCountUp().update(newEnd);
        onUpdate === null || onUpdate === void 0 || onUpdate({
            pauseResume: pauseResume,
            reset: reset,
            start: restart
        });
    });
    var restart = useEventCallback(function() {
        reset();
        start();
    });
    var maybeInitialize = useEventCallback(function(shouldReset) {
        if (startOnMount) {
            if (shouldReset) {
                reset();
            }
            start();
        }
    });
    React.useEffect(function() {
        if (!isInitializedRef.current) {
            isInitializedRef.current = true;
            maybeInitialize();
        } else if (enableReinitialize) {
            maybeInitialize(true);
        }
    }, [
        enableReinitialize,
        isInitializedRef,
        maybeInitialize,
        delay,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.formattingFn
    ]);
    React.useEffect(function() {
        return function() {
            reset();
        };
    }, [
        reset
    ]);
    return {
        start: restart,
        pauseResume: pauseResume,
        reset: reset,
        update: update,
        getCountUp: getCountUp
    };
};
var _excluded = [
    "className",
    "redraw",
    "containerProps",
    "children",
    "style"
];
var CountUp = function CountUp(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== 'function' || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback(function() {
        start();
    });
    var update = useEventCallback(function(end) {
        if (!props.preserveValue) {
            reset();
        }
        updateCountUp(end);
    });
    var initializeOnMount = useEventCallback(function() {
        if (typeof props.children === 'function') {
            // Warn when user didn't use containerRef at all
            if (!(containerRef.current instanceof Element)) {
                console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
                return;
            }
        }
        // unlike the hook, the CountUp component initializes on mount
        getCountUp();
    });
    React.useEffect(function() {
        initializeOnMount();
    }, [
        initializeOnMount
    ]);
    React.useEffect(function() {
        if (isInitializedRef.current) {
            update(props.end);
        }
    }, [
        props.end,
        update
    ]);
    var redrawDependencies = redraw && props;
    // if props.redraw, call this effect on every props change
    React.useEffect(function() {
        if (redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        redrawDependencies
    ]);
    // if not props.redraw, call this effect only when certain props are changed
    React.useEffect(function() {
        if (!redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.className,
        props.formattingFn
    ]);
    React.useEffect(function() {
        isInitializedRef.current = true;
    }, []);
    if (typeof children === 'function') {
        // TypeScript forces functional components to return JSX.Element | null.
        return children({
            countUpRef: containerRef,
            start: start,
            reset: reset,
            update: updateCountUp,
            pauseResume: pauseResume,
            getCountUp: getCountUp
        });
    }
    return /*#__PURE__*/ React.createElement("span", _extends({
        className: className,
        ref: containerRef,
        style: style
    }, containerProps), typeof props.start !== 'undefined' ? getCountUp().formattingFn(props.start) : '');
};
exports.default = CountUp;
exports.useCountUp = useCountUp;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')","strategy":"worker","location":"head","action":"append"}]});}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatData = exports.createHtml = exports.formatUrl = void 0;
function filterArgs(args, selectedArgs, inverse = false) {
    if (!selectedArgs) return {};
    return Object.keys(args).filter((key)=>inverse ? !selectedArgs.includes(key) : selectedArgs.includes(key)).reduce((obj, key)=>{
        obj[key] = args[key];
        return obj;
    }, {});
}
// Add all required search params with user inputs as values
function formatUrl(url, params, args, slug) {
    const newUrl = slug && Object.keys(slug).length > 0 ? new URL(Object.values(slug)[0], url) // If there's a user inputted param for the URL slug, replace the default existing slug or include it
     : new URL(url);
    if (params && args) {
        params.forEach((param)=>{
            if (args[param]) newUrl.searchParams.set(param, args[param]);
        });
    }
    return newUrl.toString();
}
exports.formatUrl = formatUrl;
// Construct HTML element and include all default attributes and user-inputted attributes
function createHtml(element, attributes, htmlAttrArgs, urlQueryParamArgs, slugParamArg) {
    var _a;
    if (!attributes) return `<${element}></${element}>`;
    const formattedAttributes = ((_a = attributes.src) === null || _a === void 0 ? void 0 : _a.url) ? Object.assign(Object.assign({}, attributes), {
        src: formatUrl(attributes.src.url, attributes.src.params, urlQueryParamArgs, slugParamArg)
    }) : attributes;
    const htmlAttributes = Object.keys(Object.assign(Object.assign({}, formattedAttributes), htmlAttrArgs)).reduce((acc, name)=>{
        const userVal = htmlAttrArgs === null || htmlAttrArgs === void 0 ? void 0 : htmlAttrArgs[name];
        const defaultVal = formattedAttributes[name];
        const finalVal = userVal !== null && userVal !== void 0 ? userVal : defaultVal; // overwrite
        const attrString = finalVal === true ? name : `${name}="${finalVal}"`;
        return finalVal ? acc + ` ${attrString}` : acc;
    }, '');
    return `<${element}${htmlAttributes}></${element}>`;
}
exports.createHtml = createHtml;
// Format JSON by including all default and user-required parameters
function formatData(data, args) {
    var _a, _b, _c, _d, _e;
    const allScriptParams = (_a = data.scripts) === null || _a === void 0 ? void 0 : _a.reduce((acc, script)=>[
            ...acc,
            ...Array.isArray(script.params) ? script.params : []
        ], []);
    // First, find all input arguments that map to parameters passed to script URLs
    const scriptUrlParamInputs = filterArgs(args, allScriptParams);
    // Second, find all input arguments that map to parameters passed to the HTML src attribute
    const htmlUrlParamInputs = filterArgs(args, (_c = (_b = data.html) === null || _b === void 0 ? void 0 : _b.attributes.src) === null || _c === void 0 ? void 0 : _c.params);
    // Third, find the input argument that maps to the slug parameter passed to the HTML src attribute if present
    const htmlSlugParamInput = filterArgs(args, [
        (_e = (_d = data.html) === null || _d === void 0 ? void 0 : _d.attributes.src) === null || _e === void 0 ? void 0 : _e.slugParam
    ]);
    // Lastly, all remaining arguments are forwarded as separate HTML attributes
    const htmlAttrInputs = filterArgs(args, [
        ...Object.keys(scriptUrlParamInputs),
        ...Object.keys(htmlUrlParamInputs),
        ...Object.keys(htmlSlugParamInput)
    ], true);
    return Object.assign(Object.assign({}, data), {
        // Pass any custom attributes to HTML content
        html: data.html ? createHtml(data.html.element, data.html.attributes, htmlAttrInputs, htmlUrlParamInputs, htmlSlugParamInput) : null,
        // Pass any required query params with user values for relevant scripts
        scripts: data.scripts ? data.scripts.map((script)=>Object.assign(Object.assign({}, script), {
                url: formatUrl(script.url, script.params, scriptUrlParamInputs)
            })) : null
    });
}
exports.formatData = formatData;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleAnalytics = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleAnalytics = GoogleAnalytics;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}});}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleMapsEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const GoogleMapsEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleMapsEmbed = GoogleMapsEmbed;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]});}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
var __rest = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/data.json (json)"));
const utils_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/utils/index.js [app-ssr] (ecmascript)");
const YouTubeEmbed = (_a)=>{
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.YouTubeEmbed = YouTubeEmbed;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YouTubeEmbed = exports.GoogleMapsEmbed = exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var google_analytics_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-analytics/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return google_analytics_1.GoogleAnalytics;
    }
});
var google_maps_embed_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/google-maps-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return google_maps_embed_1.GoogleMapsEmbed;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/third-parties/youtube-embed/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return youtube_embed_1.YouTubeEmbed;
    }
});
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThirdPartyScriptEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function ThirdPartyScriptEmbed({ html, height = null, width = null, children, dataNtpc = '' }) {
    (0, react_1.useEffect)(()=>{
        if (dataNtpc) {
            // performance.mark is being used as a feature use signal. While it is traditionally used for performance
            // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
            // existing API.
            performance.mark('mark_feature_usage', {
                detail: {
                    feature: `next-third-parties-${dataNtpc}`
                }
            });
        }
    }, [
        dataNtpc
    ]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            children,
            html ? (0, jsx_runtime_1.jsx)("div", {
                style: {
                    height: height != null ? `${height}px` : 'auto',
                    width: width != null ? `${width}px` : 'auto'
                },
                "data-ntpc": dataNtpc,
                dangerouslySetInnerHTML: {
                    __html: html
                }
            }) : null
        ]
    });
}
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GoogleMapsEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const third_party_capital_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
function GoogleMapsEmbed(props) {
    const { apiKey, ...restProps } = props;
    const formattedProps = {
        ...restProps,
        key: apiKey
    };
    const { html } = (0, third_party_capital_1.GoogleMapsEmbed)(formattedProps);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: formattedProps.height || null,
        width: formattedProps.width || null,
        html: html,
        dataNtpc: "GoogleMapsEmbed"
    });
}
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)");
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = YouTubeEmbed;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/script.js [app-ssr] (ecmascript)"));
const third_party_capital_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/third-party-capital/lib/cjs/index.js [app-ssr] (ecmascript)");
const ThirdPartyScriptEmbed_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-ssr] (ecmascript)"));
const scriptStrategy = {
    server: 'beforeInteractive',
    client: 'afterInteractive',
    idle: 'lazyOnload',
    worker: 'worker'
};
function YouTubeEmbed(props) {
    const { html, scripts, stylesheets } = (0, third_party_capital_1.YouTubeEmbed)(props);
    return (0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, {
        height: props.height || null,
        width: props.width || null,
        html: html,
        dataNtpc: "YouTubeEmbed",
        children: scripts === null || scripts === void 0 ? void 0 : scripts.map((script)=>(0, jsx_runtime_1.jsx)(script_1.default, {
                src: script.url,
                strategy: scriptStrategy[script.strategy],
                stylesheets: stylesheets
            }, script.url))
    });
}
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGTMEvent = void 0;
exports.GoogleTagManager = GoogleTagManager;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = 'dataLayer';
function GoogleTagManager(props) {
    const { gtmId, gtmScriptUrl = 'https://www.googletagmanager.com/gtm.js', dataLayerName = 'dataLayer', auth, preview, dataLayer, nonce } = props;
    currDataLayerName = dataLayerName;
    const gtmLayer = dataLayerName !== 'dataLayer' ? `&l=${dataLayerName}` : '';
    const gtmAuth = auth ? `&gtm_auth=${auth}` : '';
    const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : '';
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-gtm'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: `${gtmScriptUrl}?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}`,
                nonce: nonce
            })
        ]
    });
}
const sendGTMEvent = (data, dataLayerName)=>{
    // special case if we are sending events before GTM init and we have custom dataLayerName
    const dataLayer = dataLayerName || currDataLayerName;
    // define dataLayer so we can still queue up events before GTM init
    window[dataLayer] = window[dataLayer] || [];
    window[dataLayer].push(data);
};
exports.sendGTMEvent = sendGTMEvent;
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleAnalytics = GoogleAnalytics;
exports.sendGAEvent = sendGAEvent;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
// TODO: Evaluate import 'client only'
const react_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const script_1 = __importDefault(__turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/script.js [app-ssr] (ecmascript)"));
let currDataLayerName = undefined;
function GoogleAnalytics(props) {
    const { gaId, debugMode, dataLayerName = 'dataLayer', nonce } = props;
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
    }
    (0, react_1.useEffect)(()=>{
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-ga'
            }
        });
    }, []);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${debugMode ? ",{ 'debug_mode': true }" : ''});`
                },
                nonce: nonce
            }),
            (0, jsx_runtime_1.jsx)(script_1.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                nonce: nonce
            })
        ]
    });
}
function sendGAEvent(..._args) {
    if (currDataLayerName === undefined) {
        console.warn(`@next/third-parties: GA has not been initialized`);
        return;
    }
    if (window[currDataLayerName]) {
        window[currDataLayerName].push(arguments);
    } else {
        console.warn(`@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`);
    }
}
}),
"[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendGAEvent = exports.GoogleAnalytics = exports.sendGTMEvent = exports.GoogleTagManager = exports.YouTubeEmbed = exports.GoogleMapsEmbed = void 0;
var google_maps_embed_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/google-maps-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleMapsEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(google_maps_embed_1).default;
    }
});
var youtube_embed_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/youtube-embed.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "YouTubeEmbed", {
    enumerable: true,
    get: function() {
        return __importDefault(youtube_embed_1).default;
    }
});
var gtm_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/gtm.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleTagManager", {
    enumerable: true,
    get: function() {
        return gtm_1.GoogleTagManager;
    }
});
Object.defineProperty(exports, "sendGTMEvent", {
    enumerable: true,
    get: function() {
        return gtm_1.sendGTMEvent;
    }
});
var ga_1 = __turbopack_context__.r("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/@next/third-parties/dist/google/ga.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "GoogleAnalytics", {
    enumerable: true,
    get: function() {
        return ga_1.GoogleAnalytics;
    }
});
Object.defineProperty(exports, "sendGAEvent", {
    enumerable: true,
    get: function() {
        return ga_1.sendGAEvent;
    }
});
}),
];

//# sourceMappingURL=6416c_24e1d719._.js.map