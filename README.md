# @abco/ui-react-list

## Summary

Material Design inspired dropdown for Crimson products. Currently it only supports single selection. Multi selection will be added based on input provided by our UX designers.

## Install

```sh
$ npm install @abco/ui-react-list --save
```

## Usage
This package is an npm package that can be imported and used with [webpack](https://webpack.github.io/)

```javascript
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import List from @abco/ui-react-list;

(() => {
  ReactDOM.render(React.createElement(List), document.getElementById('container'));
})();

```

## Example

See `/example` folder for more examples

## Contribution

1. CREATE a CFEC ticket for your contribution [Project Name: Crimson - FEE Platform (CFEC), Project Id: 11005]
2. CLONE this repository
3. CREATE a new branch from master
4. CHECKOUT your new branch
5. npm install
6. npm run build
7. MAKE your changes
8. COMMIT your changes
9. RUN either npm version patch or npm version minor or npm version major depending on the kind of changes you make.
10. CREATE a pull request from your branch to master, Akshay Rakkanchath or Emmanuel (Manny) Narh as reviewer.

Running the command(#9) will **automatically**

 * TAG both the package.json and the stash repo,
 * UPDATE the dependencies in package.json, and
 * PUSH your changes up to the repo.

*Relax, go grab a cup of coffee, bamboo will automatically build and push your new version to npm*

## License

2016 Copyright (c) 2016 The Advisory Board Company ©