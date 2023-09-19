import { getDate } from "../../../../commons/libraries/utils"

import{
    Column,
    Wrapper,
    UserInfo,
    User,
    UserName, UserImage,
    BoardDate,
    DetailImage,DetailTitle,
    DetailContents,
    Button, ButtonWrapper,

}from "../../../../../../styles/port_foilo"

export default function DetailBoardUI(props){


    return(
        <Wrapper>
        <UserInfo>
            <User>
                <UserImage src="/userprofile.png" />
                
     
            </User>
            <Column>
                <UserName>{props.data?.fetchBoard?.writer}</UserName>
                <BoardDate>{getDate(props.data?.fetchBoard?.createdAt)}</BoardDate>
                
            </Column>
        </UserInfo>
        <DetailTitle>{props.data?.fetchBoard?.title}</DetailTitle>
        <DetailImage></DetailImage>
        <DetailContents>{props.data?.fetchBoard?.contents}</DetailContents>
        <ButtonWrapper>
            <Button onClick={props.onClickList}>목록으로</Button>
            <Button onClick={props.onClickEdit}>수정하기</Button>
        </ButtonWrapper>
       
    </Wrapper>
    )

}