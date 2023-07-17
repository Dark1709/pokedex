import { NetworkError } from "../core/errors";

export const API = {
  /**
   * @param {string} url ->URL To fetch
   * @param {object} options ->Fetch options
   */
  async GET(url, options = {}) {
    const response = await fetch(url);
    if (!response.ok) throw NetworkError("Network response was not ok");

    return response.json();
  },
};
