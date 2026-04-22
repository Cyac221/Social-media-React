const BASE_URL = 'http://localhost:3000/api'

async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.msg || 'Error en la petición')
  return data
}

export const api = {
  // AUTH
  login:    (body) => request('/auth/login',    { method: 'POST', body: JSON.stringify(body) }),
  register: (body) => request('/auth/register', { method: 'POST', body: JSON.stringify(body) }),

  // PUBLICACIONES
  getPosts:    ()         => request('/publicaciones'),
  createPost:  (body)     => request('/publicaciones',            { method: 'POST',   body: JSON.stringify(body) }),
  deletePost:  (id)       => request(`/publicaciones/${id}`,      { method: 'DELETE' }),
  toggleLike:  (id, body) => request(`/publicaciones/${id}/like`, { method: 'POST',   body: JSON.stringify(body) }),
  getComments: (id)       => request(`/publicaciones/${id}/comentarios`),
  addComment:  (id, body) => request(`/publicaciones/${id}/comentarios`, { method: 'POST', body: JSON.stringify(body) }),

  // USUARIOS
  getPerfil:    (id)       => request(`/usuarios/${id}`),
  updatePerfil: (id, body) => request(`/usuarios/${id}`, { method: 'PUT', body: JSON.stringify(body) }),

  // GRUPOS
  getGrupos: () => request('/grupos'),

  // MENSAJES
  getChat:    (emisorId, receptorId) => request(`/mensajes/${emisorId}/${receptorId}`),
  sendMensaje: (body)                => request('/mensajes', { method: 'POST', body: JSON.stringify(body) }),
}