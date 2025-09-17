---
title: No more HDDs for me
date: 2025-09-13T18:09:51-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1iD3-Dqkx4Je0dIgHCsxqB1XhR8PAIw6e&sz=w1920-h1080
useRelativeCover: false
CoverCaption: HDD image from Flaticon.com
toc: false
showReadingTime: true
---

I started my self hosting journey a while ago using an old laptop with Debian 12. It was fine with the internal SSD for a while, but I rapidly had to buy more storage, and I chose a 4 TB external HDD for that purpose.

I didn't use the HDD for much time, in fact it has damaged sectors, but fortunately I didn't loose any data. The funniest part is I should have suspected of it since the beginning, because I was unable to format it using EXT4 neither on my desktop or laptop. To deal with that issue, I had to format it using BTRFS, it worked, yeah, but now I think the reason of why I wasn't able to format it using EXT4 could be because of the damaged sectors, but I didn't know it in that moment. Maybe it was damaged on shipping, who knows?

I decided to choose and HDD because of the price and the longer lifetime compared to SSDs. Both reason are true in theory, but in practice I've had SSDs with more lifetime than HDDs since I started using computers in my childhood. In fact, I'm using an old Dell Latitude E7250 as my home server, it's a 10 year old laptop and its SSD is working pretty fine. So, that fact my SSDs have last for more time than my HDDs become them in a cheaper option.

In my days at colleague, I used to carry a portable HDD. Surprisingly, it worked for a couple of years with no issues, and I'm really surprised because I carried it on my backpack carelessly. But one day I noticed it started to load my files very slow, I'm not sure what I researched about, but I ended in the conclusion it could has damaged sectors, so I transfered as much of my data as possible.

I don't remember if I lose data, but I'm sure I was scared of that possibility. Years later, I decided to buy an HDD for my new home lab hobby, bad idea. As I mentioned, it has damaged sectors, and this time I'm pretty sure of it. I'm now a linux user, so I ran the `badblocks` command to verify the HDD state, and sadly I can't trust on it for any serious work because I found damaged sectors.

I bought an external SSD the same day I discovered that problem. It was more expensive, yes, but I can trust that it will work correctly no matter if I have to move it and it suffer minor physical damage.

My home lab experiments started with an HDD, now I have and SSD, for how long? I don't know, but I'd bet that it will last for many years. I'll never buy an HDD again.
