import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Fragment } from 'react'

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number : Int){
        deleteBoard(number:$number){
            message
        }
    }
`

export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)


    // 화면에서 바로 삭제가 반영이 안됨 !!!  ==> 솔루션 : refetch

    // 체크 후 삭제 했는데 체크가 안 사라진다 ?? ==> 솔루션 : key 값을 주어 중복되지 않는 값을 넣어줌 
    // ==> key를 사용할때 주의할 점은 ? ==> index를 키로 주지 않는다
    // ==> index를 사용 할 수 없는 이유 : 값이 삭제되면서 다시 index값을 부여해 주기 때문에 중복되지 않는 값을 넣어 주는것이 아니라고 볼 수 있다.

    const onClickDelete =(event)=>{
   
        console.log(event.target.id)
        Number(event.target.id)
        deleteBoard({
            variables : {
                number : Number(event.target.id)
            },
            refetchQueries:[{query: FETCH_BOARDS}]
        })
    }

    return(
        <>
            {data?.fetchBoards.map(el => (
                // 특별한 이유가 없으면 Fragment로 감싸자 ! <div/>는 1개 더 그려야 돼서 조금 느려짐
                //  1. 프레그 먼트란? <></>, <Fragment></Fragment>
                //  2. 프레그 먼트에 key입력하는 방법은 ? <Fragment key={1}></Fragment>
                <Fragment key={el.number}>{/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨  */}
                    <span>
                        <input  type="checkbox"/>
                    </span>
                    <span style={{margin:"10px"}}>{el.number}</span>
                    <span style={{margin:"10px"}}>{el.title}</span>
                    <span style={{margin:"10px"}}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </Fragment>
            ))}
     
        </>
    )

}