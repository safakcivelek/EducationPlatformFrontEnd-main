import React from 'react';
import { useField } from 'formik';

type Props = {
    name: string;
    type?: string;
    id?: string;
    checked?: boolean;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    disabled?: boolean;
    className?: string; 
};

const FormikInput: React.FC<Props> = ({ name, type = 'text', checked, disabled, placeholder, onChange, id, value, className }) => {
    const [field, meta] = useField(name);

    return (
        <div className="input-wrapper">
            <input
                {...field}
                id={id}
                type={type}
                checked={checked}
                placeholder={placeholder}
                onChange={(e) => {
                    field.onChange(e); // Formik'in kendi onChange handler'ını çağırın
                    onChange(e); // Dışarıdan gelen onChange handler'ını çağırın
                }}
                value={value}
                disabled={disabled}
                className={className} // input elementine className prop'unu ekleyin
            />
            {meta.touched && meta.error && (
                <div className="input-feedback">{meta.error}</div>
            )}
        </div>
    );
};

export default FormikInput;