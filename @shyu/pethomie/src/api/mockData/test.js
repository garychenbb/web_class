// 模擬後端的資料
export default {
    getTestData: () => {
        return [
            {
                listId: 0,
                question: "Q1",
                option: [
                    {
                        index: 0,
                        answer: "answer A",
                        score: 1,
                    },
                    {
                        index: 0,
                        answer: "answer B",
                        score: 2,
                    },
                    {
                        index: 0,
                        answer: "answer C",
                        score: 3,
                    },
                ],
            },
        ];
    },
};
