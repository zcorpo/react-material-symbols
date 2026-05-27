import type { SVGProps } from 'react'

export default function SignalCellularOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M185-154h589L480-448 185-154Zm661 72-50-50H132l332-332-299-299 16-16L862-98l-16 16Zm-18-154-22-22v-517L548-516l-16-16 296-296v592ZM677-387Zm-50 86Z" />
    </svg>
  )
}
