import { CustomKanban } from '@/modules/kanbanBoards/screens/customKanban'

const page = () => {
  return (
    <main className='[grid-column:breakout]'>
      <h1>Dashboard</h1>
      <CustomKanban />
    </main>
  )
}

export default page
