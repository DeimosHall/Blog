---
title: "New App: Decrypt It"
date: 2026-06-25T19:26:13-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: "post"
cover: "https://drive.google.com/thumbnail?id=1IvQbjbtUYJ_D4ESGC5MM5WnfocZ754Y8&sz=w1920-h1080"
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Are you familiar with `.dlc` files? If you have been forced to use JDownloader you may know the format, and you may also know [dcrypt.it](https://dcrypt.it/), a web app to decrypt those files.

But, why do I say "forced" to use JDownloader? It's because some websites where I get those completely legal download links seem to have a partnership with the tool, and they force me to use JDownloader to provide me the ability to download the content.

And about JDownloader as a tool, I don't like it. I'm glad it's multiplatform and it's available on Linux, that's great. But it's a Java application, it looks dated, it's bloated, it's not intuitive, and the worst part, it barely works. I could ignore almost everything about what I don't like about it, but it doesn't work for me. I've tried it on different computers, on Windows, Linux and macOS, and on different networks with and without a VPN. But it frequently stops downloading and many times it isn't even capable of starting a download.

As a downloader tool it doesn't work for me, so I always end up using the official web for whatever the download links belong to. And here comes another issue; it doesn't give me the download links in an easy way. I'm forced to create a DLC file, then go to [dcrypt.it](https://dcrypt.it/), and decrypt my file to finally get the plain text links.

There's nothing wrong with dcrypt.it, it does the job and it works fine. However, it's not open source, or at least I wasn't able to find its repo. And I didn't find an alternative, so I'm a little paranoid and afraid of losing this tool. The solution? My own alternative.

A web app is certainly a good approach for this tool, but I feel more attracted to building desktop apps. A couple of weeks ago I released [Metamorphosis](https://flathub.org/en/apps/dev.deimoshall.Metamorphosis), a linux desktop app to edit file metadata. So, I already knew how to do it and starting from scratch was less difficult this time.

My chosen stack was Rust + GTK because I love Rust and I love the look and feel of GNOME apps. The icing on the cake was a [DLC decoder crate](https://crates.io/crates/dlc-decoder) I found on [crates.io](https://crates.io/). I didn't even have to write the decoder myself, someone else did it years ago. Well, I had to fix some issues related to dependencies and now I maintain a fork because the author didn't answer my PR on GitHub, but I'm fine with that.

You can download it right now from Flathub.

{{< image
src="https://drive.google.com/thumbnail?id=1_pHHjrtAd1byNGkgsJl0BFAm60Wr9YU5&sz=w1920-h1048"
caption="Decrypt It on Flathub"
alt="Decrypt It on Flathub"
style="width: auto; border-radius: 10px;" >}}

But what about Windows and macOS? I'm not sure if enough people will use this software to even consider supporting operating systems I don't use for my personal stuff. But who knows, things may change in the future. In the meantime, I'm building this for myself and for everyone else who finds it useful.

I wish you a good day, and remember to be happy.