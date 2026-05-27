import type { SVGProps } from 'react'

export default function SwitchAccessFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297.69-297.69v-365h365v365h-365Zm-157.69 0v-50h50v50h-50Zm0-315v-50h50v50h-50ZM297.69-140v-50h50v50h-50Zm0-630v-50h50v50h-50Zm315 630v-50h50v50h-50Zm0-630v-50h50v50h-50ZM770-297.69v-50h50v50h-50Zm0-315v-50h50v50h-50Z" />
    </svg>
  )
}
