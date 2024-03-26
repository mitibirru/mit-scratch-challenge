import { ChangeEventHandler } from 'react';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'className' | 'style'> {
	value: string | number | any;
	placeholder?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	inputType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

function Input(props: InputProps) {
	const { onChange, value, placeholder = '', inputType = 'text' } = props;
	return <input type={inputType} {...props} placeholder={placeholder} value={value} onChange={onChange} className="w-full mx-2 px-2 rounded-lg outline-none text-black p-1 appearance-none focus:appearance-none" />;
}

export default Input;
