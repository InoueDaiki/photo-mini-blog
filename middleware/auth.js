import { Auth } from 'aws-amplify'

export default async ({ store, redirect }) => {
  const userInfo = await Auth.currentUserInfo()

  if (!userInfo) redirect('/login')
  else store.commit('setUser', userInfo)
}
