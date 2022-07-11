import React, { useState, useRef, useCallback,useEffect } from 'react';
import Template from './Template';
import CommentInput from './commentInput';
import Comment from './Comment';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Reply() {
  const [detailComments,setDetailComments] = useState([]);
  const [totalComments,setTotalComments] = useState([]);
  const location = useLocation();
  useEffect(()=>{
    async function getCommentsList(){
      const resultData = await axios.get('/comments_list/').then((res)=>{return res.data});
      setTotalComments(resultData);
      const filterData = await totalComments.filter((comment)=>{
        return (comment.board_id === location.detail);
      });
      setDetailComments(filterData);
    }
  },[]);

  
  
  const [comments, setComments] = useState([{}]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content
      };
      console.log(name);
      console.log(content);
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );


  return (
    <div>
      <Template>
        <h4 style={{texAlign:'left'}}>댓글을 남겨주세요</h4>
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {detailComments.map((comment) => {
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
