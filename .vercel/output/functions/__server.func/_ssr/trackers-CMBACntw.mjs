import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as listMonthPeriods, B as useDeskModals, C as getMelbourneToday, D as getWeeksForPeriod, O as isOpenStatus, S as getMelbourneCurrentPeriod, _ as generateCellCandidates, g as formatPeriod, h as formatMelbourneMonthYear, m as formatAuShort, o as WORKSTREAM_LABELS, t as ALL_STATUSES, u as daysOverdue, z as useData } from "./desk-modals-BQoI-h6M.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { f as Plus } from "../_libs/lucide-react.mjs";
import { t as StatusChip } from "./StatusChip-BKwg4QCY.mjs";
import { n as Route } from "./router-DbYPmMbl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trackers-CMBACntw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "bas_ias",
		hint: "Rolling months · + fills a missing cell"
	},
	{
		id: "bookkeeping",
		hint: "W1–W5 of the selected month · weekly clients"
	},
	{
		id: "management_reports",
		hint: "Due 1 / 6 / 10 / 16 of following month"
	},
	{
		id: "supplier_payments",
		hint: "Mid 15th · EOM last day"
	},
	{
		id: "metka_bas",
		hint: "20 entities · July lodgement"
	},
	{
		id: "payroll_tax",
		hint: "Due 7th following month"
	},
	{
		id: "stp_payroll",
		hint: "Fortnightly / monthly"
	}
];
function TrackersScreen({ initialStream, onSelectObligation, onOpenClientDrawer }) {
	const validInitial = TABS.some((t) => t.id === initialStream) ? initialStream : "bas_ias";
	const [tab, setTab] = (0, import_react.useState)(validInitial);
	const currentPeriod = (0, import_react.useMemo)(() => getMelbourneCurrentPeriod(), []);
	const [focusPeriod, setFocusPeriod] = (0, import_react.useState)(currentPeriod);
	const { clients, obligations, updateObligationStatus, batchCreateObligations } = useData();
	const melbourneToday = (0, import_react.useMemo)(() => getMelbourneToday(), []);
	const [creatingKey, setCreatingKey] = (0, import_react.useState)(null);
	const horizon = (0, import_react.useMemo)(() => listMonthPeriods(currentPeriod, 2, 3), [currentPeriod]);
	const clientMap = (0, import_react.useMemo)(() => new Map(clients.map((c) => [c.id, c])), [clients]);
	const rows = (0, import_react.useMemo)(() => obligations.filter((o) => o.workstream === tab), [obligations, tab]);
	const weeks = (0, import_react.useMemo)(() => getWeeksForPeriod(focusPeriod), [focusPeriod]);
	const columns = (0, import_react.useMemo)(() => {
		if (tab === "metka_bas") {
			const set = /* @__PURE__ */ new Set();
			rows.forEach((o) => set.add(o.periodStart));
			return Array.from(set).sort();
		}
		if (tab === "bookkeeping") return weeks.map((w) => w.weekCode);
		if (tab === "supplier_payments") return [`${focusPeriod}|Mid`, `${focusPeriod}|EOM`];
		return horizon;
	}, [
		tab,
		rows,
		weeks,
		horizon,
		focusPeriod
	]);
	const grouped = (0, import_react.useMemo)(() => {
		if (tab === "metka_bas") return rows.slice().sort((a, b) => (a.entityName || "").localeCompare(b.entityName || "")).map((o) => ({
			key: o.id,
			label: o.entityName || "Entity",
			clientId: o.clientId,
			cells: { [o.periodStart]: o },
			notes: o.notes || "",
			client: clientMap.get(o.clientId)
		}));
		const byClient = /* @__PURE__ */ new Map();
		const relevantClients = clients.filter((c) => {
			if (c.inactive) return false;
			const s = c.services;
			if (tab === "bookkeeping") return s.weeklyBooks || s.monthlyBooks;
			if (tab === "bas_ias") return s.monthlyBAS || s.twoMonthlyIAS || s.quarterlyBAS;
			if (tab === "management_reports") return s.managementReports;
			if (tab === "supplier_payments") return s.paymentRun;
			if (tab === "payroll_tax") return s.payrollTax;
			if (tab === "stp_payroll") return s.stp;
			return true;
		});
		for (const client of relevantClients) byClient.set(client.id, {
			key: client.id,
			label: client.shortName || client.name,
			clientId: client.id,
			cells: {},
			notes: client.notes || "",
			client
		});
		for (const o of rows) {
			const client = clientMap.get(o.clientId);
			if (client?.inactive) continue;
			const col = columnKey(tab, o);
			if (!col) continue;
			if (tab === "bookkeeping" && !columns.includes(col)) continue;
			if (tab === "supplier_payments" && !columns.includes(col)) continue;
			const existing = byClient.get(o.clientId) || {
				key: o.clientId,
				label: client?.shortName || client?.name || o.clientId,
				clientId: o.clientId,
				cells: {},
				notes: client?.notes || "",
				client
			};
			const prev = existing.cells[col];
			if (!prev || (o.taskLabel || "").length >= (prev.taskLabel || "").length) existing.cells[col] = o;
			byClient.set(o.clientId, existing);
		}
		return Array.from(byClient.values()).sort((a, b) => a.label.localeCompare(b.label));
	}, [
		rows,
		clientMap,
		tab,
		clients,
		columns
	]);
	const openCount = rows.filter((o) => isOpenStatus(o.status)).length;
	const overdueCount = rows.filter((o) => isOpenStatus(o.status) && o.dueDate && o.dueDate < melbourneToday).length;
	const handleCreateCell = async (client, col) => {
		if (!client) return;
		const period = periodFromColumn(tab, col, focusPeriod);
		const weekCode = tab === "bookkeeping" ? col : tab === "supplier_payments" ? col.split("|")[1] : void 0;
		const candidates = generateCellCandidates(client, obligations, tab, period, weekCode);
		if (candidates.length === 0) return;
		const key = `${client.id}:${col}`;
		setCreatingKey(key);
		try {
			await batchCreateObligations(candidates);
		} finally {
			setCreatingKey(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-line pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: "Control sheet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Trackers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: "Month chips · tap status · + on an empty cell · red when late."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(item.id),
					className: cn("min-h-9 rounded-md border px-3 text-xs font-semibold", tab === item.id ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-paper hover:text-ink"),
					children: WORKSTREAM_LABELS[item.id]
				}, item.id))
			}),
			tab !== "metka_bas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: horizon.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFocusPeriod(p),
					className: cn("min-h-8 rounded-full border px-3 text-2xs font-semibold", p === focusPeriod ? "border-accent bg-accent text-accent-fg" : p === currentPeriod ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:text-ink"),
					children: [formatPeriod(p), p === currentPeriod ? " · now" : ""]
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 text-2xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						grouped.length,
						" rows · ",
						openCount,
						" open",
						overdueCount > 0 ? ` · ${overdueCount} overdue` : ""
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-subtle",
						children: TABS.find((t) => t.id === tab)?.hint
					}),
					tab === "bookkeeping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [formatMelbourneMonthYear(focusPeriod), " weeks"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-line bg-surface shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] border-collapse text-left text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line bg-paper text-2xs font-semibold uppercase tracking-wider text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "sticky left-0 z-10 min-w-[160px] bg-paper px-3 py-2.5",
								children: tab === "metka_bas" ? "Entity" : "Client"
							}), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: cn("min-w-[132px] px-2 py-2.5 text-center", isCurrentColumn(tab, col, currentPeriod, focusPeriod) && "text-accent"),
								children: formatColumn(tab, col, weeks)
							}, col))]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-line",
							children: grouped.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: columns.length + 1,
								className: "px-4 py-12 text-center text-muted",
								children: [
									"No ",
									WORKSTREAM_LABELS[tab].toLowerCase(),
									" rows yet. Open a period from Pipeline to generate them."
								]
							}) }) : grouped.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-paper/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "sticky left-0 z-10 bg-surface px-3 py-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => onOpenClientDrawer(row.clientId),
											className: "font-semibold text-ink hover:text-accent hover:underline",
											children: row.label
										}),
										tab === "bookkeeping" && row.client?.services.weeklyBooks && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xs text-subtle",
											children: "Weekly"
										}),
										tab === "bookkeeping" && row.client?.services.monthlyBooks && !row.client.services.weeklyBooks && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xs text-subtle",
											children: "Month-end"
										}),
										row.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "max-w-[220px] truncate text-2xs text-subtle",
											title: row.notes,
											children: row.notes
										}) : null
									]
								}), columns.map((col) => {
									const cell = row.cells[col];
									if (!cell) {
										const lastWeek = weeks[weeks.length - 1]?.weekCode;
										const monthlyOnly = tab === "bookkeeping" && row.client?.services.monthlyBooks && !row.client.services.weeklyBooks;
										const canAdd = tab !== "metka_bas" && Boolean(row.client) && !(monthlyOnly && col !== lastWeek);
										const busy = creatingKey === `${row.clientId}:${col}`;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2 text-center",
											children: canAdd ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: busy,
												onClick: () => void handleCreateCell(row.client, col),
												className: "inline-flex min-h-8 min-w-8 items-center justify-center rounded-md border border-dashed border-line text-subtle hover:border-accent hover:text-accent",
												title: "Create this cycle",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xs text-subtle",
												children: "—"
											})
										}, col);
									}
									const overdue = isOpenStatus(cell.status) && cell.dueDate && cell.dueDate < melbourneToday;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: cn("px-2 py-2 text-center", overdue && "bg-danger-soft/40"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
												status: cell.status,
												onChange: (s) => void updateObligationStatus(cell.id, s)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => onSelectObligation(cell),
												className: "text-2xs text-muted hover:text-accent",
												children: overdue ? `${daysOverdue(cell.dueDate, melbourneToday)}d late` : formatAuShort(cell.dueDate)
											})]
										})
									}, col);
								})]
							}, row.key))
						})]
					})
				})
			}),
			tab === "metka_bas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs text-muted",
				children: "July BAS: preparation, ATO statement and signing copy are done. Remaining step is lodgement (due 21 Aug). Cycle a chip to Ready → Done when lodged."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 text-2xs text-subtle",
				children: ALL_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-line bg-paper px-2 py-0.5",
					children: s
				}, s))
			})
		]
	});
}
function columnKey(tab, o) {
	if (tab === "bookkeeping") return o.weekCode || o.periodStart;
	if (tab === "supplier_payments") return `${o.periodStart}|${o.weekCode || "Run"}`;
	return o.periodStart;
}
function periodFromColumn(tab, col, focusPeriod) {
	if (tab === "supplier_payments") return col.split("|")[0] || focusPeriod;
	if (tab === "bookkeeping") return focusPeriod;
	return col;
}
function isCurrentColumn(tab, col, currentPeriod, focusPeriod) {
	if (tab === "bookkeeping") return focusPeriod === currentPeriod;
	if (tab === "supplier_payments") return col.startsWith(currentPeriod);
	return col === currentPeriod;
}
function formatColumn(tab, col, weeks) {
	if (tab === "bookkeeping") {
		const week = weeks.find((w) => w.weekCode === col);
		if (week) return `W${week.weekIndex} · ${formatAuShort(week.dueDate)}`;
		return col;
	}
	if (tab === "supplier_payments") {
		const [period, kind] = col.split("|");
		return `${formatPeriod(period)} ${kind}`;
	}
	return formatPeriod(col);
}
function TrackersPage() {
	const { stream } = Route.useSearch();
	const { setDrawerClientId, setSelectedObligation } = useDeskModals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackersScreen, {
		initialStream: stream,
		onOpenClientDrawer: (cid) => setDrawerClientId(cid),
		onSelectObligation: (ob) => setSelectedObligation(ob)
	});
}
//#endregion
export { TrackersPage as component };
