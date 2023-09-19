import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const FETCH_BOARDS = gql`

    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }

`

export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARDS)

    console.log(data?.fetchBoards)


    // 조건부 렌더링이란 - ? 

    // 옵셔널 체이닝 optional-chanining 
    // ex) data && data.fetchProfile ==> data(앞)이 '참'이면 뒤에 있는 것 실행해줘
    // ex) data || data.fetchProfile ==> data(앞)이 '거짓'이면 뒤에 있는 것 실행해줘

    // nullish-coalescing 거짓과 관련한 것
    // ex ) data ?? data.fetchProfile ==> 비.어.있.으.면(null , undifined , 0은 비어있는 것이 아니다.) '오른쪽'실행 비.어.있.지.않.으.면 '앞에 것' 실행



    return(
        <>
            {data?.fetchBoards.map(el => (
                <div>
                    <span>
                        <input  type="checkbox"/>
                    </span>
                    <span style={{margin:"10px"}}>{el.number}</span>
                    <span style={{margin:"10px"}}>{el.title}</span>
                    <span style={{margin:"10px"}}>{el.writer}</span>
                </div>
            ))}
     
        </>
    )

}