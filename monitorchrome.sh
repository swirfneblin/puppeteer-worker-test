#!/bin/bash
while :
do
    echo "[$(date)] => ($(ps -aux | grep chrome | wc -l))"
    sleep 2
done