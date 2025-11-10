# Publishing to VS Code Marketplace

This document describes the GitHub Actions workflow for publishing the Primer Primitives VS Code extension to the Visual Studio Code Marketplace.

## Workflow Overview

The publish workflow (`.github/workflows/publish.yml`) automates the process of building, testing, and publishing the extension to the VS Code Marketplace. It can be triggered:

1. **Manually** via the GitHub Actions UI (workflow_dispatch)
2. **Automatically** when a new release is published on GitHub

## Required API Keys and Secrets

### VS_MARKETPLACE_TOKEN

This is a Personal Access Token (PAT) from Azure DevOps that allows publishing to the VS Code Marketplace.

#### How to Create the Token:

1. **Create an Azure DevOps Account** (if you don't have one):
   - Go to https://dev.azure.com
   - Sign in with your Microsoft account
   - Create an organization (e.g., "Primer")

2. **Create a Personal Access Token**:
   - Go to https://dev.azure.com
   - Click on your profile icon (top right)
   - Select "Personal access tokens"
   - Click "New Token"
   - Configure the token:
     - **Name**: `VS Code Marketplace Publishing - Primer Primitives`
     - **Organization**: Select your organization or "All accessible organizations"
     - **Expiration**: Set an appropriate expiration date (recommend 1 year)
     - **Scopes**: Select "Custom defined"
     - **Marketplace**: Check "Acquire" and "Manage"
   - Click "Create"
   - **IMPORTANT**: Copy the token immediately - you won't be able to see it again!

3. **Register the Publisher** (if not already done):
   - Go to https://marketplace.visualstudio.com/manage
   - Sign in with the same Microsoft account
   - Click "Create publisher"
   - Create a publisher ID (e.g., "primer" or "primer-team")
   - This publisher ID should match the `publisher` field in `package.json`

4. **Add the Token to GitHub Secrets**:
   - Go to your GitHub repository: https://github.com/primer/primitives-vscode-extension
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - **Name**: `VS_MARKETPLACE_TOKEN`
   - **Value**: Paste the Personal Access Token you copied
   - Click "Add secret"

## Publisher Configuration

The `package.json` file contains a `publisher` field that should be updated to match your Azure DevOps publisher ID:

```json
{
  "publisher": "primer"
}
```

Update this field to match the publisher you created in the VS Code Marketplace.

## Workflow Details

The workflow performs the following steps:

1. **Checkout repository**: Clones the repository code
2. **Set up Node.js**: Installs Node.js using the version specified in `.nvmrc`
3. **Install dependencies**: Runs `npm ci --legacy-peer-deps`
4. **Run linter**: Executes `npm run lint` to ensure code quality
5. **Build extension**: Runs `npm run build` to compile TypeScript and bundle the extension
6. **Run tests**: Executes `npm test` to ensure all tests pass
7. **Package extension**: Runs `npm run package` to create the `.vsix` file
8. **Publish to VS Code Marketplace**: Runs `npm run deploy` (which executes `vsce publish`) to publish the extension

## Manual Publishing

To manually trigger the workflow:

1. Go to the GitHub repository
2. Navigate to Actions → Publish to VS Code Marketplace
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

## Automatic Publishing on Release

To trigger automatic publishing:

1. Create a new release on GitHub:
   - Go to Releases → Draft a new release
   - Create a new tag (e.g., `v0.0.2`)
   - Fill in the release title and description
   - Click "Publish release"
2. The workflow will automatically trigger and publish the extension

## Troubleshooting

### Authentication Errors

If you see authentication errors:
- Verify the `VS_MARKETPLACE_TOKEN` secret is correctly set in GitHub
- Ensure the token hasn't expired
- Verify the token has the correct scopes (Marketplace: Acquire and Manage)

### Publisher Errors

If you see errors about the publisher:
- Ensure the `publisher` field in `package.json` matches your registered publisher ID
- Verify you're signed in to the correct Microsoft account
- Check that the publisher is properly registered at https://marketplace.visualstudio.com/manage

### Version Conflicts

If the version already exists:
- Update the `version` field in `package.json`
- Commit and push the changes
- Create a new release with the updated version

## Additional Resources

- [VS Code Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce CLI Documentation](https://github.com/microsoft/vscode-vsce)
- [Azure DevOps Personal Access Tokens](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate)
