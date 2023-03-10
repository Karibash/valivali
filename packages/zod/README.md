# @valivali/zod

[![npm version][npm-version-badge]][npm-version-link]
[![npm download][npm-download-badge]][npm-download-link]
[![license][license-badge]][license-link]
[![Github][github-follower-badge]][github-follower-link]
[![Twitter][twitter-follower-badge]][twitter-follower-link]

ValiVali Resolver for zod.

## 🚀 Installation

```
$ npm install @valivali/core @valivali/zod zod
```

## 👏 Getting Started

The following is a simple usage example.

```ts
import { valivali } from '@valivali/core';
import { zodResolver } from '@valivali/zod';
// It is also possible to import with the following aliases.
// import { resolver } from '@valivali/zod';
import { z } from 'zod';

const schema = z.object({
  id: z.string(),
  name: z.string(),
});

const value = {
  id: 'id',
  name: 'name',
};

const validatedValue = valivali(zodResolver(schema), value);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/valivali/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/valivali/blob/main/packages/zod/LICENSE) licensed.

[npm-version-badge]: https://badge.fury.io/js/@valivali%2Fzod.svg
[npm-version-link]: https://www.npmjs.com/package/@valivali/zod
[npm-download-badge]: https://img.shields.io/npm/dm/@valivali/zod.svg
[npm-download-link]: https://www.npmjs.com/package/@valivali/zod
[license-badge]: https://img.shields.io/npm/l/@valivali%2Fzod.svg
[license-link]: https://github.com/Karibash/valivali/blob/main/packages/zod/LICENSE
[github-follower-badge]: https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social
[github-follower-link]: https://github.com/Karibash?tab=followers
[twitter-follower-badge]: https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social
[twitter-follower-link]: https://twitter.com/intent/follow?screen_name=Karibash
