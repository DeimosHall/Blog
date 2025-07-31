---
title: GRUB no detecta Windows
date: 2025-07-07T10:55:30-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=10cmLuW2fvrO9ahI-VSElxfw23QPhj6Gv&sz=w4096-h2304
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Si hemos instalado Linux lo primero que veremos al encender nuestra PC es el GRUB, ese programita que nos permite elegir el sistema operativo en el que queremos iniciar. En mi caso en particular fui acumulando inconsistencias en el grub, me aparecía una instalación de Ubuntu que ya no existía, varias versiones del kernel para Fedora y para mi sorpresa cuando volví a instalar Windows este no aparecía.

En un principio no le dí mucha importancia a ese problema, ya que casi no uso Windows, pero aún así era un poco molesto tener que cambiar la opción de boot en la BIOS cada vez que lo necesitaba. Así que si estás en un problema similar al mío, donde por ejemplo hayas instalado Windows después de Linux, déjame mostrarte la solución.

Antes de comenzar podemos verificar el estado actual del grub con el siguiente comando

{{< code language="bash" >}}  
sudo cat /boot/grub2/grub.cfg
{{< /code >}}

En mi caso y como ya había mencionado, me aparece una vieja instalación de Ubuntu que actualmente es inexistente:

{{< code language="bash" >}}  
### BEGIN /etc/grub.d/30_os-prober ###
	menuentry 'Ubuntu (on /dev/sdb2)' --class gnu-linux --class gnu --class os $menuentry_id_option 'osprober-gnulinux-/boot/vmlinuz-6.11.0-25-generic--83d7b3d4-4bcb-480b-af27-d7d99da4de20' {
		insmod part_gpt
		insmod ext2
		set root='hd1,gpt2'
		if [ x$feature_platform_search_hint = xy ]; then
		  search --no-floppy --fs-uuid --set=root --hint-bios=hd1,gpt2 --hint-efi=hd1,gpt2 --hint-baremetal=ahci1,gpt2  83d7b3d4-4bcb-480b-af27-d7d99da4de20
		else
		  search --no-floppy --fs-uuid --set=root 83d7b3d4-4bcb-480b-af27-d7d99da4de20
		fi
		linux /boot/vmlinuz-6.11.0-25-generic root=UUID=83d7b3d4-4bcb-480b-af27-d7d99da4de20 ro quiet splash $vt_handoff
		initrd /boot/initrd.img-6.11.0-25-generic
	}
{{< /code >}}

Para corregir este problema solo necesitamos actualizar las entradas del grub con el siguiente comando:

{{< code language="bash" >}}  
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
{{< /code >}}

Y para mi suerte con esto fue suficiente para resolver mi problema, me dice que encontró mi instalación de Windows:

{{< code language="bash" >}}  
Generating grub configuration file ...
Found Windows Boot Manager on /dev/sda1@/EFI/Microsoft/Boot/bootmgfw.efi
Adding boot menu entry for UEFI Firmware Settings ...
done
{{< /code >}}

Ahora solo es cuestión de reiniciar y listo, grub recién actualizado.