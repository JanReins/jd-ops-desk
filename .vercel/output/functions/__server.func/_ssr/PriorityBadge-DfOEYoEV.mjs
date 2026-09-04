import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ChevronDown, w as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PriorityBadge-DfOEYoEV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STYLES = {
	P1: {
		bg: "bg-danger-soft text-danger",
		border: "border-danger/30",
		label: "P1 Critical"
	},
	P2: {
		bg: "bg-warn-soft text-warn",
		border: "border-warn/30",
		label: "P2 Important"
	},
	P3: {
		bg: "bg-paper text-muted",
		border: "border-line",
		label: "P3 Routine"
	}
};
function PriorityBadge({ priority, onChange, disabled = false, p1CapacityReached = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const currentStyle = STYLES[priority] || STYLES.P3;
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpen(false);
		}
		if (open) document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);
	const chip = `inline-flex items-center justify-center rounded border px-2 py-0.5 text-xs font-semibold ${currentStyle.bg} ${currentStyle.border}`;
	if (!onChange || disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: chip,
		children: priority
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative inline-block text-left",
		ref: dropdownRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(!open),
			className: `${chip} cursor-pointer gap-1`,
			title: "Adjust priority (max 3 active P1)",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: priority }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 opacity-60" })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-0 z-50 mt-1 w-44 rounded-lg border border-line bg-raised py-1 shadow-panel",
			children: [
				"P1",
				"P2",
				"P3"
			].map((p) => {
				const isP1Locked = p === "P1" && priority !== "P1" && p1CapacityReached;
				const itemStyle = STYLES[p];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: isP1Locked,
					onClick: () => {
						if (!isP1Locked) {
							onChange(p);
							setOpen(false);
						}
					},
					className: `flex w-full items-center justify-between px-3 py-1.5 text-left text-xs ${isP1Locked ? "cursor-not-allowed bg-paper text-subtle opacity-50" : p === priority ? "bg-paper font-semibold text-ink" : "text-muted hover:bg-paper"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded border px-1.5 py-0.5 text-2xs font-semibold ${itemStyle.bg} ${itemStyle.border}`,
							children: p
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: itemStyle.label })]
					}), isP1Locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center text-2xs font-medium text-danger",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mr-0.5 h-3 w-3" }), " Max 3"]
					})]
				}, p);
			})
		})]
	});
}
//#endregion
export { PriorityBadge as t };
