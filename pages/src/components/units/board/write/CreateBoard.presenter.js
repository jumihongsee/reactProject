import { 
    Wrapper,
    TextArea,
    Title,
    Row,
    Column,
    Input,
    BlackButton,
    YellowButton,
    Label,
    BoxMeterial,
    Box,
    InputRadio,
    RowCenter,
    Rowhalf,
    ColumnHalf,
    Password,
    Writer,
    Error

} from "../../../../../../styles/port_foilo"


export default function CreateBoardUI(props){


    return(
        <Wrapper>
            <Title>게시물등록</Title>
            <Rowhalf>
                <ColumnHalf>
                    <Label>작성자</Label>
                    <Writer type="text" onChange={props.changeWriter} />
                    <Error>{props.writerError}</Error>
                </ColumnHalf>
                <ColumnHalf>
                    <Label>비밀번호</Label>
                    <Password type="text" onChange={props.ChangePassword} />
                    <Error>{props.PasswordError}</Error>
                </ColumnHalf>
            </Rowhalf>
            <Column>
                <Label>제목</Label>
                <Input type="text" onChange={props.ChangeTitle} />
                <Error>{props.TitleError}</Error>
            </Column>
            <Column>
                <Label>내용</Label>
                <TextArea type="text" onChange={props.ChangeContents} />
                <Error>{props.ContentsError}</Error>
            </Column>
            <Column>
                <Column>
                    <Label>주소</Label>
                    <Row>
                        <Input type="text" onChange={props.ChangePostAdress}/>
                        <BlackButton>우편번호 검색</BlackButton>
                    </Row>
                    <Input type="text" onChange={props.ChangeMainAdress}/>
                    <Input type="text" onChange={props.changeDetailAdress}/>
                </Column>
            </Column>
            <Column>
                <Label>유튜브</Label>
                <Input type="text" />
            </Column>
            <Column>
                <Label>사진첨부</Label>
                <Row>
                    <Box>
                        <BoxMeterial>+</BoxMeterial>
                        <BoxMeterial>Upload</BoxMeterial>
                    </Box>
                    <Box>
                        <BoxMeterial>+</BoxMeterial>
                        <BoxMeterial>Upload</BoxMeterial>
                    </Box>
                    <Box>
                        <BoxMeterial>+</BoxMeterial>
                        <BoxMeterial>Upload</BoxMeterial>
                    </Box>
                </Row>
            </Column>
            <Column>
                <Label>메인설정</Label>
                <RowCenter>
                    <InputRadio type="radio" checked />유튜브
                    <InputRadio type="radio" />메인
                </RowCenter>
            </Column>
            <YellowButton 
                onClick={props.writeBoard}
                isActive = {props.isActive}
            >등록하기</YellowButton>
        
        </Wrapper>
        
        



        
    )

}




