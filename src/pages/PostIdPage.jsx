import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div style={{ marginTop: 105 }}>
      <h2>Вы открыли альбом {params.id} {params.title}</h2>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      {/* <h1>
        Комментарии
      </h1> */}
      {isComLoading
        ? <Loader/>
        : <div>
          {comments.map(comm =>
            <div key={comm.id} style={{ marginTop: 0, padding: 10, display: "inline-flex"}}>
              {/* <h5>{comm.id}</h5> */}
              {/* <h5>{comm.title}</h5> */}
              <div>
                <img style={{width: 550}} src={comm.url} />
              </div>

              {/* <div>{comm.thumbnailUrl}</div> */}
            </div>   
          )}
        </div>
      }
    </div>
  )
}

export default PostIdPage;