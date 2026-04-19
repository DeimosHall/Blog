---
title: Building An App For Linux
date: 2026-04-18T13:04:50-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1d61z77KY4r8MU66JU4n0GcY0TrDZ1_qJ&sz=w1920-h1080
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

I started a transition from Google Photos to Immich around a year ago. My frustration came when some videos and photos appeared at the top of the timeline, and the reason is I took them from WhatsApp groups where friends shared them. I could just use the built-in Immich feature to fix the date, but apparently I took the same decision with Google Photos years ago and now I regret about it.

So no, I decided the date and time must be included in the files and to do so, I used a frontend tool for [ExifTool](https://exiftool.org/) called [jExifToolGUI](https://hvdwolf.github.io/jExifToolGUI/) (yeah, programmers aren't very original sometimes). The original project has a GUI, but it only works on Windows, that's why I used the alternative that is written in Java and it's multiplatform. It works, yes, but it looks like a Windows tool that feels alien on my Linux system. And not only that, I really dislike the Windows look and feel, so for my mental health I needed to build a native linux app.

{{< image
src="https://drive.google.com/thumbnail?id=1AXUnPyaYP4E_CZsQKRIeyrVRUnMQLTfd&sz=w1352-h850"
caption="jExifToolGUI"
alt="jExifToolGUI"
style="width: auto; border-radius: 10px;" >}}

I've tested various GUI libraries/frameworks to build desktop apps, such as [Tauri](https://v2.tauri.app/), [Slint](https://v2.tauri.app/), and [Compose Multiplatform](https://kotlinlang.org/compose-multiplatform/). But none of them really satisfied my needs, the closest one is Compose Multiplatform, but as you may have realized I really like Rust, so I wanted to try native linux development using GTK4.

Why not QT, you may ask. Well, I don't know if it has Rust bindings, and I don't even want to look for it. The reason is simple, QT and the Plasma desktop are so close to Windows in terms of look and feel.

{{< image
src="https://drive.google.com/thumbnail?id=1Oyk2eVi_2l9metK0wECp074PJkDXziAq&sz=w1920-h1080"
caption="Plasma desktop"
alt="Plasma desktop"
style="width: auto; border-radius: 10px;" >}}

I had a clear idea, something simple for a first release. Not too many features or complex UI elements. No, just a couple of text fields that let the user see and edit the current date, time, and offset time.

I checked the [gtk-rs](https://gtk-rs.org/gtk4-rs/stable/latest/book/introduction.html) documentation a little and I immediately realized it wouldn't be easy. Then I found a [template](https://gitlab.gnome.org/World/Rust/gtk-rust-template/-/blob/master/README.md?ref_type=heads) that would speed up the development, but I decided to fork an app called [Switcheroo](https://gitlab.com/adhami3310/Switcheroo). This app already has a drag and drop functionality and displays a thumbnail of the image.

Once I had everything working, all I had to do was to remove the UI elements I didn't need, add my text fields, and of course the core functionality with exiftool under the hood.

{{< image
src="https://drive.google.com/thumbnail?id=1qdMfCOAduZUYEjAK4kE_8d6yZ0rZFZe5&sz=w800-h800"
caption="Metamorphosis"
alt="Metamorphosis"
style="width: auto; border-radius: 10px;" >}}

It works as it is, although I'm not planning to keep it that simple. I'd like to implement a date picker, and show something like ***Time Zone*** with a proper selector instead of the offset time. My goal is to have two tabs, one called ***Basic*** with these kind of UI elements, and another tab maybe called ***Advanced*** with raw data available to be modified.

Processing multiples files at once is another thing I have in mind, but not right now. I'll go in small steps mainly because I'm not using AI to generate the code. Yes, you read well, I'm coding by hand.

{{< image
src="https://drive.google.com/thumbnail?id=1KKinpHuP4FTll5Mz06JLI6pwvLmi4aV3&sz=w1250-h850"
caption="Software store"
alt="Software store"
style="width: auto; border-radius: 10px;" >}}

It is already available for download on Flathub, so you just have to look for "Metamorphosis" on your software app store.

Do you find this app useful to you? Please send me your thoughts, feature requests, bugs or everything you want on a GitHub issue [here](https://github.com/DeimosHall/Metamorphosis/issues), or if you're not comfortable with GitHub feel free to send me a DM on my social media or an email here: deimoshall.dev@proton.me

I wish you a good day, and remember to be happy.
