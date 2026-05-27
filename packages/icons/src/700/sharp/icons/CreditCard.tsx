import type { SVGProps } from 'react'

export default function CreditCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-498h662v-98H149v98Zm0 404h662v-275H149v275Zm0 0v-502 502Z" />
    </svg>
  )
}
