import type { SVGProps, JSX } from 'react'

export default function SnippetFolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm480-180v-220h75l65 65v155H560Zm-60 60h260v-240L660-620H500v340Z" />
    </svg>
  )
}
