import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import { TransformService } from '../services/transform.service';
import { renderPost } from '../templates/post.template';

export class PostsComponent extends Component {
  constructor(id, { loader: loader }) {
    super(id);
    this.loader = loader;
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this));
  }

  async onShow() {
    this.loader.show();
    const fbData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(fbData);
    const html = posts.map((post) => renderPost(post, { withButton: true }));
    this.loader.hide();
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '));
  }

  onHide() {
    this.$el.innerHTML = ''; //prevents posts duplication on tab switch
  }
}

function buttonHandler(event) {
  const $el = event.target;
  const id = $el.dataset.id;
  const title = $el.dataset.title;

  if (id) {
    // save/delete the post's key into/from an array with the help of local storage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const candidate = favorites.find(p => p.id === id)

    if (candidate) {
      // delete element
      $el.textContent = 'Save';
      $el.classList.add('button-primary');
      $el.classList.remove('button-danger');
      favorites = favorites.filter(p => p.id !== id);
    } else {
      // add element
      $el.textContent = 'Delete';
      $el.classList.remove('button-primary');
      $el.classList.add('button-danger');
      favorites.push({id, title});
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
