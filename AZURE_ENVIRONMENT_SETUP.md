# Azure Environment Setup - Complete Guide

This document explains the Azure Static Web App environment that was retrieved and what needs to be configured.

## Current Azure Configuration

**Static Web App**: `swa-dra-dev`
**Resource Group**: `rg-dra-web-dev`
**Location**: East US 2
**SKU**: Standard
**Subscription**: dra-site-east-sub

**Custom Domains**:
- defaultrouteadvisory.com
- www.defaultrouteadvisory.com

**Default Hostname**: brave-mushroom-02891730f.3.azurestaticapps.net

## Retrieved Configuration

### ✅ Already Configured in Azure

The following are already set up in Azure Static Web Apps:

1. **SendGrid Email Service**
   - `SENDGRID_API_KEY`: ✓ Configured (retrieve from Azure)
   - `FROM_EMAIL`: info@defaultrouteadvisory.com
   - `NOTIFICATION_EMAIL`: sales@defaultrouteadvisory.com
   - `REPLY_TO_EMAIL`: sales@defaultrouteadvisory.com

2. **Azure Storage**
   - `AZURE_STORAGE_CONNECTION_STRING`: ✓ Configured for stdradev account

3. **Application Insights**
   - Instrumentation Key: 5f87c1d7-b34a-424f-99ed-c3ed95306858
   - Connected and tracking

### ⚠️ Needs Migration: HCaptcha → reCAPTCHA

Azure currently has HCaptcha configured:
- `HCAPTCHA_SECRET_KEY`: ✓ Configured (will be replaced)
- `NEXT_PUBLIC_HCAPTCHA_SITEKEY`: ✓ Configured (will be replaced)

**Action Required**: Switch to Google reCAPTCHA v3

## Required Setup Steps

### Step 1: Register Google reCAPTCHA v3

1. Visit: https://www.google.com/recaptcha/admin/create
2. Fill in the form:
   - **Label**: Default Route Advisory
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**:
     - `defaultrouteadvisory.com`
     - `www.defaultrouteadvisory.com`
     - `brave-mushroom-02891730f.3.azurestaticapps.net`
     - `localhost` (for local development)
3. Accept terms and submit
4. Copy both keys:
   - **Site Key** (public) - Used in frontend
   - **Secret Key** (private) - Used in backend

### Step 2: Update Local Environment

Update `.env.local` with your reCAPTCHA site key:

```env
VITE_RECAPTCHA_SITE_KEY=your_site_key_from_google
```

Update `api/local.settings.json` with your secret key:

```json
{
  "Values": {
    "RECAPTCHA_SECRET_KEY": "your_secret_key_from_google"
  }
}
```

### Step 3: Update Azure Static Web App Settings

Remove HCaptcha settings and add reCAPTCHA:

```bash
# Remove old HCaptcha settings
az staticwebapp appsettings delete \
  --name swa-dra-dev \
  --resource-group rg-dra-web-dev \
  --setting-names HCAPTCHA_SECRET_KEY NEXT_PUBLIC_HCAPTCHA_SITEKEY

# Add reCAPTCHA settings
az staticwebapp appsettings set \
  --name swa-dra-dev \
  --resource-group rg-dra-web-dev \
  --setting-names RECAPTCHA_SECRET_KEY=your_secret_key_from_google
```

### Step 4: Update index.html

Replace the reCAPTCHA placeholder in `index.html`:

```html
<!-- Google reCAPTCHA v3 -->
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY" async defer></script>
```

Replace `YOUR_SITE_KEY` with your actual site key.

### Step 5: Update GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

| Secret Name | Where to Get It |
|------------|-----------------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Run: `az staticwebapp secrets list --name swa-dra-dev --resource-group rg-dra-web-dev` |
| `SENDGRID_API_KEY` | Retrieve from Azure SWA settings or SendGrid dashboard |
| `SENDGRID_FROM_EMAIL` | `info@defaultrouteadvisory.com` |
| `SENDGRID_TO_EMAIL` | `sales@defaultrouteadvisory.com` |
| `RECAPTCHA_SECRET_KEY` | From Google reCAPTCHA admin (Step 1) |
| `VITE_RECAPTCHA_SITE_KEY` | From Google reCAPTCHA admin (Step 1) |
| `VITE_PLAUSIBLE_DOMAIN` | `defaultrouteadvisory.com` |

### Step 6: Set Up Webmaster Tools

#### Google Search Console

1. Visit: https://search.google.com/search-console
2. Add property: `defaultrouteadvisory.com`
3. Choose **HTML tag** verification method
4. Copy the verification code
5. Update `index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
6. Click Verify in Search Console
7. Submit sitemap: `https://defaultrouteadvisory.com/sitemap.xml`

#### Bing Webmaster Tools

1. Visit: https://www.bing.com/webmasters
2. Add site: `defaultrouteadvisory.com`
3. Choose **Meta tag** verification method
4. Copy the verification code
5. Update `index.html`:
   ```html
   <meta name="msvalidate.01" content="YOUR_CODE_HERE" />
   ```
6. Click Verify in Bing Webmaster
7. Submit sitemap: `https://defaultrouteadvisory.com/sitemap.xml`

