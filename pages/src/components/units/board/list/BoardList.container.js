import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter  } from "next/router"
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList(){

    const { data } = useQuery(FETCH_BOARDS)
    const router = useRouter();

    const onClickBoardTitle=(e)=>{
        router.push(`/_jumi_port_foilo/board/${e.target.id}`)
    }
    const onClickcreateBoards=()=>{
        router.push(`/_jumi_port_foilo/board/new`)
    }
 


    return(<BoardListUI
                data={data}
                onClickBoardTitle ={onClickBoardTitle}
                onClickcreateBoards = {onClickcreateBoards}
        />)
}



