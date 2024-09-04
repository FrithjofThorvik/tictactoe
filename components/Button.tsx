interface ButtonProps {
	text: string;
	onClick: VoidFunction;
}

const Button = ({ text, onClick }: ButtonProps) => {
	return (
		<button className="px-5 py-2 rounded-md bg-slate-500" onClick={onClick}>
			{text}
		</button>
	);
};
export default Button;
