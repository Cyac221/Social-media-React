// src/shared/usePosts.jsx
import { useState, useEffect } from 'react'
import { api } from '../../api/client'
import { useAuth } from '../../context/AuthContext'

export function usePosts() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')
  const { usuario } = useAuth()

  // Carga los posts del backend al montar el componente
  useEffect(() => {
    api.getPosts()
      .then(data => setPosts(data))
      .catch(() => setError('No se pudieron cargar las publicaciones'))
      .finally(() => setLoading(false))
  }, [])

  async function addPost(texto) {
    if (!texto.trim()) return
    await api.createPost({ usuario_id: usuario.id, texto, imagen_url: null })
    const data = await api.getPosts()
    setPosts(data)
  }

  async function toggleLike(postId) {
    await api.toggleLike(postId, { usuario_id: usuario.id })
    const data = await api.getPosts()
    setPosts(data)
  }

  async function addComment(postId, contenido) {
    if (!contenido.trim()) return
    await api.addComment(postId, { usuario_id: usuario.id, contenido })
    const data = await api.getPosts()
    setPosts(data)
  }

  return { posts, addPost, toggleLike, addComment, loading, error }
}