import type { SVGProps } from 'react'

export default function ElectricBolt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m297.92-99 168.7-295.46L140-432.54 616.15-861h46.7L492.23-565.15 820-527.46 344.23-99h-46.31Zm127.39-139.69 290.84-254.54-296.61-34.46 115.92-194.77-292.23 255.92 296.23 35-114.15 192.85ZM480-480.38Z" />
    </svg>
  )
}
