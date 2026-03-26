### node version
    v22.19.0

### Added on 2026.3.26
    Google GTM
    Whatsapp phone number


### icon
npm install react-icons

### page router
npm install react-router-dom


### tailwind.config.js
set global css

### SEO meta
Added on all page

## Create Sitemap & robots

    your-react-project/
    ├── public/
    ├── src/
    ├── scripts/
    │   ├── sitemap-generator.js  # ✅ 
    │   └── build-sitemap.js      # ✅ 
    ├── package.json

    "scripts": {
    "start": "react-scripts start",
    "build": "npm run build:sitemap && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:sitemap": "node scripts/build-sitemap.js",
    "sitemap": "node scripts/build-sitemap.js"
    },

    // run when all done
    npm run sitemap