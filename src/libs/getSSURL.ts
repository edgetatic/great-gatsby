interface Options {
   width: number;
   height: number;
   scaleFactor: number;
   waitTime: number;
}

const service = 'https://snap.now.sh';

export function getScreenshotURL(pageURL: string, options: Options) {
   return `${service}/${pageURL}?w=${options.width}&h=${options.height}&sf=${options.scaleFactor}&wait=${options.waitTime}`;
}
