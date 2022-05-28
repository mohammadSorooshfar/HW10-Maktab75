function validateJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
let json = '{"firstName":"mohammad","lastName":"sorooshfar"}';
let notJson='{firstName:"mohammad","lastName":"sorooshfar"}'
if(validateJson(notJson)){
    console.log("valid");
}else{
    console.log("invalid");
}
