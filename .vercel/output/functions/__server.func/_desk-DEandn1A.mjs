import { i as __toESM } from "./_runtime.mjs";
import { R as require_jsx_runtime, d as useRouterState, m as Outlet, v as Link, z as require_react } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as useDeskModals, C as getMelbourneToday, E as getTodaySet, N as parseSnapshot, S as getMelbourneCurrentPeriod, T as getTaskTitle, c as checkSnapshotOrphans, f as exportSnapshot, g as formatPeriod, h as formatMelbourneMonthYear, i as SERVICE_LABELS, n as DataProvider, o as WORKSTREAM_LABELS, r as DeskModalsProvider, t as ALL_STATUSES, v as generateNextMonthCandidates, w as getNextMonthPeriod, z as useData } from "./_ssr/desk-modals-BQoI-h6M.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { A as CalendarPlus, C as CircleCheck, _ as Layers, a as Table2, b as FileText, f as Plus, h as LoaderCircle, i as TriangleAlert, k as Calendar, l as Save, n as Users, r as Upload, s as Settings2, t as X, u as RotateCcw, w as CircleAlert, x as Download, y as GitCommitHorizontal } from "./_libs/lucide-react.mjs";
import { t as StatusChip } from "./_ssr/StatusChip-BKwg4QCY.mjs";
import { t as PriorityBadge } from "./_ssr/PriorityBadge-DfOEYoEV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_desk-DEandn1A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { obligations, clients, resetToDemoData, importSnapshotData } = useData();
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	const [resetting, setResetting] = (0, import_react.useState)(false);
	const [showTools, setShowTools] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const currentPeriodLabel = (0, import_react.useMemo)(() => formatMelbourneMonthYear(), []);
	const melbourneToday = (0, import_react.useMemo)(() => getMelbourneToday(), []);
	const todayObligationsCount = (0, import_react.useMemo)(() => getTodaySet(obligations, melbourneToday).filter((o) => o.status !== "Done").length, [obligations, melbourneToday]);
	const handleReset = async () => {
		setResetting(true);
		try {
			await resetToDemoData();
			setConfirmReset(false);
			setShowTools(false);
		} catch (err) {
			console.error("Failed to reset:", err);
		} finally {
			setResetting(false);
		}
	};
	const handleExportJson = () => {
		try {
			const blob = exportSnapshot(clients, obligations, "Jan");
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `ops-desk-${melbourneToday}.json`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("Failed to export snapshot:", err);
			window.alert("Failed to export JSON snapshot.");
		}
	};
	const handleImportFile = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			const text = await file.text();
			const snapshot = parseSnapshot(text);
			const { orphanCount } = checkSnapshotOrphans(snapshot);
			let confirmMsg = `Replace local desk with ${snapshot.clients.length} clients and ${snapshot.obligations.length} obligations from this file?`;
			if (orphanCount > 0) confirmMsg = `Warning: ${orphanCount} obligation(s) reference client IDs not included in this snapshot.\n\n${confirmMsg}`;
			if (window.confirm(confirmMsg)) {
				await importSnapshotData(snapshot);
				setShowTools(false);
			}
		} catch (err) {
			console.error("Failed to import snapshot:", err);
			window.alert(err instanceof Error ? err.message : "Failed to import JSON snapshot.");
		} finally {
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	const tabs = [
		{
			to: "/",
			label: "Today",
			icon: Calendar,
			count: todayObligationsCount,
			match: (p) => p === "/"
		},
		{
			to: "/pipeline",
			label: "Pipeline",
			icon: GitCommitHorizontal,
			count: obligations.filter((o) => o.status !== "Done" && o.status !== "Not applicable").length,
			match: (p) => p.startsWith("/pipeline")
		},
		{
			to: "/trackers",
			label: "Trackers",
			icon: Table2,
			count: 0,
			match: (p) => p.startsWith("/trackers")
		},
		{
			to: "/clients",
			label: "Clients",
			icon: Users,
			count: clients.filter((c) => !c.inactive).length,
			match: (p) => p.startsWith("/clients")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-nav border-b border-line bg-surface/95 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-14 w-full min-w-0 max-w-7xl flex-wrap items-center justify-between gap-y-2 px-4 py-1 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm bg-accent px-2 py-1 text-sm font-bold tracking-tight text-accent-fg shadow-xs",
							children: "JD OPS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base font-semibold tracking-tight text-ink sm:text-lg",
								children: "Operations Desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 hidden border-l border-line px-2 text-xs text-muted sm:inline",
								children: currentPeriodLabel
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-5 w-px bg-line sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-wrap items-center gap-1",
						children: tabs.map((tab) => {
							const active = tab.match(pathname);
							const Icon = tab.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: tab.to,
								className: cn("flex min-h-9 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3", active ? "border border-accent/20 bg-accent-soft text-accent shadow-xs" : "text-muted hover:bg-paper hover:text-ink"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label }),
									tab.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-full px-1.5 py-0.5 text-2xs font-bold tabular-nums", active ? "bg-accent/15 text-accent" : "border border-line bg-paper text-muted"),
										children: tab.count
									})
								]
							}, tab.to);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowTools((v) => !v),
							className: "flex min-h-9 items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-medium text-muted transition-colors hover:bg-paper hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Ledger"
							})]
						}), showTools && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-0 z-50 mt-1.5 w-56 rounded-lg border border-line bg-raised py-1 shadow-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleExportJson,
									className: "flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-ink hover:bg-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5 text-muted" }), "Export snapshot"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-ink hover:bg-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5 text-muted" }), "Import snapshot"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 border-t border-line" }),
								confirmReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 px-3 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1 text-2xs font-medium text-ink",
											children: "Reset to workbook?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											disabled: resetting,
											onClick: () => void handleReset(),
											className: "rounded bg-accent px-2 py-0.5 text-2xs font-semibold text-accent-fg",
											children: resetting ? "…" : "Yes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setConfirmReset(false),
											className: "rounded border border-line bg-surface px-2 py-0.5 text-2xs text-muted",
											children: "No"
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setConfirmReset(true),
									className: "flex w-full items-center gap-2 px-3 py-2 text-left text-xs text-ink hover:bg-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5 text-muted" }), "Reset to workbook"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileInputRef,
						type: "file",
						accept: ".json",
						onChange: (e) => void handleImportFile(e),
						className: "hidden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-l border-line pl-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent",
							children: "J"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden flex-col text-left md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xs leading-tight font-semibold text-ink",
								children: "Jan · Practitioner"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-[140px] truncate text-2xs leading-none text-subtle",
								children: "Local Melbourne ledger"
							})]
						})]
					})
				]
			})]
		})
	});
}
function ClientDrawer({ client, obligations, onClose, onUpdateClient, onUpdateObligationStatus, onSelectObligation, onAddObligationForClient }) {
	const { batchCreateObligations } = useData();
	const [notes, setNotes] = (0, import_react.useState)(client?.notes || "");
	const [maDueDay, setMaDueDay] = (0, import_react.useState)(client?.maDueDay || 15);
	const [services, setServices] = (0, import_react.useState)(client?.services || {
		monthlyBAS: false,
		twoMonthlyIAS: false,
		quarterlyBAS: false,
		weeklyBooks: false,
		monthlyBooks: false,
		paymentRun: false,
		managementReports: false,
		payrollTax: false,
		stp: false
	});
	const [software, setSoftware] = (0, import_react.useState)(client?.software || "Xero");
	const [junior, setJunior] = (0, import_react.useState)(client?.junior || "");
	const [senior, setSenior] = (0, import_react.useState)(client?.senior || "");
	const [manager, setManager] = (0, import_react.useState)(client?.manager || "JD");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [saveSuccess, setSaveSuccess] = (0, import_react.useState)(false);
	const [confirmModal, setConfirmModal] = (0, import_react.useState)({
		open: false,
		targetPeriod: "",
		candidates: [],
		creating: false
	});
	const [nextMonthSuccess, setNextMonthSuccess] = (0, import_react.useState)(null);
	const nextMelbournePeriod = (0, import_react.useMemo)(() => {
		return getNextMonthPeriod(getMelbourneCurrentPeriod());
	}, []);
	if (!client) return null;
	const clientObligations = obligations.filter((o) => o.clientId === client.id);
	const openObligations = clientObligations.filter((o) => o.status !== "Done" && o.status !== "Not applicable");
	const completedObligations = clientObligations.filter((o) => o.status === "Done");
	const handleToggleService = (key) => {
		setServices((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	};
	const handleSaveClientDetails = async () => {
		setSaving(true);
		try {
			await onUpdateClient(client.id, {
				notes,
				maDueDay: Number(maDueDay),
				services,
				software,
				junior,
				senior,
				manager
			});
			setSaveSuccess(true);
			setTimeout(() => setSaveSuccess(false), 2e3);
		} catch (err) {
			console.error("Error saving client details:", err);
		} finally {
			setSaving(false);
		}
	};
	const handleOpenNextMonthClick = () => {
		const candidates = generateNextMonthCandidates([client], obligations, nextMelbournePeriod, client.id);
		setConfirmModal({
			open: true,
			targetPeriod: nextMelbournePeriod,
			candidates,
			creating: false
		});
	};
	const handleConfirmCreateNextMonth = async () => {
		setConfirmModal((prev) => ({
			...prev,
			creating: true
		}));
		try {
			const count = await batchCreateObligations(confirmModal.candidates);
			setConfirmModal({
				open: false,
				targetPeriod: "",
				candidates: [],
				creating: false
			});
			setNextMonthSuccess(`Created ${count} new obligations for ${formatMelbourneMonthYear(nextMelbournePeriod)}.`);
			setTimeout(() => setNextMonthSuccess(null), 5e3);
		} catch (err) {
			setConfirmModal((prev) => ({
				...prev,
				creating: false
			}));
			const msg = err instanceof Error ? err.message : "Failed to generate next month";
			alert(msg);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-drawer overflow-hidden bg-ink/40 backdrop-blur-xs flex justify-end",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl h-full bg-white shadow-2xl flex flex-col border-l border-slate-200 overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-slate-200 px-6 py-4 bg-slate-50 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800",
								children: client.shortName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200",
								children: client.software
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-slate-500",
								children: ["MA Due: Day ", client.maDueDay || "15"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-slate-900 leading-tight",
						children: client.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-400 text-2xs uppercase font-bold tracking-wider",
							children: "Junior"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-slate-800",
							children: client.junior || "Unassigned"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-400 text-2xs uppercase font-bold tracking-wider",
							children: "Senior"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-slate-800",
							children: client.senior || "Unassigned"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-400 text-2xs uppercase font-bold tracking-wider",
							children: "Manager"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-slate-800",
							children: client.manager || "JD"
						})] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-6 space-y-6 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-slate-200 bg-slate-50/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5 text-slate-500" }), "Contracted Services"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xs text-slate-500",
								children: [Object.values(services).filter(Boolean).length, " of 9 active"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
							children: Object.keys(SERVICE_LABELS).map((key) => {
								const isActive = services[key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleToggleService(key),
									className: `flex items-center justify-between p-2 rounded border text-left text-xs transition-colors cursor-pointer ${isActive ? "bg-white border-blue-300 text-blue-900 font-semibold shadow-xs" : "bg-slate-100/60 border-slate-200 text-slate-400 hover:bg-slate-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate mr-1",
										children: SERVICE_LABELS[key]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `h-4 w-4 rounded flex items-center justify-center shrink-0 text-2xs ${isActive ? "bg-accent text-accent-fg" : "border border-slate-300 bg-white text-transparent"}`,
										children: "✓"
									})]
								}, key);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-slate-200 p-4 bg-white shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between mb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-slate-500" }), "Firm Operational Notes"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								placeholder: "Operational peculiarities, lodgement nuances, client contacts...",
								className: "w-full rounded border border-slate-300 p-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleSaveClientDetails,
									disabled: saving,
									className: "flex items-center gap-1.5 px-3 py-1 rounded bg-blue-700 hover:bg-accent-mid text-2xs font-semibold text-accent-fg transition-colors disabled:opacity-50 cursor-pointer shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saving ? "Saving..." : saveSuccess ? "Saved!" : "Save Notes & Services" })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-bold text-slate-900 text-xs uppercase tracking-wider",
									children: [
										"Open Obligations (",
										openObligations.length,
										")"
									]
								}), completedObligations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xs text-slate-500",
									children: [
										"(",
										completedObligations.length,
										" done)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									id: "open-next-month-client-btn",
									type: "button",
									onClick: handleOpenNextMonthClick,
									title: `Open obligations for ${formatMelbourneMonthYear(nextMelbournePeriod)}`,
									className: "flex items-center gap-1 px-2.5 py-1 rounded border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Open ", formatMelbourneMonthYear(nextMelbournePeriod)] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onAddObligationForClient(client.id),
									className: "flex items-center gap-1 px-2.5 py-1 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 text-slate-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add" })]
								})]
							})]
						}),
						nextMonthSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 rounded-md border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-800 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nextMonthSuccess })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setNextMonthSuccess(null),
								className: "text-emerald-700 font-bold px-1",
								children: "✕"
							})]
						}),
						openObligations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-dashed border-slate-200 p-6 text-center text-slate-500 text-xs",
							children: "No active open obligations for this client."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: openObligations.map((ob) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-slate-200 bg-white p-3 hover:border-slate-300 transition-all cursor-pointer shadow-xs",
								onClick: () => onSelectObligation(ob),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, {
													priority: ob.priority,
													disabled: true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-slate-900 text-xs",
													children: getTaskTitle(ob, client)
												}),
												ob.carryOver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs font-semibold px-1 rounded bg-amber-100 text-amber-800",
													children: "Carry"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
												status: ob.status,
												onChange: (s) => onUpdateObligationStatus(ob.id, s)
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-2xs text-slate-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Due: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-slate-700",
												children: ob.dueDate
											})] }), ob.estimatedMinutes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Est: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-slate-700",
												children: [ob.estimatedMinutes, "m"]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-slate-400",
											children: ["Owner: ", ob.owner || "—"]
										})]
									}),
									ob.nextAction && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1.5 text-2xs text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-100 truncate",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-slate-700",
												children: "Next:"
											}),
											" ",
											ob.nextAction
										]
									}),
									ob.blocker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-2xs text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Blocker:" }),
											" ",
											ob.blocker
										]
									})
								]
							}, ob.id))
						}),
						completedObligations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 pt-4 border-t border-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xs font-bold text-slate-400 uppercase tracking-wider block mb-2",
								children: [
									"Completed Obligations (",
									completedObligations.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: completedObligations.map((ob) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => onSelectObligation(ob),
									className: "flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200 text-xs text-slate-500 hover:bg-slate-100 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 truncate",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-through",
											children: getTaskTitle(ob, client)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-700 text-2xs font-semibold shrink-0",
										children: "Done ✓"
									})]
								}, ob.id))
							})]
						})
					] })
				]
			})]
		}), confirmModal.open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-modal overflow-y-auto bg-ink/50 backdrop-blur-xs flex items-center justify-center p-4",
			onClick: () => {
				if (!confirmModal.creating) setConfirmModal({
					open: false,
					targetPeriod: "",
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4 text-blue-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-slate-900",
							children: [
								"Open ",
								formatMelbourneMonthYear(confirmModal.targetPeriod),
								" — ",
								client.shortName
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: confirmModal.creating,
						onClick: () => setConfirmModal({
							open: false,
							targetPeriod: "",
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
							"for period",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold",
								children: formatMelbourneMonthYear(confirmModal.targetPeriod)
							}),
							" ",
							"for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-bold",
								children: client.name
							}),
							" based on active service agreements."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-60 overflow-y-auto border border-slate-200 rounded-md divide-y divide-slate-100 bg-slate-50/50",
						children: confirmModal.candidates.map((cand, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2.5 flex items-center justify-between gap-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-slate-900",
								children: WORKSTREAM_LABELS[cand.workstream] || cand.workstream
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xs text-slate-400 mt-1",
								children: [
									"No new obligations need to be generated for this client in ",
									formatMelbourneMonthYear(confirmModal.targetPeriod),
									"."
								]
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: confirmModal.creating ? "Creating..." : `Confirm & Create ${confirmModal.candidates.length} Obligations` })]
						})]
					})]
				})]
			})
		})]
	});
}
function ObligationDetailModal({ obligation, client, p1Count, onClose, onSave, onPriorityChange }) {
	const [notes, setNotes] = (0, import_react.useState)("");
	const [nextAction, setNextAction] = (0, import_react.useState)("");
	const [blocker, setBlocker] = (0, import_react.useState)("");
	const [waitingOn, setWaitingOn] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Not started");
	const [priority, setPriority] = (0, import_react.useState)("P3");
	const [estimatedMinutes, setEstimatedMinutes] = (0, import_react.useState)("");
	const [dueDate, setDueDate] = (0, import_react.useState)("");
	const [carryOver, setCarryOver] = (0, import_react.useState)(false);
	const [onTodayPlan, setOnTodayPlan] = (0, import_react.useState)(false);
	const [owner, setOwner] = (0, import_react.useState)("");
	const [reviewer, setReviewer] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [successMsg, setSuccessMsg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (obligation) {
			setNotes(obligation.notes || "");
			setNextAction(obligation.nextAction || "");
			setBlocker(obligation.blocker || "");
			setWaitingOn(obligation.waitingOn || "");
			setStatus(obligation.status);
			setPriority(obligation.priority);
			setEstimatedMinutes(obligation.estimatedMinutes !== void 0 ? obligation.estimatedMinutes : "");
			setDueDate(obligation.dueDate || "");
			setCarryOver(!!obligation.carryOver);
			setOnTodayPlan(!!obligation.onTodayPlan);
			setOwner(obligation.owner || "");
			setReviewer(obligation.reviewer || "");
			setErrorMsg(null);
			setSuccessMsg(null);
		}
	}, [obligation]);
	if (!obligation) return null;
	const handlePrioritySelect = async (newPriority) => {
		if (newPriority === priority) return;
		const res = await onPriorityChange(obligation.id, newPriority);
		if (!res.success) setErrorMsg(res.message || "Cannot change priority");
		else {
			setPriority(newPriority);
			setErrorMsg(null);
		}
	};
	const handleSave = async (e) => {
		if (e) e.preventDefault();
		setSaving(true);
		setErrorMsg(null);
		try {
			await onSave(obligation.id, {
				notes,
				nextAction,
				blocker,
				waitingOn,
				status,
				dueDate,
				carryOver,
				onTodayPlan,
				owner,
				reviewer,
				estimatedMinutes: estimatedMinutes === "" ? void 0 : Number(estimatedMinutes)
			});
			setSuccessMsg("Saved to local ledger");
			setTimeout(() => {
				setSuccessMsg(null);
				onClose();
			}, 500);
		} catch (err) {
			setErrorMsg(err instanceof Error ? err.message : "Error saving obligation");
		} finally {
			setSaving(false);
		}
	};
	const isP1Max = p1Count >= 3 && obligation.priority !== "P1";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-modal overflow-y-auto bg-ink/40 backdrop-blur-xs flex items-center justify-center p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between border-b border-slate-200 px-5 py-4 bg-slate-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono font-semibold text-slate-500 uppercase",
									children: ["Order #", obligation.order]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, {
									priority,
									onChange: handlePrioritySelect,
									p1CapacityReached: isP1Max
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
									status,
									onChange: (s) => setStatus(s)
								}),
								carryOver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center text-2xs uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300",
									children: "Carry Over"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold text-slate-900 leading-snug",
							children: getTaskTitle(obligation, client)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-500 mt-0.5",
							children: [
								"Client: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-slate-800",
									children: client?.name || "Unknown"
								}),
								" (Software: ",
								client?.software || "N/A",
								") • Period: ",
								formatPeriod(obligation.periodStart)
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-2.5 bg-red-50 border-b border-red-200 text-xs text-red-700 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
				}),
				successMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-2.5 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-700 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMsg })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSave,
					className: "p-5 space-y-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1",
							children: "Next Action / Immediate Step"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: nextAction,
							onChange: (e) => setNextAction(e.target.value),
							placeholder: "e.g., JD final sign-off before electronic lodgement",
							className: "w-full rounded border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Blocker (if blocked)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: blocker,
								onChange: (e) => setBlocker(e.target.value),
								placeholder: "e.g. Bank feed disconnected, missing docs",
								className: "w-full rounded border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Waiting On"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: waitingOn,
								onChange: (e) => setWaitingOn(e.target.value),
								placeholder: "e.g. Client (CFO), ATO, Auditor",
								className: "w-full rounded border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-md border border-slate-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-2xs font-semibold text-slate-600 mb-1",
									children: "Due Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: dueDate,
									onChange: (e) => setDueDate(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-2xs font-semibold text-slate-600 mb-1",
									children: "Est. Minutes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									step: "5",
									value: estimatedMinutes,
									onChange: (e) => setEstimatedMinutes(e.target.value === "" ? "" : parseInt(e.target.value, 10)),
									placeholder: "mins",
									className: "w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-2xs font-semibold text-slate-600 mb-1",
									children: "Owner"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: owner,
									onChange: (e) => setOwner(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-2xs font-semibold text-slate-600 mb-1",
									children: "Reviewer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: reviewer,
									onChange: (e) => setReviewer(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1",
							children: "Operational Notes & Review Log"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "Add client specifics, reconciliation figures, or reviewer queries...",
							className: "w-full rounded border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									id: "modal-carryover",
									checked: carryOver,
									onChange: (e) => setCarryOver(e.target.checked),
									className: "h-4 w-4 rounded border-line"
								}), "Carry over from a prior period"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									id: "modal-today",
									checked: onTodayPlan,
									onChange: (e) => setOnTodayPlan(e.target.checked),
									className: "h-4 w-4 rounded border-line"
								}), "Pin to today's plan"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-3 border-t border-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xs text-slate-400",
								children: ["Workstream: ", WORKSTREAM_LABELS[obligation.workstream]]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: onClose,
									className: "px-3 py-1.5 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-xs",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: saving,
									className: "flex items-center gap-1.5 px-4 py-1.5 rounded bg-accent hover:bg-accent-mid text-xs font-semibold text-accent-fg transition-colors disabled:opacity-50 cursor-pointer shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saving ? "Saving..." : "Save Notes & Status" })]
								})]
							})]
						})
					]
				})
			]
		})
	});
}
function AddObligationModal({ clients, initialClientId, p1Count, onClose, onAdd }) {
	const [clientId, setClientId] = (0, import_react.useState)(initialClientId || (clients[0]?.id ?? ""));
	const [workstream, setWorkstream] = (0, import_react.useState)("bas_ias");
	const [periodStart, setPeriodStart] = (0, import_react.useState)(getMelbourneCurrentPeriod());
	const [dueDate, setDueDate] = (0, import_react.useState)(getMelbourneToday());
	const [status, setStatus] = (0, import_react.useState)("Not started");
	const [priority, setPriority] = (0, import_react.useState)("P2");
	const [owner, setOwner] = (0, import_react.useState)("Jan");
	const [reviewer, setReviewer] = (0, import_react.useState)("");
	const [nextAction, setNextAction] = (0, import_react.useState)("");
	const [blocker, setBlocker] = (0, import_react.useState)("");
	const [waitingOn, setWaitingOn] = (0, import_react.useState)("");
	const [recurring, setRecurring] = (0, import_react.useState)(true);
	const [estimatedMinutes, setEstimatedMinutes] = (0, import_react.useState)(45);
	const [carryOver, setCarryOver] = (0, import_react.useState)(false);
	const [onTodayPlan, setOnTodayPlan] = (0, import_react.useState)(true);
	const [taskLabel, setTaskLabel] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!clientId) {
			setErrorMsg("Please select a client");
			return;
		}
		if (priority === "P1" && p1Count >= 3) {
			setErrorMsg("Max three P1 obligations allowed. Please choose P2 or P3.");
			return;
		}
		setSubmitting(true);
		setErrorMsg(null);
		try {
			await onAdd({
				clientId,
				workstream,
				periodStart,
				dueDate,
				status,
				owner,
				reviewer,
				priority,
				nextAction,
				blocker,
				waitingOn,
				recurring,
				estimatedMinutes: estimatedMinutes === "" ? void 0 : Number(estimatedMinutes),
				order: Date.now() % 1e3,
				carryOver,
				onTodayPlan,
				taskLabel: taskLabel.trim() || void 0,
				notes
			});
			onClose();
		} catch (err) {
			setErrorMsg(err instanceof Error ? err.message : "Failed to add obligation");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-modal overflow-y-auto bg-ink/40 backdrop-blur-xs flex items-center justify-center p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-slate-200 px-5 py-3.5 bg-slate-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-slate-900",
						children: "New Obligation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-2 bg-red-50 border-b border-red-200 text-xs text-red-700 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "p-5 space-y-3.5 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: clientId,
								onChange: (e) => setClientId(e.target.value),
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none",
								children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: c.id,
									children: [
										c.shortName,
										" (",
										c.name,
										")"
									]
								}, c.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Workstream"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: workstream,
								onChange: (e) => setWorkstream(e.target.value),
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none",
								children: Object.keys(WORKSTREAM_LABELS).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: w,
									children: WORKSTREAM_LABELS[w]
								}, w))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Period Start"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: periodStart,
									onChange: (e) => setPeriodStart(e.target.value),
									placeholder: "2026-08-01",
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Due Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: dueDate,
									onChange: (e) => setDueDate(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: ["Priority ", p1Count >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-600 font-normal",
										children: "(P1 full)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: priority,
									onChange: (e) => setPriority(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "P1",
											disabled: p1Count >= 3,
											children: "P1 (Urgent - max 3)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "P2",
											children: "P2 (High)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "P3",
											children: "P3 (Routine)"
										})
									]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: status,
									onChange: (e) => setStatus(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none",
									children: ALL_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s
									}, s))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Owner"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: owner,
									onChange: (e) => setOwner(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Reviewer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: reviewer,
									onChange: (e) => setReviewer(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1",
							children: "Task"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: taskLabel,
							onChange: (e) => setTaskLabel(e.target.value),
							placeholder: "e.g. Prepare August BAS",
							className: "w-full rounded border border-line bg-raised p-1.5 text-xs text-ink focus:border-accent focus:outline-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1",
							children: "Next Action"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: nextAction,
							onChange: (e) => setNextAction(e.target.value),
							placeholder: "e.g., Reconcile bank feeds & verify payroll",
							className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Est. Minutes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								step: "5",
								value: estimatedMinutes,
								onChange: (e) => setEstimatedMinutes(e.target.value === "" ? "" : parseInt(e.target.value, 10)),
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-1.5 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: onTodayPlan,
											onChange: (e) => setOnTodayPlan(e.target.checked),
											className: "rounded border-line"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink",
											children: "Pin to today"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-1.5 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: carryOver,
											onChange: (e) => setCarryOver(e.target.checked),
											className: "rounded border-line"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink",
											children: "Carry over"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-1.5 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: recurring,
											onChange: (e) => setRecurring(e.target.checked),
											className: "rounded border-line"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink",
											children: "Recurring"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-3 border-t border-slate-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-3 py-1.5 rounded border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: submitting,
								className: "flex items-center gap-1.5 px-4 py-1.5 rounded bg-accent hover:bg-accent-mid text-xs font-semibold text-accent-fg disabled:opacity-50 cursor-pointer shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitting ? "Creating..." : "Create Obligation" })]
							})]
						})
					]
				})
			]
		})
	});
}
function DeskFrame() {
	const { clients, obligations, loading, p1Count, updateClient, updateObligationStatus, updateObligation, updateObligationPriority, addObligation } = useData();
	const { drawerClientId, setDrawerClientId, selectedObligation, setSelectedObligation, showAddObligation, addObligationClientId, openAddObligation, closeAddObligation } = useDeskModals();
	const activeDrawerClient = clients.find((c) => c.id === drawerClientId) || null;
	const selectedObClient = selectedObligation ? clients.find((c) => c.id === selectedObligation.clientId) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col overflow-x-hidden p-4 sm:p-6",
				children: loading && obligations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center gap-2 py-20 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading operations ledger from local storage…" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex h-8 shrink-0 items-center justify-between border-t border-ink/80 bg-ink px-4 text-2xs text-accent-fg sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: "Jan · JD accounting desk · Saved in this browser"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden shrink-0 text-subtle sm:inline",
					children: "No sign-in · Local ledger"
				})]
			}),
			activeDrawerClient && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientDrawer, {
				client: activeDrawerClient,
				obligations,
				p1Count,
				onClose: () => setDrawerClientId(null),
				onUpdateClient: updateClient,
				onUpdateObligationStatus: updateObligationStatus,
				onSelectObligation: (ob) => setSelectedObligation(ob),
				onAddObligationForClient: (clientId) => openAddObligation(clientId)
			}),
			selectedObligation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObligationDetailModal, {
				obligation: selectedObligation,
				client: selectedObClient,
				p1Count,
				onClose: () => setSelectedObligation(null),
				onSave: updateObligation,
				onPriorityChange: updateObligationPriority
			}),
			showAddObligation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddObligationModal, {
				clients,
				initialClientId: addObligationClientId || void 0,
				p1Count,
				onClose: closeAddObligation,
				onAdd: addObligation
			})
		]
	});
}
function DeskShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskModalsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskFrame, {}) }) });
}
var SplitComponent = DeskShell;
//#endregion
export { SplitComponent as component };
