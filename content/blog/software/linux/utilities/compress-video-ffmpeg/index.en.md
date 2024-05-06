---
title: "Compress Video Using The Terminal"
date: 2023-07-25T21:59:06-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: "post"
cover: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbv8cZi5uRW9p8DPN9hm9RwydR4IX61K4mGdz8EpEXQywabY2ii7Bk0156iITWuog3H_Cu7vnKqpAQVDIoWlmHN4IqIhl8i-Xw=s1600-rw-v1"
useRelativeCover: false
CoverCaption: "Photo by [Sanjeev Nagaraj](https://unsplash.com/@_sanjeev_ngrj_) on Unsplash"
toc: false
showReadingTime: true
---

[FFmpeg](https://ffmpeg.org/download.html) is a command line tool that offers a lot of options to manipulate video and audio files. In this post I will show you how to compress a video file using it.

We usually use FFmpeg in a terminal, there are also graphical interfaces that use it as a backend. For example, [HandBrake](https://handbrake.fr/) is a graphical interface that uses FFmpeg to compress video files. But in this post we will use FFmpeg directly.

## Install FFmpeg

To install FFmpeg in Ubuntu, you can use the following command:

```bash
sudo apt install ffmpeg
```

To install FFmpeg in macOS, you can use the following command:

```bash
brew install ffmpeg
```

To install FFmpeg in Windows, you can download the binary from [here](https://ffmpeg.org/download.html).

## Compress Video

We need to open a terminal and go to the directory where the video file is located. Then we can use the following command to compress it:

```bash
ffmpeg -i "input_file" -vcodec libx264 -crf 23 -acodec aac -b:a 128k -map_metadata 0 "output_file"
```

Where:

- `{input_file}` is the name of the input video file. For example, `video.mp4`.
- `{output_file}` is the name of the output video file. For example, `video_compressed.mp4`.
- `-vcodec libx264` is the video codec to use. In this case we use `libx264` which is a H.264/MPEG-4 AVC codec.
- `-crf 23` is the quality of the video. The value can be between 0 and 51, where 0 is lossless and 51 is worst quality. The default value is 23. You can use a lower value to get a better quality video, but the file size will be bigger.
- `-acodec aac` is the audio codec to use. In this case we use `aac` which is a Advanced Audio Coding codec.
- `-b:a 128k` is the audio bitrate. The default value is 128k. You can use a lower value to get a smaller file size, but the audio quality will be worse.
- `-map_metadata 0` is to copy the metadata from the input file to the output file.

For example, if we have a video file called `video.mp4` and we want to compress it to `video_compressed.mp4`, we can use the following command:

```bash
ffmpeg -i "video.mp4" -vcodec libx264 -crf 23 -acodec aac -b:a 128k -map_metadata 0 "video_compressed.mp4"
```
