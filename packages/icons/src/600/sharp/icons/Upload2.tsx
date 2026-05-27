import type { SVGProps } from 'react'

export default function Upload2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-65.87v-79.22H814.7v79.22H145.87Zm194.91-179.22v-254.56H167.91L480-894.7l311.65 395.05H619.78v254.56h-279ZM420-324.87h120v-271h74.96L480-764.48 345.04-595.87H420v271Zm60-271Z" />
    </svg>
  )
}
