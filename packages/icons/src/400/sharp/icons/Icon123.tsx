import type { SVGProps, JSX } from 'react'

export default function Icon123({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-360v-192h-60v-48h108v240h-48Zm132 0v-144h132v-48H352v-48h180v144H400v48h132v48H352Zm248 0v-48h132v-48h-92v-48h92v-48H600v-48h180v240H600Z" />
    </svg>
  )
}
