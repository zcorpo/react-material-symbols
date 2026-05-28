import type { SVGProps, JSX } from 'react'

export default function Airplay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m324-172 156-156 156 156H324Zm-192-80v-536h696v536H686v-22h120v-492H154v492h120v22H132Zm348-257Z" />
    </svg>
  )
}
