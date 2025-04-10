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

Agregar un submódulo dentro de un directorio en específico es tan fácil como navegar a ese directorio y correr el siguiente comando:

```bash
git submodule add https://github.com/hextreeio/faultier.git
```

> Si quisiéramos ese submódulo en la raíz del proyecto simplemente tendríamos que hacerlo en la raíz

Si quisiera que el nombre del directorio generado fuera diferente a `faultier` que es el que se generaría por el propio nombre del repositorio, tendría que hacerlo agregando como opción al final

```bash
git submodule add https://github.com/hextreeio/faultier.git other_dir_name
```

## Submódulo con submódulos

Si el submódulo que agregamos tiene submódulos como dependencias, lo que tenemos que hacer es lo siguiente:

1. Navegar dentro dentro del submodulo, para el ejemplo:

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
