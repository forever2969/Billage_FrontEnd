import React from 'react';
import '../style/Template.css'

const TodoTemplate = ({ children }) => {
    console.log(children)
    return (
        <div className="Template">
        <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;