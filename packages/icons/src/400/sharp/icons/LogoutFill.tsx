import type { SVGProps } from 'react'

export default function LogoutFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h359v60H180v600h299v60H120Zm546-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
    </svg>
  )
}
