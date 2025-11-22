#!/bin/bash

BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)
BATTERY_CAPACITY=$(cat /sys/class/power_supply/BAT0/capacity)
AC_ONLINE=$(cat /sys/class/power_supply/AC/online)

# Define icons (Nerd Font)
CHARGING_ICON=""
FULL_ICON="" # Battery full icon
DISCHARGING_ICONS=("" "" "" "" "") # 0-20, 21-40, 41-60, 61-80, 81-100

# Determine discharging icon based on capacity
get_discharging_icon() {
    if (( BATTERY_CAPACITY <= 20 )); then
        echo ${DISCHARGING_ICONS[0]}
    elif (( BATTERY_CAPACITY <= 40 )); then
        echo ${DISCHARGING_ICONS[1]}
    elif (( BATTERY_CAPACITY <= 60 )); then
        echo ${DISCHARGING_ICONS[2]}
    elif (( BATTERY_CAPACITY <= 80 )); then
        echo ${DISCHARGING_ICONS[3]}
    else
        echo ${DISCHARGING_ICONS[4]}
    fi
}

if [[ "$AC_ONLINE" == "1" ]]; then
    if (( BATTERY_CAPACITY < 98 )); then
        echo "Charging ${CHARGING_ICON} ${BATTERY_CAPACITY}%"
    else
        echo "Full ${FULL_ICON} ${BATTERY_CAPACITY}%"
    fi
else
    DIS_ICON=$(get_discharging_icon)
    echo "Discharging ${DIS_ICON} ${BATTERY_CAPACITY}%"
fi
