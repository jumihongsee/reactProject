import{ useMutation, gql } from "@apollo/client"
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
        mutation createBoard($writer:String, $title:String, $contents:String){
            createBoard(writer: $writer, title: $title, contents: $contents){
                _id
                number
                message
            }
        }
`
export default function GraphqlMutationPage(){
    
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const onClickSubmit = async() => {
        const result = await 나의함수({
            variables:{ // variables 이게 $ 역할을 한다. 
                writer,
                title,
                contents
            }
        })
        console.log(result)

    }

    const onChageWriter = (e)=>{
        setWriter(e.target.value)
    }
    const onChageTitle = (e)=>{
        setTitle(e.target.value)
    }
    const onChageContents = (e)=>{
        setContents(e.target.value)
    }

    return (
        <>

                작성자 : <input type="text" onChange={onChageWriter} /> 
                제목 : <input type="text" onChange={onChageTitle} /> 
                내용 : <input type="text" onChange={onChageContents} /> 

                <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>

    ) //한 줄일때는 괄호() 필요 없음

    
}