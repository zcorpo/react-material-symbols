import type { SVGProps } from 'react'

export default function PaymentCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h662v-502H149v502Zm80-80h337L380-651H229v342Zm328-209h174v-132H557v132ZM149-229v-502 502Z" />
    </svg>
  )
}
