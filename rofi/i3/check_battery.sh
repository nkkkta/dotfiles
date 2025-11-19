#!/bin/bash

while true; do
    battery_level=$(cat /sys/class/power_supply/BAT0/capacity)
    battery_status=$(cat /sys/class/power_supply/BAT0/status)

    if [ "$battery_status" = "Discharging" ] && [ "$battery_level" -le 20 ]; then
        notify-send -u critical "Low Battery" "Left ${battery_level}%!"
    fi

    sleep 300 # Проверка каждые 5 минут
done
