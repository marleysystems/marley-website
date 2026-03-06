(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/FadeIn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeIn.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "FadeIn.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(el);
                    }
                }
            }["FadeIn.useEffect"], {
                threshold: 0.1,
                rootMargin: "0px 0px -40px 0px"
            });
            observer.observe(el);
            return ({
                "FadeIn.useEffect": ()=>observer.disconnect()
            })["FadeIn.useEffect"];
        }
    }["FadeIn.useEffect"], []);
    const initialStyle = direction === "up" ? {
        opacity: 0,
        transform: "translateY(28px)"
    } : {
        opacity: 0
    };
    const visibleStyle = direction === "up" ? {
        opacity: 1,
        transform: "translateY(0)"
    } : {
        opacity: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            ...visible ? visibleStyle : initialStyle,
            transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/FadeIn.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_FadeIn_tsx_e6bbaa0a._.js.map