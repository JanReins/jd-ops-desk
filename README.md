# JD Ops Desk

**JD Ops Desk** is a high-velocity daily operations desk and workflow management tool designed for Australian tax & bookkeeping practices.

## Overview

JD Ops Desk helps sole practitioners and small practice teams stay on top of recurring compliance work (BAS, IAS, STP payroll, superannuation, income tax, financial statements) and daily priorities with zero friction.

### Core Views
- **Today**: Daily priority planner & personal checklist. Pin obligations for today's stack, sequence work, track capacity in minutes, and perform end-of-day closeouts.
- **Pipeline**: Complete ledger of client obligations across past, current, and upcoming periods. Filterable by workstream, priority, status, and court ("My court" vs "Their court").
- **Clients**: Comprehensive directory of client entities, active workstreams, contact info, and current period workloads.
- **Trackers**: Dedicated tracking boards for recurring compliance cycles (BAS, IAS, Payroll, Tax Returns) and template generators.

## Local Browser Data Storage

JD Ops Desk is built as an offline-first web application. All client records, obligations, templates, and personal tasks are stored locally in your browser using **IndexedDB**.

- **Privacy & Ownership**: Your data stays strictly on your local machine in IndexedDB.
- **Import / Export**: Full snapshot JSON import/export is supported via the top navigation bar for backups or moving data between browsers.
- **Demo Seed & Reset**: Automatic demo seeding runs on first launch when no local clients exist. An explicit "Reset to demo" button is available in the navigation menu for intentional database wipes.

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm 10+

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/JanReins/jd-ops-desk.git
   cd jd-ops-desk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:8080` in your browser.
