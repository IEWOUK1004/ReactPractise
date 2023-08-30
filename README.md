# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## Usage

```bash
npx create-next-app -e https://github.com/CinemaCafe/next-template
```

## Clinet environment variable
If you want to use environment variable, add .env.development.local & .env.production.local files to your client path.

e.g.
if you want add an API_URL for use.
```typescript
// .env.development.local
API_URL="your API end porint url for dev"

// .env.production.local
API_URL="your API end porint url for prod"

```

and don't forget to add type for those files

```typescript
// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        readonly API_URL: string; 
    }
  }

// and your have to "include" the envt.d.ts in tsconfig.json file
```
After you add those files and setup those variable, you have to add env object to next.config.js

```typescript
// next.config.js
// output is for static xports
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    env : {
        API_URL: process.env.API_URL,
    }
}

module.exports = nextConfig

```

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
