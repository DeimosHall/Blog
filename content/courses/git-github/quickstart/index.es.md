---
title: "Configuración de Git"
date: 2023-04-19T09:20:38-06:00
author: Francisco Torres
draft: false
section: "post"
cover: ""
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Git necesita conocer tu nombre y tu correo para poder vincularlos a los commits que vayas creando. Para configurar tu nombre puedes usar el siguiente comando, reemplaza `deimos` por tu nombre de usuario, no tiene que ser tu nombre real.

{{< code language="bash" >}}
git config --global user.name "deimos"
{{< /code >}}

Para configurar tu correo puedes hacerlo de esta manera:

{{< code language="bash" >}}
git config --global user.email "deimoshall@gmail.com"
{{< /code >}}

Puedes elegir el editor de tu preferencia para el momento en que vayas a escribir los mensajes para los commits, yo te recomiendo `nano` ya que es fácil de utilizar, pero si gustas puedes utilizar `vim`, `vscode` o el editor de tu preferencia.

{{< code language="bash" >}}
git config --global core.editor nano
{{< /code >}}

Es practicamente un hecho que en algún punto de nuestras vidas vamos a trabajar en equipos con personas que usen diferentes sistemas operativos, típicamente `Windows`, `Linux` o `Mac`. Linux y Mac comparten muchas características entre sí y ambos difieren en algunas cosas con Windows. Una de ellas es la manera en la que guardan el salto de línea, no nos vamos a meter muy en profundidad en eso, pero Windows lo maneja como `\r\n`, mientras que Linux y Mac como `\n`. Git puede manejar esto siempre y cuando le digamos cómo.

Para configuar el salto de línea en Windows.

{{< code language="bash" >}}
git config --global core.autocrlf true
{{< /code >}}

Para configurar el salto de línea en Linux y Mac.

{{< code language="bash" >}}
git config --global core.autocrlf input
{{< /code >}}

Podemos configurar el nombre de la rama por defecto que se crea cuando iniciamos un nuevo repositorio. Hoy en día, la mayoría de los repositorios se crean con la rama `main` por defecto. Para lograr esto, podemos configuarlo de la siguiente manera:

{{< code language="bash" >}}
git config --global init.defaultBranch main
{{< /code >}}

Finalmente, una configuración que personalmente me ahorra mucho tiempo es guardar las credenciales como mi nombre de usuario y el `token` de acceso a mi cuenta de GitHub de forma local. Más adelante veremos esto del token cuando creemos nuestra cuenta de Github, mientas tanto, el comando para guardar estas configuraciones es el siguiente:

{{< code language="bash" >}}
git config --global credential.helper store
{{< /code >}}