---
title: Cómo usar el sensor de temperatura de la Raspberry Pi Pico (Arduino)
date: 2023-07-16T09:26:04-06:00
author: Francisco Torres
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=1ND-zzDajLqE2C5KgI2w9YjaS2vZOtJDE&sz=w1920-h1080
useRelativeCover: false
CoverCaption: Imagen por [Vishnu Mohanan](https://unsplash.com/@vishnumaiea) en [Unsplash](https://unsplash.com/photos/yC_7U1g3Kvs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
toc: false
showReadingTime: true
---

Hace unos días, intenté usar el sensor de temperatura de la Raspberry Pi Pico usando Arduino, pero solo encontré tutoriales para [MicroPython](https://micropython.org/). Afortunadamente, encontré un issue de Github donde alguien respondió cómo hacerlo. Así que decidí crear una biblioteca basada en ese código y quiero compartirla contigo. El issue está [aquí](https://github.com/arduino/ArduinoCore-mbed/issues/220).

> Considera darle una estrella al repositorio si te resulta útil. Puedes encontrarlo [aquí](https://github.com/DeimosHall/RP2040_CPU_Temperature.git).

## Instala la biblioteca

Puedes usar el `Administrador de bibliotecas de Arduino` o `arduino-cli` para instalarla.

### Usando el Administrador de bibliotecas de Arduino

Abre el IDE de Arduino y ve a `Herramientas > Gestionar bibliotecas...`. Luego, busca `Raspberry Pi Pico CPU Temperature` e instálala.

{{< image
src="https://drive.google.com/thumbnail?id=1H_NdqWupL5Agr6qBTxb4vLkS4YhO8Ee9&sz=w366-h288"
alt="Library manager"
style="width: auto; border-radius: 10px;" >}}

### Usando arduino-cli

Abre una terminal y ejecuta el siguiente comando:

```bash
arduino-cli lib install "Raspberry Pi Pico CPU Temperature"
```

## Uso

Puedes abrir el ejemplo desde `Archivo > Ejemplos > Raspberry Pi Pico CPU Temperature > Test`.

{{< image
src="https://drive.google.com/thumbnail?id=1JWSXMZxERewZmidVlQ_zgKYE9l6AS0Mc&sz=w1017-h1057"
alt="Open example"
style="width: auto; border-radius: 10px;" >}}

Si usas `arduino-cli` puedes ejecutar el siguiente comando para ver la ruta del ejemplo y abrirlo manualmente:

```bash
❯ arduino-cli lib examples 'Raspberry Pi Pico CPU Temperature'
Examples for library Raspberry Pi Pico CPU Temperature
  - /Users/deimos/Documents/Arduino/libraries/Raspberry_Pi_Pico_CPU_Temperature/examples/Test
```

El ejemplo es el siguiente:

```cpp
/*
 * Test sketch for the RP2040 CPU temperature sensor library
 * Author: Francisco Torres (deimoshall.dev)
 * Date: July 2023
 * License: MIT
 * Repository: https://github.com/DeimosHall/RP2040_CPU_Temperature.git
*/

#include <CPU.h>  // Include the library to use the CPU temperature sensor

CPU cpu;  // Create an instance of the CPU temperature sensor

void setup() {
  Serial.begin(9600);
  cpu.begin();  // Initialize the CPU temperature sensor
}

void loop() {
  // Print the CPU temperature in Celsius
  Serial.println("CPU temperature: " + String(cpu.getTemperature()) + " °C");
  delay(1000);
}
```

Sube el código a tu Raspberry Pi Pico y abre el monitor serial. Deberías ver algo como esto:

{{< image
src="https://drive.google.com/thumbnail?id=10YQnFr3fifY-PWX48gXFbAsz5uYVMciG&sz=w576-h368"
alt="Serial monitor"
style="width: auto; border-radius: 10px;" >}}

> Considera darle una estrella al repositorio si te resulta útil. Puedes encontrarlo [aquí](https://github.com/DeimosHall/RP2040_CPU_Temperature.git).