import{ useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
        mutation{
            createBoard(writer:"똥개", title:"똥꺠의하루", contents:"다이어트를 하였다"){
                _id
                number
                message
            }
}
`


export default function GraphqlMutationPage(){
    
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async() => {
        const result = await 나의함수()
        console.log(result)

    }

    
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> //한 줄일때는 괄호() 필요 없음

    
}