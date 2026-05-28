import type { SVGProps, JSX } from 'react'

export default function Close({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-201.26 201.26-249l231-231-231-231L249-758.74l231 231 231-231L758.74-711l-231 231 231 231L711-201.26l-231-231-231 231Z" />
    </svg>
  )
}
