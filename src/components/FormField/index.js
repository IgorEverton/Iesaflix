import React from "react";

function FormField({ label, type, nome, value, onChange}){
    return(
        <div>
            <label>
                {label}: 
                <input
                    type={type}
                    name={nome}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
        )
}

export default FormField;