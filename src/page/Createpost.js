import { useRef , useState } from 'react';
import '../style/Createpost.css';

const Createpost = () => {
    // const photoInput = useRef();
    const titleInput = useRef();
    const priceInput = useRef();
    const contentsInput = useRef();

    const [crePost,setCrePost] = useState({
        photo:"",
        title:"",
        cate:"",    
        price:"",
        contents:"", 
    });

    const handleChangePost = (e) => {
        setCrePost({
            ...crePost,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(crePost.title.length < 1)
        {
            titleInput.current.focus();
            return;
        }

        if(crePost.price < "5000" || crePost.price > "50000")
        {
            if(crePost.price < "5000")
            {
                priceInput.current.focus();
            }

            else if(crePost.price > "50000")
            {
                priceInput.current.focus();
            }
            return;
        }

        if(crePost.contents.length < 5)
        {
            contentsInput.current.focus();
            return;
        }
    }

    return(
        <div className="createpost">
            <h2>게시글 작성</h2>
            
            {/* 사진 입력 */}
            <div>
                <input useref={crePost.photo} placeholder="사진 올리기"/>
            </div>

            {/* 제목 입력 */}
            <div>
                <input name='title' useref={crePost.title} placeholder="제목을 입력하세요" value={crePost.title} onChange={handleChangePost}/>
            </div>
            
            {/* 가격 입력 */}
            <div>
                <input name='price' useref={crePost.price} placeholder="가격을 입력하세요" value={crePost.price} onChange={handleChangePost}/>
            </div>

            {/* 내용 입력 */}
            <div>
                <textarea name='contents' useref={crePost.contents} placeholder="정성스럽게 작성하세요" value={crePost.contents} onChange={handleChangePost}/>
            </div>

            {/* 게시하기 버튼 */}
            <button onClick={handleSubmit}>게시하기</button>
        </div>
    );
}

export default Createpost;