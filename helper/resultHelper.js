export default async function resultHandler(type, id) {
    var result= [];
    var newResult=[];
    if(id=== undefined){
        var result = await type.find().lean();
        var newResult = result.map((p) => {
            const k = JSON.stringify(p);
            const l = JSON.parse(k)
            return l;
        })
    }else{
        var result = await type.findById(id).lean();
        var testResult = JSON.stringify(result);
        const testResult2 = JSON.parse(testResult);
        return testResult2;
    }
  


    return newResult;
}
