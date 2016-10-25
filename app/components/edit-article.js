import Ember from 'ember';

export default Ember.Component.extend({
  editArticleForm: false,
  actions: {
    editArticleForm() {
      this.set('editArticleForm', true);
    },
    edit(article) {
      var params = {
        heading: this.get('heading'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('editArticleForm', false);
      this.sendAction('edit', article, params);
    }
  }
});
