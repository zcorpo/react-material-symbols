import type { SVGProps } from 'react'

export default function FitPageWidthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-371v-219L250-480l110 109Zm351-109L601-590v219l110-109ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
