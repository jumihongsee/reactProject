import { useState } from "react"
import { useMutation } from "@apollo/client";
import { useRouter} from "next/router"
import CreateBoardUI from "./CreateBoard.presenter";
import { CREATE_BOARD } from "./CreateBoard.queries"


export default function CreateBoard(){


    const [isActive, setIsActive] = useState(false)


    const router = useRouter()


    
    const [createBoard] = useMutation(CREATE_BOARD);

    const [writer, setWriter] = useState();
    const [password, setPassword] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const [postAdress, setPostAdress] = useState();
    const [mainAdress, setMainAdress] = useState();
    const [detailAdress, setDetailAdress] = useState();

    const [writerError, setWriterError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [TitleError, setTitleError] = useState("");
    const [ContentsError, setContentsError] = useState("");

    //이벤트 핸들러
    function changeWriter(e){
        setWriter(e.target.value)
        if(title && e.target.value && password && contents){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    function ChangePassword(e){
        setPassword(e.target.value)
        if(title && writer && e.target.value && contents){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    function ChangeTitle(e){
        setTitle(e.target.value)
        if(e.target.value && writer && password && contents){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    function ChangeContents(e){
        setContents(e.target.value)
        if(title && writer && password && e.target.value){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    function ChangePostAdress(e){
        setPostAdress(e.target.value)
    }
    function ChangeMainAdress(e){
        setMainAdress(e.target.value)
    }
    function changeDetailAdress(e){
        setDetailAdress(e.target.value)

    }



    const writeBoard = async()=>{
        if(!writer){ // writer값이 없을때
            setWriterError("작성자를 등록해 주세요")
        }
        if(!password){ 
            setPasswordError("비밀번호를 입력해 주세요")
        }
        if(!title){ 
            setTitleError("제목을 입력해 주세요")
        }
        if(!contents){
            setContentsError("내용 입력해라")
        }
        if(writer && password && title && contents){
           

            const result = await createBoard({
                variables:{
                    createBoardInput:{
                        writer : writer,
                        password : password,
                        title : title,
                        contents : contents,
                        youtubeUrl : "나중에",
                        boardAddress :{
                            zipcode: postAdress,
                            address: mainAdress,
                            addressDetail: detailAdress
                        }
          
                    }
                }
            })
            alert("게시물이 등록이 되었습니다잉");
            router.push(`${result.data.createBoard._id}`)
  
        }

    }

    return(
        <CreateBoardUI
            writerError = { writerError }
            PasswordError = { PasswordError }
            TitleError = { TitleError }
            ContentsError = { ContentsError }
            changeWriter = { changeWriter }
            ChangePassword = { ChangePassword }
            ChangeTitle = { ChangeTitle }
            ChangeContents = { ChangeContents }
            ChangePostAdress = { ChangePostAdress }
            ChangeMainAdress = { ChangeMainAdress } 
            changeDetailAdress = { changeDetailAdress }
            writeBoard = { writeBoard }          
            isActive = { isActive }  
        />
    )

}