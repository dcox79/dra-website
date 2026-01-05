# GitHub Secrets Configuration

These secrets need to be added to your GitHub repository for CI/CD to work.

## How to Add Secrets

1. Go to: https://github.com/dcox79/dra-website/settings/secrets/actions
2. Click "New repository secret"
3. Add each secret below

## Required Secrets

### Azure Deployment

**Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`

**How to get it**:
```bash
az staticwebapp secrets list --name swa-dra-dev --resource-group rg-dra-web-dev --query "properties.apiKey" -o tsv
```

**Value**: The output from the command above

---

### SendGrid Email

**Name**: `SENDGRID_API_KEY`

**How to get it**:
```bash
az staticwebapp appsettings list --name swa-dra-dev --resource-group rg-dra-web-dev --query "properties.SENDGRID_API_KEY" -o tsv
```

**Value**: The output from the command above

---

**Name**: `SENDGRID_FROM_EMAIL`

**Value**: `info@defaultrouteadvisory.com`

---

**Name**: `SENDGRID_TO_EMAIL`

**Value**: `sales@defaultrouteadvisory.com`

---

### reCAPTCHA

**Name**: `RECAPTCHA_SECRET_KEY`

**Value**: `6LeW8kAsAAAAAEcjbbdzDZ02PSvP39gxWg-xUpPe`

---

**Name**: `VITE_RECAPTCHA_SITE_KEY`

**Value**: `6LeW8kAsAAAAAI-uNcPSqGog5er4RHrlOn0GEtv1`

---

### Analytics

**Name**: `VITE_PLAUSIBLE_DOMAIN`

**Value**: `defaultrouteadvisory.com`

---

## Verification

After adding all secrets, you should have **7 secrets** total:

1. ✅ AZURE_STATIC_WEB_APPS_API_TOKEN
2. ✅ SENDGRID_API_KEY
3. ✅ SENDGRID_FROM_EMAIL
4. ✅ SENDGRID_TO_EMAIL
5. ✅ RECAPTCHA_SECRET_KEY
6. ✅ VITE_RECAPTCHA_SITE_KEY
7. ✅ VITE_PLAUSIBLE_DOMAIN

## Test the Setup

After adding secrets:

1. Create a test branch and push:
   ```bash
   git checkout -b test/recaptcha-setup
   git push origin test/recaptcha-setup
   ```

2. Create a Pull Request

3. GitHub Actions will run automatically

4. Check the workflow runs at:
   https://github.com/dcox79/dra-website/actions

5. If successful, you'll get a preview deployment URL in the PR comments

## Quick Commands

Get Azure deployment token:
```bash
az staticwebapp secrets list --name swa-dra-dev --resource-group rg-dra-web-dev --query "properties.apiKey" -o tsv
```

Get SendGrid API key:
```bash
az staticwebapp appsettings list --name swa-dra-dev --resource-group rg-dra-web-dev --query "properties.SENDGRID_API_KEY" -o tsv
```

Get all app settings:
```bash
az staticwebapp appsettings list --name swa-dra-dev --resource-group rg-dra-web-dev
```
