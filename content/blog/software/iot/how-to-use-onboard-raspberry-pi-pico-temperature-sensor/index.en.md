---
title: "How to Use Onboard Raspberry Pi Pico Temperature Sensor (Arduino)"
date: 2023-07-16T09:26:04-06:00
author: Francisco Torres
draft: false
section: "post"
cover: "https://drive.google.com/uc?id=1ZNP418VFB99iqKQsX6tdW-edU0IIxBWF"
useRelativeCover: false
CoverCaption: "Photo by [Vishnu Mohanan](https://unsplash.com/@vishnumaiea) on [Unsplash](https://unsplash.com/photos/yC_7U1g3Kvs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
toc: false
showReadingTime: true
---

Some days ago, I tried to use the onboard temperature sensor of the Raspberry Pi Pico using Arduino, but I only found tutorials for [MicroPyhon](https://micropython.org/). Affortunately, I found a Github issue where someone answered how to do it. So, I decided to create a library based on that code and I want to share it with you. The issue is [here](https://github.com/arduino/ArduinoCore-mbed/issues/220).

> Consider giving a star to the repository if you find it useful. You can find it [here](https://github.com/DeimosHall/RP2040_CPU_Temperature.git).

## Install the library

You can use the `Arduino Library Manager` or `arduino-cli` to install it.

### Using Arduino Library Manager

Open the Arduino IDE and go to `Tools > Manage Libraries...`. Then, search for `Raspberry Pi Pico CPU Temperature` and install it.

{{< image
src="https://drive.google.com/uc?id=1ZG2t1zKKDULl7VR4oRaI1XLKpQ_ms2df"
alt="General project"
style="width: auto; border-radius: 10px;" >}}

### Using arduino-cli

Open a terminal and run the following command:

```bash
arduino-cli lib install "Raspberry Pi Pico CPU Temperature"
```

## Usage

You can open the example from `File > Examples > Raspberry Pi Pico CPU Temperature > Test`.

{{< image
src="https://drive.google.com/uc?id=1fm8urVMNbRJHwF8njf4NXfsY0xiSm10k"
alt="General project"
style="width: auto; border-radius: 10px;" >}}

If you use `arduino-cli` you can run the following command to see the example path to open it manually:

```bash
❯ arduino-cli lib examples 'Raspberry Pi Pico CPU Temperature'
Examples for library Raspberry Pi Pico CPU Temperature
  - /Users/deimos/Documents/Arduino/libraries/Raspberry_Pi_Pico_CPU_Temperature/examples/Test
```

The example is the following:

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

Upload the code to your Raspberry Pi Pico and open the serial monitor. You should see something like this:

{{< image
src="https://drive.google.com/uc?id=1O0ElexxW_0ptBGBBbSWEK80T8AqSY83-"
alt="General project"
style="width: auto; border-radius: 10px;" >}}

> Consider giving a star to the repository if you find it useful. You can find it [here](https://github.com/DeimosHall/RP2040_CPU_Temperature.git).