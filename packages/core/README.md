# @valivali/core

[![npm version][npm-version-badge]][npm-version-link]
[![npm download][npm-download-badge]][npm-download-link]
[![license][license-badge]][license-link]
[![Github][github-follower-badge]][github-follower-link]
[![Twitter][twitter-follower-badge]][twitter-follower-link]

Provide a common interface for schema validation.

## 🚀 Installation

```
$ npm install @valivali/core
```

Install the schema validation library of your choice.
The following is an example of using zod.

```
$ npm install @valivali/zod zod
```

## 👏 Getting Started

The following is a simple example of using zod.

```ts
import { valivali } from '@valivali/core';
import { resolver } from '@valivali/zod';
import { z } from 'zod';

const schema = z.object({
  id: z.string(),
  name: z.string(),
});

const value = {
  id: 'id',
  name: 'name',
};

const validatedValue = valivali(resolver(schema), value);
```

Or you can use your own resolver.

```ts
import { Resolver, valivali } from '@valivali/core';

const booleanResolver: Resolver<boolean> = value => {
  if (typeof value === 'boolean') return value;
  throw Error('invalid value');
};

const validatedValue = valivali(booleanResolver, true);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/valivali/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/valivali/blob/main/packages/core/LICENSE) licensed.

[npm-version-badge]: https://badge.fury.io/js/@valivali%2Fcore.svg
[npm-version-link]: https://www.npmjs.com/package/@valivali/core
[npm-download-badge]: https://img.shields.io/npm/dm/@valivali/core.svg
[npm-download-link]: https://www.npmjs.com/package/@valivali/core
[license-badge]: https://img.shields.io/npm/l/@valivali%2Fcore.svg
[license-link]: https://github.com/Karibash/valivali/blob/main/packages/core/LICENSE
[github-follower-badge]: https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social
[github-follower-link]: https://github.com/Karibash?tab=followers
[twitter-follower-badge]: https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social
[twitter-follower-link]: https://twitter.com/intent/follow?screen_name=Karibash
