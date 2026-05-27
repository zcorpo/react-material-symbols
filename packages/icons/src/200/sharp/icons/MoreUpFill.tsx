import type { SVGProps } from 'react'

export default function MoreUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M709.23-338.46v-370.77H360V-740h380v401.54h-30.77Zm-200 200v-370.77H160V-540h380v401.54h-30.77Z" />
    </svg>
  )
}
