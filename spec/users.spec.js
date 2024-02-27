import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createUser, fetchUsers } from '../src/users.service'
import axios from 'axios'

vi.mock('axios')

describe('users.services', () => {
  beforeEach(() => {
    axios.get.mockReset()
    axios.post.mockReset()
  })

  describe('fetchUsers', () => {
    it('期待通りにGETリクエストが行われること', async () => {
      const usersMock = [{ id: 1 }, { id: 2 }]

      axios.get.mockResolvedValue({
        data: usersMock,
      })

      const users = await fetchUsers()

      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
      expect(users).toStrictEqual(usersMock)
    })
  })

  describe('createUser', () => {
    it('期待通りにPOSTリクエストが行われること', async () => {
      const newUserPayload = {
        name: 'john doe',
      }

      const newUserMock = {
        id: 3,
        ...newUserPayload,
      }

      axios.post.mockResolvedValue({
        data: newUserMock,
      })

      const newUser = await createUser(newUserPayload)

      expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', newUserPayload)
      expect(newUser).toStrictEqual(newUserMock)
    })
  })
})