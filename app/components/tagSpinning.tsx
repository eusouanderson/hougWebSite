import Image from 'next/image'
import React from 'react'

export const TagSpinning = () => {
    return (
        <div className="main">
            <Image src="/svg/HOUG.svg" width="40" height="40" alt='Image'/>
                <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                    <defs>
                        <path id="circle" d="M 100, 100
                            m -75, 0
                            a 75, 75 0 1, 0 150, 0
                            a 75, 75 0 1, 0 -150, 0"
                        >
                        </path>
                    </defs>
                    <text width="400">
                        <textPath alignment-baseline="top" href="#circle" className="text-spinning">
                            Você com identidade através da HOUG
                        </textPath>
                    </text>
                </svg>
        </div>
    )
}
