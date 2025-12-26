import cnameMd from '@/components/A-Record-vs-CNAME.md?raw'
import type { Blog } from '@/components/blog/Blog.ts'

export const blogs: Blog[] = [
  {
    technicalName: 'a-record-vs-cname',
    title: 'A-Record vs CNAME',
    description:
      'In this Blog I will explain the difference between A-Record and CNAME and when to use which one',
    mdFile: cnameMd,
  },
]
