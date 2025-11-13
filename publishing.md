# Publishing

To publish the extension to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=githubprimer.primer-primitives-autocomplete), 
1. [Regenerate PAT for publisher:githubprimer](https://dev.azure.com/githubprimer/_usersSettings/tokens) (Personal Access Token) and copy it.
2. Run `npm run package && npm run vsce:publish`, you will be asked for a PAT, paste the one you copied in step 1

