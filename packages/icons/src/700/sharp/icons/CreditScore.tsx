import type { SVGProps } from 'react'

export default function CreditScore({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-642h662v-89H149v89ZM55-135v-691h851v323H149v274h236v94H55Zm554 80L428-237l64-63 117 119 231-231 63 63L609-55ZM149-229v-155 121-468 502Z" />
    </svg>
  )
}
