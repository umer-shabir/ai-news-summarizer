import axios from 'axios'

const API_URL = 'http://localhost:5000/news'

export const fetchNews = async (page) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`)
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error)
    return { news: [], totalPages: 1 }
  }
}