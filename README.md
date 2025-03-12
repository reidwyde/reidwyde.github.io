# reidwyde.github.io

My Name is Reid Wyde

### Run site locally:

-   npm start

### Deploy site:

-   commit main to github
-   .github/workflows/deploy.yml will be triggered, which builds the react app on the github server and then pushes it to gh-pages branch
-   github's built in gh-pages workflow will run, which updates the site at reidwyde.github.io (set github pages config to deploy from branch gh-pages /(root))

### TODO:

-   standardize the naming of the amazon resources
-   make it so you can navigate to /resources/<resourceKey> via the URL and that the left side tabs manipulate the URL (might be overly complicated if we don't just use routes)
-   fix resource card styling (remove gray backgrounds)
-   Add models / machine learning techniques
-   clean up repo, remove dead files
-   look at tasks in asana https://app.asana.com/0/1209634409867749/1209634505469345
