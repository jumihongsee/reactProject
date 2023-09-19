import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const FETCH_BOARD = gql`

    query{
        fetchBoard(number:12){
        writer
        title
        contents
        }
    }

`

export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD)

    console.log(data)


    // 옵셔널 체이닝 optional-chanining 
    return(
        <>
            <h3>이동된 페이지입니다.222222222222</h3>
            <div>작성자 : {data && data.fetchBoard.writer}</div>
            <div>제목 : {data? data.fetchBoard.title : "데이터가 없으면 이 구문실행 (삼항 연산자)"}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </>
    )

}