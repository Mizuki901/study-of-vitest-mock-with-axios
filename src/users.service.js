import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

// fetchUsers
export const fetchUsers = async () => {
  return (await axios.get(`${BASE_URL}/users`)).data
}

// ceateUser
export const createUser = async (user) => {
  return (await axios.post(`${BASE_URL}/users`, user)).data
}
