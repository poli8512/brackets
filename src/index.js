module.exports = function check(str, bracketsConfig) {
    let strArr=str.split('')
    let stack=[]
    let mapBr= new Map([...bracketsConfig])
    let newA=strArr
    let rec=(ar,mp)=>{
        let j=0
        do{
            // console.log(ar[j])
            for(let [o,c] of mapBr){
                if(ar[j]==o && ar[j+1]==c){
                    newA.splice(j,2)
                    console.log(newA)
                    rec(newA,mapBr)

                }
            }
            j++
        }
        while(j<ar.length)

    }

    rec(strArr,mapBr)
    console.log("NEW",newA)
    if(!newA || JSON.stringify(newA).length>3){
        return false
    }else{
        return true
    }
}
