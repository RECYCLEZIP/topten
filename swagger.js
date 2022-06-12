const swaggerAutogen = require("swagger-autogen")(
    { openapi: "3.0.0" },
    {
        language: "ko",
    },
);

const doc = {
    info: {
        title: "분리수ZIP 서비스 API",
        description: "엘리스 AI 트랙 4기 - AI Project 10팀 TOPTEN 프로젝트 문서.",
    },
    host: "localhost:5001",
    schemes: ["http"],
    securityDefinitions: {
        // * JWT 토큰 설정을 위한 코드
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "JWT",
        },
    },
    tags: [
        {
            name: "news",
            description: "news 경로 엔드포인트",
        },
        {
            name: "quiz",
            description: "quiz 경로 엔드포인트",
        },
        {
            name: "trash",
            description: "trash 경로 엔드포인트",
        },
    ],
    definitions: {
        // Parents: {
        //     father: "Simon Doe",
        //     mother: "Marie Doe",
        // },
        // User: {
        //     name: "Jhon Doe",
        //     age: 29,
        //     parents: {
        //         $ref: "#/definitions/Parents",
        //     },
        //     diplomas: [
        //         {
        //             school: "XYZ University",
        //             year: 2020,
        //             completed: true,
        //             internship: {
        //                 hours: 290,
        //                 location: "XYZ Company",
        //             },
        //         },
        //     ],
        // },
        AddUser: {
            $username: "haechan",
            $password: "1234",
        },
    },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/api/**/*.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
