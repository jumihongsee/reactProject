import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD } from "./DetailBoard.queries";
import DetailBoardUI from "./DetailBoard.presenter";

export default function DetailBoard(){

    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId },
    });

    const onClickList=()=>{
        router.push("./")
    }
    const onClickEdit=()=>{

    }

    return(
        <DetailBoardUI
            onClickList={onClickList}
            onClickEdit={onClickEdit}
            data={data}
        
        />
    )

}