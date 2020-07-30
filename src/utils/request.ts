class Http {
  async get(url: string) {
    const res = await fetch(url, {
      method: 'GET',
      //请求头定义
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  }
  async post(url: string, data?: AnyObject) {
    const res = await fetch(url, {
      method: 'POST',
      //请求头定义
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await res.json()
  }
}

export default new Http()
