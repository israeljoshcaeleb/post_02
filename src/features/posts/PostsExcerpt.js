import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useNavigate } from 'react-router-dom'

const PostsExcerpt = ({post}) => {
    const navigate = useNavigate()
  return (
    <article onClick={() => navigate(`post/${post.id}`)}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className='postCredit'>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt