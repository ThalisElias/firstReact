import { ComponentProps } from "react";

interface IconButtProps extends ComponentProps<"button"> {
  transparent?: boolean;
}
// para que o transparent nao vá para dentro do btn, através de uma desestrurização de objetos.
export function IconButt({ transparent, ...props }: IconButtProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? "bg-black/20 border border-white/10 rounded-md p-1.5"
          : "bg-white/10 border border-white/10 rounded-md p-1.5"
      }
    />
  );
}
