const URL = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0"



export const GetNewsAction =(data)=>{

    console.log("datatatata",data)


return async function(dispatch){
const data = await fetch (URL, {

    method:'GET'
})


const jsondata = await data.json();
console.log("Data from server",jsondata)

dispatch({
    type:'GET_NEWS',
    payload:jsondata
})


}



}