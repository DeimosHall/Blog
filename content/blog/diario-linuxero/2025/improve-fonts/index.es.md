---
title: Mejorar renderizado de fuentes en Linux
date: 2025-07-20T13:07:34-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1a8OFLR1Btg4uSVTwJow69ffQcyBZcvgQ&sz=w1920-h1080
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Una de las cosas que más echo de menos desde que me cambie de macOS a Linux es como de bien se ven las fuentes en macOS. Si has tenido la oportunidad de ver este detalle en una mac sabras a lo que me refiero, tienen un estilo muy particular que resulta muy agradable al momento de leer.

## El script

Hay un usuario en GitHub que ha creado un script para realizar ciertos ajustes en configuraciones del sistema que mejoran la visibilidad de las fuentes, especialmente las de tamaño pequeño y mediano. Esto no es para cambiar la fuente del sistema, si tú tienes alguna personalizada no la va a reemplazar por ninguna otra, así que no te preocupes por eso.

Lo que tenemos que hacer es ir a la [sección de releases del repositorio](https://github.com/maximilionus/lucidglyph/releases) y descargar el código fuente, el zip o el tar gz como más te guste.

{{< image
src="https://drive.google.com/thumbnail?id=1Ywch0u98AiuH72W26myeKIeJLgB5GtBM&sz=w1158-h404"
alt="Download assets"
style="width: auto; border-radius: 10px;" >}}

Si estás en Ubuntu, Fedora Workstation o cualquier otra distro que use Gnome como entorno de escritorio basta con hacer doble clic sobre el archivo que descargamos para descomprimirlo.

Ahora entramos a la carpeta del proyecto y hacemos click derecho y luego en abrir en consola.

{{< image
src="https://drive.google.com/thumbnail?id=1d1eYc-3VCOjQfsqyGY1RjBe30WUrkmq5&sz=w863-h589"
alt="Open terminal"
style="width: auto; border-radius: 10px;" >}}

Una vez aquí solo tenemos que ejecutar el siguiente comando:

```bash
sudo ./lucidglyph.sh install
```

Y deberíamos de ver un mensaje de success indicando que todo salió bien, ahora solo queda reiniciar el equipo para ver ese cambio en las fuentes. Pero antes te recomiendo que tomes un par de capturas de pantalla donde aparezca texto para que puedas ver la diferencia de forma más clara, aunque estoy seguro de que lo notarás.

{{< image
src="https://drive.google.com/thumbnail?id=1yC1UM31T0MKutqdtAOMvqudPJXHo21Eb&sz=w1106-h799"
alt="Install fonts config"
style="width: auto; border-radius: 10px;" >}}

Por mi parte te puedo decir que el resultado me ha dejado bastante satisfecho, te dejo una captura de pantalla para que observes las diferencias, a la izquierda es después del script y a la derecha es previo al script.

{{< image
src="https://drive.google.com/thumbnail?id=1lj9Wo-QUyvCyNw8V2Gsb9YXQYt8gCfwp&sz=w1920-h1080"
alt="Rendering comparision"
style="width: auto; border-radius: 10px;" >}}

Y ya por último, si no te convence el resultado, puedes ejecutar el siguiente comando para revertir los cambios y de nuevo, solo sería cuestión de reiniciar tu equipo para tener todo como antes.

```bash
sudo ./lucidglyph.sh remove
```
