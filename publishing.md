# Publishing

To publish the extension to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=githubprimer.primer-primitives-autocomplete),

1. In [settings/secrets/actions](https://github.com/primer/primitives-vscode-extension/settings/secrets/actions), Check the "Last updated" for `VS_MARKETPLACE_TOKEN`. If it is > 7 days, [Regenerate PAT for publisher:githubprimer](https://dev.azure.com/githubprimer/_usersSettings/tokens) (Personal Access Token) with permissions for Marketplace (Acquire + Manage) and User Profile (Read). Update `VS_MARKETPLACE_TOKEN` with the new token. (Microsoft policy restricts PATs with longer validity than 7 days)
2. Make sure the version in [package.json on main](https://github.com/primer/primitives-vscode-extension/blob/main/package.json#L3) is greater than the version no the [marketplace](https://marketplace.visualstudio.com/items?itemName=githubprimer.primer-primitives-autocomplete).
3. Trigger the [publish workflow](https://github.com/primer/primitives-vscode-extension/actions/workflows/publish.yml) manually.
4. Check the logs for the workflow to confirm extension has been published. Note: The marketplace can take up to an hour to show the latest version!
