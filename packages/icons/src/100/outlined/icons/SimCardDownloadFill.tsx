import type { SVGProps, JSX } from 'react'

export default function SimCardDownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m481-325 122-123-16-16-95 94v-200h-22v200l-96-94-16 16 123 123ZM266-132q-23 0-38.5-15.5T212-186v-432l210-210h272q23 0 38.5 15.5T748-774v588q0 23-15.5 38.5T694-132H266Z" />
    </svg>
  )
}
