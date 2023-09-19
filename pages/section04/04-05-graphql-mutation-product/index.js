import{ useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
        mutation createProduct($seller : String, $createProductInput: CreateProductInput!){  # 변수의 타입 적는 곳 
            createProduct(seller : $seller, createProductInput: $createProductInput ){  # 실제 우리가 전달할 변수 적는 곳 
                _id
                number
                message
            }
        }
`


export default function GraphqlMutationPage(){
    
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async() => {
        const result = await createProduct({
            variables : { // variables == $
                seller : "훈이" ,
                createProductInput : {
                    name : "마우스",
                    detail : "짱조음",
                    price : 200000
                }
            }
        })
        console.log(result)

    }

    
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button> //한 줄일때는 괄호() 필요 없음

    
}