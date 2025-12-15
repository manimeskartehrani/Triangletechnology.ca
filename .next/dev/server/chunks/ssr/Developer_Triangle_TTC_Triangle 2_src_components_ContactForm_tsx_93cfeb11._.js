module.exports = [
"[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Triangle/TTC/Triangle 2/src/components/Button.tsx [app-ssr] (ecmascript)"); // Assuming you have a custom Button component
"use client";
;
;
;
function ContactForm() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle input changes
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }
        try {
            // Send form data to the API route
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            // Log the full response for debugging
            const data = await response.text(); // Use `.text()` to check the raw response
            console.log(data);
            if (!response.ok) {
                throw new Error(data);
            }
            // Parse the response if it's JSON
            const jsonResponse = JSON.parse(data);
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            setError(error.message || "Failed to send message.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-150 mx-auto p-10 rounded-4xl border border-white/15 shadow-md text-white/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Contact Us"
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                lineNumber: 73,
                columnNumber: 17
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-500",
                children: "Message sent successfully!"
            }, void 0, false, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                lineNumber: 74,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-white",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                value: formData.name,
                                onChange: handleChange,
                                className: "w-full p-2 border border-white/15 rounded",
                                placeholder: "Your Name"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-white",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                className: "w-full p-2 border border-white/15 rounded",
                                placeholder: "Your Email"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-white",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "message",
                                value: formData.message,
                                onChange: handleChange,
                                className: "w-full p-2 border border-white/15 rounded",
                                placeholder: "Your Message",
                                rows: 4
                            }, void 0, false, {
                                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Triangle$2f$TTC$2f$Triangle__2$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: loading ? "Sending..." : "Send Message"
                        }, void 0, false, {
                            fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Triangle/TTC/Triangle 2/src/components/ContactForm.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Developer_Triangle_TTC_Triangle%202_src_components_ContactForm_tsx_93cfeb11._.js.map