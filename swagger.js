const options = { autoHeaders: false, autoQuery: false, autoBody: false };
const swaggerAutogen = require("swagger-autogen")(
    options,
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
            description: "뉴스 데이터 API",
        },
        {
            name: "quiz",
            description: "퀴즈 데이터 API",
        },
        {
            name: "trash",
            description: "쓰레기 데이터 API",
        },
    ],
    definitions: {
        QuizId: "62a455ad6059af946a56e717",
        QuizType: "?type=multipleChoice",
        QuizUserAnswer: { answer: "1" },
        QuizResult: { isCorrect: true },
        QuizSetSubmission: {
            type: "multipleChoice",
            answers: [
                {
                    quizId: "62a455ad6059af946a56e717",
                    answer: "1",
                },
                {
                    quizId: "62a455ad6059af946a56e715",
                    answer: "2",
                },
                {
                    quizId: "62a455ad6059af946a56e71b",
                    answer: "0",
                },
                {
                    quizId: "62a455ad6059af946a56e719",
                    answer: "3",
                },
            ],
        },
        QuizSetResult: {
            result: [
                {
                    quizId: "62a163ddac4b496254c13d9e",
                    isCorrect: true,
                },
                {
                    quizId: "62a163ddac4b496254c13d9c",
                    isCorrect: true,
                },
                {
                    quizId: "62a163ddac4b496254c13da2",
                    isCorrect: true,
                },
                {
                    quizId: "62a163ddac4b496254c13da0",
                    isCorrect: true,
                },
            ],
            score: 100,
        },
        QuizByType: [
            {
                _id: "62a455ad6059af946a56e717",
                title: "유통기한 지난 의약품의 분리배출 방법으로 옳은 것을 고르시오.",
                description:
                    "폐의약품을 그냥 버릴 경우 환경오염을 일으킬 수 있다. 약국에 비치된 폐의약품 수거함에 버린다.",
                options: [
                    "일반쓰레기로 버린다.",
                    "약국에 비치된 폐의약품 수거함에 버린다.",
                    "내 뱃속에 버린다.",
                    "약사님께 드린다.",
                ],
                answer: "1",
                type: "multipleChoice",
                image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1840&q=80",
                result: [
                    {
                        date: "2022-06-11T08:43:25.335Z",
                        totalUser: 2,
                        wrong: 1,
                        yesterday: 0,
                        _id: "62a455ad6059af946a56e718",
                    },
                ],
                __v: 0,
            },
        ],
    },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/api/**/*.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
