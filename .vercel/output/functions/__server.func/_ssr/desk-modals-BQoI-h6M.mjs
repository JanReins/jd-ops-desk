import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-modals-BQoI-h6M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORKSTREAM_LABELS = {
	bas_ias: "BAS / IAS",
	metka_bas: "Metka BAS",
	management_reports: "Management Reports",
	bookkeeping: "Bookkeeping",
	supplier_payments: "Supplier Payments",
	payroll_tax: "Payroll Tax",
	stp_payroll: "STP Payroll",
	admin: "Admin"
};
var WORKSTREAM_CADENCE = {
	bas_ias: "21st of following month",
	metka_bas: "21st — group lodgement",
	management_reports: "1st / 6th / 10th / 16th",
	bookkeeping: "Weekly / month-end W4",
	supplier_payments: "15th and 30th",
	payroll_tax: "7th of following month",
	stp_payroll: "Fortnightly / monthly",
	admin: "As needed"
};
var SERVICE_LABELS = {
	monthlyBAS: "Monthly BAS",
	twoMonthlyIAS: "2-Monthly IAS",
	quarterlyBAS: "Quarterly BAS",
	weeklyBooks: "Weekly Bookkeeping",
	monthlyBooks: "Monthly Bookkeeping",
	paymentRun: "Payment Run",
	managementReports: "Management Reports",
	payrollTax: "Payroll Tax",
	stp: "STP Lodgement"
};
var ALL_STATUSES = [
	"Not started",
	"In progress",
	"For review",
	"Waiting on client",
	"Blocked",
	"Ready to lodge",
	"Done",
	"Not applicable"
];
var EMPTY_SERVICES = {
	monthlyBAS: false,
	twoMonthlyIAS: false,
	quarterlyBAS: false,
	weeklyBooks: false,
	monthlyBooks: false,
	paymentRun: false,
	managementReports: false,
	payrollTax: false,
	stp: false
};
var LOCAL_PRACTITIONER_ID = "local-practitioner";
function formatPeriod(periodStart) {
	if (!periodStart) return "";
	try {
		const [year, month] = periodStart.split("-");
		return new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1).toLocaleDateString("en-AU", {
			month: "short",
			year: "numeric"
		});
	} catch {
		return periodStart;
	}
}
function getTaskTitle(obligation, client) {
	const clientName = client?.shortName || client?.name || "";
	if (obligation.entityName) return obligation.entityName;
	if (obligation.taskLabel) return clientName ? `${obligation.taskLabel} — ${clientName}` : obligation.taskLabel;
	const wsLabel = WORKSTREAM_LABELS[obligation.workstream] || obligation.workstream;
	const period = formatPeriod(obligation.periodStart);
	if (clientName && period) return `${wsLabel} — ${clientName} — ${period}`;
	if (clientName) return `${wsLabel} — ${clientName}`;
	return wsLabel;
}
function svc(flags) {
	return {
		...EMPTY_SERVICES,
		...flags
	};
}
function c(row) {
	return row;
}
var DEMO_CLIENTS = [
	c({
		id: "client-practice",
		name: "JD Practice",
		shortName: "Practice",
		software: "—",
		junior: "Jan",
		senior: "JCh",
		manager: "JD",
		services: svc({}),
		maDueDay: 0,
		notes: "Internal admin — timesheets, leave, catch-all BAS review.",
		folderStatus: "Done"
	}),
	c({
		id: "client-zund",
		name: "Zund Australia Pty Ltd",
		shortName: "Zund",
		software: "Xero / XPM",
		junior: "Jan",
		senior: "RB",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true,
			weeklyBooks: true,
			paymentRun: true,
			managementReports: true
		}),
		maDueDay: 16,
		notes: "Include Mazars bill every 15th; Jet Couriers on mid or EOM. Form 384 sent — follow up.",
		folderStatus: "Done"
	}),
	c({
		id: "client-moscot",
		name: "Moscot South Yarra Pty Ltd",
		shortName: "Moscot",
		software: "Xero / XPM",
		junior: "Jan",
		senior: "PG",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true,
			weeklyBooks: true,
			paymentRun: true,
			managementReports: true
		}),
		maDueDay: 12,
		notes: "Look for invoices in F-drive & BAS/IAS if applicable. March BAS still out to sign.",
		folderStatus: "Done"
	}),
	c({
		id: "client-otk",
		name: "Outokumpu Stainless Pty Ltd",
		shortName: "OTK",
		software: "Xero / XPM",
		junior: "Jan",
		senior: "SH",
		manager: "TC",
		services: svc({
			monthlyBAS: true,
			weeklyBooks: true,
			paymentRun: true,
			managementReports: true
		}),
		maDueDay: 1,
		notes: "Review draft bills each 15th; include usual bills missing in email. Include BAS payment slip & employee bank details for payroll.",
		folderStatus: "Done"
	}),
	c({
		id: "client-doit",
		name: "Doit International Aus Pty Ltd",
		shortName: "Doit",
		software: "APS",
		junior: "Jan",
		senior: "JCh",
		manager: "TC",
		services: svc({
			monthlyBAS: true,
			payrollTax: true
		}),
		maDueDay: 0,
		notes: "Monthly BAS + PAYGI. Data available on the 16th. Form 384 lodged.",
		folderStatus: "Done"
	}),
	c({
		id: "client-spiliotis",
		name: "Spiliotis Legal Pty Ltd",
		shortName: "Spiliotis",
		software: "Xero / Leap / XPM",
		junior: "Jan",
		senior: "RB",
		manager: "JC",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "2-monthly IAS; quarterly BAS. Reviewer RB.",
		folderStatus: "Done"
	}),
	c({
		id: "client-elite",
		name: "Elite Perimeter Security Pty Ltd",
		shortName: "Elite",
		software: "XPM",
		junior: "Jan",
		senior: "RB",
		manager: "JC",
		services: svc({
			monthlyBAS: true,
			twoMonthlyIAS: true
		}),
		maDueDay: 0,
		notes: "Include red items missed from previous BAS because payroll was completed late.",
		folderStatus: "Done"
	}),
	c({
		id: "client-lime",
		name: "Lime Network Pty Ltd",
		shortName: "Lime",
		software: "Netsuite / APS",
		junior: "Jan",
		senior: "RB",
		manager: "TC",
		services: svc({
			monthlyBAS: true,
			payrollTax: true
		}),
		maDueDay: 0,
		notes: "Make a checklist for August BAS. Form 384 lodged.",
		folderStatus: "Done"
	}),
	c({
		id: "client-gestro",
		name: "Gestro / Ausmeter",
		shortName: "Gestro",
		software: "Xero",
		junior: "Jan",
		senior: "PG",
		manager: "MG",
		services: svc({ managementReports: true }),
		maDueDay: 10,
		notes: "Management accounts due on the 10th.",
		folderStatus: "Done"
	}),
	c({
		id: "client-peters",
		name: "L Vafeas & P Vafeas (Peters Prestons Market Takeaway)",
		shortName: "Peters Prestons",
		software: "APS",
		junior: "Jan",
		senior: "SH",
		manager: "MG",
		services: svc({ quarterlyBAS: true }),
		maDueDay: 0,
		notes: "Nil June BAS filed. SH asked whether further work is required.",
		folderStatus: "Done"
	}),
	c({
		id: "client-pirkx",
		name: "Pirkx Australia Pty Ltd",
		shortName: "Pirkx",
		software: "XPM",
		junior: "Jan",
		senior: "SH",
		manager: "MG",
		services: svc({
			quarterlyBAS: true,
			twoMonthlyIAS: true
		}),
		maDueDay: 0,
		notes: "Business close — 30 June 2026 draft documents. Ask SH if further July IAS work required.",
		folderStatus: "Done",
		inactive: true
	}),
	c({
		id: "client-eltham",
		name: "Eltham Physiotherapy Centre Pty Ltd",
		shortName: "Eltham",
		software: "Xero / XPM",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "No folder structure yet — double check with DS.",
		folderStatus: "Not set"
	}),
	c({
		id: "client-boyd-ac",
		name: "A & C Boyd Pty Ltd",
		shortName: "A & C Boyd",
		software: "MYOB",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "Mulcahy Group.",
		folderStatus: "Mulcahy Group"
	}),
	c({
		id: "client-boyd-elec",
		name: "Boyd Electrical Trust",
		shortName: "Boyd Electrical",
		software: "MYOB",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "Trustee for Boyd Electrical Trust.",
		folderStatus: "Not set"
	}),
	c({
		id: "client-mulcahy",
		name: "Mulcahy Family Investments Pty Ltd",
		shortName: "Mulcahy Family",
		software: "MYOB",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "Mulcahy Family Trust.",
		folderStatus: "Not set"
	}),
	c({
		id: "client-1161",
		name: "The Trustee for the 1161 Main Rd Unit Trust",
		shortName: "1161 Main",
		software: "Xero / XPM",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true
		}),
		maDueDay: 0,
		notes: "",
		folderStatus: "Not set"
	}),
	c({
		id: "client-jwcolour",
		name: "JW Colour Pty Ltd",
		shortName: "JW Colour",
		software: "XPM / Keypay",
		junior: "Jan",
		senior: "JCh",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true
		}),
		maDueDay: 0,
		notes: "Can't find folder.",
		folderStatus: "Missing"
	}),
	c({
		id: "client-ard",
		name: "A R D Earthmoving and Civil Construction Pty Ltd",
		shortName: "A R D",
		software: "APS",
		junior: "Jan",
		senior: "JCH",
		manager: "TC",
		services: svc({
			quarterlyBAS: true,
			monthlyBooks: true,
			stp: true
		}),
		maDueDay: 0,
		notes: "Quarterly bookkeeping and payroll. Super due 21st of the following month.",
		folderStatus: "Done"
	}),
	c({
		id: "client-ashling",
		name: "Ashling Partners Australia Pty Ltd",
		shortName: "Ashling",
		software: "XPM",
		junior: "Jan",
		senior: "SH",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true
		}),
		maDueDay: 0,
		notes: "Form 384 lodged.",
		folderStatus: "Done"
	}),
	c({
		id: "client-bdp",
		name: "Building Design Partnership Australasia Pty Limited",
		shortName: "BDP",
		software: "XPM",
		junior: "Jan",
		senior: "PG / SH",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true
		}),
		maDueDay: 0,
		notes: "Need data for April 2026. Form 384 lodged.",
		folderStatus: "Done"
	}),
	c({
		id: "client-couchbase",
		name: "Couchbase Australia Pty Ltd",
		shortName: "Couchbase",
		software: "XPM",
		junior: "Jan",
		senior: "SH",
		manager: "MG",
		services: svc({
			twoMonthlyIAS: true,
			quarterlyBAS: true
		}),
		maDueDay: 0,
		notes: "Unusual due dates. Form 384 lodged.",
		folderStatus: "Done"
	}),
	c({
		id: "client-airis",
		name: "Airis Security Technologies Pty Ltd",
		shortName: "Airis",
		software: "XPM",
		junior: "Jan",
		senior: "PG",
		manager: "MG",
		services: svc({
			quarterlyBAS: true,
			twoMonthlyIAS: true
		}),
		maDueDay: 0,
		notes: "Disengaged in payroll April 2026. Form 384 lodged.",
		folderStatus: "Done",
		inactive: true
	}),
	c({
		id: "client-atgroup",
		name: "AT Group Management Pte Ltd",
		shortName: "AT Group",
		software: "XPM",
		junior: "Jan",
		senior: "PG",
		manager: "TC",
		services: svc({ twoMonthlyIAS: true }),
		maDueDay: 0,
		notes: "",
		folderStatus: "Done"
	}),
	c({
		id: "client-metka",
		name: "Metka Non-Group",
		shortName: "Metka",
		software: "APS",
		junior: "Jan",
		senior: "JCh",
		manager: "JC",
		services: svc({ monthlyBAS: true }),
		maDueDay: 0,
		notes: "20 non-group entities. Monthly BAS workflow: preparation → ATO statement → signing copy → lodgement.",
		folderStatus: "Done",
		group: "Metka"
	}),
	c({
		id: "client-fdm",
		name: "FDM Operations Pte. Ltd",
		shortName: "FDM",
		software: "XPM",
		junior: "JP",
		senior: "PG",
		manager: "JC",
		services: svc({
			monthlyBAS: true,
			twoMonthlyIAS: true
		}),
		maDueDay: 0,
		notes: "Monthly IAS / BAS.",
		folderStatus: "Done"
	}),
	c({
		id: "client-epiq",
		name: "Epiq Systems Au Pty Ltd",
		shortName: "Epiq",
		software: "—",
		junior: "CE",
		senior: "DS",
		manager: "DS",
		services: svc({
			payrollTax: true,
			stp: true
		}),
		maDueDay: 0,
		notes: "Payroll only. Payroll tax usually 25th after payroll is done, due 7th of following month.",
		folderStatus: "Done"
	}),
	c({
		id: "client-epc",
		name: "Eltham Physiotherapy — STP",
		shortName: "EPC",
		software: "Xero",
		junior: "Jan",
		senior: "TC",
		manager: "JC",
		services: svc({ stp: true }),
		maDueDay: 0,
		notes: "Fortnightly STP filing.",
		folderStatus: "Not set"
	}),
	c({
		id: "client-nocturnal",
		name: "Nocturnal Entertainment Pty Ltd",
		shortName: "Nocturnal",
		software: "XPM",
		junior: "MR",
		senior: "SH",
		manager: "MG",
		services: svc({ quarterlyBAS: true }),
		maDueDay: 0,
		notes: "Can't find folder.",
		folderStatus: "Missing"
	}),
	c({
		id: "client-surety",
		name: "Surety Australia Pty Ltd",
		shortName: "Surety",
		software: "XPM",
		junior: "Jan",
		senior: "PG / SH",
		manager: "MG",
		services: svc({}),
		maDueDay: 0,
		notes: "No work anymore.",
		folderStatus: "Done",
		inactive: true
	}),
	c({
		id: "client-morrah",
		name: "The Morrah Street Group Pty Ltd",
		shortName: "Morrah St",
		software: "APS",
		junior: "Jan",
		senior: "SH",
		manager: "TC",
		services: svc({}),
		maDueDay: 0,
		notes: "No further work — email 2 February 2026.",
		folderStatus: "Done",
		inactive: true
	})
];
var METKA_ENTITIES = [
	{
		name: "Alligator Bess Holdings Pty Ltd (Group)",
		tax: "Confirm registration",
		owner: "Jan"
	},
	{
		name: "Carinya BESS Holdings Pty Ltd (Group)",
		tax: "Confirm registration",
		owner: "Jan"
	},
	{
		name: "Denhun Holdco Pty Ltd (Group)",
		tax: "Confirm registration",
		owner: "Jan"
	},
	{
		name: "Denman Bess Trust",
		tax: "Confirm registration",
		owner: "Jan"
	},
	{
		name: "Denman Bess Holdings Pty Ltd",
		tax: "Confirm registration",
		owner: "Jan"
	},
	{
		name: "Emu Park Energy Holdings Pty Ltd (Group)",
		tax: "GST & Deferred GST",
		owner: "Jan"
	},
	{
		name: "Hay Solar Farm Holdings Pty Ltd (Group)",
		tax: "GST",
		owner: "Jan"
	},
	{
		name: "M Renewables Australia Developments Pty Ltd",
		tax: "GST, Deferred GST & PAYGI quarterly",
		owner: "Jan"
	},
	{
		name: "Metlen Australia Finco Pty Ltd",
		tax: "GST",
		owner: "Jan"
	},
	{
		name: "Metlen Australia Services Pty Ltd",
		tax: "GST",
		owner: "Jan"
	},
	{
		name: "Mettransfers Pty Ltd",
		tax: "GST",
		owner: "Jan"
	},
	{
		name: "Mavis Solar Farm Australia Holdings (Group)",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Moama SF Holdco Pty Ltd (Group)",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Moura Solar Farm Holdings Pty Ltd (Group)",
		tax: "GST & PAYGW (monthly)",
		owner: "Jovelyn"
	},
	{
		name: "Munna Creek Solar Farm Hold Co Pty Ltd (Group)",
		tax: "GST & PAYGW (monthly)",
		owner: "Jovelyn"
	},
	{
		name: "Polldale SF Holdings Pty Ltd (Group)",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Plains SF No1 Pty Ltd",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Terranova Asset Trust (Group)",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Upper Hunter SF Holdco (Group)",
		tax: "GST",
		owner: "Jovelyn"
	},
	{
		name: "Wyalong Solar Farm Holdings Pty Ltd (Group)",
		tax: "GST & PAYGW (monthly)",
		owner: "Jovelyn"
	}
];
var seq = 1;
function ob(partial) {
	const order = partial.order ?? seq;
	seq += 1;
	const id = partial.id ?? `ob-${seq}-${partial.clientId.replace("client-", "").slice(0, 12)}`;
	return {
		blocker: "",
		waitingOn: "",
		recurring: true,
		carryOver: false,
		onTodayPlan: false,
		completedAt: null,
		notes: "",
		nextAction: "",
		reviewer: "",
		owner: "Jan",
		estimatedMinutes: void 0,
		...partial,
		id,
		order
	};
}
function followingDue(periodStart, day = 21) {
	const [y, m] = periodStart.split("-").map(Number);
	const fy = m === 12 ? y + 1 : y;
	const fm = m === 12 ? 1 : m + 1;
	const last = new Date(fy, fm, 0).getDate();
	return `${fy}-${String(fm).padStart(2, "0")}-${String(Math.min(day, last)).padStart(2, "0")}`;
}
function basRow(clientId, label, months, extra = {}) {
	return Object.entries(months).map(([period, status]) => ob({
		clientId,
		workstream: "bas_ias",
		periodStart: period,
		dueDate: followingDue(period, 21),
		status,
		owner: "Jan",
		reviewer: extra.reviewer || "",
		priority: "P2",
		taskLabel: label,
		nextAction: status === "Done" || status === "Not applicable" ? "" : status === "For review" ? "Reviewer sign-off" : `Prepare ${label}`,
		notes: extra.notes || "",
		sourceSheet: extra.sourceSheet || "BAS-IAS Tracker",
		completedAt: status === "Done" ? followingDue(period, 18) : null
	}));
}
var BAS_OBLIGATIONS = [
	...basRow("client-ard", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-fdm", "Monthly IAS / BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}),
	...basRow("client-doit", "Monthly PAYGI", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, { notes: "Data on the 16th" }),
	...basRow("client-doit", "Monthly BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, {
		reviewer: "JCh",
		notes: "Data on the 16th"
	}),
	...basRow("client-eltham", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-peters", "QTR BAS", {
		"2026-06-01": "Waiting on client",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not applicable"
	}, {
		reviewer: "SH",
		notes: "Nil June BAS filed"
	}),
	...basRow("client-spiliotis", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, { reviewer: "RB" }),
	...basRow("client-zund", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "For review",
		"2026-09-01": "Not started"
	}, { reviewer: "RB" }),
	...basRow("client-otk", "PAYG instalment", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-pirkx", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not applicable"
	}, { reviewer: "SH" }),
	...basRow("client-boyd-ac", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-mulcahy", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-boyd-elec", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-airis", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not applicable"
	}),
	...basRow("client-ashling", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}),
	...basRow("client-bdp", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, { notes: "Need data for April 2026" }),
	...basRow("client-couchbase", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, { notes: "Unusual due dates" }),
	...basRow("client-1161", "QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Not applicable",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-elite", "Monthly BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, {
		reviewer: "RB",
		notes: "Include red items missed because payroll was completed late."
	}),
	...basRow("client-metka", "Metka non-group IAS / BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}),
	...basRow("client-otk", "Monthly BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "For review",
		"2026-09-01": "Not started"
	}, { reviewer: "DS" }),
	...basRow("client-lime", "Monthly BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started",
		"2026-09-01": "Not started"
	}, { notes: "Make a checklist for August BAS" }),
	...basRow("client-moscot", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "For review",
		"2026-09-01": "Not started"
	}, {
		reviewer: "PG",
		notes: "March BAS still out to sign"
	}),
	...basRow("client-nocturnal", "QTR BAS", {
		"2026-06-01": "Not started",
		"2026-07-01": "Done",
		"2026-08-01": "Not applicable",
		"2026-09-01": "Not started"
	}),
	...basRow("client-jwcolour", "2-monthly IAS / QTR BAS", {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "For review",
		"2026-09-01": "Not started"
	}, { reviewer: "JCh" })
];
var WEEKLY_BOOKS = [
	{
		clientId: "client-zund",
		weeks: [
			{
				code: "Aug26 W3",
				period: "2026-08-01",
				due: "2026-08-17",
				status: "Done"
			},
			{
				code: "Aug26 W4",
				period: "2026-08-01",
				due: "2026-08-24",
				status: "Done"
			},
			{
				code: "Aug26 W5",
				period: "2026-08-01",
				due: "2026-08-31",
				status: "In progress"
			},
			{
				code: "Sep26 W1",
				period: "2026-09-01",
				due: "2026-09-07",
				status: "Not started"
			}
		]
	},
	{
		clientId: "client-moscot",
		weeks: [
			{
				code: "Aug26 W3",
				period: "2026-08-01",
				due: "2026-08-17",
				status: "Done"
			},
			{
				code: "Aug26 W4",
				period: "2026-08-01",
				due: "2026-08-24",
				status: "Done"
			},
			{
				code: "Aug26 W5",
				period: "2026-08-01",
				due: "2026-08-31",
				status: "In progress"
			},
			{
				code: "Sep26 W1",
				period: "2026-09-01",
				due: "2026-09-07",
				status: "Not started"
			}
		]
	},
	{
		clientId: "client-otk",
		weeks: [
			{
				code: "Aug26 W3",
				period: "2026-08-01",
				due: "2026-08-17",
				status: "Done"
			},
			{
				code: "Aug26 W4",
				period: "2026-08-01",
				due: "2026-08-24",
				status: "Done"
			},
			{
				code: "Aug26 W5",
				period: "2026-08-01",
				due: "2026-08-31",
				status: "Done"
			},
			{
				code: "Sep26 W1",
				period: "2026-09-01",
				due: "2026-09-07",
				status: "Not started"
			}
		]
	}
];
var MONTHLY_BOOKS = [
	"client-spiliotis",
	"client-eltham",
	"client-boyd-ac",
	"client-boyd-elec",
	"client-mulcahy",
	"client-1161"
];
var BOOK_OBLIGATIONS = [...WEEKLY_BOOKS.flatMap((row) => row.weeks.map((w) => ob({
	clientId: row.clientId,
	workstream: "bookkeeping",
	periodStart: w.period,
	dueDate: w.due,
	status: w.status,
	owner: "Jan",
	reviewer: "",
	priority: "P2",
	taskLabel: "Weekly bookkeeping",
	weekCode: w.code,
	nextAction: w.status === "In progress" ? "Finish week and close bank rec" : "Weekly bank rec",
	sourceSheet: "Bookkeeping",
	completedAt: w.status === "Done" ? w.due : null,
	onTodayPlan: w.status === "In progress",
	estimatedMinutes: w.status === "In progress" ? 60 : void 0
}))), ...MONTHLY_BOOKS.flatMap((clientId) => [
	ob({
		clientId,
		workstream: "bookkeeping",
		periodStart: "2026-07-01",
		dueDate: "2026-07-31",
		status: "Done",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Monthly bookkeeping",
		weekCode: "Jul26 W4",
		sourceSheet: "Bookkeeping",
		completedAt: "2026-07-31"
	}),
	ob({
		clientId,
		workstream: "bookkeeping",
		periodStart: "2026-08-01",
		dueDate: "2026-08-31",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Monthly bookkeeping",
		weekCode: "Aug26 W5",
		sourceSheet: "Bookkeeping"
	}),
	ob({
		clientId,
		workstream: "bookkeeping",
		periodStart: "2026-09-01",
		dueDate: "2026-09-28",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Monthly bookkeeping",
		weekCode: "Sep26 W4",
		sourceSheet: "Bookkeeping"
	})
])];
function maRow(clientId, dueDay, months) {
	return Object.entries(months).map(([period, status]) => {
		const [y, m] = period.split("-").map(Number);
		const fy = m === 12 ? y + 1 : y;
		const fm = m === 12 ? 1 : m + 1;
		const last = new Date(fy, fm, 0).getDate();
		const due = `${fy}-${String(fm).padStart(2, "0")}-${String(Math.min(dueDay, last)).padStart(2, "0")}`;
		return ob({
			clientId,
			workstream: "management_reports",
			periodStart: period,
			dueDate: due,
			status,
			owner: "Jan",
			priority: period === "2026-08-01" && status !== "Done" ? "P1" : "P2",
			taskLabel: "Prepare management accounts",
			nextAction: status === "In progress" ? "Prepare and submit for review" : status === "Not started" ? "Prepare working papers and draft report" : "",
			sourceSheet: "Management Reports",
			completedAt: status === "Done" ? due : null,
			recurring: true,
			onTodayPlan: period === "2026-08-01" && status !== "Done",
			estimatedMinutes: period === "2026-08-01" && status !== "Done" ? 90 : void 0
		});
	});
}
var MA_OBLIGATIONS = [
	...maRow("client-moscot", 12, {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "In progress"
	}),
	...maRow("client-zund", 16, {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "In progress"
	}),
	...maRow("client-gestro", 10, {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Not started"
	}),
	...maRow("client-otk", 1, {
		"2026-06-01": "Done",
		"2026-07-01": "Done",
		"2026-08-01": "Done"
	})
];
function payRun(clientId, period, kind, status) {
	const [y, m] = period.split("-").map(Number);
	const dueDay = kind === "Mid" ? 15 : new Date(y, m, 0).getDate();
	const due = `${y}-${String(m).padStart(2, "0")}-${String(dueDay).padStart(2, "0")}`;
	return ob({
		clientId,
		workstream: "supplier_payments",
		periodStart: period,
		dueDate: due,
		status,
		owner: "Jan",
		priority: "P2",
		taskLabel: `${kind === "Mid" ? "Mid-month" : "Month-end"} payment run`,
		weekCode: kind,
		nextAction: status === "Done" ? "" : `Process ${kind.toLowerCase()} supplier payment run`,
		sourceSheet: "Supplier Payment Run",
		completedAt: status === "Done" ? due : null
	});
}
var PAY_OBLIGATIONS = [
	payRun("client-otk", "2026-08-01", "Mid", "Done"),
	payRun("client-otk", "2026-08-01", "EOM", "Done"),
	payRun("client-otk", "2026-09-01", "Mid", "Not started"),
	payRun("client-otk", "2026-09-01", "EOM", "Not started"),
	payRun("client-moscot", "2026-08-01", "Mid", "Done"),
	payRun("client-moscot", "2026-08-01", "EOM", "Done"),
	payRun("client-moscot", "2026-09-01", "Mid", "Not started"),
	payRun("client-moscot", "2026-09-01", "EOM", "Not started"),
	payRun("client-zund", "2026-08-01", "Mid", "Done"),
	payRun("client-zund", "2026-08-01", "EOM", "Done"),
	payRun("client-zund", "2026-09-01", "Mid", "Not started"),
	payRun("client-zund", "2026-09-01", "EOM", "Not started")
];
var PAYROLL_TAX = [
	"client-doit",
	"client-epiq",
	"client-lime"
].flatMap((id) => [
	ob({
		clientId: id,
		workstream: "payroll_tax",
		periodStart: "2026-07-01",
		dueDate: "2026-08-07",
		status: "Done",
		owner: "Jan",
		reviewer: id === "client-doit" ? "DS / JCh" : "DS",
		priority: "P3",
		taskLabel: "Payroll tax",
		sourceSheet: "Payroll Tax",
		completedAt: "2026-08-07"
	}),
	ob({
		clientId: id,
		workstream: "payroll_tax",
		periodStart: "2026-08-01",
		dueDate: "2026-09-07",
		status: "Done",
		owner: "Jan",
		reviewer: id === "client-doit" ? "DS / JCh" : "DS",
		priority: "P3",
		taskLabel: "Payroll tax",
		sourceSheet: "Payroll Tax",
		completedAt: "2026-09-03"
	}),
	ob({
		clientId: id,
		workstream: "payroll_tax",
		periodStart: "2026-09-01",
		dueDate: "2026-10-07",
		status: "Not started",
		owner: "Jan",
		reviewer: id === "client-doit" ? "DS / JCh" : "DS",
		priority: "P3",
		taskLabel: "Payroll tax",
		sourceSheet: "Payroll Tax"
	})
]);
var STP_OBLIGATIONS = [
	ob({
		clientId: "client-epc",
		workstream: "stp_payroll",
		periodStart: "2026-08-01",
		dueDate: "2026-08-28",
		status: "Done",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Fortnightly STP",
		weekCode: "Aug W4",
		sourceSheet: "STP & Payroll",
		completedAt: "2026-08-28"
	}),
	ob({
		clientId: "client-epc",
		workstream: "stp_payroll",
		periodStart: "2026-09-01",
		dueDate: "2026-09-11",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Fortnightly STP",
		weekCode: "Sep W1",
		sourceSheet: "STP & Payroll"
	}),
	ob({
		clientId: "client-ard",
		workstream: "stp_payroll",
		periodStart: "2026-06-01",
		dueDate: "2026-07-21",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Quarterly payroll / super",
		notes: "Super due 21st of the following month. Jun marked Not yet.",
		sourceSheet: "STP & Payroll"
	}),
	ob({
		clientId: "client-ard",
		workstream: "stp_payroll",
		periodStart: "2026-09-01",
		dueDate: "2026-10-21",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Quarterly payroll / super",
		sourceSheet: "STP & Payroll"
	})
];
var METKA_OBLIGATIONS = METKA_ENTITIES.map((entity, i) => ob({
	id: `ob-metka-jul-${i + 1}`,
	clientId: "client-metka",
	workstream: "metka_bas",
	periodStart: "2026-07-01",
	dueDate: "2026-08-21",
	status: "Ready to lodge",
	owner: entity.owner,
	reviewer: "JCh",
	priority: "P2",
	taskLabel: "July BAS — ready to lodge",
	entityName: entity.name,
	nextAction: "Lodge signed BAS",
	notes: `${entity.tax}. Preparation, ATO statement and signing copy are done.`,
	sourceSheet: "Metka BAS – Non-Group",
	recurring: true
}));
var TODAY_PLAN = [
	ob({
		id: "ob-plan-otk-jul-ma",
		clientId: "client-otk",
		workstream: "management_reports",
		periodStart: "2026-07-01",
		dueDate: "2026-08-01",
		status: "Done",
		owner: "Jan",
		priority: "P1",
		taskLabel: "Prepare management accounts",
		nextAction: "Due 1 Aug — submitted",
		onTodayPlan: false,
		recurring: true,
		sourceSheet: "Management Reports",
		completedAt: "2026-08-01",
		order: 1
	}),
	ob({
		id: "ob-plan-moscot-jul-ma",
		clientId: "client-moscot",
		workstream: "management_reports",
		periodStart: "2026-07-01",
		dueDate: "2026-08-06",
		status: "Done",
		owner: "Jan",
		priority: "P1",
		taskLabel: "Prepare management accounts",
		nextAction: "Wait for any adjustment by client",
		onTodayPlan: false,
		recurring: true,
		sourceSheet: "Management Reports",
		completedAt: "2026-08-06",
		order: 2
	}),
	ob({
		id: "ob-plan-gestro-jul-ma",
		clientId: "client-gestro",
		workstream: "management_reports",
		periodStart: "2026-07-01",
		dueDate: "2026-08-10",
		status: "Done",
		owner: "Jan",
		priority: "P2",
		taskLabel: "Prepare management accounts",
		nextAction: "Done",
		onTodayPlan: false,
		recurring: true,
		sourceSheet: "Management Reports",
		completedAt: "2026-08-10",
		order: 3
	}),
	ob({
		id: "ob-plan-zund-jul-ma",
		clientId: "client-zund",
		workstream: "management_reports",
		periodStart: "2026-07-01",
		dueDate: "2026-08-20",
		status: "Done",
		owner: "Jan",
		priority: "P2",
		taskLabel: "Prepare management accounts",
		nextAction: "Due 16 Aug — working papers submitted",
		onTodayPlan: false,
		recurring: true,
		sourceSheet: "Management Reports",
		completedAt: "2026-08-20",
		order: 4
	}),
	ob({
		id: "ob-plan-pirkx-ias",
		clientId: "client-pirkx",
		workstream: "admin",
		periodStart: "2026-07-01",
		dueDate: "2026-08-21",
		status: "Done",
		owner: "Jan",
		reviewer: "SH",
		priority: "P2",
		taskLabel: "Ask SH if further work is required — July IAS",
		onTodayPlan: false,
		recurring: false,
		sourceSheet: "BAS tracker",
		completedAt: "2026-08-22",
		order: 5
	}),
	ob({
		id: "ob-plan-peters-bas",
		clientId: "client-peters",
		workstream: "admin",
		periodStart: "2026-06-01",
		dueDate: "2026-07-21",
		status: "Done",
		owner: "Jan",
		reviewer: "SH",
		priority: "P2",
		taskLabel: "Ask SH if further work is required — June BAS",
		onTodayPlan: false,
		recurring: false,
		sourceSheet: "BAS tracker",
		completedAt: "2026-08-22",
		order: 6
	}),
	ob({
		id: "ob-plan-zund-june-final",
		clientId: "client-zund",
		workstream: "management_reports",
		periodStart: "2026-06-01",
		dueDate: "2026-08-20",
		status: "Done",
		owner: "Jan",
		priority: "P1",
		taskLabel: "Finalize June accounts",
		waitingOn: "Client for credit card invoices",
		onTodayPlan: false,
		recurring: true,
		sourceSheet: "Management Reports",
		completedAt: "2026-08-20",
		order: 7
	}),
	ob({
		id: "ob-plan-all-bas",
		clientId: "client-practice",
		workstream: "bas_ias",
		periodStart: "2026-08-01",
		dueDate: "2026-09-21",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "BAS & IAS — remaining clients",
		nextAction: "Work through August tracker cells that are still Not started",
		onTodayPlan: true,
		recurring: true,
		estimatedMinutes: 90,
		sourceSheet: "BAS-IAS Tracker",
		order: 1,
		todayOrder: 1
	}),
	ob({
		id: "ob-plan-timesheet",
		clientId: "client-practice",
		workstream: "admin",
		periodStart: "2026-09-01",
		dueDate: "2026-09-04",
		status: "Not started",
		owner: "Jan",
		priority: "P3",
		taskLabel: "Timesheet",
		onTodayPlan: true,
		recurring: true,
		estimatedMinutes: 20,
		sourceSheet: "Daily To-Do",
		order: 2,
		todayOrder: 2
	})
];
function dedupeKey(o) {
	if (o.entityName) return `entity|${o.entityName}|${o.periodStart}`;
	if (o.weekCode) return `${o.clientId}|${o.workstream}|${o.weekCode}`;
	if (o.workstream === "management_reports") return `${o.clientId}|ma|${o.periodStart}|${o.taskLabel || ""}`;
	return [
		o.clientId,
		o.workstream,
		o.periodStart,
		o.taskLabel || "",
		o.entityName || ""
	].join("|");
}
var PIN_TODAY = [
	{
		clientId: "client-doit",
		workstream: "bas_ias",
		periodStart: "2026-08-01",
		taskLabel: "Monthly BAS"
	},
	{
		clientId: "client-spiliotis",
		workstream: "bas_ias",
		periodStart: "2026-08-01",
		taskLabel: "2-monthly IAS / QTR BAS"
	},
	{
		clientId: "client-elite",
		workstream: "bas_ias",
		periodStart: "2026-08-01",
		taskLabel: "Monthly BAS"
	},
	{
		clientId: "client-lime",
		workstream: "bas_ias",
		periodStart: "2026-08-01",
		taskLabel: "Monthly BAS"
	}
];
var DEMO_OBLIGATIONS = (() => {
	const plan = TODAY_PLAN;
	const rest = [
		...BAS_OBLIGATIONS,
		...BOOK_OBLIGATIONS,
		...MA_OBLIGATIONS,
		...PAY_OBLIGATIONS,
		...PAYROLL_TAX,
		...STP_OBLIGATIONS,
		...METKA_OBLIGATIONS
	];
	const seen = new Set(plan.map(dedupeKey));
	const merged = [...plan];
	for (const row of rest) {
		const key = dedupeKey(row);
		if (seen.has(key)) continue;
		seen.add(key);
		if (PIN_TODAY.find((p) => p.clientId === row.clientId && p.workstream === row.workstream && p.periodStart === row.periodStart && (!p.taskLabel || p.taskLabel === row.taskLabel))) merged.push({
			...row,
			onTodayPlan: true,
			estimatedMinutes: row.estimatedMinutes || 45,
			todayOrder: 10 + merged.filter((m) => m.onTodayPlan).length
		});
		else merged.push(row);
	}
	return merged;
})();
var DEMO_PERSONAL_TASKS = [
	{
		id: "pt-gym",
		category: "To do",
		task: "Visit gym",
		dueDate: "2026-08-19",
		status: "Not started",
		notes: "",
		order: 1
	},
	{
		id: "pt-tape",
		category: "To buy",
		task: "Paper tape",
		dueDate: "2026-08-20",
		status: "Done",
		notes: "",
		order: 2
	},
	{
		id: "pt-airah",
		category: "To do",
		task: "Job-search automation for Airah — update CV, send applications",
		dueDate: "2026-08-21",
		status: "Not started",
		notes: "",
		order: 3
	},
	{
		id: "pt-leave",
		category: "To do",
		task: "Apply leave on 29 and 30 October",
		dueDate: "2026-10-01",
		status: "Not started",
		notes: "",
		order: 4
	}
];
function getMelbourneToday() {
	try {
		return new Intl.DateTimeFormat("en-CA", {
			timeZone: "Australia/Melbourne",
			year: "numeric",
			month: "2-digit",
			day: "2-digit"
		}).format(/* @__PURE__ */ new Date());
	} catch {
		return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	}
}
function getMelbourneCurrentPeriod() {
	const [year, month] = getMelbourneToday().split("-");
	return `${year}-${month}-01`;
}
function formatMelbourneMonthYear(periodStartOrDate) {
	try {
		const [year, month] = (periodStartOrDate || getMelbourneToday()).split("-").map(Number);
		return new Date(year, month - 1, 1).toLocaleDateString("en-AU", {
			month: "long",
			year: "numeric"
		});
	} catch {
		return "Current Period";
	}
}
function addDays(dateStr, days) {
	const [year, month, day] = dateStr.split("-").map(Number);
	const d = new Date(year, month - 1, day + days);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function getNextMonthPeriod(periodStr) {
	return addMonths(periodStr, 1);
}
function addMonths(periodOrDate, delta) {
	const [year, month] = periodOrDate.split("-").map(Number);
	const d = new Date(year, month - 1 + delta, 1);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
}
function periodStartFromDate(dateStr) {
	if (!dateStr) return "";
	return `${dateStr.slice(0, 7)}-01`;
}
function listMonthPeriods(centerPeriod, back, forward) {
	const out = [];
	for (let i = -back; i <= forward; i++) out.push(addMonths(centerPeriod, i));
	return out;
}
function getMonthLastDay(year, month1Indexed) {
	return new Date(year, month1Indexed, 0).getDate();
}
function getLastFridayOfMonth(year, month1Indexed) {
	const lastDay = getMonthLastDay(year, month1Indexed);
	for (let d = lastDay; d >= 1; d--) if (new Date(year, month1Indexed - 1, d).getDay() === 5) return `${year}-${String(month1Indexed).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
	return `${year}-${String(month1Indexed).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
}
function clampDate(year, month1Indexed, desiredDay) {
	const maxDay = getMonthLastDay(year, month1Indexed);
	const day = Math.min(Math.max(desiredDay, 1), maxDay);
	return `${year}-${String(month1Indexed).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
var MONTH_CODES = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function monthShortCode(year, month1Indexed) {
	return `${MONTH_CODES[month1Indexed - 1]}${String(year).slice(2)}`;
}
/** Mondays that fall in the month — matches the Excel bookkeeping grid (Sep26 W1 = first Monday). */
function getMondaysInMonth(year, month1Indexed) {
	const last = getMonthLastDay(year, month1Indexed);
	const prefix = monthShortCode(year, month1Indexed);
	const periodStart = `${year}-${String(month1Indexed).padStart(2, "0")}-01`;
	const weeks = [];
	let idx = 1;
	for (let d = 1; d <= last; d++) if (new Date(year, month1Indexed - 1, d).getDay() === 1) {
		const monday = `${year}-${String(month1Indexed).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
		weeks.push({
			weekIndex: idx,
			weekCode: `${prefix} W${idx}`,
			weekStart: monday,
			dueDate: monday,
			periodStart
		});
		idx += 1;
	}
	return weeks;
}
function getWeeksForPeriod(periodStart) {
	const [year, month] = periodStart.split("-").map(Number);
	return getMondaysInMonth(year, month);
}
/** Bookkeeping week that contains this date — keyed off the Monday, which may sit in the prior month. */
function weekContainingDate(dateStr) {
	if (!dateStr) return null;
	const monday = startOfWeekMonday(dateStr);
	return getWeeksForPeriod(periodStartFromDate(monday)).find((w) => w.weekStart === monday) ?? null;
}
function formatAuShort(dateStr) {
	if (!dateStr) return "";
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString("en-AU", {
		day: "numeric",
		month: "short"
	});
}
function weekdayIndexMelbourne(dateStr) {
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day).getDay();
}
function startOfWeekMonday(dateStr) {
	const [year, month, day] = dateStr.split("-").map(Number);
	const dayIdx = new Date(year, month - 1, day).getDay();
	return addDays(dateStr, dayIdx === 0 ? -6 : 1 - dayIdx);
}
function diffDays(fromDate, toDate) {
	if (!fromDate || !toDate) return 0;
	const [y1, m1, d1] = fromDate.split("-").map(Number);
	const [y2, m2, d2] = toDate.split("-").map(Number);
	const a = Date.UTC(y1, m1 - 1, d1);
	const b = Date.UTC(y2, m2 - 1, d2);
	return Math.round((b - a) / 864e5);
}
function daysOverdue(dueDate, today) {
	if (!dueDate || dueDate >= today) return 0;
	return diffDays(dueDate, today);
}
function isOpenStatus(status) {
	return status !== "Done" && status !== "Not applicable";
}
/** Work I can do now vs work I am watching. */
function getCourt(status) {
	if (status === "Done" || status === "Not applicable") return "done";
	if (status === "Waiting on client" || status === "Blocked" || status === "Ready to lodge") return "theirs";
	return "mine";
}
/**
* Today's plan is curated — matching the Excel Daily Priority Planner.
* Only items explicitly pinned (`onTodayPlan`) or carried over appear here.
*/
function isTodayObligation(ob) {
	if (ob.status === "Not applicable") return false;
	return Boolean(ob.onTodayPlan) || Boolean(ob.carryOver);
}
function getTodaySet(obligations, _melbourneToday) {
	return obligations.filter(isTodayObligation);
}
function sortTodayStack(items) {
	return items.slice().sort((a, b) => {
		const openA = isOpenStatus(a.status) ? 0 : 1;
		const openB = isOpenStatus(b.status) ? 0 : 1;
		if (openA !== openB) return openA - openB;
		const courtRank = (o) => getCourt(o.status) === "mine" ? 0 : getCourt(o.status) === "theirs" ? 1 : 2;
		if (courtRank(a) !== courtRank(b)) return courtRank(a) - courtRank(b);
		const ordA = a.todayOrder ?? a.order ?? 0;
		const ordB = b.todayOrder ?? b.order ?? 0;
		if (ordA !== ordB) return ordA - ordB;
		return (a.dueDate || "").localeCompare(b.dueDate || "");
	});
}
/** Open work due today that is not on the plan — candidates to pin, not auto-added. */
function getDueNotOnPlan(obligations, melbourneToday) {
	const today = melbourneToday || getMelbourneToday();
	return obligations.filter((o) => isOpenStatus(o.status) && o.dueDate === today && !isTodayObligation(o)).sort((a, b) => (a.priority === "P1" ? 0 : 1) - (b.priority === "P1" ? 0 : 1));
}
function openMinutes(items) {
	const open = items.filter((o) => isOpenStatus(o.status));
	const estimated = open.filter((o) => (o.estimatedMinutes || 0) > 0);
	return {
		minutes: estimated.reduce((sum, o) => sum + (o.estimatedMinutes || 0), 0),
		estimatedCount: estimated.length,
		unestimated: open.length - estimated.length
	};
}
function typicalMinutes(o) {
	if (o.estimatedMinutes && o.estimatedMinutes > 0) return o.estimatedMinutes;
	const ws = o.workstream;
	if (ws === "bookkeeping") return 60;
	if (ws === "management_reports") return 90;
	if (ws === "bas_ias") return 45;
	if (ws === "metka_bas") return 20;
	if (ws === "supplier_payments") return 30;
	if (ws === "payroll_tax") return 40;
	if (ws === "stp_payroll") return 25;
	return 30;
}
var JAN_ALIASES = /* @__PURE__ */ new Set([
	"jan",
	"jd",
	"naja"
]);
/** Practitioner sit — JD / Jan. Empty owner counts as you on this desk. */
function isJanOwned(o) {
	const raw = (o.owner || "jan").trim().toLowerCase();
	return JAN_ALIASES.has(raw);
}
function clientMonthLoad(clientId, obligations, period = getMelbourneCurrentPeriod(), today = getMelbourneToday()) {
	const open = obligations.filter((o) => o.clientId === clientId && isOpenStatus(o.status) && o.periodStart === period);
	const mine = open.filter(isJanOwned);
	const team = open.filter((o) => !isJanOwned(o));
	return {
		open: mine.length,
		minutes: mine.reduce((sum, o) => sum + typicalMinutes(o), 0),
		overdue: mine.filter((o) => o.dueDate && o.dueDate < today).length,
		teamOpen: team.length,
		teamMinutes: team.reduce((sum, o) => sum + typicalMinutes(o), 0)
	};
}
function alreadyExists(existing, clientId, workstream, periodStart, taskLabel, weekCode) {
	return existing.some((o) => {
		if (o.clientId !== clientId || o.workstream !== workstream) return false;
		if (weekCode) return o.weekCode === weekCode || o.periodStart === periodStart && o.weekCode === weekCode;
		return o.periodStart === periodStart && (o.taskLabel === taskLabel || o.nextAction === taskLabel);
	});
}
function generateNextMonthCandidates(clients, existingObligations, targetPeriodStart, filterClientId) {
	const [targetYear, targetMonthNum] = targetPeriodStart.split("-").map(Number);
	const followingYear = targetMonthNum === 12 ? targetYear + 1 : targetYear;
	const followingMonthNum = targetMonthNum === 12 ? 1 : targetMonthNum + 1;
	const targetClients = filterClientId ? clients.filter((c) => c.id === filterClientId) : clients.filter((c) => !c.inactive);
	const candidates = [];
	let orderSeed = 10;
	targetClients.forEach((client) => {
		const s = client.services;
		if (!s) return;
		const addIfNotExist = (workstream, dueDate, nextAction, taskLabel, extra) => {
			if (alreadyExists(existingObligations.concat(candidates.map((c) => ({
				...c,
				id: `pending-${c.clientId}-${c.periodStart}-${c.weekCode || c.taskLabel}`
			}))), client.id, workstream, targetPeriodStart, taskLabel, extra?.weekCode)) return;
			candidates.push({
				clientId: client.id,
				clientShortName: client.shortName || client.name,
				workstream,
				periodStart: targetPeriodStart,
				dueDate,
				status: "Not started",
				owner: client.junior || "Jan",
				reviewer: client.senior || "",
				priority: "P2",
				recurring: true,
				nextAction,
				blocker: "",
				waitingOn: "",
				notes: "",
				order: orderSeed++,
				taskLabel,
				weekCode: extra?.weekCode,
				sourceSheet: extra?.sourceSheet
			});
		};
		if (s.monthlyBAS) addIfNotExist("bas_ias", clampDate(followingYear, followingMonthNum, 21), "Lodge monthly BAS", "Monthly BAS", { sourceSheet: "BAS-IAS Tracker" });
		if (s.twoMonthlyIAS && targetMonthNum % 2 === 0) addIfNotExist("bas_ias", clampDate(followingYear, followingMonthNum, 21), "Lodge 2-monthly IAS", "2-monthly IAS", { sourceSheet: "BAS-IAS Tracker" });
		if (s.quarterlyBAS && [
			3,
			6,
			9,
			12
		].includes(targetMonthNum)) addIfNotExist("bas_ias", clampDate(followingYear, followingMonthNum, 21), "Lodge quarterly BAS", "QTR BAS", { sourceSheet: "BAS-IAS Tracker" });
		if (s.weeklyBooks) for (const week of getWeeksForPeriod(targetPeriodStart)) addIfNotExist("bookkeeping", week.dueDate, "Weekly bank reconciliation & ledger balance", "Weekly bookkeeping", {
			weekCode: week.weekCode,
			sourceSheet: "Bookkeeping"
		});
		else if (s.monthlyBooks) {
			const weeks = getWeeksForPeriod(targetPeriodStart);
			const last = weeks[weeks.length - 1];
			addIfNotExist("bookkeeping", last ? last.dueDate : getLastFridayOfMonth(targetYear, targetMonthNum), "Monthly bank reconciliation & month-end accounts", "Monthly bookkeeping", {
				weekCode: last?.weekCode || `${targetPeriodStart.slice(0, 7)} W4`,
				sourceSheet: "Bookkeeping"
			});
		}
		if (s.paymentRun) {
			addIfNotExist("supplier_payments", clampDate(targetYear, targetMonthNum, 15), "Mid-month payment run", "Mid-month payment run", {
				weekCode: "Mid",
				sourceSheet: "Supplier Payment Run"
			});
			addIfNotExist("supplier_payments", clampDate(targetYear, targetMonthNum, 31), "EOM payment run", "Month-end payment run", {
				weekCode: "EOM",
				sourceSheet: "Supplier Payment Run"
			});
		}
		if (s.managementReports) {
			const maDay = client.maDueDay || 15;
			addIfNotExist("management_reports", clampDate(followingYear, followingMonthNum, maDay), "Prepare management reporting pack", "Prepare management accounts", { sourceSheet: "Management Reports" });
		}
		if (s.payrollTax) addIfNotExist("payroll_tax", clampDate(followingYear, followingMonthNum, 7), "State payroll tax lodgement", "Payroll tax");
		if (s.stp) addIfNotExist("stp_payroll", clampDate(targetYear, targetMonthNum, 15), "STP payroll lodgement", "STP lodgement");
	});
	return candidates;
}
/** Current Melbourne month + the next `monthsForward` months. Idempotent against existing rows. */
function generateRollingHorizon(clients, existingObligations, monthsForward = 2) {
	const start = getMelbourneCurrentPeriod();
	const all = [];
	const virtual = [...existingObligations];
	let period = start;
	for (let i = 0; i <= monthsForward; i++) {
		const batch = generateNextMonthCandidates(clients, virtual, period);
		all.push(...batch);
		for (const c of batch) virtual.push({
			id: `virt-${c.clientId}-${c.periodStart}-${c.weekCode || c.taskLabel}`,
			clientId: c.clientId,
			workstream: c.workstream,
			periodStart: c.periodStart,
			dueDate: c.dueDate,
			status: c.status,
			owner: c.owner,
			reviewer: c.reviewer,
			priority: c.priority,
			recurring: true,
			nextAction: c.nextAction,
			blocker: "",
			waitingOn: "",
			notes: "",
			order: 0,
			taskLabel: c.taskLabel,
			weekCode: c.weekCode
		});
		period = getNextMonthPeriod(period);
	}
	return all;
}
function generateCellCandidates(client, existing, workstream, periodStart, weekCode) {
	return generateNextMonthCandidates([client], existing, periodStart, client.id).filter((c) => {
		if (c.workstream !== workstream) return false;
		if (weekCode) return c.weekCode === weekCode;
		return true;
	});
}
function defaultWorkstream(client) {
	const s = client.services;
	if (s.weeklyBooks || s.monthlyBooks) return "bookkeeping";
	if (s.monthlyBAS || s.twoMonthlyIAS || s.quarterlyBAS) return "bas_ias";
	if (s.paymentRun) return "supplier_payments";
	if (s.managementReports) return "management_reports";
	if (s.payrollTax) return "payroll_tax";
	if (s.stp) return "stp_payroll";
	return "admin";
}
function thisWeekBookWork(clients, obligations, today = getMelbourneToday()) {
	const week = weekContainingDate(today);
	if (!week) return null;
	const weeks = getWeeksForPeriod(week.periodStart);
	const isLastWeek = weeks[weeks.length - 1]?.weekCode === week.weekCode;
	const rows = [];
	for (const client of clients) {
		if (client.inactive) continue;
		const weekly = Boolean(client.services.weeklyBooks);
		const monthlyOnly = Boolean(client.services.monthlyBooks) && !weekly;
		if (!weekly && !(monthlyOnly && isLastWeek)) continue;
		const existing = obligations.find((o) => o.clientId === client.id && o.workstream === "bookkeeping" && o.weekCode === week.weekCode && isOpenStatus(o.status)) || obligations.find((o) => o.clientId === client.id && o.workstream === "bookkeeping" && o.weekCode === week.weekCode);
		const candidate = existing ? void 0 : generateCellCandidates(client, obligations, "bookkeeping", week.periodStart, week.weekCode)[0];
		rows.push({
			client,
			week,
			existing,
			candidate,
			monthlyOnly
		});
	}
	return {
		week,
		rows
	};
}
function findWeekBookCell(obligations, clientId, weekCode) {
	const rows = obligations.filter((o) => o.clientId === clientId && o.workstream === "bookkeeping" && o.weekCode === weekCode);
	return rows.find((o) => isOpenStatus(o.status)) || rows[0];
}
var DEMO_TEMPLATES = [
	{
		id: "tpl-timesheet",
		clientId: "client-practice",
		workstream: "admin",
		cadence: "weekly",
		dueRule: "today",
		taskLabel: "Timesheet",
		nextAction: "Complete this week's timesheet",
		estimatedMinutes: 20,
		pinOnSpawn: true
	},
	{
		id: "tpl-bas-catch",
		clientId: "client-practice",
		workstream: "bas_ias",
		cadence: "monthly",
		dueRule: "21_next",
		taskLabel: "BAS & IAS — remaining clients",
		nextAction: "Work through tracker cells that are still Not started",
		estimatedMinutes: 90,
		pinOnSpawn: true
	},
	{
		id: "tpl-leave-check",
		clientId: "client-practice",
		workstream: "admin",
		cadence: "monthly",
		dueRule: "eom",
		taskLabel: "Leave / admin catch-up",
		nextAction: "Park personal admin that is still open",
		estimatedMinutes: 25,
		pinOnSpawn: false
	}
];
function nextDueForTemplate(template, today = getMelbourneToday()) {
	if (template.dueRule === "today") {
		const dow = weekdayIndexMelbourne(today);
		if (dow === 0 || dow === 6) return addDays(startOfWeekMonday(today), 7);
		return today;
	}
	if (template.dueRule === "monday") {
		const monday = startOfWeekMonday(today);
		return monday < today ? addDays(monday, 7) : monday;
	}
	if (template.dueRule === "21_next") {
		const [y, m] = addMonths(getMelbourneCurrentPeriod(), 1).split("-").map(Number);
		return clampDate(y, m, 21);
	}
	const [y, m] = today.split("-").map(Number);
	const last = getMonthLastDay(y, m);
	return `${y}-${String(m).padStart(2, "0")}-${String(last).padStart(2, "0")}`;
}
function templateAlreadyOpen(template, obligations, dueDate) {
	return obligations.some((o) => {
		if (!isOpenStatus(o.status)) return false;
		if (o.templateId === template.id) return true;
		if (o.clientId !== template.clientId) return false;
		if ((o.taskLabel || "") !== template.taskLabel) return false;
		if (template.cadence === "weekly") return o.dueDate.slice(0, 7) === dueDate.slice(0, 7);
		return o.periodStart === `${dueDate.slice(0, 7)}-01` || o.dueDate.slice(0, 7) === dueDate.slice(0, 7);
	});
}
var DB_NAME = "ops-desk";
var DB_VERSION = 1;
var dbInstancePromise = null;
function openDatabase() {
	if (typeof indexedDB === "undefined") return Promise.reject(/* @__PURE__ */ new Error("IndexedDB is not available"));
	if (dbInstancePromise) return dbInstancePromise;
	dbInstancePromise = new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains("meta")) db.createObjectStore("meta", { keyPath: "key" });
			if (!db.objectStoreNames.contains("clients")) db.createObjectStore("clients", { keyPath: "id" });
			if (!db.objectStoreNames.contains("obligations")) db.createObjectStore("obligations", { keyPath: "id" }).createIndex("clientId", "clientId", { unique: false });
		};
		request.onsuccess = () => {
			const db = request.result;
			db.onversionchange = () => {
				db.close();
				dbInstancePromise = null;
			};
			resolve(db);
		};
		request.onerror = () => {
			dbInstancePromise = null;
			reject(request.error || /* @__PURE__ */ new Error("Failed to open IndexedDB"));
		};
		request.onblocked = () => {
			console.warn("IndexedDB open blocked: close other tabs running ops-desk");
		};
	});
	return dbInstancePromise;
}
async function getMeta(key) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const req = db.transaction("meta", "readonly").objectStore("meta").get(key);
		req.onsuccess = () => {
			resolve(req.result ? req.result.value : null);
		};
		req.onerror = () => reject(req.error);
	});
}
async function setMeta(key, value) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction("meta", "readwrite");
		tx.objectStore("meta").put({
			key,
			value
		});
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function getAllClients(uid) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const req = db.transaction("clients", "readonly").objectStore("clients").getAll();
		req.onsuccess = () => {
			resolve((req.result || []).filter((c) => !c.userId || c.userId === uid));
		};
		req.onerror = () => reject(req.error);
	});
}
async function getAllObligations(uid) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const req = db.transaction("obligations", "readonly").objectStore("obligations").getAll();
		req.onsuccess = () => {
			resolve((req.result || []).filter((o) => !o.userId || o.userId === uid));
		};
		req.onerror = () => reject(req.error);
	});
}
async function putClient(client) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction("clients", "readwrite");
		tx.objectStore("clients").put(client);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function putObligation(obligation) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction("obligations", "readwrite");
		tx.objectStore("obligations").put(obligation);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function deleteObligation(id) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction("obligations", "readwrite");
		tx.objectStore("obligations").delete(id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function deleteClient(id) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction(["clients", "obligations"], "readwrite");
		const clientsStore = tx.objectStore("clients");
		const obligationsStore = tx.objectStore("obligations");
		clientsStore.delete(id);
		const req = obligationsStore.index("clientId").getAllKeys(id);
		req.onsuccess = () => {
			const keys = req.result;
			for (const obKey of keys) obligationsStore.delete(obKey);
		};
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function batchPutObligations(obligations) {
	if (obligations.length === 0) return;
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction("obligations", "readwrite");
		const store = tx.objectStore("obligations");
		for (const ob of obligations) store.put(ob);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function clearUserData(uid) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction([
			"meta",
			"clients",
			"obligations"
		], "readwrite");
		const metaStore = tx.objectStore("meta");
		const clientsStore = tx.objectStore("clients");
		const obligationsStore = tx.objectStore("obligations");
		metaStore.delete(`seededAt:${uid}`);
		const clientsReq = clientsStore.openCursor();
		clientsReq.onsuccess = (event) => {
			const cursor = event.target.result;
			if (cursor) {
				const client = cursor.value;
				if (!client.userId || client.userId === uid) cursor.delete();
				cursor.continue();
			}
		};
		const obligationsReq = obligationsStore.openCursor();
		obligationsReq.onsuccess = (event) => {
			const cursor = event.target.result;
			if (cursor) {
				const ob = cursor.value;
				if (!ob.userId || ob.userId === uid) cursor.delete();
				cursor.continue();
			}
		};
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function seedInitialDemoData(uid, demoClients, demoObligations) {
	const db = await openDatabase();
	return new Promise((resolve, reject) => {
		const tx = db.transaction([
			"meta",
			"clients",
			"obligations"
		], "readwrite");
		const metaStore = tx.objectStore("meta");
		const clientsStore = tx.objectStore("clients");
		const obligationsStore = tx.objectStore("obligations");
		const now = (/* @__PURE__ */ new Date()).toISOString();
		for (const client of demoClients) clientsStore.put({
			...client,
			userId: uid,
			createdAt: client.createdAt || now,
			updatedAt: client.updatedAt || now
		});
		for (const ob of demoObligations) obligationsStore.put({
			...ob,
			userId: uid,
			createdAt: ob.createdAt || now,
			updatedAt: ob.updatedAt || now
		});
		metaStore.put({
			key: `seededAt:${uid}`,
			value: now
		});
		metaStore.put({
			key: "schemaVersion",
			value: 2
		});
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
}
async function replaceUserData(uid, newClients, newObligations) {
	const db = await openDatabase();
	const existingClients = await getAllClients(uid);
	const existingObligations = await getAllObligations(uid);
	const clientIdsToDelete = existingClients.map((c) => c.id);
	const obligationIdsToDelete = existingObligations.map((o) => o.id);
	await new Promise((resolve, reject) => {
		const tx = db.transaction([
			"meta",
			"clients",
			"obligations"
		], "readwrite");
		const metaStore = tx.objectStore("meta");
		const clientsStore = tx.objectStore("clients");
		const obligationsStore = tx.objectStore("obligations");
		const now = (/* @__PURE__ */ new Date()).toISOString();
		for (const id of clientIdsToDelete) clientsStore.delete(id);
		for (const id of obligationIdsToDelete) obligationsStore.delete(id);
		for (const client of newClients) clientsStore.put({
			...client,
			userId: uid,
			createdAt: client.createdAt || now,
			updatedAt: now
		});
		for (const ob of newObligations) obligationsStore.put({
			...ob,
			userId: uid,
			createdAt: ob.createdAt || now,
			updatedAt: now
		});
		const seededAtReq = metaStore.get(`seededAt:${uid}`);
		seededAtReq.onsuccess = () => {
			if (!seededAtReq.result) metaStore.put({
				key: `seededAt:${uid}`,
				value: now
			});
		};
		metaStore.put({
			key: "schemaVersion",
			value: 2
		});
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error || /* @__PURE__ */ new Error("Transaction aborted"));
	});
	if (newClients.length > 0) {
		if ((await getAllClients(uid)).length === 0) throw new Error("Import wrote 0 clients — replaceUserData deleted the new rows.");
	}
}
function exportSnapshot(clients, obligations, email) {
	const snapshot = {
		version: 1,
		kind: "ops-desk-snapshot",
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		email: email || "",
		clients,
		obligations
	};
	const json = JSON.stringify(snapshot, null, 2);
	return new Blob([json], { type: "application/json" });
}
function parseSnapshot(text) {
	let parsed;
	try {
		parsed = JSON.parse(text);
	} catch {
		throw new Error("File is not valid JSON.");
	}
	if (!parsed || typeof parsed !== "object") throw new Error("Snapshot root must be a JSON object.");
	const candidate = parsed;
	if (candidate.kind !== "ops-desk-snapshot") throw new Error("Invalid file kind: expected \"ops-desk-snapshot\".");
	if (candidate.version !== 1) throw new Error(`Unsupported snapshot version: ${candidate.version}. Expected version 1.`);
	if (!Array.isArray(candidate.clients)) throw new Error("Snapshot missing \"clients\" array.");
	if (!Array.isArray(candidate.obligations)) throw new Error("Snapshot missing \"obligations\" array.");
	return {
		version: 1,
		kind: "ops-desk-snapshot",
		exportedAt: typeof candidate.exportedAt === "string" ? candidate.exportedAt : (/* @__PURE__ */ new Date()).toISOString(),
		email: typeof candidate.email === "string" ? candidate.email : "",
		clients: candidate.clients,
		obligations: candidate.obligations
	};
}
function checkSnapshotOrphans(snapshot) {
	const clientIds = new Set(snapshot.clients.map((c) => c.id));
	const orphanIds = [];
	for (const ob of snapshot.obligations) if (!clientIds.has(ob.clientId)) orphanIds.push(ob.id);
	return {
		orphanCount: orphanIds.length,
		orphanIds
	};
}
async function applySnapshot(uid, snapshot) {
	await replaceUserData(uid, snapshot.clients, snapshot.obligations);
}
var UID = LOCAL_PRACTITIONER_ID;
var PERSONAL_KEY = `personalTasks:${UID}`;
var SEED_VERSION_KEY = `seedVersion:${UID}`;
var LAST_CLOSED_KEY = `lastClosedDate:${UID}`;
var TEMPLATES_KEY = `templates:${UID}`;
var DataContext = (0, import_react.createContext)(void 0);
function stampClients() {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return DEMO_CLIENTS.map((c) => ({
		...c,
		userId: UID,
		createdAt: now,
		updatedAt: now
	}));
}
function stampObligations() {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return DEMO_OBLIGATIONS.map((o) => ({
		...o,
		userId: UID,
		createdAt: now,
		updatedAt: now
	}));
}
function stampCandidates(candidates) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return candidates.map((c) => ({
		id: `ob-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
		clientId: c.clientId,
		workstream: c.workstream,
		periodStart: c.periodStart,
		dueDate: c.dueDate,
		status: c.status,
		owner: c.owner,
		reviewer: c.reviewer,
		priority: c.priority,
		recurring: c.recurring,
		nextAction: c.nextAction,
		blocker: c.blocker,
		waitingOn: c.waitingOn,
		notes: c.notes,
		order: c.order,
		taskLabel: c.taskLabel,
		weekCode: c.weekCode,
		sourceSheet: c.sourceSheet,
		onTodayPlan: false,
		userId: UID,
		createdAt: now,
		updatedAt: now
	}));
}
function DataProvider({ children }) {
	const [clients, setClients] = (0, import_react.useState)([]);
	const [obligations, setObligations] = (0, import_react.useState)([]);
	const [personalTasks, setPersonalTasks] = (0, import_react.useState)([]);
	const [lastClosedDate, setLastClosedDate] = (0, import_react.useState)(null);
	const [templates, setTemplates] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const refreshData = (0, import_react.useCallback)(async () => {
		const [loadedClients, loadedObligations, loadedPersonal] = await Promise.all([
			getAllClients(UID),
			getAllObligations(UID),
			getMeta(PERSONAL_KEY)
		]);
		setClients(loadedClients.sort((a, b) => a.name.localeCompare(b.name)));
		setObligations(loadedObligations.sort((a, b) => (a.order || 0) - (b.order || 0)));
		setPersonalTasks((loadedPersonal && loadedPersonal.length > 0 ? loadedPersonal : DEMO_PERSONAL_TASKS).sort((a, b) => a.order - b.order));
	}, []);
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		setLoading(true);
		setError(null);
		const initData = async () => {
			try {
				await openDatabase();
				if (await getMeta(SEED_VERSION_KEY) !== 5) {
					await clearUserData(UID);
					await seedInitialDemoData(UID, stampClients(), stampObligations());
					await setMeta(SEED_VERSION_KEY, 5);
					await setMeta(PERSONAL_KEY, DEMO_PERSONAL_TASKS);
				}
				const [loadedClients, loadedObs] = await Promise.all([getAllClients(UID), getAllObligations(UID)]);
				const missing = generateRollingHorizon(loadedClients, loadedObs, 2);
				if (missing.length > 0) await batchPutObligations(stampCandidates(missing));
				if (isMounted) {
					await refreshData();
					const closed = await getMeta(LAST_CLOSED_KEY);
					setLastClosedDate(closed);
					const storedTemplates = await getMeta(TEMPLATES_KEY);
					if (storedTemplates && storedTemplates.length > 0) setTemplates(storedTemplates);
					else {
						await setMeta(TEMPLATES_KEY, DEMO_TEMPLATES);
						setTemplates(DEMO_TEMPLATES);
					}
					setLoading(false);
				}
			} catch (err) {
				console.error("IndexedDB initialization error:", err);
				if (isMounted) {
					setError(err instanceof Error ? err.message : "Error loading local data");
					setLoading(false);
				}
			}
		};
		initData();
		return () => {
			isMounted = false;
		};
	}, [refreshData]);
	const p1Count = (0, import_react.useMemo)(() => obligations.filter((o) => o.priority === "P1" && o.status !== "Done" && o.status !== "Not applicable").length, [obligations]);
	const persistPersonal = async (next) => {
		await setMeta(PERSONAL_KEY, next);
		setPersonalTasks(next.sort((a, b) => a.order - b.order));
	};
	const updateObligationStatus = async (id, status) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return;
		try {
			const now = (/* @__PURE__ */ new Date()).toISOString();
			await putObligation({
				...target,
				status,
				completedAt: status === "Done" ? getMelbourneToday() : null,
				updatedAt: now
			});
			await refreshData();
		} catch (err) {
			console.error("Error updating status in IDB:", err);
			setError(err instanceof Error ? err.message : "Failed to update status");
			throw err;
		}
	};
	const updateObligationPriority = async (id, newPriority) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return {
			success: false,
			message: "Obligation not found"
		};
		if (newPriority === "P1" && target.priority !== "P1") {
			if (obligations.filter((o) => o.id !== id && o.priority === "P1" && o.status !== "Done" && o.status !== "Not applicable").length >= 3) return {
				success: false,
				message: "Max three P1 obligations allowed. Please demote an existing P1 item first."
			};
		}
		try {
			const now = (/* @__PURE__ */ new Date()).toISOString();
			await putObligation({
				...target,
				priority: newPriority,
				updatedAt: now
			});
			await refreshData();
			return { success: true };
		} catch (err) {
			console.error("Error updating priority in IDB:", err);
			return {
				success: false,
				message: err instanceof Error ? err.message : "Failed to update priority"
			};
		}
	};
	const updateObligationNotes = async (id, notes, nextAction, blocker, waitingOn) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const updatedOb = {
			...target,
			notes,
			updatedAt: now
		};
		if (nextAction !== void 0) updatedOb.nextAction = nextAction;
		if (blocker !== void 0) updatedOb.blocker = blocker;
		if (waitingOn !== void 0) updatedOb.waitingOn = waitingOn;
		await putObligation(updatedOb);
		await refreshData();
	};
	const updateObligation = async (id, updates) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const updatedOb = { ...target };
		if (updates.clientId !== void 0) updatedOb.clientId = updates.clientId;
		if (updates.workstream !== void 0) updatedOb.workstream = updates.workstream;
		if (updates.periodStart !== void 0) updatedOb.periodStart = updates.periodStart;
		if (updates.dueDate !== void 0) updatedOb.dueDate = updates.dueDate;
		if (updates.status !== void 0) {
			updatedOb.status = updates.status;
			updatedOb.completedAt = updates.status === "Done" ? updates.completedAt || getMelbourneToday() : null;
		}
		if (updates.owner !== void 0) updatedOb.owner = updates.owner;
		if (updates.reviewer !== void 0) updatedOb.reviewer = updates.reviewer;
		if (updates.priority !== void 0) updatedOb.priority = updates.priority;
		if (updates.nextAction !== void 0) updatedOb.nextAction = updates.nextAction;
		if (updates.blocker !== void 0) updatedOb.blocker = updates.blocker;
		if (updates.waitingOn !== void 0) updatedOb.waitingOn = updates.waitingOn;
		if (updates.recurring !== void 0) updatedOb.recurring = updates.recurring;
		if (updates.estimatedMinutes !== void 0) updatedOb.estimatedMinutes = updates.estimatedMinutes;
		if (updates.order !== void 0) updatedOb.order = updates.order;
		if (updates.carryOver !== void 0) updatedOb.carryOver = updates.carryOver;
		if (updates.notes !== void 0) updatedOb.notes = updates.notes;
		if (updates.taskLabel !== void 0) updatedOb.taskLabel = updates.taskLabel;
		if (updates.onTodayPlan !== void 0) updatedOb.onTodayPlan = updates.onTodayPlan;
		if (updates.todayOrder !== void 0) updatedOb.todayOrder = updates.todayOrder;
		if (updates.weekCode !== void 0) updatedOb.weekCode = updates.weekCode;
		if (updates.entityName !== void 0) updatedOb.entityName = updates.entityName;
		if (updates.sourceSheet !== void 0) updatedOb.sourceSheet = updates.sourceSheet;
		if (updates.templateId !== void 0) updatedOb.templateId = updates.templateId;
		if (updates.completedAt !== void 0 && updates.status === void 0) updatedOb.completedAt = updates.completedAt;
		updatedOb.updatedAt = now;
		await putObligation(updatedOb);
		await refreshData();
	};
	const addObligation = async (data) => {
		const newId = `ob-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		await putObligation({
			...data,
			id: newId,
			userId: UID,
			createdAt: now,
			updatedAt: now
		});
		await refreshData();
		return newId;
	};
	const deleteObligation$1 = async (id) => {
		await deleteObligation(id);
		await refreshData();
	};
	const updateClient = async (id, updates) => {
		const target = clients.find((c) => c.id === id);
		if (!target) return;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		await putClient({
			...target,
			...updates,
			id: target.id,
			userId: UID,
			updatedAt: now
		});
		await refreshData();
	};
	const addClient = async (data) => {
		const newId = `client-${Date.now()}`;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		await putClient({
			...data,
			id: newId,
			userId: UID,
			createdAt: now,
			updatedAt: now
		});
		await refreshData();
		return newId;
	};
	const deleteClient$1 = async (id) => {
		await deleteClient(id);
		await refreshData();
	};
	const batchCreateObligations = async (candidates) => {
		if (candidates.length === 0) return 0;
		await batchPutObligations(stampCandidates(candidates));
		await refreshData();
		return candidates.length;
	};
	const resetToDemoData = async () => {
		setLoading(true);
		try {
			await clearUserData(UID);
			await seedInitialDemoData(UID, stampClients(), stampObligations());
			await setMeta(SEED_VERSION_KEY, 5);
			await setMeta(PERSONAL_KEY, DEMO_PERSONAL_TASKS);
			await setMeta(LAST_CLOSED_KEY, null);
			await setMeta(TEMPLATES_KEY, DEMO_TEMPLATES);
			setLastClosedDate(null);
			setTemplates(DEMO_TEMPLATES);
			const missing = generateRollingHorizon(stampClients(), stampObligations(), 2);
			if (missing.length > 0) await batchPutObligations(stampCandidates(missing));
			await refreshData();
		} catch (err) {
			console.error("Error resetting demo data in IDB:", err);
			setError(err instanceof Error ? err.message : "Failed to reset data");
		} finally {
			setLoading(false);
		}
	};
	const importSnapshotData = async (snapshot) => {
		setLoading(true);
		try {
			await applySnapshot(UID, snapshot);
			await setMeta(SEED_VERSION_KEY, 5);
			await refreshData();
		} catch (err) {
			console.error("Error applying snapshot in IDB:", err);
			setError(err instanceof Error ? err.message : "Failed to import snapshot");
			throw err;
		} finally {
			setLoading(false);
		}
	};
	const addPersonalTask = async (task) => {
		const next = [...personalTasks, {
			...task,
			id: `pt-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`
		}];
		await persistPersonal(next);
	};
	const updatePersonalTask = async (id, updates) => {
		const next = personalTasks.map((t) => t.id === id ? {
			...t,
			...updates,
			id: t.id
		} : t);
		await persistPersonal(next);
	};
	const deletePersonalTask = async (id) => {
		await persistPersonal(personalTasks.filter((t) => t.id !== id));
	};
	const pinToToday = async (id) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return {
			success: false,
			message: "Obligation not found"
		};
		const today = getMelbourneToday();
		const openOnPlan = getTodaySet(obligations, today).filter((o) => isOpenStatus(o.status));
		const maxOrder = openOnPlan.reduce((m, o) => Math.max(m, o.todayOrder ?? o.order ?? 0), 0);
		await putObligation({
			...target,
			onTodayPlan: true,
			todayOrder: maxOrder + 1,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		await refreshData();
		if (openOnPlan.length >= 10 && !target.onTodayPlan && !target.carryOver) return {
			success: true,
			message: `Pinned. Today's stack is over 10 open items — sequence or park something.`
		};
		return { success: true };
	};
	const unpinFromToday = async (id) => {
		const target = obligations.find((o) => o.id === id);
		if (!target) return;
		await putObligation({
			...target,
			onTodayPlan: false,
			carryOver: false,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		await refreshData();
	};
	const reorderTodayPlan = async (orderedIds) => {
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const updates = [];
		orderedIds.forEach((id, index) => {
			const target = obligations.find((o) => o.id === id);
			if (!target) return;
			updates.push({
				...target,
				todayOrder: index + 1,
				order: index + 1,
				updatedAt: now
			});
		});
		if (updates.length === 0) return;
		await batchPutObligations(updates);
		await refreshData();
	};
	const closeDay = async (decisions) => {
		const today = getMelbourneToday();
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const plan = getTodaySet(obligations, today);
		const decisionMap = new Map(decisions.map((d) => [d.id, d.action]));
		const updates = plan.map((o) => {
			if (!isOpenStatus(o.status)) return {
				...o,
				onTodayPlan: false,
				carryOver: false,
				updatedAt: now
			};
			if ((decisionMap.get(o.id) || "park") === "carry") return {
				...o,
				onTodayPlan: true,
				carryOver: true,
				updatedAt: now
			};
			return {
				...o,
				onTodayPlan: false,
				carryOver: false,
				updatedAt: now
			};
		});
		if (updates.length > 0) await batchPutObligations(updates);
		await setMeta(LAST_CLOSED_KEY, today);
		setLastClosedDate(today);
		await refreshData();
	};
	const persistTemplates = async (next) => {
		setTemplates(next);
		await setMeta(TEMPLATES_KEY, next);
	};
	const addTemplate = async (template) => {
		const id = `tpl-${Date.now().toString(36)}`;
		await persistTemplates([...templates, {
			...template,
			id
		}]);
	};
	const deleteTemplate = async (id) => {
		await persistTemplates(templates.filter((t) => t.id !== id));
	};
	const spawnTemplate = async (id) => {
		const template = templates.find((t) => t.id === id);
		if (!template) return {
			spawned: false,
			message: "Template not found"
		};
		const dueDate = nextDueForTemplate(template);
		if (templateAlreadyOpen(template, obligations, dueDate)) return {
			spawned: false,
			message: "This cycle already has an open instance"
		};
		const now = (/* @__PURE__ */ new Date()).toISOString();
		await putObligation({
			id: `ob-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
			clientId: template.clientId,
			workstream: template.workstream,
			periodStart: periodStartFromDate(dueDate),
			dueDate,
			status: "Not started",
			owner: "Jan",
			reviewer: "",
			priority: "P2",
			nextAction: template.nextAction,
			blocker: "",
			waitingOn: "",
			recurring: true,
			estimatedMinutes: template.estimatedMinutes,
			order: Date.now() % 1e3,
			onTodayPlan: template.pinOnSpawn,
			taskLabel: template.taskLabel,
			templateId: template.id,
			sourceSheet: "Template",
			userId: UID,
			createdAt: now,
			updatedAt: now
		});
		await refreshData();
		return {
			spawned: true,
			message: template.pinOnSpawn ? "Spawned and pinned to today" : "Spawned into pipeline"
		};
	};
	const openThisWeekBooks = async (picks) => {
		const today = getMelbourneToday();
		const work = thisWeekBookWork(clients, obligations, today);
		if (!work) return {
			weekCode: "",
			created: 0,
			pinned: 0
		};
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const writes = [];
		let created = 0;
		let pinned = 0;
		let order = getTodaySet(obligations, today).filter((o) => isOpenStatus(o.status)).reduce((m, o) => Math.max(m, o.todayOrder ?? o.order ?? 0), 0);
		for (const pick of picks) {
			const row = work.rows.find((r) => r.client.id === pick.clientId);
			if (!row) continue;
			if (row.existing) {
				if (pick.pin && !row.existing.onTodayPlan && !row.existing.carryOver) {
					order += 1;
					writes.push({
						...row.existing,
						onTodayPlan: true,
						todayOrder: order,
						updatedAt: now
					});
					pinned += 1;
				}
				continue;
			}
			if (!row.candidate) continue;
			const stamped = stampCandidates([row.candidate])[0];
			stamped.estimatedMinutes = 60;
			if (pick.pin) {
				order += 1;
				stamped.onTodayPlan = true;
				stamped.todayOrder = order;
				pinned += 1;
			}
			writes.push(stamped);
			created += 1;
		}
		if (writes.length > 0) await batchPutObligations(writes);
		await refreshData();
		return {
			weekCode: work.week.weekCode,
			created,
			pinned
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataContext.Provider, {
		value: {
			clients,
			obligations,
			personalTasks,
			loading,
			error,
			p1Count,
			lastClosedDate,
			pinToToday,
			unpinFromToday,
			reorderTodayPlan,
			closeDay,
			updateObligationStatus,
			updateObligationPriority,
			updateObligationNotes,
			updateObligation,
			addObligation,
			deleteObligation: deleteObligation$1,
			updateClient,
			addClient,
			deleteClient: deleteClient$1,
			resetToDemoData,
			batchCreateObligations,
			importSnapshotData,
			addPersonalTask,
			updatePersonalTask,
			deletePersonalTask,
			templates,
			addTemplate,
			deleteTemplate,
			spawnTemplate,
			openThisWeekBooks
		},
		children
	});
}
function useData() {
	const context = (0, import_react.useContext)(DataContext);
	if (!context) throw new Error("useData must be used within a DataProvider");
	return context;
}
var DeskModalsContext = (0, import_react.createContext)(void 0);
function DeskModalsProvider({ children }) {
	const [drawerClientId, setDrawerClientId] = (0, import_react.useState)(null);
	const [selectedObligation, setSelectedObligation] = (0, import_react.useState)(null);
	const [addObligationClientId, setAddObligationClientId] = (0, import_react.useState)(null);
	const [showAddObligation, setShowAddObligation] = (0, import_react.useState)(false);
	const openAddObligation = (clientId) => {
		setAddObligationClientId(clientId ?? null);
		setShowAddObligation(true);
	};
	const closeAddObligation = () => {
		setShowAddObligation(false);
		setAddObligationClientId(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskModalsContext.Provider, {
		value: {
			drawerClientId,
			setDrawerClientId,
			selectedObligation,
			setSelectedObligation,
			showAddObligation,
			addObligationClientId,
			openAddObligation,
			closeAddObligation
		},
		children
	});
}
function useDeskModals() {
	const ctx = (0, import_react.useContext)(DeskModalsContext);
	if (!ctx) throw new Error("useDeskModals must be used within DeskModalsProvider");
	return ctx;
}
//#endregion
export { listMonthPeriods as A, useDeskModals as B, getMelbourneToday as C, getWeeksForPeriod as D, getTodaySet as E, sortTodayStack as F, startOfWeekMonday as I, templateAlreadyOpen as L, openMinutes as M, parseSnapshot as N, isOpenStatus as O, periodStartFromDate as P, thisWeekBookWork as R, getMelbourneCurrentPeriod as S, getTaskTitle as T, weekContainingDate as V, generateCellCandidates as _, WORKSTREAM_CADENCE as a, getCourt as b, checkSnapshotOrphans as c, defaultWorkstream as d, exportSnapshot as f, formatPeriod as g, formatMelbourneMonthYear as h, SERVICE_LABELS as i, nextDueForTemplate as j, isTodayObligation as k, clientMonthLoad as l, formatAuShort as m, DataProvider as n, WORKSTREAM_LABELS as o, findWeekBookCell as p, DeskModalsProvider as r, addDays as s, ALL_STATUSES as t, daysOverdue as u, generateNextMonthCandidates as v, getNextMonthPeriod as w, getDueNotOnPlan as x, generateRollingHorizon as y, useData as z };
