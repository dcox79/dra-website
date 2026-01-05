// Azure Static Web App Infrastructure for Default Route Advisory
// Deploy with: az deployment group create --resource-group <rg-name> --template-file main.bicep --parameters parameters.json

@description('Name of the Static Web App')
param staticWebAppName string

@description('Location for the Static Web App')
param location string = resourceGroup().location

@description('SKU for Static Web App (Free or Standard)')
@allowed([
  'Free'
  'Standard'
])
param sku string = 'Standard'

@description('Custom domain names')
param customDomains array = []

@description('Repository URL')
param repositoryUrl string

@description('Repository branch')
param repositoryBranch string = 'main'

@description('GitHub repository token')
@secure()
param repositoryToken string

@description('Build properties for the static web app')
param buildProperties object = {
  appLocation: '/'
  apiLocation: 'api'
  outputLocation: 'dist'
  appBuildCommand: 'npm run build'
  apiBuildCommand: ''
}

@description('Environment variables for the static web app')
@secure()
param appSettings object = {}

@description('Tags for the resources')
param tags object = {
  Environment: 'Production'
  Project: 'Default Route Advisory'
  ManagedBy: 'Bicep'
}

// Static Web App Resource
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticWebAppName
  location: location
  tags: tags
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: repositoryBranch
    repositoryToken: repositoryToken
    buildProperties: buildProperties
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
  }
}

// Custom Domains
resource customDomain 'Microsoft.Web/staticSites/customDomains@2023-01-01' = [for domain in customDomains: {
  parent: staticWebApp
  name: domain
  properties: {}
}]

// App Settings (Environment Variables)
resource staticWebAppSettings 'Microsoft.Web/staticSites/config@2023-01-01' = {
  parent: staticWebApp
  name: 'appsettings'
  properties: appSettings
}

// Outputs
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name
output staticWebAppDefaultHostname string = staticWebApp.properties.defaultHostname
output staticWebAppApiKey string = staticWebApp.listSecrets().properties.apiKey
