import type { SVGProps } from 'react'

export default function PinboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m254-80-30-30v-173H80v-68l62-111v-112H80v-60h348v60h-62v112l62 111v68H284v173l-30 30Zm237-80v-60h329v-520H80v-60h800v640H491Z" />
    </svg>
  )
}
