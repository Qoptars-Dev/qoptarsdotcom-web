'use client';

import { Timeline } from 'flowbite-react';

export default function VerticalTimeline() {
  return (
    <section className='max-w-[280px] sm:max-w-md mx-auto my-4'>
        <Timeline>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>
                August 2020
            </Timeline.Time>
            <Timeline.Title className='text-gray-100 font-Mont font-medium'>
                Company Founded.
            </Timeline.Title>
            <Timeline.Body>
                <p className="text-gray-400">
                Built First Prototype and started working with initial users.
                </p>
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>
                October 2021
            </Timeline.Time>
            <Timeline.Title className='text-gray-100 font-Mont font-medium'>
                Pre-Incubation at IIT Hyderabad 
            </Timeline.Title>
            <Timeline.Body>
                <p className="text-gray-400">
                Prototype Version 2 was developed and tested. Got selected for Pre-Incubation Support at IIT Hyderabad.
                </p>
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>
                April 2022
            </Timeline.Time>
            <Timeline.Title className='text-gray-100 font-Mont font-medium'>
                Built Our First MVP(Minimal Viable Product). Tested our MVP with several clients.
            </Timeline.Title>
            <Timeline.Body>
                <p className="text-gray-400">
                Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </p>
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>
                October 2022
            </Timeline.Time>
            <Timeline.Title className='text-gray-100 font-Mont font-medium'>
                Launched a FPV Product.
            </Timeline.Title>
            <Timeline.Body>
                <p className="text-gray-400">
                Launched AirSonic S, a durable FPV drone. Started getting pre-orders for AirSonic S.
                </p>
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
            <Timeline.Time>
                January 2023
            </Timeline.Time>
            <Timeline.Title className='text-gray-100 font-Mont font-medium'>
                Incubation Support.
            </Timeline.Title>
            <Timeline.Body>
                <p className="text-gray-400">
                Got selected for Incubation Support at IIT Hyderabad and received funding. Launched AirCine. Vayu Drone is coming soon.
                </p>
            </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
        </Timeline>
    </section>
  )
}


