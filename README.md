# Bas app

En demonstrativ applikation som visar hur man bygger en fullstack-lösning med moderna webbteknologier och Azure-tjänster.

## 🚀 Funktioner

- **Frontend**: React 18 med TypeScript och Vite
- **Backend**: Azure Functions med TypeScript
- **Deployment**: GitHub Actions för automatisk deployment
- **Hosting**: Azure Static Web Apps (SWA)
- **Runtime**: Node.js 20+

## 🏗️ Projektstruktur

```
bas-app/
├── web/                 # React frontend
│   ├── src/            # Källkod
│   ├── dist/           # Byggda filer
│   └── package.json    # Frontend dependencies
├── functions/           # Azure Functions backend
│   ├── src/            # Källkod
│   ├── dist/           # Byggda filer
│   └── package.json    # Backend dependencies
└── .nvmrc              # Node.js version (20)
```

## 🛠️ Teknisk Stack

### Frontend
- **React 18** - Moderna React-hooks och funktioner
- **TypeScript** - Typesäker utveckling
- **Vite** - Snabb build tool och dev server
- **Vite React Plugin** - Optimerad React-utveckling

### Backend
- **Azure Functions** - Serverless backend
- **TypeScript** - Typesäker backend-utveckling
- **Azure Functions v4** - Senaste versionen av Azure Functions

### DevOps
- **GitHub Actions** - CI/CD pipeline
- **Azure Static Web Apps** - Automatisk deployment
- **Node.js 20** - LTS-version med moderna funktioner

## 🚀 Komma igång

### Förutsättningar
- Node.js 20+ (använd `.nvmrc` för rätt version)
- Azure Functions Core Tools (stämmer detta?)
- Azure CLI (för deployment) (stämmer detta?)

### Lokal utveckling

1. **Installera dependencies:**
   ```bash
   # Frontend
   cd web
   npm install
   
   # Backend
   cd ../functions
   npm install
   ```

2. **Starta utvecklingsmiljö:**
   ```bash
   # Frontend (port 5173)
   cd web
   npm run dev
   
   # Backend (port 7071)
   cd ../functions
   npm start
   ```

3. **Bygga för produktion:**
   ```bash
   # Frontend
   cd web
   npm run build
   
   # Backend
   cd ../functions
   npm run build
   ```

## 🌐 Demo

Applikationen demonstrerar en enkel "Hello World" funktionalitet som visar hur frontend och backend kommunicerar via Azure Functions.

## 📚 Lärdomar

Denna app visar:
- Modern React-utveckling med Vite
- Azure Functions som backend
- TypeScript för både frontend och backend
- Automatisk deployment med GitHub Actions
- Azure Static Web Apps för hosting
- Fullstack-utveckling i ett monorepo

## 🔧 Skript

### Frontend (web/)
- `npm run dev` - Starta utvecklingsserver
- `npm run build` - Bygga för produktion
- `npm run preview` - Förhandsvisa byggda filer

### Backend (functions/)
- `npm run build` - Bygga TypeScript
- `npm start` - Starta Azure Functions lokalt
- `npm run clean` - Rensa byggda filer

## 📝 Licens

Detta är ett demonstrationsprojekt för utbildningssyfte.
