import { i as __toESM } from "./_runtime.mjs";
import { R as require_jsx_runtime, v as Link, z as require_react } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as useDeskModals, C as getMelbourneToday, E as getTodaySet, F as sortTodayStack, I as startOfWeekMonday, L as templateAlreadyOpen, M as openMinutes, O as isOpenStatus, P as periodStartFromDate, R as thisWeekBookWork, V as weekContainingDate, a as WORKSTREAM_CADENCE, b as getCourt, d as defaultWorkstream, j as nextDueForTemplate, k as isTodayObligation, m as formatAuShort, o as WORKSTREAM_LABELS, p as findWeekBookCell, s as addDays, u as daysOverdue, x as getDueNotOnPlan, z as useData } from "./_ssr/desk-modals-BQoI-h6M.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { C as CircleCheck, D as ChevronDown, N as BookOpen, O as Check, S as Clock, T as ChevronUp, c as Search, d as Repeat, f as Plus, g as ListTodo, j as CalendarDays, m as PinOff, o as Sunset, p as Pin, v as GripVertical, w as CircleAlert } from "./_libs/lucide-react.mjs";
import { t as StatusChip } from "./_ssr/StatusChip-BKwg4QCY.mjs";
import { t as PriorityBadge } from "./_ssr/PriorityBadge-DfOEYoEV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_desk-BhCsSGVY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DAY_NAMES = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
function WeekStrip({ obligations, melbourneToday, clients, onSelectObligation, onPin }) {
	const clientMap = (0, import_react.useMemo)(() => new Map(clients.map((c) => [c.id, c])), [clients]);
	const [selected, setSelected] = (0, import_react.useState)(melbourneToday);
	const days = (0, import_react.useMemo)(() => {
		const start = startOfWeekMonday(melbourneToday);
		return Array.from({ length: 7 }, (_, i) => {
			const date = addDays(start, i);
			const due = obligations.filter((o) => isOpenStatus(o.status) && o.dueDate === date);
			const late = date === melbourneToday ? obligations.filter((o) => isOpenStatus(o.status) && isTodayObligation(o) && o.dueDate && o.dueDate < melbourneToday) : [];
			const items = date === melbourneToday ? [...late, ...due.filter((o) => !late.includes(o))] : due;
			return {
				date,
				label: DAY_NAMES[i],
				dayNum: Number(date.slice(8, 10)),
				items,
				p1: items.filter((o) => o.priority === "P1").length,
				lateCount: late.length,
				isToday: date === melbourneToday,
				isWeekend: i >= 5
			};
		});
	}, [obligations, melbourneToday]);
	const selectedDay = days.find((d) => d.date === selected) || days.find((d) => d.isToday);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-semibold uppercase tracking-wider text-muted",
					children: "Week diary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs text-subtle",
					children: "Books on Monday · mid run on the 15th · EOM on month-end. Click a day."
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1.5",
				children: days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(d.date),
					className: cn("rounded-lg border px-1 py-2 text-center sm:px-2", d.date === selected ? "border-accent bg-accent-soft" : d.isToday ? "border-accent/40 bg-surface" : "border-line bg-surface", d.isWeekend && "opacity-70"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xs font-semibold uppercase tracking-wider text-muted",
							children: d.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("mt-0.5 font-mono text-sm font-semibold tabular-nums", d.date === selected || d.isToday ? "text-accent" : "text-ink"),
							children: d.dayNum
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-2xs tabular-nums text-muted",
							children: d.items.length > 0 ? d.items.length : "—"
						}),
						d.lateCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-0.5 text-2xs font-semibold text-danger",
							children: [d.lateCount, " late"]
						})
					]
				}, d.date))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden gap-1.5 md:grid md:grid-cols-5",
				children: days.slice(0, 5).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("min-h-[120px] rounded-lg border p-1.5", d.date === selected ? "border-accent bg-accent-soft/40" : "border-line bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-center justify-between px-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xs font-semibold text-muted",
							children: [
								d.label,
								" ",
								d.dayNum
							]
						}), d.p1 > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xs font-semibold text-warn",
							children: [d.p1, " P1"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [
							d.items.slice(0, 5).map((ob) => {
								const client = clientMap.get(ob.clientId);
								const court = getCourt(ob.status);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onSelectObligation(ob),
									className: cn("w-full rounded-md border px-1.5 py-1 text-left", court === "theirs" ? "border-warn/30 bg-warn-soft/50" : "border-line bg-paper"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-2xs font-semibold text-ink",
										children: ob.nextAction || ob.taskLabel || WORKSTREAM_LABELS[ob.workstream]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate text-2xs text-muted",
											children: client?.shortName
										}), !isTodayObligation(ob) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											role: "button",
											tabIndex: 0,
											onClick: (e) => {
												e.stopPropagation();
												onPin(ob.id);
											},
											onKeyDown: (e) => {
												if (e.key === "Enter") onPin(ob.id);
											},
											className: "text-accent",
											title: "Pin to today",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3 w-3" })
										})]
									})]
								}, ob.id);
							}),
							d.items.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-1 text-2xs text-subtle",
								children: [
									"+",
									d.items.length - 5,
									" more"
								]
							}),
							d.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-1 py-3 text-center text-2xs text-subtle",
								children: "Clear"
							})
						]
					})]
				}, `col-${d.date}`))
			}),
			selectedDay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1 md:hidden",
				children: selectedDay.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-2 text-center text-2xs text-muted",
					children: "Nothing due this day."
				}) : selectedDay.items.map((ob) => {
					const client = clientMap.get(ob.clientId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectObligation(ob),
						className: "flex min-h-11 w-full items-center justify-between rounded-md border border-line bg-surface px-2.5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs font-semibold text-ink",
								children: ob.nextAction || ob.taskLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-2xs text-muted",
								children: client?.shortName
							})]
						}), !isTodayObligation(ob) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							role: "button",
							tabIndex: 0,
							onClick: (e) => {
								e.stopPropagation();
								onPin(ob.id);
							},
							className: "ml-2 shrink-0 text-2xs font-semibold text-accent",
							children: "Pin"
						})]
					}, ob.id);
				})
			})
		]
	});
}
var STREAMS = [
	"bas_ias",
	"metka_bas",
	"management_reports",
	"bookkeeping",
	"supplier_payments",
	"payroll_tax",
	"stp_payroll"
];
function CadenceBoard({ obligations, melbourneToday }) {
	const cards = STREAMS.map((ws) => {
		const open = obligations.filter((o) => o.workstream === ws).filter((o) => isOpenStatus(o.status));
		const overdue = open.filter((o) => o.dueDate && o.dueDate < melbourneToday);
		const review = open.filter((o) => o.status === "For review" || o.status === "Ready to lodge");
		return {
			ws,
			open: open.length,
			overdue: overdue.length,
			review: review.length,
			maxOverdue: overdue.reduce((m, o) => Math.max(m, daysOverdue(o.dueDate, melbourneToday)), 0)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7",
		children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/trackers",
			search: { stream: card.ws },
			className: `rounded-lg border px-2.5 py-2.5 transition-colors ${card.overdue > 0 ? "border-danger/30 bg-danger-soft/50" : "border-line bg-surface hover:bg-paper"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xs font-semibold uppercase tracking-wider text-muted",
					children: WORKSTREAM_LABELS[card.ws]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-baseline gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-lg font-semibold tabular-nums text-ink",
						children: card.open
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xs text-muted",
						children: "open"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-2xs text-subtle",
					children: WORKSTREAM_CADENCE[card.ws]
				}),
				card.overdue > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-2xs font-semibold text-danger",
					children: [
						card.overdue,
						" overdue",
						card.maxOverdue ? ` · ${card.maxOverdue}d` : ""
					]
				}) : card.review > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-2xs font-medium text-warn",
					children: [card.review, " for review"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-2xs text-ok",
					children: "On cadence"
				})
			]
		}, card.ws))
	});
}
function PersonalChecklist() {
	const { personalTasks, updatePersonalTask, addPersonalTask } = useData();
	const today = getMelbourneToday();
	const [draft, setDraft] = (0, import_react.useState)("");
	const [adding, setAdding] = (0, import_react.useState)(false);
	const open = personalTasks.filter((t) => t.status !== "Done");
	const done = personalTasks.filter((t) => t.status === "Done");
	const cycle = async (id, status) => {
		await updatePersonalTask(id, { status: status === "Not started" ? "In progress" : status === "In progress" ? "Done" : "Not started" });
	};
	const handleAdd = async () => {
		const task = draft.trim();
		if (!task) return;
		await addPersonalTask({
			category: "To do",
			task,
			dueDate: "",
			status: "Not started",
			notes: "",
			order: personalTasks.length + 1
		});
		setDraft("");
		setAdding(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-line bg-surface p-3.5 shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold tracking-tight text-ink",
					children: "Personal checklist"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xs text-muted",
					children: [
						open.length,
						" open · ",
						done.length,
						" done — kept off the client ledger"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAdding((v) => !v),
					className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted hover:bg-paper hover:text-ink",
					"aria-label": "Add personal task",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
				})]
			}),
			adding && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: draft,
					onChange: (e) => setDraft(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") handleAdd();
						if (e.key === "Escape") setAdding(false);
					},
					placeholder: "New personal item",
					className: "min-h-9 flex-1 rounded-md border border-line bg-raised px-2 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void handleAdd(),
					className: "rounded-md bg-accent px-2.5 text-2xs font-semibold text-accent-fg",
					children: "Add"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: personalTasks.map((task) => {
					const overdue = task.status !== "Done" && task.dueDate && daysOverdue(task.dueDate, today) > 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 rounded-md px-1 py-1 hover:bg-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void cycle(task.id, task.status),
							className: `mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${task.status === "Done" ? "border-ok bg-ok text-ok-soft" : task.status === "In progress" ? "border-accent bg-accent-soft" : "border-line bg-raised"}`,
							"aria-label": `Mark ${task.task}`,
							children: task.status === "Done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `truncate text-xs ${task.status === "Done" ? "text-subtle line-through" : "font-medium text-ink"}`,
								children: task.task
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-2xs text-muted",
								children: [
									task.category,
									task.dueDate ? ` · ${formatAuShort(task.dueDate)}` : "",
									overdue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 font-semibold text-danger",
										children: "overdue"
									}) : null
								]
							})]
						})]
					}, task.id);
				})
			})
		]
	});
}
function FastCapture() {
	const { clients, obligations, addObligation, updateObligation } = useData();
	const active = clients.filter((c) => !c.inactive);
	const [clientId, setClientId] = (0, import_react.useState)(active[0]?.id ?? "");
	const client = active.find((c) => c.id === clientId) || active[0];
	const [line, setLine] = (0, import_react.useState)("");
	const [dueDate, setDueDate] = (0, import_react.useState)(getMelbourneToday());
	const [workstream, setWorkstream] = (0, import_react.useState)(client ? defaultWorkstream(client) : "admin");
	const [pin, setPin] = (0, import_react.useState)(true);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [flash, setFlash] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (client) setWorkstream(defaultWorkstream(client));
	}, [clientId]);
	const week = (0, import_react.useMemo)(() => weekContainingDate(getMelbourneToday()), []);
	const attachesToBooks = Boolean(client && (client.services.weeklyBooks || client.services.monthlyBooks)) && workstream === "bookkeeping" && Boolean(week);
	const submit = async (e) => {
		e.preventDefault();
		const nextAction = line.trim();
		if (!nextAction || !clientId) return;
		setBusy(true);
		try {
			if (attachesToBooks && week) {
				const existing = findWeekBookCell(obligations, clientId, week.weekCode);
				if (existing) {
					const generic = /bank reconciliation|bookkeeping|ledger/i.test(existing.nextAction || "");
					await updateObligation(existing.id, {
						nextAction,
						onTodayPlan: pin || Boolean(existing.onTodayPlan),
						status: existing.status === "Done" || existing.status === "Not applicable" ? "In progress" : existing.status,
						notes: !generic && existing.nextAction && existing.nextAction !== nextAction ? [existing.notes, `Was: ${existing.nextAction}`].filter(Boolean).join("\n") : existing.notes
					});
					setLine("");
					setFlash(pin ? `On ${client?.shortName} · ${week.weekCode} · pinned` : `On ${client?.shortName} · ${week.weekCode}`);
					setTimeout(() => setFlash(null), 2500);
					return;
				}
				await addObligation({
					clientId,
					workstream: "bookkeeping",
					periodStart: week.periodStart,
					dueDate: week.dueDate,
					status: "Not started",
					owner: "Jan",
					reviewer: "",
					priority: "P2",
					nextAction,
					blocker: "",
					waitingOn: "",
					recurring: true,
					estimatedMinutes: 60,
					order: Date.now() % 1e3,
					onTodayPlan: pin,
					taskLabel: client?.services.weeklyBooks ? "Weekly bookkeeping" : "Monthly bookkeeping",
					weekCode: week.weekCode,
					sourceSheet: "Bookkeeping",
					notes: ""
				});
				setLine("");
				setFlash(pin ? `Opened ${week.weekCode} and pinned` : `Opened ${week.weekCode}`);
				setTimeout(() => setFlash(null), 2500);
				return;
			}
			await addObligation({
				clientId,
				workstream,
				periodStart: periodStartFromDate(dueDate),
				dueDate,
				status: "Not started",
				owner: "Jan",
				reviewer: "",
				priority: "P2",
				nextAction,
				blocker: "",
				waitingOn: "",
				recurring: false,
				estimatedMinutes: 30,
				order: Date.now() % 1e3,
				onTodayPlan: pin,
				taskLabel: nextAction,
				notes: ""
			});
			setLine("");
			setFlash(pin ? "Pinned to today" : "Saved to pipeline");
			setTimeout(() => setFlash(null), 2500);
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => void submit(e),
		className: "rounded-lg border border-line bg-surface p-2.5 shadow-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs font-semibold uppercase tracking-wider text-muted",
				children: "Fast capture"
			}), flash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xs font-medium text-accent",
				children: flash
			}) : attachesToBooks && week ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "truncate text-2xs text-muted",
				children: [
					"Lands on ",
					client?.shortName,
					" · ",
					week.weekCode
				]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-center gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: clientId,
					onChange: (e) => setClientId(e.target.value),
					className: "min-h-10 max-w-[40%] rounded-md border border-line bg-raised px-2 text-xs text-ink focus:border-accent focus:outline-none sm:max-w-[180px]",
					children: active.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c.id,
						children: c.shortName
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: line,
					onChange: (e) => setLine(e.target.value),
					placeholder: "Next action — one line",
					className: "min-h-10 min-w-0 flex-1 rounded-md border border-line bg-raised px-2.5 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
				}),
				!attachesToBooks && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					value: dueDate,
					onChange: (e) => setDueDate(e.target.value),
					className: "min-h-10 rounded-md border border-line bg-raised px-2 text-xs text-ink focus:border-accent focus:outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: workstream,
					onChange: (e) => setWorkstream(e.target.value),
					className: "min-h-10 rounded-md border border-line bg-raised px-2 text-xs text-ink focus:border-accent focus:outline-none",
					children: Object.keys(WORKSTREAM_LABELS).map((ws) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: ws,
						children: WORKSTREAM_LABELS[ws]
					}, ws))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "inline-flex min-h-10 items-center gap-1 rounded-md border border-line bg-raised px-2 text-2xs font-semibold text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: pin,
						onChange: (e) => setPin(e.target.checked),
						className: "h-3.5 w-3.5"
					}), "Today"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: busy || !line.trim(),
					className: "min-h-10 rounded-md bg-accent px-3 text-xs font-semibold text-accent-fg hover:bg-accent-mid disabled:opacity-50",
					children: "Add"
				})
			]
		})]
	});
}
function TemplatesPanel() {
	const { templates, clients, obligations, spawnTemplate } = useData();
	const [msg, setMsg] = (0, import_react.useState)(null);
	const clientMap = new Map(clients.map((c) => [c.id, c]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-line bg-surface p-3.5 shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold tracking-tight text-ink",
					children: "Recurring templates"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs text-muted",
					children: "Spawn the next cycle without opening a cell. Service rows still generate from the client."
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-2xs font-medium text-accent",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1.5",
				children: templates.map((tpl) => {
					const due = nextDueForTemplate(tpl);
					const open = templateAlreadyOpen(tpl, obligations, due);
					const client = clientMap.get(tpl.clientId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-2 rounded-md border border-line bg-paper px-2 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs font-semibold text-ink",
								children: tpl.taskLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate text-2xs text-muted",
								children: [
									client?.shortName || "Practice",
									" · ",
									WORKSTREAM_LABELS[tpl.workstream],
									" · ",
									tpl.cadence,
									" ·",
									" ",
									formatAuShort(due)
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: open,
							onClick: async () => {
								const res = await spawnTemplate(tpl.id);
								setMsg(res.message);
								setTimeout(() => setMsg(null), 2500);
							},
							className: "inline-flex min-h-8 shrink-0 items-center gap-1 rounded-md border border-line px-2 text-2xs font-semibold text-ink hover:border-accent hover:text-accent disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-3 w-3" }), open ? "Open" : "Spawn"]
						})]
					}, tpl.id);
				})
			})
		]
	});
}
function MondayStart() {
	const { clients, obligations, openThisWeekBooks } = useData();
	const today = (0, import_react.useMemo)(() => getMelbourneToday(), []);
	const work = (0, import_react.useMemo)(() => thisWeekBookWork(clients, obligations, today), [
		clients,
		obligations,
		today
	]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [pinIds, setPinIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [flash, setFlash] = (0, import_react.useState)(null);
	if (!work || work.rows.length === 0) return null;
	const missing = work.rows.filter((r) => !r.existing).length;
	const openCells = work.rows.filter((r) => r.existing && isOpenStatus(r.existing.status)).length;
	const togglePin = (clientId) => {
		setPinIds((prev) => {
			const next = new Set(prev);
			if (next.has(clientId)) next.delete(clientId);
			else next.add(clientId);
			return next;
		});
	};
	const confirm = async () => {
		setBusy(true);
		try {
			const res = await openThisWeekBooks(work.rows.map((r) => ({
				clientId: r.client.id,
				pin: pinIds.has(r.client.id)
			})));
			setOpen(false);
			setPinIds(/* @__PURE__ */ new Set());
			setFlash(`${res.weekCode}: opened ${res.created} cell${res.created === 1 ? "" : "s"}, pinned ${res.pinned}`);
			setTimeout(() => setFlash(null), 3500);
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(true),
			className: "inline-flex min-h-10 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink hover:bg-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5" }),
				"Open ",
				work.week.weekCode
			]
		}),
		flash && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-2xs font-medium text-accent",
			children: flash
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-3 sm:items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[85vh] w-full max-w-lg overflow-hidden rounded-lg border border-line bg-surface shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-ink",
							children: "Open this week's books"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-2xs text-muted",
							children: [
								work.week.weekCode,
								" · week of ",
								formatAuShort(work.week.weekStart),
								". Creates missing cells. Tick pin for the ones you will sit today. Monthly books only on the last week."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-[50vh] overflow-y-auto px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-2xs text-muted",
							children: [
								work.rows.length,
								" clients · ",
								missing,
								" missing · ",
								openCells,
								" already open"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							children: work.rows.map((row) => {
								const done = row.existing && !isOpenStatus(row.existing.status);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between gap-2 rounded-md border border-line bg-paper px-2 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-xs font-semibold text-ink",
											children: row.client.shortName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xs text-muted",
											children: [row.monthlyOnly ? "Month-end" : "Weekly", done ? " · already done" : row.existing ? ` · ${row.existing.status}` : " · will create"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: cn("inline-flex min-h-8 items-center gap-1 text-2xs font-semibold", done ? "text-subtle" : "text-ink"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											disabled: Boolean(done),
											checked: pinIds.has(row.client.id),
											onChange: () => togglePin(row.client.id),
											className: "h-3.5 w-3.5"
										}), "Pin"]
									})]
								}, row.client.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2 border-t border-line px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "min-h-10 rounded-md border border-line px-3 text-xs font-semibold",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: busy,
							onClick: () => void confirm(),
							className: "min-h-10 rounded-md bg-accent px-3 text-xs font-semibold text-accent-fg hover:bg-accent-mid disabled:opacity-50",
							children: busy ? "Opening…" : "Open week"
						})]
					})
				]
			})
		})
	] });
}
function TodayScreen({ onOpenClientDrawer, onSelectObligation, onAddObligation }) {
	const { clients, obligations, p1Count, lastClosedDate, updateObligationStatus, updateObligationPriority, pinToToday, unpinFromToday, reorderTodayPlan, closeDay } = useData();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [showDone, setShowDone] = (0, import_react.useState)(false);
	const [priorityAlert, setPriorityAlert] = (0, import_react.useState)(null);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [closeOpen, setCloseOpen] = (0, import_react.useState)(false);
	const [showWeek, setShowWeek] = (0, import_react.useState)(false);
	const [showMore, setShowMore] = (0, import_react.useState)(false);
	const melbourneToday = (0, import_react.useMemo)(() => getMelbourneToday(), []);
	const clientMap = (0, import_react.useMemo)(() => new Map(clients.map((c) => [c.id, c])), [clients]);
	const todaySet = (0, import_react.useMemo)(() => sortTodayStack(getTodaySet(obligations, melbourneToday)), [obligations, melbourneToday]);
	const dueTray = (0, import_react.useMemo)(() => getDueNotOnPlan(obligations, melbourneToday), [obligations, melbourneToday]);
	const sitting = (0, import_react.useMemo)(() => todaySet.filter((o) => getCourt(o.status) === "mine"), [todaySet]);
	const watching = (0, import_react.useMemo)(() => todaySet.filter((o) => getCourt(o.status) === "theirs"), [todaySet]);
	const doneOnPlan = (0, import_react.useMemo)(() => todaySet.filter((o) => o.status === "Done"), [todaySet]);
	const openItems = (0, import_react.useMemo)(() => todaySet.filter((o) => isOpenStatus(o.status)), [todaySet]);
	const sittingOpen = sitting;
	const load = (0, import_react.useMemo)(() => openMinutes(sittingOpen), [sittingOpen]);
	const overCapacity = load.minutes > 360;
	const overStack = sittingOpen.length > 10;
	const closedToday = lastClosedDate === melbourneToday;
	const headerMetrics = (0, import_react.useMemo)(() => {
		const overdue = sittingOpen.filter((o) => o.dueDate && o.dueDate < melbourneToday);
		return {
			tasks: todaySet.length,
			open: sittingOpen.length,
			done: doneOnPlan.length,
			overdue: overdue.length,
			watching: watching.length
		};
	}, [
		todaySet,
		sittingOpen,
		doneOnPlan,
		watching,
		melbourneToday
	]);
	const displayedObligations = (0, import_react.useMemo)(() => {
		const q = searchQuery.toLowerCase().trim();
		return (showDone ? [...sittingOpen, ...doneOnPlan] : sittingOpen).filter((ob) => {
			if (!q) return true;
			const client = clientMap.get(ob.clientId);
			return [
				ob.taskLabel,
				ob.nextAction,
				ob.notes,
				ob.blocker,
				ob.waitingOn,
				ob.owner,
				client?.name,
				client?.shortName,
				WORKSTREAM_LABELS[ob.workstream]
			].join(" ").toLowerCase().includes(q);
		});
	}, [
		sittingOpen,
		doneOnPlan,
		clientMap,
		searchQuery,
		showDone
	]);
	const handlePriorityChange = async (id, newPriority) => {
		setPriorityAlert(null);
		const res = await updateObligationPriority(id, newPriority);
		if (!res.success) {
			setPriorityAlert(res.message || "Cannot set more than 3 active P1 obligations.");
			setTimeout(() => setPriorityAlert(null), 4e3);
		}
	};
	const persistOrder = async (ids) => {
		await reorderTodayPlan(ids);
	};
	const moveRow = async (id, direction) => {
		const ids = displayedObligations.filter((o) => isOpenStatus(o.status)).map((o) => o.id);
		const idx = ids.indexOf(id);
		const next = idx + direction;
		if (idx < 0 || next < 0 || next >= ids.length) return;
		const swapped = ids.slice();
		const [item] = swapped.splice(idx, 1);
		swapped.splice(next, 0, item);
		await persistOrder(swapped);
	};
	const handleDrop = async (targetId) => {
		if (!dragId || dragId === targetId) {
			setDragId(null);
			return;
		}
		const ids = displayedObligations.filter((o) => isOpenStatus(o.status)).map((o) => o.id);
		const from = ids.indexOf(dragId);
		const to = ids.indexOf(targetId);
		if (from < 0 || to < 0) {
			setDragId(null);
			return;
		}
		const next = ids.slice();
		const [item] = next.splice(from, 1);
		next.splice(to, 0, item);
		setDragId(null);
		await persistOrder(next);
	};
	const handlePin = async (id) => {
		const res = await pinToToday(id);
		if (res.message) {
			setPriorityAlert(res.message);
			setTimeout(() => setPriorityAlert(null), 4e3);
		}
	};
	const todayFormatted = (0, import_react.useMemo)(() => {
		const [year, month, day] = melbourneToday.split("-").map(Number);
		return new Date(year, month - 1, day).toLocaleDateString("en-AU", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	}, [melbourneToday]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: "Daily priority planner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Today's plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: [
							todayFormatted,
							" · Melbourne · Sitting is my court only. Watching is a chase list.",
							closedToday ? " Day closed — carry-overs are already on tomorrow's stack." : ""
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MondayStart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setCloseOpen(true),
							disabled: todaySet.length === 0,
							className: "inline-flex min-h-10 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink hover:bg-paper disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunset, { className: "h-3.5 w-3.5" }), "Close day"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "new-obligation-btn",
							type: "button",
							onClick: onAddObligation,
							className: "inline-flex min-h-10 items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-fg hover:bg-accent-mid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), "Full form"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastCapture, {}),
			priorityAlert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-md border border-warn/40 bg-warn-soft p-2.5 text-xs text-warn",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: priorityAlert })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPriorityAlert(null),
					className: "px-1 font-semibold",
					children: "Dismiss"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "This sitting",
					value: headerMetrics.open,
					hint: overStack ? `Over 10 — park before pinning more` : `${headerMetrics.done} done · ${headerMetrics.watching} watching`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTodo, { className: "h-4 w-4 text-accent" }),
					tone: overStack ? "warn" : "neutral"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Open minutes",
					value: `${load.minutes}m`,
					hint: load.unestimated > 0 ? `${(load.minutes / 60).toFixed(1)}h of 6h · ${load.unestimated} unestimated` : `${(load.minutes / 60).toFixed(1)}h of 6h · my court only`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
					tone: overCapacity ? "warn" : "neutral",
					bar: Math.min(100, Math.round(load.minutes / 360 * 100))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 text-2xs text-muted",
				children: [headerMetrics.overdue > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded border border-danger/30 bg-danger-soft px-2 py-1 font-semibold text-danger",
					children: [headerMetrics.overdue, " late in my court"]
				}), p1Count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded border border-warn/30 bg-warn-soft px-2 py-1 font-semibold text-warn",
					children: [p1Count, " / 3 P1"]
				})]
			}),
			watching.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-warn/30 bg-warn-soft/40 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: "Chase — their court"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-2xs text-subtle",
						children: [watching.length, " watching"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-1",
					children: watching.map((ob) => {
						const client = clientMap.get(ob.clientId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-10 items-center justify-between gap-2 rounded-md border border-line bg-surface px-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSelectObligation(ob),
								className: "min-w-0 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs font-semibold text-ink",
									children: ob.nextAction || ob.taskLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-2xs text-muted",
									children: [client?.shortName, ob.waitingOn ? ` · ${ob.waitingOn}` : ` · ${ob.status}`]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void unpinFromToday(ob.id),
								className: "shrink-0 text-2xs font-semibold text-muted hover:text-ink",
								children: "Park"
							})]
						}, ob.id);
					})
				})]
			}),
			dueTray.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-line bg-surface p-3 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-semibold uppercase tracking-wider text-muted",
						children: "Due today, not on plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-2xs text-subtle",
						children: [dueTray.length, " to consider"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-col gap-1.5",
					children: dueTray.slice(0, 8).map((ob) => {
						const client = clientMap.get(ob.clientId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-11 items-center justify-between gap-2 rounded-md border border-dashed border-line bg-paper px-2.5 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSelectObligation(ob),
								className: "min-w-0 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs font-semibold text-ink",
									children: ob.nextAction || ob.taskLabel || WORKSTREAM_LABELS[ob.workstream]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "truncate text-2xs text-muted",
									children: [
										client?.shortName,
										" · ",
										formatAuShort(ob.dueDate)
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void handlePin(ob.id),
								className: "inline-flex min-h-9 shrink-0 items-center gap-1 rounded-md border border-line bg-surface px-2 text-2xs font-semibold text-ink hover:border-accent hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3 w-3" }), "Pin"]
							})]
						}, ob.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-center gap-2 rounded-lg border border-line bg-surface p-2.5 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1 basis-full sm:basis-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search this sitting…",
							className: "min-h-9 w-full rounded-md border border-line bg-raised pl-8 pr-3 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowDone((v) => !v),
						className: cn("min-h-9 rounded-md border px-3 text-xs font-medium", showDone ? "border-line bg-raised text-muted" : "border-accent/30 bg-accent-soft text-accent"),
						children: showDone ? "Hide done" : "Show done"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-2xs text-muted",
						children: [displayedObligations.length, " in sitting"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 space-y-2",
				children: displayedObligations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPlan, {}) : displayedObligations.map((ob, idx) => {
					const client = clientMap.get(ob.clientId);
					const overdueDays = isOpenStatus(ob.status) ? daysOverdue(ob.dueDate, melbourneToday) : 0;
					const isP1 = ob.priority === "P1" && isOpenStatus(ob.status);
					const open = isOpenStatus(ob.status);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						draggable: false,
						onDragOver: (e) => {
							if (open && dragId) e.preventDefault();
						},
						onDrop: () => void handleDrop(ob.id),
						className: cn("flex gap-2 rounded-lg border p-2.5 shadow-xs sm:p-3", dragId === ob.id && "opacity-50", isP1 ? "border-warn/40 bg-warn-soft/40" : overdueDays > 0 ? "border-danger/30 bg-danger-soft/40" : "border-line bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 flex-col items-center gap-0.5 pt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-2xs text-subtle",
								children: idx + 1
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									draggable: true,
									className: "hidden cursor-grab text-subtle sm:block",
									title: "Drag to reorder",
									onDragStart: (e) => {
										setDragId(ob.id);
										e.dataTransfer.effectAllowed = "move";
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Move up",
									className: "flex min-h-8 min-w-8 items-center justify-center rounded text-muted hover:bg-paper hover:text-ink",
									onClick: () => void moveRow(ob.id, -1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Move down",
									className: "flex min-h-8 min-w-8 items-center justify-center rounded text-muted hover:bg-paper hover:text-ink",
									onClick: () => void moveRow(ob.id, 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })
								})
							] }) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => onSelectObligation(ob),
										className: "min-w-0 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold leading-snug text-ink",
											children: ob.nextAction || ob.taskLabel || WORKSTREAM_LABELS[ob.workstream]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-0.5 flex flex-wrap items-center gap-1.5 text-2xs text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													role: "button",
													tabIndex: 0,
													onClick: (e) => {
														e.stopPropagation();
														if (ob.clientId) onOpenClientDrawer(ob.clientId);
													},
													onKeyDown: (e) => {
														if (e.key === "Enter") onOpenClientDrawer(ob.clientId);
													},
													className: "font-semibold text-ink hover:text-accent hover:underline",
													children: client?.shortName || "Client"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", ob.taskLabel || WORKSTREAM_LABELS[ob.workstream]] }),
												ob.carryOver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded border border-warn/30 bg-warn-soft px-1 py-0.5 font-semibold text-warn",
													children: "Carry over"
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex shrink-0 items-center gap-1",
										onClick: (e) => e.stopPropagation(),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, {
											priority: ob.priority,
											onChange: (p) => void handlePriorityChange(ob.id, p),
											p1CapacityReached: p1Count >= 3
										})
									})]
								}),
								(ob.waitingOn || ob.blocker) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-2xs",
									children: [ob.waitingOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-warn",
										children: ["Waiting: ", ob.waitingOn]
									}) : null, ob.blocker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-danger",
										children: [
											ob.waitingOn ? " · " : "",
											"Blocker: ",
											ob.blocker
										]
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("font-mono text-2xs", overdueDays > 0 ? "font-semibold text-danger" : "text-muted"),
											children: [formatAuShort(ob.dueDate), overdueDays > 0 ? ` · ${overdueDays}d overdue` : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-2xs text-muted",
											children: ob.estimatedMinutes ? `${ob.estimatedMinutes}m` : "no est."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											onClick: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
												status: ob.status,
												onChange: (newStatus) => void updateObligationStatus(ob.id, newStatus)
											})
										}),
										open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void unpinFromToday(ob.id),
											className: "ml-auto inline-flex min-h-8 items-center gap-1 rounded px-1.5 text-2xs font-medium text-muted hover:text-ink",
											title: "Park in pipeline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "h-3 w-3" }), "Park"]
										}) : null
									]
								})
							]
						})]
					}, ob.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowWeek((v) => !v),
					className: cn("inline-flex min-h-9 items-center gap-1.5 rounded-md border px-3 text-xs font-semibold", showWeek ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-surface text-ink hover:bg-paper"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }),
						"Week diary",
						showWeek ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowMore((v) => !v),
					className: cn("inline-flex min-h-9 items-center gap-1.5 rounded-md border px-3 text-xs font-semibold", showMore ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-surface text-ink hover:bg-paper"),
					children: ["Personal / templates", showMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
				})]
			}),
			showWeek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CadenceBoard, {
					obligations,
					melbourneToday
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekStrip, {
					obligations,
					melbourneToday,
					clients,
					onSelectObligation,
					onPin: (id) => void handlePin(id)
				})]
			}),
			showMore && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalChecklist, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplatesPanel, {})]
			}),
			closeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseDayModal, {
				items: openItems,
				doneCount: headerMetrics.done,
				clientMap,
				closedToday,
				onCancel: () => setCloseOpen(false),
				onConfirm: async (decisions) => {
					await closeDay(decisions);
					setCloseOpen(false);
				}
			})
		]
	});
}
function CloseDayModal({ items, doneCount, clientMap, closedToday, onCancel, onConfirm }) {
	const [choices, setChoices] = (0, import_react.useState)(() => Object.fromEntries(items.map((o) => [o.id, "carry"])));
	const [saving, setSaving] = (0, import_react.useState)(false);
	const setAll = (action) => {
		setChoices(Object.fromEntries(items.map((o) => [o.id, action])));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-modal flex items-end justify-center bg-ink/40 p-0 backdrop-blur-xs sm:items-center sm:p-4",
		onClick: onCancel,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[90dvh] w-full max-w-lg overflow-hidden rounded-t-lg border border-line bg-surface shadow-panel sm:rounded-lg",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-line bg-paper px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs font-semibold uppercase tracking-wider text-muted",
							children: "End of sitting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-ink",
							children: "Close today's plan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-xs text-muted",
							children: [
								doneCount,
								" done stay off the plan. Open items either carry to tomorrow or go back to Pipeline.",
								closedToday ? " You already closed once today — this replaces that close." : ""
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 border-b border-line px-4 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAll("carry"),
						className: "min-h-9 rounded-md border border-line bg-raised px-2.5 text-2xs font-semibold",
						children: "Carry all"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAll("park"),
						className: "min-h-9 rounded-md border border-line bg-raised px-2.5 text-2xs font-semibold",
						children: "Park all"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[50dvh] space-y-1.5 overflow-y-auto p-3",
					children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 py-6 text-center text-xs text-muted",
						children: "Nothing open. Closing will clear completed items from the plan."
					}) : items.map((ob) => {
						const client = clientMap.get(ob.clientId);
						const action = choices[ob.id] || "carry";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 rounded-md border border-line bg-paper px-2.5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs font-semibold text-ink",
									children: ob.nextAction || ob.taskLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-2xs text-muted",
									children: client?.shortName
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 rounded-md border border-line bg-surface p-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setChoices((c) => ({
										...c,
										[ob.id]: "carry"
									})),
									className: cn("min-h-8 rounded px-2 text-2xs font-semibold", action === "carry" ? "bg-accent text-accent-fg" : "text-muted"),
									children: "Carry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setChoices((c) => ({
										...c,
										[ob.id]: "park"
									})),
									className: cn("min-h-8 rounded px-2 text-2xs font-semibold", action === "park" ? "bg-accent text-accent-fg" : "text-muted"),
									children: "Park"
								})]
							})]
						}, ob.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-line px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCancel,
						className: "min-h-10 rounded-md border border-line px-3 text-xs font-semibold",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: saving,
						onClick: async () => {
							setSaving(true);
							await onConfirm(items.map((o) => ({
								id: o.id,
								action: choices[o.id] || "carry"
							})));
						},
						className: "min-h-10 rounded-md bg-accent px-3 text-xs font-semibold text-accent-fg hover:bg-accent-mid disabled:opacity-50",
						children: saving ? "Closing…" : "Close day"
					})]
				})
			]
		})
	});
}
function MetricCard({ label, value, hint, icon, tone = "neutral", bar }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg border p-3.5 shadow-xs", tone === "danger" ? "border-danger/30 bg-danger-soft/60" : tone === "warn" ? "border-warn/30 bg-warn-soft/60" : "border-line bg-surface"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xs font-semibold uppercase tracking-wider text-muted",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: tone === "danger" ? "text-danger" : tone === "warn" ? "text-warn" : "text-muted",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-mono text-2xl font-semibold tabular-nums text-ink",
				children: value
			}),
			typeof bar === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("h-full rounded-full", overBarClass(tone)),
					style: { width: `${bar}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-2xs text-muted",
				children: hint
			})
		]
	});
}
function overBarClass(tone) {
	if (tone === "warn") return "bg-warn";
	if (tone === "danger") return "bg-danger";
	return "bg-accent";
}
function EmptyPlan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-surface px-4 py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto mb-2 h-8 w-8 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-ink",
				children: "Nothing on today's plan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-2xs text-muted",
				children: "Pin due work from the tray above, or add a task. Pipeline keeps the rest."
			})
		]
	});
}
function TodayPage() {
	const { setDrawerClientId, setSelectedObligation, openAddObligation } = useDeskModals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayScreen, {
		onOpenClientDrawer: (cid) => setDrawerClientId(cid),
		onSelectObligation: (ob) => setSelectedObligation(ob),
		onAddObligation: () => openAddObligation(null)
	});
}
//#endregion
export { TodayPage as component };
