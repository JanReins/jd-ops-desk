import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ALL_STATUSES } from "./desk-modals-BQoI-h6M.mjs";
import { D as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusChip-BKwg4QCY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STYLES = {
	"Not started": {
		bg: "bg-paper hover:bg-paper",
		text: "text-muted",
		dot: "bg-subtle",
		label: "Not started"
	},
	"In progress": {
		bg: "bg-accent-soft hover:bg-accent-soft",
		text: "text-accent",
		dot: "bg-accent",
		label: "In progress"
	},
	"For review": {
		bg: "bg-warn-soft hover:bg-warn-soft",
		text: "text-warn",
		dot: "bg-warn",
		label: "For review"
	},
	"Waiting on client": {
		bg: "bg-warn-soft hover:bg-warn-soft",
		text: "text-warn",
		dot: "bg-warn",
		label: "Waiting"
	},
	Blocked: {
		bg: "bg-danger-soft hover:bg-danger-soft",
		text: "text-danger",
		dot: "bg-danger",
		label: "Blocked"
	},
	"Ready to lodge": {
		bg: "bg-ok-soft hover:bg-ok-soft",
		text: "text-ok",
		dot: "bg-ok",
		label: "Ready to lodge"
	},
	Done: {
		bg: "bg-ok-soft hover:bg-ok-soft",
		text: "text-ok",
		dot: "bg-ok",
		label: "Done"
	},
	"Not applicable": {
		bg: "bg-paper hover:bg-paper",
		text: "text-subtle",
		dot: "bg-subtle",
		label: "N/A"
	}
};
function StatusChip({ status, onChange, disabled = false, size = "sm" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const style = STATUS_STYLES[status] || STATUS_STYLES["Not started"];
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpen(false);
		}
		if (open) document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);
	const chipClass = `inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-semibold tracking-wide ${size === "sm" ? "text-2xs" : "text-xs"} ${style.bg} ${style.text}`;
	if (!onChange || disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: chipClass,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${style.dot}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			children: style.label
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative inline-block text-left",
		ref: dropdownRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(!open),
			className: `${chipClass} cursor-pointer`,
			title: "Update status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${style.dot}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "whitespace-nowrap",
					children: style.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-0.5 h-3 w-3 opacity-60" })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 z-50 mt-1 w-44 rounded-lg border border-line bg-raised py-1 shadow-panel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line px-3 py-1 text-2xs font-semibold uppercase tracking-wider text-subtle",
				children: "Set status"
			}), ALL_STATUSES.map((s) => {
				const itemStyle = STATUS_STYLES[s];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						onChange(s);
						setOpen(false);
					},
					className: `flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs transition-colors hover:bg-paper ${s === status ? "bg-paper font-semibold text-ink" : "text-muted"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${itemStyle.dot}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }),
						s === status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto text-2xs font-semibold text-accent",
							children: "Active"
						})
					]
				}, s);
			})]
		})]
	});
}
//#endregion
export { StatusChip as t };
