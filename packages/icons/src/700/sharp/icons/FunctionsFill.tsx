import type { SVGProps, JSX } from 'react'

export default function FunctionsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M215-135v-96l269-249-269-249v-97h531v146H452l208 200-208 200h294v145H215Z" />
    </svg>
  )
}
