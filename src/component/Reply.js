import React, { useState, useRef, useCallback,useEffect } from 'react';
import Template from './Template';
import CommentInput from './commentInput';
import Comment from './Comment';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Reply() {
  const [comments, setComments] = useState([
    { id: 1, name: 'KIT BILLAGE TEAM', content: 'WELCOME!!', }
  ]);
  const params = useParams();
  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content
      };
      axios({
        url:'/board_comments/',
        method:'post',
        data:{
            board_id:parseInt(params.productId),
            content:comment.content,
            writer:17,
            comment_id:comment.id,
        },
        headers:{
            'ContentType':'application/json'
        }
    }).then((res)=>{
        console.log(res);
    }).catch((e)=>console.log(e))
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );
  useEffect(()=>{
    axios.get('/comments_list/')
    .then((res)=>{
      setComments(res.data.results);
    })
  },[nextId])
  console.log(comments);
  const filterComment = comments.filter((com)=>{
    return (com.board_id === parseInt(params.productId));
  });
  
  return (
    <div>
      <Template>
        <h4 style={{texAlign:'left'}}>댓글을 남겨주세요</h4>
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {filterComment.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Reply;