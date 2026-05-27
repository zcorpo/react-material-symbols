import type { SVGProps } from 'react'

export default function AndroidCellDual5Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-354v-207.92h58.46V-354H80Zm185.77 0v-263.23h58.46V-354h-58.46Zm185 0v-296.69h58.46V-354h-58.46Zm185.77 0v-332.54H695V-354h-58.46Zm185 0v-406H880v406h-58.46ZM80-200v-104.77h58.46V-200H80Zm185.77 0v-104.77h58.46V-200h-58.46Zm185 0v-104.77h58.46V-200h-58.46Zm185.77 0v-104.77H695V-200h-58.46Zm185 0v-104.77H880V-200h-58.46Z" />
    </svg>
  )
}
