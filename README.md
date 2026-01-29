# YoNISeRD Website

Youth Network Integrated Services for Research and Development - Official website for youth empowerment programs in Kenya.

![React](https://img.shields.io/badge/React-19.2-blue)
![React Router](https://img.shields.io/badge/React%20Router-7.9-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌍 About YoNISeRD

YoNISeRD empowers youth through collaborative networks, innovative research, and integrated development services. We focus on:
- **Youth Empowerment** - Building skills and confidence
- **Community Engagement** - Grassroots-led initiatives
- **Research-Driven Programs** - Evidence-based solutions
- **Sustainable Impact** - Long-term community development

**Website**: [youthnetworkonline.org](https://youthnetworkonline.org)  
**Contact**: youthnetwork4@gmail.com

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ynis-rd-website.git
   cd ynis-rd-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration (optional)
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder. The app is ready to be deployed.

```bash
npm run build -- --analyze
```
(Optional) Analyze bundle size after build.

---

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable React components
│   ├── Layout.jsx       # Main layout with navbar/footer
│   ├── Navbar.jsx       # Navigation component
│   ├── Footer.jsx       # Footer component
│   ├── ErrorBoundary.jsx # Error handling
│   └── ...
├── pages/          # Route pages
│   ├── Home.jsx    # Homepage
│   ├── About.jsx   # About us page
│   ├── Contact.jsx # Contact form
│   ├── Programs.jsx
│   ├── OurWork.jsx
│   ├── News.jsx
│   ├── Impact.jsx
│   └── NotFound.jsx
├── constants/      # Config and constants
│   └── index.js    # Site configuration (contact info, links, etc.)
├── index.css       # Global styles (TailwindCSS)
├── App.js          # Main app component with routing
└── index.js        # App entry point
```

---

## 🎨 Technology Stack

- **Frontend Framework**: React 19.2
- **Routing**: React Router 7.9
- **Styling**: TailwindCSS 3.4 + PostCSS
- **Testing**: React Testing Library
- **Build Tool**: Create React App (Webpack)
- **Node Package Manager**: npm

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file (copy from `.env.example`):

```env
REACT_APP_SITE_NAME=YoNISeRD
REACT_APP_CONTACT_EMAIL=youthnetwork4@gmail.com
REACT_APP_PHONE=+254725451006
```

### Site Information
Edit `src/constants/index.js` to update:
- Organization contact info
- Social media links
- Team member details
- Core values

---

## ♿ Accessibility

This website follows **WCAG 2.1 Level AA** accessibility standards:

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Focus indicators for all interactive elements
- ✅ Reduced motion support
- ✅ Image alt text on all photos
- ✅ Skip link to main content

**Testing**: See [QUICK_A11Y_CHECK.md](./QUICK_A11Y_CHECK.md) for accessibility verification steps.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/ynis-rd-website"
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `build/` folder contents to your web server
3. Configure server to serve `index.html` for all routes (SPA support)

---

## 📊 Performance

- Optimized production bundle (~150KB gzipped)
- Lazy-loaded images
- CSS-in-JS optimizations via TailwindCSS
- No unused dependencies

**Lighthouse Score Target**: 90+ (Performance, Accessibility, Best Practices)

Check with: Chrome DevTools → Lighthouse tab

---

## 🔒 Security

- No hardcoded secrets (use `.env`)
- Dependencies regularly updated
- Content Security Policy compliant
- XSS/CSRF protection built-in to React

Run security audit:
```bash
npm audit
npm audit fix  # Auto-fix vulnerabilities
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```

### Clear Cache and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Build Fails
```bash
npm run build -- --verbose  # See detailed errors
```

### Images Not Loading
- Check image paths in `src/assets/`
- Ensure alt text is provided
- Use relative paths from `src/`

---

## 📖 Documentation

- **Accessibility**: [ACCESSIBILITY_IMPROVEMENTS.md](./ACCESSIBILITY_IMPROVEMENTS.md)
- **Accessibility Testing**: [QUICK_A11Y_CHECK.md](./QUICK_A11Y_CHECK.md)
- **Development Guidelines**: [AGENTS.md](./AGENTS.md)
- **Standardization**: [STANDARDIZATION_RECOMMENDATIONS.md](./STANDARDIZATION_RECOMMENDATIONS.md)

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

### Code Standards
- Use `.jsx` for React components
- Follow TailwindCSS for styling
- Keep components in `src/components/`
- Follow the heading hierarchy (h1 → h2 → h3)
- Add alt text to all images
- Test accessibility with keyboard navigation

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

---

## 📞 Contact & Support

**Organization**: Youth Network Integrated Services for Research and Development (YoNISeRD)

- **Email**: youthnetwork4@gmail.com
- **Location**: Kisii, Kenya
- **Phone**: +254 725 451 006

**Social Media**:
- LinkedIn: [YoNISeRD](https://www.linkedin.com/company/youth-network-integrated-services-for-research-and-development/)
- Twitter: [@YoNISeRD](https://twitter.com)
- Instagram: [@YoNISeRD](https://instagram.com)

---

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Routed with [React Router](https://reactrouter.com/)
- Icons and images from community resources

---

**Last Updated**: November 27, 2025  
**Version**: 1.0.0

---

## 🎯 Roadmap

- [ ] Add blog/news section with CMS integration
- [ ] Implement multilingual support (Swahili, English)
- [ ] Add mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Volunteer portal
- [ ] Donation system integration
- [ ] API backend integration
- [ ] PWA support (offline capability)

---

Made with ❤️ by the YoNISeRD team
