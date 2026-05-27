import type { SVGProps } from 'react'

export default function Wallet({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-505h662v-91H149v91Zm484 278 178-150v-33H149v65l484 118Z" />
    </svg>
  )
}
