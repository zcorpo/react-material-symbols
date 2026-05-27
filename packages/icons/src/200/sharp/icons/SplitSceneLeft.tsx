import type { SVGProps, JSX } from 'react'

export default function SplitSceneLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M581.54-200v-30.77h187.69v-498.46H581.54V-760H800v560H581.54Zm-116.92 80v-80H160v-560h304.62v-80h30.76v720h-30.76Zm304.61-609.23v498.46-498.46Z" />
    </svg>
  )
}
