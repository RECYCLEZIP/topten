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
├── src
│   ├── apis
│   │   ├── quiz
│   │   │   └── controller
│   │   ├── trash
│   │   │   └── controller
│   │   └── index.controller.ts
│   ├── service
│   │   ├── quiz.service.ts
│   │   └── trash.service.ts
│   ├── repository
│   │   ├── quiz.repository.ts
│   │   └── trash.repository.ts
│   ├── db
│   ├── middlewares
│   ├── app.ts
│   └── server.ts
├── __tests__
├── script
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