## Testing the Setup

### Test Locally

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to contact page**: http://localhost:3000/contact

3. **Check browser console**:
   - Should see no reCAPTCHA errors
   - reCAPTCHA badge should appear in bottom-right corner

4. **Test form submission**:
   - Fill out the contact form
   - Submit
   - Check terminal for Azure Function logs
   - Verify email received at sales@defaultrouteadvisory.com

### Test Azure Functions Locally

1. **Install Azure Functions Core Tools** (if not already installed):
   ```bash
   npm install -g azure-functions-core-tools@4
   ```

2. **Start Azure Functions locally**:
   ```bash
   cd api
   func start
   ```

3. **Test the endpoint**:
   ```bash
   curl -X POST http://localhost:7071/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "company": "Test Co",
       "message": "Test message",
       "recaptchaToken": "test_token"
     }'
   ```

### Test in Azure (Preview)

1. **Push changes to a branch**:
   ```bash
   git checkout -b feature/recaptcha-setup
   git add .
   git commit -m "feat: Configure reCAPTCHA environment"
   git push origin feature/recaptcha-setup
   ```

2. **Create Pull Request** on GitHub

3. **Wait for GitHub Actions** to complete

4. **Check PR comments** for preview URL

5. **Test on preview environment**

## Verification Checklist

Use this checklist to ensure everything is configured correctly:

### Frontend
- [ ] `.env.local` has `VITE_RECAPTCHA_SITE_KEY`
- [ ] `index.html` has correct reCAPTCHA script tag
- [ ] `index.html` has Google Search Console verification
- [ ] `index.html` has Bing Webmaster verification
- [ ] Contact form loads without console errors
- [ ] reCAPTCHA badge appears on contact page

### Backend
- [ ] `api/local.settings.json` has `RECAPTCHA_SECRET_KEY`
- [ ] `api/local.settings.json` has all SendGrid settings
- [ ] Azure Functions start successfully locally
- [ ] Form submission receives email locally

### Azure
- [ ] Azure SWA has `RECAPTCHA_SECRET_KEY` app setting
- [ ] Azure SWA has removed old HCaptcha settings
- [ ] GitHub repository has all required secrets
- [ ] CI/CD workflows run successfully
- [ ] Preview deployments work

### Search Engines
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Bing Webmaster verified
- [ ] Sitemap submitted to Bing

## Troubleshooting

### reCAPTCHA Not Loading

**Problem**: Console shows "reCAPTCHA not loaded" error

**Solutions**:
1. Check that `VITE_RECAPTCHA_SITE_KEY` is set in `.env.local`
2. Verify site key in `index.html` script tag matches your reCAPTCHA admin
3. Ensure domains are registered in reCAPTCHA admin (including localhost)
4. Clear browser cache and reload

### Form Submission Fails

**Problem**: Form submits but email not received

**Solutions**:
1. Check Azure Function logs for errors
2. Verify SendGrid API key is valid
3. Confirm sender email is verified in SendGrid
4. Check SendGrid dashboard for bounced/blocked emails
5. Verify reCAPTCHA token validation passes (check function logs)

### GitHub Actions Failing

**Problem**: CI/CD pipeline fails on build or deployment

**Solutions**:
1. Verify all GitHub Secrets are set correctly
2. Check for typos in secret names (case-sensitive)
3. Ensure Azure SWA deployment token is valid
4. Review GitHub Actions logs for specific error messages

### Preview Environment Not Created

**Problem**: PR doesn't get a preview deployment

**Solutions**:
1. Verify GitHub Actions workflows have correct triggers
2. Check Azure SWA has "Staging Environment Policy" set to "Enabled"
3. Ensure GitHub App is connected to Azure SWA
4. Verify AZURE_STATIC_WEB_APPS_API_TOKEN secret is correct

## Cost Monitoring

Current Azure resources and estimated costs:

| Resource | SKU | Monthly Cost |
|----------|-----|--------------|
| Static Web Apps | Standard | ~$9/month |
| Storage Account (stdradev) | Standard LRS | ~$1-2/month |
| Application Insights | Basic | ~$2-5/month |
| **Total Estimated** | | **~$12-16/month** |

**Note**: Bandwidth costs may apply if traffic exceeds 100GB/month.

## Support Resources

- **Azure Static Web Apps**: https://docs.microsoft.com/en-us/azure/static-web-apps/
- **Google reCAPTCHA**: https://developers.google.com/recaptcha/docs/v3
- **SendGrid**: https://docs.sendgrid.com/
- **GitHub Actions**: https://docs.github.com/en/actions

## Next Steps

After completing this setup:

1. ✅ Test local development environment
2. ✅ Test Azure Functions locally
3. ✅ Create PR and test preview environment
4. ✅ Verify form submission end-to-end
5. ✅ Run Lighthouse audit (should be ≥90 SEO score)
6. ✅ Monitor Application Insights for errors
7. ✅ Set up alerts for form failures or API errors

---

**Last Updated**: Retrieved from Azure on $(date)
**Azure Subscription**: dra-site-east-sub (6c2f2e6d-1647-4302-be61-a4ac3722c305)
