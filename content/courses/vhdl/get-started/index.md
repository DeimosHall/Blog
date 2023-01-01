---
title: "Get Started"
date: 2022-12-31T14:01:13-06:00
author: Francisco Torres
draft: false
section: "post"
cover: ""
useRelativeCover: true
CoverCaption: ""
toc: false
showReadingTime: false
---

Hello friends! This is a practical course about VHDL. Don't expect boring theory, we're going to learn by making examples. I'm going to use the Cyclone II FPGA beacuse it's cheap and easy to get, but you can use the board you want because the VHDL language doesn't change.

## Installing Quartus II

Quartus II is the embedded systems design software we need to work with the Cyclone II FPGA. We can dowload it from the Intel's page by searching "Quartus II" or you can click on [this link](https://www.intel.com/content/www/us/en/software-kit/711791/intel-quartus-ii-web-edition-design-software-version-13-0sp1-for-windows.html).

{{< figure
src="https://drive.google.com/uc?id=1AZd6Uz13sRbPODCKTHSWfN93ikM9_CLX"
alt="Search Quartus II"
caption="Search Quartus II" >}}

Make sure to select the 13.Osp1 version. Go to the downloads section and select "Individual Files".

{{< figure
src="https://drive.google.com/uc?id=1ecm57AMpfaF18XHhBLqDQDRqZc6Nx7W7"
alt="Select the version"
caption="Select the version" >}}

The files we need to download are the ModelSimSetup, the QuartusSetupWeb and the package according to your board, in my case is the Cyclone II.

{{< figure
src="https://drive.google.com/uc?id=11WvRZSTdn81TpPyoWiY664AN53WAXEUM"
alt="Downloads section"
caption="Individual files section" >}}

Once we have the files downloaded, we need to run QuartusSetupWeb as administrator.

{{< figure
src="https://drive.google.com/uc?id=1xECGZtqBOZNsrmy4BvSYouLlFQKLTAGz"
alt="Run QuartusSetupWeb"
caption="Run QuartusSetupWeb" >}}

We need to click on next several times, accept the terms and conditions, select a directory to install the program, select all the components we want to install and continue clicking on next until finish the process.

{{< figure
src="https://drive.google.com/uc?id=1d477YiZEzTLoK2YD6sMXuCTVaqzzIZwc"
alt="Setup - Quartus II Web Edition"
caption="Setup - Quartus II Web Edition" >}}

{{< figure
src="https://drive.google.com/uc?id=13b2KvROXeuO1JIu_sQ2RdByezIW5lMRq"
alt="Accept terms and conditions"
caption="Accept the terms and conditions" >}}

{{< figure
src="https://drive.google.com/uc?id=1a--OE9bZp3sltZmqHcb0XmjTKaTy_dmu"
alt="Select a directory to install the program"
caption="Select a directory to install the program" >}}

{{< figure
src="https://drive.google.com/uc?id=10pBglmZn4LEI5w5DZEEmPi52bODwmyB3"
alt="Select the components"
caption="Select the components" >}}

{{< figure
src="https://drive.google.com/uc?id=1ccjdohdG8cwRudpLGb4DGSrYEk-EK1k9"
alt="Click on next when" >}}