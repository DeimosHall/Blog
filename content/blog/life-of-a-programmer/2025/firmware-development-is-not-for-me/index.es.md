---
title: El desarrollo de firmware no es para mí
date: 2025-08-16T17:08:06-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=105jOxOFphuQFif7l0sO-b_37skf0X_IM&sz=w1920-h1080
useRelativeCover: false
CoverCaption:
toc: false
showReadingTime: true
---

Ayer fue mi último día como ingeniero de firmware. Estuve en ese puesto por poco más de dos años o casi tres si cuento mi tiempo como practicante, pero a pesar de que lo disfrutaba ya fue momento para mí de decirle adiós.

Yo estudié ingeniería Electrónica, así que de cierta forma se podría decir que sí que estuve ejerciendo mi profesión durante este tiempo, aunque sinceramente me gusta más la programación que el diseño de circuitos o cualquier otra cosa que se supone que tenga que hacer un ingeniero electrónico.

Como muchos otros cuando elegí mi carrera universitaria lo hice de forma vaga y sin pensar mucho en el futuro, solo me dije a mí mismo "hey, me gustó un proyecto en la prepa que hice con Arduino, creo que voy a estudiar ingeniería electrónica". Jamás me detuve a revisar detenidamente la matrícula de la carrera para ver las asignaturas que tomaría y ver si realmente me interesaba o siquiera para evaluar mi otra opción en su momento, que era ingeniería en sistemas computacionales.

Al final me terminé decidiendo por electrónica principalmente porque había rumores de que la carrera de sistemas era muy demanda y no quería tener grandes oportunidades de quedarme fuera de la universidad por no ser lo suficientemente competente frente al resto en el examen de admisión. Electrónica por el contrario luchaba y creo que sigue luchando por llamar la atención de suficientes alumnos, al menos eso en mi experiencia y en mi universidad, así que tomé mi decisión y todo salió bien.

Para ser honesto, yo nunca tuve la intención de ejercer la carrera de ingeniero en electrónica. Mi meta era únicamente hacerme con un título universitario y trabajar como programador. Por esos años ya había comenzado a consumir contenido en redes sociales sobre programación y recuerdo que era muy popular la idea de que se podía ser contratado sin siquiera tener título y lo pintaban como algo muy fácil. Es por eso que mi elección de carrera fue algo que según yo me gustaba lo suficiente como para tomarlo como hobby y al mismo tiempo ir aprendiendo programación por mi cuenta.

Era un plan infalible según mi yo adolescente, pero la realidad es que viéndolo en retrospectiva ese plan casi se arruina durante la pandemia del covid 19. Por ese entonces estuve muy cerca de tirar la toalla y salirme de la universidad, más que nada por temas de expectativas no cumplidas, pero creo que eso daría para contarlo en otra ocasión.

El punto es que sí conseguí trabajo como desarrollador pero creo que el factor suerte jugó un papel muy importante. Ahora mismo pienso en tantas coincidencias y situaciones bizarras que de no haber ocurrido o de haber ocurrido de manera diferente no me habrían permitido llegar hasta este momento de mi vida.

Durante mi instancia en la carrera lo que más disfruté fueron las asignaturas relacionadas al desarrollo de software embebido, osea programar microcontroladores en C y C++. Los primeros meses o incluso el primer año en mi trabajo también estuve muy entusiasmado por ello. Disfrutaba un montón cada proyecto y sentía que estaba aprendiendo mucho.

En un principio me tocó trabajar con proyectos que estaban hechos en Arduino (sí Arduino se usa en la industria para aquellos quienes lo desprecian). Esto se traduce básicamente a trabajar con C++ pero con el añadido de la API de Arduino y un ecosistema bastante grande y amigable de bibliotecas creadas por la comunidad. Recuerdo muy bien que en ese momento tenía una gran preferencia por C++ en comparación con C, supongo que era por la gran cantidad de abstracciones que tiene C++ que facilitan manejar tipos de datos complejos con clases, además de cosas como los vectores y el propio ecosistemas de bibliotecas de Arduino.

El tiempo fue pasando y poco a poco me fui introduciendo en proyectos que requerían solamente de C como lenguaje de programación. No estaba muy feliz al comienzo pero tenía que hacerlo. Justo ahora no recuerdo cuál fue ese primer proyecto con C, pero sí recuerdo a cual le dedique más tiempo. Ese proyecto lo comencé yo mismo usando el framework ESP-IDF de Espressif, el fabricante de los famosos ESP32.

