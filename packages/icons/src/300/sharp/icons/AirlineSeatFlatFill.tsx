import type { SVGProps } from 'react'

export default function AirlineSeatFlatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M370.77-420v-240h477.84v240H370.77Zm-260 115.38V-350h738.46v45.38H110.77Zm29.62-145q-29.62-29.61-29.62-72.69 0-43.07 29.62-72.69 29.61-29.61 72.69-29.61 43.07 0 72.69 29.61 29.61 29.62 29.61 72.69 0 43.08-29.61 72.69Q256.15-420 213.08-420q-43.08 0-72.69-29.62Z" />
    </svg>
  )
}
