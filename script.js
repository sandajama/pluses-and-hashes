// Good Luck 💪🏾
function plusHashCount(str){
    let plus=0
    let hash=0
    let makearray=str.split("")
    let newarray=[]

    for(let i=0; i<makearray.length;i++){
        if(str[i]=="#"){
            hash ++
        }else if(str[i]=="+"){
            plus ++
        }
    }
    newarray.push(hash)
    newarray.push(plus)
    console.log(newarray);

    return makearray
}
plusHashCount("###+") 
plusHashCount("##+++#") 
plusHashCount("#+++#+#++#") 
plusHashCount("") 