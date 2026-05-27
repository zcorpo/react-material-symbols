import type { SVGProps } from 'react'

export default function Brick({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-474h123v-166h225v166h104v-166h225v166h123v474H80Zm60-60h680v-354H140v354Zm123-414h105v-106H263v106Zm329 0h105v-106H592v106ZM140-220h680-680Zm123-414h105-105Zm329 0h105-105Z" />
    </svg>
  )
}
