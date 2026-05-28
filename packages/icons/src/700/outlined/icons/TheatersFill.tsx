import type { SVGProps, JSX } from 'react'

export default function TheatersFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M143-103v-754h83v48h108v-48h292v48h108v-48h83v754h-83v-49H626v49H334v-49H226v49h-83Zm83-131h108v-109H226v109Zm0-192h108v-108H226v108Zm0-191h108v-109H226v109Zm400 383h108v-109H626v109Zm0-192h108v-108H626v108Zm0-191h108v-109H626v109Z" />
    </svg>
  )
}
