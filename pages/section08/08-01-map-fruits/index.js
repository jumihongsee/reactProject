

// 컴포넌트를 위에 만든 이유 : 컴포넌트가 리렌더링 돼도 다시 안만들어지기 때문이다 ~ (존니 효울적 ㅋ)
const FRUITS = [
    {number:1, title:"레드1"},
    {number:2, title:"레드2"},
    {number:3, title:"레드3"},
    {number:4, title:"레드4"},
    {number:5, title:"레드5"},
    {number:6, title:"레드6"},
    {number:7, title:"레드7"},
    {number:8, title:"레드8"},
    {number:9, title:"레드9"},
    {number:10, title:"레드10"},
];


export default function MapFruitsPage(){
    
    // 1. 가장 기본 에제
    const aaa = [ <div>1. 레드향</div>, <div>2. 레드향</div>, <div>3. 블루향</div>, <div>4. 그린향</div> ]
    
    // 2. 실무 백엔드 데이터 예제
    const bbb = FRUITS.map(el => <div>{el.number}{el.title}</div>)

    return(
        <>
            <div>{aaa}</div>
            ////////////////////////////
            <div>{bbb}</div>
            ////////////////////////////
            <div>
                {/*  3. 실무 효율적인 렌더링 예제  */}
                {FRUITS.map(el => <div>{el.number}{el.title}</div>)}
            </div>
          
        </>
    )
}