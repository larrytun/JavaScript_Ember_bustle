import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    },
    edit(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    }
  }
});
