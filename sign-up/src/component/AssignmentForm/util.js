export const INPUT_TYPE={
    TEXT:'text',
    PASSWORD:'password',
    DROPDOWN:'dropdown'
}
const ERROR_MESSAGE={
    missingfield:' All fields are mandatory',
    name:'Name must be alphabet',
    email:'Email must contain @',
    phone:'Phone Number must contain only numbers',
    password:'Password must contain atleast 6 letters'
 }
export const FORM_FIELD={
    name:{
        type:INPUT_TYPE.TEXT,
        lableText:'Name',
        Validator:(value)=>{
            return /^[a-zA-Z]+[a-zA-Z\d\s]*$/.test(value)
            ?''
            :ERROR_MESSAGE.name
        }
    },
    userID:{
        type:INPUT_TYPE.TEXT,
        lableText:'User ID',
        Validator :()=>{}

    },
    email:{
        type:INPUT_TYPE.TEXT,
        lableText:'Email',
        Validator:(value)=>{
            return value.indexOf('@') > -1
            ?''
            :ERROR_MESSAGE.email
        }
    },
    phone:{
        type:INPUT_TYPE.TEXT,
        lableText:'Phone Number',
        Validator:(value)=>{
            return /^\d+$/.test(value)
            ?''
            :ERROR_MESSAGE.phone
        }
    },
    gender:{
        type:INPUT_TYPE.DROPDOWN,
        lableText:'Gender',
        Validator:()=>{},
        options:[
            {lable:'Male',
            value:'male',
            default:true
            },
            {lable:'Female',
            value:'female',
            default:false
            },
            {lable:'Others',
            value:'others',
            default:false
            },
        ]

    },

    password:{
        type:INPUT_TYPE.PASSWORD,
        lableText:'Password',
        Validator:(value)=>{
            return value.length >6
            ?''
            :ERROR_MESSAGE.password
        }
    },

}
function isAnyFieldEmpty(data){
return Object.values(data).some(val=> !val)
}
export function validateData(data){
    if(isAnyFieldEmpty(data)){
        return ERROR_MESSAGE.missingfield
    }
    let errorMessage=''
    Object.keys(FORM_FIELD)
    .some(fieldName =>{
        const {Validator} = FORM_FIELD[fieldName]
        let validationMessage= Validator && Validator(data[fieldName])
        if(validationMessage){
            errorMessage=validationMessage
            return true
        }
        return false 
    })
    return errorMessage
}


export function getInitialFormData(){
    return Object.keys (FORM_FIELD).reduce((acc,fieldName)=>{
        const{type,options}=FORM_FIELD[fieldName]
        return {
            ...acc, 
            [fieldName]: type=== INPUT_TYPE.DROPDOWN?options.filter(o=>o.default)[0].value 
            :''
        }
    },{})
}