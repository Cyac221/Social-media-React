import { useState } from 'react'
import { usePosts } from '../shared/usePosts'

// ── Sección de comentarios ─────────────────────────────────────────────────
function CommentSection({ postId, comments, onAddComment }) {
  const [commentText, setCommentText] = useState('')

  function handleSubmit() {
    onAddComment(postId, commentText)
    setCommentText('')
  }

  return (
    <div className="w3-container" style={{ paddingBottom: '12px' }}>
      {comments.length > 0 && (
        <div style={{ marginBottom: '10px' }}>
          {comments.map(comment => (
            <div key={comment.id} className="w3-row" style={{ marginBottom: '8px' }}>
              <img src={comment.avatar} alt="avatar" className="w3-circle w3-margin-right"
                   style={{ width: '32px', height: '32px', float: 'left' }} />
              <div className="w3-rest w3-card w3-round w3-light-grey w3-padding-small"
                   style={{ display: 'inline-block', marginLeft: '8px', maxWidth: '85%' }}>
                <strong style={{ fontSize: '13px' }}>{comment.author}</strong>
                <span className="w3-opacity" style={{ fontSize: '11px', marginLeft: '8px' }}>{comment.timestamp}</span>
                <p style={{ margin: '2px 0 0', fontSize: '13px' }}>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w3-row">
        <img src="https://www.w3schools.com/w3images/avatar3.png" alt="avatar" className="w3-circle"
             style={{ width: '32px', height: '32px', float: 'left', marginRight: '8px' }} />
        <div className="w3-rest" style={{ display: 'flex', gap: '6px' }}>
          <input type="text" className="w3-input w3-border w3-round"
                 placeholder="Escribe un comentario..." value={commentText}
                 onChange={e => setCommentText(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                 style={{ fontSize: '13px', padding: '6px 10px' }} />
          <button className="w3-button w3-theme w3-round" onClick={handleSubmit}
                  disabled={!commentText.trim()} style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>
            <i className="fa fa-send"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Tarjeta de post ────────────────────────────────────────────────────────
function PostCard({ post, onLike, onAddComment }) {
  const [showComments, setShowComments] = useState(false)
  const { id, author, avatar, timestamp, text, images, likes, likedByMe, comments } = post

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{timestamp}</span>
      <h4>{author}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{text}</p>
      {images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((img, i) => (
            <div key={i} className="w3-half">
              <img src={`https://www.w3schools.com/w3images/${img}`} style={{ width: '100%' }} alt={img} className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
        <button type="button" className={`w3-button w3-round ${likedByMe ? 'w3-blue' : 'w3-theme-d1'}`} onClick={() => onLike(id)}>
          <i className="fa fa-thumbs-up"></i> {likes > 0 && <span>{likes}</span>} Like
        </button>
        <button type="button" className="w3-button w3-theme-d2 w3-round" onClick={() => setShowComments(v => !v)}>
          <i className="fa fa-comment"></i>{comments.length > 0 && <span> {comments.length}</span>} Comentar
        </button>
      </div>
      {showComments && <CommentSection postId={id} comments={comments} onAddComment={onAddComment} />}
    </div>
  )
}

// ── MainFeed ───────────────────────────────────────────────────────────────
export default function MainFeed() {
  const [postText, setPostText] = useState('')
  const { posts, addPost, toggleLike, addComment } = usePosts()

  function handlePost() {
    addPost(postText)
    setPostText('')
  }

  return (
    <div className="w3-col m7">
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">¿Qué estás pensando?</h6>
              <textarea className="w3-input w3-border w3-round" rows="3"
                        placeholder="Escribe algo..." value={postText}
                        onChange={e => setPostText(e.target.value)}
                        style={{ resize: 'vertical', fontFamily: 'inherit' }} />
              <button type="button" className="w3-button w3-theme w3-margin-top w3-round"
                      onClick={handlePost} disabled={!postText.trim()}>
                <i className="fa fa-pencil"></i> Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={toggleLike} onAddComment={addComment} />
      ))}
    </div>
  )
}
