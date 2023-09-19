import styled from "@emotion/styled";


// Create boards styles...

export const Wrapper = styled.div`
    padding: 30px 50px;
    min-width: 65vw;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:  center;
    width: 30vw;
    margin: 0 auto;
`
export const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    text-align: center;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width:100%;
    margin:5px 0;

`
export const Rowhalf = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width:100%;
    margin:5px 0;

`
export const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width:100%;
    margin:5px 0;

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    justify-content:center;
    margin:5px 0;
`
export const ColumnHalf = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    justify-content:flex-end;
    margin:5px 0;
`
export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
`
export const Input = styled.input`
    width: 100%;
    border: 1px solid #333;
    height: 4vh;
    margin-bottom: 10px;
`
export const InputHalf = styled.input`
    width: 90%;
    border: 1px solid #333;
    height: 4vh;
    margin-bottom: 10px;
`
export const Password = styled.input`
    width: calc(100% - 10px);
    border: 1px solid #333;
    height: 4vh;
    margin-bottom: 10px;
    margin-left:10px;

`
export const Writer = styled.input`
    width: calc(100% - 10px);
    border: 1px solid #333;
    height: 4vh;
    margin-bottom: 10px;
    margin-right:10px;
`

export const BlackButton = styled.button`
    height: 4vh;
    color: #fff;
    background: #000;
    font-size: 14px;
    line-height: 4vh;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    padding: 0 20px;
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 20vh;
    border: 1px solid #333;

    resize: none;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px; height: 80px;
    background: #333;
    margin-right: 10px;
    cursor: pointer;
`
export const BoxMeterial = styled.h1`
    color: #eee;
    font-size: 13px;
`
export const YellowButton = styled.button`
    height: 4vh;
    color: #000;
    background: ${(props)=> props.isActive === true ? "yellow" : "gray"};
    font-size: 14px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`
export const InputRadio = styled.input`
    width: 10px; height: 10px;


`
export const Error = styled.h2`
    font-size: 12px;
    color: #f00;
    padding: 0;
`

// Board Detail styles..

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const User = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin-right: 10px;
`
export const UserImage = styled.img`
    width: 100%;
    height: 100%;
`
export const UserName = styled.h2`
    font-size: 18px;
    color: #000;
    padding: 0;
    margin: 0;

`
export const BoardDate = styled.p`
    font-size: 12px;
    color: #000;
    padding: 0; margin: 0;
`
export const DetailImage = styled.div`
    width: 100%;
    height: 300px;
    background-color: #eee;
    margin: 20px 0;
`
export const DetailContents = styled.p`
    width: 100%;
    color: #000;
    font-size: 12px;
`
export const DetailTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`
export const ButtonWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
`
export const Button = styled.button`
    width: 80px;
    padding: 10px 5px;
    border: 1px solid #000;
    background-color: #fff;
    text-align:center;
    margin-right: 10px;
`