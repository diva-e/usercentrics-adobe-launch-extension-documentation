# About

This is the documentation website for our [Usercentrics Adobe Launch Extension](https://diva-e.github.io/usercentrics-adobe-launch-extension-documentation).

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Refer to their [docs](https://docusaurus.io/docs/category/guides) for more information on how to add content to this website.

# Local Development

## Node Version

Use `v18.18.0`. There is also a `.nvmrc` file in the root of the project, execute `nvm use` to switch to the correct version, if you are already using [nvm](https://github.com/nvm-sh/nvm).


## Start local development server

```
$ yarn
$ yarn start
```

These commands start a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

# Versioning

We also provide older versions of this documentation in case a user needs to read an older version. For more information see our [blog entry about documentation versioning](https://diva-e.github.io/usercentrics-adobe-launch-extension-documentation/blog/documentation-versioning).

For more information how to handle this technically refer to [Docusaurus Versioning doc](https://docusaurus.io/docs/versioning).

To create a new version of the documentation execute the following command:

```
yarn docusaurus docs:version 1.7.0
```

This will create a new version 1.7.0 copying the current "next" state to the 1.7.0 folders.

# Deployment

GitHub Actions are used for deployments and verification.

* Deployment to GitHub pages
  * [deploy.yml](https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/blob/main/.github/workflows/deploy.yml)
  * This action is triggered when a push to the `main` branch is detected.
  * The action builds the website and pushes the content of the `build` folder to the `gh-pages` branch.
  * Afterwards GitHub's own `pages-build-deployment` action is triggered to deploy the website to GitHub pages.
* Test for PRs
  * [test-deploy.yml](https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/blob/main/.github/workflows/test-deploy.yml)
  * This action is used in Pull Requests to verify that the website can be built.
