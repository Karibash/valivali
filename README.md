# ValiVali

[![codecov][coverage-badge]][coverage-link]
[![license][license-badge]][license-link]
[![Github][github-follower-badge]][github-follower-link]
[![Twitter][twitter-follower-badge]][twitter-follower-link]

| package                                         | Version                                                                       | Description                                       | Changelog                                      |
|-------------------------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| [`@valivali/core`](packages/core)               | [![npm version][core-npm-version-badge]][core-npm-version-link]               | Provide a common interface for schema validation. | [CHANGELOG](packages/core/CHANGELOG.md)        |
| [`@valivali/myzod`](packages/myzod)             | [![npm version][myzod-npm-version-badge]][myzod-npm-version-link]             | ValiVali Resolver for myzod.                      | [CHANGELOG](packages/myzod/CHANGELOG.md)       |
| [`@valivali/runtypes`](packages/runtypes)       | [![npm version][runtypes-npm-version-badge]][runtypes-npm-version-link]       | ValiVali Resolver for runtypes.                   | [CHANGELOG](packages/runtypes/CHANGELOG.md)    |
| [`@valivali/superstruct`](packages/superstruct) | [![npm version][superstruct-npm-version-badge]][superstruct-npm-version-link] | ValiVali Resolver for superstruct.                | [CHANGELOG](packages/superstruct/CHANGELOG.md) |
| [`@valivali/yup`](packages/yup)                 | [![npm version][yup-npm-version-badge]][yup-npm-version-link]                 | ValiVali Resolver for yup.                        | [CHANGELOG](packages/yup/CHANGELOG.md)         |
| [`@valivali/zod`](packages/zod)                 | [![npm version][zod-npm-version-badge]][zod-npm-version-link]                 | ValiVali Resolver for zod.                        | [CHANGELOG](packages/zod/CHANGELOG.md)         |

## 🗒 Purpose

It provides verification functions that do not depend on a specific schema verification library such as Zod or Yup.  
This allows the implementation of an interface that allows users to use their preferred schema verification library.  
You can see how to handle the library in the [example projects](examples).

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/valivali/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/valivali/blob/main/LICENSE) licensed.

[coverage-badge]: https://codecov.io/gh/Karibash/valivali/branch/main/graph/badge.svg
[coverage-link]: https://codecov.io/gh/Karibash/valivali
[license-badge]: https://img.shields.io/badge/License-MIT-green.svg
[license-link]: https://github.com/Karibash/valivali/blob/main/LICENSE
[github-follower-badge]: https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social
[github-follower-link]: https://github.com/Karibash?tab=followers
[twitter-follower-badge]: https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social
[twitter-follower-link]: https://twitter.com/intent/follow?screen_name=Karibash
[core-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fcore.svg
[core-npm-version-link]: https://www.npmjs.com/package/@valivali/core
[myzod-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fmyzod.svg
[myzod-npm-version-link]: https://www.npmjs.com/package/@valivali/myzod
[runtypes-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fruntypes.svg
[runtypes-npm-version-link]: https://www.npmjs.com/package/@valivali/runtypes
[superstruct-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fsuperstruct.svg
[superstruct-npm-version-link]: https://www.npmjs.com/package/@valivali/superstruct
[yup-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fyup.svg
[yup-npm-version-link]: https://www.npmjs.com/package/@valivali/yup
[zod-npm-version-badge]: https://badge.fury.io/js/@valivali%2Fzod.svg
[zod-npm-version-link]: https://www.npmjs.com/package/@valivali/zod
