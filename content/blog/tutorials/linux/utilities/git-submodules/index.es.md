---
title: "Agregar submódulos de Git"
date: 2025-04-10T13:49:32-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: "post"
cover: "https://drive.google.com/thumbnail?id=1LFMfvG5XnwbviXFCeyXmrxqZoz1frSqM&sz=w1920"
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

> Este post no fue escrito por ningún modelo de inteligencia artificial

Algunas veces cuando queremos agregar otro repositorio de git a nuestro proyecto para usarlo como dependencia, tenemos una estructura de directorios que necesita tenerlo dentro de un directorio en específico. Por ejemplo, digamos que tenemos algo como esto:

```bash
.
├── lib
│  └── our_submodule_should_be_here
└── src
   └── main.c
```

Así que sólo tenemos que ir a ese directorio, por ejemplo:

```bash
cd project/lib/
```

Y luego ejecutar el siguiente comando, reemplazando el repositorio que queremos por supuesto.

```bash
git submodule add https://github.com/hextreeio/faultier.git
```

> Si quisiéramos ese submódulo en la raíz del proyecto simplemente tendríamos que hacerlo en la raíz

Si quisieras que el nombre del directorio generado fuera diferente a `faultier` que es el que se generaría por el propio nombre del repositorio, tendrías que hacerlo agregando como opción al final

```bash
git submodule add https://github.com/hextreeio/faultier.git other_dir_name
```

## Submódulo con submódulos

Si el submódulo que agregamos tiene submódulos como dependencias, lo que tenemos que hacer es lo siguiente:

1. Navegar dentro del submodulo, para el ejemplo:

```bash
cd faultier/
```

2. Registrar los submódulos

```bash
git submodule init
```

3. Actualizar los submódulos

```bash
git submodule update
```

Tendríamos algo como lo siguiente:

```bash
❯ git submodule init
Submodule 'nanopb' (https://github.com/nanopb/nanopb.git) registered for path 'nanopb'

faultier on main via C v16.0.0-clang via △ v3.30.3
❯ git submodule update
Cloning into '/Users/deimos/dev/embedded/electronic_cats/faultycat/firmware/c/faultier/nanopb'...
Submodule path 'nanopb': checked out 'e34dfae6f1aeb87cbe1c05a8fb96f5b9cb1034f6'
```
