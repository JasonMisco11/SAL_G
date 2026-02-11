(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SAL_G/config/site/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// config/site/index.tsx
//  Also adding the logo so it can be used anywhere
__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "SAF Interior Limited",
    slogan: "Transforming Spaces, Inspiring Lifestyles",
    description: "Professional interior design and furnishing company specializing in residential, commercial, and corporate interior solutions.",
    logo: "https://res.cloudinary.com/dshe5kflb/image/upload/v1770808512/Simple_Minimalist_Home_Real_Estate_Logo_hwbfta.png",
    nav_Links: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "#about"
        },
        {
            label: "Services",
            href: "#services"
        },
        {
            label: "Process",
            href: "#process"
        },
        {
            label: "Contact",
            href: "#contact"
        }
    ],
    heroStats: [
        {
            count: "400+",
            label: "Projects Complete"
        },
        {
            count: "600+",
            label: "Satisfied Clients"
        },
        {
            count: "100+",
            label: "Unique Styles"
        }
    ],
    // Company Overview
    overview: "SAF Interior Limited is a professional interior design and furnishing company specializing in residential, commercial, and corporate interior solutions. We are committed to delivering elegant, functional, and cost-effective interior spaces tailored to our clients' needs.",
    // Vision, Mission & Core Values
    vision: "To be a leading interior design brand known for creativity, quality, and innovation.",
    mission: "To design and deliver inspiring interior environments using quality materials, skilled craftsmanship, and customer-focused solutions.",
    coreValues: [
        {
            title: "Creativity",
            description: "Pushing boundaries with innovative design solutions",
            icon: "sparkles"
        },
        {
            title: "Integrity",
            description: "Honest and transparent in all our dealings",
            icon: "shield"
        },
        {
            title: "Quality Excellence",
            description: "Delivering premium craftsmanship in every project",
            icon: "star"
        },
        {
            title: "Customer Satisfaction",
            description: "Your happiness is our top priority",
            icon: "heart"
        },
        {
            title: "Professionalism",
            description: "Expert service from start to finish",
            icon: "briefcase"
        }
    ],
    // Goals & Objectives
    goals: [
        {
            title: "High-Quality Design",
            description: "Deliver high-quality interior design and furnishing services",
            icon: "award"
        },
        {
            title: "Client Relationships",
            description: "Build long-term relationships with clients",
            icon: "users"
        },
        {
            title: "Innovation",
            description: "Continuously innovate in design concepts",
            icon: "lightbulb"
        },
        {
            title: "Competitive Pricing",
            description: "Maintain competitive pricing without compromising quality",
            icon: "trending-up"
        }
    ],
    // Services
    services: [
        {
            title: "Residential Interior & Exterior Design",
            description: "Transform your home into a stunning sanctuary with our comprehensive residential design services for both interior and exterior spaces.",
            icon: "home"
        },
        {
            title: "Office & Commercial Interiors",
            description: "Create productive and inspiring workspaces that reflect your brand identity and enhance employee well-being.",
            icon: "building"
        },
        {
            title: "Furniture Design & Supply",
            description: "Custom furniture solutions designed to perfectly fit your space and style, from concept to delivery.",
            icon: "sofa"
        },
        {
            title: "Curtains & Window Blinds",
            description: "Elegant window treatments that add privacy, style, and ambiance to any room.",
            icon: "window"
        },
        {
            title: "Space Planning & 3D Visualization",
            description: "See your dream space come to life with detailed 3D visualizations before implementation.",
            icon: "cube"
        },
        {
            title: "Interior Renovation & Remodeling",
            description: "Breathe new life into existing spaces with our expert renovation and remodeling services.",
            icon: "hammer"
        }
    ],
    // Design Process
    designProcess: [
        {
            step: 1,
            title: "Client Consultation",
            description: "We begin by understanding your vision, requirements, and budget through detailed discussions."
        },
        {
            step: 2,
            title: "Concept Development",
            description: "Our designers create initial concepts and mood boards tailored to your preferences."
        },
        {
            step: 3,
            title: "Design Approval",
            description: "Present comprehensive design proposals with revisions until you're completely satisfied."
        },
        {
            step: 4,
            title: "Material Selection",
            description: "Carefully select quality materials, finishes, and furnishings that match your style."
        },
        {
            step: 5,
            title: "Installation & Execution",
            description: "Our skilled team brings the design to life with meticulous attention to detail."
        },
        {
            step: 6,
            title: "Final Handover",
            description: "Complete project delivery with quality checks and customer satisfaction assurance."
        }
    ],
    galleryImages: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop"
    ],
    contact: {
        email: "safinteriorlimited@gmail.com",
        phone: "+233208861880",
        address: "Accra, Ghana"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SAL_G/components/navbar/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/config/site/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SAL_G/node_modules/.pnpm/next@16.1.5_@babel+core@7.2_34156460ef1412b722433d7939c8c891/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].logo,
                            alt: "Logo",
                            width: 80,
                            height: 80
                        }, void 0, false, {
                            fileName: "[project]/SAL_G/components/navbar/index.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/SAL_G/components/navbar/index.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nav_Links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-gray-600 font-medium hover:text-black transition-colors",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/SAL_G/components/navbar/index.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/SAL_G/components/navbar/index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#contact",
                            className: "bg-[#1a1a1a] text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-black/90 transition-all inline-block",
                            children: "Book"
                        }, void 0, false, {
                            fileName: "[project]/SAL_G/components/navbar/index.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/SAL_G/components/navbar/index.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2 text-black",
                        onClick: ()=>setIsOpen(!isOpen),
                        "aria-label": "Toggle Menu",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            className: "w-8 h-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/SAL_G/components/navbar/index.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/SAL_G/components/navbar/index.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            className: "w-8 h-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            }, void 0, false, {
                                fileName: "[project]/SAL_G/components/navbar/index.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/SAL_G/components/navbar/index.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/SAL_G/components/navbar/index.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/SAL_G/components/navbar/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$config$2f$site$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].nav_Links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SAL_G$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$5_$40$babel$2b$core$40$7$2e$2_34156460ef1412b722433d7939c8c891$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        onClick: ()=>setIsOpen(false),
                        className: "text-lg font-medium text-gray-800",
                        children: link.label
                    }, link.label, false, {
                        fileName: "[project]/SAL_G/components/navbar/index.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/SAL_G/components/navbar/index.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/SAL_G/components/navbar/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SAL_G_4bd21e42._.js.map