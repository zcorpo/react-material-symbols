import type { SVGProps } from 'react'

export default function DynamicFeedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-431h60v371h452v60H80Zm120-120v-431h60v371h453v60H200Zm120-120v-480h560v480H320Zm60-60h440v-298H380v298Z" />
    </svg>
  )
}
