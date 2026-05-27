import type { SVGProps, JSX } from 'react'

export default function EventList({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M592-172v-236h236v236H592Zm22-22h192v-192H614v192Zm-482-85v-22h320v22H132Zm460-273v-236h236v236H592Zm22-22h192v-192H614v192Zm-482-85v-22h320v22H132Zm578 369Zm0-380Z" />
    </svg>
  )
}
