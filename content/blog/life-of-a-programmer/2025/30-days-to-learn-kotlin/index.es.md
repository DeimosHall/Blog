---
title: 30 días para aprender Kotlin
date: 2025-07-26T10:07:59-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1Gz2XdGuP5JQilF_M9uafys7T4FE9uJ93&sz=w1280-h720
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Durante los últimos 2 años y 8 meses he estado trabajando como desarrollador de firmware, lo que se traduce a programar con C y C++ la mayor parte del tiempo. No puedo decir que me disgustan estos lenguajes, pero ciertamente ya no lo disfruto como al comienzo. De hecho, ahora que recuerdo, en mis primeros meses prefería trabajar con C++ por sobre C y hoy en día es todo lo contrario. Pero todo tiene un comienzo y un fin y mi último día como desarrollador de firmware se acerca a su fin.

## ¿Por qué Kotlin?

No diría que yo elegí Kotlin, por el contrario, Kotlin me eligió a mí. Hay un transfondo del por qué digo esto, pero por el momento no puedo explicarlo, solo puedo decir que probablemente para septiembre de este año 2025 tenga la oportunidad de unirme a un proyecto y para ello necesito saber programar en Kotlin.

No lo hago por presión, Kotlin me gusta. Lo tengo en mi CV y me parece que también en mi desactualizada sección de acerca de en mi blog. Solo espero que la persona que me hablo para esta oportunidad no se enteré que no he tocado una sola línea de Kotlin en años.

## Volver a aprender

En el título puse aprender, pero en realidad sería practicar y familiarizarme con lo nuevo que hay a día de hoy. He desarrollado un par de apps móviles por gusto personal, aunque ninguna de ellas están vivas a día de hoy, ya sea porque su único propósito era aprender algo en concreto o porque la idea detrás del proyecto me dejo de llamar la atención.

Profesionalmente no tengo experiencia ni con Kotlin ni con nada de móvil, pero sí tengo la experiencia de trabajar en equipo y todo lo que ello conlleva. Sé cómo comenzar un proyecto desde cero y también como integrarme a uno ya existente. No tengo miedo de romper algo en un proyecto, esta Git para salvarme de esos problemas. Lo único en lo que tengo que concentrarme es en ser lo suficientemente competente en Kotlin y demás tecnologías móviles relacionadas.

Mi enfoque en el siguiente mes será crear proyectos que lleve a producción, en este caso eso significará publicar en la Play Store, aunque puede que también a otras tiendas como F-Droid. Si bien sé que no podré crear proyectos muy complejos y quizá sean poco interesantes para el público general, no es algo que me desmotive. En todo caso por lo menos construiré cosas que me serán de utilidad a mí y posiblemente a alguna persona más.

## Mis proyectos

### Memento Mori

Desde hace como un año me surgió la idea de crear una app que muestre información como en la imagen de abajo. 

{{< image
src="https://drive.google.com/thumbnail?id=1TwOOV9NhsYQzCbJMS-mqONtF2XyHPyi1&sz=w727-h495"
alt="Memento Mori"
style="width: auto; border-radius: 10px;" >}}

La idea me surgió de una ocasión en la que di una pequeña charla en mi actual trabajo sobre cómo desperdiciamos nuestra vida, fue como resultado de un evento de convivencia. El punto es que por esos días me surgió la idea de crear una app móvil que le muestre este tipo de información al usuario y le de la posibilidad de crear widgets.

De momento se me ocurre que los cálculos los haga la aplicación en base a un cuestionario inicial que se le haga al usuario acerca de aspectos importantes de su vida como el tiempo de sueño y trabajo.

### Historial de precios Italika

Otro proyecto que tengo en mente es una aplicación que muestre el historio de precios de motocicletas de Elektra. Como contexto, Elektra es una empresa mexicana que tiene tiendas alrededor de todo el país. Venden mucha variedad de productos, desde electrodomésticos, ropa, calzado, electrónica de consumo como smartphones y laptops y sí, también motocicletas.

Si como yo perteneces a la clase baja de este país muy seguramente haya pasado por tu mente adquirir una motocicleta como medio de transporte. Yo estimo que la gran mayoría de personas que compran en Elektra lo hacen a crédito, aunque por supuesto que también hay quienes tienen la posibilidad de ahorrar y comprar al contado. Sea cual sea el caso, mi intención es crear una app que muestre un historial de precios para que así puedan decidir si es buen momento para comprar o por el contrario esperar a un período en el que tipicamente bajen de precio.

Para ello ya cuento con un script en Python que hace web scrapping y me guarda la información que necesito en una base de datos, por lo que solo tendría que refinar esa parte y desarrollar una app móvil para mostrar esa info al usuario.

Por su naturaleza creo que podría monetizar este proyecto, así que muy probablemente este no lo haga open source.

### Obtener link a imágenes en Google Drive

Las imágenes que uso en mi blog están en una cuenta de Google, pero para poder usarlas es necesario convertir el link que te da Drive cuando haces clic en compartir a uno con el siguiente formato:

{{< code language="bash" >}}  
https://drive.google.com/thumbnail?id=1Ywch0u98AiuH72W26myeKIeJLgB5GtBM&sz=w1158-h404
{{< /code >}}

Donde lo importante a considerar es el uso de la palabra `thumbnail`, el `id` y el tamaño de la imagen al final como `w1158-h404`.

Mi idea es que la app reciba un link a una imagen tal cual como Drive la genera y le regrese al usuario el link adaptado para poder ser embebida en código.

### Contador de palabras

Ya por último, un contador de palabras es algo en principio super básico y muy poco útil. Yo particularmente sí me he visto en la necesidad de una herramienta como esta, no muy frecuentemente he de admitirlo. Pero sí que la he necesitado y siempre termino en páginas web para ello.

Este será mi punto de partida ya que no quiero complicarme la vida con los dos primeros proyectos que mencione previamente porque que considero tienen un grado de dificultad bastante más grande que este proyecto. Mi intención es comenzar lo antes posible y mientras menos fricción tenga mejor, no quiero algo super complejo de desarrollar que me tome mucho tiempo, porque como ya mencione, quiero subir mis proyectos a la Play Store y un comienzo rápido alimentará mis ganas de continuar.