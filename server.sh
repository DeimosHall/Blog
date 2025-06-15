#!/bin/bash

# export IPADDR="$(ifconfig getifaddr en0)"
export IPADDR="$(ip -4 addr show wlp0s26u1u3 | grep -oP '(?<=inet\s)\d+(\.\d+){3}')"
hugo server --buildDrafts --bind $IPADDR --baseURL http://$IPADDR
