import fetch from 'node-fetch'

export const get = async <T = any>(url: string, params: any = {}): Promise<T> => {
  const res = await fetch(`${url + new URLSearchParams(params)}`)
  return (await res.json()) as T
}

export const post = async <T = any>(url: string, body: any): Promise<T> => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  return (await res.json()) as T
}
