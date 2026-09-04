import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as useDeskModals, C as getMelbourneToday, S as getMelbourneCurrentPeriod, i as SERVICE_LABELS, l as clientMonthLoad, z as useData } from "./desk-modals-BQoI-h6M.mjs";
import { E as ChevronRight, M as Building2, c as Search, f as Plus, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clients-Cy4KN9Ju.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AddClientModal({ onClose, onAdd }) {
	const [name, setName] = (0, import_react.useState)("");
	const [shortName, setShortName] = (0, import_react.useState)("");
	const [software, setSoftware] = (0, import_react.useState)("Xero");
	const [junior, setJunior] = (0, import_react.useState)("Jan");
	const [senior, setSenior] = (0, import_react.useState)("");
	const [manager, setManager] = (0, import_react.useState)("");
	const [maDueDay, setMaDueDay] = (0, import_react.useState)(20);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [services, setServices] = (0, import_react.useState)({
		monthlyBAS: false,
		twoMonthlyIAS: false,
		quarterlyBAS: true,
		weeklyBooks: false,
		monthlyBooks: true,
		paymentRun: false,
		managementReports: true,
		payrollTax: false,
		stp: true
	});
	const handleToggle = (key) => {
		setServices((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim()) {
			setErrorMsg("Client legal/trading name is required");
			return;
		}
		const computedShortName = shortName.trim() || name.split(" ")[0];
		setSubmitting(true);
		setErrorMsg(null);
		try {
			await onAdd({
				name: name.trim(),
				shortName: computedShortName,
				software,
				junior,
				senior,
				manager,
				services,
				maDueDay: Number(maDueDay),
				notes
			});
			onClose();
		} catch (err) {
			setErrorMsg(err instanceof Error ? err.message : "Error adding client");
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-blue-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-slate-900",
							children: "Add New Client"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-2 bg-red-50 border-b border-red-200 text-xs text-red-700",
					children: errorMsg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "p-5 space-y-3.5 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Full Client Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "e.g. Apex Dynamics Pty Ltd",
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "Short Name / Code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: shortName,
								onChange: (e) => setShortName(e.target.value),
								placeholder: "e.g. Apex",
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "General Ledger Software"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: software,
								onChange: (e) => setSoftware(e.target.value),
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Xero",
										children: "Xero"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "MYOB",
										children: "MYOB"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "QuickBooks Online",
										children: "QuickBooks Online"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "NetSuite",
										children: "NetSuite"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Sage",
										children: "Sage"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-semibold text-slate-700 mb-1",
								children: "MA Due Day of Month"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								max: "31",
								value: maDueDay,
								onChange: (e) => setMaDueDay(parseInt(e.target.value, 10)),
								className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Junior"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: junior,
									onChange: (e) => setJunior(e.target.value),
									placeholder: "Jan",
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Senior"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: senior,
									onChange: (e) => setSenior(e.target.value),
									placeholder: "Sam Taylor",
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-semibold text-slate-700 mb-1",
									children: "Manager"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: manager,
									onChange: (e) => setManager(e.target.value),
									className: "w-full rounded border border-slate-300 bg-white p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1.5",
							children: "Contracted Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1.5",
							children: Object.keys(SERVICE_LABELS).map((key) => {
								const active = services[key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleToggle(key),
									className: `px-2 py-1 rounded border text-left text-2xs transition-colors cursor-pointer ${active ? "bg-blue-700 border-blue-700 text-accent-fg font-semibold shadow-xs" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"}`,
									children: SERVICE_LABELS[key]
								}, key);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-semibold text-slate-700 mb-1",
							children: "Operational Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 2,
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "Initial onboarding notes, key client contacts...",
							className: "w-full rounded border border-slate-300 p-1.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
						})] }),
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitting ? "Adding..." : "Add Client" })]
							})]
						})
					]
				})
			]
		})
	});
}
function ClientsScreen({ onSelectClient }) {
	const { clients, obligations, addClient } = useData();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	const [hideInactive, setHideInactive] = (0, import_react.useState)(true);
	const currentPeriod = getMelbourneCurrentPeriod();
	const melbourneToday = getMelbourneToday();
	const obligationsPerClient = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		clients.forEach((c) => map.set(c.id, {
			total: 0,
			open: 0,
			p1: 0
		}));
		obligations.forEach((o) => {
			const entry = map.get(o.clientId) || {
				total: 0,
				open: 0,
				p1: 0
			};
			entry.total += 1;
			if (o.status !== "Done" && o.status !== "Not applicable") {
				entry.open += 1;
				if (o.priority === "P1") entry.p1 += 1;
			}
			map.set(o.clientId, entry);
		});
		return map;
	}, [clients, obligations]);
	const filteredClients = (0, import_react.useMemo)(() => {
		const q = searchQuery.toLowerCase().trim();
		return clients.filter((c) => {
			if (hideInactive && c.inactive) return false;
			if (!q) return true;
			return c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q) || c.software.toLowerCase().includes(q) || (c.junior || "").toLowerCase().includes(q) || (c.senior || "").toLowerCase().includes(q) || (c.manager || "").toLowerCase().includes(q) || (c.notes || "").toLowerCase().includes(q);
		});
	}, [
		clients,
		searchQuery,
		hideInactive
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-line bg-surface p-4 shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Clients"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: "Master list · this month load is Jan's open minutes. Team open is shown quieter."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 sm:w-64",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search clients, software, staff...",
									className: "min-h-9 w-full rounded-md border border-line bg-raised pl-8 pr-2.5 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setHideInactive((v) => !v),
								className: `min-h-9 rounded-md border px-3 text-xs font-medium ${hideInactive ? "border-line bg-raised text-muted" : "border-accent/30 bg-accent-soft text-accent"}`,
								children: hideInactive ? "Inactive hidden" : "Showing inactive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setShowAddModal(true),
								className: "flex min-h-9 items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-fg hover:bg-accent-mid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add client" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2 md:hidden",
				children: filteredClients.map((client) => {
					const obStats = obligationsPerClient.get(client.id) || {
						total: 0,
						open: 0,
						p1: 0
					};
					const load = clientMonthLoad(client.id, obligations, currentPeriod, melbourneToday);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectClient(client.id),
						className: "w-full rounded-lg border border-line bg-surface p-3 text-left shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-ink",
									children: client.shortName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xs text-muted",
									children: client.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded border border-line bg-paper px-1.5 py-0.5 text-2xs font-medium text-muted",
									children: client.software
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-2xs text-muted",
								children: [
									client.junior || "—",
									" / ",
									client.senior || "—",
									" / ",
									client.manager || "—"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-2xs text-ink",
								children: [
									load.open,
									" Jan",
									load.minutes > 0 ? ` · ${(load.minutes / 60).toFixed(1)}h` : "",
									load.teamOpen > 0 ? ` · team ${load.teamOpen}` : "",
									obStats.p1 > 0 ? ` · ${obStats.p1} P1` : ""
								]
							}),
							(load.minutes > 0 || load.teamMinutes > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 h-1 overflow-hidden rounded-full bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full ${load.minutes > 480 ? "bg-warn" : "bg-accent"}`,
									style: { width: `${Math.min(100, Math.round(load.minutes / 480 * 100))}%` }
								})
							})
						]
					}, client.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-hidden rounded-lg border border-line bg-surface shadow-xs md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-slate-200 bg-slate-50 text-2xs font-bold text-slate-500 uppercase tracking-wider",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 min-w-[200px]",
									children: "Client / Short Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-32",
									children: "Software"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-44",
									children: "Staff Allocation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-28",
									children: "MA / folder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 min-w-[280px]",
									children: "Active Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-32 text-center",
									children: "Open Obligations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-36",
									children: "This month load"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2.5 px-4 w-24 text-right",
									children: "Drawer"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-slate-100",
							children: filteredClients.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 8,
								className: "py-12 text-center text-slate-500",
								children: "No clients match your search."
							}) }) : filteredClients.map((client) => {
								const obStats = obligationsPerClient.get(client.id) || {
									total: 0,
									open: 0,
									p1: 0
								};
								const load = clientMonthLoad(client.id, obligations, currentPeriod, melbourneToday);
								const activeServicesCount = Object.values(client.services).filter(Boolean).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									onClick: () => onSelectClient(client.id),
									className: "group hover:bg-slate-50/90 transition-colors cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 shrink-0",
													children: client.shortName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-slate-900 group-hover:text-blue-700 transition-colors",
													children: client.name
												}), client.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-2xs text-slate-400 truncate max-w-[280px] mt-0.5",
													children: client.notes
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200",
												children: client.software
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-2xs space-y-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "Mgr:"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-slate-800",
														children: client.manager || "JD"
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-slate-400",
														children: "Team:"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-slate-600",
														children: [
															client.senior || "—",
															", ",
															client.junior || "—"
														]
													})
												] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												client.services.managementReports && client.maDueDay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-xs font-semibold text-ink",
													children: ["Day ", client.maDueDay]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs text-subtle",
													children: "—"
												}),
												client.folderStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block text-2xs text-muted",
													children: ["Folder: ", client.folderStatus]
												}),
												client.inactive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-0.5 inline-block rounded border border-line px-1 text-2xs text-subtle",
													children: "Inactive"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-1 max-w-[380px]",
												children: [Object.keys(client.services).filter((k) => client.services[k]).slice(0, 4).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200",
													children: SERVICE_LABELS[k]
												}, k)), activeServicesCount > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-2xs px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 font-semibold",
													children: [
														"+",
														activeServicesCount - 4,
														" more"
													]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `font-semibold text-xs px-2 py-0.5 rounded ${obStats.open > 0 ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-slate-100 text-slate-500"}`,
													children: [obStats.open, " open"]
												}), obStats.p1 > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-2xs font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-200",
													title: `${obStats.p1} P1 obligations`,
													children: [obStats.p1, " P1"]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-mono text-2xs tabular-nums text-ink",
													children: [
														(load.minutes / 60).toFixed(1),
														"h Jan",
														load.open > 0 ? ` · ${load.open}` : "",
														load.overdue > 0 ? ` · ${load.overdue} late` : ""
													]
												}),
												load.teamOpen > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-2xs text-subtle",
													children: [
														"team ",
														(load.teamMinutes / 60).toFixed(1),
														"h · ",
														load.teamOpen,
														" open"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 h-1 overflow-hidden rounded-full bg-paper",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `h-full ${load.minutes > 480 ? "bg-warn" : "bg-accent"}`,
														style: { width: `${Math.min(100, Math.round(load.minutes / 480 * 100))}%` }
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Drawer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
											})
										})
									]
								}, client.id);
							})
						})]
					})
				})
			}),
			showAddModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddClientModal, {
				onClose: () => setShowAddModal(false),
				onAdd: addClient
			})
		]
	});
}
function ClientsPage() {
	const { setDrawerClientId } = useDeskModals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsScreen, { onSelectClient: (cid) => setDrawerClientId(cid) });
}
//#endregion
export { ClientsPage as component };
