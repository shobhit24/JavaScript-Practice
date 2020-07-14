const convertToRS = (dollar) => {
    if(typeof dollar === 'number')
        return dollar * 75
    else
        throw Error('Amount needs to be in number')
}

const myValue = convertToRS('five')
console.log(myValue);

try{
    const myvalue = convertToRs('five')
    console.log(myvalue);
}catch(e) {
    console.log(e);
}