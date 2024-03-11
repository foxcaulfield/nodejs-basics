i=0 &&
    while true; do
        ((i++))
        clear
        curl localhost:3000 -v
        echo "attempt $i"
        sleep 2
    done
