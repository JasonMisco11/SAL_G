(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SAL_G/components/Contact/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/config/site/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/lucide-react@0.563.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/lucide-react@0.563.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/lucide-react@0.563.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/lucide-react@0.563.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/lucide-react@0.563.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Contact() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        service: "Residential Interior & Exterior Design",
        message: ""
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleEmailSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert("Booking request sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    service: "Interior Design",
                    message: ""
                });
            } else {
                alert("Failed to send. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong.");
        } finally{
            setLoading(false);
        }
    };
    const handleWhatsApp = ()=>{
        const { name, service, message } = formData;
        if (!name || !message) {
            alert("Please fill in your name and message first.");
            return;
        }
        const text = `Hello SAF, my name is ${name}. I am interested in ${service}. Message: ${message}`;
        const encodedText = encodeURIComponent(text);
        // Open WhatsApp
        window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.phone.replace("+", "")}?text=${encodedText}`, "_blank");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 px-6 bg-[#1a1a1a] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold tracking-tight mb-4",
                                    children: "Start your project today"
                                }, void 0, false, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-lg max-w-md",
                                    children: "Ready to transform your space? Book a consultation with us or send us a message directly."
                                }, void 0, false, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.email}`,
                                                    className: "text-sm text-gray-400 font-medium hover:text-white transition-colors block",
                                                    children: "Email Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.email}`,
                                                    className: "text-lg font-semibold hover:underline",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.email
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.phone}`,
                                                    className: "text-sm text-gray-400 font-medium hover:text-white transition-colors block",
                                                    children: "Call / WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.phone}`,
                                                    className: "text-lg font-semibold hover:underline",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 font-medium",
                                                    children: "Visit Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].contact.address
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white text-black p-8 md:p-10 rounded-sm shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6",
                            children: "Book a Consultation"
                        }, void 0, false, {
                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleEmailSubmit,
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "name",
                                            value: formData.name,
                                            onChange: handleChange,
                                            required: true,
                                            className: "p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50",
                                            placeholder: "John Doe"
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-gray-700",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    required: true,
                                                    className: "p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50",
                                                    placeholder: "john@example.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-gray-700",
                                                    children: "Service Interest"
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "service",
                                                    value: formData.service,
                                                    onChange: handleChange,
                                                    className: "p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Residential Interior & Exterior Design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Office & Commercial Interiors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Furniture Design & Supply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Curtains & Window Blinds"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Space Planning & 3D Visualization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Interior Renovation & Remodeling"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            rows: 4,
                                            value: formData.message,
                                            onChange: handleChange,
                                            required: true,
                                            className: "p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50 resize-none",
                                            placeholder: "Tell us about your project..."
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row gap-4 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "flex-1 bg-black text-white py-3 font-semibold rounded-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this) : "Send Request"
                                        }, void 0, false, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleWhatsApp,
                                            className: "flex-1 border-2 border-[#25D366] text-[#25D366] py-3 font-semibold rounded-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$563$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                "Book via WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SAL_G/components/Contact/index.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SAL_G/components/Contact/index.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SAL_G/components/Contact/index.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/SAL_G/components/Contact/index.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Contact, "SNYU/e2Zph03UCEQItGigAoTbeg=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!isVisible) return;
            let startTime = null;
            const step = {
                "Counter.useEffect.step": (timestamp)=>{
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
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
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Counter, "5zrqlCCndTtTe/zdNtNWbBSRk4A=", false, function() {
    return [
        useIsVisible
    ];
});
_c = Counter;
function useIsVisible(ref) {
    _s1();
    const [isIntersecting, setIntersecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsVisible.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useIsVisible.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIntersecting(true);
                        observer.disconnect();
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
"[project]/SAL_G/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollReveal({ children, delay = "delay-0" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Trigger once and stay
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.1
            } // Trigger when 10% is visible
            );
            if (ref.current) observer.observe(ref.current);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${delay}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/SAL_G/components/ui/ScrollReveal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SAL_G/components/ui/InfiniteScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfiniteScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/framer-motion@12.29.2_react_4e368d9eeb706972bef2b6c369484f34/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/framer-motion@12.29.2_react_4e368d9eeb706972bef2b6c369484f34/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/framer-motion@12.29.2_react_4e368d9eeb706972bef2b6c369484f34/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$react$2d$use$2d$measure$40$2$2e$1$2e$7_rea_9b73342208f4edd44e39ede1eb964a56$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/react-use-measure@2.1.7_rea_9b73342208f4edd44e39ede1eb964a56/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/config/site/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function InfiniteScroll() {
    _s();
    const images = __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].galleryImages;
    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FAST_DURATION);
    const [ref, { width }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$react$2d$use$2d$measure$40$2$2e$1$2e$7_rea_9b73342208f4edd44e39ede1eb964a56$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const xTranslation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [mustFinish, setMustFinish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rerender, setRerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteScroll.useEffect": ()=>{
            let controls;
            const finalPosition = -width / 2 - 8;
            if (mustFinish) {
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(xTranslation, [
                    xTranslation.get(),
                    finalPosition
                ], {
                    ease: "linear",
                    duration: duration * (1 - xTranslation.get() / finalPosition),
                    onComplete: {
                        "InfiniteScroll.useEffect": ()=>{
                            setMustFinish(false);
                            setRerender(!rerender);
                        }
                    }["InfiniteScroll.useEffect"]
                });
            } else {
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(xTranslation, [
                    0,
                    finalPosition
                ], {
                    ease: "linear",
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0
                });
            }
            return controls?.stop;
        }
    }["InfiniteScroll.useEffect"], [
        rerender,
        xTranslation,
        duration,
        width,
        mustFinish
    ]); // Added mustFinish to deps
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-16 bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 px-6 max-w-[1440px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl text-black font-bold",
                    children: "Inspiration Gallery"
                }, void 0, false, {
                    fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
                    lineNumber: 52,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[300px] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute left-0 flex gap-6",
                    style: {
                        x: xTranslation
                    },
                    ref: ref,
                    onHoverStart: ()=>{
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    },
                    onHoverEnd: ()=>{
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    },
                    children: [
                        ...images,
                        ...images
                    ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            image: item
                        }, idx, false, {
                            fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(InfiniteScroll, "YHYleRVQWKHz1a85IWytwE/z0Hw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$react$2d$use$2d$measure$40$2$2e$1$2e$7_rea_9b73342208f4edd44e39ede1eb964a56$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$29$2e$2_react_4e368d9eeb706972bef2b6c369484f34$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = InfiniteScroll;
// Sub-component for the individual image card
const Card = ({ image })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[300px] h-[250px] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: image,
            alt: "Interior Design Gallery",
            fill: true,
            className: "object-cover",
            sizes: "300px"
        }, void 0, false, {
            fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/SAL_G/components/ui/InfiniteScroll.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "InfiniteScroll");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SAL_G_components_06dfe508._.js.map