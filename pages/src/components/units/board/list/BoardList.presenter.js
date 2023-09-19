import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";


export default function BoardListUI(props){
    console.log(props.data)
   

    return(
        <S.Wrapper>
            <S.List>
                <S.ListInfo>
                    <S.ListNumberInfo>번호</S.ListNumberInfo>
                    <S.ListTitleInfo>제목</S.ListTitleInfo>
                    <S.ListWriterInfo>작성자</S.ListWriterInfo>
                    <S.ListDateInfo>날짜</S.ListDateInfo>
                </S.ListInfo>
                {props.data?.fetchBoards.map((el) => (
                    <S.ListContent key={el._id}> {/* 키 값을 부여해서 고유의 정체성을 깨달으셔야 해요  */}
                        <S.ListNumber>{String(el._id).slice(-4).toUpperCase()}</S.ListNumber>
                        <S.ListTitle id={el._id} onClick={props.onClickBoardTitle}>{el.title}</S.ListTitle>
                        <S.ListWriter>{el.writer}</S.ListWriter>
                        <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
                    </S.ListContent>
                  ))}
            </S.List>
            <S.BoardWrite onClick={props.onClickcreateBoards}>
                <img src="../images/write.png" />
                게시물 작성하기
            </S.BoardWrite>
        </S.Wrapper>
    )

}