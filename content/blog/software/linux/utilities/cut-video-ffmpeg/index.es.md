---
title: "Cortar vídeo en una terminal de linux"
date: 2022-12-24T20:20:49-06:00
author: Francisco Torres
draft: false
section: "post"
Cover: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZXpY1OovMl62GevxRdf0jX82KE7VCvanJSLfwn-VFKeK1gqBCKL8l4RwRhvdmNkTN-ZWCh5d0-VCBnIrlfHF-SalrNc_45q-E=s1600-rw-v1"
useRelativeCover: false
CoverCaption: "Imagen por Wahid Khene en Unsplash"
toc: false
showReadingTime: true
---

Si quieres recortar un vídeo pero no quieres abrir un editor de vídeo, puedes usar
una utilidad de terminal llamada **"ffmpeg"**.

En sistemas basados en Debian/Ubuntu podemos instalarlo con:

```
sudo apt install ffmpeg
```
Ahora podemos usar el siguiente comando para cortar un vídeo:

```
ffmpeg -i input.mp4 -ss 01:29:23 -to 01:35:02 -c copy output.mp4
```
## Explicación

Con *"ffmpeg -i input.mp4"* decimos que queremos usar el vídeo llamado *"input.mp4"*. Es importante usar la extensión de archivo mp4.

En la parte *"-ss 01:29:23 -to 01:35:02"* decimos que queremos cortar el vídeo desde 01:29:23 hasta
01:35:02, el tiempo esta en el formado hora:minuto:segundo.

> **Nota:** Si tu archivo no es demasiado grande, no necesitas específicar la hora, puedes usar solamente 29:23 por ejemplo.

Finalmente, con *"-c copy output.mp4"* decimos que queremos copiar los codecs de audio y vídeo y además decimos que output.mp4 es el nombre para el vídeo cortado.