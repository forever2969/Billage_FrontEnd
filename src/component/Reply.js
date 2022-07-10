import React, { useState, useRef, useCallback } from 'react';
import Template from './Template';
import CommentInput from './commentInput';
import Comment from './Comment';


function Reply() {

  const [comments, setComments] = useState([
    { id: 1, name: 'KIT BILLAGE TEAM', content: 'WELCOME!!', }
  ]);

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
        {comments.map((comment) => {
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
