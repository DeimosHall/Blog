---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: {{ .Site.Params.defaultAuthor }}
draft: false
section: "post"
cover: "cover.jpg"
useRelativeCover: true
CoverCaption: ""
toc: false
showReadingTime: true
---

