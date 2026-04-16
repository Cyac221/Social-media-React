import { useState, useEffect } from 'react'

const STORAGE_KEY = 'social_app_posts'

const INITIAL_POSTS = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png',
    timestamp: '1 min',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['lights.jpg', 'nature.jpg'],
    likes: 0,
    likedByMe: false,
    comments: []
  },
  {
    id: 2,
    author: 'Jane Doe',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
    timestamp: '16 min',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: [],
    likes: 3,
    likedByMe: false,
    comments: []
  }
]

function loadPosts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : INITIAL_POSTS
  } catch {
    return INITIAL_POSTS
  }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

export function usePosts() {
  const [posts, setPosts] = useState(loadPosts)

  useEffect(() => { savePosts(posts) }, [posts])

  function addPost(text) {
    if (!text.trim()) return
    const newPost = {
      id: Date.now(),
      author: 'Tú',
      avatar: 'https://www.w3schools.com/w3images/avatar3.png',
      timestamp: 'Ahora',
      text: text.trim(),
      images: [],
      likes: 0,
      likedByMe: false,
      comments: []
    }
    setPosts(prev => [newPost, ...prev])
  }

  function toggleLike(postId) {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, likedByMe: !post.likedByMe, likes: post.likedByMe ? post.likes - 1 : post.likes + 1 }
          : post
      )
    )
  }

  function addComment(postId, commentText) {
    if (!commentText.trim()) return
    const newComment = {
      id: Date.now(),
      author: 'Tú',
      avatar: 'https://www.w3schools.com/w3images/avatar3.png',
      text: commentText.trim(),
      timestamp: 'Ahora'
    }
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    )
  }

  return { posts, addPost, toggleLike, addComment }
}
