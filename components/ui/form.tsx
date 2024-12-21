import React, { ReactElement, ReactNode } from 'react';

interface FormFieldProps {
  icon: ReactElement;
  placeholder: string;
  type: string;
}

interface FormComponentProps {
  formFields: FormFieldProps[];
  action?: string;
  className?: string; // Optional for customizing styles
  children: ReactNode;
}

const FormComponent: React.FC<FormComponentProps> = ({ formFields, action = '', className = '', children }) => {
  return (
    <form action={action} className={`max-w-sm mx-auto flex flex-col gap-4 ${className}`}>
      {formFields.map((field, index) => (
        <div key={index}>
          <div className="relative">
            {/* Render Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {field.icon}
            </div>
            {/* Input Field */}
            <input
              id={`form-field-${index}`}
              type={field.type}
              placeholder={field.placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      ))}
      {
        children
      }
    </form>
  );
};

export default FormComponent;
