import Image from "next/image";

interface WeFiLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function WeFiLogo({ 
  width = 200, 
  height = 60, 
  className = "" 
}: WeFiLogoProps) {
  return (
    <Image
      src="/images/wefi.jpeg"
      alt="WeFi Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
