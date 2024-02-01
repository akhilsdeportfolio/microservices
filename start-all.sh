#!/bin/bash

declare -a apps=("auth" "orders")

for app in "${apps[@]}"; do
    cd "apps/$app"
    yarn start &
    cd ../../
done

echo ${pwd}

wait