import type { SVGProps, JSX } from 'react'

export default function SplitSceneUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-140v-244.23h45.39v198.84h509.22v-198.84H780V-140H180Zm-80-317.31v-45.38h80V-820h600v317.31h80v45.38H100Zm634.61 271.92H225.39h509.22Z" />
    </svg>
  )
}
