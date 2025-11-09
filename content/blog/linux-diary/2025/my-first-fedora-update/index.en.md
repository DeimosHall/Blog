---
title: My First Fedora Update | The Good And The Bad
date: 2025-11-08T07:11:39-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1L5r6yyV1XYMTXDklfKR61wUFasBQp9db&sz=w1920-h1080
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

I'm not sure how many times I tried to use a Linux distro as my main OS in the past, but this is the first time it lasted long enough to allow me to do the transition between major versions. In fact, this is also my first time using Fedora as my daily driver, so my experience with this process has been only with this distro.

I found out about the new Fedora 43 release on Twitter and I was excited to update, but at the same time I was expecting bugs to happen, so I waited a couple of days before making the decision.

## The good

I don't know how different the process was in the past, but right now I find it very user-friendly, it's just pressing a button in the Gnome Software store.

It took a while to download everything, but once done, I just had to reboot the system and voilà, I was in Fedora 43.

Another important thing is that before clicking on restart or update (I don't remember which), it told me one application wouldn't be compatible with Fedora 43, so it would be uninstalled during the process.

I find this very useful because if it's a tool you really need, you can wait for an app update, try to fix it yourself, or even migrate to another distro if there's no solution. The fact that it tells you this beforehand is really good in my opinion.

If you're curious, the app was a YouTube Music desktop client (no ads, btw), but since I had installed it manually, I just had to install it again and it worked! The app is available at the following link if you want to try it: https://github.com/pear-devs/pear-desktop.

## The bad

Ok, I told you I waited a couple of days before updating, but FOMO was stronger than my willpower, and I ended up installing the update sooner than I wanted. So the first bug appeared, although I didn't notice it on the first day.

I don't know why, but I had a lot of issues with thumbnails in the file browser (Nautilus) since day one of installing Fedora 42. They just didn't work sometimes, and some of my pictures appeared without thumbnails, so when I updated to Fedora 43 and found a similar situation, I just ignored it.

However, I got frustrated when I tried to apply the fix I had found to force thumbnail generation and it didn't work. I can't use a file browser that doesn't show me thumbnails of my files, so I described my issue to Gemini and surprisingly, it did the trick.

I just had to install a new thumbnail generator tool that for some reason was missing in the first place. But anyway, if you'd like to know more about it, I found someone who did better research than me in [the following post](https://itsfoss.com/image-thumbnails-missing-gnome/).

## Fedora, yes or no?

I don't know if I will find more issues in the coming days, but at least right now, I can say I'm satisfied with the update from Fedora 42 to 43. Having to deal with that small issue is something I wish I hadn't had to do, but I'm a software engineer, and I know these kinds of bugs happen even when you do your best to test everything before a stable release.

I love Gnome's look and feel (with a plus of extensions), and having "quick" access to recent updates is something I like about Fedora. I can't say it's a perfect distro, but it has been stable enough for my needs, so I will continue using it for more time.
