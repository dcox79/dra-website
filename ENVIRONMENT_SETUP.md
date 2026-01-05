# Environment Setup Guide

This guide explains how to set up all required environment variables and external services for the Default Route Advisory website.

## Overview

The application requires several external services:
1. Google reCAPTCHA v3 (form spam protection)
2. SendGrid (email delivery)
3. Plausible Analytics (privacy-friendly analytics)
4. Google Search Console (SEO/webmaster tools)
5. Bing Webmaster Tools (SEO/webmaster tools)

## Local Development Setup

### 1. Create `.env.local` File

Create a `.env.local` file in the project root with the following variables:

```env
# Google reCAPTCHA v3
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

# Plausible Analytics
VITE_PLAUSIBLE_DOMAIN=defaultrouteadvisory.com

# Note: Server-side secrets (SendGrid, reCAPTCHA secret) are NOT needed for local frontend development
# These are only required for the Azure Functions API backend
```

### 2. Update `index.html`

The `index.html` file contains placeholders for verification codes. Update these after setting up the services:

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

<!-- Bing Webmaster Verification -->
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

<!-- Google reCAPTCHA v3 -->
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```

## External Service Setup

### Google reCAPTCHA v3

**Purpose:** Protect contact form from spam submissions

**Setup Steps:**
1. Visit: https://www.google.com/recaptcha/admin/create
2. Register a new site:
   - Label: "Default Route Advisory"
   - reCAPTCHA type: reCAPTCHA v3
   - Domains:
     - `defaultrouteadvisory.com`
     - `www.defaultrouteadvisory.com`
     - `localhost` (for development)
3. Copy the **Site Key** → Add to `.env.local` as `VITE_RECAPTCHA_SITE_KEY`
4. Copy the **Secret Key** → Add to GitHub Secrets as `RECAPTCHA_SECRET_KEY`
5. Update `index.html` with the site key in the script tag

**Verification:**
- Check the contact form loads without console errors
- Submit the form - should receive a reCAPTCHA score in the API response

**Documentation:** https://developers.google.com/recaptcha/docs/v3

---

### SendGrid

**Purpose:** Send contact form submissions via email

**Setup Steps:**
1. Sign up at: https://sendgrid.com/
2. Verify your sender email domain:
   - Go to: Settings → Sender Authentication → Domain Authentication
   - Follow DNS verification steps for `defaultrouteadvisory.com`
3. Create an API key:
   - Go to: Settings → API Keys → Create API Key
   - Name: "DRA Website Production"
   - Permissions: "Full Access" (or "Mail Send" only)
4. Copy the API key (shown only once!)

**Environment Variables:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@defaultrouteadvisory.com
SENDGRID_TO_EMAIL=contact@defaultrouteadvisory.com
```

**GitHub Secrets (for CI/CD):**
- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`
- `SENDGRID_TO_EMAIL`

**Testing:**
- Use SendGrid's Email API Test feature
- Submit the contact form on a deployed preview environment
- Check SendGrid dashboard for delivery statistics

**Documentation:** https://docs.sendgrid.com/for-developers/sending-email/api-getting-started

---

### Plausible Analytics

**Purpose:** Privacy-friendly, GDPR-compliant web analytics

**Setup Steps:**
1. Sign up at: https://plausible.io/
2. Add your website:
   - Domain: `defaultrouteadvisory.com`
3. Copy the script tag or note your domain name
4. The script is already integrated in `index.html`:
   ```html
   <script defer data-domain="defaultrouteadvisory.com" src="https://plausible.io/js/script.js"></script>
   ```

**Environment Variable:**
```env
VITE_PLAUSIBLE_DOMAIN=defaultrouteadvisory.com
```

**Verification:**
- Visit your site
- Check Plausible dashboard for live visitors
- No cookie banner required (cookieless tracking)

**Documentation:** https://plausible.io/docs

---

### Google Search Console

**Purpose:** Monitor search performance, index status, and SEO issues

**Setup Steps:**
1. Visit: https://search.google.com/search-console
2. Add property: `defaultrouteadvisory.com`
3. Verification method: **HTML tag** (recommended)
4. Copy the verification code from the meta tag:
   ```html
   <meta name="google-site-verification" content="COPY_THIS_CODE" />
   ```
5. Add the code to `index.html`
6. Click "Verify" in Search Console

**Post-Verification:**
- Submit sitemap: `https://defaultrouteadvisory.com/sitemap.xml`
- Request indexing for key pages
- Monitor Core Web Vitals

**Documentation:** https://support.google.com/webmasters/answer/9008080

---

### Bing Webmaster Tools

**Purpose:** Monitor Bing search performance and indexing