En mi lista mental tengo los siguientes SDK/Frameworks con los que trabajé:

- Arduino
- ESP-IDF
- Micropython
- Raspberry Pi Pico C/C++ SDK
- Puya SDK
- WCH con ch32fun y MounRiver Studio

Lamentablemente solo puedo decir que me gustaron los primeros dos y es aquí donde comienzan mis quejas.

Quiero empezar con Micropython porque para empezar Python no me gusta. Lo más gracioso es que si me preguntas por qué la verdad es que no te sabría dar un motivo en concreto, simplemente no me convence su sintaxis, la forma en la que se programa y lo muy orientado a scripts que es. Si a ti te gusta, disfrútalo y no te sientas ofendido por lo que un random diga en internet.

Del resto de la lista creo que sin querer los puse en orden en que menos me disgustaron comenzando de arriba hacia abajo. La API que provee el SDK para trabajar con las Raspberry Pi Pico me parece muy buena, en ese sentido no tengo mayores quejas. De los últimos dos por el contrario me parece que están muy mal hechas para mi gusto personal, comenzando por pequeños detalles como por ejemplo que usan una especie de pascal case que me resulta muy desagradable de leer (`void This_Is_A_Function();`) o también el propio diseño de la API y que no provean explicaciones claras del cómo funciona lo que hacen.

Sin embargo, los frameworks y SDK no eran la peor parte ya que podía meter mis wrappers y solucionar los inconvenientes que tuviera con ellos. El verdadero problema era el resto de firmware ya existente y que tenía que usar como base para construir los proyectos. Por el resto del firmware me refiero a muchos proyectos open source de bibliotecas o de ejemplos sobre cómo hacer o usar algo. Y es que de verdad no quisiera tener que decir esto, pero mucho de este firmware esta mal hecho y no porque no funcione, sino porque es difícil de entender o incluso imposible si no tienes suficiente contexto.

Sobre esto quiero poner como ejemplo el uso común de llamadas de registros que para empezar en cada microcontrolador será diferente. De verdad no entiendo por qué se les hace tan complicado meter esas instrucciones en macros y ponerles un nombre descriptivo en lugar de estar adivinando o leyendo hojas de datos para saber qué es lo que hace, porque también esta el hecho de que ni siquiera le ponen comentarios a ese tipo de código explicando mínimamente algo.

Otro aspecto importante que se me viene a la mente ahora mismo es el sobre uso de variables mal nombradas. Es demasiado común encontrarte en proyectos de firmware variables tipo `crf = 39`, `ui_p = false` o `a = 1`. Así sin contexto es imposible de entender lo que significan y ese tipo de decisiones se extrapolan al proyecto en general, es por eso que digo que mucho del firmware que me he encontrado es complicado de entender y esta hecho así por malas decisiones de diseño.

En mi experiencia estos últimos años era la excepción y no la norma encontrarme con un proyecto bien hecho. No pido perfección, solo un mínimo de calidad pero lamentablemente es muy escaso. Y aclaro que tampoco creo que mi código sea perfecto, si me voy a mis comienzos veré un montón de estas cosas que hoy crítico, pero no puedo creer que mucho del firmware que me encuentro esté al nivel del trabajo de mi yo de practicante. Y de nuevo, no porque no funcione, sino porque no sigue buenas practicas en términos de calidad de código.

Aún tengo poca experiencia en este campo del firmware, capaz que aún no he entendido el verdadero transfondo del por qué se hacen las cosas así, pero lo que sí puedo decir es que no me siento cómodo programando más en este campo.

Aunado a todo esto, la verdad es que el firmware al igual que la ingeniera electrónica nunca fue mi campo de la programación favorito. Comencé mi camino en la industria de esta manera pero únicamente porque así se dieron las circunstancias y no podía desaprovechar esa primera oportunidad laboral. Sin embargo, estoy listo para darle un cambio a mi carrera y no tengo problema alguno en cambiarme de stack.

Ayer fue mi último día como ingeniero de firmware y uno de los motivos fue mi hartazgo hacia todo lo que ya mencioné. Sin embargo, aún tengo un poco de esperanza en el campo, ahora que me tomaré esto del firmware enteramente como un hobby estaré haciendo pruebas con Rust, mi lenguaje de programación favorito.

Sin más que decir, me despido. Que tengas un excelente día y recuerda ser feliz.