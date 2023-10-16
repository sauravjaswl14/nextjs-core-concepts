import Image from 'next/image'
import { getFeaturedEvents } from '@/data/dummy-data'
import EventList from '../../components/events/event-list'

export default function Home() {

  const featuredEvents = getFeaturedEvents()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2 className='text-4xl font-bold'>Featured Events</h2>
      <EventList items={featuredEvents} />

    </main>
  )
}
