# Infrastructure Deployment Guide

This directory contains Bicep templates for provisioning the Azure Static Web App infrastructure for Default Route Advisory.

## Prerequisites

- Azure CLI installed (`az --version`)
- Azure subscription with appropriate permissions
- GitHub repository access token
- Azure Key Vault (recommended for secrets)

## Deployment Steps

### 1. Login to Azure

```bash
az login
az account set --subscription <subscription-id>
```

### 2. Create Resource Group

```bash
az group create \
  --name rg-dra-website-prod \
  --location eastus2
```

### 3. Update Parameters File

Edit `parameters.json` and update:
- `staticWebAppName` - Unique name for your Static Web App
- `customDomains` - Your custom domain names
- `repositoryUrl` - Your GitHub repository URL
- `repositoryToken` - Reference to GitHub token in Key Vault

### 4. Deploy Infrastructure

```bash
az deployment group create \
  --resource-group rg-dra-website-prod \
  --template-file main.bicep \
  --parameters parameters.json
```

### 5. Configure Custom Domains

After deployment, configure DNS records:

1. Get the Static Web App default hostname from outputs:
   ```bash
   az deployment group show \
     --resource-group rg-dra-website-prod \
     --name main \
     --query properties.outputs.staticWebAppDefaultHostname.value
   ```

2. Add CNAME records in your DNS provider:
   - `www.defaultrouteadvisory.com` → `<default-hostname>`
   - `defaultrouteadvisory.com` → Create an ALIAS/ANAME record to `<default-hostname>`

3. Validate custom domains in Azure Portal or via CLI:
   ```bash
   az staticwebapp hostname set \
     --name dra-website-prod \
     --resource-group rg-dra-website-prod \
     --hostname defaultrouteadvisory.com
   ```

### 6. Configure Environment Variables

Set application settings (environment variables):

```bash
az staticwebapp appsettings set \
  --name dra-website-prod \
  --resource-group rg-dra-website-prod \
  --setting-names \
    SENDGRID_API_KEY=<your-sendgrid-api-key> \
    SENDGRID_FROM_EMAIL=noreply@defaultrouteadvisory.com \
    SENDGRID_TO_EMAIL=contact@defaultrouteadvisory.com \
    RECAPTCHA_SECRET_KEY=<your-recaptcha-secret>
```

## GitHub Actions Integration

### 7. Get Deployment Token

```bash
az staticwebapp secrets list \
  --name dra-website-prod \
  --resource-group rg-dra-website-prod \
  --query properties.apiKey -o tsv
```

### 8. Add GitHub Secrets

Add the following secrets to your GitHub repository:

- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Deployment token from step 7
- `SENDGRID_API_KEY` - SendGrid API key
- `SENDGRID_FROM_EMAIL` - From email address
- `SENDGRID_TO_EMAIL` - Recipient email address
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA secret key
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key (public)
- `VITE_PLAUSIBLE_DOMAIN` - Plausible Analytics domain

## Resources Created

- Azure Static Web App (Standard SKU)
- Custom domain bindings with automatic TLS certificates
- Application settings (environment variables)
- Staging environments (for PR previews)

## Cost Estimation

Azure Static Web Apps Standard SKU pricing (as of 2024):
- $9/month base
- $0.20/GB bandwidth (first 100GB free)
- Custom domains and TLS certificates included

## Updating Infrastructure

To update the infrastructure, modify `main.bicep` or `parameters.json` and redeploy:

```bash
az deployment group create \
  --resource-group rg-dra-website-prod \
  --template-file main.bicep \
  --parameters parameters.json
```

## Troubleshooting

### Custom Domain Not Validating

Ensure DNS records are properly configured and propagated:
```bash
nslookup www.defaultrouteadvisory.com
dig www.defaultrouteadvisory.com
```

### Deployment Token Not Working

Regenerate the deployment token:
```bash
az staticwebapp secrets reset \
  --name dra-website-prod \
  --resource-group rg-dra-website-prod
```

### Build Failures

Check build logs in Azure Portal:
1. Navigate to Static Web App resource
2. Click "Deployments" in the left menu
3. Select the failed deployment
4. Review build logs

## Security Best Practices

1. **Never commit secrets** - Use Azure Key Vault references in parameters.json
2. **Use managed identities** - Where possible, use managed identities instead of API keys
3. **Rotate secrets regularly** - Set up automatic rotation for API keys and tokens
4. **Enable DDoS protection** - For production, consider Azure DDoS Protection
5. **Monitor access** - Enable diagnostic logs and Azure Monitor alerts

## Support

For issues with:
- Azure infrastructure: Check Azure Status Page or create support ticket
- Bicep templates: Review Azure Bicep documentation
- Deployment: Review GitHub Actions logs and Azure deployment logs
