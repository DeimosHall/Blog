---
title: Comprime Video Usando La Terminal
date: 2023-07-25T21:59:06-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1EWxo425Vl7Imj94LxVaYmlhibk1c7LFs&sz=w1920-h1080
useRelativeCover: false
CoverCaption: Imagen por [Sanjeev Nagaraj](https://unsplash.com/@_sanjeev_ngrj_) en Unsplash
toc: false
showReadingTime: true
---

[FFmpeg](https://ffmpeg.org/download.html) es una herramienta de línea de comandos que ofrece muchas opciones para manipular archivos de video y audio. En este post te mostraré cómo comprimir un archivo de video usando FFmpeg.

Normalmente usamos FFmpeg en la terminal, también hay interfaces gráficas que lo usan como backend. Por ejemplo, [HandBrake](https://handbrake.fr/) es una interfaz gráfica que usa FFmpeg para comprimir archivos de video. Pero en este post usaremos FFmpeg directamente.

## Instalar FFmpeg

Para instalar FFmpeg en Ubuntu, puedes usar el siguiente comando:

```bash
sudo apt install ffmpeg
```

Para instalar FFmpeg en macOS, puedes usar el siguiente comando:

```bash
brew install ffmpeg
```

Para instalar FFmpeg en Windows, puedes descargar el binario de [aquí](https://ffmpeg.org/download.html).

## Comprimir Video

Necesitamos abrir una terminal e ir al directorio donde se encuentra el archivo de video. Luego podemos usar el siguiente comando para comprimirlo:

```bash
ffmpeg -i "input_file" -vcodec libx264 -crf 23 -acodec aac -b:a 128k -map_metadata 0 "output_file"
```

Donde:

- `{input_file}` es el nombre del archivo de video de entrada. Por ejemplo, `video.mp4`.
- `{output_file}` es el nombre del archivo de video de salida. Por ejemplo, `video_compressed.mp4`.
- `-vcodec libx264` es el códec de video a usar. En este caso usamos `libx264` que es un códec H.264/MPEG-4 AVC.
- `-crf 23` es la calidad del video. El valor puede estar entre 0 y 51, donde 0 es sin pérdida y 51 es la peor calidad. El valor por defecto es 23. Puedes usar un valor más bajo para obtener un video de mejor calidad, pero el tamaño del archivo será más grande.
- `-acodec aac` es el códec de audio a usar. En este caso usamos `aac` que es un códec Advanced Audio Coding.
- `-b:a 128k` es el bitrate de audio. El valor por defecto es 128k. Puedes usar un valor más bajo para obtener un archivo de menor tamaño, pero la calidad de audio será peor.
- `-map_metadata 0` es para copiar los metadatos del archivo de entrada al archivo de salida.

Por ejemplo, si queremos comprimir el archivo `video.mp4` y obtener el archivo `video_compressed.mp4`, podemos usar el siguiente comando:

```bash
ffmpeg -i "video.mp4" -vcodec libx264 -crf 23 -acodec aac -b:a 128k -map_metadata 0 "video_compressed.mp4"
```
