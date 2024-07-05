import { INPUT_TYPE,FORM_FIELD, getInitialFormData } from "./util";

import {useState} from 'react'
import { validateData } from "./util";
import { createPerson, getApiError } from "./apiutil";

function TextInput({field:{type , lableText , Validator},name,state,onChange}){
    return <div className="field-container">
        <label>{lableText}</label>
        <input 
            type={type}
            value={state} 
            onChange={(e)=>{
                onChange(e.target.value)
            }}        
        
        data-testid={name}/>
    </div>    
}
function DroupDownInput({field:{type , lableText, options},name}){
return<div className="field-container">
    <label>{lableText}</label>
    <select>
        {options.map(({lable,value})=>
            <option key={value} value={value}>{lable}</option>
        )}
    </select>
</div>
}
function Input({field,name, ...rest}){
    switch(field.type){
        case INPUT_TYPE.TEXT:
        case INPUT_TYPE.PASSWORD:
        return <TextInput 
         name={name} field={field} {...rest}/>
        case INPUT_TYPE.DROPDOWN:
            return <DroupDownInput    name={name}  field={field} {...rest}/>
        default:
            return null;
    }
}
export default function SignupForm({onPersonAdd }){
    const[data,setData]=useState(getInitialFormData)
    const [error,setError]=useState('')
    
    return<div className="form-container">
        {error && <div className="error-msg">{error}</div>}
        <form method="post" target="#" onSubmit={(e)=>{
            e.preventDefault()
            const errorMessage=validateData(data)
            if(!errorMessage){
                createPerson(data)
                    .then(response => {
                        if (response.success) {
                            onPersonAdd(response.person)
                            setData(getInitialFormData)
                        }else{
                            setError(getApiError(response))
                        } 
                    })
            }
                
            
        }} 
            
        >       
                {
                    Object.keys(FORM_FIELD).map(fieldName => {
                        const field=FORM_FIELD[fieldName]
                        return <Input
                        state={data[fieldName]}
                        onChange={(val)=>{
                            setData(data=>{
                                const updatedState={
                                    ...data,
                                    [fieldName]:val
                                }
                                setError(validateData(data))
                                return updatedState
                            })
                        }}                        
                        key={fieldName} field={field} name={fieldName}/>
                        
                    })
                }
                <div className='text-center'>
                    <button type="submit">Submit</button>
                </div>

        </form>

    </div>
}