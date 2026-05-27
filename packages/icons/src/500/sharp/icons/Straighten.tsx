import type { SVGProps } from 'react'

export default function Straighten({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.5-235.46v-489.08h811v489.08h-811Zm68.13-68.37h674.74v-352.34H690V-480h-60v-176.17H510V-480h-60v-176.17H330V-480h-60v-176.17H142.63v352.34ZM270-480h60-60Zm180 0h60-60Zm180 0h60-60Zm-150 0Z" />
    </svg>
  )
}
