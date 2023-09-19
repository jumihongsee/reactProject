import styled from "@emotion/styled";

export const Wrapper = styled.div`
    min-width: 65vw;
    margin: 0 auto;
    width: 65vw;
`
export const List = styled.div`
    width: 100%;
    height: auto;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`
export const ListInfo = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #000;
`
export const ListNumberInfo = styled.li`
    width: 10%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
export const ListTitleInfo = styled.li`
    width: 50%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
export const ListWriterInfo = styled.li`
    width: 20%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
export const ListDateInfo = styled.li`
    width: 20%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
export const ListContent = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    text-align: center;
    align-items: center;
    padding: 10px 0;
`
export const ListNumber= styled.li`
    width: 10%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`
export const ListTitle= styled.li`
    width: 50%;
    text-align: center;
    cursor: pointer;
`
export const ListWriter= styled.li`
    width: 20%;
    text-align: center;
`
export const ListDate= styled.li`
    width: 20%;
    text-align: center;
`
export const BoardWrite = styled.button`
    width: 200px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid #000;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-top: 20px;
`