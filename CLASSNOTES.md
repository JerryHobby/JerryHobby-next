# VS Code extensions

- ES 7 React/Redux/GraphQL/React-Native snippets
- JavaScript and TypeScript Nightly
- Tailwind CSS IntelliSense

## Create a new Next.js project

npx create-next-app@latest --ts

rcc - React Class Component - client side
rsc - React Stateless Component with export (rafce)
rscp - React Stateless Component with export and PropTypes (rafcp)

npm i lodash
npm i -D @types/lodash
npm i zod
npm i -D @types/zod
npm i @prisma/client

https://jsonplaceholder.typicode.com/ - fake json data

https://tailwindcss.com - css tools

https://daisyui.com - ui tools for tailwind

https://sentry.io - logging service

https://www.postman.com/ - api testing

https://zod.dev - validation tool

https://prisma.io - database tool

npx prisma init
prisma db pull
prisma format
npx prisma migrate dev

https://www.cloudinary.com - image hosting

```
import {Cloudinary} from "@cloudinary/url-gen";
const App = () => {
const cld = new Cloudinary({cloud: {cloudName: 'dzo5nvaqq'}});
};

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
{ public_id: "olympic_flag" },
function(error, result) {console.log(result); });
```

https://next.cloudinary.dev/installation

```agsl

npm install next-cloudinary

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"

```

http://next-auth.js.org - authentication
https://authjs.dev/

openssl rand -base64 32

https://svelte.dev/

https://authjs.dev/reference/adapter/prisma
npm i @next-auth/prisma-adapter

npm i bcrypt
npm i -D @types/bcrypt

https://react.email
npm i react-email @react-email/components

npm i resend

npm i lodash
npm i -D @types/lodash



