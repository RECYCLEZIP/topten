# BackEnd

### 실행방법

```ts
yarn // install packages

yarn start // start server

yarn test // start test with jest
```

<br/>

### 프로젝트 구조

```
Root
├── script
├── src
│   ├── apis
│   │   ├── quiz
│   │   │   ├── controller
│   │   │   ├── quiz.repository.ts
│   │   │   └── quiz.service.ts
│   │   ├── trash
│   │   │   ├── controller
│   │   │   ├── trash.repository.ts
│   │   │   └── trash.service.ts
│   │   └── index.controller.ts
│   ├── db
│   ├── middlewares
│   ├── __tests__
│   ├── app.ts
│   └── server.ts
├── ecosystem.config.js
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── jest.config.js
├── package.json
├── README.md
└── tsconfig.json
```
