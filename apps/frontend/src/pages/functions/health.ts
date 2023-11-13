import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response('OK', {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}
