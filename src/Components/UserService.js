import api from '../api/posts';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/me';

class UserService {
  getPublicContent() {
    return api.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();