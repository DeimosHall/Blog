#!/bin/bash

export IPADDR="$(ifconfig getifaddr en0)"
hugo server --buildDrafts --bind $IPADDR --baseURL http://$IPADDR
