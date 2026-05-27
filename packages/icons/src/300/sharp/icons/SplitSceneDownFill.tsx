import type { SVGProps } from 'react'

export default function SplitSceneDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-575.77V-820h600v244.23H180ZM180-140v-317.31h-80v-45.38h760v45.38h-80V-140H180Z" />
    </svg>
  )
}
