# 🚀 CODECANVAS – Personal Portfolio

A modern, responsive portfolio built with **Next.js**, **TypeScript**, and **CSS**, designed to showcase your projects, skills, and professional identity. The homepage features a sleek dark-themed layout with glowing accents, smooth transitions, and a minimalist navigation bar.

🔗 **Live Demo:** [View Deployed Site](https://your-deployment-link.com)

---

## ✨ Features

- **Responsive Design** – Mobile-first layout adapts to all screen sizes
- **Project Gallery** – Filterable, animated showcase of your work
- **Type-safe Development** – Built with TypeScript for reliability
- **Modern UI/UX** – Clean design using ShadCN UI and Lucide icons
- **Fast & Optimized** – Smooth animations and quick load times

---

## 🛠️ Tech Stack

| Category     | Tech Used                     |
|--------------|-------------------------------|
| Framework    | [Next.js 14+](https://nextjs.org/) |
| Language     | [TypeScript](https://www.typescriptlang.org/) |
| Styling      | CSS Modules, ShadCN UI        |
| Icons        | [Lucide React](https://lucide.dev/) |
| Deployment   | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

codecanvas/ ├── public/ │ └── assets/ │ ├── img/ # Static images │ └── documents/ # Resume and downloads ├── src/ │ ├── app/ │ │ ├── home/ # Landing page │ │ │ ├── projects/ # Project listings │ │ │ └── page.tsx # Home page entry │ │ ├── about/ # About section │ │ ├── contact/ # Contact form │ │ ├── footer/ # Footer layout │ │ ├── layout.tsx # Root layout │ │ └── globals.css # Global styles │ ├── components/ # Reusable UI components │ ├── TS/ │ │ ├── context/ # Context providers │ │ └── types/ # TypeScript interfaces ├── .gitignore ├── eslint.config.mjs ├── LICENSE ├── next.config.ts ├── package.json ├── tsconfig.json └── README.md

Code

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/sohankrshah/codecanvas.git
cd codecanvas
npm install
npm run dev
Visit http://localhost:3000 to view locally.
```
📝 Adding New Projects
Edit src/contents/project.ts and append a new object to the projects array:

📦 Production Build
bash
npm run build
npm start
🚢 Deployment
Vercel (Recommended)
Push to GitHub

Import repo on Vercel

Click “Deploy”

📄 Environment Variables
Create .env.local:

env
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_GITHUB_USERNAME=sohankrshah
🧪 Scripts
npm run dev – Start dev server

npm run build – Build for production

npm start – Run production server

npm run lint – Lint code

npm run type-check – TypeScript check

🐛 Known Issues
None currently. Please report bugs via GitHub Issues.

🤝 Contributing
Fork the repo

Create a branch (git checkout -b feature/YourFeature)

Commit and push

Open a Pull Request

📜 License
MIT License – see LICENSE

👤 Author
Sohan Kumar Shah

GitHub: @sohankrshah

LinkedIn: @sohankrshah

Portfolio: codecanvas.dev

⭐ If you like this project, give it a star!