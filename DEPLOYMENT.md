# Deployment Guide

This guide covers multiple deployment options for the B★-Tree Visualizer project.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/bstar-tree-visualizer)

**Manual Deploy:**
1. Fork this repository
2. Visit [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your forked repository
6. Click "Deploy" (no configuration needed!)

### 2. Netlify

**One-Click Deploy:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/bstar-tree-visualizer)

**Manual Deploy:**
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop the project folder to the deploy area
3. Or connect your GitHub repository for auto-deployments

### 3. GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Click "Save"

2. **Access your site:**
   - URL: `https://your-username.github.io/bstar-tree-visualizer`
   - May take a few minutes to become available

### 4. Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

## 🔧 Platform-Specific Configuration

### Vercel Configuration

The `vercel.json` file is already configured for optimal performance:

```json
{
  "version": 2,
  "name": "bstar-tree-visualizer",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Netlify Configuration

The `netlify.toml` file includes:
- Static file serving
- Security headers
- Cache optimization
- SPA routing support

### GitHub Actions

Automatic deployment is configured via `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Builds and deploys to GitHub Pages
- No manual intervention required

## 🌐 Custom Domain Setup

### Vercel Custom Domain

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### Netlify Custom Domain

1. Go to site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records

### GitHub Pages Custom Domain

1. Add `CNAME` file to repository root:
   ```
   yourdomain.com
   ```
2. Configure DNS with your domain provider
3. Enable HTTPS in repository settings

## 📊 Performance Optimization

### CDN Resources

The project uses CDN resources for optimal loading:
- GSAP: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter`

### Caching Strategy

- Static assets: 1 year cache
- HTML files: No cache (always fresh)
- Security headers included

### Lighthouse Scores

Target scores for production deployment:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 95+

## 🔒 Security Considerations

### Content Security Policy

Add to your hosting platform:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
```

### Security Headers

Already configured in `netlify.toml` and `vercel.json`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 🐛 Troubleshooting

### Common Issues

**1. GSAP Animation Not Working**
- Check if GSAP CDN is accessible
- Verify no ad blockers are interfering
- Check browser console for errors

**2. Fonts Not Loading**
- Ensure Google Fonts CDN is accessible
- Check network connectivity
- Verify CSP allows font loading

**3. 404 Errors on Refresh**
- Configure SPA routing (already done in config files)
- Ensure hosting platform supports client-side routing

**4. Slow Loading**
- Check CDN availability
- Optimize images if added
- Verify caching headers

### Debug Mode

Add `?debug=true` to URL for additional console logging:
```javascript
const isDebug = new URLSearchParams(window.location.search).get('debug') === 'true';
if (isDebug) {
    console.log('Debug mode enabled');
}
```

## 📱 Mobile Optimization

### Responsive Design

The application is fully responsive:
- Desktop: Three-panel layout
- Tablet: Stacked panels
- Mobile: Single column layout

### Touch Interactions

- Touch-friendly button sizes (44px minimum)
- Swipe gestures for tree navigation
- Pinch-to-zoom for tree visualization

### Performance on Mobile

- Reduced animations on low-end devices
- Optimized for 3G connections
- Progressive enhancement approach

## 🔄 Continuous Deployment

### Automatic Deployments

Set up automatic deployments:

1. **Vercel**: Automatically deploys on git push
2. **Netlify**: Connects to GitHub for auto-deploy
3. **GitHub Pages**: Uses GitHub Actions workflow

### Branch Deployments

- `main` branch → Production deployment
- `develop` branch → Staging deployment (configure separately)
- Pull requests → Preview deployments

### Environment Variables

No environment variables required for this static site.

## 📈 Analytics Setup

### Google Analytics

Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

Enable in Vercel dashboard:
1. Go to project settings
2. Enable "Analytics"
3. View insights in dashboard

## 🎯 SEO Optimization

### Meta Tags

Already included in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Viewport meta tag

### Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

Choose the deployment method that best fits your needs. Vercel is recommended for its simplicity and performance, but all options will work perfectly for this project! 🚀