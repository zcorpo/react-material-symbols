import type { SVGProps } from 'react'

export default function PausePresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M361-315h71v-330h-71v330Zm167 0h71v-330h-71v330ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
