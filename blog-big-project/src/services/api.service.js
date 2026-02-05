class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post),
      }); // /posts.json is Firebase rule to save files in JSON format
      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'get',
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: 'get',
      });
      return useRequest(request);
    } catch (error) {
      console.log(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  'https://hulchenko-blog-project-js-default-rtdb.firebaseio.com'
);
