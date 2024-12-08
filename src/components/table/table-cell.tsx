import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td
      //a desestruturização do props tem que vir primeiro para o twmerge ter prioridade e conseguir unir com a propiedade que será passada no td diferente, nesse casa com a className="text-right"
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    />
  );
}
