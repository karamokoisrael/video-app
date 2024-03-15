import { Video } from 'expo-av';
export function generateRandomArray(totalCount: number) {
    const generatedArray = [];
    for (let i = 1; i <= totalCount; i++) {
        generatedArray.push(i);
    }
    return generatedArray;
}
export function generateRandomNumber(n: number, m: number) {
    if (n > m) {
        [n, m] = [m, n];
    }

    const randomDecimal = Math.random();

    const randomInRange = randomDecimal * (m - n) + n;

    return Math.round(randomInRange);
}


const videosLinks = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
]

export function generateRandomVideoLink() {
    // const index = generateRandomNumber(0, videosLinks.length - 1);
    // console.log(index)
    // return videosLinks[index];
    return "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

export function generateRandomImageLink() {
    const key = generateRandomNumber(0, 10000);
    return `https://picsum.photos/500/500?key=${key}`
}