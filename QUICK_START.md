# Quick Start Guide

Fast-track setup for the Default Route Advisory website.

## Prerequisites

- Node.js 20+ installed
- Azure CLI connected (already done ✅)
- Git repository cloned

## 1. Get reCAPTCHA Keys (5 minutes)

1. Go to: https://www.google.com/recaptcha/admin/create
2. Register with:
   - **Type**: reCAPTCHA v3
   - **Domains**: `defaultrouteadvisory.com`, `www.defaultrouteadvisory.com`, `localhost`
3. Save both keys (Site Key & Secret Key)

## 2. Update Local Environment (2 minutes)

**File**: `.env.local`
```env
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
```

**File**: `api/local.settings.json`
```json
{
  "Values": {
    "RECAPTCHA_SECRET_KEY": "your_secret_key_here"
  }
}
```

**File**: `index.html` (line 16)
```html
<script src="https://www.google.com/recaptcha/api.js?render=your_site_key_here" async defer></script>
```

## 3. Update Azure (3 minutes)

```bash
# Remove HCaptcha
az staticwebapp appsettings delete \
  --name swa-dra-dev \
  --resource-group rg-dra-web-dev \
  --setting-names HCAPTCHA_SECRET_KEY NEXT_PUBLIC_HCAPTCHA_SITEKEY

# Add reCAPTCHA
az staticwebapp appsettings set \
  --name swa-dra-dev \
  --resource-group rg-dra-web-dev \
  --setting-names RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## 4. Add GitHub Secrets (5 minutes)

Go to: https://github.com/dcox79/dra-website/settings/secrets/actions

Add these secrets:

| Secret Name | Where to Get It |
|------------|-----------------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Run: `az staticwebapp secrets list --name swa-dra-dev --resource-group rg-dra-web-dev` |
| `SENDGRID_API_KEY` | Retrieve from Azure: `az staticwebapp appsettings list --name swa-dra-dev --resource-group rg-dra-web-dev` |
| `SENDGRID_FROM_EMAIL` | `info@defaultrouteadvisory.com` |
| `SENDGRID_TO_EMAIL` | `sales@defaultrouteadvisory.com` |
| `RECAPTCHA_SECRET_KEY` | Your secret key from step 1 |
| `VITE_RECAPTCHA_SITE_KEY` | Your site key from step 1 |
| `VITE_PLAUSIBLE_DOMAIN` | `defaultrouteadvisory.com` |

## 5. Test Locally (2 minutes)

```bash
# Install dependencies (if not done)
npm install

# Start dev server
npm run dev
```

Visit: http://localhost:3000/contact

✅ Check: reCAPTCHA badge appears in bottom-right
✅ Check: No console errors
✅ Try: Submit the form

## 6. Deploy (5 minutes)

```bash
# Commit changes
git add .
git commit -m "feat: Configure reCAPTCHA and Azure environment"

# Push to main (triggers production deploy)
git push origin master
```

Monitor: https://github.com/dcox79/dra-website/actions

## Verification

Once GitHub Actions completes:

1. Visit: https://defaultrouteadvisory.com
2. Navigate to contact page
3. Submit a test form
4. Check email: sales@defaultrouteadvisory.com

## Optional: Webmaster Tools Setup

### Google Search Console
1. https://search.google.com/search-console
2. Add `defaultrouteadvisory.com`
3. HTML tag verification
4. Update `index.html` line 9

### Bing Webmaster
1. https://www.bing.com/webmasters
2. Add `defaultrouteadvisory.com`
3. Meta tag verification
4. Update `index.html` line 10

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify reCAPTCHA site key matches
- Check Azure Function logs

**Email not received?**
- Check SendGrid dashboard
- Verify sender email is verified
- Check spam folder

**Build failing?**
- Verify all GitHub Secrets are set
- Check GitHub Actions logs
- Ensure TypeScript compiles: `npm run typecheck`

## Current Azure Resources

- **Static Web App**: swa-dra-dev
- **Resource Group**: rg-dra-web-dev
- **Storage Account**: stdradev
- **Custom Domains**: defaultrouteadvisory.com, www.defaultrouteadvisory.com
- **Deployment URL**: https://brave-mushroom-02891730f.3.azurestaticapps.net

## Already Configured ✅

These are already set up in Azure (no action needed):
- SendGrid email integration
- Azure Storage
- Application Insights monitoring
- Custom domain bindings
- TLS certificates

## Total Setup Time

**~22 minutes** for complete setup from scratch

Need more details? See `AZURE_ENVIRONMENT_SETUP.md`
