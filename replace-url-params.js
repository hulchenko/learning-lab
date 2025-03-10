const initalUrl = "/posts/:postId/comments/:commentId";
const resultUrl = replaceParamsInUrl(initalUrl, [
{ from: "postId", to: "1" },
{ from: "commentId", to: "3" },
]); // /posts/1/comments/3

function replaceParamsInUrl(urlStr, paramsArr){
    return paramsArr.reduce((acc, param) => {
        return acc.replace(`:${param.from}`, param.to);
    }, urlStr);
};