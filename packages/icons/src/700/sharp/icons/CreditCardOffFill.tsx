import type { SVGProps, JSX } from 'react'

export default function CreditCardOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M906-168 568-504h243v-129H439L248-826h658v658ZM149-504h217L237-633h-88v129ZM826-45l-89-90H55v-688h93l92 92H139L22-848l51-51L876-96l-50 51Z" />
    </svg>
  )
}
