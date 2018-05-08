function wrap (string,col){
    let arrayOfSplitString = string.split(" ")
    let holderString=""
    let returnStr= ""

    //initilize a charchter count and compare against column
   arrayOfSplitString.forEach((word)=>{
    // if return holderstring is > 20 insert newline in holder string
    // concat holder string with return string 
    // set holder string to empty string rinse reapeat 
    if(word.length > col ){
        holderString.concat(word.slice(0,col-1).concat("-"))
        let innerHold = word.slice(col-1)
    }



   })
    return string
}


module.exports = wrap

