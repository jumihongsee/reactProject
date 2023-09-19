import{ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import "../styles/default.css"
// import "../styles/globals.css"
// 모든 페이지에서 하는 공통 설정들을 여기서 진행한다 !!
export default function App({ Component, pageProps }) {

  const client = new ApolloClient({ 
    uri : "http://backend-example.codebootcamp.co.kr/graphql", // 강의용
     //uri : "http://backend-practice.codebootcamp.co.kr/graphql", // 포폴용
    cache : new InMemoryCache()
  });


  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
   
  )
}
