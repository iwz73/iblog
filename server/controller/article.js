const ArticleService = require('../proxy/article')
module.exports = {
    async createArticle(ctx) {
        const createResult = await ArticleService.create(ctx.request.body)
        ctx.body = createResult
    }
}