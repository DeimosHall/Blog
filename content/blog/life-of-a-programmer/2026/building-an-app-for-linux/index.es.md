---
title: Construyendo Una App Para Linux
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

Hace aproximadamente un año comencé una transición de Google Fotos a Immich. Mi frustración llegó cuando algunos videos y fotos aparecieron en la parte superior de la línea de tiempo, y la razón es que los tomé de grupos de WhatsApp donde amigos los compartían. Podría usar simplemente la función incorporada de Immich para corregir la fecha, pero al parecer tomé la misma decisión con Google Photos hace años y ahora me arrepiento de ello.

Así que no, decidí que la fecha y hora deben estar incluidas en los archivos y para hacerlo, usé una herramienta frontend para [ExifTool](https://exiftool.org/) llamada [jExifToolGUI](https://hvdwolf.github.io/jExifToolGUI/) (sí, los programadores a veces no somos muy originales). El proyecto original tiene una GUI, pero solo funciona en Windows, por eso usé la alternativa que está escrita en Java y es multiplataforma. Funciona, sí, pero se siente como una herramienta de Windows que resulta extraña en mi sistema Linux. Y no solo eso, realmente me disgusta el aspecto de Windows, así que por mi salud mental necesitaba crear una aplicación nativa para Linux.

{{< image
src="https://drive.google.com/thumbnail?id=1AXUnPyaYP4E_CZsQKRIeyrVRUnMQLTfd&sz=w1352-h850"
caption="jExifToolGUI"
alt="jExifToolGUI"
style="width: auto; border-radius: 10px;" >}}

He probado varias bibliotecas/frameworks GUI para crear aplicaciones de escritorio, como [Tauri](https://v2.tauri.app/), [Slint](https://v2.tauri.app/), y [Compose Multiplatform](https://kotlinlang.org/compose-multiplatform/). Pero ninguna de ellas realmente cumplió mis necesidades, la más cercana es Compose Multiplatform, pero como quizás hayas notado, realmente me gusta Rust, así que quise intentar desarrollo nativo para Linux usando GTK4.

¿Por qué no QT, podrías preguntar. Bueno, no sé si tiene bindings de Rust, y ni siquiera quiero buscarlo. La razón es simple, QT y el escritorio Plasma están muy cerca de Windows en términos de apariencia.

{{< image
src="https://drive.google.com/thumbnail?id=1Oyk2eVi_2l9metK0wECp074PJkDXziAq&sz=w1920-h1080"
caption="Plasma desktop"
alt="Plasma desktop"
style="width: auto; border-radius: 10px;" >}}

Tenía una idea clara, algo simple para un primer lanzamiento. No demasiadas características ni elementos complicados de UI. No, solo un par de campos de texto que permitan al usuario ver y editar la fecha actual, hora y diferencia horaria.

Revisé un poco la documentación de [gtk-rs](https://gtk-rs.org/gtk4-rs/stable/latest/book/introduction.html) y me di cuenta de inmediato que no sería fácil. Luego encontré una [plantilla](https://gitlab.gnome.org/World/Rust/gtk-rust-template/-/blob/master/README.md?ref_type=heads) que aceleraría el desarrollo, pero decidí hacer un fork de una aplicación llamada [Switcheroo](https://gitlab.com/adhami3310/Switcheroo). Esta aplicación ya tiene funcionalidad de arrastrar y soltar y muestra una miniatura de la imagen.

Una vez que todo funcionaba, todo lo que tenía que hacer era eliminar los elementos de UI que no necesitaba, agregar mis campos de texto, y por supuesto la funcionalidad principal con exiftool funcionando por debajo.

{{< image
src="https://drive.google.com/thumbnail?id=1qdMfCOAduZUYEjAK4kE_8d6yZ0rZFZe5&sz=w800-h800"
caption="Metamorphosis"
alt="Metamorphosis"
style="width: auto; border-radius: 10px;" >}}

Funciona tal cual está, aunque no planeo mantenerlo tan simple. Me gustaría implementar un selector de fecha y mostrar algo como ***Zona Horaria*** con un selector adecuado en lugar de Offset Time. Mi objetivo es tener dos pestañas, una llamada ***Básico*** con este tipo de elementos de UI, y otra pestaña llamada ***Avanzado*** con datos crudos disponibles para ser modificados.

Procesar múltiples archivos a la vez es otra cosa que tengo en mente, pero no ahora. Avanzaré en pasos pequeños principalmente porque no estoy usando IA para generar el código. Sí, leíste bien, estoy programando a mano.

{{< image
src="https://drive.google.com/thumbnail?id=1KKinpHuP4FTll5Mz06JLI6pwvLmi4aV3&sz=w1250-h850"
caption="Software store"
alt="Software store"
style="width: auto; border-radius: 10px;" >}}

Ya está disponible para descargar en Flathub, así que solo tienes que buscar "Metamorphosis" en tu tienda de aplicaciones de software.

¿Encuentras útil esta aplicación para ti? Por favor envíame tus pensamientos, solicitudes de características, bugs o todo lo que quieras en un issue de GitHub [aquí](https://github.com/DeimosHall/Metamorphosis/issues), o si no te sientes cómodo con GitHub siéntete libre de enviarme un DM en mis redes sociales o un correo aquí: deimoshall.dev@proton.me

Te deseo un buen día y recuerda ser feliz.
