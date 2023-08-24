
import { Card, Button } from 'flowbite-react';

export default function QCard({imgAdd, title, subtitle}) {
  return (
    <section className='max-w-[390px] md:max-w-[680px] mx-auto my-6'>
        <Card
        horizontal
        imgSrc={imgAdd}
        className='w-full mx-auto border-none'
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
            Noteworthy technology acquisitions 2021
            </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
        </p>
        <Button>
            Read More
        </Button>
        </Card>
    </section>
  )
}


