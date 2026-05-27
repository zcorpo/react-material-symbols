import type { SVGProps } from 'react'

export default function SplitscreenLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-289h241v-382H510v382Zm-301 0h241v-382H209v382ZM55-135v-691h851v691H55Zm756-94v-502H149v502h662ZM149-731v502-502Z" />
    </svg>
  )
}
