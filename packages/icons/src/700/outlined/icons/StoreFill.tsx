import type { SVGProps } from 'react'

export default function StoreFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M148-733v-95h666v95H148Zm4.45 601v-245H100v-94l48.22-202h664.56L861-471v94h-53v245h-94v-245H569v245H152.45ZM247-226h228v-151H247v151Z" />
    </svg>
  )
}
