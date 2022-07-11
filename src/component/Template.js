import React from 'react';
import '../style/Template.css'

const TodoTemplate = ({ children }) => {
    return (
        <div className="Template">
        <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;