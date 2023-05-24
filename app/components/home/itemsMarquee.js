import React from 'react'

export const ItemsMarquee = () => {
    return (
        <div class="relative w-full flex overflow-x-hidden">
            <div class="py-12 animate-marquee whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>
            <div class="py-12 animate-marquee whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>
        </div>

    )
}
