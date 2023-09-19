import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const FETCH_BOARD = gql`

    query{
        fetchBoard(number:10){
        writer
        title
        contents
        }
    }

`

export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD)

    console.log(data)


    // 조건부 렌더링이란 - ? 

    // 옵셔널 체이닝 optional-chanining 
    // ex) data && data.fetchProfile ==> data(앞)이 '참'이면 뒤에 있는 것 실행해줘
    // ex) data || data.fetchProfile ==> data(앞)이 '거짓'이면 뒤에 있는 것 실행해줘

    // nullish-coalescing 거짓과 관련한 것
    // ex ) data ?? data.fetchProfile ==> 비.어.있.으.면(null , undifined , 0은 비어있는 것이 아니다.) '오른쪽'실행 비.어.있.지.않.으.면 '앞에 것' 실행



    return(
        <>
            <h3>이동된 페이지입니다.1111111111111</h3>
            <div> 작성자 : {data && data.fetchBoard?.writer} </div>
            <div> 제목 : {data? data.fetchBoard.title : "데이터가 없으면 이 구문실행 (삼항 연산자)"} </div>
            <div> 내용 : {data?.fetchBoard.contents} </div>
        </>
    )

}