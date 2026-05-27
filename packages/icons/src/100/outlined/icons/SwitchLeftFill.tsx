import type { SVGProps } from 'react'

export default function SwitchLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-279 199-480l201-201v402Zm-26-63v-276L236-480l138 138Zm186 63v-402l201 201-201 201Z" />
    </svg>
  )
}
