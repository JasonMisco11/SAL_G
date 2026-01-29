(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SAL_G/components/ui/Counter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function Counter({ value, duration = 2000 }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isVisible = useIsVisible(ref);
    // Parse the number (400) and the suffix (+)
    const numericValue = parseInt(value.replace(/\D/g, ""), 10); // Extracts 400
    const suffix = value.replace(/[0-9]/g, ""); // Extracts "+"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!isVisible) return; // Only animate when seen
            let startTime = null;
            const step = {
                "Counter.useEffect.step": (timestamp)=>{
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    // Easing function (easeOutExpo) for smooth landing
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    setCount(Math.floor(easeProgress * numericValue));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                }
            }["Counter.useEffect.step"];
            window.requestAnimationFrame(step);
        }
    }["Counter.useEffect"], [
        isVisible,
        numericValue,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: "tabular-nums",
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/SAL_G/components/ui/Counter.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Counter, "5zrqlCCndTtTe/zdNtNWbBSRk4A=", false, function() {
    return [
        useIsVisible
    ];
});
_c = Counter;
// Helper Hook for Visibility
function useIsVisible(ref) {
    _s1();
    const [isIntersecting, setIntersecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsVisible.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useIsVisible.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIntersecting(true);
                        observer.disconnect(); // Run once
                    }
                }
            }["useIsVisible.useEffect"]);
            if (ref.current) observer.observe(ref.current);
            return ({
                "useIsVisible.useEffect": ()=>observer.disconnect()
            })["useIsVisible.useEffect"];
        }
    }["useIsVisible.useEffect"], [
        ref
    ]);
    return isIntersecting;
}
_s1(useIsVisible, "+TWZGT8mxcpNH+JS7IkSFv1hR0A=");
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SAL_G_components_ui_Counter_tsx_0b4f1c43._.js.map