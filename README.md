<p align="center">
	<img src="https://github.com/romxnv/clouderica/blob/main/assets/favicon.svg" alt="Clouderica Logo" height="75">
</p>

<h1 align="center">Clouderica Frontend</h1>

<p align="center">
	Modern React-based interface for cloud storage with real-time file management, 
  secure authentication, and seamless user experience. Built with performance-first architecture.
</p>

<p align="center">
  <a href="https://github.com/romxnv/clouderica">Main Repository</a> •
  <a href="https://github.com/romxnv/clouderica-backend">Backend Repository</a>
</p>

<p align="center"> <img src="https://github.com/romxnv/clouderica/blob/main/assets/home-page.png" width="700" alt="Main dashboard preview"></p>
<p align="center"> <img src="https://github.com/romxnv/clouderica/blob/main/assets/home-page-mobile.png" width="700" alt="Main dashboard mobile preview"></p>

## 🧰 Technology Stack

- [**React**](https://reactjs.org/) – JavaScript library for building user
  interfaces
- [**Vite**](https://vitejs.dev/) – Modern frontend build tool with fast Hot
  Module Replacement (HMR)
- [**TypeScript**](https://www.typescriptlang.org/) – Superset of JavaScript for
  static typing
- [**TanStack Query**](https://tanstack.com/query/latest) – Powerful
  asynchronous data fetching, caching, and synchronization
- [**Zustand**](https://zustand-demo.pmnd.rs/) – Lightweight and scalable state
  management library
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework for
  rapid UI development
- [**React Hook Form**](https://react-hook-form.com/) +
  [**Zod**](https://zod.dev/) – Form state management with schema-based
  validation

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/romxnv/clouderica-frontend.git
cd clouderica-frontend
```

### 2. Configure environment

```bash
cp .env.example .env
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm run dev
```

- Project runs at: http://localhost:5173
- Backend API should be available at: http://localhost:8080/api

## 🛠️ Build for Production

```bash
npm run build
```

## 🧪 Linting & Formatting

To check code quality:

```bash
npm run lint
```

To format code with Prettier:

```bash
npm run format
```

> ESLint and Prettier configs are preinstalled and preconfigured.

## 🙌 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a pull request

Report bugs or suggest features in the
[Issues](https://github.com/romxnv/clouderica-frontend/issues) section.