**Setup Steps:**
1. Visit: https://www.bing.com/webmasters
2. Add site: `defaultrouteadvisory.com`
3. Verification method: **Meta tag** (recommended)
4. Copy the verification code:
   ```html
   <meta name="msvalidate.01" content="COPY_THIS_CODE" />
   ```
5. Add the code to `index.html`
6. Click "Verify" in Bing Webmaster

**Post-Verification:**
- Submit sitemap: `https://defaultrouteadvisory.com/sitemap.xml`
- Configure crawl rate
- Monitor URL inspection tool

**Documentation:** https://www.bing.com/webmasters/help/getting-started-checklist-66a806de

---

## GitHub Secrets Configuration

Add these secrets to your GitHub repository for CI/CD:

### Navigation
Settings → Secrets and variables → Actions → New repository secret

### Required Secrets

| Secret Name | Description | Where to Get |
|------------|-------------|--------------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Azure SWA deployment token | Azure Portal or Bicep output |
| `SENDGRID_API_KEY` | SendGrid API key | SendGrid dashboard |
| `SENDGRID_FROM_EMAIL` | Sender email address | Your verified domain |
| `SENDGRID_TO_EMAIL` | Recipient email address | Your contact email |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key | Google reCAPTCHA admin |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA site key (public) | Google reCAPTCHA admin |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible domain | Your site domain |

### Verification
After adding secrets, trigger a workflow run to verify they're working correctly.

---

## Azure Functions (API Backend)

The contact form API is implemented as an Azure Function in the `/api` directory.

### Local Testing

1. Install Azure Functions Core Tools:
   ```bash
   npm install -g azure-functions-core-tools@4
   ```

2. Create `api/local.settings.json`:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "AzureWebJobsStorage": "",
       "FUNCTIONS_WORKER_RUNTIME": "node",
       "SENDGRID_API_KEY": "your-key-here",
       "SENDGRID_FROM_EMAIL": "noreply@defaultrouteadvisory.com",
       "SENDGRID_TO_EMAIL": "contact@defaultrouteadvisory.com",
       "RECAPTCHA_SECRET_KEY": "your-secret-here"
     }
   }
   ```

3. Run the function locally:
   ```bash
   cd api
   func start
   ```

4. Test the endpoint:
   ```bash
   curl -X POST http://localhost:7071/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message","recaptchaToken":"test"}'
   ```

### Production Deployment

Environment variables are automatically set via:
- Azure Static Web Apps configuration (from Bicep)
- GitHub Actions workflows (from secrets)

---

## Environment Variable Summary

### Frontend (Vite)

These variables are prefixed with `VITE_` and are embedded in the built JavaScript:

```env
VITE_RECAPTCHA_SITE_KEY=6Lc...xyz
VITE_PLAUSIBLE_DOMAIN=defaultrouteadvisory.com
```

**⚠️ WARNING:** Never put secrets in `VITE_` variables - they are PUBLIC!

### Backend (Azure Functions)

These variables are server-side only and never exposed to the client:

```env
SENDGRID_API_KEY=SG.xxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@defaultrouteadvisory.com
SENDGRID_TO_EMAIL=contact@defaultrouteadvisory.com
RECAPTCHA_SECRET_KEY=6Lc...secret
```

---

## Troubleshooting

### reCAPTCHA Not Loading

- Check console for CORS errors
- Verify site key matches the domain
- Ensure domain is registered in reCAPTCHA admin

### Emails Not Sending

- Check SendGrid dashboard for errors
- Verify API key has correct permissions
- Confirm sender domain is verified
- Check Azure Function logs for error details

### Analytics Not Tracking

- Disable ad blockers for testing
- Check Plausible dashboard (24hr delay for stats)
- Verify script domain matches your Plausible site

### Build Failures in CI

- Verify all GitHub Secrets are set
- Check for typos in secret names
- Review GitHub Actions logs for specific errors

---

## Security Best Practices

1. **Never commit secrets** - Use `.env.local` (in `.gitignore`)
2. **Rotate API keys** - Change keys every 90 days
3. **Use Key Vault** - For production, reference Azure Key Vault in Bicep
4. **Limit permissions** - Use least-privilege API keys
5. **Monitor usage** - Set up alerts for unusual activity

---

## Next Steps

After completing this setup:

1. ✅ Test contact form submission locally
2. ✅ Deploy to preview environment and test all integrations
3. ✅ Verify analytics tracking
4. ✅ Submit sitemaps to search engines
5. ✅ Monitor Core Web Vitals in Search Console
6. ✅ Set up uptime monitoring (e.g., UptimeRobot, Pingdom)

---

## Support Resources

- **Azure Functions:** https://docs.microsoft.com/en-us/azure/azure-functions/
- **Vite Environment Variables:** https://vitejs.dev/guide/env-and-mode.html
- **GitHub Actions Secrets:** https://docs.github.com/en/actions/security-guides/encrypted-secrets
