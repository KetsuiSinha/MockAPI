# 🎯 Orchestrix
<img width="3780" height="1890" alt="thumbnail" src="https://github.com/user-attachments/assets/4b0870fd-2e33-466e-a377-4e23472be421" />

> "Write backend logic the way you explain it to a friend."
> 

Orchestrix is a visual backend builder powered by [Motia](https://motia.dev/)'s scalable workflows, where anyone — even without coding — can build production-ready APIs, automations, cron jobs, and integrations by simply typing what they want in plain English.

The system parses English → generates Motia workflow steps → connects nodes → deploys instantly.

<img width="1920" height="867" alt="landing (1)" src="https://github.com/user-attachments/assets/13b46907-d2b0-4c2a-b5b5-82239fabf656" />

---

## ✨ What Can You Build?

- 🔐 **Authentication Systems** - Login, signup, password reset flows
- 📊 **CRUD APIs** - Full database operations without writing queries
- 📧 **Email Automations** - Send transactional emails, notifications
- 🔗 **API Integrations** - Connect third-party services visually

All without writing backend code manually.

---

## 🎯 Who Is It For?

| User Type | Use Case |
| --- | --- |
| 🚀 **Non-coders** | Build real backend logic without learning programming |
| ⚡ **Developers** | Build APIs 10x faster with visual workflows |
| 👥 **Teams** | Create automations instantly without backend knowledge |
| 💼 **Founders** | Get production-ready backend that scales from day one |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ React Flow   │  │  AI Prompt   │  │   Node       │  │
│  │   Editor     │  │   Generator  │  │   Library    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            │ WebSocket (Logs)
                            │ REST API
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Backend (Motia Runtime)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Workflow    │  │   Step       │  │   State      │  │
│  │   Engine     │  │  Executor    │  │   Manager    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Database   │  │    Email     │  │     Job      │  │
│  │  Connector   │  │   Service    │  │    Queue     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘

```

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Graph Editor:** React Flow
- **State Management:** React Hooks + Motia Client
- **Real-time:** Socket.io Client

### Backend

- **Runtime:** Motia Workflow Engine
- **Language:** TypeScript/JavaScript
- **Database:** MongoDB (configurable)
- **Email:** NodeMailer
- **Authentication:** JWT
- **Job Queue:** Motia Background Jobs
- **Logging:** Motia Step Logger

### AI/ML

- **Provider:** Groq (Claude/GPT models)
- **Purpose:** Natural language → Workflow generation

---








