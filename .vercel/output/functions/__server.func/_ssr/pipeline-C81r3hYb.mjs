import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as listMonthPeriods, B as useDeskModals, C as getMelbourneToday, O as isOpenStatus, S as getMelbourneCurrentPeriod, b as getCourt, g as formatPeriod, h as formatMelbourneMonthYear, k as isTodayObligation, o as WORKSTREAM_LABELS, t as ALL_STATUSES, v as generateNextMonthCandidates, w as getNextMonthPeriod, y as generateRollingHorizon, z as useData } from "./desk-modals-BQoI-h6M.mjs";
import { A as CalendarPlus, C as CircleCheck, _ as Layers, c as Search, d as Repeat, m as PinOff, p as Pin, t as X, w as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as StatusChip } from "./StatusChip-BKwg4QCY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pipeline-C81r3hYb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PipelineScreen({ onSelectObligation, onOpenClientDrawer }) {
	const { clients, obligations, updateObligationStatus, updateObligationPriority, batchCreateObligations, pinToToday, unpinFromToday } = useData();
	const melbourneCurrentPeriod = (0, import_react.useMemo)(() => getMelbourneCurrentPeriod(), []);
	const melbourneToday = (0, import_react.useMemo)(() => getMelbourneToday(), []);
	const [selectedPeriod, setSelectedPeriod] = (0, import_react.useState)(melbourneCurrentPeriod);
	const [selectedWorkstream, setSelectedWorkstream] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [selectedClient, setSelectedClient] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [courtFilter, setCourtFilter] = (0, import_react.useState)("all");
	const [confirmModal, setConfirmModal] = (0, import_react.useState)({
		open: false,
		targetPeriod: "",
		title: "",
		candidates: [],
		creating: false
	});
	const [notification, setNotification] = (0, import_react.useState)(null);
	const clientMap = (0, import_react.useMemo)(() => {
		return new Map(clients.map((c) => [c.id, c]));
	}, [clients]);
	const availablePeriods = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		listMonthPeriods(melbourneCurrentPeriod, 2, 3).forEach((p) => set.add(p));
		obligations.forEach((o) => {
			if (o.periodStart && o.periodStart.endsWith("-01")) set.add(o.periodStart);
		});
		return Array.from(set).sort();
	}, [obligations, melbourneCurrentPeriod]);
	const horizonMissing = (0, import_react.useMemo)(() => generateRollingHorizon(clients, obligations, 2), [clients, obligations]);
	const targetThisPeriod = (0, import_react.useMemo)(() => {
		return selectedPeriod === "all" ? melbourneCurrentPeriod : selectedPeriod;
	}, [selectedPeriod, melbourneCurrentPeriod]);
	const targetNextPeriod = (0, import_react.useMemo)(() => {
		return getNextMonthPeriod(selectedPeriod === "all" ? melbourneCurrentPeriod : selectedPeriod);
	}, [selectedPeriod, melbourneCurrentPeriod]);
	const periodCounts = (0, import_react.useMemo)(() => {
		const counts = /* @__PURE__ */ new Map();
		obligations.forEach((o) => {
			if (o.periodStart) counts.set(o.periodStart, (counts.get(o.periodStart) || 0) + 1);
		});
		return counts;
	}, [obligations]);
	const otherPeriodWithRows = (0, import_react.useMemo)(() => {
		if (selectedPeriod === "all") return null;
		if ((periodCounts.get(selectedPeriod) || 0) > 0) return null;
		const sortedPeriodsWithRows = Array.from(periodCounts.entries()).filter(([p, count]) => p !== selectedPeriod && count > 0).sort((a, b) => b[0].localeCompare(a[0]));
		return sortedPeriodsWithRows.length > 0 ? sortedPeriodsWithRows[0][0] : null;
	}, [selectedPeriod, periodCounts]);
	const filteredObligations = (0, import_react.useMemo)(() => {
		return obligations.filter((ob) => {
			if (selectedPeriod !== "all" && ob.periodStart !== selectedPeriod) return false;
			if (selectedWorkstream !== "all" && ob.workstream !== selectedWorkstream) return false;
			if (selectedStatus !== "all" && ob.status !== selectedStatus) return false;
			if (selectedClient !== "all" && ob.clientId !== selectedClient) return false;
			if (courtFilter !== "all" && isOpenStatus(ob.status) && getCourt(ob.status) !== courtFilter) return false;
			if (courtFilter !== "all" && !isOpenStatus(ob.status)) return false;
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase().trim();
				const client = clientMap.get(ob.clientId);
				const cName = (client?.shortName || client?.name || "").toLowerCase();
				const nextAction = (ob.nextAction || "").toLowerCase();
				const blocker = (ob.blocker || "").toLowerCase();
				const waitingOn = (ob.waitingOn || "").toLowerCase();
				const notes = (ob.notes || "").toLowerCase();
				const owner = (ob.owner || "").toLowerCase();
				if (!cName.includes(q) && !nextAction.includes(q) && !blocker.includes(q) && !waitingOn.includes(q) && !notes.includes(q) && !owner.includes(q)) return false;
			}
			return true;
		});
	}, [
		obligations,
		selectedPeriod,
		selectedWorkstream,
		selectedStatus,
		selectedClient,
		searchQuery,
		clientMap,
		courtFilter
	]);
	const sortedObligations = (0, import_react.useMemo)(() => {
		return [...filteredObligations].sort((a, b) => {
			if (a.workstream !== b.workstream) return a.workstream.localeCompare(b.workstream);
			const dateA = a.dueDate || "9999-99-99";
			const dateB = b.dueDate || "9999-99-99";
			if (dateA !== dateB) return dateA.localeCompare(dateB);
			return (a.order || 0) - (b.order || 0);
		});
	}, [filteredObligations]);
	const statusBreakdown = (0, import_react.useMemo)(() => {
		const counts = {};
		for (const s of ALL_STATUSES) counts[s] = 0;
		for (const o of filteredObligations) counts[o.status] = (counts[o.status] || 0) + 1;
		return ALL_STATUSES.map((s) => ({
			status: s,
			count: counts[s] || 0
		})).filter((x) => x.count > 0);
	}, [filteredObligations]);
	const handleOpenThisPeriodClick = () => {
		const candidates = generateNextMonthCandidates(clients, obligations, targetThisPeriod);
		setConfirmModal({
			open: true,
			targetPeriod: targetThisPeriod,
			title: `Open This Period: ${formatMelbourneMonthYear(targetThisPeriod)}`,
			candidates,
			creating: false
		});
	};
	const handleOpenNextMonthClick = () => {
		const candidates = generateNextMonthCandidates(clients, obligations, targetNextPeriod);
		setConfirmModal({
			open: true,
			targetPeriod: targetNextPeriod,
			title: `Open ${formatMelbourneMonthYear(targetNextPeriod)}`,
			candidates,
			creating: false
		});
	};
	const handleOpenHorizonClick = () => {
		setConfirmModal({
			open: true,
			targetPeriod: melbourneCurrentPeriod,
			title: `Fill ${formatMelbourneMonthYear(melbourneCurrentPeriod)} – ${formatMelbourneMonthYear(getNextMonthPeriod(getNextMonthPeriod(melbourneCurrentPeriod)))}`,
			candidates: horizonMissing,
			creating: false
		});
	};
	const handleConfirmCreateNextMonth = async () => {
		setConfirmModal((prev) => ({
			...prev,
			creating: true
		}));
		try {
			const createdCount = await batchCreateObligations(confirmModal.candidates);
			const targetP = confirmModal.targetPeriod;
			setConfirmModal({
				open: false,
				targetPeriod: "",
				title: "",
				candidates: [],
				creating: false
			});
			setNotification(`Successfully created ${createdCount} obligations for ${formatMelbourneMonthYear(targetP)}.`);
			setSelectedPeriod(targetP);
			setTimeout(() => setNotification(null), 6e3);
		} catch (err) {
			setConfirmModal((prev) => ({
				...prev,
				creating: false
			}));
			const msg = err instanceof Error ? err.message : "Failed to create obligations";
			alert(msg);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: "Master ledger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Compliance pipeline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: "Recurring work rolls forward each month. Weekly bookkeeping opens as W1–W5, not a single lump."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "open-this-period-pipeline-btn",
							type: "button",
							onClick: handleOpenThisPeriodClick,
							className: "flex min-h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:bg-paper",
							title: `Generate obligations for ${formatMelbourneMonthYear(targetThisPeriod)} from client service flags`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-3.5 w-3.5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Open ", formatMelbourneMonthYear(targetThisPeriod)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "open-next-month-pipeline-btn",
							type: "button",
							onClick: handleOpenNextMonthClick,
							className: "flex min-h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Open ", formatMelbourneMonthYear(targetNextPeriod)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "fill-horizon-pipeline-btn",
							type: "button",
							onClick: handleOpenHorizonClick,
							disabled: horizonMissing.length === 0,
							className: "flex min-h-9 items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg hover:bg-accent-mid disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: horizonMissing.length > 0 ? `Fill missing (${horizonMissing.length})` : "Horizon filled" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSelectedPeriod("all"),
					className: `min-h-8 rounded-full border px-3 text-2xs font-semibold ${selectedPeriod === "all" ? "border-accent bg-accent text-accent-fg" : "border-line bg-surface text-muted hover:text-ink"}`,
					children: "All"
				}), availablePeriods.map((p) => {
					const count = periodCounts.get(p) || 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelectedPeriod(p),
						className: `min-h-8 rounded-full border px-3 text-2xs font-semibold ${selectedPeriod === p ? "border-accent bg-accent text-accent-fg" : p === melbourneCurrentPeriod ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:text-ink"}`,
						children: [
							formatPeriod(p),
							count > 0 ? ` · ${count}` : "",
							p === melbourneCurrentPeriod ? " · now" : ""
						]
					}, p);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [
					"all",
					"mine",
					"theirs"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCourtFilter(c),
					className: `min-h-8 rounded-full border px-3 text-2xs font-semibold ${courtFilter === c ? "border-accent bg-accent text-accent-fg" : "border-line bg-surface text-muted hover:text-ink"}`,
					children: c === "all" ? "All courts" : c === "mine" ? "My court" : "Watching"
				}, c))
			}),
			statusBreakdown.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8",
				children: statusBreakdown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedStatus(row.status === selectedStatus ? "all" : row.status),
					className: `rounded-lg border px-2.5 py-2 text-left transition-colors ${selectedStatus === row.status ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-paper"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: row.status
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 font-mono text-lg font-semibold tabular-nums text-ink",
						children: row.count
					})]
				}, row.status))
			}),
			notification && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-800 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notification })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setNotification(null),
					className: "text-emerald-700 hover:text-emerald-900 font-bold px-1 cursor-pointer",
					children: "✕"
				})]
			}),
			otherPeriodWithRows && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-amber-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"No obligations for ",
						formatMelbourneMonthYear(selectedPeriod),
						". Demo / leftover work is in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-semibold",
							children: formatMelbourneMonthYear(otherPeriodWithRows)
						}),
						"."
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedPeriod(otherPeriodWithRows),
					className: "px-3 py-1 rounded bg-amber-700 hover:bg-amber-800 text-accent-fg font-semibold text-xs shrink-0 cursor-pointer shadow-2xs transition-colors",
					children: ["View ", formatMelbourneMonthYear(otherPeriodWithRows)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-lg p-3 shadow-xs space-y-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-1",
							children: "Period"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedPeriod,
							onChange: (e) => setSelectedPeriod(e.target.value),
							className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-800 font-medium focus:border-blue-500 focus:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Periods"
							}), availablePeriods.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: p,
								children: [
									formatMelbourneMonthYear(p),
									" (",
									p,
									")"
								]
							}, p))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-1",
							children: "Workstream"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedWorkstream,
							onChange: (e) => setSelectedWorkstream(e.target.value),
							className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-800 font-medium focus:border-blue-500 focus:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Workstreams"
							}), Object.keys(WORKSTREAM_LABELS).map((ws) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: ws,
								children: WORKSTREAM_LABELS[ws]
							}, ws))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-1",
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedStatus,
							onChange: (e) => setSelectedStatus(e.target.value),
							className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-800 font-medium focus:border-blue-500 focus:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Statuses"
							}), ALL_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-1",
							children: "Client"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedClient,
							onChange: (e) => setSelectedClient(e.target.value),
							className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-800 font-medium focus:border-blue-500 focus:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Clients"
							}), clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: c.id,
								children: [
									c.shortName,
									" (",
									c.name,
									")"
								]
							}, c.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-1",
							children: "Search"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search keywords...",
								className: "w-full rounded border border-slate-300 bg-white pl-7 pr-2 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
							})]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-2xs text-slate-500 pt-1 border-t border-slate-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"Showing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-slate-800",
							children: sortedObligations.length
						}),
						" of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-slate-800",
							children: obligations.length
						}),
						" total obligations in pipeline"
					] }), (selectedPeriod !== "all" || selectedWorkstream !== "all" || selectedStatus !== "all" || selectedClient !== "all" || searchQuery) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSelectedPeriod("all");
							setSelectedWorkstream("all");
							setSelectedStatus("all");
							setSelectedClient("all");
							setSearchQuery("");
						},
						className: "text-blue-700 hover:text-blue-900 font-medium hover:underline cursor-pointer",
						children: "Clear filters"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2 md:hidden",
				children: sortedObligations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-line bg-surface px-4 py-10 text-center text-xs text-muted",
					children: "No obligations match these filters."
				}) : sortedObligations.slice(0, 80).map((ob) => {
					const client = clientMap.get(ob.clientId);
					const isOverdue = !(ob.status === "Done" || ob.status === "Not applicable") && ob.dueDate && ob.dueDate < melbourneToday;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "button",
						tabIndex: 0,
						onClick: () => onSelectObligation(ob),
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								onSelectObligation(ob);
							}
						},
						className: `rounded-lg border p-3 text-left ${isOverdue ? "border-danger/30 bg-danger-soft/40" : "border-line bg-surface"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-semibold text-ink",
								children: [
									client?.shortName || "Client",
									" · ",
									WORKSTREAM_LABELS[ob.workstream]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-2xs text-muted",
								children: ob.taskLabel || ob.nextAction || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-2",
								onClick: (e) => e.stopPropagation(),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono text-2xs ${isOverdue ? "font-semibold text-danger" : "text-muted"}`,
										children: ob.dueDate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
										status: ob.status,
										onChange: (newStatus) => void updateObligationStatus(ob.id, newStatus)
									}),
									isOpenStatus(ob.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => isTodayObligation(ob) ? void unpinFromToday(ob.id) : void pinToToday(ob.id),
										className: "ml-auto inline-flex min-h-8 items-center gap-1 rounded px-1.5 text-2xs font-semibold text-muted hover:text-accent",
										children: isTodayObligation(ob) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "h-3 w-3" }), " Park"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3 w-3" }), " Today"] })
									})
								]
							})
						]
					}, ob.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-hidden rounded-lg border border-line bg-surface shadow-xs md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-slate-50 border-b border-slate-200 text-2xs font-semibold text-slate-600 uppercase tracking-wider",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-28",
									children: "Client"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-32",
									children: "Workstream"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-24",
									children: "Period"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-24",
									children: "Due Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-36",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-16 text-center",
									children: "Priority"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 min-w-[200px]",
									children: "Next Action"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 min-w-[160px]",
									children: "Blocker / Waiting On"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-24",
									children: "Owner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-3 w-16 text-center",
									children: "Plan"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-slate-200",
							children: sortedObligations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 10,
								className: "py-12 text-center text-slate-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-8 w-8 mx-auto mb-2 text-slate-300" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-slate-600",
										children: selectedPeriod === "all" ? "No obligations found for the selected pipeline criteria." : `No obligations for ${formatMelbourneMonthYear(selectedPeriod)}.`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xs text-slate-400 mt-0.5",
										children: selectedPeriod !== "all" ? `Switch period, or use "Open this period from prior month services" to generate ${formatMelbourneMonthYear(selectedPeriod)} commitments.` : "Adjust your filters or use generation controls to create commitments."
									})
								]
							}) }) : sortedObligations.map((ob) => {
								const client = clientMap.get(ob.clientId);
								const isDone = ob.status === "Done" || ob.status === "Not applicable";
								const isOverdue = !isDone && ob.dueDate && ob.dueDate < melbourneToday;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									onClick: () => onSelectObligation(ob),
									className: `hover:bg-slate-50/80 transition-colors cursor-pointer ${ob.priority === "P1" && !isDone ? "bg-amber-50/20" : isOverdue ? "bg-red-50/20" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												onClick: (e) => {
													e.stopPropagation();
													if (ob.clientId) onOpenClientDrawer(ob.clientId);
												},
												className: "font-bold text-slate-900 hover:text-blue-700 hover:underline cursor-pointer",
												children: client?.shortName || client?.name || "Client"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 font-semibold text-slate-800",
											children: WORKSTREAM_LABELS[ob.workstream] || ob.workstream
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-slate-600 font-mono text-2xs",
											children: formatPeriod(ob.periodStart)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2.5 px-3 font-mono text-xs whitespace-nowrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: isOverdue ? "text-red-700 font-bold" : isDone ? "text-slate-400 line-through" : "text-slate-700",
												children: ob.dueDate
											}), isOverdue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-2xs text-red-600 font-semibold leading-none mt-0.5",
												children: "Overdue"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
												status: ob.status,
												onChange: (newStatus) => updateObligationStatus(ob.id, newStatus)
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-center",
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: ob.priority,
												onChange: (e) => updateObligationPriority(ob.id, e.target.value),
												className: "bg-transparent text-xs font-semibold focus:outline-none cursor-pointer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "P1",
														children: "P1"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "P2",
														children: "P2"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "P3",
														children: "P3"
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-slate-900 truncate max-w-xs font-medium",
											children: ob.nextAction || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-2xs truncate max-w-xs",
											children: ob.blocker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-red-600 font-semibold",
												children: ["Block: ", ob.blocker]
											}) : ob.waitingOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-amber-700 font-medium",
												children: ["Wait: ", ob.waitingOn]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-400",
												children: "—"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-2xs text-slate-600 truncate",
											children: ob.owner || "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2.5 px-3 text-center",
											onClick: (e) => e.stopPropagation(),
											children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xs text-subtle",
												children: "—"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												title: isTodayObligation(ob) ? "Park from today" : "Pin to today",
												onClick: () => isTodayObligation(ob) ? void unpinFromToday(ob.id) : void pinToToday(ob.id),
												className: `inline-flex min-h-8 min-w-8 items-center justify-center rounded ${isTodayObligation(ob) ? "bg-accent-soft text-accent" : "text-muted hover:bg-paper hover:text-accent"}`,
												children: isTodayObligation(ob) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "h-3.5 w-3.5" })
											})
										})
									]
								}, ob.id);
							})
						})]
					})
				})
			}),
			confirmModal.open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-modal overflow-y-auto bg-ink/40 backdrop-blur-xs flex items-center justify-center p-4",
				onClick: () => {
					if (!confirmModal.creating) setConfirmModal({
						open: false,
						targetPeriod: "",
						title: "",
						candidates: [],
						creating: false
					});
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-slate-200 px-5 py-3.5 bg-slate-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4 text-blue-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-slate-900",
								children: confirmModal.title || `Open Period: ${formatMelbourneMonthYear(confirmModal.targetPeriod)}`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: confirmModal.creating,
							onClick: () => setConfirmModal({
								open: false,
								targetPeriod: "",
								title: "",
								candidates: [],
								creating: false
							}),
							className: "p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 space-y-4 text-xs",
						children: [confirmModal.candidates.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-900 leading-relaxed",
							children: [
								"Will create",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "font-bold",
									children: [confirmModal.candidates.length, " obligations"]
								}),
								" ",
								"for period ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-bold",
									children: formatMelbourneMonthYear(confirmModal.targetPeriod)
								}),
								" (",
								confirmModal.targetPeriod,
								") across your active clients based on their contracted service agreements."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-60 overflow-y-auto border border-slate-200 rounded-md divide-y divide-slate-100 bg-slate-50/50",
							children: confirmModal.candidates.map((cand, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 flex items-center justify-between gap-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-semibold text-slate-900",
									children: [
										cand.clientShortName,
										" • ",
										WORKSTREAM_LABELS[cand.workstream]
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xs text-slate-500",
									children: cand.nextAction
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-slate-700 font-semibold",
										children: ["Due ", cand.dueDate]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-2xs text-slate-400",
										children: ["Owner: ", cand.owner]
									})]
								})]
							}, i))
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 text-center text-slate-500 bg-slate-50 rounded-md border border-slate-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6 text-emerald-600 mx-auto mb-1.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-slate-800",
									children: [
										"All obligations for ",
										formatMelbourneMonthYear(confirmModal.targetPeriod),
										" already exist!"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xs text-slate-400 mt-1",
									children: "No new obligations need to be generated for this period."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-3 border-t border-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: confirmModal.creating,
								onClick: () => setConfirmModal({
									open: false,
									targetPeriod: "",
									title: "",
									candidates: [],
									creating: false
								}),
								className: "px-3 py-1.5 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs",
								children: confirmModal.candidates.length > 0 ? "Cancel" : "Close"
							}), confirmModal.candidates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: confirmModal.creating,
								onClick: handleConfirmCreateNextMonth,
								className: "flex items-center gap-1.5 px-4 py-1.5 rounded bg-accent hover:bg-accent-mid text-xs font-semibold text-accent-fg disabled:opacity-50 cursor-pointer shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: confirmModal.creating ? "Creating Batch..." : `Confirm & Create ${confirmModal.candidates.length} Obligations` })]
							})]
						})]
					})]
				})
			})
		]
	});
}
function PipelinePage() {
	const { setDrawerClientId, setSelectedObligation } = useDeskModals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineScreen, {
		onOpenClientDrawer: (cid) => setDrawerClientId(cid),
		onSelectObligation: (ob) => setSelectedObligation(ob)
	});
}
//#endregion
export { PipelinePage as component };
