const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article')
    }

    async findAll(){
        const articles = await super.findAll()
        return articles
    }

    async findOne(slug){
        const article = await super.findOne('slug', slug)
        return article
    }

    async findMany(author){
        const articles = await super.findMany('author_id',author['id'])
        return articles 
    }

    async create(article){
        const createdArticleId = await super.create(article)
        return createdArticleId
    }

    async update(id,article){
        const  updateArticle = await super.update(id,article)
        return updateArticle
    }
    async delete(id){
        const  deleteArticle = await super.delete(id)
        return deleteArticle
    }

}

module.exports = ArticleModel;