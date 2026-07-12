---
title: "My Pc Is About to Die"
date: 2026-07-11T20:33:43-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: "post"
cover: "https://drive.google.com/thumbnail?id=1fbOYMkWedDnrK9zZYhjZnlkrh1SzevTj&sz=w5472-h3096"
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

This is another don't tell me your life post. But I want to.

The thing is, two days ago I left my desktop for a couple of minutes. When I came back, I saw a black screen. No error messages, just a small white line in the top left corner, like indicating I could type, but I couldn't.

I thought "anyway, maybe it's just something that made my Linux system crashed". So I rebooted the PC with the physical button, but after the BIOS logo I was surprised with a Windows error screen. The craziest part is I uninstalled Windows more than a year ago.

It was quite late at that moment, so I waited until yesterday's evening to fix it. I found in the BIOS settings that the Fedora entry was no longer there, only Windows was listed. My assumption was something happened in the background when I left my computer, maybe an update that touched something related to that. But I don't know how system updates work, so I'm just assuming things that may be not possible.

It was the second time I had to go through the process of reinstalling/fixing the grub. The first time happened to me when I effectively had Windows in dual boot. This second time things were more familiar, although I also had to look for tutorials, step-by-step guides and some dummy questions to Gemini.

I fixed it. Yeah, but in the process of booting from the USB drive live session I got a kernel panic. My first kernel panic. I didn't even know how that screen looks like, but I have to say it looks cool.

{{< image
src="https://drive.google.com/thumbnail?id=1rD5XCIj_ksVfnoG-MPAMPTkXWkGBisER&sz=w1280-h720"
caption="Kernel Panic"
alt="Kernel Panic"
style="width: auto; border-radius: 10px;" >}}

However, having a kernel panic while trying to boot in a live session from a USB drive made me think something wrong could be with my hardware, because I remember I read/watched/listened to someone somewhere saying that. In fact, I also watched other error messages listed on a black screen after a second try of booting into the USB drive, but I couldn't take a picture of them.

Once I recovered my Fedora boot entry, I logged into my system and everything looked fine. I used my PC for a couple of hours, and then I turn it off. The next morning (today) I found another screen with more error messages and this time they were clear and explicit. Hardware Error.

{{< image
src="https://drive.google.com/thumbnail?id=131SXCFp-PFaEqqR10Bm6p1OXgJfR2Uzy&sz=w1280-h720"
caption="Hardware Error"
alt="Hardware Error"
style="width: auto; border-radius: 10px;" >}}

Could my CPU really be failing? Maybe it was just the lack of maintenance, I thought. I changed the thermal paste thinking that maybe the CPU was overheating, and apparently it was the case because after that the PC worked again.

HOWEVER. I have Jellyfin installed on my PC, and while I was trying to watch a movie, my PC crashed. It did it three times.

It was enough. Those crashes made me want try to know if it was a software issue. So I tried to put my system into high usage by gaming for a while. But nothing happened. Then I re-tried replicating the Jellyfin issue and the system crashed again.

I'm at a point where I don't know if I'm having software or hardware issues. Is it something wrong with Fedora? With the Linux kernel? With my CPU? With my RAM sticks? I only hope I don't have to buy hardware with today's prices.