---
title: "Cut video on a linux terminal"
date: 2022-12-24T20:20:49-06:00
author: Francisco Torres
draft: false
section: "post"
cover: "cover.jpg"
useRelativeCover: true
CoverCaption: "Photo by Wahid Khene on Unsplash"
toc: false
showReadingTime: true
---

If you want to cut a video but you don't want to open a video editor, you can
use a terminal utility called **"ffmpeg"**.

On Debian/Ubuntu based systems we can install it with:

```
sudo apt install ffmpeg
```
Now we can use the following command to cut a video:

```
ffmpeg -i input.mp4 -ss 01:29:23 -to 01:35:02 -c copy output.mp4
```

## Explanation

With *"ffmpeg -i input.mp4"* we say we want to use the video called *"input.mp4"*. It's important to use the mp4 file extension.

In the part *"-ss 01:29:23 -to 01:35:02"* we say we want to cut the video from 01:29:23 to 01:35:02, the time is in the format hour:minute:second.

> **Note:** if your file is not too longer, you don't need to specify the hour, you can just use 29:23 for example.

Finally, with *"-c copy output.mp4"* we say we want to copy the audio and video codecs and we also say that output.mp4 is the name for the cutted video.