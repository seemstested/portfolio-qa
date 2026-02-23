# Theodores Portfolio - QA Engineer

Personal portfolio website built with Astro and TailwindCSS, deployed to VPS.

## 🚀 Tech Stack

- **Astro** - Static site generator
- **TailwindCSS** - Styling
- **GitHub Actions** - CI/CD deployment to VPS

## 🛠️ Setup Local

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🔧 Deployment

Automatic deployment to VPS via GitHub Actions when pushing to main branch.

### Secrets Required (GitHub Repo Settings)

- `VPS_HOST`: 150.109.23.23
- `VPS_USER`: root
- `VPS_SSH_KEY`: Private SSH key

## 📝 Customization

Edit `src/pages/index.astro` to update portfolio content.

## 🔗 Live Site

- **URL**: https://theodores.dev

---

Built by Theodores | QA Engineer
