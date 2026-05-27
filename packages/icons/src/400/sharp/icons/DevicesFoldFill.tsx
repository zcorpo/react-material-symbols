import type { SVGProps } from 'react'

export default function DevicesFoldFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M410-120v-724l260-114v118h210v720H410Zm127-60h283v-600H670v544l-133 56ZM80-780v-60h60v60H80Zm0 660v-60h60v60H80Zm0-165v-60h60v60H80Zm0-165v-60h60v60H80Zm0-165v-60h60v60H80Zm165-165v-60h60v60h-60Zm0 660v-60h60v60h-60Z" />
    </svg>
  )
}
