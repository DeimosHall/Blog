---
title: 
date: 2025-07-07T10:55:30-06:00
author: Francisco Torres
showAuthor: true
draft: false
section: post
cover: 
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

Escribir aquí

```bash
sudo cat /boot/grub2/grub.cfg
```

```bash
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
```

```bash
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

```bash
Generating grub configuration file ...
Found Windows Boot Manager on /dev/sda1@/EFI/Microsoft/Boot/bootmgfw.efi
Adding boot menu entry for UEFI Firmware Settings ...
done
```
