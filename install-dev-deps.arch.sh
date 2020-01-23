#!/bin/bash

# PHP
if ! command -v php &> /dev/null; then
    echo Installing PHP...
    sudo pacman -S --noconfirm php
else
    echo PHP is already installed
fi

# php-gd
if ! pacman -Qi php-gd &> /dev/null; then
    echo Installing php-gd...
    sudo pacman -S --noconfirm php-gd
else
    echo php-gd is already installed
fi

echo Enabling php-gd...
sudo vim +/extension=gd -c "s/;//" -c "wq" /etc/php/php.ini

# sass
if ! command -v sass &> /dev/null; then
    echo Installing sass...
    yay -S --noconfirm dart-sass
else
    echo sass is already installed
fi
