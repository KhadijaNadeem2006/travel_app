 import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'green' | 'white' | 'dark';
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  const baseStyle = "flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold transition-all";
  const styles = {
    green: "bg-[#30AF5B] text-white hover:bg-black",
    white: "bg-white text-black border border-gray-300",
    dark: "bg-[#292C27] text-white",
  };

  return (
    <button type={type} className={`${baseStyle} ${styles[variant]} ${full? 'w-full' : ''}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      {title}
    </button>
  );
};
export default Button;