# Conflux Developer Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern
static website generator. It supports retrieving docs from any repository and
deploys to developer.conflux-chain.org.  

To submit a repository, please read the doc [here](./docs/submit-a-repo.md).

### Installation

```
$ yarn REINIT
$ yarn
```

**Note: the `yarn REINIT` command will run a shell script that clears any
uncommitted changes under this directory including all submodules in `docs`
folder. It will set everything to the same state as your `origin/master`.** 

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server. 

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. 
