import BlogCard from '@/components/Blog/BlogCard'
import MainSection from '@/components/commons/MainSection'

const BlogPage = () => {
  const title = [
    {
      title: 'Lịch sử hình thành Givral'
    },
    {
      title: 'Bánh trung thu'
    },
    {
      title: 'Bánh noel'
    },
    {
      title: 'Bánh sinh nhật'
    }
  ]

  return (
    <MainSection className='bg-white'>
      <div className='grid grid-cols-12 gap-4'>
        {title.map((item, index) => (
          <div key={index} className='col-span-4 max-lg:col-span-6 max-sm:col-span-full'>
            <BlogCard title={item.title}/>
          </div>
        ))}
      </div>
    </MainSection>
  )
}

export default BlogPage
