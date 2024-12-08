import { ComponentProps } from "react";

//chamar as propiedades de um elemento nativo do HTML, com isso nao precisa se criar uma props. para cada propiedade que se utilizará
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  return <a {...props} className="font-medium text-sm" />;
}
